<template>
  <div class="page-contato">
    <h1>Contato</h1>
    <p>Entre em contato comigo através deste formulário.</p>

    <form v-if="!emailEnviado" @submit.prevent="enviarEmail">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="emailInput" class="form-label">Email</label>
          <input
              type="email"
              class="form-control"
              id="emailInput"
              v-model="email"
              placeholder="nome@exemplo.com"
              required
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="assuntoInput" class="form-label">Assunto</label>
          <input
              type="text"
              class="form-control"
              id="assuntoInput"
              v-model="assunto"
              placeholder="Assunto da sua mensagem"
              required
          />
        </div>

        <div class="col-12 mb-3">
          <label for="descricaoTextarea" class="form-label">Descrição</label>
          <textarea
              class="form-control"
              id="descricaoTextarea"
              v-model="descricao"
              rows="5"
              placeholder="Descreva sua mensagem aqui..."
              required
          ></textarea>
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>

    <!-- Spinner de carregamento -->
    <div v-if="carregando" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Enviando...</span>
      </div>
      <p>Enviando sua mensagem, por favor aguarde...</p>
    </div>
    <!-- Mensagem de confirmação -->
    <div v-else-if="emailEnviado">
      <div class="msg-success">
        <h2>Mensagem enviada com sucesso!</h2>
        <p>Obrigado por entrar em contato. Responderemos em breve.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contato',
  data() {
    return {
      email: '',
      assunto: '',
      descricao: '',
      emailEnviado: false, // Variável para controlar o estado do envio
      carregando: false,
    };
  },
  methods: {
    enviarEmail() {
      this.carregando = true;

      let formData = new FormData();

      formData.append("email", this.email);
      formData.append("assunto", this.assunto);
      formData.append("descricao", this.descricao);
      formData.append("_next", "/");  // Redirecionar para home após o envio
      formData.append("_captcha", "false");  // Desabilitar o captcha (se aplicável)

      fetch("https://formsubmit.co/devbarbosa2@gmail.com", {
        method: "POST",
        body: formData,
      })
          .then(response => {
            if (response.ok) {
              this.carregando = false;
              this.emailEnviado = true;
            }
          })
          .catch(error => {
            console.error("Erro ao enviar o formulário:", error);
          });
    },
  },
};
</script>

<style scoped>
.page-contato {
  padding: 40px;
  color: #ffffff;
  background-color: #121212;
}

.form-label {
  font-weight: bold;
}

.btn {
  margin-top: 10px;
}

.msg-success{
  color: #2a9826;
}
</style>
