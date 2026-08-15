<template>
  <div class="body">
    <section class="front-page">
      <div class="bg-slider" id="bgSlider"></div>
      <div class="front-page-overlay"></div>
      <div class="content-box">
        <div class="header-bar">
          <div class="logo"><img :src="imgUrl('aqelogo.png')" alt="Logo"></div>
          <nav class="main-nav-container">
            <RouterLink to="/services">Services</RouterLink>
            <RouterLink to="/menu">Menu</RouterLink>
            <RouterLink to="/shop">Shop</RouterLink>
          </nav>
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
        <div class="inner-slider" id="innerSlider"></div>
        <div class="content right animate-right" id="animatedContent">
          <h1 id="sliderTitle"></h1>
          <p id="sliderText"></p>
          <div class="hero-cta-wrap">
            <RouterLink to="/services" class="cta-btn cta-btn--gold">Explore Our Services <i
                class="ti ti-arrow-right"></i></RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="content-box about-card-unrolled">
        <div class="about-block-wrap white-version">
          <!--div class="about-hero-content-split">
          <div class="about-hero-text-side">
            <h2 class="about-title-h2">About Us</h2>
            <div class="about-hero-desc">
              <p>African Queen Empire is a lifestyle brand where culture, beauty, and creativity converge — bringing the
                warmth and elegance of Africa into fashion, décor, hospitality, and beyond.</p>
            </div>
            <div class="about-cta-wrap"><a href="https://africanqueenempire.com/about"
                class="cta-btn cta-btn--outline">Learn More About Us <i class="ti ti-arrow-right"></i></a></div>
          </div>
          <div class="about-hero-cards-side">
            <div class="cards-deck">
              <img class="card-item card-1"
                src="https://images.pexels.com/photos/20164064/pexels-photo-20164064.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="craft">
              <img class="card-item card-2"
                src="https://images.pexels.com/photos/20167932/pexels-photo-20167932.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="fashion">
              <img class="card-item card-3"
                src="https://images.pexels.com/photos/6775667/pexels-photo-6775667.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="decor">
            </div>
          </div>
        </div-->
          <div class="mv-section">
            <div class="mv-card mv-card--mission">
              <div class="mv-card-bg"
                style="background-image:url('https://images.pexels.com/photos/20167932/pexels-photo-20167932.jpeg?auto=compress&cs=tinysrgb&w=1200')">
              </div>
              <div class="mv-card-overlay"></div>
              <div class="mv-card-body">
                <div class="mv-card-icon"><i class="ti ti-heart"></i></div><span class="eyebrow">Our Purpose</span>
                <h2 class="about-title-h2">Our Mission</h2>
                <div class="about-deco-line"></div>
                <blockquote>"Enriching everyday life through quality products and services that celebrate African
                  beauty,
                  creativity, and hospitality."</blockquote>
              </div>
            </div>
            <div class="mv-card mv-card--vision">
              <div class="mv-card-bg"
                style="background-image:url('https://images.pexels.com/photos/6775667/pexels-photo-6775667.jpeg?auto=compress&cs=tinysrgb&w=1200')">
              </div>
              <div class="mv-card-overlay"></div>
              <div class="mv-card-body">
                <div class="mv-card-icon"><i class="ti ti-eye"></i></div><span class="eyebrow">Where We're Headed</span>
                <h2 class="about-title-h2">Our Vision</h2>
                <div class="about-deco-line"></div>
                <p>To be a leading African lifestyle brand recognized worldwide for excellence — empowering communities
                  and showcasing the elegance of African culture to the world.</p>
              </div>
            </div>
          </div>
          <div class="about-values-strip">
            <div class="about-val-item"><i class="ti ti-star"></i><span>Excellence</span></div>
            <div class="about-val-item"><i class="ti ti-heart"></i><span>Passion</span></div>
            <div class="about-val-item"><i class="ti ti-crown"></i><span>Heritage</span></div>
            <div class="about-val-item"><i class="ti ti-globe"></i><span>Impact</span></div>
            <div class="about-val-item"><i class="ti ti-sparkles"></i><span>Creativity</span></div>
          </div>
        </div>
      </div>
    </section>
    <section class="services-page">
      <div class="content-box services-unrolled-card" id="svcCard">
        <div class="svc-bg-layer visible" id="svcBgA"></div>
        <div class="svc-bg-layer" id="svcBgB"></div>
        <div class="svc-bg-overlay"></div>
        <div class="services-header-inside"><span>What We Create</span>
          <h2>Our Services</h2>
        </div>
        <div class="services-cta-wrap">
          <RouterLink to="/services" class="cta-btn cta-btn--gold">View All Services <i class="ti ti-arrow-right"></i>
          </RouterLink>
        </div>
        <div class="svc-timeline" id="svcTimeline">
          <div class="svc-item active" data-idx="0">
            <div class="svc-dot-wrap">
              <div class="svc-dot"></div>
            </div>
            <div class="svc-body">
              <div class="svc-img-wrap"><img :src="imgUrl('HC1.jpg')" alt="Craft">
                <div class="svc-img-overlay"></div>
              </div>
              <div class="svc-text"><span class="svc-num">01</span><span class="svc-eyebrow">Artisanat · African
                  Craft</span>
                <h3 class="svc-title">Handmade Creativity</h3>
                <div class="svc-deco"></div>
                <p class="svc-desc">Authentic African handmade creations crafted with passion, precision, and cultural
                  identity.</p>
                <RouterLink to="/services" class="svc-link">Discover <i class="ti ti-arrow-right"></i></RouterLink>
              </div>
              <div class="svc-peek">
                <div class="svc-peek-num">02 ·</div>
                <div class="svc-peek-title">Interior Decoration</div>
              </div>
            </div>
          </div>
          <div class="svc-item" data-idx="1">
            <div class="svc-dot-wrap">
              <div class="svc-dot"></div>
            </div>
            <div class="svc-body">
              <div class="svc-img-wrap"><img :src="imgUrl('ID13.jpg')" alt="Decor">
                <div class="svc-img-overlay"></div>
              </div>
              <div class="svc-text"><span class="svc-num">02</span><span class="svc-eyebrow">Décoration · Interior
                  Design</span>
                <h3 class="svc-title">Interior Decoration</h3>
                <div class="svc-deco"></div>
                <p class="svc-desc">Elegant interiors inspired by African warmth, luxury, textures, and natural
                  aesthetics.</p>
                <RouterLink to="/services" class="svc-link">Discover <i class="ti ti-arrow-right"></i></RouterLink>
              </div>
              <div class="svc-peek">
                <div class="svc-peek-num">03 ·</div>
                <div class="svc-peek-title">Café Lifestyle</div>
              </div>
            </div>
          </div>
          <div class="svc-item" data-idx="2">
            <div class="svc-dot-wrap">
              <div class="svc-dot"></div>
            </div>
            <div class="svc-body">
              <div class="svc-img-wrap"><img
                  src="https://images.pexels.com/photos/162886/coffee-glass-beverage-coffee-mug-162886.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Cafe">
                <div class="svc-img-overlay"></div>
              </div>
              <div class="svc-text"><span class="svc-num">03</span><span class="svc-eyebrow">Lifestyle · Coffee
                  Culture</span>
                <h3 class="svc-title">Café Lifestyle</h3>
                <div class="svc-deco"></div>
                <p class="svc-desc">Immersive coffee experiences blending African hospitality, atmosphere, and premium
                  taste.</p>
                <RouterLink to="/menu" class="svc-link">Here is the menu <i></i></RouterLink>
              </div>
              <div class="svc-peek">
                <div class="svc-peek-num">04 ·</div>
                <div class="svc-peek-title">Fashion Products</div>
              </div>
            </div>
          </div>
          <div class="svc-item" data-idx="3">
            <div class="svc-dot-wrap">
              <div class="svc-dot"></div>
            </div>
            <div class="svc-body">
              <div class="svc-img-wrap"><img :src="imgUrl('FP5.jpg')" alt="Fashion">
                <div class="svc-img-overlay"></div>
              </div>
              <div class="svc-text"><span class="svc-num">04</span><span class="svc-eyebrow">Mode · African
                  Fashion</span>
                <h3 class="svc-title">Fashion Products</h3>
                <div class="svc-deco"></div>
                <p class="svc-desc">Premium African fashion products designed with bold identity and contemporary
                  luxury.
                </p>
                <RouterLink class="svc-link">Discover <i class="ti ti-arrow-right"></i></RouterLink>
              </div>
              <div class="svc-peek">
                <div class="svc-peek-num">05 ·</div>
                <div class="svc-peek-title">Natural Hair Elegance</div>
              </div>
            </div>
          </div>
          <div class="svc-item" data-idx="4">
            <div class="svc-dot-wrap">
              <div class="svc-dot"></div>
            </div>
            <div class="svc-body">
              <div class="svc-img-wrap"><img :src="imgUrl('NH1.jpg')" alt="Hair">
                <div class="svc-img-overlay"></div>
              </div>
              <div class="svc-text"><span class="svc-num">05</span><span class="svc-eyebrow">Beauté · Hair Care</span>
                <h3 class="svc-title">Natural Hair Elegance</h3>
                <div class="svc-deco"></div>
                <p class="svc-desc">Celebrating the beauty and power of natural African hair — premium care products.
                </p>
                <RouterLink to="/services" class="svc-link">Discover <i class="ti ti-arrow-right"></i></RouterLink>
              </div>
              <div class="svc-peek"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="shop-section">
      <div class="content-box shop-card">
        <div class="shop-header"><span class="eyebrow">Collection Exclusive</span>
          <h2>Notre Shop</h2>
        </div>
        <div class="shop-scroll-wrap">
          <div class="shop-scroll">
            <div class="shop-prod">
              <div class="shop-prod-img"><img
                  src="https://images.pexels.com/photos/20167932/pexels-photo-20167932.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Robe">
                <div class="shop-badge">NEW</div>
              </div>
              <div class="shop-prod-info">
                <div class="shop-prod-cat">Mode</div>
                <div class="shop-prod-name">Robe Kente</div>
                <div class="shop-prod-desc">Tissu traditionnel ghanéen aux motifs vibrants.</div>
                <div class="shop-prod-row"><button class="shop-add-btn"><i class="ti ti-shopping-cart"></i>
                    Ajouter</button></div>
              </div>
            </div>
            <div class="shop-prod">
              <div class="shop-prod-img"><img
                  src="https://images.pexels.com/photos/6775667/pexels-photo-6775667.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Vase"></div>
              <div class="shop-prod-info">
                <div class="shop-prod-cat">Décoration</div>
                <div class="shop-prod-name">Vase Artisanal</div>
                <div class="shop-prod-desc">Céramique faite main, inspirée d'Afrique de l'Ouest.</div>
                <div class="shop-prod-row"><button class="shop-add-btn"><i class="ti ti-shopping-cart"></i>
                    Ajouter</button></div>
              </div>
            </div>
            <div class="shop-prod">
              <div class="shop-prod-img"><img
                  src="https://images.pexels.com/photos/162886/coffee-glass-beverage-coffee-mug-162886.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Café">
                <div class="shop-badge">TOP</div>
              </div>
              <div class="shop-prod-info">
                <div class="shop-prod-cat">Café</div>
                <div class="shop-prod-name">Blend Premium</div>
                <div class="shop-prod-desc">Mélange signature de grains africains torréfiés.</div>
                <div class="shop-prod-row"><button class="shop-add-btn"><i class="ti ti-shopping-cart"></i>
                    Ajouter</button></div>
              </div>
            </div>
            <div class="shop-prod">
              <div class="shop-prod-img"><img
                  src="https://images.pexels.com/photos/20164064/pexels-photo-20164064.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Echarpe"></div>
              <div class="shop-prod-info">
                <div class="shop-prod-cat">Mode</div>
                <div class="shop-prod-name">Écharpe Bogolan</div>
                <div class="shop-prod-desc">Tissu bogolan teint à la boue, pièce unique.</div>
                <div class="shop-prod-row"><button class="shop-add-btn"><i class="ti ti-shopping-cart"></i>
                    Ajouter</button></div>
              </div>
            </div>
            <div class="shop-prod">
              <div class="shop-prod-img"><img
                  src="https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Soin">
                <div class="shop-badge">NEW</div>
              </div>
              <div class="shop-prod-info">
                <div class="shop-prod-cat">Hair Care</div>
                <div class="shop-prod-name">Natural Hair Kit</div>
                <div class="shop-prod-desc">Kit complet pour cheveux naturels aux plantes.</div>
                <div class="shop-prod-row"><button class="shop-add-btn"><i class="ti ti-shopping-cart"></i>
                    Ajouter</button></div>
              </div>
            </div>
            <div class="shop-prod">
              <div class="shop-prod-img"><img
                  src="https://images.pexels.com/photos/6775667/pexels-photo-6775667.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coussin"></div>
              <div class="shop-prod-info">
                <div class="shop-prod-cat">Décoration</div>
                <div class="shop-prod-name">Coussin Wax</div>
                <div class="shop-prod-desc">Tissu wax imprimé, 45×45 cm, intérieur duveteux.</div>
                <div class="shop-prod-row"><button class="shop-add-btn"><i class="ti ti-shopping-cart"></i>
                    Ajouter</button></div>
              </div>
            </div>
          </div>
        </div>
        <div class="shop-cta">
          <RouterLink to="/shop">Voir toute la boutique →</RouterLink>
        </div>
      </div>
    </section>
    <section class="map-section">
      <div class="map-card">
        <div class="map-header">
          <h2>Notre Adresse</h2>
          <p><strong>African Queen Empire</strong><br>Bujumbura, Avenue Muyinga N°15</p>
        </div>
        <iframe class="map-frame"
          src="https://maps.google.com/maps?q=Avenue%20Muyinga%2015%20Bujumbura&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy" allowfullscreen>
        </iframe>
      </div>
    </section>
    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-brand-logo">African Queen Empire</div>
          <p>Une marque de lifestyle africaine qui célèbre la beauté, la créativité et l'hospitalité.</p>
          <div class="footer-socials">

            <a href="https://www.facebook.com/profile.php?id=61586875303123" class="footer-social" target="_blank"
              rel="noopener noreferrer" aria-label="Facebook">
              <i class="ti ti-brand-facebook"></i>
            </a>
            <a href="https://www.instagram.com/africanqueenempire1/" class="footer-social" target="_blank"
              rel="noopener noreferrer" aria-label="Instagram">
              <i class="ti ti-brand-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@africanqueenempire?_r=1&_t=ZM-91zcYTQsv5X&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnIXvDgFunqvECkfp84ajEpfC24c6m3VC8wp2kkil23cmI1JZsRfo4XuovMJY_aem_m_NbdTqgu6Eh9gLqoYqH4g"
              class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i class="ti ti-brand-tiktok"></i>
            </a>
            <a href="https://www.threads.com/@africanqueenempire1?xmt=AQG0RdDXgb2WW82eY8gIYhg-riUjku5CD4bEd4MSJA8b_KA"
              class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <i class="ti ti-brand-threads"></i>
            </a>

          </div>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/shop">Shop</RouterLink>
          <RouterLink to="/menu">Menu</RouterLink>
        </div>
        <!--div class="footer-col">
        <h4>
          Services</h4><RouterLink to="/services">Handmade Creativity</RouterLink><RouterLink to="/services">Interior
          Decoration</RouterLink><RouterLink to="/services">Coffee
          Lifestyle</RouterLink><RouterLink to="/services">Fashion Products</RouterLink><RouterLink to="/services">Natural Hair
          Elegance</RouterLink>
      </div-->
        <div class="footer-col">
          <div class="footer-col">
            <h4>Contacts</h4>
            <div class="footer-contact-item">
              <i class="ti ti-map-pin"></i>
              <span>Bujumbura, Burundi</span>
            </div>
            <div class="footer-contact-item">
              <i class="ti ti-phone"></i>
              <span>
                <br>+257 61 205 463
                <br>+257 68 634 836
                <br>+257 61 258 758
              </span>
            </div>
            <div class="footer-contact-item">
              <i class="ti ti-mail"></i>
              <span>africanqueenempirebuja@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 AFRICAN QUEEN EMPIRE · TOUS DROITS RÉSERVÉS</span>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref } from 'vue'

