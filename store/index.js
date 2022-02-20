// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

export const state = () => ({
	open: false,
})

export const mutations = {
	isOpen(state) {
		state.open = !state.open;
		if(state.open) {
			document.body.style.overflowY = 'hidden';
		} else{
			document.body.style.overflowY = 'scroll';
		}
	},
};
