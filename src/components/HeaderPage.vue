<template>
  <div>
    <header>
      <router-link to="/" class="logo">Miska-Immobilier</router-link>
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/" @click="scrollToElement('maison')"
            >Présentation Miska</router-link
          >
        </li>
        <li>
          <router-link to="" @click="scrollToElement('news')">
            Visiter Nos Biens
          </router-link>
        </li>
        <li>
          <router-link to="/" @click="scrollToElement('contact')">
            Contactez-Nous
          </router-link>
        </li>
      </ul>
      <div class="actions">
        <div class="login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            style="fill: #fff"
          >
            <path
              d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
            ></path>
          </svg>
        </div>
        <div class="menulink" @click="visibleRight = true">Menu</div>
      </div>
    </header>
    <Sidebar
      v-model:visible="visibleRight"
      position="right"
      class="w-full md:w-20rem lg:w-30rem"
    >
      <ul class="menu">
        <li>
          <router-link to="/acheter">Acheter</router-link>
        </li>
        <li>
          <router-link to="/louer">Louer</router-link>
        </li>
        <li>
          <router-link to="/contact-us">Contactez-nous</router-link>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visibleRight = ref(false);

const scrollToElement = (elementId) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
header {
  @media (max-width: 768px) {
    padding: 16px 24px;
    justify-content: space-between;
  }
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 24px 36px;

  .logo {
    @media (max-width: 768px) {
      font-size: 20px;
      color: #000;
      text-shadow: none;
    }
    @media (max-width: 425px) {
      font-size: 14px;
    }
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    text-shadow: 1px 1px 0px #000;
  }

  ul {
    @media (max-width: 768px) {
      gap: 12px;
      display: none;
    }
    list-style: none;
    display: flex;
    align-items: center;
    gap: 18px;

    a {
      display: inline-block;
      color: #fff;
      padding: 8px;
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s ease;
      text-shadow: 0px 1px 0px #000;

      &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
      }
    }
  }

  .actions {
    @media (max-width: 768px) {
      font-size: 16px;
      color: #000;
      text-shadow: none;
    }
    @media (max-width: 425px) {
      font-size: 12px;
    }
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 1px 1px 0px #000;
    display: flex;
    align-items: center;
    gap: 24px;

    .login {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #fff;
      border-radius: 50%;
      width: 36px;
      height: 36px;
    }
  }
}
.menu {
  padding: 48px 15px;
  list-style: none;
  li {
    padding: 15px;

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -1px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
