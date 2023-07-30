<template>
  <div class="topWriteOffItem_container">
    <ButtonUI />
  </div>
</template>

<script>
  import ButtonUI from '../UI/ButtonUI.vue'

  export default {
    name: 'TopWriteOffItem',
    components: { 
      ButtonUI 
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .topWriteOffItem_container {
    width: 100%;
    height: 75px;
    padding: 20px 25px;
    border-radius: 10px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.07);
    border: solid 1px #eeeff1;
    background-color: #fff;
  }
</style>
