<template>
    <li class="list-group-item p-2 d-flex justify-content-between">
        <div v-if="editing" class="flex-grow-1">
            <input class="form-control form-control-sm" name="name" ref="name" v-model="name" @blur="editing = false">
        </div>
        <button v-if="editing" type="button" class="btn btn-sm"><i class="far fa-check"></i></button>
        <button v-if="editing" type="button" class="btn btn-sm" @click="name = task.name; editing = false">
            <i class="far fa-undo"></i>
        </button>
        <span v-if="!editing" class="flex-grow-1" @click="editMode">{{ task.name }}</span>
        <div v-if="!editing">
            <div class="dropdown">
                <a class="badge badge-secondary" href="#" role="button" data-toggle="dropdown">New</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"><span class="badge badge-secondary">New</span></a>
                    <a class="dropdown-item" href="#"><span class="badge badge-primary">In Progress</span></a>
                    <a class="dropdown-item" href="#"><span class="badge badge-success">Done</span></a>
                </div>
            </div>
        </div>
        <tasks-delete v-if="!editing" :task="task" @deleteTask="deleteTask"></tasks-delete>
    </li>
</template>

<script>
import TasksDelete from "./TasksDelete";

export default {
    components: {TasksDelete},
    props: {
        task: Object
    },
    data() {
        return {
            name: '',
            editing: false,
            loading: false,
            errored: false
        };
    },
    methods: {
        editMode() {
            this.name = this.task.name;
            this.editing = true;
            this.$nextTick(() => {
                this.$refs.name.focus();
            });
        },
        deleteTask(task) { this.$emit('deleteTask', task); }
    }
}
</script>

<style scoped>

</style>
