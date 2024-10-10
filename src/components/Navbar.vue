<template>
  <div class="navbar-home" :class="{ 'visible': isVisible }">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#home">DevBarbosa2</a>
        <button class="navbar-toggler position-relative rounded-circle ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><fa icon="bars-staggered" /></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home" @click="closeNavbar">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#servicos" @click="closeNavbar">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#sobre-mim" @click="closeNavbar">Sobre Mim</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contato" @click="closeNavbar">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'navbar',
  data() {
    return {
      isVisible: true,
      lastScrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScroll = document.documentElement.scrollTop;

      if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        // Rolando para baixo
        this.isVisible = false;
      } else {
        // Rolando para cima
        this.isVisible = true;
      }

      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar números negativos
    },
    closeNavbar() {
      let navbarToggler = document.querySelector('.navbar-toggler');
      let navbarCollapse = document.querySelector('.navbar-collapse');
      let isExpanded = navbarCollapse.classList.contains('show');

      if (isExpanded) {
        navbarToggler.click();
      }
    },
  },
};
</script>

<style scoped>
.navbar-home {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100; /* Coloca o navbar acima de outros elementos */
  transition: transform 0.3s ease-in-out; /* Transição suave */
  transform: translateY(0); /* Estado padrão */
}

.navbar-home:not(.visible) {
  transform: translateY(-100%); /* Oculta a navbar */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  padding: 10px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.nav-links li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1em;
}

.nav-links li a.router-link-active {
  border-bottom: 2px solid #ffffff;
}
</style>
