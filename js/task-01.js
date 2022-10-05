const ollCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${ollCategories.length}`);

console.log(' ');
ollCategories.forEach(category => {
    const group = [...category.children];
    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Elements: ${element.textContent}`);
        }
    });
    group.forEach(element => {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log(' ');
});
