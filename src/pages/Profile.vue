<template>
<!-- profile dispay -->
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded-circle" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>

    <CreateBlog v-if="$auth.isAuthenticated" />
    <blog v-for="blog in userBlogs" :blogData="blog" :key="blog._id"></blog>
  </div>
</template>

<script>
import blog from "../components/Blog";
import CreateBlog from "../components/CreateBlog";
export default {
  data() {
    return {
    };
  },
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    userBlogs: function() {
      return this.$store.state.blogs.filter(email => {
        return email.creatorEmail.match(this.profile.email);
      });
    },
    
  },
  created() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("userBlogs");
  },
  components: {
    CreateBlog,
    blog,
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
