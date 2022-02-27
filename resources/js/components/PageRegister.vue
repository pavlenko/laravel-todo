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
                    <form @submit.prevent="onSubmit" style="position: relative">
                        <div class="mb-3">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-transparent border-right-0 pr-0">
                                        <span class="fas fa-fw fa-user"></span>
                                    </div>
                                </div>
                                <input type="text" class="form-control border-left-0" placeholder="Full name" v-model="fields.name">
                            </div>
                            <div class="invalid-feedback" :class="{'d-block': Array.isArray(errors.name)}">
                                <div v-for="error in errors.name">{{ error }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-transparent border-right-0 pr-0">
                                        <span class="fas fa-fw fa-envelope"></span>
                                    </div>
                                </div>
                                <input type="email" class="form-control border-left-0" placeholder="Email" v-model="fields.email">
                            </div>
                            <div class="invalid-feedback" :class="{'d-block': Array.isArray(errors.email)}">
                                <div v-for="error in errors.email">{{ error }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-transparent border-right-0 pr-0">
                                        <span class="fas fa-fw fa-lock"></span>
                                    </div>
                                </div>
                                <input type="password" class="form-control border-left-0 border-right-0" placeholder="Password" v-model="fields.password">
                                <div class="input-group-append">
                                    <a class="input-group-text bg-transparent border-left-0 btn">
                                        <span class="fas fa-fw fa-eye"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="invalid-feedback" :class="{'d-block': Array.isArray(errors.password)}">
                                <div v-for="error in errors.password">{{ error }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-transparent border-right-0 pr-0">
                                        <span class="fas fa-fw fa-lock"></span>
                                    </div>
                                </div>
                                <input type="password" class="form-control border-left-0 border-right-0" placeholder="Retype password" v-model="fields.password_confirmation">
                                <div class="input-group-append">
                                    <a class="input-group-text bg-transparent border-left-0 btn"><span class="fas fa-fw fa-eye"></span></a>
                                </div>
                            </div>
                            <div class="invalid-feedback" :class="{'d-block': Array.isArray(errors.password_confirmation)}">
                                <div v-for="error in errors.password_confirmation">{{ error }}</div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary mb-3">
                            Register
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status">
                                <span class="sr-only">Loading...</span>
                            </span>
                        </button>
                        <div v-if="loading || errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
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
import LayoutMini from "./LayoutMini";
export default {
    components: {LayoutMini},
    data() {
        return {
            fields: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
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
                .post(__baseURL + '/api/V1/auth/register', this.fields)
                .then(
                    response => console.log(response)
                )
                .catch((error) => {
                    if (error.response.status >= 500) {
                        this.errored = true;
                    }
                    if (error.response.data.errors) {
                        this.errors = error.response.data.errors;
                    }
                })
                .finally(() => this.loading = false);;
        }
    }
}
</script>
