<script>
import ModalTemplate from './ModalTemplate.vue'
export default {
    components: {
        ModalTemplate
    }
}
</script>

<template>
    <ModalTemplate id="forgotPassword">
        <form @submit="handleSubmit">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Forgot Password</h1>
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
                    <label>Email address</label>
                    <input type="email" class="form-control" placeholder="Email" />
                    <small class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Reset Password</button>
                <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </ModalTemplate>
</template>