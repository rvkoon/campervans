import actions from "./actions.js";
import mutations from "./mutations";

const state = () => ({
  currentCampervan: null,
  campervansList: [],
  fetchCampervansListError: false,
});

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
