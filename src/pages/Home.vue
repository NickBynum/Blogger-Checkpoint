<template>
  <div class="home">
    <input
      v-model="search"
      id="sortBlogs"
      class="form-control form-control-sm ml-3 w-75"
      type="text"
      placeholder="Find posts by user!"
      aria-label="Search"
    />
    <div class="allBlogs row">
      <div class="col-12 m-3">
        <blog v-for="blog in sortBlogs" :blogData="blog" :key="blog._id"></blog>
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
      return this.$store.state.blogs.filter(email => {
        return email.creatorEmail.match(this.search);
      });
    }
  },
  components: {
    Blog
  }
};
</script>
