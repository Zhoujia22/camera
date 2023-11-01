import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('counter', () => {
  const config = ref({
    page: 'camera',
    deviceId: '',
    border: '',
    color: ''
  })

  return { config }
})
