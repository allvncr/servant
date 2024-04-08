<template>
  <footer>
    <div class="getIn" id="contact">
      <h2>Contactez-Nous</h2>
      <form @submit.prevent="handleForm">
        <div class="fieldset">
          <input type="text" v-model="form.name" placeholder="Nom *" required />
        </div>
        <div class="fieldset">
          <input
            type="email"
            v-model="form.email"
            placeholder="Email *"
            required
          />
        </div>
        <div class="fieldset">
          <input
            type="tel"
            v-model="form.phone"
            placeholder="Telephone *"
            required
          />
        </div>
        <div class="fieldset">
          <input
            type="text"
            v-model="form.sujet"
            placeholder="Sujet *"
            required
          />
        </div>
        <div class="fieldset">
          <textarea
            cols="30"
            rows="10"
            v-model="form.message"
            placeholder="Ton Message *"
            required
          ></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
    <div class="top">
      <div class="logo">
        <router-link to="/" class="logo">
          <img src="../assets/logo.png" width="400" />
        </router-link>
      </div>
      <div class="copyright">
        © 2024 Miska-Immobilier, Tous droits reservés.
      </div>
      <ul>
        <li>
          <a href="" target="_blank"> Facebook </a>
        </li>
        <li>
          <a href="" target="_blank"> Instagram </a>
        </li>
        <li>
          <a href="" target="_blank"> Twitter </a>
        </li>
        <li>
          <a href="" target="_blank"> Tiktok </a>
        </li>
      </ul>
    </div>

    <p>
      Toutes les informations de l'annonce sont considérées comme fiables mais
      ne sont pas garanties et sont sujettes à des erreurs, omissions,
      changements de prix, vente préalable ou retrait sans préavis. Aucune
      représentation n’est faite quant à l’exactitude d’une description. Toutes
      les mesures et superficies en pieds carrés sont approximatives et toutes
      les informations descriptives doivent être vérifiées de manière
      indépendante.
    </p>

    <div class="bottom">
      <ul>
        <li>
          <router-link to="/">Nos Maisons</router-link>
        </li>
        <li>
          <router-link to="/">A propos</router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link to="/">Conditions générales de vente</router-link>
        </li>
        <li>
          <router-link to="/">Confidentialité des données</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: null,
  email: null,
  phone: null,
  sujet: null,
  message: null,
});
const handleForm = () => {
  form.value = {
    name: null,
    email: null,
    phone: null,
    sujet: null,
    message: null,
  };
};
</script>

<style lang="scss" scoped>
footer {
  @media (max-width: 768px) {
    padding: 50px 0;
  }
  padding: 80px 0;
  background-color: #f7f7f7;

  .getIn {
    @media (max-width: 768px) {
      display: block;
      padding: 80px 15px;
    }
    background-color: #131176;
    padding: 80px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    h2 {
      @media (max-width: 768px) {
        font-size: 32px;
      }
      color: #fff;
      font-size: 48px;
      margin-bottom: 24px;
    }

    form {
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 425px) {
        padding: 36px 16px;
        width: 100%;
      }
      width: 60%;
      padding: 65px 56px;
      border-radius: 10px;
      background-color: #fff;

      .fieldset {
        margin-bottom: 1rem;

        input,
        textarea {
          width: 100%;
          padding: 15px 20px;
          border: 1px solid #00000066;
          border-radius: 0.5rem;
          outline: none;
          line-height: 1.5;
          font-size: 16px;
          color: #00000066;

          &::placeholder {
            text-transform: capitalize;
            font-size: 0.875rem;
          }
        }
      }

      button {
        cursor: pointer;
        display: inline-block;
        background-color: #001a72;
        border: 1px solid transparent;
        transition: all 0.3s ease-out;
        max-width: fit-content;
        border-radius: 100px;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.43;
        padding: calc(1.125rem - 1px) 2rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        outline: none;
        min-height: 3.5rem;
        user-select: none;
        touch-action: manipulation;
        text-decoration: none;
        color: #fff;

        &:hover {
          background-color: #002fcf;
        }
      }
    }
  }

  .top {
    @media (max-width: 768px) {
      padding: 50px 15px;
      gap: 16px;
    }
    border-bottom: 1px solid #d7d7d7;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .logo {
      @media (max-width: 768px) {
        font-size: 18px;
      }
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: -1px;
      font-size: 24px;
      font-weight: 700;
      color: #001a72;
    }

    .copyright {
      font-size: 12px;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 12px;

      a {
        text-decoration: none;
        color: inherit;
        font-size: 14px;
        transition: all 0.3s ease;

        &:hover {
          color: #001a72;
        }
      }
    }
  }

  p {
    @media (max-width: 768px) {
      padding: 24px 15px;
    }
    padding: 50px 50px 0;
    font-size: 12px;
    margin-bottom: 24px;
  }

  .bottom {
    @media (max-width: 768px) {
      padding: 15px 15px 0;
      justify-content: space-between;
    }
    @media (max-width: 425px) {
      display: block;
    }
    padding: 50px 50px 0;
    display: flex;
    justify-content: space-around;
    gap: 1.5rem;

    ul {
      list-style: none;

      a {
        display: block;
        margin-bottom: 8px;
        text-transform: capitalize;
        text-decoration: none;
        font-size: 14px;
        color: #001a72;
        font-weight: 700;
        transition: all 0.3s ease;

        &:hover {
          color: #002fcf;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
