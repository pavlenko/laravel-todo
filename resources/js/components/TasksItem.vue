<template>
    <li class="list-group-item p-2 d-flex justify-content-between">
        <span class="flex-grow-1">{{ task.name }}</span>
        <div>
            <div class="dropdown">
                <a class="badge badge-secondary" href="#" role="button" data-toggle="dropdown">New</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"><span class="badge badge-secondary">New</span></a>
                    <a class="dropdown-item" href="#"><span class="badge badge-primary">In Progress</span></a>
                    <a class="dropdown-item" href="#"><span class="badge badge-success">Done</span></a>
                </div>
            </div>
        </div>
        <tasks-delete :task="task" @deleteTask="deleteTask"></tasks-delete>
    </li>
</template>

<script>
import TasksDelete from "./TasksDelete";

export default {
    components: {TasksDelete},
    props: {
        task: Object
    },
    methods: {
        deleteTask(task) { this.$emit('deleteTask', task); }
    }
}
</script>

<style scoped>

</style>
