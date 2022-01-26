<template>
    <div class="card border-0 bg-transparent shadow-none">
        <div class="card bg-info m-0" style="position: relative;">
            <a class="card-body p-1 d-flex btn" href="#" v-b-modal="uuid">
                Create Card
            </a>
        </div>
        <b-modal :id="uuid" title="Create Card" hide-footer :header-class="'py-1 px-3'" body-class="p-0">
            <div v-if="errored" class="alert alert-danger p-2" role="alert">
                <h4 class="alert-heading m-0">
                    Something went wrong
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="alert" @click="errored = false">
                        Try again
                    </button>
                </h4>
            </div>
            <form @submit.prevent="createCard" style="position: relative">
                <div class="px-3 pt-3">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" name="name" v-model="card.name" placeholder="Enter Card name">
                    </div>
                    <div class="form-group">
                        <label>Text</label>
<!--                        <ckeditor :editor="editor" :config="editorConfig" v-model="card.text"></ckeditor>-->
                    </div>
                </div>
                <div class="modal-footer py-1 justify-content-between">
                    <button type="submit" class="btn btn-sm btn-success">Create</button>
                </div>
                <div v-if="errored" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)"></div>
                <div v-if="loading" class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.5)">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import {v4 as uuid} from "uuid";
//import Editor from '@ckeditor/ckeditor5-build-classic';
import CardDTO from "../DTO/CardDTO";

export default {
    props: {
        listId: Number
    },
    data() {
        return {
            uuid: uuid(),
            card: new CardDTO({list_id: this.listId}),
            loading: false,
            errored: false,
            //editor: Editor,
            editor: null,
            editorConfig: {}
        };
    },
    methods: {
        createCard(event) {
            this.loading = true;
            this.errored = false;
            axios
                .post(__baseURL + '/api/V1/cards', this.card)
                .then(response => {
                    this.$emit('createCard', new CardDTO(response.data.data));
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
