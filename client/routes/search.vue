<template>
    <div class="container p-3">
        <div v-if="items" class="d-flex flex-column justify-content-start align-items-start">
            <ul class="list-unstyled">
              <li class="card shadow m-3 p-3" v-for="(item, index) in items" :key="index">
                <h3>{{ item.title }}</h3>
                <p>{{ item.snippet }}</p>
                <a :href="item.link">{{ item.link }}</a>
              </li>
            </ul>
        </div>
        <div class="d-flex flex-column h-100 justify-content-center align-items-center" v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
export default {
    data() {
        return {
            q: this.$router.currentRoute.query.q,
            items: null,
            data: []
        };
    },
    watch : {
        q(newQ) {
            this.searchFetch()
        }
    },
    methods: {
        searchFetch() {
            console.log('starting search')
            // Get the 'q' parameter from the URL using Vue Router
            const searchQuery = this.$route.query.q;
            if (!searchQuery || searchQuery == "") return this.searchUpdate()
            fetch(`https://dgd.cx/api/search?q=${searchQuery}`)
                .then(async response => {
                    this.data = await response.json()
                    console.log(this.data)
                    return this.searchUpdate()
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        searchUpdate() {
            if (this.data && typeof this.data == typeof [] && this.data.length > 0) this.items = this.data
            else this.items = []
        }
    },
    mounted() {
        this.searchFetch()
    },
    components: {
        Spinner
    }
}
</script>