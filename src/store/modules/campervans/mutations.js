const mutations = {
  setCampervansList(state, campervansList) {
    state.fetchCampervansListError = false;
    state.campervansList = campervansList;
  },
  setFetchCampervansListError(state) {
    state.fetchCampervansListError = true;
  },
};

export default mutations;
