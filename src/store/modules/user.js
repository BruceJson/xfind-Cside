export default {
	state: {
		token: '',
		showLoginDialog: false
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
		SET_SHOW_LOGIN_DIALOG: (state, flag) => {
			state.showLoginDialog = flag;
		}
	},
	actions: {
		async Login({ commit }) {
			commit('SET_TOKEN', '123123213213123');
		},
		ShowLogin({ commit }) {
			commit('SET_SHOW_LOGIN_DIALOG', true);
		},
		HideLogin({ commit }) {
			commit('SET_SHOW_LOGIN_DIALOG', false);
		}
	}
};
