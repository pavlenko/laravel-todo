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
                    <form @submit.prevent="onSubmit" style="position: relative" novalidate="novalidate">
                        <form-input v-model="fields.email"
                                    :error="errors.email"
                                    name="email"
                                    icon="fas fa-fw fa-envelope"
                                    placeholder="Email"/>
                        <form-input v-model="fields.password"
                                    :error="errors.password"
                                    type="password"
                                    name="password"
                                    icon="fas fa-fw fa-lock"
                                    placeholder="Password"/>
                        <button type="submit" class="btn btn-sm btn-primary mb-3">
                            Sign In
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status">
                                <span class="sr-only">Loading...</span>
                            </span>
                        </button>
                        <div v-if="loading || errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
                    </form>
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
import FormInput from "./FormInput";
import LayoutMini from "./LayoutMini";
export default {
    name: "PageLogin",
    components: {FormInput, LayoutMini},
    data() {
        return {
            fields: {
                email: null,
                password: null,
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

            this.$auth
                .login({
                    data: this.fields,
                })
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
.focused .input-group-prepend .input-group-text,
.focused .input-group-append .input-group-text {
    border-color: #80bdff;
}

.input-group.is-invalid .input-group-text,
.input-group.is-invalid .btn {
    border-color: #dc3545;
}

.input-group.is-invalid .input-group-text {
    color: #dc3545;
}

.input-group.is-invalid input,
.input-group.is-valid input {
    padding-right: 0.75rem;
    background: none;
}
</style>
