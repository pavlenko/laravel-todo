<template>
    <div>
        <h5>Lists</h5>
        <div v-if="!loading" class="board-container" style="min-height: 600px">
            <div class="board-columns">
                <div class="board-column-container" v-for="list in lists">
                    <div class="board-column">
                        <div class="board-column-header">
                            <div class="board-column-title">
                                <div class="form-control border-0">{{ list.name }}</div>
                            </div>
                            <div class="dropdown">
                                <a href="#" class="btn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i>Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <button class="my-1 btn btn-light btn-block btn-sm"><i class="fa fa-plus"></i></button>
                        <div class="board-column-body">
                            <div class="board-column-cards">
                                {% for card_index in 0..6 %}
                                <div class="board-column-card">
                                    <div class="my-2 mx-1 p-2 border bg-light" style="/*min-height: 200px; flex: 0 0 auto; border: 1px solid var(--danger); background: var(--blue); padding: 2rem*/">
                                        <div class="board-card-img text-center">
                                            <img class="img-thumbnail" src="asset('bundles/pecoreui/img/avatars/1.jpg')">
                                        </div>
                                        <div class="board-card-pills">
                                            <div class="d-inline-block rounded bg-primary p-1" style="width: 50px"></div>
                                            <div class="d-inline-block rounded bg-secondary p-1" style="width: 50px"></div>
                                            <div class="d-inline-block rounded bg-success p-1" style="width: 50px"></div>
                                        </div>
                                        <div class="board-card-title">CARD TITLE</div>
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
                                {% endfor %}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <a class="board-column bg-light btn" href="#">
                        <div class="board-column-header">Create list</div>
                    </a>
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
    data() {
        return {
            deskID: this.$route.params.id,
            lists: [],
            loading: false
        };
    },
    mounted() {
        this.loading = true;
        axios
            .get(__baseURL + '/api/V1/lists/', {params: {desk_id: this.deskID}})
            .then(response => {
                this.lists = response.data.data;
                console.log(response);
            })
            .catch(error => { console.log(error); })
            .finally(() => { this.loading = false; });
    }
}
</script>

<style scoped>
.board-container {
    flex: 1;
    position: relative;
}
.board-columns {
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
}
.board-column-container {
    display: flex;
}
.board-column {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--secondary);
    border-radius: 0.25rem;
    background-color: var(--white);
    margin: .25rem;
    padding: .25rem;
}
.board-column-header {
    display: flex;
    flex-direction: row;
    width: 250px;
}
.board-column-title {
    flex: 1;
}
.board-column-body {
    flex: 1;
    position: relative;
}
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
.sortable-drag {
    opacity: 1 !important;
}
.sortable-ghost {
    opacity: .25 !important;
}
</style>