const mobileOpen = ref(false)
const imgUrl = (name) => `${import.meta.env.BASE_URL}images/${name}`;

onMounted(() => {
  const slides = [
    { image: imgUrl("HC1.jpg"), title: "Handmade Creativity", text: "Unique African crafts made with passion and precision." },
    { image: imgUrl("ID13.jpg"), title: "Interior Decoration", text: "Bring warmth and African elegance into your living spaces." },
    { image: "https://images.pexels.com/photos/162886/coffee-glass-beverage-coffee-mug-162886.jpeg?auto=compress&cs=tinysrgb&w=1600", title: "Coffee Lifestyle", text: "Relax and enjoy an authentic cultural coffee experience." },
    { image: imgUrl("FP5.jpg"), title: "Fashion Products", text: "Bold designs and premium African textiles just for you." },
    { image: imgUrl("NH1.jpg"), title: "Natural Hair Elegance", text: "Celebrate the beauty of your natural African hair." }
  ];
  const bgSlider = document.getElementById("bgSlider"), innerSlider = document.getElementById("innerSlider"), sliderTitle = document.getElementById("sliderTitle"), sliderText = document.getElementById("sliderText"), ac = document.getElementById("animatedContent");
  let heroIdx = 0, bgS = [], inS = [], useA = true;
  const animCfg = [["right", "animate-right"], ["left", "animate-left"], ["right", "animate-bottom-right"], ["left", "animate-bottom-left"], ["right", "animate-right"]];

  const mkSlide = (parent, cls, img, active) => {
    const d = document.createElement("div"); d.className = cls + (active ? " active" : ""); d.style.backgroundImage = `url('${img}')`; return parent.appendChild(d);
  };
  const heroInit = () => {
    slides.forEach((s, i) => { bgS.push(mkSlide(bgSlider, "bg-slide", s.image, !i)); inS.push(mkSlide(innerSlider, "inner-slide", s.image, !i)); });
    sliderTitle.textContent = slides[0].title; sliderText.textContent = slides[0].text;
  };
  const heroNext = () => {
    [bgS[heroIdx], inS[heroIdx]].forEach(e => e.classList.remove("active"));
    heroIdx = (heroIdx + 1) % slides.length;
    [bgS[heroIdx], inS[heroIdx]].forEach(e => e.classList.add("active"));
    sliderTitle.textContent = slides[heroIdx].title; sliderText.textContent = slides[heroIdx].text; ac.className = "content";
    void ac.offsetWidth; ac.classList.add(...(animCfg[heroIdx] || animCfg[0]));
  };

  // Preload & Init Slider
  let done = 0; slides.forEach(s => { const img = new Image(); img.src = s.image; img.onload = img.onerror = () => { if (++done === slides.length) { heroInit(); setInterval(heroNext, 4200); } }; });

  // Timeline Services
  const items = Array.from(document.querySelectorAll('.svc-item')), bgA = document.getElementById('svcBgA'), bgB = document.getElementById('svcBgB');
  const yOffsets = [0, 7, 16, 28, 42], opacities = [1, 0.60, 0.42, 0.28, 0.16];

  const swapBg = (imgSrc) => {
    const [next, prev] = useA ? [bgB, bgA] : [bgA, bgB]; next.style.backgroundImage = `url('${imgSrc}')`;
    requestAnimationFrame(() => { next.classList.add('visible'); prev.classList.remove('visible'); }); useA = !useA;
  };
  const activate = (idx) => {
    items.forEach((el, i) => {
      el.classList.remove('active', 'prev-1'); const dist = i - idx, absDist = Math.abs(dist);
      if (!dist) { el.classList.add('active'); el.style.transform = 'translateY(0)'; el.style.opacity = '1'; const img = el.querySelector('.svc-img-wrap img'); if (img) swapBg(img.src); }
      else if (dist === -1) { el.classList.add('prev-1'); el.style.transform = 'translateY(-5px)'; el.style.opacity = '0.52'; }
      else { const d = Math.min(absDist, yOffsets.length - 1); el.style.transform = `translateY(${yOffsets[d]}px)`; el.style.opacity = String(opacities[d]); }
    });
  };
  items.forEach((el, i) => el.addEventListener('click', () => activate(i)));
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting && e.intersectionRatio > 0.5) { const i = items.indexOf(e.target); if (i !== -1) activate(i); } }), { threshold: [0.5] });
  items.forEach(el => obs.observe(el)); activate(0);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;600&display=swap");
