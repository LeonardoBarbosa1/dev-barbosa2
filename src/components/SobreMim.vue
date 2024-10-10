<template>
  <div class="page-sobre">
    <div class="content">
      <h1>Sobre Mim</h1>
      <p>Informações sobre mim.</p>
    </div>

    <div class="content-sobre">
      <div class="card-container">
        <div class="card">
          <div class="image-container">
            <img src="foto.png" alt="Minha Imagem" class="circular-image"/>
          </div>
          <div class="card-body">
            <p class="card-text">Sou um desenvolvedor web com paixão por criar soluções tecnológicas que facilitam a
              vida das pessoas. Com mais de 2 anos de experiência, trabalho com frameworks poderosos como Laravel e
              Yii2, além de tecnologias de front-end como Vue.js e jQuery para entregar projetos completos e de alta
              qualidade.</p>
            <p class="card-text">Estou sempre em busca de novos desafios e tendências do mercado para evoluir como
              profissional e proporcionar as melhores soluções para os meus clientes.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SobreMim',
};
</script>

<style scoped>

.content-sobre{
  background-color: #fff;
  border-radius: 15px;
}
.content {
  padding: 20px;
  color: #ffffff;
  background-color: #121212;
  margin-bottom: 20px; /* Espaço entre o título e o card */
}

.card-container {
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o card horizontalmente */
  padding: 20px;
}

.card {
  padding: 20px;
  color: #121212;
}

.image-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.circular-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover; /* Para garantir que a imagem preencha o círculo */
}
</style>
