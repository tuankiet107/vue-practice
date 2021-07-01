import axios from "../api";

const state = {
  blogs: [],
  blog: {},
};

const getters = {
  allBlogs: (state) => state.blogs,
  blogItem: (state) => state.blog,
};

const mutations = {
  GET_BLOGS: (state, blogs) => (state.blogs = blogs),
  GET_BLOG: (state, blog) => (state.blog = blog),
};

const actions = {
  getBlogs({ commit }) {
    axios
      .get(`/get`)
      .then((res) => {
        commit("GET_BLOGS", res.data.data);
      })
      .catch((error) => console.log(error));
  },
  getBlog({ commit }, id) {
    axios
      .get(`/details?id=${id}`)
      .then((res) => {
        console.log(res.data.data);
        commit("GET_BLOG", res.data.data);
      })
      .catch((error) => console.log(error));
  },
  postBlog({ commit }, blog) {
    axios
      .post(`/save`, blog)
      .then((res) => {
        commit("POST_BLOG", res.data.data);
      })
      .catch((error) => console.log(error));
  },
  updateBlog({ commit }, blog) {
    axios.put(`/update`, blog).then((res) => {
      commit("UPDATE_BLOG", res.data.data);
    });
  },
  deleteBlog({ commit }, id) {
    axios.delete(`/delete?id=${id}`).then(() => {
      commit("DELETE_BLOG", id);
    });
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
