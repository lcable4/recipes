const { list } = require("../recipeData");

const postList = async (posts) => {
    console.log("postList function called");
try {
    const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Dinner Recipe</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header>Dinner Recipes</header>
        ${posts
          .map(
            (post) => `
          <div class='news-item'>
            <p>
              <span class="news-position">${post.id}</span>
              <a href="/posts/${post.id}">${post.title}</a>
              <small>(by ${post.name})</small>
            </p>
            <small class="news-info">
              ${post.upvotes} upvotes
            </small>
    
          </div>`
          )
          .join("")}
      </div>
    </body>
    </html>`;
    return html;
} catch (error) {
    console.log(error);
}
   
  
  };
  
  module.exports = { postList: postList };