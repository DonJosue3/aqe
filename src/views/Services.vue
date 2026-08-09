<template>
  <div class="head">
    <div class="header-bar">
      <div class="logo"><img src="/images/logo.png" alt="Logo"></div>
      <nav class="main-nav-container">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/services" class="active">Services</RouterLink>
      </nav>
      <button v-if="!mobileOpen" class="hamburger" @click="mobileOpen = true" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

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

    <section class="m-hero">
      <h1>Ours Services</h1>
    </section>
  </div>

  <div class="services-list" id="srvList">
    <div class="srv-line"></div>
    <!-- PEEK 1 -->
    <div class="srv-item" data-index="0">
      <div class="srv-trigger">
        <div class="srv-dot"></div>
        <div class="srv-thumb">
          <img src="/images/interior-design.png" alt="">
        </div>
        <div class="srv-meta">
          <h2 class="srv-name">I.Interior Decoration</h2>
          <p class="srv-short">Espaces decores avec un style africain</p>
        </div>
        <span class="srv-arrow">›</span>
      </div>
      <div class="srv-panel">
        <div class="panel-inner">
          <p class="panel-desc">Chaque pièce devient un voyage. Nous concevons des intérieurs qui marient les motifs
            africains, les matières naturelles et la lumière pour créer des atmosphères uniques où le
            luxe.</p>
          <div class="gallery">
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#0a2a18,#0f5a30);">
                <div class="gal-img-inner">
                  <img src="/images/ID3.jpg" alt="">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <rect x="8" y="16" width="40" height="30" rx="2" stroke="#d4a04a" stroke-width="1.5"
                      fill="rgba(212,160,74,0.15)" />
                    <path d="M16 16V12C16 9.8 17.8 8 20 8H36C38.2 8 40 9.8 40 12V16" stroke="#d4a04a" stroke-width="1.5"
                      fill="none" />
                  </svg>
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Salon</span>
                  <p class="gal-caption">..avec des tableaux..</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#1a0a2a,#3d1a5a);">
                <div class="gal-img-inner">
                  <img src="/images/ID6.jpg" alt="">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 28V12L16 4L28 12V28H4Z" stroke="#d4a04a" stroke-width="1.2"
                      fill="rgba(212,160,74,0.1)" />
                  </svg>
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label"></span>
                  <p class="gal-caption">...lumineux dans les espaces</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#200800,#4d1800);">
                <div class="gal-img-inner">
                  <img src="/images/ID4.jpg" alt="">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="8" stroke="#d4a04a" stroke-width="1.2" fill="none" />
                    <path d="M8 16H24M16 8V24" stroke="#d4a04a" stroke-width="1.2" />
                  </svg>
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Luminaire</span>
                  <p class="gal-caption">Suspensions en rotin tressé à la main</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#0a1820,#1a3a50);">
                <div class="gal-img-inner">
                  <img src="/images/ID13.jpg" alt="">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="10" height="24" rx="1" stroke="#d4a04a" stroke-width="1.2"
                      fill="rgba(212,160,74,0.1)" />
                    <rect x="18" y="4" width="10" height="14" rx="1" stroke="#d4a04a" stroke-width="1.2"
                      fill="rgba(212,160,74,0.1)" />
                  </svg>
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label"></span>
                  <p class="gal-caption">..avec des motifs traditionnels..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICE 2 -->
    <div class="srv-item" data-index="1">
      <div class="srv-trigger">
        <div class="srv-dot"></div>
        <div class="srv-thumb">
          <img src="/images/hand-made.png" alt="">
        </div>
        <div class="srv-meta">
          <h2 class="srv-name">II.Handmade Creativity</h2>
          <p class="srv-short">Pièces uniques nées du savoir-faire ancestral</p>
        </div>
        <span class="srv-arrow">›</span>
      </div>
      <div class="srv-panel">
        <div class="panel-inner">
          <p class="panel-desc">De l'argile, du fil, du cuir et des perles — chaque objet raconte une histoire
            transmise de génération en génération. Nos artisans façonnent des créations qui portent l'âme du continent
            tout en dialoguant avec l'esthétique contemporaine.</p>
          <div class="gallery">
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#3d1a00,#7a3c00);">
                <div class="gal-img-inner">
                  <img src="/images/HC3.jpg" alt="">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <path d="M8 48L18 8L28 30L38 18L48 48H8Z" stroke="#d4a04a" stroke-width="1.5"
                      fill="rgba(212,160,74,0.2)" />
                    <circle cx="28" cy="30" r="4" fill="#d4a04a" />
                  </svg>
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Sculpture</span>
                  <p class="gal-caption">...des styles ancestral sur les objets modernes.</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#2a0a0a,#6b2020);">
                <div class="gal-img-inner">
                  <img src="/images/HC2.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Textile</span>
                  <p class="gal-caption">..des bijoux..</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#0a2a1a,#1a5a30);">
                <div class="gal-img-inner">
                  <img src="/images/HC9.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Bijoux</span>
                  <p class="gal-caption">..des tableaux decoratives..</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#1a1a0a,#3d3d00);">
                <div class="gal-img-inner">
                  <img src="/images/HC10.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Poterie</span>
                  <p class="gal-caption">Céramiques aux symboles adinkra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- SERVICE 3 -->
    <div class="srv-item" data-index="2">
      <div class="srv-trigger">
        <div class="srv-dot"></div>
        <div class="srv-thumb">
          <img src="/images/latte-art.png" alt="">
        </div>
        <div class="srv-meta">
          <h2 class="srv-name">III.Coffee Lifestyle</h2>
          <p class="srv-short">Le café africain érigé en rituel de vie</p>
        </div>
        <span class="srv-arrow">›</span>
      </div>
      <div class="srv-panel">
        <div class="panel-inner">
          <p class="panel-desc">
            Coffee Lifestyle celebrates the art of gathering. Enjoy premium African
            coffee, fresh meals, homemade pastries, and carefully selected refreshments
            served in an atmosphere inspired by African warmth, creativity, and
            hospitality.
          </p>
          <div class="gallery">
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#2d1200,#5c2600);">
                <div class="gal-img-inner">
                  <img
                    src="https://images.pexels.com/photos/162886/coffee-glass-beverage-coffee-mug-162886.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Coffee</span>
                  <p class="gal-caption"></p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#1a0a00,#3d2200);">
                <div class="gal-img-inner">
                  <img src="/images/CL4.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label"></span>
                  <p class="gal-caption">..salades de fruits..</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#0a180a,#1a3a1a);">
                <div class="gal-img-inner">
                  <img src="/images/CL2.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label"></span>
                  <p class="gal-caption">...pizza..</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#200a20,#4d1a4d);">
                <div class="gal-img-inner">
                  <img src="/images/CL1.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label"></span>
                  <p class="gal-caption">..plats complets</p>
                </div>
              </div>
            </div>
          </div>
          <RouterLink to="/menu">
            <div class="panel-cta">Voir le menu →</div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- SERVICE 4 -->
    <div class="srv-item" data-index="3">
      <div class="srv-trigger">
        <div class="srv-dot"></div>
        <div class="srv-thumb">
          <img src="/images/shirt.png" alt="">
        </div>
        <div class="srv-meta">
          <h2 class="srv-name">IV.Fashion Products</h2>
          <p class="srv-short">Mode africaine contemporaine comme manifeste</p>
        </div>
        <span class="srv-arrow">›</span>
      </div>
      <div class="srv-panel">
        <div class="panel-inner">
          <p class="panel-desc">Des pagnes aux coupes architecturales, nos collections fusionnent le savoir-faire des
            tisserands africains avec une vision de mode globale. Chaque pièce est une déclaration — porter African
            Queen Empire, c'est affirmer son héritage.</p>
          <div class="gallery">
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#2a0a2a,#6b1a6b);">
                <div class="gal-img-inner">
                  <img src="/images/FP1.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Couture</span>
                  <p class="gal-caption">Robes à imprimés bogolan contemporains</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#1a0800,#4d2400);">
                <div class="gal-img-inner">
                  <img src="/images/FP2.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Accessoires</span>
                  <p class="gal-caption">Sacs en raphia tressé et cuir naturel</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#0a1a0a,#1a4a20);">
                <div class="gal-img-inner">
                  <img src="/images/FP3.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Prêt-à-porter</span>
                  <p class="gal-caption">Collections capsule saison 2025</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#0a0a20,#1a1a5a);">
                <div class="gal-img-inner">
                  <img src="/images/FP4.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Sur mesure</span>
                  <p class="gal-caption">Tenues de cérémonie personnalisées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICE 5 -->
    <div class="srv-item" data-index="4">
      <div class="srv-trigger">
        <div class="srv-dot"></div>
        <div class="srv-thumb">
          <img src="/images/woman.png" alt="">
        </div>
        <div class="srv-meta">
          <h2 class="srv-name">V.Natural Hair Elegance</h2>
          <p class="srv-short">La texture naturelle célébrée en couronne</p>
        </div>
        <span class="srv-arrow">›</span>
      </div>
      <div class="srv-panel">
        <div class="panel-inner">
          <p class="panel-desc">Tresses, locks, twists, afros — chaque texture est une couronne à porter avec fierté.
            Nos spécialistes en capillologie naturelle africaine proposent soins, styling et formations pour célébrer
            et préserver la beauté authentique des cheveux naturels.</p>
          <div class="gallery">
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#0a1a2a,#1a4060);">
                <div class="gal-img-inner">
                  <img src="/images/NH1.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Styling</span>
                  <p class="gal-caption">Box braids ornées de fils dorés</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#1a0a00,#3d2200);">
                <div class="gal-img-inner">
                  <img src="/images/NH2.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Soins</span>
                  <p class="gal-caption">Masques à l'huile de karité pur</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#0a200a,#1a5020);">
                <div class="gal-img-inner">
                  <img src="/images/NH3.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Formation</span>
                  <p class="gal-caption">Ateliers tressage et capillologie naturelle</p>
                </div>
              </div>
            </div>
            <div class="gal-card">
              <div class="gal-img" style="background:linear-gradient(135deg,#200a20,#501050);">
                <div class="gal-img-inner">
                  <img src="/images/NH4.jpg" alt="">
                </div>
                <div class="gal-overlay"></div>
                <div class="gal-info"><span class="gal-label">Produits</span>
                  <p class="gal-caption">Gamme naturelle aux plantes africaines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        <RouterLink to="/home">Accueil</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
      </div>
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
    <div class="footer-bottom"><span>© 2025 AFRICAN QUEEN EMPIRE · TOUS DROITS RÉSERVÉS</span>
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
const mobileOpen = ref(false)
onMounted(() => {
  const items = [...document.querySelectorAll('.srv-item')];

  // Fonction simplifiée : on active ou désactive un item précis
  function setItemActive(item, isActive) {
    item.classList.toggle('active', isActive);
  }

  // On s'assure que le tout premier est ouvert au départ
  setItemActive(items[0], true);

  // Configuration de l'Observer
  const observerOptions = {

    threshold: 0.35
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = parseInt(entry.target.getAttribute('data-index'), 10);

      if (entry.isIntersecting) {
        // Si l'élément entre dans la zone en défilant vers le bas, on l'ouvre
        setItemActive(entry.target, true);
      } else {
        // IMPORTANT : On ne referme l'élément QUE si on remonte la page.
        // Si l'élément sort par le HAUT de l'écran (boundingClientRect.top < zone de déclenchement),
        // cela signifie qu'on descend plus bas : on le LAISSE ouvert.
        if (entry.boundingClientRect.top > 0) {
          // L'élément sort par le bas (l'utilisateur remonte la page) : on peut le refermer
          // (Optionnel : vous pouvez commenter la ligne ci-dessous si vous voulez qu'ils restent toujours ouverts)
          setItemActive(entry.target, false);
        }
      }
    });
  }, observerOptions);

  // Activer l'observation sur tous les services
  items.forEach(item => observer.observe(item));
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=Poppins:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;600&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page {
  background: #faf8f4;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

.logo img {
  width: 150px;
  height: 130px;
  display: block;
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

.main-nav-container a {
  color: #000000;
  text-decoration: none;
  margin-left: 35px;
  font-size: .85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: .75;
  transition: opacity .25s, color .25s
}

.main-nav-container a:hover,
.main-nav-container a.active {
  color: #ffea00;
  opacity: 1
}

.m-hero {
  position: relative;
  padding: 80px 6vw 0px;
  text-align: center;
  background: #fff6e0;
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
  color: #000000;
}

.m-hero p {
  color: #c9bfa8;
  max-width: 480px;
  margin: 14px auto 0;
  line-height: 1.8;
  font-size: .95rem
}

.page-header {
  padding: 0.2rem 2rem 1.5rem;
  border-bottom: 1px solid #e5ddd0;
  background-color: #ffffff;
}

.page-eyebrow {
  color: #d4a04a;
  font-size: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.4rem;
}

.page-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: #1a1208;
  font-size: 36px;
  line-height: 1.1;
}

.services-list {
  position: relative;
}

.srv-line {
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, #d4a04a 0%, #2a1800 100%);
}

.srv-item {
  position: relative;
  border-bottom: 1px solid #e5ddd0;
  cursor: pointer;
}

.srv-trigger {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.4rem 2rem 1.4rem 4rem;
  position: relative;
  transition: background 0.3s;
}

.srv-trigger:hover {
  background: rgba(212, 160, 74, 0.04);
}

.srv-dot {
  position: absolute;
  left: 1.72rem;
  top: 50%;
  transform: translateY(-50%);
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #2a2a2a;
  border: 1.5px solid #d4a04a;
  transition: background 0.3s, transform 0.3s;
}

.srv-item.active .srv-dot {
  background: #d4a04a;
  transform: translateY(-50%) scale(1.3);
}

.srv-thumb {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d4a04a;
  border-radius: 50%;
  background: rgba(212, 160, 74, .05);
  overflow: hidden;
}

.srv-thumb img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.srv-meta {
  flex: 1;
}

.srv-cat {
  color: #d4a04a;
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.srv-name {
  font-family: 'Playfair Display', serif;
  color: #1a1208;
  font-size: 17px;
  line-height: 1.2;
}

.srv-arrow {
  color: #b0a090;
  font-size: 18px;
  transition: transform 0.3s, color 0.3s;
  margin-left: auto;
}

.srv-item.active .srv-arrow {
  transform: rotate(90deg);
  color: #d4a04a;
}

.srv-short {
  color: #8a7a66;
  font-size: 12px;
  margin-top: 3px;
  max-width: 360px;
}

.srv-panel {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition:
    max-height .8s ease,
    opacity .4s ease;
}

.srv-item.active .srv-panel {
  max-height: 2000px;
  opacity: 1;
}

.panel-inner {
  padding: 0 2rem 2rem 4rem;
}

.panel-desc {
  color: #4a3e2e;
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: 1.4rem;
  max-width: 520px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  margin-bottom: 1.4rem;
}

.gal-card {
  position: relative;
  overflow: hidden;
  cursor: default;
}

.gal-card:first-child {
  grid-column: span 2;
  grid-row: span 2;
}

.gal-img {
  width: 100%;
  padding-top: 80%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gal-card:first-child .gal-img {
  padding-top: 100%;
}

.gal-img-inner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gal-img-inner img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .6s ease;
}

.gal-img-inner {
  overflow: hidden;
}

.gal-img-inner img {
  display: block;
  image-rendering: auto;
  backface-visibility: hidden;
}

/* Zoom léger seulement au survol */

.gal-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.1) 55%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.gal-card:hover .gal-overlay,
.gal-card:first-child .gal-overlay {
  opacity: 1;
}

.gal-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.8rem;
  transform: translateY(6px);
  transition: transform 0.3s;
}

