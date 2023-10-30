<script setup lang="ts">
import { ref } from 'vue'
import Camera from './components/Camera.vue'
import Settings from './components/Settings.vue'

const page = ref('')
</script>

<template>
  <div class="relative">
    <div
      v-if="page === 'camera'"
      class="absolute left-1/2 -translate-x-1/2 py-3 cursor-pointer z-10 hover:transform hover:scale-105 transform-gpu transition-transform duration-200 ease-in-out"
      @click="page = 'setting'"
    >
      <el-icon color="#ffffff" size="20">
        <Setting />
      </el-icon>
    </div>
    <div
      v-else
      class="absolute left-1/2 -translate-x-1/2 py-3 cursor-pointer z-10 hover:transform hover:scale-105 transform-gpu transition-transform duration-200 ease-in-out"
      @click="page = 'camera'"
    >
      <el-icon color="#ffffff" size="20">
        <VideoCamera />
      </el-icon>
    </div>
    <Suspense>
      <Camera v-if="page === 'camera'" />
      <Settings v-else />
    </Suspense>
  </div>
</template>

<style lang="scss"></style>
