<template>
    <button class="button_container">
      <span class="button_container--plus">+</span> 
      Добавить строку
    </button>
</template>

<script>
  export default {
    name: 'ButtonUI',
  }
</script>

<style>
  .button_container {
    width: 146px;
    height: 35px;
    padding: 10px 15px 10px 10px;
    border-radius: 5px;
    background-color: #2f8cff;
    border: none;
    font-family: myriadPro;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }

  .button_container--plus {
    width: 11px;
    height: 11px;
    margin: 2px 7px 2px 0;
    border-radius: 100px;
    color: #1253a2;
  }

</style>