<template>
    <div class="col-6 col-sm-4" style="padding: 0 8px 16px">
        <div class="card bg-primary text-white" style="position: relative; height: 80px">
            <div class="card-header p-2 border-bottom-0">
                <div class="media">
                    <div class="media-body">{{ desk.name }}</div>
                    <desks-delete :desk="desk" @deleteDesk="deleteDesk"></desks-delete>
                </div>
            </div>
            <div class="card-body p-2">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
</template>

<script>
import DesksDelete from "./DesksDelete";

export default {
    components: {DesksDelete},
    props: {
        desk: Object
    },
    data() {
        return {}
    },
    methods: {
        deleteDesk(desk) { this.$emit('deleteDesk', desk); }
    }
}
</script>