@import url("https://fonts.googleapis.com");
@import url("https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.47.0/tabler-icons.min.css");
@import url("https://fonts.gstatic.com");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

html {
  scroll-behavior: smooth
}

.body {
  font-family: 'Poppins', sans-serif;
  background: #000;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.main-nav-container a {
  color: #ffffff;
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

.main-nav-container {
  display: flex;
  align-items: center;
  gap: 35px;
  flex-shrink: 0;
}

.main-nav-container a {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.25s ease;
}

.main-nav-container a:hover {
  color: #d4af37;
}

.front-page,
.about-section,
.services-page,
.shop-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4vh 0
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

.hamburger {
  display: none;
}

.front-page {
  position: relative;
  height: 100vh;
  align-items: center;
  overflow: hidden
}

.about-section {
  position: relative;
  min-height: 100vh;
  align-items: center
}

.content-box {
  position: relative;
  width: 96vw;
  height: 92vh;
  border-radius: 24px;
  overflow: hidden;
  z-index: 3;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .8);
  display: flex;
  flex-direction: column;
  justify-content: flex-end
}

.content-box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top,
      rgba(0, 0, 0, .85),
      rgba(0, 0, 0, .2));
  z-index: 2;
  pointer-events: none
}

.bg-slider,
.front-page-overlay,
.inner-slider,
.svc-bg-layer,
.svc-bg-overlay,
.mv-card-bg,
.mv-card-overlay {
  position: absolute;
  inset: 0;
}

