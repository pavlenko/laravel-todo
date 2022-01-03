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
            <div class="container-fluid h-100" style="min-width: 100%">
                <lists-item v-for="list in lists" :key="list.id" :list="list" @updateList="updateList" @deleteList="deleteDesk"></lists-item>
            </div>
        </section>
    </div>
    <!--<div>
        <h1>{{ desk.name }}</h1>
        <div v-if="!loading" class="board-container" style="min-height: 600px">
            <div class="board-columns">
                <div class="board-column-container" v-for="list in lists">
                    <div class="board-column">
                        <div class="board-column-header">
                            <div class="board-column-title">
                                <div class="border-0 p-1">{{ list.name }}</div>
                            </div>
                            <div class="dropdown">
                                <a href="#" class="btn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i>Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <button class="my-1 btn btn-light btn-block btn-sm"><i class="fa fa-plus"></i></button>
                        <div class="board-column-body">
                            <cards :list-id="list.id"></cards>
                        </div>
                    </div>
                </div>
                <div class="">
                    <a class="board-column bg-light btn" href="#">
                        <div class="board-column-header">Create list</div>
                    </a>
                </div>
            </div>
        </div>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status" aria-hidden="true"></div>
        </div>
    </div>-->
</template>

<script>
import Cards from "./Cards";
import ListsItem from "./ListsItem";

export default {
    components: {ListsItem, Cards},
    data() {
        return {
            deskID: this.$route.params.id,
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
                    .get(__baseURL + '/api/V1/desks/' + this.deskID)
                    .then(response => {
                        this.desk = response.data.data;
                        console.log(response);
                    }),
                axios
                    .get(__baseURL + '/api/V1/lists/', {params: {desk_id: this.deskID}})
                    .then(response => {
                        this.lists = response.data.data;
                        console.log(response);
                    })
            ])
            .catch(error => { console.log(error); })
            .finally(() => { this.loading = false; });
    },
    methods: {
        updateList(list) {
            let index = this.lists.findIndex(item => String(item.id) === String(list.id));
            if (index !== -1) {
                this.lists.splice(index, 1, list);
            }
        },
        deleteDesk(list) {
            this.lists = this.lists.filter(item => String(item.id) !== String(list.id));
        }
    }
}
</script>
