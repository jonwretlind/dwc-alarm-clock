console.clear();

let Recipes = {
    id: 1,
    recipe: {
        name: "Mama's Best Chicken",
        ingredients: {
            ingredient_1: "boned chicken",
            ingredient_2: "sauce"
        }
    },
    id: 2,
    recipe: {
        name: "Mama's Best HotDoge",
        ingredients: {
            ingredient_1: "hotdogs",
            ingredient_2: "buns"
        }
    }
};

let myRecipe = Object.values(Recipes);
console.log(myRecipe);