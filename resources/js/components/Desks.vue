<template>
    <div>
        <h1>Desks</h1>
        <div class="row" style="margin: 0 -10px">
            <div class="col-6 col-sm-4" style="padding: 0 8px 16px" v-for="desk in desks">
                <div class="card bg-primary" style="position: relative; height: 80px">
                    <a class="card-body p-2 btn text-white text-left" href="#">
                        {{ desk.name }}
                    </a>
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
            desks: []
        };
    },
    mounted() {
        axios
            .get('api/V1/desks')
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
                .post('api/V1/desks/' + id, {
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
