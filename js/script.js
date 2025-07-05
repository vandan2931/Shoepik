/**
 * E-Commerce Application - Complete JavaScript
 * Includes all products, cart management, user auth, and UI components
 */

// ==================== PRODUCT DATA ====================
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
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
    thumbnails: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    ],
    description: "Premium running shoes with advanced cushioning technology for maximum comfort and performance.",
    badges: ["-20%", "New"],
    featured: true,
    newArrival: false
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
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10"],
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    thumbnails: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
    ],
    description: "Stylish casual shoes perfect for everyday wear with durable leather upper.",
    badges: ["Bestseller"],
    featured: true,
    newArrival: false
  },
  {
    id: 3,
    name: "Jump Master X",
    category: "Basketball",
    price: 119.99,
    oldPrice: 139.99,
    discount: 15,
    rating: 4.8,
    reviews: 58,
    colors: ["#3a36db", "#1e1e2c", "#ffc107"],
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
    ],
    description: "High-performance basketball shoes with superior ankle support and responsive cushioning.",
    badges: ["-15%"],
    featured: true,
    newArrival: false
  },
  {
    id: 4,
    name: "Executive Leather",
    category: "Formal",
    price: 99.99,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 29,
    colors: ["#1e1e2c", "#6c757d"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
    thumbnails: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
    ],
    description: "Elegant formal shoes crafted from premium leather for business and special occasions.",
    badges: ["Premium"],
    featured: true,
    newArrival: false
  },
  {
    id: 5,
    name: "Cloud Stride 2.0",
    category: "Running",
    price: 129.99,
    oldPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 18,
    colors: ["#3a36db", "#17a2b8", "#1e1e2c"],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    thumbnails: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
    ],
    description: "Next-generation running shoes with revolutionary cloud-like cushioning technology.",
    badges: ["New"],
    featured: false,
    newArrival: true
  },
  {
    id: 6,
    name: "Eco Walkers",
    category: "Casual",
    price: 79.99,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 7,
    colors: ["#28a745", "#1e1e2c", "#6c757d"],
    sizes: ["US 6", "US 7", "US 8", "US 9"],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
    thumbnails: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
    ],
    description: "Sustainable casual shoes made from recycled materials with eco-friendly construction.",
    badges: ["Eco"],
    featured: false,
    newArrival: true
  },
  {
    id: 7,
    name: "Retro Classics",
    category: "Sneakers",
    price: 89.99,
    oldPrice: null,
    discount: 0,
    rating: 3.9,
    reviews: 12,
    colors: ["#dc3545", "#1e1e2c", "#ffc107"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
    ],
    description: "Vintage-inspired sneakers with modern comfort technology and classic styling.",
    badges: ["Retro"],
    featured: false,
    newArrival: true
  },
  {
    id: 8,
    name: "Trail Master Pro",
    category: "Hiking",
    price: 149.99,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 24,
    colors: ["#6c757d", "#1e1e2c", "#28a745"],
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    thumbnails: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
    ],
    description: "Rugged hiking boots with waterproof membrane and superior traction for all terrains.",
    badges: ["Outdoor"],
    featured: false,
    newArrival: true
  }
];

// ==================== CORE FUNCTIONALITY ====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

const App = {
  init() {
    this.initStorage();
    UserManager.init();
    CartManager.init();
    WishlistManager.init();
    UI.init();
    this.bindEvents();
  },

  initStorage() {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  },

  bindEvents() {
    // Login form
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      
      if (UserManager.loginUser(email, password)) {
        $('#loginModal').modal('hide');
        UI.showToast('Login successful!', 'success');
      } else {
        UI.showToast('Invalid email or password', 'error');
      }
    });

    // Signup form
    document.getElementById('signupForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('signupConfirmPassword').value;
      
      if (password !== confirmPassword) {
        UI.showToast('Passwords do not match', 'error');
        return;
      }
      
      if (UserManager.getUserByEmail(email)) {
        UI.showToast('Email already registered', 'error');
        return;
      }
      
      if (!document.getElementById('agreeTerms').checked) {
        UI.showToast('Please agree to the terms', 'error');
        return;
      }
      
      const user = { name, email, password };
      UserManager.storeUser(user);
      UserManager.loginUser(email, password);
      $('#signupModal').modal('hide');
      UI.showToast('Account created!', 'success');
    });
  }
};

