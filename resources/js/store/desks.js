import DesksAPI from "../api/DesksAPI";

const state = () => {
    return {
        desks: [],
        lists: []
    };
};

const getters = {
    desks: state => state.desks
};

const mutations = {
    FETCH_DESKS_SUCCESS(state, desks) {
        state.desks = desks;
    },
    CREATE_DESK_SUCCESS(state, desk) {
        state.desks.unshift(desk);
    },
    UPDATE_DESK_SUCCESS(state, desk) {
        const index = state.desks.findIndex(item => String(item.id) === String(desk.id));
        if (index !== -1) {
            state.desks.splice(index, 1, desk);
        }
    },
    DELETE_DESK_SUCCESS(state, desk) {
        const index = state.desks.findIndex(item => String(item.id) === String(desk.id));
        if (index !== -1) {
            state.desks.splice(index, 1);
        }
    },
    FETCH_LISTS_SUCCESS(state, lists) {
        state.lists = lists
    },
    RESORT_LIST(state, lists) {
        state.lists = lists;
    }
};

const actions = {
    fetchDesks({commit}) {
        return DesksAPI.getAllDesk()
            .then(desks => commit('FETCH_DESKS_SUCCESS', desks));
    },
    createDesk({commit}, desk) {
        return DesksAPI.createDesk(desk)
            .then(desk => commit('CREATE_DESK_SUCCESS', desk));
    },
    updateDesk({commit}, desk) {
        return DesksAPI.updateDesk(desk)
            .then(desk => commit('UPDATE_DESK_SUCCESS', desk));
    },
    deleteDesk({commit}, desk) {
        return DesksAPI.deleteDesk(desk)
            .then(() => commit('DELETE_DESK_SUCCESS', desk));
    },
    fetchLists({commit}, deskID) {
        return DesksAPI.getAllList(deskID)
            .then(lists => commit('FETCH_LISTS_SUCCESS', lists));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
