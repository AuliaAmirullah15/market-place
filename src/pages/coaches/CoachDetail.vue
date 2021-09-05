<template>
  <div class="row">
    <section class="info">
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>Price: ${{ rate }}/ hour</h3>
        Description: <br />
        <p>{{ description }}</p>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
      </base-card>
    </section>
    <section class="contact">
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/';
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
  }
};
</script>

<style scoped>
.row {
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 24px;
}

.info {
  width: 40%;
  padding: 0 6px;
}

.contact {
  width: 60%;
  padding: 0 6px;
}

@media (max-width: 576px) {
  .info {
    width: 100%;
  }

  .contact {
    width: 100%;
  }
}
</style>
