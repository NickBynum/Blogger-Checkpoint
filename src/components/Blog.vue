<template>
  <div class="blog m-5 card border-danger text-center p-3">
    <h2>Title:  <span>{{blogData.title}}</span></h2>
    <h4>Authored by: {{blogData.creator.name}}</h4>

    <!-- Button trigger modal -->
<button type="button" class="btn btn-dark btn-lg" data-toggle="modal" data-target="#blogBodyModal">
  View Post
</button>

<!-- Modal -->
<div class="modal fade" id="blogBodyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{blogData.title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{blogData.body}}
      </div>
    </div>
  </div>
</div>
  </div>
</template>


<script>
export default {
  name: 'blog',
  props: ["blogData"],
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>
</style>