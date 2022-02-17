<template>
    <div class="d-flex justify-content-between">
        <h5 class="mr-3"><i class="far fa-fw fa-tasks"></i></h5>
        <div class="flex-grow-1">
            <h5>Tasks</h5>
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
                tag="ul"
                class="list-group"
                :class="{'mb-3': tasks.length > 0}">
                <tasks-item v-for="task in tasks" :key="task.id" :task="task" @updateTask="updateTask" @deleteTask="deleteTask"></tasks-item>
            </draggable>
            <tasks-create :card-id="cardId" @createTask="createTask"></tasks-create>
        </div>
    </div>
</template>

<script>
import TasksCreate from "./TasksCreate";
import TasksItem from "./TasksItem";
import draggable from "vuedraggable";
import TaskDTO from "../DTO/TaskDTO";

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
                this.tasks = [].map.call(response.data.data, item => new TaskDTO(item));
            })
            .catch(error => {
                this.errored = true;
                console.log(error);
            })
            .finally(() => { this.loading = false; });
    },
    methods: {
        createTask(task) {
            this.tasks.push(task);
        },
        updateTask(task) { console.log(task);
            let index = this.tasks.findIndex(item => String(item.id) === String(task.id));
            if (index !== -1) {
                this.tasks.splice(index, 1, task);
            }
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter(item => String(item.id) !== String(task.id));
        }
    }
}
</script>