.bg-slider {
  z-index: 0;
}

.front-page-overlay {
  z-index: 1;
}

.inner-slider {
  z-index: 1;
}

.bg-slide,
.inner-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.4s cubic-bezier(.4, 0, .2, 1);
  will-change: opacity
}

.bg-slide {
  transform: scale(1.02);
  filter: brightness(.5)
}

.bg-slide.active {
  opacity: .6
}

.inner-slide.active {
  opacity: 1
}

.front-page-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, .35), rgba(0, 0, 0, .75));
  z-index: 1
}


.logo img {
  width: 180px;
  height: auto;
  display: block;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, .4))
}


.content {
  position: absolute;
  bottom: 60px;
  z-index: 3;
  width: 580px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, .5)
}

.content.left {
  left: 60px;
  text-align: left
}

.content.right {
  right: 60px;
  text-align: right
}

.content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  font-style: italic;
  line-height: 1.15;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards
}

.content p {
  font-size: 1.05rem;
  font-weight: 300;
  max-width: 560px;
  line-height: 1.85;
  opacity: 0;
  letter-spacing: .4px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: .18s
}

.animate-left h1,
.animate-left p {
  animation-name: fromLeft
}

.animate-right h1,
.animate-right p {
  animation-name: fromRight
}

.animate-bottom-right h1,
.animate-bottom-right p,
.animate-bottom-left h1,
.animate-bottom-left p {
  animation-name: riseUp
}

