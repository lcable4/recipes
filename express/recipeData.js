const recipeData = {
    asian: [
    { id: 1, upvotes: 100, title: "Stir-Fried Ginger Chicken with Vegetables", name: "Asian dinner recipes", category: "asian",
    content: "Cook sliced chicken breast in a pan with ginger, garlic, soy sauce, and sesame oil. Add sliced vegetables like bell peppers, carrots, and snow peas and stir-fry until tender. Serve over brown rice.", 
    date: new Date(Date.now() - 14400000)},
    { id: 2, upvotes: 100, title: "Teriyaki Salmon", name: "Asian dinner recipes", category: "asian",
    content: "Brush salmon fillets with teriyaki sauce and bake in the oven until cooked through. Serve with steamed broccoli and brown rice.", 
    date: new Date(Date.now() - 86400000)},
    { id: 3, upvotes: 100, title: "Vegetable Fried Rice", name: "Asian dinner recipes", category: "asian",
    content: "Cook brown rice according to package instructions. In a pan, sauté chopped onion, garlic, and ginger until fragrant. Add diced carrots, bell peppers, and peas and stir-fry until cooked. Push the vegetables to the side and scramble an egg in the same pan. Add the cooked rice and mix everything together. Season with soy sauce and sesame oil.",  
    date: new Date(Date.now() - 900000)},
    { id: 4, upvotes: 100, title: "Spicy Peanut Noodles", name: "Asian dinner recipes", category: "asian",
    content: "Cook udon noodles according to package instructions. In a bowl, whisk together peanut butter, soy sauce, rice vinegar, sriracha, and honey. Add the cooked noodles and sliced scallions to the bowl and toss until coated. Serve with steamed broccoli or snap peas.", 
    date: new Date(Date.now() - 5000)},
    { id: 5, upvotes: 100, title: "Miso Soup with Tofu and Vegetables", name: "Asian dinner recipes", category: "asian",
    content: "In a pot, bring vegetable broth to a simmer. Add sliced mushrooms, diced tofu, and chopped bok choy. Whisk together miso paste and hot water and add to the pot. Simmer for a few minutes until everything is heated through. Serve hot.",
    date: new Date(Date.now() - 10000000)},
],
    italian: [
    { id: 1, upvotes: 100, title: "Italian Dish", name:"Italian", category: "italian",
    content: "dasdasdasdasdasdasdasd",
    date: new Date(Date.now() - 14400000)},
    { id: 2, upvotes: 100, title: "Italian Dish", name:"Italian", category: "italian",
    content: "dasdasdasdasdasdasdasd",
    date: new Date(Date.now() - 14400000)},
    { id: 3, upvotes: 100, title: "Italian Dish", name:"Italian", category: "italian",
    content: "dasdasdasdasdasdasdasd",
    date: new Date(Date.now() - 14400000)},
    { id: 4, upvotes: 100, title: "Italian Dish", name:"Italian", category: "italian",
    content: "dasdasdasdasdasdasdasd",
    date: new Date(Date.now() - 14400000)},
    { id: 5, upvotes: 100, title: "Italian Dish", name:"Italian", category: "italian",
    content: "dasdasdasdasdasdasdasd",
    date: new Date(Date.now() - 14400000)}
    ]

};
const asianRecipes = recipeData.asian.filter(recipe => recipe.category === "asian");
const italianRecipes = recipeData.italian.filter(recipe => recipe.category === "italian");
console.log("italianRecipes", italianRecipes );

const list = (category) => {
    if (category in recipeData) {
        return [...recipeData[category]];
      } else {
        return [];
      }
    };


const find = (id, category) => {
     
    let posts = [];

    if (category === 'asian') {
      posts = asianRecipes;
    } else if (category === 'italian') {
      posts = italianRecipes;
    } else {
      return null;
    }

    const post = posts.find(post => post.id === Number(id));

    if (post) {
        return {...post}
    }
    
    return null;
  };


module.exports = { list: list, find: find };