import axios from "axios";

export default {
  searchRandomImage: function() {
    return axios.get(`https://dog.ceo/api/breeds/image/random`);
  },
  searchBreed: function (query) {
    return axios.get(`https://dog.ceo/api/${query}/hound/images`);
  }
};
