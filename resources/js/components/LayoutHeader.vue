<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button">
                    <i class="fas fa-bars"></i>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li v-if="user" class="nav-item dropdown user-menu">
                <a href="#" class="nav-link dropdown-toggle pr-0" data-toggle="dropdown">
                    <img :src="user.avatar" class="user-image img-circle elevation-1"  alt="User Image">
                    <span class="d-none d-md-in-line">{{ user.name }}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right rounded-0">
                    <li class="mx-3 my-2 d-flex align-items-center">
                        <img :src="user.avatar" style="width: 3rem; height: auto" class="img-circle elevation-1" alt="User Image">
                        <div class="ml-3">
                            {{ user.name }}
                            <div class="text-muted text-xs">{{ user.email }}</div>
                        </div>
                    </li>
                    <div class="dropdown-divider mx-2"></div>
                    <a class="dropdown-item" href="#" @click.prevent="onLogout">
                        Log out
                        <span v-if="loading" class="spinner-border spinner-border-sm" role="status">
                            <span class="sr-only">Loading...</span>
                        </span>
                    </a>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "LayoutHeader",
    data() {
        return {
            loading: false,
            errored: false
        }
    },
    computed: {
        user() {
            return this.$auth.user();
        }
    },
    methods: {
        onLogout() {
            this.loading = true;
            this.errored = false;

            this.$auth
                .logout({})
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
