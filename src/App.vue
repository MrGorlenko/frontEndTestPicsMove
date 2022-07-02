<template>
  <div id="app">
    <!-- <Header :cart="cart" :currency="currency"></Header>
    <List :currency="currency"/>
    <Cart :cart="cart"/> -->
    <!-- Обычно в данную компоненту не рендерят полноценно компоненты и страницы, а используют App.vue для расположения всех 
        существующих страниц и навигации между ними. Здесь предполагается одностраничное приложение, но тем не менее, тут лучше расположить
        ту единственную страницу, которая имеется -->
    <Main />
  </div>
</template>

<script>
import Main from "./pages/Main.vue";
// import Header from './components/Header.vue';
// import List from './components/List.vue';
// import Cart from './components/Cart.vue';

export default {
  name: "App",
  data() {
    return {
      cart: [],
      currency: "VGTB",
    };
  },
  components: {
    Main,
    // Header,
    // List,
    // Cart,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
