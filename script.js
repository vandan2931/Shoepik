// Product Data
const products = [
    {
        id: 1,
        name: "Air Runner Pro",
        category: "Running",
        price: 89.99,
        oldPrice: 112.99,
        discount: 20,
        rating: 4.5,
        reviews: 42,
        colors: ["#3a36db", "#1e1e2c", "#6c757d"],
        sizes: [],
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
        thumbnails: [
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        ],
        description: "Premium running shoes with advanced cushioning technology for maximum comfort and performance. Lightweight design with breathable mesh upper.",
        badges: ["-20%", "New"],
        featured: true
    },
    {
        id: 2,
        name: "Urban Walkers",
        category: "Casual",
        price: 65.99,
        oldPrice: null,
        discount: 0,
        rating: 4,
        reviews: 36,
        colors: ["#1e1e2c", "#6c757d", "#dc3545"],
        sizes: [],
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        thumbnails: [
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        ],
        description: "Stylish casual shoes perfect for everyday wear. Durable leather upper with comfortable cushioned insole.",
        badges: ["Bestseller"],
        featured: true
    },
    {
        id: 3,
        name: "Jump Master X",
        category: "Basketball",
        price: 119.99,
        oldPrice: 139.99,
        discount: 15,
        rating: 5,
        reviews: 58,
        colors: ["#3a36db", "#1e1e2c", "#ffc107"],
        sizes: [],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        thumbnails: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        ],
        description: "High-performance basketball shoes with superior ankle support and responsive cushioning for explosive jumps.",
        badges: ["-15%"],
        featured: true
    },
    {
        id: 4,
        name: "Executive Leather",
        category: "Formal",
        price: 99.99,
        oldPrice: null,
        discount: 0,
        rating: 4,
        reviews: 29,
        colors: ["#1e1e2c", "#6c757d"],
        sizes: [],
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
        thumbnails: [
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        ],
        description: "Elegant formal shoes crafted from premium leather. Perfect for business and special occasions.",
        badges: ["Eco"],
        featured: true
    },
    {
        id: 5,
        name: "Cloud Stride 2.0",
        category: "Running",
        price: 129.99,
        oldPrice: null,
        discount: 0,
        rating: 5,
        reviews: 18,
        colors: ["#3a36db", "#17a2b8", "#1e1e2c"],
        sizes: [],
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        thumbnails: [
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        ],
        description: "Next-generation running shoes with revolutionary cloud-like cushioning for the ultimate running experience.",
        badges: ["Hot"],
        newArrival: true
    },
    {
        id: 6,
        name: "Eco Walkers",
        category: "Casual",
        price: 79.99,
        oldPrice: null,
        discount: 0,
        rating: 4,
        reviews: 7,
        colors: ["#28a745", "#1e1e2c", "#6c757d"],
        sizes: [],
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
        thumbnails: [
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        ],
        description: "Sustainable casual shoes made from recycled materials. Comfortable and environmentally friendly.",
        badges: ["Eco"],
        newArrival: true
    },
    {
        id: 7,
        name: "Retro Classics",
        category: "Sneakers",
        price: 89.99,
        oldPrice: null,
        discount: 0,
        rating: 3.5,
        reviews: 12,
        colors: ["#dc3545", "#1e1e2c", "#ffc107"],
        sizes: [],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        thumbnails: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        ],
        description: "Vintage-inspired sneakers with modern comfort. Classic design with contemporary cushioning technology.",
        badges: ["Limited"],
        newArrival: true
    },
    {
        id: 8,
        name: "Trail Master Pro",
        category: "Hiking",
        price: 149.99,
        oldPrice: null,
        discount: 0,
        rating: 5,
        reviews: 24,
        colors: ["#6c757d", "#1e1e2c", "#28a745"],
        sizes: [],
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        thumbnails: [
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        ],
        description: "Rugged hiking boots with waterproof membrane and superior traction for all terrains. Ankle support for stability on uneven trails.",
        badges: ["New"],
        newArrival: true
    }
];

