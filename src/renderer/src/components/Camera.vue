<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { onMounted } from 'vue'

const { config } = useConfigStore()
onMounted(() => {
  const constraints = {
    audio: false,
    video: { deviceId: config.deviceId, width: 1920, height: 1080 }
  } as MediaStreamConstraints
  const video = document.querySelector('video')
  if (video === null) return
  navigator.mediaDevices.getUserMedia(constraints).then((steam) => {
    video.srcObject = steam
    video.play()
  })
})
</script>

<template>
  <div
    class="h-screen w-screen flex rounded"
    :style="`border: ${config.border}px solid ${config.color}`"
  >
    <video class="object-cover" />
  </div>
</template>

<style lang="scss"></style>
