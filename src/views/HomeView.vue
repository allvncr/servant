<template>
  <main>
    <header>
      <router-link to="/" class="logo">Serhant.</router-link>
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/">Appartements</router-link>
        </li>
        <li>
          <router-link to="/">A propos</router-link>
        </li>
      </ul>
      <div class="actions">
        <div class="login">Connexion</div>
      </div>
    </header>

    <div class="banner">
      <video
        poster="https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/so_0,eo_0/nxyi3r8gi6tccpz4ke5p/8.jpg"
        loop
        muted
        autoplay
      >
        <source
          src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/nxyi3r8gi6tccpz4ke5p/8.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/nxyi3r8gi6tccpz4ke5p/8.mp4"
          type="video/mp4"
        />
      </video>
      <p>Faire un pas pour <br />Votre Future.</p>
    </div>

    <section>
      <h1>Propriétés</h1>
      <p>
        Découvrez certaines de nos maisons, appartements, maisons de ville les
        plus exclusifs et bien plus encore.
      </p>

      <ul class="maisons">
        <li class="maison" v-for="(maison, i) in maisons" :key="i">
          <router-link to="/">
            <div class="image">
              <img :src="maison.image" />
            </div>
            <div class="price">${{ maison.price }}</div>
            <div class="title">
              {{ maison.name }}
            </div>
            <div class="infos">
              <ul>
                <li>{{ maison.bed }} lits</li>
                <li>{{ maison.bath }} douches</li>
              </ul>
            </div>
          </router-link>
        </li>
      </ul>
    </section>

    <footer>
      <div class="getIn">
        <h2>Contactez-Nous</h2>
        <form @submit.prevent="">
          <div class="fieldset">
            <input
              type="text"
              v-model="form.name"
              placeholder="Nom *"
              required
            />
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
          <router-link to="/" class="logo">Serhant.</router-link>
        </div>
        <div class="copyright">
          © 2024 Serhant Real Estate, Inc. All Rights Reserved.
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
        représentation n’est faite quant à l’exactitude d’une description.
        Toutes les mesures et superficies en pieds carrés sont approximatives et
        toutes les informations descriptives doivent être vérifiées de manière
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
  </main>
</template>

<script setup>
import { ref } from "vue";

const maisons = ref([
  {
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522855446/-7291978570226573518.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522874007/-8687501540658878480.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522873815/3639262338627653129.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522873755/2135095839947240560.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6270919/-2238184018286443187.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522873807/-4364457899624697075.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
]);

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
header {
  @media (max-width: 768px) {
    padding: 16px 24px;
    justify-content: space-between;
  }
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 24px 36px;
  z-index: 1;

  .logo {
    @media (max-width: 768px) {
      color: #000;
      text-shadow: none;
    }
    @media (max-width: 425px) {
      font-size: 24px;
    }
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-size: 32px;
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
      padding: 8px 16px;
      font-size: 18px;
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
      color: #000;
      text-shadow: none;
    }
    @media (max-width: 425px) {
      font-size: 14px;
    }
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 1px 1px 0px #000;
  }
}

.banner {
  @media (max-width: 768px) {
    margin-top: 0;
    height: 70vh;
  }
  position: relative;
  height: calc(100vh - 85px);
  margin-top: -90px;
  z-index: -1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  p {
    @media (max-width: 768px) {
      font-size: 48px;
    }
    @media (max-width: 425px) {
      font-size: 24px;
    }
    text-transform: capitalize;
    font-size: 96px;
    font-weight: 700;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 0px #000;
  }
}

section {
  @media (max-width: 768px) {
    padding: 96px 15px;
  }
  padding: 112px 68px;
  h1 {
    @media (max-width: 768px) {
      font-size: 36px;
    }
    @media (max-width: 425px) {
      font-size: 28px;
    }
    color: #001a72;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    @media (max-width: 425px) {
      font-size: 14px;
    }
    font-size: 16px;
    color: #686868;
    margin-bottom: 24px;
    max-width: 647px;
  }

  .maisons {
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 425px) {
      grid-template-columns: 1fr;
    }
    margin-top: 40px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 3rem;
    padding: 0;

    .maison:hover img {
      transform: scale(1.05);
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    .image {
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        aspect-ratio: 400/270;
        object-fit: cover;
        object-position: center;
        transition: transform 0.3s ease-out;
      }
    }
    .price {
      @media (max-width: 425px) {
        font-size: 14px;
      }
      font-size: 16px;
      margin: 16px 0 4px;
      font-weight: 700;
    }
    .title {
      @media (max-width: 425px) {
        font-size: 14px;
        margin-bottom: 0.5rem;
      }
      font-size: 14px;
      margin-bottom: 0.75rem;
    }

    .infos {
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
}

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
        font-size: 24px;
      }
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: -1px;
      font-size: 32px;
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