// Cart and Wishlist Data
let cart = [
    { id: 2, quantity: 1, size: "9", color: "#1e1e2c" },
    { id: 4, quantity: 2, size: "10", color: "#1e1e2c" }
];

let wishlist = [1, 3];

// User Management
function storeUser(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function getUserByEmail(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}

function loginUser(email, password) {
    const user = getUserByEmail(email);
    if (user && user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (document.getElementById('rememberMe').checked) {
            localStorage.setItem('rememberMe', 'true');
        }
        return true;
    }
    return false;
}

function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function logoutUser() {
    localStorage.removeItem('currentUser');
    updateAuthUI();
}

// Update UI based on auth status
function updateAuthUI() {
    const userIcon = document.getElementById('userIcon');
    if (isLoggedIn()) {
        const user = getCurrentUser();
        userIcon.innerHTML = `<i class="far fa-user"></i> ${user.name.split(' ')[0]}`;
        userIcon.setAttribute('data-bs-toggle', 'dropdown');
        userIcon.href = '#';
        
        // Create dropdown menu if it doesn't exist
        if (!document.getElementById('userDropdown')) {
            const dropdown = document.createElement('div');
            dropdown.className = 'dropdown-menu dropdown-menu-end';
            dropdown.id = 'userDropdown';
            dropdown.innerHTML = `
                <a class="dropdown-item" href="#">My Account</a>
                <a class="dropdown-item" href="#">Orders</a>
                <a class="dropdown-item" href="#">Wishlist</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" id="logoutBtn">Logout</a>
            `;
            userIcon.parentNode.appendChild(dropdown);
            
            // Add logout event
            document.getElementById('logoutBtn').addEventListener('click', (e) => {
                e.preventDefault();
                logoutUser();
            });
        }
    } else {
        userIcon.innerHTML = '<i class="far fa-user"></i>';
        userIcon.setAttribute('data-bs-toggle', 'modal');
        userIcon.setAttribute('data-bs-target', '#loginModal');
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) dropdown.remove();
    }
}

// Update cart and wishlist counts
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

