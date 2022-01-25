<template>
    <div class="info-box justify-content-between align-items-start overflow-hidden border-top border-primary" @click.prevent v-b-modal="uuid">
        <div class="flex-grow-1">{{ card.name }}</div>
<!--        <cards-update :card="card" @updateCard="updateCard"></cards-update>-->
        <cards-delete :card="card" @deleteCard="deleteCard"></cards-delete>
        <b-modal :id="uuid" hide-footer :header-class="'py-1 px-3'">
            <template #modal-header>
                <h5><i class="far fa-fw fa-credit-card"></i> {{ card.name }}</h5>
                <button type="button" aria-label="Close" class="close">×</button>
            </template>
            <h5><i class="far fa-fw fa-align-left"></i> Description</h5>
            <div class="flex-grow-1 ml-2" v-html="card.text"></div>
            <tasks :card-id="card.id"></tasks>
        </b-modal>
    </div>
</template>

<script>
import {v4 as uuid} from "uuid";
import CardsUpdate from "./CardsUpdate";
import CardsDelete from "./CardsDelete";
import Tasks from "./Tasks";
import CardDTO from "../DTO/CardDTO";

export default {
    components: {CardsUpdate, CardsDelete, Tasks},
    props: {
        card: CardDTO
    },
    data() {
        return {
            uuid: uuid()
        };
    },
    methods: {
        updateCard(card) { this.$emit('updateCard', card); },
        deleteCard(card) { this.$emit('deleteCard', card); }
    }
}
</script>
