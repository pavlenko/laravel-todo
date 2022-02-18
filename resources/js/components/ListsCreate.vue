<template>
    <div class="card card-row border-0 bg-transparent shadow-none">
        <div class="card bg-info m-0" style="position: relative;">
            <a class="card-body p-2 d-flex btn" href="#" v-b-modal="uuid">
                Create List
            </a>
        </div>
        <b-modal :id="uuid" title="Create List" hide-footer :header-class="'py-1 px-3'" body-class="p-0">
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h4>
            </div>
            <form @submit.prevent="createList" style="position: relative">
                <div class="px-3 pt-3">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" name="name" v-model="list.name" placeholder="Enter list name">
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
import {v4 as uuid} from "uuid";
import ListDTO from "../DTO/ListDTO";
import DesksAPI from "../api/DesksAPI";

export default {
    props: {
        deskId: Number,
        prevId: Number
    },
    data() {
        return {
            uuid: uuid(),
            list: new ListDTO({desk_id: this.deskId, prev: this.prevId}),
            loading: false,
            errored: false
        };
    },
    methods: {
        createList() {
            this.loading = true;
            this.errored = false;

            DesksAPI.createList(this.list, {prev: this.prevId})
                .then(list => {
                    this.$emit('createList', list);
                    this.$bvModal.hide(this.uuid);
                })
                .catch(() => this.errored = true)
                .finally(() => { this.loading = false; });
        }
    }
}
</script>
