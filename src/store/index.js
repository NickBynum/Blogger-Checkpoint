import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    comments: [],
    activeBlog: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addBlog({ commit, dispatch }, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        dispatch('getBlogs')
      } catch (error) {
        console.log(error)
      }
    },
    async getBlogs({ commit, dispatch }) {
      try {
        let res = await api.get('blogs')
        commit('setBlogs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async userBlogs({ commit, dispatch }, ) {
      try {
        let res = await api.get('blogs')
        commit('setBlogs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    // async userComments({ commit, dispatch }, ) {
    //   try {
    //     let res = await api.get('comments')
    //     commit('setComments', res.data)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    async editBlogPost({ commit, dispatch }, blogId) {
      try {
        await api.put('blogs/' + blogId.id, blogId)
        commit('getBlogs')
      }
      catch (error) {
        console.error(error)
      }
    },
    async deleteBlogPost({ commit, dispatch }, blogId) {
      try {
        await api.delete('blogs/' + blogId)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    async getBlog({ commit, dispatch }, blogId) {
      try {
        let res = await api.get('blogs/' + blogId)
        commit('setActiveBlog', res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addComment({ commit, dispatch }, newComment) {
      try {
        let res = await api.post('comments', newComment)
        dispatch('getBlog', newComment.blogId)
      } catch (error) {
        console.log(error)
      }
    },
    async editComment({ commit, dispatch }, commentId) {
      try {
        await api.put('comments/' + commentId.id, commentId)
        commit('getBlogs', commentId.id)
      }
      catch (error) {
        console.error(error)
      }
    },
    async deleteComment({ commit, dispatch }, commentId) {
      try {
        await api.delete('comments/' + commentId.id)
        commit('getBlogs', commentId.id.blogId)
      }
      catch (error) {
        console.error(error)
      }
    },
  }
});

