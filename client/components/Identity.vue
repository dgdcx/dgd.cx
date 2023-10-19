<script>
import ModalSignIn from "./ModalSignIn.vue"
import ModalSignUp from "./ModalSignUp.vue"
import ModalForgotUsername from "./ModalForgotUsername.vue"
import ModalForgotPassword from "./ModalForgotPassword.vue"
export default {
    components: {
        ModalSignIn,
        ModalSignUp,
        ModalForgotUsername,
        ModalForgotPassword
    }
}
</script>

<template>
    <div>
        <button type="button" class="btn btn-outline-secondary text-light" data-bs-toggle="modal" data-bs-target="#signIn"><i class="bi bi-person"></i> Sign-in</button>
        <button type="button" class="btn btn-outline-secondary text-light" data-bs-toggle="modal" data-bs-target="#signUp"><i class="bi bi-person-add"></i> Sign-up</button>
        <ModalSignIn />
        <ModalSignUp />
        <ModalForgotUsername />
        <ModalForgotPassword />
    </div>
</template>

<style scoped>
div button:last-child {
    margin-right:0;
}
div button {
    margin-right:1em;
}
</style>