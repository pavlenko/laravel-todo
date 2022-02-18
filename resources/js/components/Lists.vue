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
            <div v-if="errored" class="alert alert-danger p-2 mx-2" role="alert">
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
            <draggable
                ref="sortable"
                v-model="lists"
                :forceFallback="true"
                @update="resort"
                class="container-fluid h-100" style="min-width: 100%">
                <lists-item v-for="(list, index) in lists" :key="index" :list="list" @updateList="updateList" @deleteList="deleteList"></lists-item>
                <lists-create #footer :desk-id="desk.id" :prev-id="lists.length > 0 ? lists[lists.length - 1].id : 0" @createList="createList"></lists-create>
            </draggable>
        </section>
    </div>
</template>

<script>
import ListsItem from "./ListsItem";
import ListsCreate from "./ListsCreate";
import draggable from "vuedraggable";
import ListDTO from "../DTO/ListDTO";
import DeskDTO from "../DTO/DeskDTO";
import DesksAPI from "../api/DesksAPI";

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

        Promise
            .all([
                DesksAPI.getOneDesk(this.deskId).then(desk => this.desk = desk),
                DesksAPI.getAllList(this.deskId).then(lists => this.lists = lists)
            ])
            .catch(() => this.errored = true)
            .finally(() => this.loading = false);
    },
    methods: {
        resort(event) {
            if (event.newIndex !== event.oldIndex) {
                let list = this.lists[event.newIndex];
                let prev = this.lists[event.newIndex - 1] ? this.lists[event.newIndex - 1].id : 0;
                let next = this.lists[event.newIndex + 1] ? this.lists[event.newIndex + 1].id : 0;

                this.loading = true;
                this.errored = false;

                DesksAPI.updateList(list, {prev: prev, next: next})
                    .then(list => {
                        this.updateList(list);
                        //TODO move somewhere outside
                        this.lists.forEach((list, index) => {
                            list.prev = this.lists[index - 1] ? this.lists[index - 1].id : 0;
                            list.next = this.lists[index + 1] ? this.lists[index + 1].id : 0;
                        })
                    })
                    .catch(error => {
                        this.lists.splice(event.oldIndex, 0, this.lists[event.newIndex]);
                        this.errored = true;
                        console.log(error);
                    })
                    .finally(() => { this.loading = false; });
            }
        },
        resortList(list) {
            //TODO remove & use loop version
            let prev = this.lists.find(item => Number(item.id) === Number(list.prev));
            if (prev) {
                prev.next = list.id;
            }

            let next = this.lists.find(item => Number(item.id) === Number(list.next));
            if (next) {
                next.prev = list.id;
            }
        },
        createList(list) {
            this.lists.push(list);
            this.resortList(list);
        },
        updateList(list) {
            let index = this.lists.findIndex(item => String(item.id) === String(list.id));
            if (index !== -1) {
                this.lists.splice(index, 1, list);
            }
        },
        deleteList(list) {
            this.lists = this.lists.filter(item => String(item.id) !== String(list.id));

            let prev = this.lists.find(item => Number(item.id) === Number(list.prev));
            let next = this.lists.find(item => Number(item.id) === Number(list.next));

            if (prev) {
                prev.next = next ? next.id : 0;
            }
            if (next) {
                next.prev = prev ? prev.id : 0;
            }

            console.log(this.lists);
        }
    }
}
</script>
