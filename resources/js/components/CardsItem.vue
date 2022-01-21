<template>
    <div class="card card-info card-outline">
        <div class="card-header">
            <h5 class="card-title">{{ card.name }}</h5>
            <div class="card-tools">
                <a href="#" class="btn btn-tool btn-link">#3</a>
                <cards-update :card="card" @updateCard="updateCard"></cards-update>
                <cards-delete :card="card" @deleteCard="deleteCard"></cards-delete>
            </div>
        </div>
        <div class="card-body">
            TODO content
            <!--
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" id="customCheckbox1" disabled>
                <label for="customCheckbox1" class="custom-control-label">Bug</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" id="customCheckbox2" disabled>
                <label for="customCheckbox2" class="custom-control-label">Feature</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" id="customCheckbox3" disabled>
                <label for="customCheckbox3" class="custom-control-label">Enhancement</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" id="customCheckbox4" disabled>
                <label for="customCheckbox4" class="custom-control-label">Documentation</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" id="customCheckbox5" disabled>
                <label for="customCheckbox5" class="custom-control-label">Examples</label>
            </div>
            -->
        </div>
    </div>
</template>

<script>
import CardsUpdate from "./CardsUpdate";
import CardsDelete from "./CardsDelete";

export default {
    components: {CardsUpdate, CardsDelete},
    props: {
        card: Object
    },
    methods: {
        updateCard(card) { this.$emit('updateCard', card); },
        deleteCard(card) { this.$emit('deleteCard', card); }
    }
}
</script>
