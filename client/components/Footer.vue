<script>
export default {
    mounted() {
        let email = document.querySelector('#email')
        email.href = `mailto:contact@dgd.cx`
    }
}
</script>

<template>
    <footer class="container footer bg-body-tertiary rounded-top p-3 text-muted border-start border-top border-end shadow-lg">
        <div class="row">
            <div class="col d-flex flex-column justify-content-start">
                <p class="text-center"><strong>The Dagda Federation</strong></p>
                <p class="d-xl-inline d-none text-center">Providing a platform for gamers and communities to be born and give gamers a place
                    for entertainment and friendship.</p>
                <p class="text-center">&copy; <a href="https://dgd.cx" class="text-reset">The Dagda Federation</a></p>
            </div>
            <div class="col d-flex flex-column justify-content-start">
                <p class="text-center"><strong>Communities</strong></p>
                <ul class="list-unstyled align-self-center">
                    <li><a href="https://v.dgd.cx" target="_blank" class="text-reset">Voxide</a></li>
                    <li><a href="https://pk.dgd.cx" target="_blank" class="text-reset">Peak</a></li>
                    <li><a href="https://aosg.dgd.cx" target="_blank" class="text-reset">Ace of Spades Global</a></li>
                    <li><a href="https://th.dgd.cx" target="_blank" class="text-reset">The Hallway</a></li>
                </ul>
            </div>
            <div class="col d-flex flex-column justify-content-start">
                <p class="text-center"><strong>Links</strong></p>
                <ul class="list-unstyled align-self-center">
                    <li><router-link to="/shop" class="text-reset">Shop</router-link></li>
                    <li><a href="https://status.dgd.cx" target="_blank" class="text-reset">Status</a></li>
                    <li><a href="#" target="_blank" class="text-reset">Leaderboard</a></li>
                    <li><router-link to="/legal" class="text-reset">Legal</router-link></li>
                </ul>
            </div>
            <div class="col d-flex flex-column justify-content-start">
                <p class="text-center"><strong>Contact</strong></p>
                <ul class="list-unstyled align-self-center">
                    <li><a href="https://discord.gg/9UcvFa63Wf" target="_blank" class="text-reset">Discord</a></li>
                    <li><a id="email" href="mailto:" class="text-reset">E-mail</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>