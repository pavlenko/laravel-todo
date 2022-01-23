<template>
    <div>
        <h4>Tasks</h4>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status" aria-hidden="true"></div>
        </div>
        <div v-if="errored" class="alert alert-danger p-2" role="alert">
            <h4 class="alert-heading m-0">
                Something went wrong
                <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" TODO-click="load">
                    Try again
                </button>
            </h4>
        </div>
        <draggable
            v-model="tasks"
            :forceFallback="true"
            @start="dragging = true"
            @end="dragging = false"
            tag="ul"
            class="list-group"
            :class="{'mb-3': tasks.length > 0}">
            <tasks-item v-for="task in tasks" :key="task.id" :task="task"></tasks-item>
        </draggable>
        <tasks-create></tasks-create>
    </div>
</template>

<script>
import TasksCreate from "./TasksCreate";
import TasksItem from "./TasksItem";
import draggable from "vuedraggable";

export default {
    components: {TasksItem, TasksCreate, draggable},
    props: {
        cardId: Number
    },
    data() {
        return {
            tasks: [],
            loading: false,
            errored: false
        };
    },
    mounted() {
        this.loading = true;
        this.errored = false;

        axios
            .get(__baseURL + '/api/V1/tasks', {params: {card_id: this.cardId}})
            .then(response => {
                this.tasks = response.data.data;
                console.log(response);
            })
            .catch(error => {
                this.errored = true;
                console.log(error);
            })
            .finally(() => { this.loading = false; });
    }
}
</script>

<style scoped>

</style>
