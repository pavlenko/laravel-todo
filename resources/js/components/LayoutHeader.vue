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
                        <a class="avatar position-relative" v-b-modal="uuid">
                            <span class="card-img-overlay d-flex justify-content-center align-items-center rounded-circle" style="background-color: rgba(0, 0, 0, 0.5)">
                                <i class="fas fa-camera text-white elevation-1"></i>
                            </span>
                            <img :src="user.avatar" style="width: 3rem; height: auto" class="img-circle elevation-1" alt="User Image">
                        </a>
                        <b-modal :id="uuid" title="Update Avatar" hide-footer :header-class="'py-1 px-3'" body-class="p-0">
                            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                                <h4 class="alert-heading m-0">
                                    Something went wrong
                                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                                        Try again
                                    </button>
                                </h4>
                            </div>
                            <form @submit.prevent style="position: relative">
                                <div class="px-3 pt-3">
                                    <div class="form-group">
                                        <label>Avatar</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="exampleInputFile">
                                                <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer py-1 justify-content-between">
                                    <button type="submit" class="btn btn-sm btn-success">Update</button>
                                </div>
                                <div v-if="errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
                                <div v-if="loading" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="spinner-border" role="status" aria-hidden="true"></div>
                                    </div>
                                </div>
                            </form>
                        </b-modal>
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
import {v4 as uuid} from "uuid";
export default {
    name: "LayoutHeader",
    data() {
        return {
            uuid: uuid(),
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

<style scoped>
a.avatar span.card-img-overlay {
    display: none !important;
}
a.avatar:hover span.card-img-overlay {
    display: flex !important;
}
</style>
