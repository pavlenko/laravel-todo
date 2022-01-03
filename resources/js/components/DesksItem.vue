<template>
    <div class="col-6 col-sm-4" style="padding: 0 7.5px 15px">
        <div class="card bg-primary text-white m-0" style="position: relative; height: 80px">
            <div class="card-body p-2">
                <div class="media">
                    <div class="media-body">
                        <router-link class="text-white text-decoration-none" :to="{name: 'lists', params: {id: desk.id}}">
                            {{ desk.name }}
                        </router-link>
                    </div>
                    <desks-update :desk="desk" @updateDesk="updateDesk"></desks-update>
                    <desks-delete :desk="desk" @deleteDesk="deleteDesk"></desks-delete>
                </div>
            </div>
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
