<template>
  <span class="badge" :class="type"> {{ text }}</span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
}

.frontend {
  background-color: #c5431b;
  color: white;
}

.backend {
  background-color: #dda338;
  color: white;
}

.career {
  background-color: #23a1d3;
  color: white;
}
</style>
