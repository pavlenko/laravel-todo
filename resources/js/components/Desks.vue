<template>
    <div>
        <h1>Desks</h1>
        <div class="row" style="margin: 0 -10px">
            <div class="col-6 col-sm-4" style="padding: 0 8px 16px" v-for="desk in desks">
                <div class="card bg-primary" style="position: relative; height: 80px">
                    <router-link class="card-body p-2 btn text-white text-left" :to="{name: 'lists', params: {id: desk.id}}">
                        {{ desk.name }}
                    </router-link>
                </div>
            </div>
            <div class="col-6 col-sm-4" style="padding: 0 8px 16px">
                <div class="card bg-light" style="position: relative; height: 80px">
                    <a class="card-body p-2 d-flex justify-content-center align-items-center btn" href="#" v-b-modal.create-desk>
                        Create desk
                    </a>
                </div>
            </div>
        </div>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
        <b-modal id="create-desk" title="Create Desk">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
        {{ desks }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            desks: [],
            loading: false,
            errored: false
        };
    },
    mounted() {
        this.loading = true;
        axios
            .get(__baseURL + '/api/V1/desks')
            .then(response => {
                this.desks = response.data.data;
                console.log(response);
            })
            .catch(error => { console.log(error); })
            .finally(() => { this.loading = false; });
    },
    methods: {
        createDesk() {

        },
        updateDesk() {

        },
        deleteDesk(id) {
            axios
                .post(__baseURL + '/api/V1/desks/' + id, {
                    _method: 'DELETE'
                })
                .then(() => {
                    this.desks = this.desks.filter(desk => {
                        return desk.id != id;
                    });
                })
                .catch(error => { console.log(error); })
                .finally(() => { this.loading = false; });
        }
    }
}
</script>
