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
        <tasks-status v-if="!editing" :task="task" @updateTask="updateTask"></tasks-status>
        <tasks-delete v-if="!editing" :task="task" @deleteTask="deleteTask"></tasks-delete>
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
        updateTask(task) { this.$emit('updateTask', task); },
        deleteTask(task) { this.$emit('deleteTask', task); }
    }
}
</script>

<style scoped>

</style>
