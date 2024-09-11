async function getProductRecommendations(category, budget) {
    // Placeholder product list (Simulated)
    const products = [
        { name: 'Smartphone', price: 500, category: 'electronics', image: 'https://via.placeholder.com/150' },
        { name: 'Laptop', price: 1200, category: 'electronics', image: 'https://via.placeholder.com/150' },
        { name: 'T-shirt', price: 30, category: 'fashion', image: 'https://via.placeholder.com/150' },
        { name: 'Shoes', price: 80, category: 'fashion', image: 'https://via.placeholder.com/150' },
        { name: 'Sofa', price: 800, category: 'home', image: 'https://via.placeholder.com/150' },
        { name: 'Makeup Kit', price: 40, category: 'beauty', image: 'https://via.placeholder.com/150' }
    ];

    // Filter products based on user preferences (Category and Budget)
    const filteredProducts = products.filter(product => {
        return product.category === category && product.price <= budget;
    });

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return filteredProducts.length ? filteredProducts : [{ name: 'No Products Found', price: '-', image: 'https://via.placeholder.com/150' }];
}
