<script setup>
import { ref } from "vue";
import { useShare } from '@vueuse/core'
import { isClient } from '@vueuse/shared'

const { share, isSupported } = useShare()

const options = ref({
  title: 'VueUse',
  text: '分享网页',
  url: isClient ? location.href : '',
})

function startShare() {
  share({
    title: 'Hello',
    text: 'Hello my friend!',
    url: location.href,
  })
}

</script>

<template>
  <div>
    <input
      v-if="isSupported"
      v-model="options.text"
      type="text"
      placeholder="Note"
    >
    <button :disabled="!isSupported" @click="startShare">
      {{ isSupported ? '分享' : 'Web share is not supported in your browser' }}
    </button>
  </div>
</template>
