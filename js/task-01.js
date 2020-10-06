const totalCategories = document.querySelectorAll('.item');
console.log(`В списке ${totalCategories.length} категории.`);

totalCategories.forEach(categories => {
    console.log(`Категория: ${categories.querySelector('h2').textContent}`);
    console.log(
        `Количество элементов: ${categories.querySelectorAll('li').length}`,
    );
});
