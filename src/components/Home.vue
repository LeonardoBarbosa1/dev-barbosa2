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
  background-image: url('/public/fundo2.jpg'); /* Use uma imagem de alta resolução */
  background-size: cover; /* Faz a imagem cobrir toda a área disponível */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  background-position: center; /* Centraliza a imagem na tela */
  padding: 0; /* Remova o padding para centralizar corretamente */
  background-color: #121212; /* Cor de fundo de suporte */
  height: 100vh; /* Garante que a seção ocupe 100% da altura da tela */
  display: flex; /* Ativa o Flexbox */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .home-page {
    background-image: url('/public/fundo-mobile1.jpg'); /* Imagem específica para dispositivos móveis */
    background-attachment: scroll; /* Remove o efeito de fixação para móveis */
    background-size: cover; /* Faz a imagem cobrir toda a área disponível */
  }

  .name-container {
    font-size: 1.5em; /* Ajuste o tamanho da fonte para telas menores */
    padding: 20px; /* Adiciona um pouco de padding para os dispositivos móveis */
  }
}

.name-container {
  margin-top: 100px;
}

.content-2 {
  padding: 20px;
  color: #121212;
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
  animation: fadeInUp 5s ease-in-out infinite;
  /* Adiciona um atraso diferente para cada elemento */
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