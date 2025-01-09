import recipe1 from "/Images/recipe1.jpg";
import recipe2 from "/Images/recipe2.jpg";
import recipe3 from "/Images/recipe3.jpg";
import recipe4 from "/Images/recipe4.jpg";
import recipe5 from "/Images/recipe5.jpg";
import recipe6 from "/Images/recipe6.jpg";
import recipe7 from "/Images/recipe7.jpg";

const recipes = [
    {
        id: 1,
        name: "Chole Bhature",
        about: "Chole Bhature is a classic North Indian dish known for its rich, spicy chickpea curry (chole) paired with fluffy deep-fried bread (bhature). This hearty combination is a favorite for festive occasions and indulgent meals.",
        image: recipe2,
        cuisine: "North Indian",
        ingredientSections: [
            {
                name: "Chole Ingredients",
                items: [
                    { name: "Chickpeas (Kabuli Chana)", quantity: "1", unit: "cup (soaked overnight)" },
                    { name: "Onion", quantity: "2", unit: "pieces (finely chopped)" },
                    { name: "Tomato", quantity: "2", unit: "pieces (pureed)" },
                    { name: "Chole Masala", quantity: "2", unit: "teaspoons" }
                ]
            },
            {
                name: "Bhature Ingredients",
                items: [
                    { name: "All-Purpose Flour (Maida)", quantity: "2", unit: "cups" },
                    { name: "Yogurt (Dahi)", quantity: "1/2", unit: "cup" }
                ]
            }
        ],
        nutrients: { calories: "550 kcal", protein: "15g", fat: "20g", carbs: "70g", fiber: "8g" },
        preparationSteps: [
            "Rinse the chickpeas and soak them overnight in water.",
            "Knead a soft dough using flour, yogurt, and water for the bhature. Cover and let it rest."
        ],
        cookingSteps: [
            {
                name: "Cooking Chole",
                steps: [
                    "Pressure cook the soaked chickpeas until soft.",
                    "In a pan, heat oil and sauté onions until golden brown. Add tomato puree and spices.",
                    "Mix in the boiled chickpeas and simmer for 15 minutes, adjusting the consistency with water."
                ]
            },
            {
                name: "Cooking Bhature",
                steps: [
                    "Roll the dough into medium-sized circles.",
                    "Deep fry the bhature in hot oil until they puff up and turn golden brown."
                ]
            }
        ],
        tools: ["Pressure Cooker", "Deep Frying Pan"],
        servingSuggestions: "Serve hot with pickles, onion rings, and a side of mint chutney.",
        variations: ["Use canned chickpeas for a quicker version."],
        storage: { shelfLife: "2 days", reheatingInstructions: "Reheat chole on the stove and warm bhature in an oven." },
        tags: ["Indian", "Lunch", "Traditional"],
        difficulty: "Medium",
        preparationTime: "8 hr",
        cookingTime: "40 min",
        servings: 4,
        notes: "For extra flavor, garnish with fresh coriander and a squeeze of lemon."
    },
    {
        id: 2,
        name: "Poha",
        about: "Poha is a quick and light Indian breakfast dish made with flattened rice, spices, and aromatic tempering. It is both healthy and satisfying, perfect for starting your day.",
        image: recipe1,
        cuisine: "Indian",
        ingredientSections: [
            {
                name: "Poha Ingredients",
                items: [
                    { name: "Flattened Rice (Poha)", quantity: "1", unit: "cup" },
                    { name: "Onion", quantity: "1", unit: "piece (chopped)" },
                    { name: "Green Chilies", quantity: "2", unit: "pieces (sliced)" },
                    { name: "Curry Leaves", quantity: "5-6", unit: "leaves" }
                ]
            }
        ],
        nutrients: { calories: "200 kcal", protein: "4g", fat: "5g", carbs: "35g", fiber: "2g" },
        preparationSteps: [
            "Wash the poha thoroughly and drain the water completely.",
            "Prepare the vegetables by chopping onions, green chilies, and coriander."
        ],
        cookingSteps: [
            {
                name: "Cooking Poha",
                steps: [
                    "Heat oil in a pan and add mustard seeds. Once they splutter, add curry leaves and green chilies.",
                    "Add chopped onions and sauté until translucent.",
                    "Mix in the drained poha, turmeric, and salt. Cook for 2-3 minutes, stirring gently.",
                    "Turn off the heat and garnish with fresh coriander and a squeeze of lemon."
                ]
            }
        ],
        tools: ["Pan"],
        servingSuggestions: "Serve hot with a sprinkle of sev or peanuts for added crunch.",
        variations: ["Add boiled potatoes or peas for a more filling version."],
        storage: { shelfLife: "1 day", reheatingInstructions: "Microwave for 30 seconds or steam briefly." },
        tags: ["Indian", "Breakfast", "Quick"],
        difficulty: "Easy",
        preparationTime: "5 min",
        cookingTime: "10 min",
        servings: 2,
        notes: "For added flavor, include a pinch of sugar and grated coconut."
    },
    {
        id: 3,
        name: "Chowmein",
        about: "Chowmein is a popular Indo-Chinese stir-fried noodle dish, loaded with vegetables and bold flavors. Perfect as a snack or a main course.",
        image: recipe3,
        cuisine: "Indo-Chinese",
        ingredientSections: [
            {
                name: "Chowmein Ingredients",
                items: [
                    { name: "Noodles", quantity: "200", unit: "grams" },
                    { name: "Cabbage", quantity: "1/2", unit: "cup (shredded)" },
                    { name: "Carrot", quantity: "1", unit: "piece (julienned)" },
                    { name: "Soy Sauce", quantity: "2", unit: "tablespoons" }
                ]
            }
        ],
        nutrients: { calories: "300 kcal", protein: "8g", fat: "10g", carbs: "40g", fiber: "3g" },
        preparationSteps: [
            "Boil the noodles as per package instructions and drain.",
            "Chop and prepare the vegetables for stir-frying."
        ],
        cookingSteps: [
            {
                name: "Cooking Chowmein",
                steps: [
                    "Heat oil in a wok and sauté garlic until fragrant.",
                    "Add vegetables and stir-fry on high heat for 2-3 minutes.",
                    "Mix in the boiled noodles and soy sauce. Toss well to coat evenly.",
                    "Cook for another minute and serve hot."
                ]
            }
        ],
        tools: ["Wok", "Tongs"],
        servingSuggestions: "Serve with chili sauce or ketchup.",
        variations: ["Add protein like chicken, shrimp, or tofu for a wholesome meal."],
        storage: { shelfLife: "1 day", reheatingInstructions: "Stir-fry briefly to reheat." },
        tags: ["Indo-Chinese", "Snacks", "Quick"],
        difficulty: "Easy",
        preparationTime: "10 min",
        cookingTime: "15 min",
        servings: 2,
        notes: "Adjust the spice level by adding chili sauce or flakes."
    },
    {
        id: 4,
        name: "Vegetable Biryani",
        about: "Vegetable Biryani is a fragrant and flavorful one-pot rice dish cooked with aromatic spices and a medley of fresh vegetables. It's a hearty meal that captures the essence of Indian cuisine.",
        image: recipe4,
        cuisine: "Indian",
        ingredientSections: [
            {
                name: "Biryani Ingredients",
                items: [
                    { name: "Basmati Rice", quantity: "1", unit: "cup" },
                    { name: "Mixed Vegetables", quantity: "1", unit: "cup (chopped)" },
                    { name: "Yogurt", quantity: "1/2", unit: "cup" },
                    { name: "Biryani Masala", quantity: "2", unit: "teaspoons" }
                ]
            }
        ],
        nutrients: { calories: "350 kcal", protein: "8g", fat: "10g", carbs: "55g", fiber: "5g" },
        preparationSteps: [
            "Rinse and soak the rice for 20 minutes.",
            "Chop the vegetables and prepare the spice mix."
        ],
        cookingSteps: [
            {
                name: "Cooking Biryani",
                steps: [
                    "Cook the rice until 70% done and set aside.",
                    "In a pan, sauté onions, ginger, and garlic until golden.",
                    "Add vegetables, yogurt, and biryani masala. Cook until vegetables are tender.",
                    "Layer the rice and vegetable mixture in a pot. Cover and cook on low heat for 10 minutes."
                ]
            }
        ],
        tools: ["Deep Pot", "Rice Cooker"],
        servingSuggestions: "Serve with raita or salad.",
        variations: ["Add paneer or tofu for extra protein."],
        storage: { shelfLife: "2 days", reheatingInstructions: "Microwave or steam to reheat." },
        tags: ["Indian", "Lunch", "Aromatic"],
        difficulty: "Medium",
        preparationTime: "20 min",
        cookingTime: "40 min",
        servings: 4,
        notes: "Garnish with fried onions and fresh mint for added flavor."
    },
    {
        id: 5,
        name: "Samosa",
        about: "Samosa is a popular Indian snack made with a crispy, flaky pastry shell filled with a spiced potato mixture. It's perfect for tea-time or as an appetizer.",
        image: recipe5,
        cuisine: "Indian",
        ingredientSections: [
            {
                name: "Samosa Ingredients",
                items: [
                    { name: "All-Purpose Flour (Maida)", quantity: "1", unit: "cup" },
                    { name: "Potatoes", quantity: "3", unit: "pieces (boiled and mashed)" },
                    { name: "Green Peas", quantity: "1/2", unit: "cup" },
                    { name: "Garam Masala", quantity: "1", unit: "teaspoon" }
                ]
            }
        ],
        nutrients: { calories: "250 kcal", protein: "4g", fat: "12g", carbs: "30g", fiber: "3g" },
        preparationSteps: [
            "Prepare the dough using flour, water, and a pinch of salt. Knead until smooth and let it rest.",
            "Boil, peel, and mash the potatoes. Mix with peas and spices for the filling."
        ],
        cookingSteps: [
            {
                name: "Cooking Samosas",
                steps: [
                    "Roll out the dough and cut into circles. Fold into cones.",
                    "Fill each cone with the potato mixture and seal the edges.",
                    "Deep fry the samosas in hot oil until golden and crispy."
                ]
            }
        ],
        tools: ["Rolling Pin", "Deep Fryer"],
        servingSuggestions: "Serve hot with tamarind or mint chutney.",
        variations: ["Use minced meat for a non-vegetarian filling."],
        storage: { shelfLife: "1 day", reheatingInstructions: "Reheat in an oven for 5 minutes." },
        tags: ["Indian", "Snacks", "Crispy"],
        difficulty: "Medium",
        preparationTime: "30 min",
        cookingTime: "20 min",
        servings: 4,
        notes: "Ensure the oil is hot enough to avoid soggy samosas." 
    },
    {
        id: 6,
        name: "Paneer Butter Masala",
        about: "Paneer Butter Masala is a creamy and rich Indian curry made with paneer (Indian cottage cheese) cooked in a flavorful tomato-based gravy. It’s a crowd favorite and perfect for dinner.",
        image: recipe6,
        cuisine: "Indian",
        ingredientSections: [
            {
                name: "Paneer Butter Masala Ingredients",
                items: [
                    { name: "Paneer (Cottage Cheese)", quantity: "200", unit: "grams (cubed)" },
                    { name: "Tomatoes", quantity: "4", unit: "medium (pureed)" },
                    { name: "Onion", quantity: "1", unit: "medium (finely chopped)" },
                    { name: "Butter", quantity: "2", unit: "tablespoons" },
                    { name: "Heavy Cream", quantity: "1/4", unit: "cup" },
                    { name: "Ginger-Garlic Paste", quantity: "1", unit: "teaspoon" },
                    { name: "Garam Masala", quantity: "1", unit: "teaspoon" },
                    { name: "Red Chili Powder", quantity: "1", unit: "teaspoon" },
                    { name: "Coriander Powder", quantity: "1", unit: "teaspoon" },
                    { name: "Kasuri Methi (Dried Fenugreek Leaves)", quantity: "1", unit: "teaspoon" },
                    { name: "Salt", quantity: "to taste", unit: "" }
                ]
            }
        ],
        nutrients: { calories: "320 kcal", protein: "12g", fat: "25g", carbs: "10g", fiber: "2g" },
        preparationSteps: [
            "Cut the paneer into cubes and soak in warm water to keep it soft.",
            "Prepare the tomato puree by blending fresh tomatoes.",
            "Chop the onion finely and gather all the spices."
        ],
        cookingSteps: [
            {
                name: "Cooking Paneer Butter Masala",
                steps: [
                    "Heat butter in a pan and sauté the onions until golden.",
                    "Add ginger-garlic paste and cook until the raw smell disappears.",
                    "Pour in the tomato puree, red chili powder, coriander powder, and salt. Cook until the oil separates.",
                    "Add cream, garam masala, and kasuri methi. Stir well to combine.",
                    "Add the paneer cubes and cook for 5-7 minutes on low heat."
                ]
            }
        ],
        tools: ["Blender", "Pan", "Knife"],
        servingSuggestions: "Serve hot with naan, roti, or steamed rice.",
        variations: ["Add boiled vegetables like peas or carrots for a mixed vegetable curry."],
        storage: { shelfLife: "2 days (refrigerated)", reheatingInstructions: "Reheat on a stove or in a microwave." },
        tags: ["Dinner", "Vegetarian", "Curry"],
        difficulty: "Medium",
        preparationTime: "20 min",
        cookingTime: "30 min",
        servings: 4,
        notes: "Use fresh cream for the best flavor and garnish with fresh cilantro before serving."
    },{
        id: 7,
        name: "Gulab Jamun",
        about: "Gulab Jamun is a classic Indian dessert made with soft milk-based dumplings soaked in a fragrant sugar syrup. It’s a must-have for festive occasions or as a sweet ending to a meal.",
        image: recipe7,
        cuisine: "Indian",
        ingredientSections: [
            {
                name: "Gulab Jamun Ingredients",
                items: [
                    { name: "Khoya (Mawa)", quantity: "1", unit: "cup (grated)" },
                    { name: "All-Purpose Flour (Maida)", quantity: "2", unit: "tablespoons" },
                    { name: "Baking Powder", quantity: "1/4", unit: "teaspoon" },
                    { name: "Milk", quantity: "2-3", unit: "tablespoons (as needed)" },
                    { name: "Sugar", quantity: "1.5", unit: "cups" },
                    { name: "Water", quantity: "1.5", unit: "cups" },
                    { name: "Cardamom Pods", quantity: "3", unit: "crushed" },
                    { name: "Rose Water", quantity: "1", unit: "teaspoon" },
                    { name: "Ghee or Oil", quantity: "for deep frying", unit: "" }
                ]
            }
        ],
        nutrients: { calories: "300 kcal", protein: "6g", fat: "10g", carbs: "45g", fiber: "1g" },
        preparationSteps: [
            "Grate the khoya and mix it with flour and baking powder to form a soft dough.",
            "Roll the dough into small, smooth balls ensuring there are no cracks."
        ],
        cookingSteps: [
            {
                name: "Cooking Gulab Jamun",
                steps: [
                    "Heat sugar and water in a pan to prepare the sugar syrup. Add crushed cardamom and rose water, then simmer for 5 minutes.",
                    "Heat ghee or oil in a deep pan. Fry the balls on low heat until golden brown.",
                    "Soak the fried balls in warm sugar syrup for at least 30 minutes."
                ]
            }
        ],
        tools: ["Mixing Bowl", "Deep Pan", "Slotted Spoon"],
        servingSuggestions: "Serve warm or at room temperature, garnished with chopped pistachios or almonds.",
        variations: ["Add saffron strands to the syrup for an enhanced aroma."],
        storage: { shelfLife: "3 days (refrigerated)", reheatingInstructions: "Warm gently in the syrup before serving." },
        tags: ["Indian", "Dessert", "Sweet"],
        difficulty: "Easy",
        preparationTime: "15 min",
        cookingTime: "30 min",
        servings: 6,
        notes: "Ensure the oil is not too hot to avoid burning the gulab jamuns."
    }
    
    
];

export default recipes;