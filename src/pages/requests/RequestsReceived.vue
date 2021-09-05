<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div class="row">
      <section class="section">
        <base-card>
          <header>
            <h2>Requests Received</h2>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-else-if="hasRequests && !isLoading">
              <request-item
                v-for="req in receivedRequests"
                :key="req.id"
                :email="req.userEmail"
                :message="req.message"
              />
            </ul>
            <h3 v-else>You haven't received any requests yest!</h3>
          </header>
        </base-card>
      </section>
    </div>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestsItem.vue';

export default {
  components: {
    RequestItem
  },
  data() {
    return {
      isLoading: false,
      error: false
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something failed!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}

.section {
  width: 100%;
}

.row {
  margin: 0 24px;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
