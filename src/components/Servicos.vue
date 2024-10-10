<template>
  <div class="page-servicos">
    <div class="content">
      <h1>Serviços</h1>
      <p>Desenvolvimento de soluções digitais para garantir o melhor desempenho e experiência do usuário.</p>
    </div>
    <div class="img-content">
      <div class="image-container-site">
        <img src="site-responsivo.png" alt="Minha Imagem" class="image-site"/>
      </div>

      <div class="content-ol">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item">Desenvolvimento de sites responsivos</li>
          <li class="list-group-item">Aplicativos web personalizados</li>
          <li class="list-group-item">Desenvolvimento de sistemas em PHP (Laravel, Yii2)</li>
          <li class="list-group-item">Criação de interfaces com Vue.js e jQuery</li>
          <li class="list-group-item">Integração de APIs</li>
          <li class="list-group-item">Manutenção e suporte técnico contínuo</li>
        </ol>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Servicos',
};
</script>

<style scoped>
.img-content{
  background-color: #fff;
  border-radius: 15px;
}

.content {
  padding: 20px;
  color: #ffffff;
  background-color: #121212;
  margin-bottom: 20px; /* Espaço entre o título e o card */
}

.content-ol {
  padding: 20px;
  color: #121212;
}


.image-container-site {
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  gap: 50px;
  padding: 20px;
  color: #121212;
}

/* Ajusta o layout para telas grandes (desktop) */
.image-site {
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  animation: swing 3s ease-in-out infinite;
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

/* Para telas menores (celulares), muda o layout para vertical */
@media (max-width: 768px) {
  .image-container-site {
    flex-direction: column;
    text-align: center; /* Centraliza o texto e a imagem no mobile */
  }

  .image-site {
    margin-top: 15px;
    max-width: 100%; /* A imagem ocupa toda a largura disponível no celular */
  }
}

.image-site {
  width: 500px;
  height: 300px;
}
</style>
