const productData = {
    "Vanilla Cupcake": { price: "$4.50", desc: "A light vanilla-bean sponge piped high with Madagascar vanilla buttercream and finished with a dusting of sugar pearls. Baked fresh every morning in small batches." },
    "Artisan Bread": { price: "$7.50", desc: "Naturally leavened with our 5-year-old sourdough starter and given a slow 24-hour ferment for a deep, tangy flavor, a crackling crust, and an open, airy crumb." },
    "Chocolate Cake": { price: "$28.00", desc: "Three layers of dark Belgian chocolate sponge soaked in espresso syrup and stacked with silky ganache. Rich enough for a celebration, simple enough for a Tuesday." },
    "Chocolate Chip Cookie": { price: "$3.75", desc: "Thick, chewy-centered cookies loaded with dark and milk chocolate chunks, finished with a sprinkle of flaky sea salt straight out of the oven." },
    "Butter Croissant": { price: "$4.25", desc: "Laminated with European-style butter and proofed overnight for 27 delicate layers. Shatteringly crisp on the outside, soft and buttery within." },
    "Ice Cream": { price: "$4.75", desc: "Small-batch, churned daily with fresh cream and real fruit or cocoa. Ask about our rotating seasonal flavor alongside the classics." },
    "Butter Biscuit": { price: "$3.50", desc: "A crumbly, all-butter biscuit with a golden edge, best enjoyed warm with a smear of jam or local honey." },
    "Cannoli": { price: "$4.50", desc: "Crisp fried shells filled to order with sweet ricotta cream and studded with mini chocolate chips, so the shell never goes soft." },
    "Blueberry Pie": { price: "$26.00", desc: "A lattice-top pie stuffed with wild blueberries, a touch of lemon zest, and warm spice, baked until the filling bubbles through the crust." },
    "Macaroons": { price: "$3.95", desc: "Delicate almond-flour shells with a crisp shell and chewy center, sandwiched around a smooth ganache or fruit filling. Sold individually or by the dozen." },
    "Blueberry Muffin": { price: "$4.00", desc: "A moist, tender crumb bursting with fresh blueberries and topped with a crunchy streusel cap." },
    "Lemon Tart": { price: "$6.75", desc: "Tangy lemon curd made with fresh-squeezed juice, set in a buttery shortcrust shell and lightly torched on top." },
    "Cheesecake": { price: "$7.25", desc: "Baked New York-style with a graham cracker crust, dense and creamy, and a hint of vanilla bean. Ask about our fruit compote toppings." },
    "Brownies": { price: "$4.25", desc: "Fudgy, dense, and intensely chocolatey, made with three kinds of chocolate and a crackly top." },
    "Apple Pie": { price: "$25.00", desc: "A double-crust classic filled with cinnamon-spiced apples and finished with a golden lattice top." },
    "Cinnamon Roll": { price: "$5.25", desc: "Soft, pillowy dough swirled with brown-sugar cinnamon filling and finished with a warm cream-cheese icing." },
    "Eclair": { price: "$5.50", desc: "Hand-piped choux pastry filled with silky vanilla pastry cream and dipped in a glossy chocolate glaze." },
    "Shortbread": { price: "$3.75", desc: "Buttery, crumbly, and not too sweet, our shortbread is baked slow and low for the perfect melt-in-your-mouth texture." },
    "Cr\u00e8me br\u00fbl\u00e9e": { price: "$6.95", desc: "A silky vanilla-bean custard base topped tableside with a torched sugar crust that cracks under the spoon." },
    "Tiramisu": { price: "$7.50", desc: "Espresso-soaked ladyfingers layered with mascarpone cream and a generous dusting of cocoa, made the traditional Italian way." },
    "Lobster Tail": { price: "$6.50", desc: "Flaky, spiral-shaped pastry filled with sweet custard cream and dusted with powdered sugar. A bakery-counter favorite despite the name." },
    "Filipino Cheesebars": { price: "$4.25", desc: "A buttery shortbread crust topped with a lightly tangy cream cheese filling, a family recipe passed down through our head baker." },
    "Pepperoni Pizza": { price: "$14.00", desc: "Our savory break from sweets: a hand-stretched dough topped with San Marzano sauce, mozzarella, and crisp pepperoni, baked in a hot oven." },
    "Doughnut": { price: "$3.50", desc: "Yeast-raised and fried to order, glazed while still warm so it soaks in just enough sweetness." },
    "Red Velvet Cupcake": { price: "$4.75", desc: "A subtly cocoa-forward red velvet crumb topped with a swirl of tangy cream cheese frosting." },
    "Scone": { price: "$4.00", desc: "A crumbly British-style scone, lightly sweet, best split warm and topped with jam and clotted cream." },
    "Pecan Pie": { price: "$27.00", desc: "A gooey brown-sugar and corn syrup filling loaded with toasted pecans in a flaky all-butter crust." },
    "Baklava": { price: "$3.95", desc: "Dozens of paper-thin filo layers, chopped walnuts and pistachios, and a honey-lemon syrup soak. Sold by the piece." },
    "Fruit Danish": { price: "$4.75", desc: "Flaky laminated pastry cradling sweet cream cheese and seasonal fruit, finished with a light apricot glaze." },
    "Opera Cake": { price: "$8.50", desc: "A precise French classic: layers of almond joconde sponge, coffee syrup, chocolate ganache, and coffee buttercream under a mirror glaze." },
    "Profiterole": { price: "$5.75", desc: "Bite-sized choux puffs filled with vanilla cream and drizzled with warm dark chocolate sauce." },
    "Raspberry Scone": { price: "$4.25", desc: "A buttery, crumbly scone studded with fresh raspberries and finished with a light vanilla glaze." },
    "Napoleon (Mille-feuille)": { price: "$6.95", desc: "Crisp layers of puff pastry alternated with silky pastry cream, topped with a classic marbled fondant icing." },
    "Pavlova": { price: "$7.00", desc: "A crisp-shelled, marshmallow-centered meringue base topped with whipped cream and fresh seasonal fruit." },
    "Black Forest Cake": { price: "$29.00", desc: "Chocolate sponge layered with kirsch-soaked cherries and whipped cream, finished with chocolate shavings." },
    "Almond Biscotti": { price: "$4.50", desc: "Twice-baked for a satisfying crunch, packed with toasted almonds, perfect for dipping in coffee or espresso." },
    "Pumpkin Roll": { price: "$6.25", desc: "Spiced pumpkin sponge rolled around a sweet cream cheese filling, a seasonal favorite in cake-roll form." },
    "Opera Slice": { price: "$7.75", desc: "A single slice of our signature opera cake, layered with almond sponge, coffee syrup, and chocolate ganache." },
    "Lemon Meringue Pie": { price: "$26.00", desc: "A tart lemon custard filling piled high with fluffy Italian meringue and lightly toasted." },
    "Strudel": { price: "$6.00", desc: "Thin, hand-stretched pastry wrapped around spiced apples, raisins, and a touch of cinnamon." },
    "Matcha Roll Cake": { price: "$6.75", desc: "A delicately spongy green tea roll cake filled with lightly sweetened whipped cream." },
    "Hazelnut Mousse": { price: "$6.50", desc: "A light, airy hazelnut mousse layered over chocolate sponge and topped with toasted hazelnut shavings." }
};

