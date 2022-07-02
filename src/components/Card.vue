<template>
  <div class="card" :style="{ width: cardsWidth + '%' }">
    <p class="card-title">{{ product.title }}</p>
    <img class="card-image" :src="product.image" alt="" />
    <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>
    <div>
      <input v-model="amount" type="number" min="0" :id="product.id" />
    </div>
    <button @click="addToCart(product)">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: [String, Number],
      default: "",
    },
    currency: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      amount: 0,
    };
  },
  computed: {
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
      if (width > 840) {
        count = 3;
      } else if (width > 420 && width < 840) {
        count = 2;
      }
      return 100 / count;
    },
  },
  methods: {
    addToCart(product) {
      const amount = this.amount;
      const price = product.price;
      const title = product.title;

      let data = {
        amount,
        price,
        title,
      };

      amount > 0
        ? this.$emit("addToCart", data)
        : alert("Нельзя взять 0 элементов!");
    },
  },
};
</script>

<style>
.card {
  display: inline-block;
  width: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
.card-image {
  width: 100%;
}
button {
  padding: 5px;
  margin: 5px;
}
</style>
