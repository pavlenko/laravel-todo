<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Desks</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <router-link :to="{ name: 'home'}">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active">Desks</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="container-fluid" style="min-width: 100%">
                <div v-if="!loading && !errored" class="row" style="margin: 0 -7.5px">
                    <desks-item v-for="desk in desks" :key="desk.id" :desk="desk" @updateDesk="updateDesk" @deleteDesk="deleteDesk"></desks-item>
                    <desks-create @createDesk="createDesk"></desks-create>
                </div>
                <div v-if="errored" class="alert alert-danger p-2" role="alert">
                    <h4 class="alert-heading m-0">
                        Something went wrong
                        <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="load">
                            Try again
                        </button>
                    </h4>
                </div>
                <div v-if="loading" class="d-flex justify-content-center">
                    <div class="spinner-border" role="status" aria-hidden="true"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import DesksItem from "./DesksItem";
import DesksCreate from "./DesksCreate";
import DesksAPI from "../api/DesksAPI";

export default {
    components: {DesksItem, DesksCreate},
    data() {
        return {
            //desks: [],
            loading: false,
            errored: false
        };
    },
    computed: {
        desks() {
            return this.$store.state.desks;
        }
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            this.loading = true;
            this.errored = false;

            this.$store.dispatch('fetchDesks')
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);

            /*DesksAPI.getAllDesk()
                .then(desks => this.desks = desks)
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);*/
        },
        createDesk(desk) {
            this.desks.unshift(desk);
        },
        updateDesk(desk) {
            let index = this.desks.findIndex(item => String(item.id) === String(desk.id));
            if (index !== -1) {
                this.desks.splice(index, 1, desk);
            }
        },
        deleteDesk(desk) {
            this.desks = this.desks.filter(item => String(item.id) !== String(desk.id));
        }
    }
}
</script>
