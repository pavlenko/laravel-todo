<template>
    <!--<div class="card card-info card-outline">
        <div class="card-header">
            <h5 class="card-title">#{{ card.id }}</h5>
            <div class="card-tools">
                <a href="#" class="btn btn-tool btn-link"><i class="far fa-tasks"></i></a>
                <cards-update :card="card" @updateCard="updateCard"></cards-update>
                <cards-delete :card="card" @deleteCard="deleteCard"></cards-delete>
            </div>
        </div>
        <div class="card-body">
            {{ card.name }}
        </div>
    </div>-->
    <div class="info-box justify-content-between align-items-start overflow-hidden border-top border-primary">
        <div class="flex-grow-1">{{ card.name }}</div>
        <cards-update :card="card" @updateCard="updateCard"></cards-update>
        <cards-delete :card="card" @deleteCard="deleteCard"></cards-delete>
    </div>
</template>

<script>
import CardsUpdate from "./CardsUpdate";
import CardsDelete from "./CardsDelete";
import CardDTO from "../DTO/CardDTO";

export default {
    components: {CardsUpdate, CardsDelete},
    props: {
        card: CardDTO
    },
    methods: {
        updateCard(card) { this.$emit('updateCard', card); },
        deleteCard(card) { this.$emit('deleteCard', card); }
    }
}
</script>
