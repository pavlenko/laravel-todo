<template>
    <li class="list-group-item p-2">
        <div class="d-flex justify-content-between position-relative">
            <div v-if="editing" class="flex-grow-1">
                <input class="form-control form-control-sm" name="name" ref="name" v-model="name" @blur="viewName">
            </div>
            <button v-if="editing" type="button" class="btn btn-sm" @click="saveName">
                <i class="far fa-check"></i>
            </button>
            <button v-if="editing" type="button" class="btn btn-sm" @click="viewName">
                <i class="far fa-undo"></i>
            </button>
            <span v-if="!editing" class="flex-grow-1" @click="editName">{{ task.name }}</span>
            <div v-if="!editing">
                <div class="dropdown">
                    <a class="badge" :class="statusClass(task.status || 0)" href="#" data-toggle="dropdown">
                        {{ statusLabel(task.status || 0) }}
                    </a>
                    <div class="dropdown-menu">
                        <a v-for="(status, code) in statuses" class="dropdown-item" href="#" @click="task.status = code; updateTask()">
                            <span class="badge" :class="status.class">{{ status.label }}</span>
                        </a>
                    </div>
                </div>
            </div>
            <tasks-delete v-if="!editing" :task="task" @deleteTask="deleteTask"></tasks-delete>
            <div v-if="loading" class="card-img-overlay p-0 h-100" style="background-color: rgba(255, 255, 255, 0.5)">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="spinner-border" role="status" aria-hidden="true"></div>
                </div>
            </div>
        </div>
        <div v-if="errored" class="invalid-feedback d-block">
            Something went wrong.
            <a class="text-danger" href="#" @click.prevent="errored = false">Try again</a>
        </div>
    </li>
</template>

<script>
import TasksDelete from "./TasksDelete";
import TasksStatus from "./TasksStatus";

export default {
    components: {TasksStatus, TasksDelete},
    props: {
        task: Object
    },
    data() {
        return {
            name: '',
            editing: false,
            loading: false,
            errored: false,
            statuses: [
                {label: 'New', class: 'badge-secondary'},
                {label: 'In Progress', class: 'badge-primary'},
                {label: 'Done', class: 'badge-success'}
            ]
        };
    },
    methods: {
        statusClass(code) {
            return this.statuses[code].class;
        },
        statusLabel(code) {
            return this.statuses[code].label;
        },
        viewName() {
            setTimeout(() => {
                this.editing = false;
            }, 300);
        },
        editName() {
            this.name = this.task.name;
            this.editing = true;
            this.$nextTick(() => {
                this.$refs.name.focus();
            });
        },
        saveName() {
            this.task.name = this.name;
            this.updateTask();
            this.viewName();
        },
        updateTask() {
            this.loading = true;
            this.errored = false;
            axios
                .post(
                    __baseURL + '/api/V1/tasks/' + this.task.id,
                    Object.assign({_method: 'PUT'}, this.task)
                )
                .then(response => {
                    this.$emit('updateTask', response.data.data);
                })
                .catch(error => {
                    this.errored = true;
                    console.log(error);
                })
                .finally(() => { this.loading = false; });
        },
        deleteTask(task) { this.$emit('deleteTask', task); }
    }
}
</script>

<style scoped>

</style>
