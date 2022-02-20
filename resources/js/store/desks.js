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
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
