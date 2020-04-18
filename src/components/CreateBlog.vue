
<template class="container-fluid">
  <div class="create-blog row justify-content-center">
    <div class="col-6 justify">
      <div class="form-group">
        <label for>Title:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Title of your blog."
          v-model="newBlog.title"
        />
      </div>
      <div class="form-group">
        <label for>Blog Post</label>
        <textarea
          rows="8"
          cols="100"
          type="text"
          class="form-control"
          placeholder="Write down your thoughts, but nothing NSFW!"
          v-model="newBlog.body"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="addBlog()">Post Blog</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-blog",
  data() {
    return {
      newBlog: {}
    };
  },
  mounted() {},
  computed: {},
  methods: {
    addBlog() {
      this.$store.dispatch("addBlog", this.newBlog);
      this.newBlog = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>