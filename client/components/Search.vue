<template>
    <form @submit.prevent="searchSubmit">
        <div class="input-group" style="width:inherit">
            <input v-model="searchQuery" type="search" class="form-control" />
            <button @click="searchSubmit" type="button" class="btn btn-outline-secondary text-light">
                <i class="bi bi-search"></i>
            </button>
        </div>
    </form>
</template>
    
<script>
export default {
    data() {
        return {
            searchQuery: null,
        };
    },
    methods: {
        searchSubmit() {
            if (this.searchQuery && typeof this.searchQuery == typeof "" && this.searchQuery != "")
                // Redirect to the search results route with the search query as a parameter
                this.$router.push({ name: 'search', query: { q: this.searchQuery } }); // q = variable name, query = meaning req.query sorta
            },
    },
};
</script>