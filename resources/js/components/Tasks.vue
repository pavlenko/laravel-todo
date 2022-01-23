<template>
    <div>
        <h4>Tasks</h4>
        <ul class="list-group">
            <li class="list-group-item p-2 d-flex justify-content-between">
                <span class="flex-grow-1">Cras justo odio</span>
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
                <button type="button" class="btn btn-tool m-0 py-0 text-danger">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>#1</span>
                Dapibus ac facilisis in
                <span class="badge badge-primary">In Progress</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>#1</span>
                Morbi leo risus
                <span class="badge badge-success">Done</span>
            </li>
        </ul>
        <tasks-create></tasks-create>
    </div>
</template>

<script>
import TasksCreate from "./TasksCreate";

export default {
    components: {TasksCreate}
}
</script>

<style scoped>

</style>
