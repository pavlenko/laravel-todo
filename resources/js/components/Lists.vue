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
            <div class="container-fluid h-100 board-columns" style="min-width: 100%" ref="boardColumns">
                <draggable
                    v-model="lists"
                    :forceFallback="true"
                    @start="dragging = true"
                    @end="dragging = false">
                    <lists-item v-for="list in lists" :key="list.id" :list="list" @updateList="updateList" @deleteList="deleteDesk"></lists-item>
                </draggable>
                <lists-create :desk-id="desk.id" @createList="createList"></lists-create>
            </div>
        </section>
    </div>
</template>

<script>
import Cards from "./Cards";
import ListsItem from "./ListsItem";
import ListsCreate from "./ListsCreate";
import draggable from "vuedraggable";

export default {
    components: {ListsItem, ListsCreate, Cards, draggable},
    data() {
        return {
            deskId: this.$route.params.id,
            desk: {},
            lists: [],
            loading: false
        };
    },
    mounted() {
        this.loading = true;
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
            .catch(error => { console.log(error); })
            .finally(() => { this.loading = false; });

        // Sortable.create(this.$refs.boardColumns[0], {
        //     handle: '.board-column-title',
        //     forceFallback: true
        // });
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
        deleteDesk(list) {
            this.lists = this.lists.filter(item => String(item.id) !== String(list.id));
        },
        checkMove: function(e) {
            window.console.log("Future index: " + e.draggedContext.futureIndex);
        }
    }
}
</script>
