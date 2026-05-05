const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smartphone Z", price: 699.00, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Mechanical Keyboard", price: 120.00, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Gaming Mouse", price: 45.50, image: "https://via.placeholder.com/150" }
];

let cart = [];
let isLoggedIn = false;

// --- Authentication Logic ---
function handleLogin() {
    const user = prompt("Enter username:");
    if (user) {
        isLoggedIn = true;
        document.getElementById('authBtn').innerText = `Welcome, ${user}`;
        alert("Login Successful!");
    }
}

// --- Product Display Logic ---
function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    if (!productList) return;
    
    productList.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// --- Cart Logic ---
function addToCart(productId) {
    if (!isLoggedIn) {
        alert("Please login first to add items to your cart!");
        return;
    }
    cart.push(productId);
    document.getElementById('cartCount').innerText = cart.length;
    console.log("Current Cart:", cart);
}

// --- Search Logic ---
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(term));
        displayProducts(filtered);
    });
}

// Initial Load
window.onload = () => {
    displayProducts(products);
    document.getElementById('authBtn').onclick = handleLogin;
};