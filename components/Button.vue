<template>
    <button :style = "{background: color}" class = "btn" >{{ text }}</button>
</template>


<script>
    export default{
        name: 'Button',
        props: {
            text: String,
            color: String
        }
    }
</script>


<style>
    .btn{
      display: inline-block;
      padding: 5px 10px;
      border: none;
      background: var(--secondary-color);
      border-radius: 10px;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
    .btn:hover{
      transform: scale(0.97);
    }
</style>