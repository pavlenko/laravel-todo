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
                    <p class="login-box-msg">Sign in to start your session</p>
                    <div v-if="errored" class="alert alert-danger p-2" role="alert">
                        <h5 class="alert-heading m-0">
                            Something went wrong
                            <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                                Try again
                            </button>
                        </h5>
                    </div>
                    <form @submit.prevent="onSubmit" style="position: relative">
                        <div class="mb-3">
                            <div class="input-group" :class="{'focused': focused.email}">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-transparent border-right-0 pr-0">
                                        <span class="fas fa-envelope"></span>
                                    </div>
                                </div>
                                <input type="email" class="form-control border-left-0" placeholder="Email" v-model="email" @focus="focused.email = true" @blur="focused.email = false">
                            </div>
                            <div class="invalid-feedback" :class="{'d-block': Array.isArray(errors.email)}">
                                <div v-for="error in errors.email">{{ error }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="input-group" :class="{'focused': focused.password}">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-transparent border-right-0 pr-0">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                                <input :type="password_show ? 'text' : 'password'" class="form-control border-left-0 border-right-0" placeholder="Password" v-model="password" @focus="focused.password = true" @blur="focused.password = false">
                                <div class="input-group-append">
                                    <button type="button" class="input-group-text bg-transparent border-left-0 btn" @click.prevent="password_show = !password_show">
                                        <span class="fas fa-fw" :class="password_show ? 'fa-eye-slash' : 'fa-eye'"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="invalid-feedback" :class="{'d-block': Array.isArray(errors.password)}">
                                <div v-for="error in errors.password">{{ error }}</div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-sm btn-primary mb-3">
                            Sign In
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status">
                                <span class="sr-only">Loading...</span>
                            </span>
                        </button>
                        <div v-if="loading || errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
                    </form>
                    <!--<p class="mb-1">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>-->
                    <p class="mb-0">
                        <router-link :to="{name: 'user_register'}">Register a new membership</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </layout-mini>
</template>

<script>
import LayoutMini from "./LayoutMini";
export default {
    name: "PageLogin",
    components: {LayoutMini},
    data() {
        return {
            email: null,
            password: null,
            password_show: false,
            focused: {email: false, password: false},
            errors: {},
            loading: false,
            errored: false
        }
    },
    methods: {
        onSubmit() {
            this.loading = true;
            this.errored = false;
            this.errors  = {};

            axios
                .post(__baseURL + '/api/V1/auth/login', {email: this.email, password: this.password})
                .then(
                    response => console.log(response),
                )
                .catch((error) => {
                    if (error.response.status >= 500) {
                        this.errored = true;
                    }
                    if (error.response.data.errors) {
                        this.errors = error.response.data.errors;
                    }
                })
                .finally(() => this.loading = false);
        }
    }
}
</script>

<style scoped>
.focused  .input-group-prepend .input-group-text,
.focused  .input-group-append .input-group-text {
    border-color: #80bdff;
}
</style>
