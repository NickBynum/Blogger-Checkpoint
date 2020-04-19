<template class="container-fluid">
  <div class="home row justify-content-center">
    <div class="col-3">
      <form class="form-group">
        <label for="search">Search by Author: </label>
        <input
          v-model="search"
          id="sortBlogs"
          class="form-control"
          type="text"
          placeholder="Find posts by user!"
          aria-label="Search"
        />
      </form>
    </div>

    <div class="col-12">
      <div class="row justify-content-center">
        <div class="col-6"></div>
        <div class="allBlogs row">
          <div class="col-12 m-3">
            <blog v-for="blog in sortBlogs" :blogData="blog" :key="blog._id"></blog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";
export default {
  name: "home",
  data() {
    return {
      search: ""
    };
  },
  created() {
    this.$store.dispatch("getBlogs");
  },
  computed: {
    allBlogs() {
      return this.$store.state.blogs;
    },
    sortBlogs: function() {
      let searchRes = this.$store.state.blogs.toLowerCase
      return this.$store.state.blogs.filter(email => {
        return email.creatorEmail.match(this.search.toLowerCase());
      });
    }
  },
  components: {
    Blog
  }
};
</script>