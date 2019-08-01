import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedIn: null,
        userData: null,
    },
    mutations: {
        updateUserPermission(state, data) {
            this.state.loggedIn = data;
        },
        updateUserData(state, data) {
            this.state.userData = data;
            /*eslint-disable*/
            console.log(this.state.userData);
        },
    }
});