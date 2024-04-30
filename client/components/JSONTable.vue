<template>
  <div class="card">
    <div class="card-title fw-bold">{{ title }}</div>
    <table class="card-body card-text">
      <thead>
        <tr>
          <th class="" v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="" v-for="(value, key) in item" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      headers: []
    };
  },
  props: {
    endpoint: {
      type: String,
      required: true
    },
    interval: {
      type: Number,
      default: 5000 // Default refresh interval is 5 seconds
    },
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.fetchData();
    // Automatically refresh data at specified interval
    setInterval(this.fetchData, this.interval);
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(this.endpoint);
        const data = await response.json();
        if (data && data.length > 0) {
          // Assuming the first object in data contains headers
          this.headers = Object.keys(data[0]);
          this.items = data;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
table {
  width: 100%;
  border-collapse: collapse;
}
.card {
  padding: 1em;
}

tr td, tr th {
  padding-right: 1em;
}

tr td:last-child, tr th:last-child {
  padding-right: 0;
}
</style>