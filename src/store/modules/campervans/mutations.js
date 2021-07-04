const mutations = {
  setCampervansList(state, campervansList) {
    state.fetchCampervansListError = false;
    state.campervansList = campervansList;
  },
  setCurrentCampervan(state, campervan) {
    state.currentCampervan = campervan;
  },
  setFetchCampervansListError(state) {
    state.fetchCampervansListError = true;
  },
};

export default mutations;
