<template>
<div class="col-full">
  <h1>Welcome to the forum</h1>
  <ThreadList :threads="threads"/>
</div>
</template>

<script>
import sourceData from '@/data'
console.log(sourceData)
export default {
  data () {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  components: {
    ThreadList: () => import('./ThreadList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
