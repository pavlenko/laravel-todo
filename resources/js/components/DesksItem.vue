<template>
    <div class="col-xl-3 col-md-4 col-sm-6">
        <router-link class="info-box bg-info justify-content-between align-items-start overflow-hidden" style="max-height: 80px;" :to="{name: 'lists', params: {id: desk.id}}">
            <div class="flex-grow-1">{{ desk.name }}</div>
            <desks-update class="bg-info" :desk-id="desk.id"></desks-update>
            <desks-delete class="bg-info" :desk="desk"></desks-delete>
        </router-link>
    </div>
</template>

<script>
import DesksUpdate from "./DesksUpdate";
import DesksDelete from "./DesksDelete";
import DeskDTO from "../DTO/DeskDTO";

export default {
    components: {DesksUpdate, DesksDelete},
    props: {
        desk: DeskDTO
    }
}
</script>