@keyframes fromLeft {
  from {
    opacity: 0;
    transform: translateX(-80px)
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }
}

@keyframes fromRight {
  from {
    opacity: 0;
    transform: translateX(80px)
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }
}

@keyframes riseUp {
  from {
    opacity: 0;
    transform: translateY(60px)
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  border-radius: 50px;
  padding: 13px 32px;
  transition: background .3s, color .3s, box-shadow .3s;
  cursor: pointer;
  border: none
}

.cta-btn i {
  font-size: 1rem;
  transition: transform .3s
}

.cta-btn:hover i {
  transform: translateX(5px)
}

.cta-btn--gold {
  background: #ffea00;
  color: #000
}

.cta-btn--gold:hover {
  background: #fff;
  box-shadow: 0 8px 30px rgba(255, 234, 0, .3)
}

.cta-btn--outline {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, .5)
}

.cta-btn--outline:hover {
  background: #fff;
  color: #000;
  border-color: #fff
}

.hero-cta-wrap {
  margin-top: 26px
}

.about-cta-wrap {
  margin-top: 28px
}

.services-cta-wrap {
  text-align: center;
  padding: 0 0 52px;
  position: relative;
  z-index: 5
}

.about-card-unrolled {
  height: auto !important;
  overflow: hidden !important;
  justify-content: flex-start !important;
  border: 1px solid rgba(255, 255, 255, .03);
  background: linear-gradient(160deg, #b7b4b2 0%, #5C2D00 30%, #A0522D 60%, #D4A04A 85%, #e7e3d8 100%)
}

.about-card-unrolled::after,
.services-unrolled-card::after,
.shop-card::after {
  display: none
}

.about-block-wrap {
  position: relative;
  width: 100%;
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 4;
  overflow: hidden
}

.about-hero-content-split {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding: 80px 6vw 40px;
  flex: 1
}

.about-hero-content-split::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('logo.png') no-repeat center/38%;
  opacity: .18;
  pointer-events: none
}

.about-hero-text-side {
  flex: 1;
  max-width: 540px;
  position: relative;
  z-index: 1
}

