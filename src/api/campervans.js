import axios from "axios";

const campervans = {
  async getAllCampervans() {
    //Faking API request
    const url = `/data.json`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (e) {
      return e;
    }
  },
};

export default campervans;
