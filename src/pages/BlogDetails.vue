<template>
  <div class="blogDetails">
    <div v-if="!editing">
      <h5>{{blogData}}</h5>
      <div v-if="!editing">{{blogData.body}}</div>
      <!-- <button
        class="btn btn-warning m-2"
        v-if="blogData.creator.name == profile.name"
        @click="editing = true"
      >Edit</button> -->
      <button
        class="btn btn-warning m-2"
        v-if="blogData.creator.name == profile.name"
        @click.prevent="deleteBlogPost()"
      >Delete</button>
      <div class="m-5">{{blogData.body.comments}}</div>
      <div>
        <form class="form-group" action="submit">
          <input
            class="form-control"
            autocomplete="off"
            type="text"
            name="newComment"
            placeholder="Comment on this blog post!"
          />
          <button class="form-control btn btn-lg" type="submit" @submit.prevent="addComment()">
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
    </div>
    <!--end of reveal area-->
    <div v-else>
      <form>
        <div class="create-blog row mx-auto">
          <div class="col-6 text-left">
            <div class="form-group">
              <label>
                <h3>Title:</h3>
              </label>
              <input type="text" class="form-control" v-model="blogData.title" />
            </div>
            <div class="form-group">
              <label for>
                <h3>Blog Post:</h3>
              </label>
              <textarea class="form-group" rows="8" cols="50" v-model="blogData.body" />
            </div>
            <button
              class="btn btn-primary"
              @click.prevent="editBlogPost()"
              data-dismiss="modal"
            >Update</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "blogDetails",
  props: ["blogData"],
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
    this.$store.dispatch("getBlog", this.activeBlog.id);
    // this.$store.dispatch('getProfile')
  },
  computed: {
    BlogDetails() {
      return this.$store.state.activeBlog.blog;
    },
    CommentDetails() {
      return this.$store.state.activeBlog.comments;
    },
    Profile() {
      return this.$store.state.profile;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>