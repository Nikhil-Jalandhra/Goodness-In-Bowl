import recipe1 from "/Images/recipe1.jpg";
import recipe2 from "/Images/recipe2.jpg";
import recipe3 from "/Images/recipe3.jpg";
import recipe4 from "/Images/recipe4.jpg";
import recipe5 from "/Images/recipe5.jpg";

const allRecipies = [
    {
        id: 1,
        name: "Poha",
        about: "Poha is a beloved Indian breakfast dish made from flattened rice, which is light yet filling. It's typically cooked with onions, diced potatoes, and green chilies, seasoned with mustard seeds and turmeric. The dish is garnished with fresh cilantro and served with lemon wedges for a burst of flavor, making it a perfect way to start your day.",
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
        recipeHeroImage: recipe1,
        recipeHeroImage2: "",
        servings: 4,
        prepTime: "10 min",
        cookTime: "15 min",
        category: "Breakfast",
        nutrients: {
            "Calories": "440",
            "Protein": "8g",
            "Carbs": "90g",
            "Sodium": "600mg",
            "Fat": "10g",
        },
        instructions: {
            "Prepare Poha": "Rinse the poha gently in water 2-3 times and drain completely. Let it sit for 5 minutes to soften.",
            "Cook Potatoes and Peanuts (Optional)": "Heat oil in a pan. Add diced potatoes and cook until golden brown. If using peanuts, add them and roast until crunchy. Remove and set aside.",
            "Tempering": "In the same pan, add mustard seeds and cumin seeds. Once they start to splutter, add chopped green chilies, curry leaves, and onions. Sauté until the onions turn translucent.",
            "Add Turmeric": "Add turmeric powder and mix well for about 30 seconds.",
            "Mix Poha": "Gently add the soaked poha, cooked potatoes, peanuts, sugar, and salt. Stir everything gently to coat the poha with spices. Cook for 2-3 minutes on low heat.",
            "Finish": "Turn off the heat and add lemon juice. Mix well and garnish with chopped coriander leaves, grated coconut, and sev if desired.",
            "Serve": "Serve hot with a side of tea or chutney."
        },
        greeting: "Enjoy your flavorful and light poha!"
    },
    {
        id: 2,
        name: "Chole Bhature",
        about: "Chole Bhature is a classic North Indian dish that brings together the rich flavors of spiced chickpeas (chole) served alongside fluffy, deep-fried bread (bhature). This hearty meal is perfect for lunch or dinner and is often accompanied by pickles and yogurt, making it a complete and satisfying experience for your taste buds.",
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
            "Water (as needed)",
            "For Bhature:",
            "2 cups all-purpose flour",
            "1 teaspoon salt",
            "2 tablespoons oil",
            "Water (as needed)",
            "Oil for deep frying"
        ],
        recipeVideoLink: "https://www.youtube.com/watch?v=example",
        recipeHeroImage: recipe2,
        recipeHeroImage2: "",
        servings: 4,
        prepTime: "30 min",
        cookTime: "45 min",
        category: "Lunch",
        nutrients: {
            "Calories": "600",
            "Protein": "18g",
            "Carbs": "90g",
            "Sodium": "800mg",
            "Fat": "20g",
        },
        instructions: {
            "Prepare Chickpeas": "Soak chickpeas overnight in water. Drain and rinse before cooking.",
            "Cook Chole": "In a pressure cooker, heat oil. Add cumin seeds, chopped onions, and sauté until golden. Add ginger-garlic paste and green chili, cooking for another minute.",
            "Add Tomatoes and Spices": "Stir in chopped tomatoes, coriander powder, cumin powder, garam masala, and salt. Cook until tomatoes are soft.",
            "Pressure Cook": "Add the soaked chickpeas and enough water. Close the lid and pressure cook for about 15-20 minutes until soft.",
            "Prepare Bhature Dough": "In a bowl, mix all-purpose flour, salt, and oil. Gradually add water to knead a soft dough. Cover and let it rest for at least 30 minutes.",
            "Fry Bhature": "Divide the dough into small balls. Roll each ball into a circle about 6 inches in diameter. Heat oil in a deep pan and fry each bhature until puffed and golden.",
            "Serve": "Serve hot chole with bhature, pickles, and yogurt."
        },
        greeting: "Enjoy your delicious Chole Bhature!"
    },
    {
        id: 3,
        name: "Chow Mein",
        about: "Chow Mein is a popular Chinese stir-fried noodle dish that combines a medley of colorful vegetables with tender meat or tofu. The noodles are tossed in a savory sauce that adds depth to the dish. It's quick to prepare, making it a favorite for busy weeknights, and can easily be customized with your favorite proteins and vegetables.",
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
        recipeHeroImage2: "",
        servings: 4,
        prepTime: "15 min",
        cookTime: "20 min",
        category: "Dinner",
        nutrients: {
            "Calories": "550",
            "Protein": "20g",
            "Carbs": "75g",
            "Sodium": "900mg",
            "Fat": "20g",
        },
        instructions: {
            "Prepare Noodles": "Cook chow mein noodles according to package instructions. Drain and set aside.",
            "Stir-fry Vegetables": "In a large pan, heat oil. Add minced garlic and ginger, sautéing until fragrant. Add mixed vegetables and stir-fry until tender.",
            "Add Protein": "Add sliced chicken or tofu to the pan. Cook until chicken is no longer pink or tofu is golden.",
            "Combine Noodles and Sauce": "Add cooked noodles, soy sauce, oyster sauce (if using), and sesame oil. Toss everything together until well combined.",
            "Finish": "Season with salt and pepper to taste. Garnish with green onions before serving.",
            "Serve": "Serve hot as a main dish."
        },
        greeting: "Enjoy your vibrant and flavorful Chow Mein!"
    },
    {
        id: 4,
        name: "Vegetable Biryani",
        about: "Vegetable Biryani is a fragrant and colorful rice dish that features a variety of mixed vegetables simmered with basmati rice and aromatic spices. This dish is not only visually appealing but also rich in flavors. It's a one-pot meal that's perfect for family gatherings or special occasions, often served with raita or salad.",
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
        recipeHeroImage2: "",
        servings: 4,
        prepTime: "30 min",
        cookTime: "1 hour",
        category: "Dinner",
        nutrients: {
            "Calories": "450",
            "Protein": "12g",
            "Carbs": "90g",
            "Sodium": "500mg",
            "Fat": "10g",
        },
        instructions: {
            "Prepare Rice": "Rinse basmati rice in water until it runs clear. Soak for 30 minutes, then drain.",
            "Sauté Onions": "In a large pot, heat oil or ghee. Add sliced onions and sauté until golden brown.",
            "Cook Vegetables": "Add ginger-garlic paste and sauté for a minute. Then add chopped tomatoes, mixed vegetables, and green chilies. Cook until vegetables are tender.",
            "Add Spices and Rice": "Stir in coriander powder, garam masala, and salt. Add soaked rice and saffron strands (if using). Mix well.",
            "Add Water": "Pour in 4 cups of water. Bring to a boil, then reduce heat, cover, and simmer for about 20 minutes until rice is cooked.",
            "Garnish and Serve": "Once done, fluff the biryani with a fork. Garnish with fresh cilantro and mint. Serve with raita or salad."
        },
        greeting: "Enjoy your aromatic Vegetable Biryani!"
    },
    {
        id: 5,
        name: "Samosa",
        about: "Samosa is a delightful Indian snack that features a crispy pastry shell filled with a savory mixture of spiced potatoes and peas. These triangle-shaped treats are deep-fried to golden perfection and are often served with chutneys. They're perfect as appetizers for parties or as a satisfying snack at any time of the day.",
        ingredients: [
            "2 cups all-purpose flour",
            "4 medium potatoes, boiled and mashed",
            "1 cup green peas, boiled",
            "1 teaspoon cumin seeds",
            "1 teaspoon garam masala",
            "1/2 teaspoon red chili powder",
            "1/2 teaspoon turmeric powder",
            "2 tablespoons oil",
            "Salt to taste",
            "Water for kneading",
            "Oil for deep frying"
        ],
        recipeVideoLink: "https://www.youtube.com/watch?v=example",
        recipeHeroImage: recipe5,
        recipeHeroImage2: "",
        servings: 4,
        prepTime: "30 min",
        cookTime: "30 min",
        category: "Snack",
        nutrients: {
            "Calories": "250",
            "Protein": "5g",
            "Carbs": "35g",
            "Sodium": "300mg",
            "Fat": "10g",
        },
        instructions: {
            "Prepare Dough": "In a bowl, mix all-purpose flour, salt, and 2 tablespoons of oil. Gradually add water to knead a firm dough. Cover and let it rest for 20 minutes.",
            "Prepare Filling": "Heat oil in a pan. Add cumin seeds and let them splutter. Add boiled and mashed potatoes, green peas, garam masala, red chili powder, turmeric powder, and salt. Mix well and cook for 2-3 minutes. Allow the filling to cool.",
            "Shape Samosas": "Divide the dough into small balls. Roll each ball into a thin oval. Cut the oval in half, form a cone, and fill it with the prepared potato mixture. Seal the edges with water.",
            "Fry Samosas": "Heat oil in a deep pan. Fry the samosas on medium heat until golden brown and crispy.",
            "Serve": "Serve hot with mint chutney or tamarind chutney."
        },
        greeting: "Enjoy your crispy and delicious Samosas!"
    }
]

export default allRecipies;
