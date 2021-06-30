import axios from "../api";
const state = {
  blogs: [],
};
const getters = {
  product(state) {
    return state.blogs;
  },
};

const actions = {
  getBlogs({ commit }) {
    axios
      .get("/blogs")
      .then((res) => res.data.data)
      .then((blogs) => {
        commit("GET_BLOGS", blogs);
      });
  },
};
export default {
  state,
  getters,
  actions,
};
