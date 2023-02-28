const express = require('express');
const morgan = require("morgan");
const { postList } = require("./views/postList.js");
const { postDetails } = require('./views/postDetails.js')
const { categories } = require('./views/categories.js')
const { listCategories } = require('./views/categories.js')
const { find } = require('./recipeData');
const { list } = require('./recipeData');

const app = express();
app.use(morgan("dev"));



app.get('/categories/:category', async (req, res) => {
    const category = req.params.category
    const posts = await list(category);
    const html = await postList(posts); 
    res.send(html); 
});

app.get('/categories/:category/posts/:id', (req, res) => {
    const { id, category } = req.params;
    console.log(id, "id")
    console.log(category, "category")
    const post = find(id, category);
    console.log(post, "post")
    if (!post) {
        res.status(404).send('Post not found');
      } else {
    const html = postDetails(post); 
    res.send(html);
}});

app.get('/', async (req, res) => {
    const category = req.params.category
    const posts = await list(category);
    console.log(posts)
    const categoriesList  = await listCategories();
    const categoryListHTML = await categories(categoriesList);
    

    
    res.send(categoryListHTML);
  });

const PORT = 8080

app.use(express.static("public"));
app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`)
});