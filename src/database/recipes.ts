import recipe1 from "../../public/Images/recipe1.jpg"
import recipe2 from "../../public/Images/recipe2.jpg"
import recipe3 from "../../public/Images/recipe3.jpg"
import recipe4 from "../../public/Images/recipe4.jpg"
import recipe5 from "../../public/Images/recipe5.jpg"

const allRecipies = [

    {
        id: 1,
        name: "Poha",
        about: "A popular Indian breakfast dish made from flattened rice, cooked with onions, potatoes, and seasoned with spices. It's light yet flavorful!",
        ingredients: [
            "2 cups poha (flattened rice)",
            "1 large onion, chopped",
            "1 medium potato, diced",
            "2 green chilies, chopped",
            "1 teaspoon mustard seeds",
            "1/2 teaspoon turmeric powder",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh cilantro for garnish",
            "Lemon wedges for serving"
        ],
        recipeVideoLink: "https://www.youtube.com/watch?v=example",
        recipeHeroImage: recipe5,
        servings: 2,
        prepTime: "10 min",
        cookTime: "15 min",
        category: "Breakfast"
    },{
        id: 2,
        name: "Chole Bhature",
        about: "A popular North Indian dish consisting of spicy chickpeas (chole) served with deep-fried bread (bhature). Perfect for a hearty meal!",
        ingredients: [
            "1 cup chickpeas",
            "1 large onion, chopped",
            "1 large tomato, chopped",
            "1 tablespoon ginger-garlic paste",
            "1 small green chili, chopped",
            "1 teaspoon cumin seeds",
            "1 teaspoon coriander powder",
            "1 teaspoon cumin powder",
            "1 teaspoon garam masala",
            "2 tablespoons oil",
            "Salt to taste",
            "Bhature dough (2 cups)"
        ],
        recipeVideoLink: "https://www.youtube.com/watch?v=example",
        recipeHeroImage: recipe1,
        servings: "4",
        prepTime: "30 min",
        cookTime: "45 min",
        category: "Lunch"
    },{
        id: 3,
        name: "Chow Mein",
        about: "A popular Chinese stir-fried noodle dish, typically made with vegetables and meat, tossed in a savory sauce.",
        ingredients: [
            "200 grams chow mein noodles",
            "1 cup mixed vegetables (carrots, bell peppers, beans)",
            "100 grams chicken or tofu, sliced",
            "2 tablespoons soy sauce",
            "1 tablespoon oyster sauce (optional)",
            "1 teaspoon sesame oil",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, minced",
            "2 tablespoons oil",
            "Salt and pepper to taste",
            "Green onions for garnish"
        ],
        recipeVideoLink: "https://www.youtube.com/watch?v=example",
        recipeHeroImage: recipe3,
        servings: 4,
        prepTime: "15 min",
        cookTime: "20 min",
        category: "Dinner"
    },{
        id: 4,
        name: "Vegetable Biryani",
        about: "A fragrant and flavorful rice dish made with mixed vegetables, aromatic spices, and basmati rice, perfect for a hearty meal.",
        ingredients: [
            "2 cups basmati rice",
            "1 cup mixed vegetables (carrots, peas, beans, and potatoes)",
            "1 large onion, thinly sliced",
            "2 tomatoes, chopped",
            "1 tablespoon ginger-garlic paste",
            "1/2 cup yogurt",
            "2 green chilies, slit",
            "1 teaspoon cumin seeds",
            "1 teaspoon coriander powder",
            "1 teaspoon garam masala",
            "1/4 teaspoon saffron strands (optional)",
            "4 cups water",
            "2 tablespoons oil or ghee",
            "Salt to taste",
            "Fresh cilantro and mint for garnish"
        ],
        recipeVideoLink: "https://www.youtube.com/watch?v=example",
        recipeHeroImage: recipe4,
        servings: 4,
        prepTime: "30 min",
        cookTime: "1 hour",
        category: "Dinner"
    },{
        id: 5,
        name: "Samosa",
        about: "A popular Indian snack made of a crispy pastry filled with spiced potatoes and peas. Perfect as an appetizer or snack!",
        ingredients: [
            "2 cups all-purpose flour",
            "4 medium potatoes, boiled and mashed",
            "1 cup green peas, boiled",
            "1 teaspoon cumin seeds",
            "1 teaspoon coriander powder",
            "1 teaspoon garam masala",
            "2 green chilies, finely chopped",
            "2 tablespoons oil",
            "Salt to taste",
            "Water (as needed)",
            "Oil for deep frying"
        ],
        recipeVideoLink: "https://www.youtube.com/watch?v=example",
        recipeHeroImage: recipe2,
        servings: 4,
        prepTime: "20 min",
        cookTime: "30 min",
        category: "Lunch"
    }
    
    
]

export default allRecipies;