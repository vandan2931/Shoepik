document.addEventListener('DOMContentLoaded', function() {
    // Initialize checkout process
    const checkout = {
        init() {
            this.loadCartItems();
            this.setupEventListeners();
            this.updateOrderSummary();
            this.checkUserAuth();
        },

        loadCartItems() {
            const cart = CartManager.getCart();
            const products = JSON.parse(localStorage.getItem('products')) || [];
            const orderItems = document.getElementById('orderItems');
            const checkoutItems = document.getElementById('checkoutItems');
            
            orderItems.innerHTML = '';
            checkoutItems.innerHTML = '';
            
            if (cart.length === 0) {
                window.location.href = 'cart.html';
                return;
            }
            
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id) || item;
                const itemTotal = product.price * item.quantity;
                
                // Add to order review table
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div class="d-flex align-items-center">
                            <img src="${product.image || 'https://via.placeholder.com/60'}" 
                                 alt="${product.name}" width="60" class="me-3">
                            <div>
                                <h6 class="mb-0">${product.name}</h6>
                                ${item.color ? `<small class="text-muted">Color: ${item.color}</small><br>` : ''}
                                ${item.size ? `<small class="text-muted">Size: ${item.size}</small>` : ''}
                            </div>
                        </div>
                    </td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>${item.quantity}</td>
                    <td>$${itemTotal.toFixed(2)}</td>
                `;
                orderItems.appendChild(row);
                
                // Add to order summary
                const summaryItem = document.createElement('tr');
                summaryItem.innerHTML = `
                    <td>${product.name} × ${item.quantity}</td>
                    <td class="text-end">$${itemTotal.toFixed(2)}</td>
                `;
                checkoutItems.appendChild(summaryItem);
            });
        },

        updateOrderSummary() {
            const subtotal = this.calculateSubtotal();
            const shipping = this.calculateShipping(subtotal);
            const tax = this.calculateTax(subtotal);
            const discount = this.calculateDiscount(subtotal);
            const total = subtotal + shipping + tax - discount;
            
            this.updateSummaryUI(subtotal, shipping, tax, discount, total);
        },

        calculateSubtotal() {
            const cart = CartManager.getCart();
            const products = JSON.parse(localStorage.getItem('products')) || [];
            return cart.reduce((total, item) => {
                const product = products.find(p => p.id === item.id) || item;
                return total + (Number(product.price) * Number(item.quantity));
            }, 0);
        },

        calculateShipping(subtotal) {
            const shippingThreshold = 100;
            return subtotal >= shippingThreshold ? 0 : 10;
        },

        calculateTax(subtotal) {
            const taxRate = 0.08; // 8% tax
            return subtotal * taxRate;
        },

        calculateDiscount(subtotal) {
            const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();
            if (promoCode === 'SHOE10') return subtotal * 0.10;
            if (promoCode === 'SHOE20') return subtotal * 0.20;
            return 0;
        },

        updateSummaryUI(subtotal, shipping, tax, discount, total) {
            const formatCurrency = (amount) => {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2
                }).format(amount);
            };
            
            document.getElementById('checkoutSubtotal').textContent = formatCurrency(subtotal);
            document.getElementById('checkoutShipping').textContent = shipping > 0 ? formatCurrency(shipping) : 'FREE';
            document.getElementById('checkoutTax').textContent = formatCurrency(tax);
            document.getElementById('checkoutDiscount').textContent = discount > 0 ? `-${formatCurrency(discount)}` : '$0.00';
            document.getElementById('checkoutTotal').textContent = formatCurrency(total);
        },

        setupEventListeners() {
            // Payment method toggle
            document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    document.getElementById('creditCardForm').style.display = 
                        this.id === 'creditCard' ? 'block' : 'none';
                    document.getElementById('paypalForm').style.display = 
                        this.id === 'paypal' ? 'block' : 'none';
                });
            });
            
            // Continue to payment button
            document.getElementById('continueToPayment').addEventListener('click', () => {
                if (document.getElementById('shippingForm').checkValidity()) {
                    this.updateShippingReview();
                    const paymentTab = new bootstrap.Tab(document.getElementById('payment-tab'));
                    paymentTab.show();
                } else {
                    document.getElementById('shippingForm').reportValidity();
                }
            });
            
            // Back to shipping button
            document.getElementById('backToShipping').addEventListener('click', () => {
                const shippingTab = new bootstrap.Tab(document.getElementById('shipping-tab'));
                shippingTab.show();
            });
            
            // Continue to review button
            document.getElementById('continueToReview').addEventListener('click', () => {
                if (document.getElementById('paymentForm').checkValidity()) {
                    this.updatePaymentReview();
                    const reviewTab = new bootstrap.Tab(document.getElementById('review-tab'));
                    reviewTab.show();
                } else {
                    document.getElementById('paymentForm').reportValidity();
                }
            });
            
            // Back to payment button
            document.getElementById('backToPayment').addEventListener('click', () => {
                const paymentTab = new bootstrap.Tab(document.getElementById('payment-tab'));
                paymentTab.show();
            });
            
            // Edit shipping button
            document.getElementById('editShipping').addEventListener('click', () => {
                const shippingTab = new bootstrap.Tab(document.getElementById('shipping-tab'));
                shippingTab.show();
            });
            
            // Edit payment button
            document.getElementById('editPayment').addEventListener('click', () => {
                const paymentTab = new bootstrap.Tab(document.getElementById('payment-tab'));
                paymentTab.show();
            });
            
            // Place order button
            document.getElementById('placeOrder').addEventListener('click', () => {
                if (document.getElementById('agreeTerms').checked) {
                    this.placeOrder();
                } else {
                    UI.showToast('Please agree to the terms and conditions', 'error');
                }
            });
            
            // Apply promo code
            document.getElementById('applyPromo').addEventListener('click', () => {
                this.updateOrderSummary();
                const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();
                if (promoCode === 'SHOE10' || promoCode === 'SHOE20') {
                    UI.showToast(`${promoCode === 'SHOE10' ? '10%' : '20%'} discount applied!`, 'success');
                } else if (promoCode) {
                    UI.showToast('Invalid promo code', 'error');
                }
            });
        },

        updateShippingReview() {
            const shippingReview = document.getElementById('shippingReview');
            shippingReview.innerHTML = `
                <p>${document.getElementById('firstName').value} ${document.getElementById('lastName').value}</p>
                <p>${document.getElementById('address').value}</p>
                <p>${document.getElementById('city').value}, ${document.getElementById('state').value} ${document.getElementById('zip').value}</p>
                <p>${document.getElementById('country').value}</p>
                <p>${document.getElementById('email').value}</p>
                <p>${document.getElementById('phone').value}</p>
            `;
        },

        updatePaymentReview() {
            const paymentReview = document.getElementById('paymentReview');
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').id;
            
            if (paymentMethod === 'creditCard') {
                paymentReview.innerHTML = `
                    <p>Credit Card ending in ${document.getElementById('cardNumber').value.slice(-4)}</p>
                    <p>Expires ${document.getElementById('cardExpiry').value}</p>
                    <p>Name: ${document.getElementById('cardName').value}</p>
                `;
            } else {
                paymentReview.innerHTML = `<p>PayPal</p>`;
            }
        },

        placeOrder() {
            const subtotal = this.calculateSubtotal();
            const shipping = this.calculateShipping(subtotal);
            const tax = this.calculateTax(subtotal);
            const discount = this.calculateDiscount(subtotal);
            const total = subtotal + shipping + tax - discount;
            
            // In a real app, you would send this data to your backend
            const order = {
                id: 'ORD-' + Math.floor(Math.random() * 1000000),
                date: new Date().toISOString(),
                items: CartManager.getCart(),
                shipping: {
                    name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
                    address: document.getElementById('address').value,
                    city: document.getElementById('city').value,
                    state: document.getElementById('state').value,
                    zip: document.getElementById('zip').value,
                    country: document.getElementById('country').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value
                },
                payment: {
                    method: document.querySelector('input[name="paymentMethod"]:checked').id,
                    details: document.querySelector('input[name="paymentMethod"]:checked').id === 'creditCard' ? {
                        cardLast4: document.getElementById('cardNumber').value.slice(-4),
                        cardName: document.getElementById('cardName').value
                    } : null
                },
                subtotal: subtotal,
                shipping: shipping,
                tax: tax,
                discount: discount,
                total: total
            };
            
            // Save order to localStorage (in a real app, this would be a backend API call)
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Clear cart
            CartManager.clearCart();
            
            // Show confirmation
            document.getElementById('orderNumber').textContent = order.id;
            const modal = new bootstrap.Modal(document.getElementById('orderConfirmationModal'));
            modal.show();
        },

        checkUserAuth() {
            const isLoggedIn = localStorage.getItem('authToken') !== null;
            if (!isLoggedIn) {
                UI.showToast('Please login or create an account to checkout', 'info');
                // In a real app, you might redirect to login with a return URL
            }
        }
    };

    // Initialize checkout
    checkout.init();
});