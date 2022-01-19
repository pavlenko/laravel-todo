<template>
    <div class="content-wrapper kanban">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>{{ desk.name }}</h1>
                    </div>
                    <div class="col-sm-6 d-none d-sm-block">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <router-link :to="{name: 'home'}">Home</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link :to="{name: 'desks'}">Desks</router-link>
                            </li>
                            <li class="breadcrumb-item active">{{ desk.name }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section class="content pb-3">
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" TODO-click="load">
                        Try again
                    </button>
                </h4>
            </div>
            <div v-if="loading" class="d-flex justify-content-center">
                <div class="spinner-border" role="status" aria-hidden="true"></div>
            </div>
            <div v-if="!loading && !errored" class="container-fluid h-100" style="min-width: 100%">
                <draggable
                    v-model="lists"
                    :forceFallback="true"
                    @start="dragging = true"
                    @end="dragging = false" class="container-fluid h-100">
                    <lists-item v-for="list in lists" :key="list.id" :list="list" @updateList="updateList" @deleteList="deleteList"></lists-item>
                </draggable>
                <lists-create :desk-id="desk.id" @createList="createList"></lists-create>
            </div>
        </section>
    </div>
</template>

<script>
import ListsItem from "./ListsItem";
import ListsCreate from "./ListsCreate";
import draggable from "vuedraggable";

export default {
    components: {ListsItem, ListsCreate, draggable},
    data() {
        return {
            deskId: this.$route.params.id,
            desk: {},
            lists: [],
            loading: false,
            errored: false
        };
    },
    mounted() {
        this.loading = true;
        this.errored = false;
        axios
            .all([
                axios
                    .get(__baseURL + '/api/V1/desks/' + this.deskId)
                    .then(response => {
                        this.desk = response.data.data;
                        console.log(response);
                    }),
                axios
                    .get(__baseURL + '/api/V1/lists/', {params: {desk_id: this.deskId}})
                    .then(response => {
                        this.lists = response.data.data;
                        console.log(response);
                    })
            ])
            .catch(error => { this.errored = true; console.log(error); })
            .finally(() => { this.loading = false; });
    },
    methods: {
        createList(list) {
            this.lists.push(list);
        },
        updateList(list) {
            let index = this.lists.findIndex(item => String(item.id) === String(list.id));
            if (index !== -1) {
                this.lists.splice(index, 1, list);
            }
        },
        deleteList(list) {
            this.lists = this.lists.filter(item => String(item.id) !== String(list.id));
        }
    }
}
</script>
