<template>
  <div>
    <!-- Поскольку приложение подразумевает одну страницу, сейчас можно оставить так. В случае появления еще страниц,
    то место, которое обозначено сейчас как List и Cart можно сделать как <slot></slot> , назвать эту компоненту (страницу) index (вместо Main),
    сохраняя при этом шапку сайта, а затем вызывать в каждой странице, сохраняя шапку -->
    <Header :cart="cart" :currency="currency"></Header>
    <List>
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :currency="currency"
        @addToCart="addToCart"
      />
    </List>
    <Cart :cart="cart" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import List from "../components/List.vue";
import Cart from "../components/Cart.vue";
import Card from "../components/Card.vue";
export default {
  name: "Main",
  components: { Header, List, Cart, Card },
  data() {
    return {
      cart: [],
      // products: [], // вынесено в getter
      currency: "VGTB",
    };
  },
  created() {
    this.startPricesMonitoring();
  },

  computed: {
    products() {
      return this.$store.getters.productList;
      // если выносить вызов апи в actions vuex state'а,
      // то следует проводить полный цикл и расчитывать
      // значение так из геттера, чем создавать
      // переменную в методе и затем назначать ее на список
      // из data
    },
  },

  methods: {
    startPricesMonitoring() {
      // setInterval(this.getList, 1000); // В ТЗ автообновление стоит с периодом
      // в 2 секунды, а не в одну
      setInterval(this.getList, 2000);
    },
    async getList() {
      await this.$store.dispatch("getProductsList");
      // сделав из этого action промис, теперь учитывается и та самая функция sleep() из products.js, а значит теперь будет задержка.
      // пока getProductsList не возвращал промис, данная функция игнорировалась
    },
    addToCart(product) {
      // this.$parent.cart.push(product);
      // теперь можно избежать использования
      // $parent
      this.cart.unshift(product); // Для того чтобы убрать .reverse() в хедере

      // В ТЗ нет условия касательно того, что в корзину можно добавлять уже добавленные элементы.
      // В случае необходимости такого функционала, можно произвести проверку на уже наличие такого продукта.
      // такой код будет выглядеть вот так:
      // !this.cart.map((product)=>product.name).includes(product.name) ? this.cart.unshift(product) : alert('Такой продукт уже есть!')
      // Однако с точки зрения юзера это потребует добавить новый функционал удаления ресурса из списка (и из корзины в хедере)
    },
  },
};
</script>

<style></style>
