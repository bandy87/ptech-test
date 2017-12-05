import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        unreadMessages: 0,
        settings: {
            carousel: {
                width: 100, //percent
                height: 150
            },
            chatUser: ''
        }
    },
});