// Update cart dropdown
function updateCartDropdown() {
    const cartItemsContainer = document.querySelector('.cart-items');
    let subtotal = 0;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-muted py-3">Your cart is empty</p>';
        document.getElementById('cartSubtotal').textContent = '$0.00';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const itemTotal = product.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h6 class="cart-item-title">${product.name}</h6>
                    <div class="d-flex justify-content-between">
                        <span class="cart-item-price">$${product.price.toFixed(2)} x ${item.quantity}</span>
                        <span class="cart-item-remove" data-id="${product.id}"><i class="fas fa-times"></i></span>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        }
    });
    
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Update wishlist dropdown
function updateWishlistDropdown() {
    const wishlistItemsContainer = document.querySelector('.wishlist-items');
    
    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = '<p class="text-center text-muted py-3">Your wishlist is empty</p>';
        return;
    }
    
    wishlistItemsContainer.innerHTML = '';
    
    wishlist.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="wishlist-item-img">
                <div class="wishlist-item-details">
                    <h6 class="wishlist-item-title">${product.name}</h6>
                    <div class="d-flex justify-content-between">
                        <span class="wishlist-item-price">$${product.price.toFixed(2)}</span>
                        <span class="wishlist-item-remove" data-id="${product.id}"><i class="fas fa-times"></i></span>
                    </div>
                </div>
            `;
            wishlistItemsContainer.appendChild(wishlistItem);
        }
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.wishlist-item-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromWishlist(productId);
        });
    });
}

// Cart functions
function addToCart(productId, quantity = 1, size = null, color = null) {
    const existingItem = cart.find(item => item.id === productId && item.size === size && item.color === color);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity,
            size: size || products.find(p => p.id === productId).sizes[0],
            color: color || products.find(p => p.id === productId).colors[0]
        });
    }
    
    updateCartCount();
    updateCartDropdown();
    
    // Show add to cart animation
    const cartIcon = document.querySelector('#cartDropdown i');
    cartIcon.classList.add('cart-animate');
    setTimeout(() => {
        cartIcon.classList.remove('cart-animate');
    }, 1000);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDropdown();
}

function clearCart() {
    cart = [];
    updateCartCount();
    updateCartDropdown();
}

// Wishlist functions
function addToWishlist(productId) {
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        updateWishlistCount();
        updateWishlistDropdown();
        
        // Show add to wishlist animation
        const wishlistIcon = document.querySelector('#wishlistDropdown i');
        wishlistIcon.classList.add('cart-animate');
        setTimeout(() => {
            wishlistIcon.classList.remove('cart-animate');
        }, 1000);
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    updateWishlistCount();
    updateWishlistDropdown();
}

// Product rendering
function renderFeaturedProducts() {
    const featuredProductsContainer = document.querySelector('#featured .row');
    const featuredProducts = products.filter(product => product.featured);
    
    featuredProductsContainer.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsContainer.appendChild(productCard);
    });
}

function renderNewArrivals() {
    const newArrivalsContainer = document.querySelector('#new-arrivals .row');
    const newArrivals = products.filter(product => product.newArrival);
    
    newArrivalsContainer.innerHTML = '';
    
    newArrivals.forEach(product => {
        const productCard = createProductCard(product);
        newArrivalsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6';
    
    const card = document.createElement('div');
    card.className = 'card product-card animate__animated animate__fadeInUp';
    
    // Badges
    let badgesHTML = '';
    if (product.badges) {
        product.badges.forEach(badge => {
            let badgeClass = 'badge';
            if (badge.includes('%')) {
                badgeClass += ' badge-discount';
            } else if (badge === 'New') {
                badgeClass += ' bg-dark';
            } else if (badge === 'Bestseller') {
                badgeClass += ' bg-dark';
            } else if (badge === 'Hot') {
                badgeClass += ' bg-danger';
            } else if (badge === 'Eco') {
                badgeClass += ' bg-success';
            } else if (badge === 'Limited') {
                badgeClass += ' bg-info';
            }
            
            badgesHTML += `<span class="${badgeClass} position-absolute top-0 ${badgesHTML ? 'end-0' : 'start-0'} m-3">${badge}</span>`;
        });
    }
    
    // Rating stars
    let ratingStars = '';
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        ratingStars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        ratingStars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) {
        ratingStars += '<i class="far fa-star"></i>';
    }
    
    // Price
    let priceHTML = `<span class="price">$${product.price.toFixed(2)}</span>`;
    if (product.oldPrice) {
        priceHTML += `<span class="old-price ms-2">$${product.oldPrice.toFixed(2)}</span>`;
    }
    
    card.innerHTML = `
        <div class="position-relative">
            ${badgesHTML}
            <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy">
            <div class="card-img-overlay d-flex align-items-start justify-content-end">
                <button class="btn btn-sm btn-light rounded-circle" data-id="${product.id}"><i class="far fa-heart"></i></button>
            </div>
            <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
            <div class="size-selector">
                ${product.sizes.map(size => `<span class="size-option">${size}</span>`).join('')}
            </div>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
                <span class="text-muted">${product.category}</span>
                <div class="rating">
                    ${ratingStars}
                    <span class="text-muted ms-1">(${product.reviews})</span>
                </div>
            </div>
            <h5 class="card-title">${product.name}</h5>
            <div class="d-flex justify-content-between align-items-center mt-3">
                <div>
                    ${priceHTML}
                </div>
                <button class="btn btn-sm btn-outline-primary rounded-circle" data-id="${product.id}"><i class="fas fa-plus"></i></button>
            </div>
        </div>
    `;
    
    col.appendChild(card);
    
    // Add event listeners
    col.querySelector('.quick-view-btn').addEventListener('click', function(e) {
        e.preventDefault();
        showQuickView(parseInt(this.getAttribute('data-id')));
    });
    
    col.querySelector('.btn-outline-primary').addEventListener('click', function(e) {
        e.preventDefault();
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
    });
    
    col.querySelector('.btn-light').addEventListener('click', function(e) {
        e.preventDefault();
        const productId = parseInt(this.getAttribute('data-id'));
        if (wishlist.includes(productId)) {
            removeFromWishlist(productId);
            this.innerHTML = '<i class="far fa-heart"></i>';
        } else {
            addToWishlist(productId);
            this.innerHTML = '<i class="fas fa-heart text-danger"></i>';
        }
    });
    
    // Size selector
    col.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.size-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    return col;
}

// Quick View Modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    const modalElement = document.getElementById('quickViewModal');
    
    // Set product details
    document.getElementById('quickViewTitle').textContent = product.name;
    document.getElementById('quickViewProductName').textContent = product.name;
    document.getElementById('quickViewPrice').textContent = `$${product.price.toFixed(2)}`;
    
    if (product.oldPrice) {
        document.getElementById('quickViewOldPrice').textContent = `$${product.oldPrice.toFixed(2)}`;
        document.getElementById('quickViewDiscount').textContent = `-${product.discount}%`;
    } else {
        document.getElementById('quickViewOldPrice').textContent = '';
        document.getElementById('quickViewDiscount').textContent = '';
    }
    
    document.getElementById('quickViewDescription').textContent = product.description;
    
    // Set rating
    const ratingContainer = document.getElementById('quickViewRating');
    ratingContainer.innerHTML = '';
    
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        ratingContainer.innerHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        ratingContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) {
        ratingContainer.innerHTML += '<i class="far fa-star"></i>';
    }
    
    ratingContainer.innerHTML += `<span class="text-muted ms-2">(${product.reviews} reviews)</span>`;
    
    // Set main image
    const mainImage = document.getElementById('quickViewMainImage');
    mainImage.src = product.image;
    mainImage.alt = product.name;
    
    // Set thumbnails
    const thumbnailsContainer = modalElement.querySelector('.thumbnail-images');
    thumbnailsContainer.innerHTML = '';
    
    [product.image, ...product.thumbnails].forEach((thumb, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = thumb;
        thumbnail.alt = product.name;
        thumbnail.className = `product-gallery-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
            thumbnailsContainer.querySelectorAll('.product-gallery-thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Set size options
    const sizeOptionsContainer = document.getElementById('sizeOptions');
    sizeOptionsContainer.innerHTML = '';
    
    product.sizes.forEach(size => {
        const sizeOption = document.createElement('span');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.addEventListener('click', function() {
            sizeOptionsContainer.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
        sizeOptionsContainer.appendChild(sizeOption);
    });
    
    // Set color options
    const colorOptionsContainer = document.getElementById('colorOptions');
    colorOptionsContainer.innerHTML = '';
    
    product.colors.forEach(color => {
        const colorOption = document.createElement('span');
        colorOption.className = 'color-option';
        colorOption.style.backgroundColor = color;
        colorOption.addEventListener('click', function() {
            colorOptionsContainer.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
        colorOptionsContainer.appendChild(colorOption);
    });
    
    // Set quantity controls
    document.getElementById('incrementQty').addEventListener('click', function() {
        const qtyInput = document.getElementById('productQty');
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });
    
    document.getElementById('decrementQty').addEventListener('click', function() {
        const qtyInput = document.getElementById('productQty');
        if (parseInt(qtyInput.value) > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
        }
    });
    
    // Set add to cart button
    document.getElementById('addToCartQuickView').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('productQty').value);
        const size = modalElement.querySelector('.size-option.active')?.textContent || product.sizes[0];
        const color = modalElement.querySelector('.color-option.active')?.style.backgroundColor || product.colors[0];
        
        addToCart(product.id, quantity, size, color);
        modal.hide();
    });
    
    // Set add to wishlist button
    const wishlistBtn = document.getElementById('addToWishlistQuickView');
    if (wishlist.includes(product.id)) {
        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
    }
    
    wishlistBtn.addEventListener('click', function() {
        if (wishlist.includes(product.id)) {
            removeFromWishlist(product.id);
            this.innerHTML = '<i class="far fa-heart"></i>';
        } else {
            addToWishlist(product.id);
            this.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });
    
    // Show modal
    modal.show();
}

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-slider-dots .dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        let newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }
    
    function prevSlide() {
        let newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Manual controls
    document.querySelector('.slider-next').addEventListener('click', function() {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    document.querySelector('.slider-prev').addEventListener('click', function() {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
    // Pause on hover
    const slider = document.querySelector('.hero-slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
}

// Testimonial Slider
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        document.querySelector('.testimonial-slider').style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
    }
    
    function nextSlide() {
        let newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }
    
    function prevSlide() {
        let newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }
    
    document.querySelector('.testimonial-next').addEventListener('click', nextSlide);
    document.querySelector('.testimonial-prev').addEventListener('click', prevSlide);
}

// Countdown Timer
function initCountdownTimer() {
    const daysElement = document.querySelector('.countdown-item:nth-child(1) .countdown-value');
    const hoursElement = document.querySelector('.countdown-item:nth-child(2) .countdown-value');
    const minutesElement = document.querySelector('.countdown-item:nth-child(3) .countdown-value');
    const secondsElement = document.querySelector('.countdown-item:nth-child(4) .countdown-value');
    
    function updateCountdown() {
        let days = parseInt(daysElement.textContent);
        let hours = parseInt(hoursElement.textContent);
        let minutes = parseInt(minutesElement.textContent);
        let seconds = parseInt(secondsElement.textContent);
        
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    hours = 23;
                    if (days > 0) {
                        days--;
                    }
                }
            }
        }
        
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
}

// Scroll animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('[data-animation]');
    
    function checkAnimation() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                const animation = element.getAttribute('data-animation');
                const delay = element.getAttribute('data-animation-delay') || '0s';
                
                element.style.animationDelay = delay;
                element.classList.add(`animate__${animation}`);
                
                // Remove the attribute to prevent re-animation
                element.removeAttribute('data-animation');
            }
        });
    }
    
    window.addEventListener('scroll', checkAnimation);
    window.addEventListener('load', checkAnimation);
}

