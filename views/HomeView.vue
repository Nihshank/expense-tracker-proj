<template>
  <div class = "container">
    <History></History>
    <router-link class = "about-margin router-effect" to = "/about">About</router-link>
  </div>
</template>

<script>

import History from '../components/History.vue';


export default {

  name: 'HomeView',
  components: {
    History
  }
}

</script>


<style>
  .about-margin{
    margin-top: 20px;
  }
</style>
