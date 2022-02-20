<template>
    <div class="card-body p-2">
        <div v-if="errored" class="alert alert-danger p-2" role="alert">
            <h5 class="alert-heading m-0">
                Something went wrong
                <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                    Try again
                </button>
            </h5>
        </div>
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
            loading: false,
            errored: false
        };
    },
    mounted() {
        this.loading = true;
        this.errored = false;

        DesksAPI.getAllCard(this.listId)
            .then(cards => this.cards = cards)
            .catch(() => this.errored = true)
            .finally(() => this.loading = false);
    },
    methods: {
        onAdd(event) {
            // Called in target list
            //console.log('onAdd', this.listId, event);
            this.resortCard(event.from.__vue__.$options.propsData.value, event.oldIndex, this.cards, event.newIndex);
        },
        onEnd(event) {
            // Called in source list
            //console.log('onEnd', this.listId, event);
            if (event.pullMode !== true) {
                this.resortCard(this.cards, event.oldIndex, this.cards, event.newIndex);
            }
        },
        resortCard(oldList, oldIndex, newList, newIndex) {
            let card = this.cards[newIndex];
            let prev = this.cards[newIndex - 1] ? this.cards[newIndex - 1].id : 0;
            let next = this.cards[newIndex + 1] ? this.cards[newIndex + 1].id : 0;

            this.loading = true;
            this.errored = false;
            //TODO maybe better use toast for this action, or centered modal alert & standardize usage
            DesksAPI.updateCard(card, {list_id: this.listId, prev: prev, next: next})
                .then(card => {
                    this.updateCard(card);
                    newList.forEach((item, index) => {
                        item.prev = newList[index - 1] ? newList[index - 1].id : 0;
                        item.next = newList[index + 1] ? newList[index + 1].id : 0;
                    })
                })
                .catch(() => {
                    this.errored = true;
                    newList.splice(newIndex, 1);
                    oldList.splice(oldIndex, 0, card);
                })
                .finally(() => this.loading = false);
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
