<template>
    <div class="card border-0 bg-transparent shadow-none">
        <div class="card bg-info m-0" style="position: relative;">
            <a class="card-body p-1 d-flex btn" href="#" v-b-modal="uuid">
                Create Card
            </a>
        </div>
        <b-modal :id="uuid" title="Create Card" hide-footer>
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h4>
            </div>
            <form @submit.prevent="createCard" style="position: relative">
                TODO content field
                <input type="hidden" name="list_id" :value="listId">
                <div class="form-group">
                    <input type="text" class="form-control" name="name" placeholder="Enter list name">
                </div>
                <button type="submit" class="btn btn-success">Create</button>
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

export default {
    props: {
        listId: Number
    },
    data() {
        return {
            uuid: uuid(),
            loading: false,
            errored: false
        };
    }
}
</script>