<template>
    <div>
        <div class="dropdown">
            <a class="badge" :class="statusClass(task.status || 0)" href="#" data-toggle="dropdown">
                {{ statusLabel(task.status || 0) }}
            </a>
            <div class="dropdown-menu">
                <a v-for="(status, code) in statuses" class="dropdown-item" href="#" @click="updateTask(code)">
                    <span class="badge" :class="status.class">{{ status.label }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import TaskDTO from "../DTO/TaskDTO";
import DesksAPI from "../api/DesksAPI";

export default {
    props: {
        task: TaskDTO
    },
    data() {
        return {
            statuses: [
                {label: 'New', class: 'badge-secondary'},
                {label: 'In Progress', class: 'badge-primary'},
                {label: 'Done', class: 'badge-success'}
            ]
        };
    },
    methods: {
        statusClass(code) {
            return this.statuses[code].class;
        },
        statusLabel(code) {
            return this.statuses[code].label;
        },
        updateTask(code) {
            this.loading = true;
            this.errored = false;

            DesksAPI.updateTask(this.task, {status: code})
                .then(task => {
                    this.$emit('updateTask', task);
                    this.$bvModal.hide(this.uuid);
                })
                .catch(() => this.errored = true)
                .finally(() => this.loading = false);
        }
    }
}
</script>
