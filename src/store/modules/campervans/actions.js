import campervans from "../../../api/campervans";

const actions = {
  async getCampervansList({ commit }) {
    const data = await campervans.getAllCampervans();
    console.log(data.data);

    if (!data?.data) {
      return commit("setCampervansListFetchError", true);
    }
    commit("setCampervansList", data.data.results);
  },
};

export default actions;
