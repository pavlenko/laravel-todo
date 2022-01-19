<template>
    <button type="button" class="btn btn-tool m-0 py-0" @click.prevent v-b-modal="uuid">
        <i class="fas fa-pencil"></i>
        <b-modal :id="uuid" title="Update List" hide-footer>
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h4>
            </div>
            <form @submit.prevent="updateCard" style="position: relative">
                <input type="hidden" name="_method" value="PUT">
                <div class="form-group">
                    <input type="text" class="form-control" name="name" :value="card.name" placeholder="Enter desk name">
                </div>
                <button type="submit" class="btn btn-success">Update</button>
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
        card: Object
    },
    data() {
        return {
            uuid: uuid(),
            loading: false,
            errored: false
        };
    },
    methods: {
        updateCard(event) {
            this.loading = true;
            this.errored = false;
            axios
                .post(__baseURL + '/api/V1/cards/' + this.card.id, new FormData(event.target))
                .then(response => {
                    this.$emit('updateCard', response.data.data);
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
