<template>
  <main>
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

    <section id="maison">
      <h1>Propriétés</h1>
      <p>
        Découvrez certaines de nos maisons, appartements, maisons de ville les
        plus exclusifs et bien plus encore.
      </p>

      <ul class="maisons">
        <li class="maison" v-for="(maison, i) in maisons" :key="i">
          <router-link :to="`/maison/${maison.id}`">
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

    <section id="news">
      <h1>Nouveautés</h1>
      <p>
        Explorez de nouveaux bâtiments qui rehaussent la vie de luxe moderne.
      </p>

      <div class="carousel">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const maisons = ref([
  {
    id: 1,
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522855446/-7291978570226573518.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    id: 2,
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522874007/-8687501540658878480.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    id: 3,
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522873815/3639262338627653129.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    id: 4,
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/RPLU-1032522873755/2135095839947240560.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    id: 5,
    image:
      "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6270919/-2238184018286443187.jpg",
    price: "195,000,000",
    name: "217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019",
    bed: 7,
    bath: 5,
  },
  {
    id: 6,
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

const visibleRight = ref(false);

const handleForm = () => {
  form.value = {
    name: null,
    email: null,
    phone: null,
    sujet: null,
    message: null,
  };
};

const scrollToElement = (elementId) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
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

.carousel {
  height: 480px;
  display: flex;
  overflow: hidden;
  width: 100%;

  .item {
    flex: 1;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: all 1s ease;
    // background-color: #000;
    // background-blend-mode: luminosity;

    &:hover {
      flex: 4;
      background-blend-mode: normal;
    }

    &:nth-child(1) {
      background-image: url("https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/o6fzhpu6qh4vnmaikaz4/hero_east_low_res-1");
    }
    &:nth-child(2) {
      background-image: url("https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/h7zwb0sdip19ip8wvewn/iris-tribeca");
    }
    &:nth-child(3) {
      background-image: url("https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/ug5ueolsndxfmg3kyyth/dji_0048-hdr-2");
    }
    &:nth-child(4) {
      background-image: url("https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/a3jjdwye96ilkbitvrgu/huxley");
    }
    &:nth-child(5) {
      background-image: url("https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/rwlkqrr0yxevubxzdcct/475-kent-1");
    }
    &:nth-child(6) {
      background-image: url("https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/lv7jc3vgyowkeezlwmir/11-32-31-ave-01-hero-p4-final-medium-res");
    }
    &:nth-child(7) {
      background-image: url("https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/ednto1m6dswvf0wvuheu/1080-lorimer");
    }
    &:nth-child(8) {
      background-image: url("https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/kt2cvan9p9khrud6hs30/24");
    }
  }
}
</style>
