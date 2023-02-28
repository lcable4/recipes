const express = require('express');
const app = express();
const morgan = require("morgan");
const asianRecipeData = require("./recipeData")
const timeAgo = require("node-time-ago");
const { postList } = require("./views/postList");
const { postDetails } = require('./views/postDetails')
const { find } = require('./recipeData');
const { list } = require('./recipeData');


//   const html = postList(asianRecipeData);
// //   const posts = list();
// //   console.log(posts);
//  console.log(html); // check the output in the console

app.use(morgan("dev"));
app.use(express.static("public"));

app.get('/', async (req, res) => {
    const posts = await list();
    const html = await postList(posts); 
    res.send(html); 
});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = find(id);
    const html = postDetails(post); 
    res.send(html);
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`)
});