
<template class="container-fluid">
  <div>
    <form @submit.prevent="addBlog()">
    <div class="create-blog row justify-content-center">
      <div class="col-6 text-left">
        <div class="form-group">
          <label>
            <h3>Title:</h3>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Title of your blog."
            v-model="newBlog.title"
          />
        </div>
        <div class="form-group">
          <label for>
            <h3>Blog Post:</h3>
          </label>
          <textarea
            rows="8"
            cols="100"
            type="text"
            class="form-control"
            placeholder="Write down your thoughts, but nothing NSFW!"
            v-model="newBlog.body"
          />
        </div>
        <button type="submit" class="btn btn-primary" @click="addBlog()">Post Blog</button>
      </div>
    </div>
    </form>
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