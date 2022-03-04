<template>
    <layout-full>
    <div class="content-wrapper flex-grow-1 d-flex flex-column">
        <section class="content-header">
            <div class="container-fluid">
                <div class="pb-1 mt-0 mb-0 border-bottom">
                    <!--page header alternate markup-->
                    <h1>Desks</h1>
                </div>
                <ol class="breadcrumb text-xs">
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'home'}">Home</router-link>
                    </li>
                    <li class="breadcrumb-item active">Desks</li>
                </ol>
            </div>
        </section>
        <section class="content">
            <div class="container-fluid" style="min-width: 100%">
                <div v-if="!loading && !errored" class="row" style="margin: 0 -7.5px">
                    <desks-item v-for="desk in desks" :key="desk.id" :desk="desk"></desks-item>
                    <desks-create></desks-create>
                </div>
                <div v-if="errored" class="alert alert-danger p-2" role="alert">
                    <h5 class="alert-heading m-0">
                        Something went wrong
                        <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="fetchDesks">
                            Try again
                        </button>
                    </h5>
                </div>
                <div v-if="loading" class="d-flex justify-content-center">
                    <div class="spinner-border" role="status" aria-hidden="true"></div>
                </div>
            </div>
        </section>
    </div>
    </layout-full>
</template>

<script>
import LayoutFull from "./LayoutFull";
import DesksItem from "./DesksItem";
import DesksCreate from "./DesksCreate";

export default {
    components: {LayoutFull, DesksItem, DesksCreate},
    data() {
        return {
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
        this.fetchDesks();
    },
    methods: {
        fetchDesks() {
            this.loading = true;
            this.errored = false;

            this.$store.dispatch('fetchDesks')
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);
        }
    }
}
</script>
