const express = require('express');
const app = express();
const morgan = require("morgan");
const { postList } = require("./views/postList.js");
const { postDetails } = require('./views/postDetails.js')
const { find } = require('./recipeData');
const { list } = require('./recipeData');

// app.use(express.static("public"));
app.use(morgan("dev"));

app.get('/', async (req, res) => {
    const posts = await list();
    console.log(posts)
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