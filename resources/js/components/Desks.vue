<template>
    <div>
        <h1>Desks</h1>
        <div class="row">
            <div class="col-6 col-sm-4" v-for="desk in desks">
                <div class="card">
                    <div class="card-body p-2">
                        <div class="media">
                            <div class="media-body">
                                <h5 class="card-title m-0">{{ desk.name }}</h5>
                            </div>
                            <button class="btn btn-sm">
                                <i class="fas fa-pencil"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            desks: [{name: 'AAA'}]
        };
    },
    mounted() {
        //TODO load desks
    },
    methods: {
        createDesk() {

        },
        updateDesk() {

        },
        deleteDesk() {

        }
    }
}
</script>

<style scoped>

</style>
