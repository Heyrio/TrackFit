import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedIn: null,

    },
    mutations: {
        updateUserPermission(state, data) {
            this.state.loggedIn = data;
        },
    }
});