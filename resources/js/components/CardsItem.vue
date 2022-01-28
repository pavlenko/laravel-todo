<template>
    <div class="info-box justify-content-between align-items-start overflow-hidden border-top border-primary" @click.prevent v-b-modal="uuid">
        <div class="flex-grow-1">{{ card.name }}</div>
        <cards-delete :card="card" @deleteCard="deleteCard"></cards-delete>
        <b-modal :id="uuid" title="Edit Card" hide-footer :header-class="'py-1 px-3'">
            <cards-update-name :card="card"></cards-update-name>
            <cards-update-text :card="card"></cards-update-text>
            <tasks :card-id="card.id"></tasks>
        </b-modal>
    </div>
</template>

<script>
import {v4 as uuid} from "uuid";
import CardsDelete from "./CardsDelete";
import Tasks from "./Tasks";
import CardDTO from "../DTO/CardDTO";
import CardsUpdateName from "./CardsUpdateName";
import CardsUpdateText from "./CardsUpdateText";

export default {
    components: {CardsUpdateText, CardsUpdateName, CardsDelete, Tasks},
    props: {
        card: CardDTO
    },
    data() {
        return {
            uuid: uuid(),
            editor: null
        };
    },
    methods: {
        updateCard(card) { this.$emit('updateCard', card); },
        deleteCard(card) { this.$emit('deleteCard', card); }
    }
}
</script>
