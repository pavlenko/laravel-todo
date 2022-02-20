<template>
    <button type="button" class="btn btn-sm" @click.prevent v-b-modal="uuid">
        <i class="fas fa-trash"></i>
        <b-modal :id="uuid" title="Delete Desk" hide-footer :header-class="'py-1 px-3'" body-class="p-0">
            <div v-if="errored" class="alert alert-danger p-2 mx-3 mt-3 mb-0" role="alert">
                <h5 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h5>
            </div>
            <form @submit.prevent="deleteDesk" style="position: relative">
                <div class="px-3 pt-3">
                    <p class="text-danger text-center">Are you sure you want delete "{{ desk.name }}"</p>
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
import DeskDTO from "../DTO/DeskDTO";

export default {
    props: {
        desk: DeskDTO
    },
    data() {
        return {
            uuid: uuid(),
            loading: false,
            errored: false
        }
    },
    methods: {
        deleteDesk() {
            this.loading = true;
            this.errored = false;

            this.$store.dispatch('deleteDesk', this.desk)
                .then(() => this.$bvModal.hide(this.uuid))
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);
        }
    }
}
</script>
