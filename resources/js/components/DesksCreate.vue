<template>
    <div class="col-xl-3 col-md-4 col-sm-6">
        <a class="info-box p-2 d-flex justify-content-center align-items-center btn" href="#" v-b-modal="uuid" style="max-height: 80px;">
            <span>
                <i class="far fa-plus"></i> Create desk
            </span>
        </a>
        <b-modal :id="uuid" title="Create Desk" hide-footer :header-class="'py-1 px-3'" body-class="p-0">
            <div v-if="errored" class="alert alert-danger p-2 mx-3 mt-3 mb-0" role="alert">
                <h5 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h5>
            </div>
            <form @submit.prevent="createDesk" style="position: relative">
                <div class="px-3 pt-3">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" name="name" v-model="desk.name" placeholder="Enter desk name">
                    </div>
                </div>
                <div class="modal-footer py-1 justify-content-between">
                    <button type="submit" class="btn btn-sm btn-success">Create</button>
                </div>
                <div v-if="errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
                <div v-if="loading" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import {v4 as uuid} from 'uuid';
import DeskDTO from "../DTO/DeskDTO";

export default {
    data() {
        return {
            uuid: uuid(),
            desk: new DeskDTO(),
            loading: false,
            errored: false
        };
    },
    methods: {
        createDesk() {
            this.loading = true;
            this.errored = false;

            this.$store.dispatch('createDesk', this.desk)
                .then(() => this.$bvModal.hide(this.uuid))
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);
        }
    }
}
</script>
