<template>
  <div class="writeOffItem">
    <TopWriteOffItem />
    <ButtonWriteOffItem />
  </div>
</template>

<script>
// @ is an alias to /src
import TopWriteOffItem from '@/components/TopWriteOffItem.vue'
import ButtonWriteOffItem from '@/components/ButtonWriteOffItem.vue'

export default {
  name: 'WriteOffItem',
  components: {
    TopWriteOffItem,
    ButtonWriteOffItem
  }
}
</script>

<style>
  .writeOffItem{
    width: 100%;
  }
</style>