// ---- Formspree endpoint used for both the contact form and order notifications ----
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvkpygyk';

// ---- Shopping cart state (in-memory for this page view) ----
const DELIVERY_FEE = 4.99;
const FREE_DELIVERY_THRESHOLD = 40;
let cart = []; // { name, price (number), qty, note, img }

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('show');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu after choosing a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Scroll-reveal for product cards (progressive enhancement:
    // cards are fully visible already; this only adds a fade-in)
    const cards = document.querySelectorAll('.card');
    if (cards.length && 'IntersectionObserver' in window) {
        cards.forEach(card => card.classList.add('will-animate'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        cards.forEach(card => observer.observe(card));
    }

    // Contact page form: lightweight client-side confirmation
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (form && status) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            status.textContent = 'Sending…';

            fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            })
                .then((response) => {
                    if (response.ok) {
                        status.textContent = "Thanks for reaching out! We'll get back to you soon.";
                        form.reset();
                    } else {
                        response.json().then((data) => {
                            status.textContent = (data && data.errors)
                                ? data.errors.map(err => err.message).join(', ')
                                : 'Oops! Something went wrong. Please try again.';
                        }).catch(() => {
                            status.textContent = 'Oops! Something went wrong. Please try again.';
                        });
                    }
                })
                .catch(() => {
                    status.textContent = 'Network error — please check your connection and try again.';
                });
        });
    }

    // Keep footer copyright year current
    document.querySelectorAll('.copyright-year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    initProductModal();
    initCart();
});

/* =========================================================
   Product details modal
   ========================================================= */
