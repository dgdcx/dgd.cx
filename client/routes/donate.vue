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
    <component is="script" src="https://js.stripe.com/v3/" async></component>
    <component is="script" src="https://dgd.cx/stripe.js" async></component>
</template>

<style scoped></style>