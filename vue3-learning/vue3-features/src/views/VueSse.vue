<template>
    <div v-if="isSupported">
        <button class="bg-blue-400 text-white p-2 rounded-lg" @click="show()">
            Show Notification
        </button>
    </div>
    <div v-else>
        The Notification Web API is not supported in your browser.
    </div>
</template>

<script>
import { useWebNotification } from '@vueuse/core'

export default {

    setup() {
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
        return {
            options,
            show,
            isSupported
        }
    },
    mounted() {
        this.$sse.create({
            url: 'http://localhost:8080/sse/msg',
            withCredentials: true,
            polyfill: true,
        }).on('message', (msg) => {
            this.options.title = msg
            this.show()
        }).on('error', (err) => console.error('Failed to parse or lost connection:', err))
        .connect()
    }
}
</script>
