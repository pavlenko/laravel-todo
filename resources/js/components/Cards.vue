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
import DesksAPI from "../api/DesksAPI";

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

        DesksAPI.getAllCard(this.listId)
            .then(cards => this.cards = cards)
            .catch(error => { console.log(error); })
            .finally(() => this.loading = false);
    },
    methods: {
        onAdd(event) {
            // Called in target list
            //console.log('onAdd', this.listId, event);

            let card = this.cards[event.newIndex];
            let prev = this.cards[event.newIndex - 1] ? this.cards[event.newIndex - 1].id : 0;
            let next = this.cards[event.newIndex + 1] ? this.cards[event.newIndex + 1].id : 0;

            DesksAPI.updateCard(card, {list_id: this.listId, prev: prev, next: next})
                .then(card => {
                    this.updateCard(card);
                    this.cards.forEach((item, index) => {
                        item.prev = this.cards[index - 1] ? this.cards[index - 1].id : 0;
                        item.next = this.cards[index + 1] ? this.cards[index + 1].id : 0;
                    })
                })
                .catch(() => {
                    this.cards.splice(event.newIndex, 1);
                    event.from.__vue__.$options.propsData.value.splice(event.oldIndex, 0, card);
                })
                .finally(() => {  });
        },
        onEnd(event) {
            // Called in source list
            //console.log('onEnd', this.listId, event);
            if (event.pullMode !== true) {
                let card = this.cards[event.newIndex];
                let prev = this.cards[event.newIndex - 1] ? this.cards[event.newIndex - 1].id : 0;
                let next = this.cards[event.newIndex + 1] ? this.cards[event.newIndex + 1].id : 0;

                DesksAPI.updateCard(card, {list_id: this.listId, prev: prev, next: next})
                    .then(card => {
                        this.updateCard(card);
                        this.cards.forEach((item, index) => {
                            item.prev = this.cards[index - 1] ? this.cards[index - 1].id : 0;
                            item.next = this.cards[index + 1] ? this.cards[index + 1].id : 0;
                        })
                    })
                    .catch(() => {
                        this.cards.splice(event.oldIndex, 0, this.cards[event.newIndex]);
                    })
                    .finally(() => {  });
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
