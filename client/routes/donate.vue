<template>
    <div class="container p-3 d-flex flex-column justify-content-evenly align-items-center text-center">
        <div class=""><h1>Donate</h1></div>
        <div class="container d-flex flex-wrap justify-content-center align-items-center">
            <section class="p-3">
                <p>
                    <strong>One-time Donation</strong>
                </p>
                <p>
                    <button class="m-1 btn btn-success" data-checkout-mode="payment" data-price-id="sku_GU4JYXyvvRb2sX">
                        Donate $5.00 once
                    </button>
                    <button class="m-1 btn btn-success" data-checkout-mode="payment" data-price-id="sku_GU4KO8nfdg8G2Z">
                        Donate $15.00 once
                    </button>
                    <button class="m-1 btn btn-success" data-checkout-mode="payment" data-price-id="sku_GU4LB0wBViiYsm">
                        Donate $50.00 once
                    </button>
                </p>
            </section>
            <section class="p-3">
                <p>
                    <strong>Monthly Donation</strong>
                </p>
                <p>
                    <button class="btn btn-success" data-checkout-mode="subscription" data-price-id="plan_GU4MXg0k0Uv1S6">
                        Donate $20.00 per month
                    </button>
                </p>
            </section>
        </div>
    </div>
</template>

<script>
// Replace with your own publishable key: https://dashboard.stripe.com/test/apikeys
var PUBLISHABLE_KEY = 'pk_test_Tr8olTkdFnnJVywwhNPHwnHK00HkHV4tnP';
// Replace with the domain you want your users to be redirected back to after payment
var DOMAIN = location.href.replace(/[^/]*$/, '');

if (PUBLISHABLE_KEY === 'pk_test_Tr8olTkdFnnJVywwhNPHwnHK00HkHV4tnP') {
    console.log(
        'Replace the hardcoded publishable key with your own publishable key: https://dashboard.stripe.com/test/apikeys'
    );
}

var stripe = Stripe(PUBLISHABLE_KEY);

// Handle any errors from Checkout
var handleResult = function (result) {
    if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
    }
};

document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', function (e) {
        var mode = e.target.dataset.checkoutMode;
        var priceId = e.target.dataset.priceId;
        var items = [{ price: priceId, quantity: 1 }];

        // Make the call to Stripe.js to redirect to the checkout page
        // with the sku or plan ID.
        stripe
            .redirectToCheckout({
                mode: mode,
                lineItems: items,
                successUrl:
                    DOMAIN + 'success.html?session_id={CHECKOUT_SESSION_ID}',
                cancelUrl:
                    DOMAIN + 'canceled.html?session_id={CHECKOUT_SESSION_ID}',
            })
            .then(handleResult);
    });
});
</script>

<style scoped></style>