<template>
    <div class="card-body p-2">
        <cards-item v-for="card in cards" :key="card.id" :card="card"></cards-item>
        <cards-create></cards-create>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status" aria-hidden="true"></div>
        </div>
    </div>
</template>

<script>
import CardsItem from "./CardsItem";
import CardsCreate from "./CardsCreate";

export default {
    components: {CardsItem, CardsCreate},
    props: {
        listId: Number
    },
    data() {
        return {
            cards: [],
            loading: false
        };
    },
    mounted() {
        this.loading = true;
        axios
            .get(__baseURL + '/api/V1/cards/', {params: {list_id: this.listId}})
            .then(response => {
                this.cards = response.data.data;
                console.log(response);
            })
            .catch(error => { console.log(error); })
            .finally(() => { this.loading = false; });
    }
};
</script>