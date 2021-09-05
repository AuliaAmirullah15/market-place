<template>
  <div class="card-wrapper">
    <div class="card">
      <img
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/03/GRAPHIC-DESIGNER-DESCRIPTION.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces"
        class="img-control"
      />
      <div class="desc">
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
          <base-badge
            v-for="area in areas"
            :key="area"
            :type="area"
            :title="area"
          ></base-badge>
        </div>
        <div class="actions">
          <base-button mode="outline" link :to="coachContactLink"
            >Contact</base-button
          >
          <base-button link :to="coachDetailsLink">View Details</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton, BaseBadge },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    }
  }
};
</script>

<style scoped>
.card-wrapper {
  width: 49%;
  padding: 0 6px;
  min-height: 300px;
}
.card {
  border: 1px solid #424242;
  border-radius: 12px;
  width: 100%;
  min-height: 300px;
}

.desc {
  margin: 1rem 0;
  padding: 1rem;
}

@media (max-width: 991px) {
  .card-wrapper {
    width: 100%;
  }
}

.img-control {
  width: 100%;
  height: 35%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
