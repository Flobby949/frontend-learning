<template>
  <div>
      <p>
          Supported:
          <BooleanDisplay :value="isSupported" />
      </p>
  </div>

  <div v-if="isSupported">
      <button class="bg-blue-400 text-white p-2 rounded-lg" @click="show()">
          Show Notification
      </button>
  </div>
  <div v-else>
      The Notification Web API is not supported in your browser.
  </div>
</template>

<script setup>
import { useWebNotification } from '@vueuse/core'
import axios from 'axios'

const options = {
  title: 'Hello, world from VueUse!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
}
const {
  isSupported,
  show
} = useWebNotification(options)

axios.get(
  "http://localhost:8080/sse/msg"
).then((res) => {
  console.log(res.data);
})

</script>

<style scoped></style>