<template>
    <layout-mini>
    <div class="d-flex justify-content-center align-items-center bg-light min-vh-100">
        <div class="login-box">
            <div class="login-logo d-flex justify-content-center align-items-center">
                <img src="/external/admin-lte/3.1.0/img/AdminLTELogo.png" alt="AdminLTE Logo" class="img-circle elevation-1 mr-2" style="width: 3rem">
                <router-link :to="{name: 'home'}">Laravel VUE</router-link>
            </div>
            <div class="card">
                <div class="card-body">
                    <p class="login-box-msg">Register a new membership</p>
                    <form method="post" @submit.prevent>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-transparent border-right-0">
                                    <span class="fas fa-fw fa-user"></span>
                                </div>
                            </div>
                            <input type="text" class="form-control" placeholder="Full name">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-transparent border-left-0">
                                    <span class="fas fa-fw fa-envelope"></span>
                                </div>
                            </div>
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-transparent border-right-0">
                                    <span class="fas fa-fw fa-lock"></span>
                                </div>
                            </div>
                            <input type="password" class="form-control" placeholder="Password">
                            <div class="input-group-append">
                                <a class="input-group-text bg-transparent border-left-0 btn"><span class="fas fa-fw fa-eye"></span></a>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-transparent border-right-0">
                                    <span class="fas fa-fw fa-lock"></span>
                                </div>
                            </div>
                            <input type="password" class="form-control border-left-0" placeholder="Retype password">
                            <div class="input-group-append">
                                <a class="input-group-text bg-transparent border-left-0 btn"><span class="fas fa-fw fa-eye"></span></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                                    <label for="agreeTerms">
                                        I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Register</button>
                            </div>
                        </div>
                    </form>
                    <p class="mb-0">
                        <router-link :to="{name: 'user_login'}">I already have a membership</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </layout-mini>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirm: null
            },
            loading: false,
            errored: false
        }
    },
    methods: {
        onSubmit() {
            axios
                .post(__baseURL + '/api/V1/auth/login', {email: this.email, password: this.password})
                .then(
                    response => console.log(response),
                    error => {
                        console.log(error);
                        throw error;
                    }
                );
        }
    }
}
</script>
