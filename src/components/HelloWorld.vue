<template>
  <div>
    <h1>
      Welcome to the forum
    </h1>
    <div v-for="(thread, index) in threads" :key="index">
      <h2> {{ thread.title }} </h2>
      <div v-for="(postId, index) in thread.posts" :key="index">
        <p> {{ users[posts[postId].userId].name }} </p>
        <p> {{ posts[postId].text }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data'
console.log(sourceData)
export default {
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
