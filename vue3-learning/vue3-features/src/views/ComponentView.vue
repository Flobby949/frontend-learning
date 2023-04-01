<script setup>
import { reactive, ref } from "vue";
import childItem from '@/components/ChildItem.vue'
import { useShare } from '@vueuse/core'
import { isClient } from '@vueuse/shared'

const msg = ref('父组件msg')
let list = reactive([1, 2, 3])

const changeMsg = (str) => {
  msg.value = str
}

const changeList = (arr) => {
  list.splice(0, list.length, ...arr)
}

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
  <div class="about">
    <childItem :msg="msg" :list="list" @change-msg="changeMsg" @change-list="changeList" />
  </div>

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
