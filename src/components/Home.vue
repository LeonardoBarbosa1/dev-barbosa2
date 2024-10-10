<template>
  <div class="page">
    <div class="home-page" id="home">
      <div class="name-container">
        <h1>Leonardo Barbosa</h1>
        <p>Desenvolvedor <span class="animated-text"> Full-Stack</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
};
</script>

<style scoped>


.home-page {
  color: #ffffff;
  background-image: url('/public/fundo2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0;
  background-color: #121212;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .home-page {
    background-image: url('/public/fundo-mobile1.jpg');
    background-attachment: scroll;
    background-size: cover;
  }

  .name-container {
    font-size: 1.5em;
    padding: 20px;
  }
}

.name-container {
  margin-top: 100px;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animated-text {
  opacity: 0;
  transform: translateY(20px); /* Começa com o texto deslocado para baixo */
  animation: fadeInUp 5s ease-in-out infinite; /* Adiciona um atraso diferente para cada elemento */
}

.animated-text:nth-child(2) {
  animation-delay: 1s; /* Atraso maior para o segundo texto */
}

@keyframes fadeInUp {
  0%, 100% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>