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
                @end="resortTask"
                :class="{'mb-3': tasks.length > 0}">
                <tasks-item v-for="task in tasks" :key="task.id" :task="task" @updateTask="updateTask" @deleteTask="deleteTask"></tasks-item>
            </draggable>
            <tasks-create :card-id="cardId" :prev-id="tasks.length > 0 ? tasks[tasks.length - 1].id : 0" @createTask="createTask"></tasks-create>
        </div>
    </div>
</template>

<script>
import TasksCreate from "./TasksCreate";
import TasksItem from "./TasksItem";
import draggable from "vuedraggable";
import DesksAPI from "../api/DesksAPI";

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

        DesksAPI.getAllTask(this.cardId)
            .then(tasks => this.tasks = tasks)
            .catch(() => this.errored = true)
            .finally(() => this.loading = false);
    },
    methods: {
        resortTask(event) {
            if (event.newIndex !== event.oldIndex) {
                let task = this.tasks[event.newIndex];
                let prev = this.tasks[event.newIndex - 1] ? this.tasks[event.newIndex - 1].id : 0;
                let next = this.tasks[event.newIndex + 1] ? this.tasks[event.newIndex + 1].id : 0;

                this.loading = true;
                this.errored = false;

                DesksAPI.updateTask(task, {prev: prev, next: next})
                    .then(task => {
                        this.updateTask(task);
                        //TODO move somewhere outside
                        this.tasks.forEach((item, index) => {
                            item.prev = this.tasks[index - 1] ? this.tasks[index - 1].id : 0;
                            item.next = this.tasks[index + 1] ? this.tasks[index + 1].id : 0;
                        })
                    })
                    .catch(error => {
                        this.tasks.splice(event.oldIndex, 0, this.tasks[event.newIndex]);
                        this.errored = true;
                    })
                    .finally(() => this.loading = false);
            }
        },
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
