<template>
    <button type="button" class="btn btn-tool m-0 py-0" @click.prevent v-b-modal="uuid">
        <i class="fas fa-trash"></i>
        <b-modal :id="uuid" title="Delete List" hide-footer :header-class="'py-1 px-3'" body-class="p-0">
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h4>
            </div>
            <form @submit.prevent="deleteList" style="position: relative">
                <div class="px-3 pt-3">
                    <p class="text-danger text-center">Are you sure you want delete "{{ list.name }}"</p>
                </div>
                <div class="modal-footer py-1 justify-content-between">
                    <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                </div>
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
import ListDTO from "../DTO/ListDTO";
import DesksAPI from "../api/DesksAPI";

export default {
    props: {
        list: ListDTO
    },
    data() {
        return {
            uuid: uuid(),
            loading: false,
            errored: false
        };
    },
    methods: {
        deleteList() {
            this.loading = true;
            this.errored = false;

            DesksAPI.deleteList(this.list)
                .then(() => {
                    this.$emit('deleteList', this.list);
                    this.$bvModal.hide(this.uuid);
                })
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);
        }
    }
}
</script>

<style scoped>

</style>
