<template>
  <div class="comment">
<p>{{commentData.body}}</p>
<p>{{commentData.creatorEmail}}</p>

  </div>
</template>


<script>
export default {
  name: 'comment',
  props: ['commentData'],
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