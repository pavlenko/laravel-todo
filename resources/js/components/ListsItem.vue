<template>
    <div class="card card-row">
        <div class="card-header p-2">
            <div class="media">
                <div class="media-body board-column-title">
                    <h3 class="card-title">
                        {{ list.name }}
                    </h3>
                </div>
                <lists-update :list="list" @updateList="updateList"></lists-update>
                <lists-delete :list="list" @deleteList="deleteList"></lists-delete>
            </div>
        </div>
        <cards :listId="list.id"></cards>
    </div>
</template>

<script>
import ListsUpdate from "./ListsUpdate";
import ListsDelete from "./ListsDelete";
import Cards from "./Cards";
import ListDTO from "../DTO/ListDTO";

export default {
    components: {ListsUpdate, ListsDelete, Cards},
    props: {
        list: ListDTO
    },
    methods: {
        updateList(list) { this.$emit('updateList', list); },
        deleteList(list) { this.$emit('deleteList', list); }
    }
}
</script>
