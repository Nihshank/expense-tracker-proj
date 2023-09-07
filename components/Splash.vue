<template>
    <div class="landing">
      <h1 class= "slide" >Take Control of Your Finances</h1>
      <div class="drop">
        <h1 class="word">One</h1>
        <h1 class="word">Expense</h1>
        <h1 class="word">At</h1>
        <h1 class="word">A</h1>
        <h1 class="word">Time!</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Splash',
    mounted(){
        setTimeout(() => {
            this.$router.push({name: 'home'}) 
        }, 6500)
    }
  };
  </script>
  
  <style>
  .landing {
    display: flex;
    align-items: center;
    height: 90vh;
  }

  .landing .slide{
    animation-name: slide;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
  }

  @keyframes slide {
    0%{
        transform: translateX(-150%);
    }
    100%{
        transform: translateX(0%);
    }
  }
  
  .landing h1 {
    margin-right: 10px;
  }
  
  .drop {
    display: flex;
  }
  
  .word {
    animation-name: word-drop;
    animation-duration: 1.5s; /* Adjust the duration as needed */
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    opacity: 0;
  }
  
  .word:nth-child(1) {
    animation-delay: 3s;
  }
  
  .word:nth-child(2) {
    animation-delay: 3.5s; /* Adjust the delay for each word */
  }
  
  .word:nth-child(3) {
    animation-delay: 4s; /* Adjust the delay for each word */
  }
  
  .word:nth-child(4) {
    animation-delay: 4.5s; /* Adjust the delay for each word */
  }
  
  .word:nth-child(5) {
    animation-delay: 5s; /* Adjust the delay for each word */
  }
  
  @keyframes word-drop {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  </style>
  