// ==================== USER MANAGEMENT ====================
const UserManager = {
  users: JSON.parse(localStorage.getItem('users')) || [],

  init() {
    this.updateAuthUI();
  },

  storeUser(user) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.updateAuthUI();
  },

  getUserByEmail(email) {
    return this.users.find(user => user.email === email);
  },

  loginUser(email, password) {
    const user = this.getUserByEmail(email);
    if (user && user.password === password) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (document.getElementById('rememberMe')?.checked) {
        localStorage.setItem('rememberMe', 'true');
      }
      this.updateAuthUI();
      return true;
    }
    return false;
  },

  isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  },

  logoutUser() {
    localStorage.removeItem('currentUser');
    this.updateAuthUI();
    UI.showToast('Logged out successfully', 'success');
  },

  updateAuthUI() {
    const userIcon = document.getElementById('userIcon');
    if (!userIcon) return;

    if (this.isLoggedIn()) {
      const user = this.getCurrentUser();
      userIcon.innerHTML = `<i class="far fa-user"></i> ${user.name.split(' ')[0]}`;
      userIcon.setAttribute('data-bs-toggle', 'dropdown');
      userIcon.href = '#';
      
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
        
        document.getElementById('logoutBtn').addEventListener('click', (e) => {
          e.preventDefault();
          this.logoutUser();
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
};

// ==================== CART MANAGEMENT ====================
const CartManager = {
  init() {
    this.updateCartUI();
  },

  addToCart(productId, quantity = 1, color = null, size = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => 
      item.id === productId && 
      item.color === (color || product.colors[0]) && 
      item.size === (size || product.sizes[0])
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productId,
        quantity,
        color: color || product.colors[0],
        size: size || product.sizes[0],
        addedAt: new Date().toISOString()
      });
    }

    this.updateCart();
    UI.showToast('Item added to cart', 'success');
    
    // Animation effect
    const cartIcon = document.querySelector('#cartDropdown i');
    cartIcon.classList.add('cart-animate');
    setTimeout(() => cartIcon.classList.remove('cart-animate'), 1000);
  },

  removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    this.updateCart();
    UI.showToast('Item removed from cart', 'info');
  },

  updateCartItemQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
      item.quantity = newQuantity;
      this.updateCart();
      UI.showToast('Cart updated', 'success');
    }
  },

  clearCart() {
    cart = [];
    this.updateCart();
  },

  updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.updateCartUI();
  },

  updateCartUI() {
    this.updateCartCount();
    this.updateCartDropdown();
  },

  updateCartCount() {
    const count = this.getCartItemCount();
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) cartCountEl.textContent = count;
  },

  getCartTotal() {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  },

  getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  updateCartDropdown() {
    const container = document.querySelector('.cart-items');
    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = '<p class="text-center text-muted py-3">Your cart is empty</p>';
      const subtotalEl = document.getElementById('cartSubtotal');
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      return;
    }

    container.innerHTML = '';
    let subtotal = 0;

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
        container.appendChild(cartItem);
      }
    });

    const subtotalEl = document.getElementById('cartSubtotal');
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    this.addCartItemRemoveListeners();
  },

  addCartItemRemoveListeners() {
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        CartManager.removeFromCart(productId);
      });
    });
  }
};

