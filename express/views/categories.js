const categoriesData = [
    { name: "Asian", slug: "asian" },
    { name: "American", slug: "american" },
    { name: "Italian", slug: "italian" },
    { name: "Mexican", slug: "mexican" },
  ];
  
  const listCategories = () => {
    return [...categoriesData];
  };
  

const categories = async () => {
    
    console.log('categories function was called')

    const categoryListHtml = categoriesData
        .map(category => `<li><a href="/${category.slug}">${category.name}</a></li>`)
        .join('');    
    
    const html = `
        <div class="category-list">
            <ul>
                ${categoryListHtml}
            </ul>
        </div>`
    return html
}
module.exports = {categories: categories, listCategories: listCategories}