.about-hero-text-side .about-title-h2 {
  color: #e8e6e6 !important;
  font-size: 4.5rem;
  margin-bottom: 20px
}

.about-hero-text-side .about-hero-desc p {
  color: #e8e4e4 !important;
  font-size: 1.05rem;
  line-height: 1.9
}

.about-hero-cards-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1
}

.cards-deck {
  position: relative;
  width: 320px;
  height: 400px
}

.card-item {
  position: absolute;
  width: 240px;
  height: 320px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 15px 35px rgba(0, 0, 0, .25);
  border: 6px solid #dacf2a;
  transition: transform .4s
}

.card-1 {
  z-index: 3;
  transform: rotate(-6deg)
}

.card-2 {
  z-index: 2;
  transform: translate(35px, -20px) rotate(4deg)
}

.card-3 {
  z-index: 1;
  transform: translate(70px, -40px) rotate(14deg)
}

.cards-deck:hover .card-1 {
  transform: translate(-10px, 5px) rotate(-10deg)
}

.cards-deck:hover .card-2 {
  transform: translate(45px, -25px) rotate(6deg)
}

.cards-deck:hover .card-3 {
  transform: translate(95px, -50px) rotate(18deg)
}

.eyebrow {
  font-size: .72rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #ffea00;
  margin-bottom: 12px;
  display: block
}

.about-title-h2 {
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  font-weight: 400;
  font-style: italic;
  color: #fff;
  line-height: 1.1
}

.about-deco-line {
  width: 50px;
  height: 2px;
  background: #ffea00;
  margin: 18px 0
}

.mv-section {
  position: relative;
  z-index: 4;
  width: 100%;
  padding: 60px 5vw 50px;
  background: rgba(5, 5, 5, .97);
  border-top: 1px solid rgba(255, 255, 255, .05);
  display: flex;
  gap: 24px
}

.mv-card {
  flex: 1;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 340px;
  border: 1px solid rgba(255, 255, 255, .07)
}

.mv-card-bg {
  background-size: cover;
  background-position: center;
  transition: transform .9s cubic-bezier(.25, .46, .45, .94)
}

.mv-card:hover .mv-card-bg {
  transform: scale(1.06)
}

.mv-card--mission .mv-card-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, .88), rgba(40, 25, 0, .82))
}

.mv-card--vision .mv-card-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, .88), rgba(20, 15, 40, .82))
}

.mv-card-body {
  position: relative;
  z-index: 2;
  padding: 36px 38px 38px
}

.mv-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid #ffea00;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px
}

.mv-card-icon i {
  font-size: 1.3rem;
  color: #ffea00
}

.mv-card-body .eyebrow {
  margin-bottom: 8px
}

.mv-card-body .about-title-h2 {
  font-size: 2.6rem
}

.mv-card-body .about-deco-line {
  margin: 14px 0 18px
}

.mv-card-body blockquote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.05rem;
  color: #e8e8e8;
  line-height: 1.8;
  border-left: 2px solid #ffea00;
  padding-left: 16px;
  max-width: 420px
}

.mv-card-body p {
  font-size: .95rem;
  color: #ddd;
  line-height: 1.9;
  max-width: 420px
}

.about-values-strip {
  position: relative;
  z-index: 2;
  display: flex;
  background: rgba(15, 15, 15, .98);
  border-top: 1px solid rgba(255, 255, 255, .05);
  padding: 28px 4vw;
  width: 100%
}

.about-val-item {
  text-align: center;
  flex: 1;
  border-right: 1px solid rgba(255, 255, 255, .08)
}

.about-val-item:last-child {
  border-right: none
}

.about-val-item i {
  font-size: 1.8rem;
  color: #ffea00;
  margin-bottom: 6px;
  display: block
}

.about-val-item span {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .95rem;
  display: block;
  color: #fff
}

.services-page {
  padding: 0
}

.services-unrolled-card {
  height: auto !important;
  overflow: hidden;
  justify-content: flex-start !important;
  background: #060604;
  border: 1px solid rgba(255, 255, 255, .05);
  position: relative
}

.svc-bg-layer {
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(.4, 0, .2, 1);
  z-index: 0;
  pointer-events: none
}

.svc-bg-layer.visible {
  opacity: 1
}

.svc-bg-overlay {
  background: linear-gradient(to right, rgba(0, 0, 0, .94) 0%, rgba(0, 0, 0, .7) 55%, rgba(0, 0, 0, .9) 100%);
  z-index: 1;
  pointer-events: none
}

.services-header-inside,
.services-cta-wrap,
.svc-timeline {
  position: relative;
  z-index: 5
}

.services-header-inside {
  width: 100%;
  padding: 90px 6vw 50px;
  text-align: center
}

.services-header-inside span {
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: .85rem;
  opacity: .7
}

.services-header-inside h2 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 4.5rem;
  margin-top: 20px
}

.svc-timeline {
  width: 100%;
  padding: 0 6vw 120px;
  display: flex;
  flex-direction: column
}

.svc-timeline::before {
  content: '';
  position: absolute;
  left: calc(6vw + 27px);
  top: 0;
  bottom: 120px;
  width: 1.5px;
  background: linear-gradient(to bottom, rgba(218, 207, 42, 0), rgba(218, 207, 42, .35) 10%, rgba(218, 207, 42, .35) 90%, rgba(218, 207, 42, 0));
  z-index: 1
}

