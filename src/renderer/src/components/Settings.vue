<script setup lang="ts">
import { ref } from 'vue'

const enumeratorPromise = await navigator.mediaDevices.enumerateDevices()
const cameras = enumeratorPromise.filter((item) => item.kind === 'videoinput')
const selectCamera = ref('')
</script>

<template>
  <div class="h-screen w-screen bg-slate-600 rounded-xl">
    <h5 class="text-white text-center pt-10 pb-1 opacity-90">参数设置</h5>
    {{ selectCamera }}
    <div class="flex justify-center items-center pr-2">
      <el-select v-model="selectCamera" fit-input-width class="m-2" placeholder="请选择设备">
        <el-option
          v-for="item in cameras"
          :key="item.deviceId"
          :label="item.label"
          :value="item.deviceId"
        />
      </el-select>
      <div>
        <el-button type="primary" round>保存</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
