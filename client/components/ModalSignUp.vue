<script>
import ModalTemplate from './ModalTemplate.vue'
export default {
    components: {
        ModalTemplate
    }
}
</script>

<template>
    <ModalTemplate id="signUp">
        <form @submit="handleSubmit">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Sign Up</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" placeholder="Username" />
                    <small class="form-text text-muted"></small>
                </div>
                <br />
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password" />
                </div>
                <br />
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" placeholder="Email" />
                    <small class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <br />
                <small><a href="#signIn" data-bs-toggle="modal">Sign in instead...</a></small>
            </div>

            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
        </form>
    </ModalTemplate>
</template>