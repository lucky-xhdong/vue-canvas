<template>
  <div class="app-container">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
  require('@/lib/audioPlayer.js')
  require('@/lib/VideoPlayer')
  require('./index')
  require('./config')
  require('./main')
  export default {
    name: "Demo2"
  }
</script>

<style scoped>

</style>