function initProductModal() {
    const overlay = document.getElementById('product-modal');
    const cards = document.querySelectorAll('.card');
    if (!overlay || !cards.length) return; // page has no product cards

    const modal = overlay.querySelector('.modal');
    const closeBtn = document.getElementById('modal-close');
    const imgEl = document.getElementById('modal-img');
    const titleEl = document.getElementById('modal-title');
    const priceEl = document.getElementById('modal-price');
    const descEl = document.getElementById('modal-desc');
    const orderForm = document.getElementById('modal-order-form');
    const qtyInput = document.getElementById('modal-qty');
    const noteInput = document.getElementById('modal-note');
    const orderStatus = document.getElementById('modal-order-status');
    let lastFocusedEl = null;

    // Turn every card's "Order now" link into a "View Details" trigger.
    // Ordering itself now happens inside the modal, which adds to the cart.
    cards.forEach(card => {
        const nameEl = card.querySelector('h3');
        const cardImg = card.querySelector('img');
        const oldLink = card.querySelector('a.btn2');
        if (!nameEl || !oldLink) return;

        const name = nameEl.textContent.trim();

        const detailsBtn = document.createElement('button');
        detailsBtn.type = 'button';
        detailsBtn.className = 'btn2 view-details-btn';
        detailsBtn.textContent = 'View Details';
        detailsBtn.setAttribute('aria-haspopup', 'dialog');

        oldLink.replaceWith(detailsBtn);

        detailsBtn.addEventListener('click', () => openModal(name, cardImg, detailsBtn));
    });

    function openModal(name, cardImg, triggerEl) {
        const info = productData[name] || {
            price: '$0.00',
            desc: 'A fresh-baked delicacy from Sweet Crumbs Bakery, made daily with quality ingredients.'
        };

        titleEl.textContent = name;
        priceEl.textContent = info.price;
        descEl.textContent = info.desc;
        if (cardImg) {
            imgEl.src = cardImg.src;
            imgEl.alt = cardImg.alt || name;
        }

        qtyInput.value = 1;
        noteInput.value = '';
        orderStatus.textContent = '';

        lastFocusedEl = triggerEl || document.activeElement;
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();

        document.addEventListener('keydown', handleKeydown);
    }

    function closeModal() {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeydown);
        if (lastFocusedEl) lastFocusedEl.focus();
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeModal();
            return;
        }
        if (e.key === 'Tab') {
            const focusable = modal.querySelectorAll('button, input, textarea, [href]');
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const qty = parseInt(qtyInput.value, 10) || 1;
        const name = titleEl.textContent;
        const info = productData[name] || { price: '$0.00' };

        addToCart({
            name: name,
            price: parseFloat(info.price.replace('$', '')) || 0,
            qty: qty,
            note: noteInput.value.trim(),
            img: imgEl.src
        });

        orderStatus.textContent = `Added ${qty} \u00d7 ${name} to your order.`;

        // Give the person a beat to see the confirmation, then close.
        setTimeout(closeModal, 900);
    });
}

/* =========================================================
   Cart / checkout slide-in panel
   ========================================================= */
