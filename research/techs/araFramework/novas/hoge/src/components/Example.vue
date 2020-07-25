<template>
  <div>
    <h1>{{title}}</h1>
    <hr/>
    <div>
      <input type="text" v-model="title" placeholder="Type Something">
    </div>
    <br/>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