// ==================== WISHLIST MANAGEMENT ====================
const WishlistManager = {
  init() {
    this.updateWishlistUI();
  },

  addToWishlist(productId) {
    if (!this.isInWishlist(productId)) {
      wishlist.push(productId);
      this.updateWishlist();
      UI.showToast('Added to wishlist', 'success');
      
      // Animation effect
      const wishlistIcon = document.querySelector('#wishlistDropdown i');
      if (wishlistIcon) {
        wishlistIcon.classList.add('cart-animate');
        setTimeout(() => wishlistIcon.classList.remove('cart-animate'), 1000);
      }
    }
  },

  removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    this.updateWishlist();
    UI.showToast('Removed from wishlist', 'info');
  },

  isInWishlist(productId) {
    return wishlist.includes(productId);
  },

  updateWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    this.updateWishlistUI();
  },

  updateWishlistUI() {
    this.updateWishlistCount();
    this.updateWishlistDropdown();
  },

  updateWishlistCount() {
    const wishlistCountEl = document.getElementById('wishlistCount');
    if (wishlistCountEl) wishlistCountEl.textContent = wishlist.length;
  },

  updateWishlistDropdown() {
    const container = document.querySelector('.wishlist-items');
    if (!container) return;

    if (wishlist.length === 0) {
      container.innerHTML = '<p class="text-center text-muted py-3">Your wishlist is empty</p>';
      return;
    }

    container.innerHTML = '';
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
        container.appendChild(wishlistItem);
      }
    });
    this.addWishlistItemRemoveListeners();
  },

  addWishlistItemRemoveListeners() {
    document.querySelectorAll('.wishlist-item-remove').forEach(btn => {
      btn.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        WishlistManager.removeFromWishlist(productId);
      });
    });
  }
};

