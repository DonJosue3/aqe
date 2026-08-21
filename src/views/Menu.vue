<template>
  <div class="body">
    <div class="head">
      <div class="header-bar">
        <div class="logo">
          <img src="/images/aqelogo.png" alt="Logo">
        </div>
        <nav class="main-nav-container">
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/menu" class="active">Menu</RouterLink>
          <RouterLink to="/shop">Shop</RouterLink>
        </nav>
        <!-- Bouton hamburger -->
        <button v-if="!mobileOpen" class="hamburger" @click="mobileOpen = true" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Menu mobile -->
        <Transition name="drawer">
          <div v-if="mobileOpen" class="mobile-overlay" @click.self="mobileOpen = false">
            <div class="mobile-drawer">

              <button class="drawer-close" @click="mobileOpen = false" aria-label="Fermer">
                ✕
              </button>

              <div class="drawer-logo">
                <img src="/images/aqelogo.png" alt="African Queen Empire">
              </div>

              <nav class="drawer-links">

                <RouterLink to="/home" class="drawer-link" @click="mobileOpen = false">
                  Home
                </RouterLink>

                <RouterLink to="/services" class="drawer-link" @click="mobileOpen = false">
                  Services
                </RouterLink>

                <RouterLink to="/menu" class="drawer-link" @click="mobileOpen = false">
                  Menu
                </RouterLink>

                <RouterLink to="/shop" class="drawer-link" @click="mobileOpen = false">
                  Shop
                </RouterLink>
              </nav>
            </div>
          </div>
        </Transition>
      </div>
      <div class="m-hero">
        <h1>Our Menu</h1>
      </div>
    </div>
    <div v-if="menu" class="premier">
      <div class="cardun">
        <div class="menuone"><img class="image1" src="/images/fr2.png" alt="Plat 1">

          <div class="un">
            <h1>{{ menu.platsDuJour.title }}</h1>
            <div class="line1"></div>

            <div v-for="(item, index) in menu.platsDuJour.column1" :key="`column1-${index}`" class="menu-item"
              :style="item.type === 'price' ? 'justify-content:flex-end' : ''">
              <template v-if="item.type === 'price'">
                <span class="prix">{{ item.price }}</span>
              </template>

              <template v-else>
                <div class="nom">
                  <div class="point"></div>
                  {{ item.name }}
                </div>

                <span v-if="item.price" class="prix">
                  {{ item.price }}
                </span>
              </template>
            </div>
          </div>
          <div class="deux">
            <div v-for="(item, index) in menu.platsDuJour.column2" :key="`column2-${index}`" class="menu-item"
              :style="item.type === 'price' ? 'justify-content:flex-end' : ''">
              <template v-if="item.type === 'price'">
                <span class="prix">{{ item.price }}</span>
              </template>

              <template v-else>
                <div class="nom">
                  <div class="point"></div>
                  {{ item.name }}
                </div>

                <span v-if="item.price" class="prix">
                  {{ item.price }}
                </span>
              </template>
            </div>
          </div><img class="image2" src="/images/FR1.png" alt="Plat 2">
        </div>
      </div>
      <div class="carddeux">
        <div class="menutoo">
          <div class="trois">
            <h1>{{ menu.specialites.title }}</h1>
            <div class="line1"></div>
            <template v-for="(item, index) in menu.specialites.items.slice(0, 10)" :key="`specialite-${index}`">
              <div class="menu-item">
                <div class="nom">
                  <div class="point"></div>
                  {{ item.name }}
                </div>

                <span v-if="item.price" class="prix">
                  {{ item.price }}
                </span>
              </div>
            </template>
            <img class="image3" src="/images/ns1.png" alt="">
          </div><img class="image4" src="/images/ns2.png" alt="">
          <div class="quatre">
            <div class="deuxdeux">
              <div v-for="(item, index) in menu.specialites.items.slice(10)" :key="`specialite-${index + 10}`" class="menu-item">
                <div class="nom">
                  <div class="point"></div>
                  {{ item.name }}
                </div>

                <span v-if="item.price" class="prix">
                  {{ item.price }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="menu" class="second">
      <div class="cardtrois">
        <div class="menuthree">
          <div class="cinq">
            <h1>{{ menu.boissons.title }}</h1>
            <div class="line1"></div>
            <div v-for="item in menu.boissons.items" :key="item.name" class="menu-item">
              <div class="nom">
                <div class="point"></div>
                {{ item.name }}
              </div>

              <span v-if="item.price" class="prix">
                {{ item.price }}
              </span>
            </div>
            <img class="image5" src="/images/cd4.png" alt="Plat 1">
          </div><img class="image6" src="/images/cd1.png" alt="">
          <div class="six">
            <h1>{{ menu.petitDejeuner.title }}</h1>
            <div class="line1"></div>

            <template v-for="item in menu.petitDejeuner.items" :key="item.name">
              <div class="menu-item">
                <div class="nom">
                  <div class="point"></div>
                  {{ item.name }}
                </div>

                <span v-if="item.price" class="prix">
                  {{ item.price }}
                </span>
              </div>

              <div v-if="item.description" class="description">
                {{ item.description }}
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="cardquatre">
        <div class="menuquatre"><img class="image7" src="/images/p2.png" alt="">
          <div class="sept">
            <div class="deuxdeux">
              <div v-for="(item, index) in menu.petitsPlus.items" :key="`plus-${index}`" class="menu-item">
                <div class="nom">
                  <div class="point"></div>
                  {{ item.name }}
                </div>

                <span v-if="item.price" class="prix">
                  {{ item.price }}
                </span>
              </div>
            </div>
          </div><img class="image8" src="/images/p1.png" alt="">
          <div class="huit">
            <h1>{{ menu.patisseries.title }}</h1>
            <div class="line1"></div>

            <div v-for="item in menu.patisseries.items" :key="item.name" class="menu-item">
              <div class="nom">
                <div class="point"></div>
                {{ item.name }}
              </div>

              <span v-if="item.price" class="prix">
                {{ item.price }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="menu" class="three">
      <div class="cardcinq">
        <div class="menucinq">
          <div class="neuf">
            <div class="deuxdeux">
              <div class="titre">
                <h1>{{ menu.portions.title }}</h1>
              </div>

              <div v-for="item in menu.portions.items" :key="item.name" class="menu-item">
                <div class="nom">
                  <div class="point"></div>
                  {{ item.name }}
                </div>

                <span v-if="item.price" class="prix">
                  {{ item.price }}
                </span>
              </div>
            </div>
          </div><img class="image9" src="/images/r1.png" alt=""><img class="image10" src="/images/pi1.png" alt="">
          <div class="dix">
            <h1>{{ menu.pizza.title }}</h1>
            <div class="line1"></div>

            <template v-for="item in menu.pizza.items" :key="item.name">
              <div class="menu-item">
                <div class="nom">
                  <div class="point"></div>
                  {{ item.name }}
                </div>

                <span v-if="item.price" class="prix">
                  {{ item.price }}
                </span>
              </div>

              <div v-if="item.description" class="description">
                {{ item.description }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-brand-logo">African Queen Empire</div>
          <p>Une marque de lifestyle africaine qui célèbre la beauté, la créativité et l'hospitalité.</p>
          <div class="footer-socials"><a href="https://www.facebook.com/profile.php?id=61586875303123"
              class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i
                class="ti ti-brand-facebook"></i></a><a href="https://www.instagram.com/africanqueenempire1/"
              class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i
                class="ti ti-brand-instagram"></i></a><a
              href="https://www.tiktok.com/@africanqueenempire?_r=1&amp;_t=ZM-91zcYTQsv5X&amp;fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnIXvDgFunqvECkfp84ajEpfC24c6m3VC8wp2kkil23cmI1JZsRfo4XuovMJY_aem_m_NbdTqgu6Eh9gLqoYqH4g"
              class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i
                class="ti ti-brand-tiktok"></i></a><a
              href="https://www.threads.com/@africanqueenempire1?xmt=AQG0RdDXgb2WW82eY8gIYhg-riUjku5CD4bEd4MSJA8b_KA"
              class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Threads"><i
                class="ti ti-brand-threads"></i></a></div>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <RouterLink to="/home">Accueil</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/shop">Shop</RouterLink>
          <RouterLink to="/menu">Menu</RouterLink>
        </div>
        <!--div class="footer-col">
        <h4>Services</h4><RouterLink to ="/services">Handmade Creativity</RouterLink><RouterLink to ="/services">Interior
          Decoration</RouterLink><RouterLink to ="/services">Coffee Lifestyle</RouterLink><RouterLink to ="/services">Fashion
          Products</RouterLink><RouterLink to ="/services">Natural Hair Elegance</RouterLink>
          </div-->
        <div class="footer-col">
          <h4>Contacts</h4>
          <div class="footer-contact-item"><i class="ti ti-map-pin"></i><span>Bujumbura, Burundi</span></div>
          <div class="footer-contact-item"><i class="ti ti-phone"></i><span><br>+257 61 205 463<br>+257 68 634
              836<br>+257
              61 258 758</span></div>
          <div class="footer-contact-item"><i class="ti ti-mail"></i><span>africanqueenempirebuja@gmail.com</span></div>
        </div>
      </div>
      <div class="footer-bottom"><span>© 2025 AFRICAN QUEEN EMPIRE · TOUS DROITS RÉSERVÉS</span></div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobileOpen = ref(false)
const menu = ref(null)
const menuError = ref(false)

onMounted(async () => {
  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}data/menu.json`
    )

    if (!response.ok) {
      throw new Error('Impossible de charger menu.json')
    }

    menu.value = await response.json()
  } catch (error) {
    console.error('Erreur lors du chargement du menu :', error)
    menuError.value = true
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

.body {
  background: #a46746f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif
}

.header-bar {
  position: absolute;
  top: 0;
  inset: 0 60px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding: 10px 0
}

.logo img {
  width: 150px;
  height: 130px;
  display: block
}

.main-nav-container a {
  color: #000;
  text-decoration: none;
  margin-left: 35px;
  font-size: .85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: .75;
  transition: opacity .25s, color .25s
}

.main-nav-container a.active,
.main-nav-container a:hover {
  color: #ffea00;
  opacity: 1
}

.m-hero {
  position: relative;
  padding: 80px 6vw 0;
  text-align: center;
  background: #ebcdb6a8;
  border-bottom: 1px solid rgba(212, 160, 74, .15)
}

.m-hero .eyebrow {
  color: #d4a04a;
  font-size: .75rem;
  letter-spacing: 5px;
  text-transform: uppercase
}

.m-hero h1 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 3.6rem;
  color: #000
}

.m-hero p {
  color: #c9bfa8;
  max-width: 480px;
  margin: 14px auto 0;
  line-height: 1.8;
  font-size: .95rem
}

.cardcinq,
.carddeux,
.cardquatre,
.cardtrois,
.cardun {
  width: calc(50vw - 60px);
  height: calc(100vh - 60px);
  background: #fafafa;
  margin: 30px;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden
}

.image1,
.image2,
.image3,
.image4,
.image5,
.image6,
.image7,
.image8,
.image9,
.image10 {
  position: absolute;
}

.image1,
.image4,
.image5,
.image6,
.image7,
.image8,
.image9,
.image10 {
  filter: drop-shadow(10px 10px 10px #515050)
}

.image1 {
  width: 210px;
  height: 210px;
  top: -80px;
  left: -80px;
  z-index: 1
}

.image2 {
  filter: drop-shadow(-10px -10px 10px #515050);
  width: 220px;
  height: 220px;
  bottom: -80px;
  left: 340px;
  z-index: 1
}

.image3 {
  filter: drop-shadow(-10px -10px 10px #515050);
  width: 200px;
  height: 200px;
  bottom: -40px;
  left: 20px;
}

.image4 {
  top: -30px;
  right: -35px;
  width: 200px;
  height: 200px
}

.image5 {
  bottom: -10px;
  left: -30px;
  height: 170px;
  width: 170px
}

.image6 {
  top: -80px;
  right: -30px;
  height: 250px;
  width: 180px
}

.image7 {
  top: -50px;
  left: -20px;
  height: 210px;
  width: 180px;
}

.image8 {
  bottom: -50px;
  right: -20px;
  height: 180px;
  width: 180px
}

.image9 {
  bottom: -80px;
  left: -20px;
  height: 190px;
  width: 180px
}

.image10 {
  top: -40px;
  right: -20px;
  height: 200px;
  width: 200px
}

.menucinq,
.menuone,
.menuquatre,
.menuthree,
.menutoo {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  margin: 20px;
  background: #ebcdb6;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  padding: 20px;
  position: relative
}

.neuf .deuxdeux,
.quatre .deuxdeux {
  width: 100%;
  height: max-content;
  background: #e5d3c5;
  border: #333 solid 1px;
  display: flex;
  flex-direction: column
}

.sept .deuxdeux {
  margin-top: 140px;
  width: 100%;
  height: max-content;
  background: #e5d3c5;
  border: #333 solid 1px;
  display: flex;
  flex-direction: column
}

.deuxdeux .menu-item {
  padding: 3px;
  justify-content: space-between
}

h1 {
  color: #392f29;
  font-size: 20px;
  margin-top: 0;
  text-transform: uppercase
}

.line1 {
  width: 100%;
  height: 1px;
  background-color: #816c61;
  margin-bottom: 5px
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #333
}

.menu-item .nom {
  display: flex;
  align-items: center;
  gap: 6px
}

.point {
  width: 5px;
  height: 5px;
  background-color: #87614f;
  border-radius: 50%;
  flex-shrink: 0
}

.prix {
  font-weight: 700;
  color: #87614f;
  white-space: nowrap;
  margin-left: 10px
}

.description {
  font-size: 12px;
  color: #666;
  font-style: italic;
  margin-bottom: 10px;
  padding-left: 11px
}

.deux,
.un {
  width: 50%;
  padding: 10px
}

.un {
  padding-top: 140px
}

.deux {
  margin-left: 40px;
  padding-top: 0
}

.trois {
  width: max-content;
  padding-top: 0
}

.quatre {
  height: max-content;
  width: 50%;
  margin-top: 120px;
  margin-left: 40px;
  display: flex;
  flex-direction: column
}

.cinq {
  height: max-content;
  width: 50%;
  display: flex;
  flex-direction: column
}

.six {
  height: max-content;
  padding-top: 110px;
  width: 50%;
  display: flex;
  margin-left: 40px;
  flex-direction: column
}

.sept {
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column
}

.huit {
  height: max-content;
  width: 100%;
  margin-left: 40px;
  display: flex;
  flex-direction: column
}

.neuf {
  height: max-content;
  width: 50%;
  display: flex;
  flex-direction: column
}

.dix {
  height: max-content;
  width: 50%;
  margin-left: 40px;
  margin-top: 100px;
  display: flex;
  flex-direction: column
}

.titre {
  background-color: #141313;
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center
}

.titre h1 {
  color: #c9c1c1;
  padding: 5px
}

.three,
.premier,
.second {
  width: 100vw;
  height: max-content;
  display: flex;
  flex-direction: row;
}

.footer {
  background-color: #111;
  color: #fff;
  padding: 80px 0 30px;
  font-family: 'Poppins', sans-serif;
  margin-top: 80px;
  border-top: 1px solid rgba(212, 175, 55, .2)
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px
}

.footer-brand .footer-logo {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  letter-spacing: 2px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 700
}

.footer-brand .footer-logo span {
  display: block;
  font-size: 12px;
  letter-spacing: 6px;
  color: #d4af37;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin-top: 5px
}

.footer-desc {
  color: #a0a0a0;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 30px;
  max-width: 400px
}

.footer-socials {
  display: flex;
  gap: 15px
}

.footer-socials .social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  transition: all .3s ease;
  border: 1px solid rgba(212, 175, 55, .1)
}

.footer-socials .social-link:hover {
  background: #d4af37;
  color: #111;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, .3)
}

.footer-links-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px
}

.footer-links-col h3 {
  font-family: 'Playfair Display', serif;
  color: #fff;
  font-size: 18px;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
  font-weight: 600
}

.footer-links-col h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 1px;
  background-color: #d4af37
}

.footer-links-col ul {
  list-style: none;
  padding: 0;
  margin: 0
}

.footer-links-col ul li {
  margin-bottom: 15px
}

.footer-links-col ul li a {
  color: #a0a0a0;
  text-decoration: none;
  font-size: 14px;
  transition: color .3s ease;
  display: inline-block
}

.footer-links-col ul li a.active,
.footer-links-col ul li a:hover {
  color: #d4af37;
  padding-left: 5px
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 30px 0;
  border-top: 1px solid rgba(255, 255, 255, .05);
  text-align: center
}

.footer-bottom p {
  color: #666;
  font-size: 13px;
  letter-spacing: 1px
}

.site-footer {
  width: 100%;
  background: #ebcdb6a8;
  padding: 60px 6vw 0
}

.footer-top {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 50px;
  border-bottom: 1px solid #111
}

.footer-brand-logo {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.6rem;
  color: #d4a04a;
  margin-bottom: 14px
}

.footer-brand p {
  font-size: .8rem;
  color: #000;
  line-height: 1.8;
  max-width: 240px;
  margin-bottom: 20px
}

.footer-socials {
  display: flex;
  gap: 10px
}

.footer-social {
  width: 34px;
  height: 34px;
  border: 1px solid #1e1e1e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 1rem;
  transition: border-color .2s, color .2s;
  text-decoration: none
}

.footer-social:hover {
  border-color: #d4a04a;
  color: #d4a04a
}

.footer-col h4 {
  font-size: .65rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 16px;
  font-weight: 500
}

.footer-col a {
  display: block;
  font-size: .8rem;
  color: #000;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color .2s
}

.footer-col a:hover {
  color: #d4a04a
}

.footer-newsletter-input {
  display: flex;
  gap: 8px;
  margin-top: 8px
}

.footer-newsletter-input input {
  flex: 1;
  background: #0f0e12;
  border: 1px solid #1e1a14;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: .75rem;
  color: #fff;
  outline: 0;
  font-family: 'Poppins', sans-serif
}

.footer-newsletter-input input::placeholder {
  color: #333
}

.footer-newsletter-input input:focus {
  border-color: #d4a04a
}

.footer-newsletter-input button {
  background: #d4a04a;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: .7rem;
  color: #000;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Poppins', sans-serif
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #0d0d0d
}

.footer-bottom span {
  font-size: .7rem;
  color: #333;
  letter-spacing: 1px
}

.footer-bottom-links {
  display: flex;
  gap: 20px
}

.footer-bottom-links a {
  font-size: .7rem;
  color: #000;
  text-decoration: none;
  transition: color .2s
}

.footer-bottom-links a:hover {
  color: #d4a04a
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2px;
  color: #000;
  font-size: .82rem;
  line-height: 1.6
}

.footer-contact-item i {
  color: #605f11;
  font-size: 20px;
  min-width: 20px;
}

.footer-contact-item span {
  transition: .3s;
}

.footer-contact-item:hover span {
  color: #d4a04a;
}

.hamburger span {
  display: flex;
  flex-direction: column;
  width: 24px;
  height: 2px;
  background: #000;
  transition: all .3s;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.main-nav-container {
  display: flex;
  align-items: center;
  gap: 35px;
  flex-shrink: 0;
}

.main-nav-container a {
  text-decoration: none;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.25s ease;
}

.main-nav-container a:hover {
  color: #d4af37;
}

.hamburger {
  display: none;
}

@media (max-width: 1100px) {
  .image2 {
    width: 25vw;
    height: auto;
    bottom: -8vw;
    left: 70vw;
  }

  .premier,
  .second,
  .three {
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;

  }

  .logo img {
    width: 15vw;
    height: auto;
  }

  .header-bar {
    display: flex;
    flex-direction: row;
  }

  .main-nav-container {
    display: none;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 42px;
    height: 42px;
    padding: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 1000;
  }

  .hamburger span {
    display: flex;
    flex-direction: column;
    width: 26px;
    height: 3px;
    background: #a46746f4;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 2000;
    display: flex;
    justify-content: flex-end;
  }

  .mobile-drawer {
    width: 60vw;
    max-width: 85vw;
    height: max-content;
    background: #ffffff;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .drawer-close {
    align-self: flex-end;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    font-size: 28px;
    color: #333;
    cursor: pointer;
    line-height: 1;
  }

  .drawer-logo {
    display: flex;
    justify-content: center;
    margin: 20px 0 35px;
  }

  .drawer-logo img {
    width: 150px;
    height: auto;
    object-fit: contain;
  }

  .drawer-links {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .drawer-link {
    display: block;
    width: 100%;
    padding: 16px 5px;
    text-decoration: none;
    color: #333;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 500;
    border-bottom: 1px solid #eeeeee;
    transition:
      color 0.25s ease,
      padding-left 0.25s ease;
  }

  .drawer-link:hover {
    color: #b08d20;
    padding-left: 12px;
  }

  .drawer-link.router-link-active {
    color: #b08d20;
    font-weight: 600;
  }

  .drawer-enter-active,
  .drawer-leave-active {
    transition: opacity 0.25s ease;
  }

  .drawer-enter-from,
  .drawer-leave-to {
    opacity: 0;
  }

  .drawer-enter-active .mobile-drawer,
  .drawer-leave-active .mobile-drawer {
    transition: transform 0.3s ease;
  }

  .drawer-enter-from .mobile-drawer {
    transform: translateX(100%);
  }

  .drawer-leave-to .mobile-drawer {
    transform: translateX(100%);
  }
}

@media (max-width:850px) {

  .hamburger {
    display: flex;
  }

  .logo img {
    width: 18vw;
    height: auto;
  }

  .image3 {
    width: 29vw;
    height: auto;
    bottom: -9vw;
  }

  .image4 {
    width: 27vw;
    height: auto;
    top: -10vw;
  }

  .image5 {
    width: 30vw;
    height: auto;
    bottom: -11vw;
  }

  .image6 {
    top: -19vw;
    width: 30vw;
    height: 42vw;
  }

  .image7 {
    width: 28vw;
    height: auto;
    top: -14vw;
  }

  .image8 {
    width: 34vw;
    height: auto;
    bottom: -15vw
  }

  .image9 {
    width: 22vw;
    height: auto;
    bottom: -17vw;
    left: -5vw;
  }

  .image10 {
    width: 25vw;
    height: auto;
    top: -13vw;
    right: -20px;
  }

  .head {
    width: 100vw;
    height: max-content;
  }

  .main-nav-container {
    position: absolute;
    top: 90px;
    right: 20px;
    width: 30vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    background: #a46746f4;
    border-radius: 18px;
    padding: 20px;
    gap: 18px;
    transform: scale(.9);
    opacity: 0;
    visibility: hidden;
    transition: .35s;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .6);

  }

  .main-nav-container {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  .main-nav-container a {
    text-decoration: none;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 500;
    transition: color 0.25s ease;
  }

  .main-nav-container a:hover {
    color: #d4af37;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 42px;
    height: 42px;
    padding: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 1000;
  }

  .hamburger span {
    display: block;
    width: 26px;
    height: 3px;
    background: #a46746f4;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 2000;
    display: flex;
    justify-content: flex-end;
  }

  .mobile-drawer {
    width: 60vw;
    max-width: 85vw;
    height: max-content;
    background: #ffffff;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .drawer-close {
    align-self: flex-end;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    font-size: 28px;
    color: #333;
    cursor: pointer;
    line-height: 1;
  }

  .drawer-logo {
    display: flex;
    justify-content: center;
    margin: 20px 0 35px;
  }

  .drawer-logo img {
    width: 150px;
    height: auto;
    object-fit: contain;
  }

  .drawer-links {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .drawer-link {
    display: block;
    width: 100%;
    padding: 16px 5px;
    text-decoration: none;
    color: #333;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 500;
    border-bottom: 1px solid #eeeeee;
    transition:
      color 0.25s ease,
      padding-left 0.25s ease;
  }

  .drawer-link:hover {
    color: #b08d20;
    padding-left: 12px;
  }

  .drawer-link.router-link-active {
    color: #b08d20;
    font-weight: 600;
  }

  .drawer-enter-active,
  .drawer-leave-active {
    transition: opacity 0.25s ease;
  }

  .drawer-enter-from,
  .drawer-leave-to {
    opacity: 0;
  }

  .drawer-enter-active .mobile-drawer,
  .drawer-leave-active .mobile-drawer {
    transition: transform 0.3s ease;
  }

  .drawer-enter-from .mobile-drawer {
    transform: translateX(100%);
  }

  .drawer-leave-to .mobile-drawer {
    transform: translateX(100%);
  }
}

@media (max-width: 900px) {

  .header-bar {
    display: flex;
    flex-direction: row;
  }

  .main-nav-container {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}

.main-nav-container a {
  margin: 0;
  width: 100%;
  height: 6vw;
  text-align: left;
}

.footer-top {
  display: flex;
  flex-direction: column;
}

.site-footer {
  padding-right: 0vw;
  width: 100vw;
}

.cardtrois,
.cardquatre,
.cardcinq,
.carddeux,
.cardun {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 3vw;
  width: 94vw;
  height: max-content;

}



.un {
  padding-top: 110px;
  box-sizing: border-box;
}

.deux {
  height: max-content;
  box-sizing: border-box;
}



@media(max-width:500px) {

  .image1 {
    width: 50vw;
    height: auto;
    top: -20vw;
    left: -20vw;
  }

  .deuxdeux {
    width: 100%;
    height: max-content;
    background: #e5d3c5;
    border: #333 solid 1px;
    display: flex;
    flex-direction: column
  }

  .image2 {
    width: 40vw;
    height: auto;
    bottom: -14vw;
    left: 50vw;
  }

  .image3 {
    width: 39vw;
    height: auto;
    bottom: -10vw;
  }

  .image5,
  .image4 {
    width: 39vw;
    height: auto;
  }

  .image5 {
    bottom: -10vw;
  }

  .image6 {
    top: -19vw;
    width: 39vw;
    height: 55vw;
  }

  .image7 {
    width: 38vw;
    height: 43vw;
  }

  .image8 {
    width: 34vw;
    height: auto;
    bottom: -15vw
  }

  .image9 {
    width: 34vw;
    height: auto;
  }

  .image10 {
    width: 34vw;
    height: auto;
    top: -13vw;
    right: -20px;
  }

  .menucinq,
  .menuquatre,
  .menuthree,
  .menutoo,
  .menuone {
    gap: 1vw;
    padding-left: 2vw;
  }

  .menu-item .nom {
    display: flex;
    align-items: center;
    gap: 0.5vw,
  }

  .prix {
    margin-left: 0px;
  }

  .trois,
  .un {
    padding-right: 0vw;
    padding-left: 0vw;
  }

  .dix,
  .huit,
  .six {
    margin-left: 2vw
  }

  .quatre,
  .deux {
    margin-left: 1vw;
  }
}

@media(max-width:300px) {
  .menu-item {
    display: flex;
    flex-direction: column;
  }
}
</style>
