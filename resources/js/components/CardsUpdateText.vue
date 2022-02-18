<template>
    <div class="d-flex justify-content-between">
        <h5 class="mr-3"><i class="far fa-fw fa-align-left"></i></h5>
        <div class="form-group flex-grow-1">
            <h5>Description</h5>
            <div contenteditable="true" v-html="value" ref="text" @click="onFocus" data-placeholder="Please add description"></div>
        </div>
    </div>
</template>

<script>
import CardDTO from "../DTO/CardDTO";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DesksAPI from "../api/DesksAPI";

export default {
    props: {
        card:CardDTO
    },
    data() {
        return {
            value: this.card.text,
            loading: false,
            errored: false,
            editing: false
        };
    },
    methods: {
        onFocus() {
            this.editing = true;
            this.editor = ClassicEditor
                .create(this.$refs.text, {
                    toolbar: {
                        shouldNotGroupWhenFull: true
                    }
                })
                .then(editor => {
                    editor.editing.view.focus();
                    editor.ui.focusTracker.on('change:isFocused', (evt, name, isFocused) => {
                        if (!isFocused) {
                            this.value = editor.getData();
                            this.onBlur();
                        }
                    });
                    this.editor = editor;
                })
                .catch(error => { console.error(error); });
        },
        onBlur() {
            this.editor.destroy();
            this.editing = false;
            this.card.text = this.value;
            this.loading = true;
            this.errored = false;

            DesksAPI.updateCard(this.card)
                .then(card => this.$emit('updateCard', card))
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);
        }
    }
}
</script>

<style scoped>
[contentEditable=true] {
    outline: none;
}
[contentEditable=true]:empty:not(:focus)::before{
    content:attr(data-placeholder);
}
</style>