.svc-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  will-change: opacity, transform;
  transition: opacity .55s, transform .55s
}

.svc-dot-wrap {
  position: relative;
  z-index: 3;
  flex-shrink: 0;
  width: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36px
}

.svc-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(218, 207, 42, .4);
  background: #060604;
  transition: width .4s, height .4s, background .4s, box-shadow .4s, border-color .4s
}

.svc-item.active .svc-dot {
  width: 18px;
  height: 18px;
  border-color: #ffea00;
  background: #ffea00;
  box-shadow: 0 0 22px rgba(255, 234, 0, .45)
}

.svc-body {
  flex: 1;
  display: flex;
  gap: 36px;
  padding: 20px 0 55px;
  transition: padding .55s
}

.svc-item.active .svc-body {
  padding: 20px 0 68px
}

.svc-item:not(.active) .svc-body {
  padding: 8px 0 16px
}

.svc-img-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  flex-shrink: 0;
  width: 400px;
  height: 280px;
  transform-origin: left center;
  will-change: transform, opacity;
  transition: transform .7s cubic-bezier(.22, 1, .36, 1), opacity .5s, border-radius .5s, box-shadow .5s
}

.svc-item:not(.active) .svc-img-wrap {
  transform: scale(.22);
  border-radius: 12px;
  opacity: .35;
  box-shadow: none
}

.svc-item.active .svc-img-wrap {
  transform: scale(1);
  opacity: 1;
  box-shadow: 0 25px 60px rgba(0, 0, 0, .65)
}

.svc-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .8s
}

.svc-item.active .svc-img-wrap img {
  transform: scale(1.04)
}

.svc-img-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, .55), transparent 55%)
}

.svc-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6px 0;
  transition: opacity .5s, transform .5s
}

.svc-item:not(.active) .svc-text {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-10px)
}

.svc-item.active .svc-text {
  opacity: 1;
  transform: translateX(0)
}

.svc-num {
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  font-style: italic;
  color: rgba(218, 207, 42, .07);
  line-height: 1;
  margin-bottom: -18px;
  display: block
}

.svc-eyebrow {
  font-size: .68rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ffea00;
  margin-bottom: 14px;
  display: block
}

.svc-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2.8rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 18px
}

.svc-deco {
  width: 50px;
  height: 2px;
  background: #ffea00;
  margin-bottom: 20px
}

.svc-desc {
  font-size: .98rem;
  color: rgba(255, 255, 255, .73);
  line-height: 1.9;
  max-width: 440px;
  margin-bottom: 26px
}

.svc-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: .72rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffea00;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 234, 0, .3);
  padding-bottom: 4px;
  transition: gap .3s, border-color .3s
}

.svc-link:hover {
  gap: 14px;
  border-color: #ffea00
}

.svc-peek {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 0 8px 18px;
  transition: opacity .4s
}

.svc-item.active .svc-peek {
  opacity: 0;
  pointer-events: none
}

.svc-peek-num {
  font-family: 'Playfair Display', serif;
  font-size: .68rem;
  font-style: italic;
  color: rgba(218, 207, 42, .45);
  letter-spacing: 2px;
  margin-bottom: 3px
}

.svc-peek-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .92rem;
  color: rgba(255, 255, 255, .32)
}

.shop-section {
  background: #000
}

.shop-card {
  height: auto !important;
  overflow: visible !important;
  justify-content: flex-start !important;
  background: linear-gradient(160deg, #06060a 0%, #0f0d04 40%, #1e1407 70%, #2e1e08 100%);
  border: 1px solid rgba(255, 255, 255, .06)
}

.shop-header {
  position: relative;
  z-index: 5;
  width: 100%;
  padding: 70px 6vw 40px;
  text-align: center
}

.shop-header .eyebrow {
  color: #d4a04a
}

.shop-header h2 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 4rem;
  margin-top: 12px
}

.shop-scroll-wrap {
  position: relative;
  z-index: 5;
  padding: 0 6vw 30px
}

.shop-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 20px;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: #2a1e08 transparent
}

.shop-scroll::-webkit-scrollbar {
  height: 4px
}

.shop-scroll::-webkit-scrollbar-thumb {
  background: #2a1e08;
  border-radius: 4px
}

.shop-prod {
  flex: 0 0 220px;
  background: #0f0e12;
  border: 1px solid #1e1a14;
  border-radius: 20px;
  overflow: hidden;
  scroll-snap-align: start;
  transition: transform .3s, border-color .3s
}

.shop-prod:hover {
  transform: translateY(-6px);
  border-color: #d4a04a
}

.shop-prod-img {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1207, #2a1e08);
  position: relative;
  overflow: hidden
}

.shop-prod-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .6s
}

.shop-prod:hover .shop-prod-img img {
  transform: scale(1.08)
}

.shop-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #d4a04a;
  border-radius: 6px;
  font-size: .6rem;
  padding: 3px 8px;
  color: #000;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase
}

.shop-prod-info {
  padding: 16px 18px 18px
}

.shop-prod-cat {
  font-size: .65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #d4a04a;
  font-weight: 600;
  margin-bottom: 4px
}

