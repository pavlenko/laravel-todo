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
        <cards-create :list-id="listId" :prev-id="cards.length > 0 ? cards[cards.length - 1].id : 0" @createCard="createCard"></cards-create>
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
            // Called in target list
            console.log('onAdd', this.listId, event);
            // Update list ID when add from other list
            this.cards[event.newIndex].list_id = this.listId;
            // TODO update card ajax
            // TODO need to pass ref to list from
            console.log('rollback in two lists')
        },
        onEnd(event) {
            // Called in source list
            // TODO if event.pullMode === true - card moved to other list
            // TODO else update card ajax
            console.log('onEnd', this.listId, event);
            if (event.pullMode !== true) {
                console.log('rollback in one list')
            }
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
