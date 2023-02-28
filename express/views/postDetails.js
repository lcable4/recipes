const postDetails = (post) => {
    console.log("postDetail function called");
    try {
      if (!post.id) {
        // If the post wasn't found, just throw an error
        throw new Error("Not Found");
      }
      const html = `<!DOCTYPE html>
                      <html>
                      <head>
                        <title>Dinner Recipes</title>
                        <link rel="stylesheet" href="/style.css" />
                      </head>
                      <body>
                        <div class="news-list">
          
                        <header>Dinner Recipes</header>
                            <div class='news-item'>
                              <p>
                                <span class="news-position">${post.id}</span>
                                ${post.title}
                                <small>(by ${post.name})</small>
                              </p>
                              <small class="news-info">
                                ${post.upvotes} upvotes
                              </small>
                              ${post.content}
                            </div>
                        </div>
                      </body>
                    </html>`;
      return html;
    } catch (error) {
      const html = `
              <!DOCTYPE html>
              <html>
              <head>
                <title>Dinner Recipes</title>
                <link rel="stylesheet" href="/style.css" />
              </head>
              <body>
                <header>Dinner Recipes</header>
                <div class="not-found">
                  <p>404: Page Not Found</p>
                </div>
              </body>
              </html>`;
      return html;
    }
  };
  
  module.exports = { postDetails: postDetails };