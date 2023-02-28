const asianRecipeData = [
    { id: 1, upvotes: 100, title: "Stir-Fried Ginger Chicken with Vegetables", name: "Asian dinner recipes",
    content: "Cook sliced chicken breast in a pan with ginger, garlic, soy sauce, and sesame oil. Add sliced vegetables like bell peppers, carrots, and snow peas and stir-fry until tender. Serve over brown rice.", 
    date: new Date(Date.now() - 14400000)},
    { id: 2, upvotes: 100, title: "Teriyaki Salmon", name: "Asian dinner recipes",
    content: "Brush salmon fillets with teriyaki sauce and bake in the oven until cooked through. Serve with steamed broccoli and brown rice.", 
    date: new Date(Date.now() - 86400000)},
    { id: 3, upvotes: 100, title: "Vegetable Fried Rice", name: "Asian dinner recipes", 
    content: "Cook brown rice according to package instructions. In a pan, sauté chopped onion, garlic, and ginger until fragrant. Add diced carrots, bell peppers, and peas and stir-fry until cooked. Push the vegetables to the side and scramble an egg in the same pan. Add the cooked rice and mix everything together. Season with soy sauce and sesame oil.",  
    date: new Date(Date.now() - 900000)},
    { id: 4, upvotes: 100, title: "Spicy Peanut Noodles", name: "Asian dinner recipes", 
    content: "Cook udon noodles according to package instructions. In a bowl, whisk together peanut butter, soy sauce, rice vinegar, sriracha, and honey. Add the cooked noodles and sliced scallions to the bowl and toss until coated. Serve with steamed broccoli or snap peas.", 
    date: new Date(Date.now() - 5000)},
    { id: 5, upvotes: 100, title: "Miso Soup with Tofu and Vegetables", name: "Asian dinner recipes", 
    content: "In a pot, bring vegetable broth to a simmer. Add sliced mushrooms, diced tofu, and chopped bok choy. Whisk together miso paste and hot water and add to the pot. Simmer for a few minutes until everything is heated through. Serve hot.",
    date: new Date(Date.now() - 10000000)},
];

const list = () => {
    return [...asianRecipeData];
};

const find = (id) => {
    const post = asianRecipeData.find(post => post.id === Number(id));
    return {...post};
}

module.exports = { list: list, find: find };