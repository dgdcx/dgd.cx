<template>
    <div class="w-100 container py-3 chat-container">
        <div v-for="message in chatData" :key="message.timestamp" class="row chat-message d-flex border rounded p-3">
            <div class="col-auto p-0 chat-avatar">
                <img :src="message.avatar" :alt="message.author" class="rounded-circle avatar" style="width:3em; height:3em;"/>
            </div>
            <div class="col p-0 ps-3 d-flex flex-column">
                <div class="message-header d-flex justify-content-between">
                    <span class="author text-muted">{{ message.author }}</span>
                    <span class="timestamp text-secondary">{{ formatTimestamp(message.timestamp) }}</span>
                </div>
                <div class="message-text">{{ message.message }}</div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Spinner from '../components/Spinner.vue'
export default {
    data() {
        return {
            chatData: [],
            isLoading: true
        }
    },
    methods: {
        formatTimestamp(timestamp) {
            return new Date(timestamp * 1000).toLocaleString()
        },
        decodeHtml(base64Html) {
            return atob(base64Html);
        },
        fetchChatData() {
            fetch('http://127.0.0.1:5173/api/chat.json') // Adjust the URL as needed
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    return response.json()
                })
                .then(chatData => {
                    this.chatData = chatData
                    this.isLoading = false
                })
                .catch(error => {
                    console.error('Error fetching news data:', error)
                });
        },
    },
    mounted() {
        this.fetchChatData()
    },
    components: {
        Spinner
    }
}
</script>
  
<style scoped>
.chat-message {
    margin-bottom: 1em;
}
.chat-message:last-child {
    margin-bottom: 0;
}
</style>