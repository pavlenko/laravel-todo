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
        <button type="button" class="btn btn-tool m-0 py-0 text-danger">
            <i class="fas fa-trash"></i>
        </button>
    </li>
</template>

<script>
export default {
    props: {
        task: Object
    }
}
</script>

<style scoped>

</style>
