<template>
  <div class="ViewBlog">
    <div class="row">
      <div class="col-6">
        <div class="allBlogs row">
          </div>
        </div>
          <div class="col-6 m-3">
            <blog v-for="blog in sortBlogs" :blogData="blog" :key="blog._id"></blog>
      </div>
    </div>

  </div>
</template>


<script>
import Blog from "../components/Blog.vue";
export default {
  name: 'ViewBlog',
  data(){
    return {}
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
}
</script>


<style scoped>

</style>