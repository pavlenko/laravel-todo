<template>
    <button type="button" class="btn btn-tool m-0 py-0" @click.prevent v-b-modal="uuid">
        <i class="fas fa-pencil"></i>
        <b-modal :id="uuid" title="Update List" hide-footer :header-class="'py-1 px-3'">
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h4>
            </div>
            <form @submit.prevent="updateCard" style="position: relative">
                <div class="form-group">
                    <input type="text" class="form-control" name="name" v-model="card.name" placeholder="Enter desk name">
                </div>
                <div class="form-group">
                    <ckeditor :editor="editor" tag-name="textarea" name="text" v-model="card.text" :config="editorConfig"></ckeditor>
                </div>
                <button type="submit" class="btn btn-success">Update</button>
                <div v-if="errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
                <div v-if="loading" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            </form>
            <tasks :card-id="card.id"></tasks>
        </b-modal>
    </button>
</template>

<script>
import {v4 as uuid} from "uuid";
import Editor from '@ckeditor/ckeditor5-build-classic';
import Tasks from "./Tasks";

export default {
    components: {Tasks},
    props: {
        card: Object
    },
    data() {
        return {
            uuid: uuid(),
            loading: false,
            errored: false,
            editor: Editor,
            editorData: 'AAA',
            editorConfig: {}
        };
    },
    methods: {
        updateCard(event) {
            this.loading = true;
            this.errored = false;
            axios
                .post(__baseURL + '/api/V1/cards/' + this.card.id, Object.assign({_method: 'PUT'}, this.card))
                .then(response => {
                    this.$emit('updateCard', response.data.data);
                    this.$bvModal.hide(this.uuid);
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