.gal-info {
  transform: translateY(0);
}

.gal-card:hover {
  transform: none;
}

.gal-card:first-child .gal-info {
  transform: translateY(0);
}

.gal-label {
  color: #d4a04a;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
}

.gal-caption {
  color: #fff;
  font-size: 11px;
  font-family: 'Playfair Display', serif;
  margin-top: 2px;
}

.panel-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d4a04a;
  color: #d4a04a;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
}

.next-peek {
  padding: 1rem 2rem 1rem 4rem;
  background: #090909;
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0.5;
}

.next-peek-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #444;
  flex-shrink: 0;
}

.next-peek-label {
  color: #555;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.next-peek-name {
  color: #666;
  font-size: 14px;
  font-family: 'Playfair Display', serif;
}

/* ==========================================================================
   STYLISATION DU FOOTER (AUTONOME ET CORRIGÉE)
   ========================================================================== */

/* Import de la police si elle n'est pas présente */

.footer {
  background-color: #111111;
  color: #ffffff;
  padding: 80px 0 30px 0;
  font-family: 'Poppins', sans-serif;
  margin-top: 80px;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
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
  background: #fff6e0;
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
  min-width: 20px
}

.footer-contact-item span {
  transition: .3s
}

.footer-contact-item:hover span {
  color: #d4a04a
}


.hamburger span {
  display: flex;
  flex-direction: column;
  width: 24px;
  height: 20px;
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

@media (max-width: 850px) {
  .logo img {
    width: 18vw;
    height: auto;
  }

  .hamburger {
    display: flex;
  }

  .header-bar {
    display: flex;
    flex-direction: row;
  }

  .footer-top {
    display: flex;
    flex-direction: column;
  }

  .site-footer {
    padding-right: 0vw;
    width: 100vw;
  }


  /* =========================
   NAVIGATION DESKTOP
========================= */
  /* =========================
   HAMBURGER
========================= */

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
    background: #0e0b0b;
    border-radius: 2px;
    transition: all 0.3s ease;
  }


  /* =========================
   MOBILE OVERLAY
========================= */

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


  /* =========================
   CLOSE BUTTON
========================= */

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
}

@media (max-width: 1100px) {
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
    background: #0e0b0b;
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
}
</style>