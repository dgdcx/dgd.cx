<template>
    <div class="container p-3 d-flex flex-column justify-content-evenly align-items-center text-center">
        <div class="">
            <h1>Donate</h1>
        </div>
        <div class="container d-flex flex-wrap justify-content-center align-items-center">
            <section class="p-3">
                <p>
                    <strong>One-time Donation</strong>
                </p>
                <p>
                    <button class="m-1 btn btn-success" data-checkout-mode="payment"
                        data-price-id="price_1O4RnmIlyJ2E7uGysLBHcPST">
                        Donate
                    </button>
                </p>
            </section>
        </div>
    </div>
    <script src="https://js.stripe.com/v3/"></script>
    <script>
        {
            // Replace with your own publishable key: https://dashboard.stripe.com/test/apikeys
            var PUBLISHABLE_KEY = 'pk_test_51NVevBIlyJ2E7uGyCP3Wy4HgqtMoseqFATzI02ONNtJENCgY9vOUsWH6GHw8Yq7SYIAUhi11ZJaLEe2pEf3jMQqa00rIyG84tz';
            // Replace with the domain you want your users to be redirected back to after payment
            var DOMAIN = "https://dgd.cx/"; //var DOMAIN = location.href.replace(/[^/]*$/, '');

            var stripe = Stripe(PUBLISHABLE_KEY);

            // Handle any errors from Checkout
            var handleResult = function (result) {
                if (result.error) {
                    alert(`Stripe checkout error: ${result.error.message}`)
                    //var displayError = document.getElementById('error-message');
                    //displayError.textContent = result.error.message;
                }
            };

            document.querySelectorAll('button').forEach(function (button) {
                button.addEventListener('click', function (e) {
                    console.log("Clicked!")
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
        }
    </script>
</template>

<style scoped></style>