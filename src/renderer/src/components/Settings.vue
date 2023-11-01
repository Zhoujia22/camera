<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'

const enumeratorPromise = await navigator.mediaDevices.enumerateDevices()
const cameras = enumeratorPromise.filter((item) => item.kind === 'videoinput')
const { config } = useConfigStore()
</script>

<template>
  <div class="h-screen w-screen bg-slate-600 rounded-xl relative">
    <h5 class="text-white text-center pt-10 pb-1 opacity-90">设置</h5>
    <div class="flex justify-center items-center flex-col">
      <el-select
        v-model="config.deviceId"
        fit-input-width
        class="m-2 w-64"
        placeholder="请选择设备"
      >
        <el-option
          v-for="item in cameras"
          :key="item.deviceId"
          :label="item.label"
          :value="item.deviceId"
        />
      </el-select>
      <div class="flex flex-col items-center w-64">
        <el-input
          v-model="config.border"
          class="mt-3 mb-5"
          placeholder="请输入边框宽度(默认无边框)"
        />
        <el-input v-model="config.color" placeholder="请输入边框颜色(默认透明)" />
      </div>
    </div>
    <div class="text-xs text-white opacity-60 absolute bottom-0 left-1/2 -translate-x-1/2 pb-3">
      Zhoujia22
    </div>
  </div>
</template>

<style lang="scss"></style>
