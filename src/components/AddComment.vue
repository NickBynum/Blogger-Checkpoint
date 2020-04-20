<template>
  <div class="addComment">
    <form class="form-group">
      <input
        class="form-control"
        autocomplete="off"
        type="text"
        name="newComment"
        placeholder="Comment on this blog post!"
        v-model="newComment.body"
      />
      <button class="form-control btn btn-lg" @click="addComment()">
        <svg
          class="bi bi-plus btn-success btn-block"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </form>
  </div>
</template>


<script>
export default {
  name: "addComment",
  props: ["blogData"],
  data() {
    return {
      newComment: {}
    };
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog.blog
    },
  },
  methods: {
    addComment() {
      this.newComment.blogId = this.blog.id;
      this.newComment.creatorEmail = this.blog.creatorEmail;
      this.$store.dispatch("addComment", this.newComment);
      this.newComment = {}
    }
  },
  components: {}
};
</script>


<style scoped>
</style>