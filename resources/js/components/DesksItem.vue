<template>
    <div class="col-md-4 col-sm-6">
        <div class="info-box bg-info justify-content-between align-items-start overflow-hidden" style="max-height: 80px;">
            <router-link class="flex-grow-1 text-decoration-none mr-1" :to="{name: 'lists', params: {id: desk.id}}">
                {{ desk.name }}
            </router-link>
            <desks-update class="bg-info" :desk="desk" @updateDesk="updateDesk"></desks-update>
            <desks-delete class="bg-info" :desk="desk" @deleteDesk="deleteDesk"></desks-delete>
        </div>
    </div>
</template>

<script>
import DesksUpdate from "./DesksUpdate";
import DesksDelete from "./DesksDelete";

export default {
    components: {DesksUpdate, DesksDelete},
    props: {
        desk: Object
    },
    data() {
        return {}
    },
    methods: {
        updateDesk(desk) { this.$emit('updateDesk', desk); },
        deleteDesk(desk) { this.$emit('deleteDesk', desk); }
    }
}
</script>
