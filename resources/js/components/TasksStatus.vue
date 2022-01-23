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
export default {
    props: {
        task: Object
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
            // TODO ajax update status
            this.task.status = code;
            this.$emit('updateTask', this.task);
        }
    }
}
</script>
