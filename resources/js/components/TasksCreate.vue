<template>
    <div>
        <div v-if="errored" class="alert alert-danger p-2" role="alert">
            <h4 class="alert-heading m-0">
                Something went wrong
                <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                    Try again
                </button>
            </h4>
        </div>
        <form @submit.prevent="createTask" style="position: relative">
            <input type="hidden" name="card_id" :value="cardId">
            <div class="d-flex align-items-center">
                <input class="form-control form-control-sm" name="name" v-model="task.name">
                <button type="submit" class="btn btn-sm btn-success text-nowrap ml-2">Add Task</button>
            </div>
            <div v-if="errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
            <div v-if="loading" class="card-img-overlay p-0 h-100" style="background-color: rgba(255, 255, 255, 0.5)">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import TaskDTO from "../DTO/TaskDTO";
import DesksAPI from "../api/DesksAPI";

export default {
    props: {
        cardId: Number,
        prevId: Number
    },
    data() {
        return {
            task: new TaskDTO({card_id: this.cardId}),
            loading: false,
            errored: false
        };
    },
    methods: {
        createTask(event) {
            this.loading = true;
            this.errored = false;

            DesksAPI.createTask(this.task, {prev: this.prevId})
                .then(task => {
                    this.$emit('createTask', task);
                    event.target.reset();
                })
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);
        }
    }
}
</script>
