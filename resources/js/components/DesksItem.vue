<template>
    <div class="card" style="position: relative">
        <div class="card-body p-2">
            <div class="media">
                <div class="media-body">
                    <h5 v-if="!edit" class="card-title m-0">{{ desk.name }}</h5>
                    <div v-if="edit" class="form-group">
                        <input class="form-control" v-model="desk.name">
                    </div>
                </div>
                <button v-if="!edit" class="btn btn-sm btn-info ml-2" @click="edit = true"><i class="fas fa-fw fa-pencil"></i></button>
                <button v-if="!edit" class="btn btn-sm btn-danger ml-2" @click="deleteDesk"><i class="fas fa-fw fa-trash"></i></button>
                <button v-if="edit" class="btn btn-sm btn-success ml-2" @click="updateDesk"><i class="fas fa-fw fa-check"></i></button>
                <button v-if="edit" class="btn btn-sm btn-secondary ml-2" @click="edit = false"><i class="fas fa-fw fa-times"></i></button>
            </div>
        </div>
        <!-- TODO show loader only on update or delete actions -->
        <div class="d-flex justify-content-center align-items-center"
             style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgb(255, 255, 255, 0.5)">
            <div class="spinner-border">
                <span class="sr-only">Processing...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        desk: Object
    },
    data() {
        return {
            edit: false
        }
    },
    methods: {
        updateDesk() { this.edit = false },
        deleteDesk() {
            this.$emit('deleteDesk')
        }
    }
}
</script>
