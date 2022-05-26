/* jshint esversion: 6 */
console.clear();

const Recipes = {
    recipe1:
    {
        id: 1,
        name: "Mama's Best Chicken",
        ingredients: {
            ingredient_1: "boned chicken",
            ingredient_2: "sauce"
        }
    },
    recipe2:
    {
        id: 2,
        name: "Mama's Best Hot Dogs",
        ingredients: {
            ingredient_1: "Hot Dogs",
            ingredient_2: "sauce",
            ingredient_3: "buns"
        }
    }
}

let values = Object.values(Recipes);
console.log(Recipes.recipe.id);
