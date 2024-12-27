import recipe1 from "/Images/recipe1.jpg";
import recipe2 from "/Images/recipe2.jpg";
import recipe3 from "/Images/recipe3.jpg";
import recipe4 from "/Images/recipe4.jpg";
import recipe5 from "/Images/recipe5.jpg";

const recipes = [
    {
      id: 1,
      heading: "Chole Bhature",
      about: "A popular North Indian dish consisting of spicy chickpea curry (chole) served with deep-fried bread (bhature).",
      image: recipe1,
      cuisine: "North Indian",
      ingredientSections: [
        {
          name: "Chole Ingredients",
          items: [
            { name: "Chickpeas (Kabuli Chana)", quantity: "1 cup", unit: "cup" },
            { name: "Onion", quantity: "2", unit: "pieces (finely chopped)" },
            { name: "Tomato", quantity: "2", unit: "pieces (pureed)" },
            { name: "Chole Masala", quantity: "2 tsp", unit: "teaspoons" }
          ]
        },
        {
          name: "Bhature Ingredients",
          items: [
            { name: "All-Purpose Flour (Maida)", quantity: "2 cups", unit: "cups" },
            { name: "Yogurt (Dahi)", quantity: "1/2 cup", unit: "cup" }
          ]
        }
      ],
      nutrients: { calories: "550 kcal", protein: "15g", fat: "20g", carbs: "70g", fiber: "8g" },
      preparationSteps: ["Soak chickpeas overnight.", "Prepare the dough for bhature."],
      cookingSteps: [
        {
          name: "Cooking Chole",
          steps: ["Sauté onions and tomatoes.", "Add spices and chickpeas.", "Simmer for 15 minutes."]
        },
        {
          name: "Cooking Bhature",
          steps: ["Roll dough into circles.", "Deep fry until golden."]
        }
      ],
      tools: ["Pressure Cooker", "Deep Frying Pan"],
      servingSuggestions: "Serve with pickles and onion rings.",
      variations: ["Use canned chickpeas for convenience."],
      storage: { shelfLife: "2 days", reheatingInstructions: "Reheat on the stove." },
      tags: ["Indian", "Lunch", "Traditional"],
      difficulty: "Medium",
      preparationTime: "8 hours",
      cookingTime: "40 minutes",
      servings: 4,
      notes: "Add lemon juice for extra flavor."
    },
    {
      id: 2,
      heading: "Poha",
      about: "A light and flavorful flattened rice dish popular in India, often enjoyed as breakfast or a snack.",
      image: recipe2,
      cuisine: "Indian",
      ingredientSections: [
        {
          name: "Poha Ingredients",
          items: [
            { name: "Flattened Rice (Poha)", quantity: "1 cup", unit: "cup" },
            { name: "Onion", quantity: "1", unit: "piece (chopped)" },
            { name: "Green Chilies", quantity: "2", unit: "pieces (sliced)" },
            { name: "Curry Leaves", quantity: "5-6", unit: "leaves" }
          ]
        }
      ],
      nutrients: { calories: "200 kcal", protein: "4g", fat: "5g", carbs: "35g", fiber: "2g" },
      preparationSteps: ["Rinse poha and drain.", "Prepare vegetables."],
      cookingSteps: [
        {
          name: "Cooking Poha",
          steps: ["Sauté mustard seeds and curry leaves.", "Add onions and poha.", "Cook for 2 minutes."]
        }
      ],
      tools: ["Pan"],
      servingSuggestions: "Top with lemon juice and sev.",
      variations: ["Add peanuts for crunch."],
      storage: { shelfLife: "1 day", reheatingInstructions: "Microwave for 30 seconds." },
      tags: ["Indian", "Breakfast", "Quick"],
      difficulty: "Easy",
      preparationTime: "5 minutes",
      cookingTime: "10 minutes",
      servings: 2,
      notes: "Garnish with fresh coriander."
    },
    {
      id: 3,
      heading: "Masala Dosa",
      about: "A crispy rice and lentil crepe filled with spiced potato masala, served with chutney and sambar.",
      image: recipe3,
      cuisine: "South Indian",
      ingredientSections: [
        {
          name: "Dosa Batter Ingredients",
          items: [
            { name: "Rice", quantity: "2 cups", unit: "cups" },
            { name: "Urad Dal", quantity: "1 cup", unit: "cup" },
            { name: "Fenugreek Seeds", quantity: "1 tsp", unit: "teaspoon" }
          ]
        },
        {
          name: "Masala Filling Ingredients",
          items: [
            { name: "Potatoes", quantity: "3", unit: "pieces (boiled and mashed)" },
            { name: "Onion", quantity: "1", unit: "piece (sliced)" },
            { name: "Green Chilies", quantity: "2", unit: "pieces (sliced)" }
          ]
        }
      ],
      nutrients: { calories: "300 kcal", protein: "6g", fat: "8g", carbs: "50g", fiber: "4g" },
      preparationSteps: ["Soak rice and dal overnight.", "Prepare the batter and ferment."],
      cookingSteps: [
        {
          name: "Making Masala",
          steps: ["Sauté onions and spices.", "Add mashed potatoes and mix."]
        },
        {
          name: "Making Dosa",
          steps: ["Spread batter on a hot pan.", "Cook until crispy.", "Add masala and fold."]
        }
      ],
      tools: ["Griddle", "Blender"],
      servingSuggestions: "Serve with coconut chutney and sambar.",
      variations: ["Use quinoa instead of rice for the batter."],
      storage: { shelfLife: "1 day", reheatingInstructions: "Reheat dosa on a pan." },
      tags: ["South Indian", "Breakfast", "Crispy"],
      difficulty: "Medium",
      preparationTime: "12 hours (including soaking and fermenting)",
      cookingTime: "30 minutes",
      servings: 4,
      notes: "Ensure the batter is fermented properly for the best results."
    },
    {
      id: 4,
      heading: "Paneer Butter Masala",
      about: "A creamy and flavorful curry made with paneer, butter, and rich tomato gravy.",
      image: recipe4,
      cuisine: "North Indian",
      ingredientSections: [
        {
          name: "Paneer Butter Masala Ingredients",
          items: [
            { name: "Paneer", quantity: "200g", unit: "grams (cubed)" },
            { name: "Tomatoes", quantity: "3", unit: "pieces (pureed)" },
            { name: "Butter", quantity: "2 tbsp", unit: "tablespoons" }
          ]
        }
      ],
      nutrients: { calories: "400 kcal", protein: "10g", fat: "30g", carbs: "20g", fiber: "3g" },
      preparationSteps: ["Prepare tomato puree.", "Cube the paneer."],
      cookingSteps: [
        {
          name: "Cooking Paneer Butter Masala",
          steps: ["Sauté tomato puree in butter.", "Add cream and spices.", "Mix in paneer and cook."]
        }
      ],
      tools: ["Pan"],
      servingSuggestions: "Serve with naan or jeera rice.",
      variations: ["Add cashew paste for extra creaminess."],
      storage: { shelfLife: "2 days", reheatingInstructions: "Reheat on a low flame." },
      tags: ["Indian", "Dinner", "Rich"],
      difficulty: "Easy",
      preparationTime: "10 minutes",
      cookingTime: "20 minutes",
      servings: 4,
      notes: "Adjust spices as per taste."
    },
    {
      id: 5,
      heading: "Idli",
      about: "A soft and fluffy steamed rice and lentil cake, served with chutney and sambar.",
      image: recipe5,
      cuisine: "South Indian",
      ingredientSections: [
        {
          name: "Idli Batter Ingredients",
          items: [
            { name: "Rice", quantity: "2 cups", unit: "cups" },
            { name: "Urad Dal", quantity: "1 cup", unit: "cup" }
          ]
        }
      ],
      nutrients: { calories: "100 kcal", protein: "3g", fat: "1g", carbs: "20g", fiber: "1g" },
      preparationSteps: ["Soak rice and dal overnight.", "Grind into a batter and ferment."],
      cookingSteps: [
        {
          name: "Making Idlis",
          steps: ["Pour batter into idli molds.", "Steam for 10 minutes."]
        }
      ],
      tools: ["Idli Steamer"],
      servingSuggestions: "Serve with coconut chutney and sambar.",
      variations: ["Add grated carrots to the batter for color."],
      storage: { shelfLife: "1 day", reheatingInstructions: "Steam for 2 minutes." },
      tags: ["South Indian", "Breakfast", "Healthy"],
      difficulty: "Easy",
      preparationTime: "12 hours (including soaking and fermenting)",
      cookingTime: "15 minutes",
      servings: 4,
      notes: "Ensure batter is well-fermented for soft idlis."
    }
  ];

  
export default recipes;