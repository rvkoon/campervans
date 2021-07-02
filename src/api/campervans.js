import axios from "axios";

const campervans = {
  async getAllCampervans() {
    //Faking API request
    const url = `/data.json`;
    const response = await axios.get(url);
    return response;
  },
};

export default campervans;
