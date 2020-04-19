<template>
  <div class="blog m-5 card border-danger text-center p-3">
    <h2>
      Title:
      <span>{{blogData.title}}</span>
    </h2>
    <h4>Authored by: {{blogData.creator.name}}</h4>

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-dark btn-lg"
      data-toggle="modal"
      :data-target="'#blogBodyModal' + blogData.id"
    >View Post</button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'blogBodyModal' + blogData.id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div v-if="!editing">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">{{blogData.title}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div v-if="!editing" class="modal-body">{{blogData.body}}</div>
            <button
              class="btn btn-warning"
              v-if="blogData.creator.name == profile.name"
              @click="editing = true">Edit</button>
            <button
              class="btn btn-warning"
              v-if="blogData.creator.name == profile.name"
              @click.prevent="deleteBlogPost()"
            >Delete</button>
            <div class="m-5">Display comments section</div>
            <div>
              <form class="form-group" action="submit">
                <input
                  class="form-control"
                  autocomplete="off"
                  type="text"
                  name="newComment"
                  placeholder="Comment on this blog post!"
                />
                <button
                  class="form-control btn btn-lg"
                  type="submit"
                  @submit.prevent="addComment()"
                >
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
                  <button class="btn btn-primary" @click.prevent="editBlogPost()" data-dismiss="modal">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "blog",
  props: ["blogData"],
  data() {
    return {
      editing: false,
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
      this.editing = false
    }
  },
  components: {}
};
</script>


<style scoped>
</style>