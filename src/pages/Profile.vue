<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded-circle" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>

    <CreateBlog v-if="$auth.isAuthenticated" />
    <small v-if="!$auth.isAuthenticated" class="text-danger">You must be logged in to create a blog!</small>
  </div>
</template>

<script>
import CreateBlog from "../components/CreateBlog"
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  components: { CreateBlog }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
