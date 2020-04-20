<template>
  <div class="comment">
    <div v-if="!editing">
      <hr />
      <p class="d-flex m-0 justify-start">{{commentData.creatorEmail}}</p>
      <h6 class="m-0">{{commentData.body}}</h6>
      <hr />
      <div>
        <button
          class="btn btn-warning m-2"
          v-if="this.commentData.creatorEmail == this.profile.email"
          @click="editing = true"
        >Edit</button>
      </div>
      <div>
        <button
          class="btn btn-danger m-2"
          v-if="this.commentData.creatorEmail == this.profile.email"
          @click="deleteComment()"
        >Delete</button>
      </div>
    </div>
    <div v-else>
      <form>
        <div class="create-blog row mx-auto">
          <div class="col-6 text-left">
            <div class="form-group">
              <label for>
                <h3>Comment:</h3>
              </label>
              <textarea class="form-group" rows="8" cols="50" v-model="commentData.body" />
            </div>
            <div>
              <button class="btn btn-primary" @click.prevent="editComment()">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "comment",
  props: ["commentData"],
  data() {
    return {
      editing: false
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile
    }
  },
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentData.id);
    },
    editComment() {
      this.$store.dispatch("editComment", this.commentData);
      this.editing = false;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>