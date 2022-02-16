<template>
    <div class="card-body p-2">
        <draggable
            v-model="cards"
            :forceFallback="true"
            group="cards"
            @add="onAdd"
            @end="onEnd"
            :class="{'mb-3': cards.length > 0}">
            <cards-item v-for="card in cards" :key="card.id" :card="card" @updateCard="updateCard" @deleteCard="deleteCard"></cards-item>
        </draggable>
        <cards-create :listId="listId" @createCard="createCard"></cards-create>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status" aria-hidden="true"></div>
        </div>
    </div>
</template>

<script>
import CardsItem from "./CardsItem";
import CardsCreate from "./CardsCreate";
import draggable from "vuedraggable";
import CardDTO from "../DTO/CardDTO";

export default {
    components: {CardsItem, CardsCreate, draggable},
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
                this.cards = [].map.call(response.data.data, item => new CardDTO(item));
            })
            .catch(error => { console.log(error); })
            .finally(() => { this.loading = false; });
    },
    methods: {
        onAdd(event) {
            console.log('onAdd', event);
            // Update list ID when add from other list
            this.cards[event.newIndex].list_id = this.listId;
        },
        onEnd(event) {
            console.log('onEnd', event);
        },
        createCard(card) {
            this.cards.push(card);
        },
        updateCard(card) {
            let index = this.cards.findIndex(item => String(item.id) === String(card.id));
            if (index !== -1) {
                this.cards.splice(index, 1, card);
            }
        },
        deleteCard(card) {
            this.cards = this.cards.filter(item => String(item.id) !== String(card.id));
        }
    }
};
</script>
