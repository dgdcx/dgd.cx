<script>
import ModalTemplate from './ModalTemplate.vue'
export default {
    components: {
        ModalTemplate
    }
}
</script>

<template>
    <ModalTemplate id="signIn">
        <form @submit.prevent="handleSubmit">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Sign In</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" placeholder="Username" />
                    <small class="form-text text-muted"><a href="#forgotUsername" data-bs-toggle="modal">Forgot
                            username...</a></small>
                </div>
                <br />
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password" />
                    <small class="form-text text-muted"><a href="#forgotPassword" data-bs-toggle="modal">Forgot
                            password...</a></small>
                </div>
                <br />
                <small><a href="#signUp" data-bs-toggle="modal">Sign up instead...</a></small>
            </div>

            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Sign In</button>
                <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </ModalTemplate>
</template>