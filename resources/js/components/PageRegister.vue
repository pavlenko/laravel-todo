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
                    <form @submit.prevent="onSubmit" style="position: relative" novalidate="novalidate">
                        <form-input v-model="fields.name"
                                    :error="errors.name"
                                    icon="fas fa-fw fa-user"
                                    placeholder="Full name"/>
                        <form-input v-model="fields.email"
                                    :error="errors.email"
                                    icon="fas fa-fw fa-envelope"
                                    placeholder="Email"/>
                        <form-input v-model="fields.password"
                                    :error="errors.password"
                                    type="password"
                                    icon="fas fa-fw fa-lock"
                                    placeholder="Password"/>
                        <form-input v-model="fields.password_confirmation"
                                    :error="errors.password_confirmation"
                                    type="password"
                                    icon="fas fa-fw fa-lock"
                                    placeholder="Retype password"/>
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
import FormInput from "./FormInput";
import LayoutMini from "./LayoutMini";
export default {
    components: {FormInput, LayoutMini},
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
