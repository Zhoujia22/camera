<script setup lang="ts">
import { onMounted } from 'vue'

// const enumeratorPromise = await navigator.mediaDevices.enumerateDevices()
// console.log(enumeratorPromise)
onMounted(() => {
  const constraints = {
    audio: false,
    video: true
  }
  const video = document.querySelector('video')
  if (video === null) return
  navigator.mediaDevices.getUserMedia(constraints).then((steam) => {
    video.srcObject = steam
    video.play()
  })
})
</script>

<template>
  <div class="h-screen w-screen flex rounded">
    <video class="object-cover" />
  </div>
</template>

<style lang="scss"></style>
