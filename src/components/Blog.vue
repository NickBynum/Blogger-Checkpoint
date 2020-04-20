<template>
  <div class="blog m-5 card border-danger text-center p-3">
    <h2>
      Title:
      <span>{{blogData.title}}</span>
    </h2>
    <h4>Authored by: {{blogData.creator.name}}</h4>
    <!-- //TODO - update button for accurate redirect -->
    <!-- Button to goto BlogDetails -->
    <button type="button" class="btn btn-dark btn-lg" @click="getBlogDetails()">View Post</button>
  </div>
</template>


<script>
export default {
  name: "blog",
  props: ["blogData"],
  data() {
    return {
      editing: false
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    deleteBlogPost() {
      this.$store.dispatch("deleteBlogPost", this.blogData.id);
    },
    editBlogPost() {
      this.$store.dispatch("editBlogPost", this.blogData);
      this.editing = false;
    },
    getBlogDetails() {
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "BlogDetails",
        params: { blogId: this.blogData.id }
      });
      console.log("console params" + blogId);
    },
  //   components: {}
  }
};
</script>


<style scoped>
</style>