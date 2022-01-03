<template>
    <div class="col-6 col-sm-4" style="padding: 0 7.5px 15px">
        <div class="card bg-light m-0" style="position: relative; height: 80px">
            <a class="card-body p-2 d-flex justify-content-center align-items-center btn" href="#" v-b-modal="uuid">
                Create desk
            </a>
        </div>
        <b-modal :id="uuid" title="Create Desk" hide-footer>
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h4>
            </div>
            <form @submit.prevent="createDesk" style="position: relative">
                <div class="form-group">
                    <input type="text" class="form-control" name="name" placeholder="Enter desk name">
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
import {v4 as uuid} from 'uuid';

export default {
    data() {
        return {
            uuid: uuid(),
            loading: false,
            errored: false
        };
    },
    methods: {
        createDesk(event) {
            this.loading = true;
            this.errored = false;
            axios
                .post(__baseURL + '/api/V1/desks', new FormData(event.target))
                .then(response => {
                    this.$emit('createDesk', response.data.data);
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
