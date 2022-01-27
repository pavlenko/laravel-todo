<template>
    <div class="info-box justify-content-between align-items-start overflow-hidden border-top border-primary" @click.prevent v-b-modal="uuid">
        <div class="flex-grow-1">{{ card.name }}</div>
<!--        <cards-update :card="card" @updateCard="updateCard"></cards-update>-->
        <cards-delete :card="card" @deleteCard="deleteCard"></cards-delete>
        <b-modal :id="uuid" title="Edit Card" hide-footer :header-class="'py-1 px-3'">
            <h5><i class="far fa-fw fa-credit-card"></i> {{ card.name }}</h5>
            <h5><i class="far fa-fw fa-align-left"></i> Description</h5>
            <div class="flex-grow-1 ml-2" v-html="card.text" ref="text" @click="editText"></div>
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

//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    components: {CardsUpdate, CardsDelete, Tasks},
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
        editText() {
            //TODO optimize usage
            // this.editor = ClassicEditor
            //     .create(this.$refs.text)
            //     .then(editor => {
            //         editor.editing.view.focus();
            //         editor.ui.focusTracker.on('change:isFocused', (evt, name, isFocused) => {
            //             if (!isFocused) {
            //                 // Do whatever you want with current editor data:
            //                 console.log(editor.getData());
            //                 editor.destroy();
            //                 //TODO call save only if changed content
            //             }
            //         });
            //         this.editor = editor;
            //     })
            //     .catch(error => { console.error(error); });
        },
        viewText() {
            //TODO destroy editor
            // if (this.editor) {
            //     this.editor.destroy();
            // }
        },
        updateCard(card) { this.$emit('updateCard', card); },
        deleteCard(card) { this.$emit('deleteCard', card); }
    }
}
</script>
