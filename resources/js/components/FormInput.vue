<template>
    <div class="mb-3">
        <div class="input-group" :class="{'focused': focus, 'is-invalid': error}">
            <div v-if="icon" class="input-group-prepend">
                <div class="input-group-text bg-transparent border-right-0 pr-0">
                    <span :class="icon"></span>
                </div>
            </div>
            <input :type="show ? 'text' : type"
                   :name="name"
                   class="form-control"
                   :class="{'is-invalid': error, 'border-left-0': !!icon, 'border-right-0': type === 'password'}"
                   :placeholder="placeholder"
                   v-bind:value="value"
                   v-on:input="$emit('input', $event.target.value)"
                   @focus="focus = true"
                   @blur="focus = false">
            <div v-if="type === 'password'" class="input-group-append">
                <button type="button"
                        class="btn input-group-text bg-transparent border-left-0 pl-0"
                        @click.prevent="show = !show">
                    <span class="fas fa-fw" :class="show ? 'fa-eye-slash' : 'fa-eye'"></span>
                </button>
            </div>
        </div>
        <div class="invalid-feedback">
            <div v-for="message in error">{{ message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        name: String,
        icon: String,
        value: String,
        error: [],
        placeholder: String
    },
    data: () => ({
        show:  false,
        focus: false
    })
}
</script>

<style scoped>
.focused .input-group-prepend .input-group-text,
.focused .input-group-append .input-group-text {
    border-color: #80bdff;
}

.input-group.is-invalid .input-group-text,
.input-group.is-invalid .btn {
    border-color: #dc3545;
}

.input-group.is-invalid .input-group-text,
.input-group.is-invalid input::placeholder {
    color: #dc3545;
}

.input-group.is-invalid input,
.input-group.is-valid input {
    padding-right: 0.75rem;
    background: none;
}
</style>
