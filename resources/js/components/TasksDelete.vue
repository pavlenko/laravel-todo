<template>
    <button type="button" class="btn btn-tool m-0 py-0 text-danger" @click.prevent v-b-modal="uuid">
        <i class="fas fa-trash"></i>
        <b-modal :id="uuid" title="Delete Task" hide-footer :header-class="'py-1 px-3'">
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h4>
            </div>
            <form @submit.prevent="deleteTask" style="position: relative">
                <p class="text-danger text-center">Are you sure you want delete "{{ task.name }}"</p>
                <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                <div v-if="errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
                <div v-if="loading" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            </form>
        </b-modal>
    </button>
</template>

<script>
import {v4 as uuid} from "uuid";

export default {
    props: {
        task: Object
    },
    data() {
        return {
            uuid: uuid(),
            loading: false,
            errored: false
        };
    },
    methods: {
        deleteTask() {
            this.loading = true;
            this.errored = false;
            axios
                .post(__baseURL + '/api/V1/tasks/' + this.task.id, {_method: 'DELETE'})
                .then(() => {
                    this.$emit('deleteTask', this.task);
                    this.$bvModal.hide(this.uuid);
                })
                .catch(error => {
                    this.errored = true;
                    console.log(error);
                })
                .finally(() => { this.loading = false; });
        }
    }
}
</script>
