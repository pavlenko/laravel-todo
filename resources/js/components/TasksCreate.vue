<template>
    <form @submit.prevent="createTask" style="position: relative">
        <div class="d-flex align-items-center">
            <input class="form-control form-control-sm" name="task">
            <button type="button" class="btn btn-sm btn-success text-nowrap ml-2">Add Task</button>
        </div>
    </form>
</template>

<script>
export default {
    methods: {
        createTask(event) {
            console.log(new FormData(event.target));
        }
    }
}
</script>
