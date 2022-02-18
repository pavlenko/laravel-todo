<template>
    <div class="d-flex justify-content-between">
        <h5 class="mr-3"><i class="far fa-fw fa-credit-card"></i></h5>
        <div class="form-group flex-grow-1">
            <textarea class="form-control card-update-name"
                      :class="{'border-transparent': !editing}"
                      rows="1"
                      ref="name"
                      v-model="value"
                      @focus="onFocus"
                      @input="onInput"
                      @blur="onBlur"></textarea>
        </div>
    </div>
</template>

<script>
import CardDTO from "../DTO/CardDTO";

export default {
    props: {
        card: CardDTO
    },
    data() {
        return {
            value: this.card.name,
            loading: false,
            errored: false,
            editing: false
        };
    },
    mounted() {
        this.auto();
    },
    methods: {
        auto() {
            if (this.$refs.name.scrollHeight > 0) {
                this.$refs.name.style.height = this.$refs.name.scrollHeight + 2 + 'px';
            }
        },
        onFocus() {
            this.editing = true;
            this.auto();
        },
        onInput() {
            this.auto();
        },
        onBlur() {
            this.editing = false;
            if (this.value !== this.card.name) {
                this.card.name = this.value;
                this.loading = true;
                this.errored = false;

                axios
                    .post(
                        __baseURL + '/api/V1/cards/' + this.card.id,
                        Object.assign({_method: 'PUT'}, this.card)
                    )
                    .then(response => {
                        this.$emit('updateCard', this.card.setAttributes(response.data.data));
                    })
                    .catch(error => {
                        this.errored = true;
                        console.log(error);
                    })
                    .finally(() => { this.loading = false; });
            }
        }
    }
}
</script>

<style scoped>
.card-update-name {
    resize: none;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    color: #212529;
    margin: -0.375rem -0.75rem;
}
</style>