// Back to top button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Search functionality
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // In a real application, you would redirect to a search results page or filter products
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
            }
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize auth UI
    updateAuthUI();
    
    // Check for remember me
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    if (rememberMe && isLoggedIn()) {
        updateAuthUI();
    }

    // Login form submission
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (loginUser(email, password)) {
            $('#loginModal').modal('hide');
            updateAuthUI();
            // Show success toast
            showToast('Login successful!', 'success');
        } else {
            showToast('Invalid email or password', 'error');
        }
    });

    // Signup form submission
    document.getElementById('signupForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        
        if (password !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }
        
        if (getUserByEmail(email)) {
            showToast('Email already registered', 'error');
            return;
        }
        
        if (!document.getElementById('agreeTerms').checked) {
            showToast('Please agree to the terms and conditions', 'error');
            return;
        }
        
        const user = { name, email, password };
        storeUser(user);
        loginUser(email, password);
        
        $('#signupModal').modal('hide');
        updateAuthUI();
        showToast('Account created successfully!', 'success');
    });
    
    // Render products
    renderFeaturedProducts();
    renderNewArrivals();
    
    // Initialize cart and wishlist
    updateCartCount();
    updateWishlistCount();
    updateCartDropdown();
    updateWishlistDropdown();
    
    // Initialize sliders
    initHeroSlider();
    initTestimonialSlider();
    
    // Initialize countdown timer
    initCountdownTimer();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize search
    initSearch();
    
    // Brand logo hover effect
    document.querySelectorAll('.brand-logo').forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.filter = 'grayscale(0) opacity(100%)';
        });
        logo.addEventListener('mouseleave', function() {
            this.style.filter = 'grayscale(100%) opacity(70%)';
        });
    });
    
    // Compact navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Add pulse animation to hero CTA buttons
    document.querySelectorAll('.hero-section .btn').forEach(btn => {
        btn.classList.add('pulse');
    });
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('img-loading');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '200px'
    });

    lazyImages.forEach(img => {
        img.classList.add('img-loading');
        imageObserver.observe(img);
    });
});

// Toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}