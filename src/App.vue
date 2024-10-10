<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div id="app" class="app">
    <div class="content">
      <Navbar/>
    </div>
    <Home id="home"/>
    <Servicos id="servicos"/>
    <Sobre id="sobre-mim"/>
    <Contato id="contato"/>
    <Footer/>
<!--    <router-view/>-->

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Servicos from './components/Servicos.vue';
import Sobre from './components/SobreMim.vue';
import Contato from './components/Contato.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Servicos,
    Sobre,
    Contato,
    Footer,
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #121212;
  font-family: Arial, sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  background-color: #121212;
}

router-view {
  width: 100%;
}

</style>
