<template>
    <div class="col-6 col-sm-4" style="padding: 0 8px 16px">
        <div class="card bg-light" style="position: relative; height: 80px">
            <a class="card-body p-2 d-flex justify-content-center align-items-center btn" href="#" v-b-modal.create-desk>
                Create desk
            </a>
        </div>
        <b-modal id="create-desk" title="Create Desk" hide-footer>
            <form @submit.prevent="createDesk">
                <div class="form-group">
                    <input type="text" class="form-control" name="name" placeholder="Enter desk name">
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
            <div v-if="loading" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="spinner-border" role="status" aria-hidden="true"></div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        };
    },
    methods: {
        createDesk(event) {
            this.loading = true;
            axios
                .post(__baseURL + '/api/V1/desks', new FormData(event.target))
                .then(response => {
                    this.$emit('success', response.data.data);
                    this.$bvModal.hide('create-desk');
                })
                .catch(error => { console.log(error); })
                .finally(() => { this.loading = false; });
        }
    }
}
</script>
