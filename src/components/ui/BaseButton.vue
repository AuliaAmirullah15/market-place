<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #6e0515;
  border: 1px solid #6e0515;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  transition: 0.3s ease-in;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #42000a;
  border-color: #42000a;
  transition: 0.3s ease-in;
}

.flat {
  background-color: transparent;
  color: #6e0515;
  border: none;
  transition: 0.3s ease-in;
}

.outline {
  background-color: transparent;
  border-color: #6e0515;
  color: #6e0515;
  transition: 0.3s ease-in;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #42000a;
  color: white;
  transition: 0.3s ease-in;
}
</style>
