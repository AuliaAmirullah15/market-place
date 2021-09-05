<template>
  <section class="row">
    <h1 class="msg">
      Sorry, not found. Check out all our
      <router-link to="/coaches">coaches</router-link> instead
    </h1>
    <div class="astro-wrap">
      <a class="astronaut" href="#" title="return to base"></a>
    </div>
  </section>
</template>

<style scoped>
.row {
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 16px;
  line-height: 25px;
  font-weight: normal;
  /* background: url(https://i.imgur.com/bsqWdBi.jpg); */
}

.msg {
  color: rgb(41, 41, 41);
  text-align: center;
  animation: flicker 2s ease infinite;
}

.astro-wrap {
  width: 265px;
  height: 430px;
  margin: 0 auto;
  position: relative;
}

.astronaut {
  background: url(https://i.imgur.com/VurcHkh.png);
  width: 265px;
  height: 429px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 50px);
  animation: move 10s infinite;
}

@keyframes move {
  0% {
    transform: translate(0, 50px);
  }
  50% {
    transform: translate(20px, 100px);
  }
  100% {
    transform: translate(0, 50px);
  }
}

@keyframes blink {
  0% {
    top: 50px;
    left: 0px;
  }
  50% {
    top: 100px;
    left: 20px;
  }
  100% {
    top: 50px;
    left: 0px;
  }
}

@keyframes flicker {
  0% {
    opacity: 0.9;
  }
  30% {
    opacity: 0.97;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  88% {
    opacity: 0.98;
  }
  90% {
    opacity: 0.94;
  }
  93% {
    opacity: 0.9;
  }
  95% {
    opacity: 0.99;
  }
  96% {
    opacity: 0.93;
  }
  98% {
    opacity: 1;
  }
  99% {
    opacity: 0.93;
  }
}

@media only screen and (max-width: 570px) {
  .msg {
    position: absolute;
  }
}
@media only screen and (min-width: 1900px) {
  row {
    background-size: cover;
  }
}

a {
  color: rgb(116, 6, 6);
}
</style>