.shop-prod-name {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.05rem;
  color: #e8e0d0;
  line-height: 1.3
}

.shop-prod-desc {
  font-size: .75rem;
  color: #666;
  line-height: 1.6;
  margin-top: 4px
}

.shop-prod-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px
}

.shop-prod-price {
  font-size: 1rem;
  color: #d4a04a;
  font-weight: 600
}

.shop-add-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: 1px solid #d4a04a;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: .7rem;
  color: #d4a04a;
  cursor: pointer;
  transition: background .2s, color .2s;
  font-family: 'Poppins', sans-serif
}

.shop-add-btn:hover {
  background: #d4a04a;
  color: #000
}

.shop-cta {
  text-align: center;
  padding: 10px 0 50px;
  z-index: 5;
  position: relative
}

.shop-cta a {
  display: inline-block;
  border: 1px solid rgba(212, 160, 74, .5);
  border-radius: 30px;
  padding: 12px 40px;
  font-size: .8rem;
  color: #d4a04a;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: background .3s, color .3s
}

.shop-cta a:hover {
  background: #d4a04a;
  color: #000
}

.site-footer {
  width: 100%;
  background: #ebebe8;
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
  color: #060404;
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
  color: #444;
  margin-bottom: 16px;
  font-weight: 500
}

.footer-col a {
  display: block;
  font-size: .8rem;
  color: #666;
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
  outline: none;
  font-family: 'Poppins', sans-serif
}

.footer-newsletter-input input::placeholder {
  color: #333;
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
  color: #333;
  text-decoration: none;
  transition: color .2s
}

.footer-bottom-links a:hover {
  color: #d4a04a
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

@media(max-width:1100px) {
  .logo img {
    width: 15vw;
    height: auto;
  }
  .header-bar {
    display: flex;
    flex-direction: row;
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
    background: #f8f8f8;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .main-nav-container {
    display: none;
  }

}

@media(max-width:900px) {
  .hamburger{
    display:flex;
  }
  .main-nav-container {
    display: none;
  }

  .main-nav-container a {
    margin: 0;
    width: 100%;
    height: 6vw;
    text-align: left;
  }

  .header-bar {
    display: flex;
    flex-direction: row;
  }

  .content h1 {
    font-size: 2.8rem
  }

  .about-hero-content-split {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    padding: 60px 4vw
  }

  .about-title-h2 {
    font-size: 3rem
  }

  .about-values-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px
  }

  .about-val-item {
    border-right: none
  }

  .mv-section {
    flex-direction: column;
    gap: 18px;
    padding: 40px 4vw
  }

  .mv-card {
    min-height: 280px
  }

  .mv-card-body .about-title-h2 {
    font-size: 2.2rem
  }

  .svc-item.active .svc-img-wrap {
    width: 280px
  }

  .shop-prod {
    flex: 0 0 180px
  }

  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 30px
  }
  .hamburger {
    display: flex;
  }
}

@media(max-width:850px) {
  .hamburger {
    display: flex;
  }

  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 2000;
    display: flex;
    justify-content: flex-end;
  }

  /* =========================
   MOBILE DRAWER
========================= */
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

  /* =========================
   DRAWER LOGO
========================= */
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

  /* =========================
   DRAWER LINKS
========================= */
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

  /* =========================
   DRAWER ANIMATION
   Même principe que GCMBC
========================= */
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

  .hamburger {
    display: flex;
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
    background: #f8f8f8;
    border-radius: 2px;
    transition: all 0.3s ease;
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

  /* =========================
   NAVIGATION DESKTOP
========================= */

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
}

@media(max-width:768px) {

  .content {
    width: calc(100% - 40px)
  }

  .content h1 {
    font-size: 2rem
  }

  .about-values-strip {
    grid-template-columns: repeat(2, 1fr)
  }

  .cards-deck {
    width: 200px;
    height: 300px
  }

  .card-item {
    width: 160px;
    height: 230px;
    border-width: 4px
  }

  .mv-card-body {
    padding: 26px
  }

  .mv-card-body .about-title-h2 {
    font-size: 1.9rem
  }

  .svc-item.active .svc-img-wrap {
    width: 100%
  }

  .svc-body {
    flex-wrap: wrap
  }

  .svc-title {
    font-size: 2rem
  }

  .shop-header h2 {
    font-size: 2.8rem
  }

  .shop-scroll-wrap {
    padding: 0 4vw 20px
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 28px
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center
  }
}

.map-section {
  background: #000;
  padding: 0 0 60px
}

.map-card {
  width: 96vw;
  margin: 0 auto;
  background: #0b0b0b;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, .06)
}

.map-header {
  text-align: center;
  padding: 50px 20px 30px
}

.map-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-style: italic;
  color: #d4a04a;
  margin-bottom: 10px
}

.map-header p {
  color: #bbb
}

.map-frame {
  width: 100%;
  height: 450px;
  border: 0
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: #666;
  font-size: .82rem;
  line-height: 1.6;
}

.footer-contact-item i {
  color: #d4a04a;
  font-size: 20px;
  min-width: 20px;
}

.footer-contact-item span {
  transition: .3s;
}

.footer-contact-item:hover span {
  color: #d4a04a;
}
</style>