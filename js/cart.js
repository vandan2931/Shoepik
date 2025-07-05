document.addEventListener('DOMContentLoaded', function() {
    // Cart Manager Object
    const CartManager = {
        getCart: function() {
            return JSON.parse(localStorage.getItem('cart')) || [];
        },
        
        saveCart: function(cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
            this.updateCartCount();
            this.updateCartDropdown();
        },
        
        addToCart: function(product, quantity = 1, color = null, size = null) {
            const cart = this.getCart();
            const existingItem = cart.find(item => 
                item.id === product.id && 
                item.color === color && 
                item.size === size
            );
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity,
                    color: color,
                    size: size
                });
            }
            
            this.saveCart(cart);
            return cart;
        },
        
        removeFromCart: function(productId) {
            const cart = this.getCart().filter(item => item.id !== productId);
            this.saveCart(cart);
            return cart;
        },
        
        updateCartItemQuantity: function(productId, newQuantity) {
            const cart = this.getCart();
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                item.quantity = newQuantity;
                this.saveCart(cart);
            }
            
            return cart;
        },
        
        getCartSubtotal: function() {
            const products = JSON.parse(localStorage.getItem('products')) || [];
            return this.getCart().reduce((total, item) => {
                const product = products.find(p => p.id === item.id);
                return total + (product ? product.price * item.quantity : 0);
            }, 0);
        },
        
        getCartItemCount: function() {
            return this.getCart().reduce((count, item) => count + item.quantity, 0);
        },
        
        updateCartCount: function() {
            const count = this.getCartItemCount();
            const countElement = document.getElementById('cartCount');
            if (countElement) {
                countElement.textContent = count;
            }
        },
        
        updateCartDropdown: function() {
            const dropdownItems = document.querySelector('.cart-dropdown .cart-items');
            const subtotalElement = document.getElementById('cartSubtotal');
            
            if (!dropdownItems || !subtotalElement) return;
            
            const cart = this.getCart();
            const products = JSON.parse(localStorage.getItem('products')) || [];
            
            dropdownItems.innerHTML = '';
            
            if (cart.length === 0) {
                dropdownItems.innerHTML = '<p class="text-center py-3">Your cart is empty</p>';
                subtotalElement.textContent = '$0.00';
                return;
            }
            
            cart.slice(0, 3).forEach(item => {
                const product = products.find(p => p.id === item.id) || item;
                const itemElement = document.createElement('div');
                itemElement.className = 'd-flex mb-3';
                itemElement.innerHTML = `
                    <img src="${product.image || 'https://via.placeholder.com/60'}" 
                         width="60" height="60" class="border rounded me-2">
                    <div class="flex-grow-1">
                        <h6 class="mb-0">${product.name}</h6>
                        <small>${item.quantity} × $${product.price.toFixed(2)}</small>
                    </div>
                `;
                dropdownItems.appendChild(itemElement);
            });
            
            if (cart.length > 3) {
                const moreItems = document.createElement('div');
                moreItems.className = 'text-center mb-2';
                moreItems.textContent = `+${cart.length - 3} more items`;
                dropdownItems.appendChild(moreItems);
            }
            
            subtotalElement.textContent = `$${this.getCartSubtotal().toFixed(2)}`;
        },
        
        clearCart: function() {
            localStorage.removeItem('cart');
            this.updateCartCount();
            this.updateCartDropdown();
        }
    };

    // UI Helper Functions
    const UI = {
        showToast: function(message, type = 'info') {
            // Remove any existing toasts first
            const existingToasts = document.querySelectorAll('.toast');
            existingToasts.forEach(toast => toast.remove());
            
            const toast = document.createElement('div');
            toast.className = `toast show align-items-center text-white bg-${type} border-0`;
            toast.setAttribute('role', 'alert');
            toast.setAttribute('aria-live', 'assertive');
            toast.setAttribute('aria-atomic', 'true');
            toast.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body">${message}</div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" 
                            data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            `;
            
            const toastContainer = document.getElementById('toastContainer') || 
                                 document.body.appendChild(document.createElement('div'));
            toastContainer.id = 'toastContainer';
            toastContainer.className = 'position-fixed bottom-0 end-0 p-3';
            toastContainer.style.zIndex = '11';
            toastContainer.appendChild(toast);
            
            setTimeout(() => toast.remove(), 3000);
        },
        
        updateAuthUI: function() {
            const userIcon = document.getElementById('userIcon');
            if (userIcon) {
                const isLoggedIn = localStorage.getItem('authToken') !== null;
                userIcon.innerHTML = isLoggedIn ? 
                    '<i class="fas fa-user-check"></i>' : 
                    '<i class="far fa-user"></i>';
            }
        }
    };

    // Initialize cart and products
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let cart = CartManager.getCart();

    // Render cart items
    function renderCartItems() {
        const table = document.getElementById('cartItemsTable');
        if (!table) return;
        
        const emptyRow = table.querySelector('.cart-empty-row');
        const checkoutBtn = document.getElementById('checkoutBtn');
        
        if (cart.length === 0) {
            if (emptyRow) emptyRow.style.display = '';
            if (checkoutBtn) checkoutBtn.classList.add('disabled');
            return;
        }
        
        if (emptyRow) emptyRow.style.display = 'none';
        if (checkoutBtn) checkoutBtn.classList.remove('disabled');
        
        // Clear existing rows except empty row
        table.querySelectorAll('tr:not(.cart-empty-row)').forEach(row => row.remove());
        
        cart.forEach((item, index) => {
            const product = products.find(p => p.id === item.id) || item;
            const itemTotal = product.price * item.quantity;
            
            const row = document.createElement('tr');
            row.className = 'cart-item-row';
            row.setAttribute('data-id', product.id);
            row.setAttribute('data-index', index);
            
            row.innerHTML = `
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${product.image || 'https://via.placeholder.com/80'}" 
                             alt="${product.name}" class="img-thumbnail me-3" width="80">
                        <div>
                            <h6 class="mb-1">${product.name}</h6>
                            ${item.color ? `<p class="text-muted mb-0">Color: ${item.color}</p>` : ''}
                            ${item.size ? `<p class="text-muted mb-0">Size: ${item.size}</p>` : ''}
                        </div>
                    </div>
                </td>
                <td>$${product.price.toFixed(2)}</td>
                <td>
                    <div class="input-group" style="max-width: 120px;">
                        
                        <input type="number" class="form-control text-center quantity-input" 
                               value="${item.quantity}" min="1">
                        
                    </div>
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-outline-danger remove-item-btn">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </td>
            `;
            
            table.insertBefore(row, emptyRow);
        });
    }

    // Update cart summary with correct calculations
    function updateCartSummary() {
        const subtotal = CartManager.getCartSubtotal();
        const shippingThreshold = 100;
        const shipping = subtotal >= shippingThreshold ? 0 : 10;
        const taxRate = 0.08;
        const tax = subtotal * taxRate;
        
        let discount = 0;
        const discountElement = document.querySelector('.discount-applied');
        if (discountElement) {
            const discountText = discountElement.textContent.trim();
            const discountMatch = discountText.match(/(\d+)%/);
            if (discountMatch) {
                discount = subtotal * (parseInt(discountMatch[1]) / 100);
            }
        }
        
        const total = subtotal + shipping + tax - discount;
        
        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
            }).format(amount);
        };
        
        document.getElementById('cartSummarySubtotal').textContent = formatCurrency(subtotal);
        document.getElementById('cartSummaryShipping').textContent = shipping > 0 ? formatCurrency(shipping) : 'FREE';
        document.getElementById('cartSummaryTax').textContent = formatCurrency(tax);
        document.getElementById('cartSummaryDiscount').textContent = discount > 0 ? `-${formatCurrency(discount)}` : '$0.00';
        document.getElementById('cartSummaryTotal').textContent = formatCurrency(total);
    }

    // Apply coupon with proper discount calculation
    function applyCoupon(discountPercent) {
        // Remove any existing coupon
        const existingCoupon = document.querySelector('.discount-applied');
        if (existingCoupon) existingCoupon.remove();
        
        // Create new coupon alert
        const couponMessage = document.createElement('div');
        couponMessage.className = 'alert alert-success discount-applied mt-3';
        couponMessage.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${discountPercent}% discount applied</span>
                <button type="button" class="btn-close remove-coupon" aria-label="Remove"></button>
            </div>
        `;
        
        // Add to DOM
        const couponForm = document.querySelector('.coupon-form');
        if (couponForm) {
            couponForm.insertAdjacentElement('afterend', couponMessage);
            
            // Add event listener for removing coupon
            couponMessage.querySelector('.remove-coupon').addEventListener('click', function() {
                couponMessage.remove();
                updateCartSummary();
                UI.showToast('Coupon removed', 'info');
            });
            
            // Update the cart summary
            updateCartSummary();
        }
    }

    // Initialize back to top button
    function initBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (!backToTop) return;
        
        window.addEventListener('scroll', function() {
            backToTop.classList.toggle('active', window.scrollY > 300);
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialize the page
    UI.updateAuthUI();
    renderCartItems();
    updateCartSummary();
    CartManager.updateCartCount();
    CartManager.updateCartDropdown();
    initBackToTop();

    // Event delegation for cart interactions
    document.getElementById('cartItemsTable')?.addEventListener('change', function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const row = e.target.closest('tr');
            const productId = parseInt(row.getAttribute('data-id'));
            const newQuantity = parseInt(e.target.value);
            
            if (newQuantity > 0) {
                cart = CartManager.updateCartItemQuantity(productId, newQuantity);
                renderCartItems();
                updateCartSummary();
            } else {
                cart = CartManager.removeFromCart(productId);
                renderCartItems();
                updateCartSummary();
                UI.showToast('Item removed from cart', 'success');
            }
        }
    });

    document.getElementById('cartItemsTable')?.addEventListener('click', function(e) {
        // Handle remove item button
        if (e.target.closest('.remove-item-btn')) {
            const row = e.target.closest('tr');
            const productId = parseInt(row.getAttribute('data-id'));
            cart = CartManager.removeFromCart(productId);
            renderCartItems();
            updateCartSummary();
            UI.showToast('Item removed from cart', 'success');
        }
        
        // Handle increment quantity button
        // if (e.target.closest('.increment-btn')) {
        //     const input = e.target.closest('.input-group').querySelector('.quantity-input');
        //     input.value = parseInt(input.value) + 1;
        //     input.dispatchEvent(new Event('change'));
        // }
        
        // // Handle decrement quantity button
        // if (e.target.closest('.decrement-btn')) {
        //     const input = e.target.closest('.input-group').querySelector('.quantity-input');
        //     if (parseInt(input.value) > 1) {
        //         input.value = parseInt(input.value) - 1;
        //         input.dispatchEvent(new Event('change'));
        //     }
        // }
    });

    // Coupon form submission
    document.querySelector('.coupon-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const couponInput = this.querySelector('input');
        if (!couponInput) return;
        
        const couponCode = couponInput.value.trim().toUpperCase();
        
        if (couponCode === 'SHOE10') {
            applyCoupon(10);
            UI.showToast('10% discount applied!', 'success');
            couponInput.value = '';
        } else if (couponCode === 'SHOE20') {
            applyCoupon(20);
            UI.showToast('20% discount applied!', 'success');
            couponInput.value = '';
        } else {
            UI.showToast('Invalid coupon code', 'error');
        }
    });

    // Make CartManager available globally
    window.CartManager = CartManager;
});