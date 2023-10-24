<template>
    <div class="container my-3 d-flex flex-column justify-content-evenly align-items-center text-center"
        style="position:relative;">
        <h1>Donate</h1>
        <form action="/api/stripe/checkout" method="POST">
            <div class="container d-flex flex-wrap justify-content-center align-items-center">
                <div class="card">
                    <img class="card-img-top" src="https://cdn.discordapp.com/app-assets/1159142823522746408/store/1162283505389146234.png?size=600">
                    <div class="card-body">
                        <h5 class="card-title">One-Time Donation</h5>
                        <p class="card-text">Select a custom amount to donate to The Dagda Federation.</p>
                        <input type="submit" name="choice" value="custom" class="btn btn-success">Donate</button>
                    </div>
                </div>
                <div class="spacer d-none d-md-block"></div>
                <div class="card">
                    <img class="card-img-top" src="https://cdn.discordapp.com/app-assets/1159142823522746408/store/1162283505389146234.png?size=600">
                    <div class="card-body">
                        <h5 class="card-title">Recurring Donation</h5>
                        <p class="card-text">Select an amount to donate every month to The Dagda Federation.</p>
                        <input type="submit" name="choice" value="disabled" class="btn btn-success disabled">Coming Soon</button>
                    </div>
                </div>
            </div>
        </form>
        <img class="stripe-mark mt-sm-0 mt-4" src="/stripe/white.svg" />
    </div>
    <component is="script" src="https://js.stripe.com/v3/" async></component>
</template>

<script>
export default {
    mounted() {
        if (this.$route.query.status == "success") {
            alert("Thank you for your donation!");
        } else if (this.$route.query.status == "cancelled") {
            alert("Your donation was cancelled.");
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