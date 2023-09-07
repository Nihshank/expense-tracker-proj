<!-- allows users to input their daily expenses, and visualize their spending habits -->

<template>
  <div class ="container">
      <Header v-if = "!showSplash" ></Header>
      <router-view class = "fade"></router-view>
      <Footer v-if = "!showSplash" ></Footer>  
  </div>
</template>

<script>

    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

  export default{
    name: 'App',
    components: {
      Header,
      Footer
    },
    computed: {
      showSplash() {
        return this.$route.name === 'splash';
      }
    }
  }
</script>

<style>

    :root {
      --primary-color: #bbb;
      --secondary-color: black;
      --green-color: #355E3B;
      --red-color: #750000;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: fit-content;
        min-width: 400px;
        margin-top: 20px;
        margin: auto;
        padding: 10px 20px;
    }
    .card{
        padding: 10px 5px;
        border-radius: 10px;
        border: 1px solid black;
        box-shadow: 3px 3px 15px black;
        min-width: 400px;
        margin-bottom: 30px;
    }
    .card:last-of-type{
      margin-bottom: 0px;
    }
    a{
    text-decoration: none;
    color: black;
    }

    .router-effect{
      transition: 0.5s ease-in;
    }

    .router-effect:hover{
        transform: translateY(20%);
    }
</style>
