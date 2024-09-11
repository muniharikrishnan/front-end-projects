// Handle range slider for budget
document.getElementById('budget').addEventListener('input', function () {
    document.getElementById('budget-value').textContent = this.value;
});

async function getRecommendations() {
    const category = document.getElementById('category').value;
    const budget = document.getElementById('budget').value;

    // Placeholder for getting product recommendations from the model
    const recommendations = await getProductRecommendations(category, budget);

    // Display the recommended products
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous results

    recommendations.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}
