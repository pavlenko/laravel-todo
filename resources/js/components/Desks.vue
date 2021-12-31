<template>
    <div>
        <h1>Desks</h1>
        <div class="row">
            <div class="col-6 col-sm-4" v-for="desk in desks">
                <desks-item :desk="desk" @deleteDesk="deleteDesk(desk.id)"></desks-item>
            </div>
        </div>
        {{ desks }}
    </div>
</template>

<script>
import DesksItem from "./DesksItem";

export default {
    components: {DesksItem},
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
