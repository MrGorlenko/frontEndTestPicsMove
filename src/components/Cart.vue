<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    spisok_dlya_rendera() {
      //return this.cart.reverse(); // можно убрать этот ненужный reverse просто заменив
      // push на unshift в методе добавления товара
      return this.cart;
    },
  },
};
</script>

<style></style>
