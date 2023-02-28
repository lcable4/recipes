const categoriesData = [
    { name: "Asian", slug: "asian" },
    { name: "American", slug: "american" },
    { name: "Italian", slug: "italian" },
    { name: "Mexican", slug: "mexican" },
  ];
  
  const listCategories = () => {
    return [...categoriesData];
  };
  

const categories = async (posts) => {
    
    console.log('categories function was called')

    const categoryListHtml = categoriesData
        .map(category => `<li><a href="/categories/${category.slug}/posts/${posts.id}">${category.name}</a></li>`)
        .join('');    
    
    const html = `
    <html>
    <head>
        <link rel="stylesheet" href="style.css">
        <title>Categories</title>
    </head>
    <body>
        <div class="category-list">
            <ul>
                ${categoryListHtml}
            </ul>
        </div>
    </body>
</html>`
    return html
}
module.exports = {categories: categories, listCategories: listCategories}