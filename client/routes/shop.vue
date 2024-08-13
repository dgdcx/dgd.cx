<template>
    <div class="container my-3 d-flex flex-column justify-content-evenly align-items-center text-center"
        style="position:relative;">
        <h1>Shop</h1>
        <form action="/api/stripe/checkout" method="POST">
            <div class="container d-flex flex-wrap justify-content-center align-items-center">
                <div class="card">
                    <img class="card-img-top" src="https://cdn.discordapp.com/app-assets/1159142823522746408/store/1162283505389146234.png?size=600">
                    <div class="card-body">
                        <h5 class="card-title">One-Time VIP Purchase</h5>
                        <p class="card-text">Select a custom amount to spend for VIP with The Dagda Federation.</p>
                        <button type="submit" name="choice" value="onetime_custom" class="btn btn-success">Purchase</button>
                    </div>
                </div>
                <div class="spacer d-none d-md-block"></div>
                <div class="card">
                    <img class="card-img-top" src="https://cdn.discordapp.com/app-assets/1159142823522746408/store/1162283505389146234.png?size=600">
                    <div class="card-body">
                        <h5 class="card-title">Recurring VIP Subscription</h5>
                        <p class="card-text">Select an amount to spend every month for VIP with The Dagda Federation.</p>
                        <button type="submit" name="choice" value="recurring_custom" class="btn btn-success">Subscribe</button>
                    </div>
                </div>
            </div>
        </form>
        <div><h4>Need help or have a question?</h4><p>Please message @Sonicscream on Discord, or send an email to <a href="mailto:support@dgd.cx">support@dgd.cx</a>.</p></div>
        <img class="stripe-mark mt-sm-0 mt-4" src="/stripe/white.svg" />
    </div>
    <component is="script" src="https://js.stripe.com/v3/" async></component>
</template>

<script>
export default {
    mounted() {
        if (this.$route.query.status == "success") {
            alert("Your stripe session was completed. Thank you!");
        } else if (this.$route.query.status == "cancelled") {
            alert("Your Stripe session was cancelled.");
        }
    }
}
</script>

<style scoped>
@keyframes pulse {
    from {
        box-shadow: 0px 0px 1em rgba(0, 0, 0, 0);
    }

    to {
        box-shadow: 0px 0px 1em gold;
    }
}

.pulse {
    animation-duration: 1s;
    animation-name: pulse;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

.stripe-mark {
    max-height: 2em;
}

.spacer {
    width: 1em;
}

.card {
    margin-bottom: 1em;
    width: 20em;
}
</style>