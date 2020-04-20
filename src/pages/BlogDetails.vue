<template>
  <div class="blogDetails container-fluid justify-content-center">
    <div class="row">
      <div class="col-9 m-5 card border-danger text-center p-3">
        <div class>
          <p>{{blogDetails.creator.name}}</p>
        </div>
        <div v-if="!editing">
          <h5>{{blogDetails.body}}</h5>
          <div>
            <button
              class="btn btn-warning m-2"
              v-if="blogDetails.creator.name == profile.name"
              @click="editing = true"
            >Edit</button>
            <button
              class="btn btn-danger m-2"
              v-if="blogDetails.creator.name == profile.name"
              @click="deleteBlogPost()"
            >Delete</button>
          </div>
          <hr />
          <comment v-for="comment in commentDetails" :commentData="comment" :key="comment.id"></comment>
          <addComment></addComment>
          <hr />
        </div>
        <div v-else>
          <form>
            <div class="create-blog row mx-auto">
              <div class="col-6 text-left">
                <div class="form-group">
                  <label>
                    <h3>Title:</h3>
                  </label>
                  <input type="text" class="form-control" v-model="blogDetails.title" />
                </div>
                <div class="form-group">
                  <label for>
                    <h3>Blog Post:</h3>
                  </label>
                  <textarea class="form-group" rows="8" cols="50" v-model="blogDetails.body" />
                </div>
                <div>
                  <button class="btn btn-primary" @click.prevent="editBlogPost()">Update</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AddComment from "../components/AddComment.vue";
import Comment from "../components/Comment.vue";
export default {
  name: "blogDetails",
  props: ["blogData"],
  data() {
    return {
      editing: false
    };
  },
  created() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
    // this.$store.dispatch("getBlog", this.blogData.id);
    // this.$store.dispatch('getBlog')
  },
  computed: {
    blogDetails() {
      return this.$store.state.activeBlog.blog;
    },
    commentDetails() {
      return this.$store.state.activeBlog.comments;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    deleteBlogPost() {
      this.$store.dispatch("deleteBlogPost", this.blogDetails.id);
    },
    editBlogPost() {
      this.$store.dispatch("editBlogPost", this.blogDetails);
      this.editing = false;
    }
  },
  components: {
    Comment,
    AddComment
  }
};
</script>


<style scoped>
</style>