function initCart() {
    const ordersLink = document.getElementById('orders-link');
    const backdrop = document.getElementById('cart-backdrop');
    const panel = document.getElementById('cart-panel');
    if (!ordersLink || !backdrop || !panel) return;

    const closeBtn = document.getElementById('cart-close');

    // Views
    const cartView = document.getElementById('cart-view');
    const paymentMethodView = document.getElementById('payment-method-view');
    const cardPaymentView = document.getElementById('card-payment-view');
    const transferView = document.getElementById('transfer-view');
    const checkoutView = document.getElementById('checkout-view');
    const confirmationView = document.getElementById('confirmation-view');
    const statusOverlay = document.getElementById('payment-status-overlay');
    const statusIcon = document.getElementById('payment-status-icon');
    const statusText = document.getElementById('payment-status-text');

    // Cart view elements
    const itemsEl = document.getElementById('cart-items');
    const emptyEl = document.getElementById('cart-empty');
    const subtotalEl = document.getElementById('cart-subtotal');
    const deliveryFeeEl = document.getElementById('cart-delivery-fee');
    const totalEl = document.getElementById('cart-total');
    const deliveryHintEl = document.getElementById('cart-delivery-hint');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    // Payment method view
    const paymentMethodTotal = document.getElementById('payment-method-total');
    const payDeliveryBtn = document.getElementById('pay-delivery-btn');
    const payCardBtn = document.getElementById('pay-card-btn');
    const payTransferBtn = document.getElementById('pay-transfer-btn');
    const paymentBackBtn = document.getElementById('payment-back-btn');

    // Card payment view
    const cardForm = document.getElementById('card-payment-form');
    const cardNameInput = document.getElementById('card-name');
    const cardNumberInput = document.getElementById('card-number');
    const cardExpiryInput = document.getElementById('card-expiry');
    const cardCvvInput = document.getElementById('card-cvv');
    const cardError = document.getElementById('card-error');
    const cardRecap = document.getElementById('card-recap');
    const cardPayBtnText = document.getElementById('card-pay-btn-text');
    const cardBackBtn = document.getElementById('card-back-btn');

    // Transfer view
    const transferAmountEl = document.getElementById('transfer-amount');
    const transferCopyBtn = document.getElementById('transfer-copy-btn');
    const transferAccountNumber = document.getElementById('transfer-account-number');
    const transferConfirmBtn = document.getElementById('transfer-confirm-btn');
    const transferBackBtn = document.getElementById('transfer-back-btn');

    // Delivery details (checkout) view
    const checkoutBackBtn = document.getElementById('checkout-back-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutDateInput = document.getElementById('checkout-date');
    const checkoutTimeSelect = document.getElementById('checkout-time');
    const checkoutRecap = document.getElementById('checkout-recap');
    const checkoutError = document.getElementById('checkout-error');
    const checkoutOrderItemsInput = document.getElementById('checkout-order-items');
    const checkoutOrderTotalInput = document.getElementById('checkout-order-total');
    const checkoutPaymentMethodInput = document.getElementById('checkout-payment-method');
    const checkoutSubmitBtn = checkoutForm ? checkoutForm.querySelector('.cart-checkout-btn') : null;

    // Confirmation view
    const confirmationNumber = document.getElementById('confirmation-number');
    const confirmationPayment = document.getElementById('confirmation-payment');
    const confirmationDelivery = document.getElementById('confirmation-delivery');
    const confirmationTotal = document.getElementById('confirmation-total');
    const continueShoppingBtn = document.getElementById('continue-shopping-btn');

    let lastFocusedEl = null;
    let selectedPaymentMethod = ''; // 'delivery' | 'card' | 'transfer'

    function money(n) {
        return '$' + n.toFixed(2);
    }

    function getSubtotal() {
        return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    function getDeliveryFee(subtotal) {
        if (subtotal === 0) return 0;
        return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    }

    function getOrderTotal() {
        const subtotal = getSubtotal();
        return subtotal + getDeliveryFee(subtotal);
    }

    function paymentMethodLabel(method) {
        if (method === 'card') return 'Card payment';
        if (method === 'transfer') return 'Bank transfer';
        return 'Cash / card on delivery';
    }

    function renderCart() {
        const subtotal = getSubtotal();
        const deliveryFee = getDeliveryFee(subtotal);
        const total = subtotal + deliveryFee;
        const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

        const badge = document.getElementById('cart-badge');
        if (badge) badge.textContent = itemCount;
        ordersLink.setAttribute('aria-label', `Orders, ${itemCount} item${itemCount === 1 ? '' : 's'} in cart`);

        itemsEl.innerHTML = '';
        if (!cart.length) {
            itemsEl.appendChild(emptyEl);
        } else {
            cart.forEach(item => {
                const row = document.createElement('div');
                row.className = 'cart-item';
                row.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        ${item.note ? `<p class="cart-item-note">"${item.note}"</p>` : ''}
                        <div class="cart-item-row">
                            <div class="cart-qty-stepper">
                                <button type="button" class="cart-qty-decrease" data-name="${item.name}" aria-label="Decrease quantity">&minus;</button>
                                <span>${item.qty}</span>
                                <button type="button" class="cart-qty-increase" data-name="${item.name}" aria-label="Increase quantity">+</button>
                            </div>
                            <span class="cart-item-price">${money(item.price * item.qty)}</span>
                        </div>
                        <button type="button" class="cart-remove-btn" data-name="${item.name}">Remove</button>
                    </div>
                `;
                itemsEl.appendChild(row);
            });
        }

        subtotalEl.textContent = money(subtotal);
        deliveryFeeEl.textContent = deliveryFee === 0 && subtotal > 0 ? 'FREE' : money(deliveryFee);
        totalEl.textContent = money(total);
        checkoutBtn.disabled = cart.length === 0;

        if (subtotal > 0 && subtotal < FREE_DELIVERY_THRESHOLD) {
            deliveryHintEl.textContent = `Add ${money(FREE_DELIVERY_THRESHOLD - subtotal)} more for free delivery`;
        } else if (subtotal >= FREE_DELIVERY_THRESHOLD) {
            deliveryHintEl.textContent = "You've unlocked free delivery!";
        } else {
            deliveryHintEl.textContent = '';
        }
    }

    itemsEl.addEventListener('click', (e) => {
        const target = e.target;
        const name = target.dataset.name;
        if (!name) return;
        const item = cart.find(i => i.name === name);
        if (!item) return;

        if (target.classList.contains('cart-qty-increase')) {
            item.qty += 1;
        } else if (target.classList.contains('cart-qty-decrease')) {
            item.qty -= 1;
            if (item.qty <= 0) cart = cart.filter(i => i.name !== name);
        } else if (target.classList.contains('cart-remove-btn')) {
            cart = cart.filter(i => i.name !== name);
        } else {
            return;
        }
        renderCart();
    });

    /* ---- Panel open/close ---- */
    function openPanel() {
        lastFocusedEl = document.activeElement;
        showView('cart');
        renderCart();
        backdrop.classList.add('open');
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handlePanelKeydown);
        closeBtn.focus();
    }

    function closePanel() {
        backdrop.classList.remove('open');
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handlePanelKeydown);
        if (lastFocusedEl) lastFocusedEl.focus();
    }

    function handlePanelKeydown(e) {
        if (e.key === 'Escape') closePanel();
    }

    /* ---- View switching ----
       Only one of these is ever visible; everything else gets [hidden]. */
    const allViews = {
        cart: cartView,
        payment: paymentMethodView,
        card: cardPaymentView,
        transfer: transferView,
        delivery: checkoutView,
        confirmation: confirmationView
    };

    function showView(name) {
        Object.entries(allViews).forEach(([key, el]) => {
            el.hidden = key !== name;
        });
        statusOverlay.hidden = true;
    }

    /* ---- Step 1 -> 2: choose payment method ---- */
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        paymentMethodTotal.textContent = `Order total: ${money(getOrderTotal())}`;
        showView('payment');
    });
    paymentBackBtn.addEventListener('click', () => showView('cart'));

    payDeliveryBtn.addEventListener('click', () => {
        selectedPaymentMethod = 'delivery';
        goToDeliveryDetails();
    });

    payCardBtn.addEventListener('click', () => {
        selectedPaymentMethod = 'card';
        cardForm.reset();
        cardError.hidden = true;
        cardRecap.innerHTML = `Charging <strong>${money(getOrderTotal())}</strong> to the card below.`;
        cardPayBtnText.textContent = `Pay ${money(getOrderTotal())}`;
        showView('card');
    });

    payTransferBtn.addEventListener('click', () => {
        selectedPaymentMethod = 'transfer';
        transferAmountEl.textContent = money(getOrderTotal());
        showView('transfer');
    });

    cardBackBtn.addEventListener('click', () => showView('payment'));
    transferBackBtn.addEventListener('click', () => showView('payment'));

    /* ---- Card number / expiry auto-formatting ---- */
    cardNumberInput.addEventListener('input', () => {
        let digits = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
        cardNumberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
    });
    cardExpiryInput.addEventListener('input', () => {
        let digits = cardExpiryInput.value.replace(/\D/g, '').slice(0, 4);
        if (digits.length >= 3) {
            cardExpiryInput.value = digits.slice(0, 2) + '/' + digits.slice(2);
        } else {
            cardExpiryInput.value = digits;
        }
    });
    cardCvvInput.addEventListener('input', () => {
        cardCvvInput.value = cardCvvInput.value.replace(/\D/g, '').slice(0, 4);
    });

    /* ---- Step 3a: card payment submit ---- */
    cardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        cardError.hidden = true;

        const digits = cardNumberInput.value.replace(/\s/g, '');
        const expiryValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiryInput.value.trim());
        const cvvValid = /^\d{3,4}$/.test(cardCvvInput.value.trim());

        if (digits.length !== 16 || !expiryValid || !cvvValid || !cardNameInput.value.trim()) {
            cardError.textContent = 'Please check your card details and try again.';
            cardError.hidden = false;
            return;
        }

        // Simulate a payment gateway: verifying, then verified.
        showStatus('loading', 'Verifying payment\u2026');
        setTimeout(() => {
            showStatus('success', 'Payment verified \u2713');
            setTimeout(() => {
                goToDeliveryDetails();
            }, 3000);
        }, 1200);
    });

    function showStatus(kind, text) {
        statusOverlay.hidden = false;
        statusOverlay.classList.toggle('status-loading', kind === 'loading');
        statusIcon.textContent = kind === 'loading' ? '' : '\u2713';
        statusText.textContent = text;
    }

    /* ---- Step 3b: bank transfer confirm ---- */
    transferCopyBtn.addEventListener('click', () => {
        const value = transferAccountNumber.textContent.trim();
        const done = () => {
            const original = transferCopyBtn.textContent;
            transferCopyBtn.textContent = 'Copied!';
            setTimeout(() => { transferCopyBtn.textContent = original; }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value).then(done).catch(done);
        } else {
            done();
        }
    });

    transferConfirmBtn.addEventListener('click', () => {
        showStatus('success', 'Transfer reference noted \u2713');
        setTimeout(() => {
            goToDeliveryDetails();
        }, 1500);
    });

    /* ---- Step 4: delivery details ---- */
    function goToDeliveryDetails() {
        const today = new Date();
        const minDate = new Date(today);
        minDate.setDate(today.getDate() + 1);
        const maxDate = new Date(today);
        maxDate.setDate(today.getDate() + 14);
        checkoutDateInput.min = minDate.toISOString().split('T')[0];
        checkoutDateInput.max = maxDate.toISOString().split('T')[0];

        checkoutRecap.innerHTML = `
            Paying via <strong>${paymentMethodLabel(selectedPaymentMethod)}</strong> &middot;
            Total <strong>${money(getOrderTotal())}</strong>
        `;

        if (checkoutOrderItemsInput) {
            checkoutOrderItemsInput.value = cart
                .map(item => `${item.qty}x ${item.name}${item.note ? ` (note: ${item.note})` : ''} — ${money(item.price * item.qty)}`)
                .join('\n');
        }
        if (checkoutOrderTotalInput) checkoutOrderTotalInput.value = money(getOrderTotal());
        if (checkoutPaymentMethodInput) checkoutPaymentMethodInput.value = paymentMethodLabel(selectedPaymentMethod);

        showView('delivery');
    }

    checkoutBackBtn.addEventListener('click', () => showView('payment'));

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (checkoutError) checkoutError.hidden = true;

        const total = getOrderTotal();
        const dateLabel = checkoutDateInput.value
            ? new Date(checkoutDateInput.value + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
            : '';
        const timeLabel = checkoutTimeSelect.value;
        const orderNumber = 'SC-' + Math.floor(100000 + Math.random() * 900000);

        if (checkoutSubmitBtn) checkoutSubmitBtn.disabled = true;
        showStatus('loading', 'Placing your order…');

        const formData = new FormData(checkoutForm);
        formData.set('_subject', `New order ${orderNumber} — Sweet Crumbs Bakery`);

        fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then((response) => {
                if (!response.ok) throw new Error('order-not-accepted');

                confirmationNumber.textContent = `#${orderNumber}`;
                confirmationPayment.textContent = `Payment: ${paymentMethodLabel(selectedPaymentMethod)}`;
                confirmationDelivery.textContent = `Arriving ${dateLabel}, ${timeLabel}`;
                confirmationTotal.textContent = `Total charged: ${money(total)}`;

                showView('confirmation');
                cart = [];
                renderCart();
                checkoutForm.reset();
                selectedPaymentMethod = '';
            })
            .catch(() => {
                statusOverlay.hidden = true;
                if (checkoutError) {
                    checkoutError.textContent = "We couldn't place your order — please check your connection and try again.";
                    checkoutError.hidden = false;
                }
            })
            .finally(() => {
                if (checkoutSubmitBtn) checkoutSubmitBtn.disabled = false;
            });
    });

    /* ---- Wire up open / close ---- */
    ordersLink.addEventListener('click', (e) => {
        e.preventDefault();
        openPanel();
    });
    closeBtn.addEventListener('click', closePanel);
    backdrop.addEventListener('click', closePanel);
    continueShoppingBtn.addEventListener('click', closePanel);

    renderCart();
}

function addToCart(newItem) {
    const existing = cart.find(i => i.name === newItem.name);
    if (existing) {
        existing.qty += newItem.qty;
        if (newItem.note) existing.note = newItem.note;
    } else {
        cart.push(newItem);
    }

    const badge = document.getElementById('cart-badge');
    if (badge) {
        const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
        badge.textContent = itemCount;
    }
}
