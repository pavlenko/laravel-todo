<template>
    <div class="board-column-cards">
        <div class="board-column-card" v-for="card in cards">
            <div class="my-2 mx-1 p-2 border bg-light">
                <div class="board-card-img text-center">
                    <img class="img-thumbnail" src="asset('bundles/pecoreui/img/avatars/1.jpg')">
                </div>
                <div class="board-card-pills">
                    <div class="d-inline-block rounded bg-primary p-1" style="width: 50px"></div>
                    <div class="d-inline-block rounded bg-secondary p-1" style="width: 50px"></div>
                    <div class="d-inline-block rounded bg-success p-1" style="width: 50px"></div>
                </div>
                <div class="board-card-title">{{ card.name }}</div>
                <div class="d-flex">
                    <div><img class="img-avatar" src="asset('bundles/pecoreui/img/avatars/2.jpg')" style="width: 24px; height: 24px;"></div>
                    <div class="board-card-date">Today</div>
                    <div class="board-card-comments">10 <i class="fa fa-comment-o"></i></div>
                </div>
                <div class="board-card-meta">
                    <div class="board-card-meta-left"></div>
                    <div class="board-card-meta-right"></div>
                </div>
            </div>
        </div>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status" aria-hidden="true"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        listId: Number
    },
    data() {
        return {
            cards: [],
            loading: false
        }
    },
    mounted() {
        this.loading = true;
        axios
            .get(__baseURL + '/api/V1/cards/', {params: {list_id: this.listId}})
            .then(response => {
                this.cards = response.data.data;
                console.log(response);
            })
            .catch(error => { console.log(error); })
            .finally(() => { this.loading = false; });
    }
}
</script>

<style scoped>
.board-column-cards {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
}
.board-card-title {
    margin-bottom: .5rem;
}
.board-card-date {
    flex: 1;
    padding: 0 .5rem;
}
</style>
