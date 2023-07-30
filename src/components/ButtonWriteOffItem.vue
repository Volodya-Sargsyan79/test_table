<template>
    <div class="buttonWriteOffItem_container">
      <TableUI />
    </div>
  </template>
  
  <script>
    import TableUI from '@/UI/TableUI.vue'

    export default {
      name: 'ButtonWriteOffItem',
      components: { 
        TableUI
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
    .buttonWriteOffItem_container {
        width: 100%;
        height: 453px;
        margin-top: 25px;
        padding: 9px 1px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.07);
        border: solid 1px #eeeff1;
        background-color: #fff;
    }
  </style>
  