<template>
    <div class="d-flex justify-content-between">
        <h5 class="mr-3"><i class="far fa-fw fa-align-left"></i></h5>
        <div class="form-group flex-grow-1">
            <h5>Description</h5>
            <div v-html="value" ref="text" @click="onFocus"></div>
        </div>
    </div>
</template>

<script>
import CardDTO from "../DTO/CardDTO";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
            console.log(this.card);
            axios
                .post(__baseURL + '/api/V1/cards/' + this.card.id, Object.assign({_method: 'PUT'}, this.card))
                .then(response => {
                    this.$emit('updateCard', new CardDTO(response.data.data));
                })
                .catch(error => {
                    this.errored = true;
                    console.log(error);
                })
                .finally(() => { this.loading = false; });
        }
    }
}
</script>

<style scoped>

</style>
