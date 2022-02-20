import DesksAPI from "../api/DesksAPI";

const state = () => {
    return {
        desks: []
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
    }
};

const actions = {
    fetchDesks({commit, state}) {
        return DesksAPI.getAllDesk()
            .then(desks => commit('FETCH_DESKS_SUCCESS', desks));
    },
    createDesk({commit, state}, desk) {
        return DesksAPI.createDesk(desk)
            .then(desk => commit('CREATE_DESK_SUCCESS', desk));
    },
    updateDesk({commit, state}, desk) {
        return DesksAPI.updateDesk(desk)
            .then(desk => commit('UPDATE_DESK_SUCCESS', desk));
    },
    deleteDesk({commit, state}, desk) {
        return DesksAPI.deleteDesk(desk)
            .then(() => commit('DELETE_DESK_SUCCESS', desk));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
