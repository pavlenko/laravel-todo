<template>
    <div>
        <h5>Lists</h5>
        <div class="board-container">
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
                                block('_card')
                                {% endfor %}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                {name: 'To do'},
                {name: 'In progress'},
                {name: 'Reopen'},
                {name: 'Resolved'},
                {name: 'Closed'}
            ]
        };
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
