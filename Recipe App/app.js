

// // IIFE Immediately invoked function Expressions
// (async function () {
//     const response = await fetch("./recipes.json");

//     const recipes = await response.json();

//     // Get Html Elements
//     const inputElem = document.getElementById("searchInput");
//     const btnElem = document.getElementById("searchBtn");
//     const listElem = document.getElementById("recipe-list");
//     const detailsElem = document.getElementById("recipeDetailsContainer");


//     // Load Recipe
//     function loadRecipeDetails(recipe) {

//         detailsElem.innerHTML = `
//           <h2 class="title">${recipe.title}</h2>
//           <h3>Ingredients:</h3>
//           <ul>${recipe.ingredients.map(function (ingredient) {
//             return "<li>" + ingredient + "</li>"
//         }).join("")}</ul>
//           <h3>Instruction:</h3>
//           <div>${recipe.instructions}</div>
//       `;

//     }


//     //Display search elements

//     function displaySearchResults(results) {

//         listElem.innerHTML = "";

//         results.forEach(function (recipe) {

//             const li = document.createElement("li");

//             const listItem = `
//             <h2 class="title">${recipe.title}</h2>
//             <div class="description">${recipe.description}</div>
//         `;

//         li.innerHTML = listItem;
//             li.addEventListener("click", function () {
//                 loadRecipeDetails(recipe);
//             });

//             listElem.appendChild(li);

//         })
//     }

//     function search() {
//         const query = inputElem.value.toLowerCase();
//         const results = recipes.filter(function (recipe) {
//             return (recipe.title.toLowerCase().includes(query) ||
//                 recipe.ingredients.join(" ").toLowerCase().includes(query))
//         });

//         displaySearchResults(results);
//     }

//     btnElem.addEventListener("click", search);
// })();



// IIFE : Immediately Invoked Function Expression

// fetch data from json file
(async function () {
    const response = await fetch("./recipes.json")

    const recipes = await response.json() // to convert data into json format

    // Get Input element
    const inputElem = document.getElementById('searchInput')
    const btnElem = document.getElementById('searchBtn')
    const listElem = document.getElementById('recipe-list')
    const detailsElem = document.getElementById('recipeDetailsContainer')


    // Load Recipe Data

    function loadRecipeData(recipe) {

        detailsElem.innerHTML = `
            <h2 class="title">${recipe.title}</h2>
            <ul>
            ${recipe.ingredients.map(function (ingredient) {
            return "<li>" + ingredient + "</li>"
        })}.replaceAll(","," ").join("")
            </ul>
            <h3>Instruction</h3>
            <div>${recipe.instructions}</div>
            `

        console.log(recipe);
    }

    // Display Search item
    function displayRecipe(results) {
        listElem.innerHTML = "" // to remove elements

        results.forEach(function (recipe) {

            const li = document.createElement('li')

            // String Interpolation 
            const listItem = `
            <div class="title">${recipe.title}</div>
            <div class="description">${recipe.description}</div>
            `;

            li.innerHTML = listItem
            // console.log(li);

            li.addEventListener('click', function () {
                loadRecipeData(recipe)
            });

            listElem.appendChild(li)
            // lsitElem.innerHTML = li
        });
    }

    // Search Recipe
    function search() {
        const query = inputElem.value.toLowerCase();
        const result = recipes.filter((recipe) => {
            return (recipe.title.toLowerCase().includes(query) || recipe.ingredients.join(" ").toLowerCase().includes(query))

        })

        // Call display recipe
        displayRecipe(result);

    }


    btnElem.addEventListener('click', search);
    // console.log(recipes);
})(); // function which call automatically after completeing it self


// =====================================================================================================
