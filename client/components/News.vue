<template>
    <div>
        <Spinner v-if="isLoading" />
        <div v-if="!isLoading" class="news-container">
            <div v-for="newsItem in newsData" class="news-item card m-3 shadow p-3">
                <div class="news-author">{{ newsItem.author }}</div>
                <div class="news-timestamp">{{ formatTimestamp(newsItem.timestamp) }}</div>
                <div class="news-content" v-html="decodeHtml(newsItem.html)"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Spinner from '../components/Spinner.vue'
export default {
    data() {
        return {
            newsData: [],
            isLoading: true
        };
    },
    methods: {
        formatTimestamp(timestamp) {
            return new Date(timestamp * 1000).toLocaleString();
        },
        decodeHtml(base64Html) {
            return atob(base64Html);
        },
        fetchNewsData() {
            fetch('http://localhost/api/news.json') // Adjust the URL as needed
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(newsData => {
                    this.newsData = newsData;
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error('Error fetching news data:', error);
                });
        },
    },
    mounted() {
        this.fetchNewsData();
    },
    components: {
        Spinner
    }
};
</script>
  
<style scoped>
</style>
  