// ==================== UI COMPONENTS ====================
const UI = {
  init() {
    this.renderFeaturedProducts();
    this.renderNewArrivals();
    this.initHeroSlider();
    this.initTestimonialSlider();
    this.initCountdownTimer();
    this.initScrollAnimations();
    this.initBackToTop();
    this.initSearch();
    this.setupProductCardListeners();
  },

  // Product Rendering
  renderFeaturedProducts() {
    const container = document.querySelector('#featured .row');
    if (!container) return;

    const featuredProducts = products.filter(product => product.featured);
    container.innerHTML = '';
    
    featuredProducts.forEach(product => {
      const productCard = this.createProductCard(product);
      container.appendChild(productCard);
    });
  },

  renderNewArrivals() {
    const container = document.querySelector('#new-arrivals .row');
    if (!container) return;

    const newArrivals = products.filter(product => product.newArrival);
    container.innerHTML = '';
    
    newArrivals.forEach(product => {
      const productCard = this.createProductCard(product);
      container.appendChild(productCard);
    });
  },

  createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 mb-4';
    
    const card = document.createElement('div');
    card.className = 'card product-card h-100';
    
    // Badges
    let badgesHTML = '';
    if (product.badges) {
      product.badges.forEach((badge, index) => {
        let badgeClass = 'badge';
        if (badge.includes('%')) {
          badgeClass += ' bg-danger';
        } else if (badge === 'New') {
          badgeClass += ' bg-dark';
        } else if (badge === 'Bestseller') {
          badgeClass += ' bg-primary';
        } else if (badge === 'Eco') {
          badgeClass += ' bg-success';
        }
        
        badgesHTML += `<span class="${badgeClass} position-absolute ${index === 0 ? 'start-0' : 'end-0'} m-2">${badge}</span>`;
      });
    }
    
    // Rating stars
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    let ratingStars = '';
    
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
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-img-overlay d-flex align-items-start justify-content-end">
          <button class="btn btn-sm btn-light rounded-circle wishlist-btn" data-id="${product.id}">
            <i class="${WishlistManager.isInWishlist(product.id) ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
        <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
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
          <div>${priceHTML}</div>
          <button class="btn btn-sm btn-outline-primary rounded-circle add-to-cart-btn" data-id="${product.id}">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    `;
    
    col.appendChild(card);
    return col;
  },

  // Quick View Modal
  showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    const modalEl = document.getElementById('quickViewModal');
    
    // Set product details
    modalEl.querySelector('#quickViewTitle').textContent = product.name;
    modalEl.querySelector('#quickViewProductName').textContent = product.name;
    modalEl.querySelector('#quickViewPrice').textContent = `$${product.price.toFixed(2)}`;
    
    if (product.oldPrice) {
      modalEl.querySelector('#quickViewOldPrice').textContent = `$${product.oldPrice.toFixed(2)}`;
      modalEl.querySelector('#quickViewDiscount').textContent = `-${product.discount}%`;
    } else {
      modalEl.querySelector('#quickViewOldPrice').textContent = '';
      modalEl.querySelector('#quickViewDiscount').textContent = '';
    }
    
    modalEl.querySelector('#quickViewDescription').textContent = product.description;
    
    // Set rating
    const ratingContainer = modalEl.querySelector('#quickViewRating');
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
    const mainImage = modalEl.querySelector('#quickViewMainImage');
    mainImage.src = product.image;
    mainImage.alt = product.name;
    
    // Set thumbnails
    const thumbnailsContainer = modalEl.querySelector('.thumbnail-images');
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
    
    // Set color options
    const colorOptionsContainer = modalEl.querySelector('#colorOptions');
    colorOptionsContainer.innerHTML = '';
    
    product.colors.forEach((color, index) => {
      const colorOption = document.createElement('span');
      colorOption.className = `color-option ${index === 0 ? 'active' : ''}`;
      colorOption.style.backgroundColor = color;
      colorOption.addEventListener('click', function() {
        colorOptionsContainer.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
      });
      colorOptionsContainer.appendChild(colorOption);
    });
    
    // Set size options
    const sizeOptionsContainer = modalEl.querySelector('#sizeOptions');
    sizeOptionsContainer.innerHTML = '';
    
    product.sizes.forEach((size, index) => {
      const sizeOption = document.createElement('button');
      sizeOption.type = 'button';
      sizeOption.className = `btn btn-sm btn-outline-secondary ${index === 0 ? 'active' : ''}`;
      sizeOption.textContent = size;
      sizeOption.addEventListener('click', function() {
        sizeOptionsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
      sizeOptionsContainer.appendChild(sizeOption);
    });
    
    // Quantity controls
    const qtyInput = modalEl.querySelector('#productQty');
    qtyInput.value = 1;
    
    modalEl.querySelector('#incrementQty').addEventListener('click', () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
    });
    
    modalEl.querySelector('#decrementQty').addEventListener('click', () => {
      if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
      }
    });
    
    // Add to cart button
    modalEl.querySelector('#addToCartQuickView').addEventListener('click', () => {
      const quantity = parseInt(qtyInput.value);
      const color = modalEl.querySelector('.color-option.active')?.style.backgroundColor || product.colors[0];
      const size = modalEl.querySelector('#sizeOptions .active')?.textContent || product.sizes[0];
      
      CartManager.addToCart(product.id, quantity, color, size);
      modal.hide();
    });
    
    // Wishlist button
    const wishlistBtn = modalEl.querySelector('#addToWishlistQuickView');
    if (WishlistManager.isInWishlist(product.id)) {
      wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
    }
    
    wishlistBtn.addEventListener('click', function() {
      if (WishlistManager.isInWishlist(product.id)) {
        WishlistManager.removeFromWishlist(product.id);
        this.innerHTML = '<i class="far fa-heart"></i>';
      } else {
        WishlistManager.addToWishlist(product.id);
        this.innerHTML = '<i class="fas fa-heart"></i>';
      }
    });
    
    // Show modal
    modal.show();
  },

  // Event Listeners
  setupProductCardListeners() {
    document.addEventListener('click', (e) => {
      // Quick view button
      if (e.target.classList.contains('quick-view-btn') || e.target.closest('.quick-view-btn')) {
        e.preventDefault();
        const productId = parseInt(e.target.closest('.quick-view-btn').getAttribute('data-id'));
        this.showQuickView(productId);
      }
      
      // Add to cart button
      if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
        e.preventDefault();
        const productId = parseInt(e.target.closest('.add-to-cart-btn').getAttribute('data-id'));
        CartManager.addToCart(productId);
      }
      
      // Wishlist button
      if (e.target.classList.contains('wishlist-btn') || e.target.closest('.wishlist-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.wishlist-btn');
        const productId = parseInt(btn.getAttribute('data-id'));
        
        if (WishlistManager.isInWishlist(productId)) {
          WishlistManager.removeFromWishlist(productId);
          btn.innerHTML = '<i class="far fa-heart"></i>';
        } else {
          WishlistManager.addToWishlist(productId);
          btn.innerHTML = '<i class="fas fa-heart"></i>';
        }
      }
    });
  },

  // Sliders
  initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    const dots = document.querySelectorAll('.hero-slider-dots .dot');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        slide.style.opacity = i === index ? '1' : '0';
        slide.style.zIndex = i === index ? '1' : '0';
      });
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      
      currentSlide = index;
    }
    
    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }
    
    function prevSlide() {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    }
    
    // Auto slide
    function startSlider() {
      slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Manual controls
    document.querySelector('.slider-next')?.addEventListener('click', () => {
      clearInterval(slideInterval);
      nextSlide();
      startSlider();
    });
    
    document.querySelector('.slider-prev')?.addEventListener('click', () => {
      clearInterval(slideInterval);
      prevSlide();
      startSlider();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        startSlider();
      });
    });
    
    // Pause on hover
    const slider = document.querySelector('.hero-slider');
    slider?.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider?.addEventListener('mouseleave', startSlider);
    
    // Start the slider
    showSlide(0);
    startSlider();
  },

  initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
      document.querySelector('.testimonial-slider').style.transform = `translateX(-${index * 100}%)`;
      currentSlide = index;
    }
    
    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }
    
    function prevSlide() {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    }
    
    document.querySelector('.testimonial-next')?.addEventListener('click', nextSlide);
    document.querySelector('.testimonial-prev')?.addEventListener('click', prevSlide);
    
    // Auto-advance every 8 seconds
    setInterval(nextSlide, 8000);
  },

  // Countdown Timer
  initCountdownTimer() {
    const daysEl = document.querySelector('.countdown-item:nth-child(1) .countdown-value');
    const hoursEl = document.querySelector('.countdown-item:nth-child(2) .countdown-value');
    const minutesEl = document.querySelector('.countdown-item:nth-child(3) .countdown-value');
    const secondsEl = document.querySelector('.countdown-item:nth-child(4) .countdown-value');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
    function updateCountdown() {
      let days = parseInt(daysEl.textContent);
      let hours = parseInt(hoursEl.textContent);
      let minutes = parseInt(minutesEl.textContent);
      let seconds = parseInt(secondsEl.textContent);
      
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
      
      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
  },

  // Animations
  initScrollAnimations() {
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
          element.removeAttribute('data-animation');
        }
      });
    }
    
    window.addEventListener('scroll', checkAnimation);
    window.addEventListener('load', checkAnimation);
  },

  // Back to Top Button
  initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('active', window.pageYOffset > 300);
    });
    
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  // Search Functionality
  initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchBtn || !searchInput) return;
    
    function performSearch() {
      const query = searchInput.value.trim();
      if (query) {
        // In a real app, this would filter products or call an API
        console.log('Searching for:', query);
        UI.showToast(`Search results for: ${query}`, 'info');
      }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  },

  // Toast Notifications
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
};

// ==================== INITIALIZE APP ====================
document.addEventListener('DOMContentLoaded', () => App.init());