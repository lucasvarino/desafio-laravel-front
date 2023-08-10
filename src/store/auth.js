import AuthService from "@/services/authService";

const state = {
  user: null,
  isAuthenticated: false,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    state.isAuthenticated = !!user;
  },
};

const actions = {
  login({ commit }, user) {
    const result = AuthService.login(user);

    if (result.status !== "success") {
      throw new Error("Invalid Credentials");
    }
    commit("SET_USER", user);

    return user;
  },
  logout({ commit }) {
    AuthService.logout();
    commit("SET_USER", null);
  },
};

const getters = {
  getUser: (state) => state.user,
  isAuthenticated: (state) => state.isAuthenticated,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
