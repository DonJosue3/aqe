<template>
    <div class="head">
        <div class="header-bar">
            <div class="logo"><img src="/images/logo.png" alt="Logo" /></div>
            <nav class="main-nav-container">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/services">Services</RouterLink>
                <RouterLink to="/menu">Menu</RouterLink>
                <RouterLink to="/shop" class="active">Shop</RouterLink>
            </nav>
            <button v-if="!mobileOpen" class="hamburger" @click="mobileOpen = true" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Transition name="drawer">
                <div v-if="mobileOpen" class="mobile-overlay" @click.self="mobileOpen = false">
                    <div class="mobile-drawer">
                        <button class="drawer-close" @click="mobileOpen = false" aria-label="Fermer">✕</button>
                        <div class="drawer-logo">
                            <img src="/images/aqelogo.png" alt="African Queen Empire" />
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
            <h1>Notre Boutique</h1>
        </section>
    </div>

    <nav class="cat-nav">
        <button :class="{ active: selectedCategory === 'all' }" @click="changeCategory('all')">
            Tout
        </button>

        <button :class="{ active: selectedCategory === 'mode' }" @click="changeCategory('deco')">
            Interior Design
        </button>

        <button :class="{ active: selectedCategory === 'deco' }" @click="changeCategory('mode')">
            Fashion Design
        </button>
    </nav>

    <section class="masonry-wrap">
        <div class="masonry" id="masonryGrid">
            <div v-for="product in filteredProducts" :key="product.id" :class="['m-card', product.size]"
                :data-cat="product.category">
                <img :src="imageUrl(product.image)" :alt="product.name" />
                <div class="m-overlay">
                    <div class="m-cat">
                        {{ product.label }}
                    </div>

                    <div class="m-name">
                        {{ product.name }}
                    </div>

                    <div class="m-row">
                        <span class="m-price">
                            {{ product.price }}
                        </span>

                        <div class="m-add" @click="addToCart(product)">
                            <i class="ti ti-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p v-if="filteredProducts.length === 0" class="no-results">
            Aucun produit dans cette categories.
        </p>
        <div class="load-more"><button>Voir plus de produits</button></div>
    </section>
    <footer class="site-footer">
        <div class="footer-top">
            <div class="footer-brand">
                <div class="footer-brand-logo">African Queen Empire</div>
                <p>
                    Une marque de lifestyle africaine qui célèbre la beauté, la créativité et l'hospitalité.
                </p>
                <div class="footer-socials">
                    <a href="https://www.facebook.com/profile.php?id=61586875303123" class="footer-social"
                        target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
                <RouterLink to="/images/home">Accueil</RouterLink>
                <RouterLink to="/images/services">Services</RouterLink>
                <RouterLink to="/images/shop">Shop</RouterLink>
                <RouterLink to="/images/menu">Menu</RouterLink>
            </div>
            <!--div class="footer-col">
                <h4>Services</h4>
                <RouterLink to ="/images/services">Handmade Creativity</RouterLink>
                <RouterLink to ="/images/services">Interior Decoration</RouterLink>
                <RouterLink to ="/images/services">Coffee Lifestyle</RouterLink>
                <RouterLink to ="/images/services">Fashion Products</RouterLink>
                <RouterLink to ="/images/services">Natural Hair Elegance</RouterLink>
            </div-->
            <div class="footer-col">
                <h4>Contacts</h4>
                <div class="footer-contact-item">
                    <i class="ti ti-map-pin"></i>
                    <span>Bujumbura, Burundi</span>
                </div>
                <div class="footer-contact-item">
                    <i class="ti ti-phone"></i>
                    <span> <br />+257 61 205 463 <br />+257 68 634 836 <br />+257 61 258 758 </span>
                </div>
                <div class="footer-contact-item">
                    <i class="ti ti-mail"></i>
                    <span>africanqueenempirebuja@gmail.com</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom"><span>© 2025 AFRICAN QUEEN EMPIRE · TOUS DROITS RÉSERVÉS</span></div>
    </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
const mobileOpen = ref(false)
const products = ref([])
const selectedCategory = ref('all')

const filteredProducts = computed(() => {
    if (selectedCategory.value === 'all') {
        return products.value
    }

    return products.value.filter((product) => product.category === selectedCategory.value)
})

function imageUrl(path) {
    return import.meta.env.BASE_URL + path.replace(/^\//, '')
}

async function loadProducts() {
    const response = await fetch(`${import.meta.env.BASE_URL}data/products.json`)
    const data = await response.json()
    products.value = data.products
}

function changeCategory(category) {
    selectedCategory.value = category
}

function addToCart(product) {
    console.log('Ajouté :', product.name)
}

onMounted(() => {
    loadProducts()
})
</script>

<style scoped>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #beb0b0;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

.logo img {
    width: 140px;
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

.hamburger {
    display: none;
}

/* ===== NAV STICKY CATÉGORIES ===== */
.cat-nav {
    position: sticky;
    top: 0;
    z-index: 1;
    background: rgba(6, 6, 6, 0.92);
    backdrop-filter: blur(6px);
    border-bottom: 1px solid rgba(212, 160, 74, 0.15);
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 16px 6vw;
    flex-wrap: wrap;
}

.cat-nav button {
    background: transparent;
    color: #ccc;
    font-family: 'Poppins', sans-serif;
    font-size: 0.78rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 8px 18px;
    border-radius: 20px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.25s;
}

.cat-nav button.active,
.cat-nav button:hover {
    color: #d4a04a;
    border-color: #d4a04a;
}

/* ===== MASONRY ===== */
.masonry-wrap {
    padding: 50px 6vw 100px;
    background: #000;
}

.masonry {
    columns: 4 220px;
    column-gap: 20px;
}

.m-card {
    break-inside: avoid;
    margin-bottom: 20px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    background: #0f0e12;
    border: 1px solid #1e1a14;
    transition:
        transform 0.3s,
        border-color 0.3s;
    cursor: pointer;
}

.m-card:hover {
    transform: translateY(-6px);
    border-color: #d4a04a;
}

.m-card img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.6s;
}

.m-card:hover img {
    transform: scale(1.06);
}

.m-card.tall img {
    height: 340px;
}

.m-card.short img {
    height: 190px;
}

.m-overlay {
    position: absolute;
    inset: auto 0 0 0;
    padding: 16px 16px 14px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.92), transparent);
}

.m-cat {
    font-size: 0.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #d4a04a;
    margin-bottom: 4px;
}

.m-name {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1rem;
    color: #fff;
}

.m-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
}

.m-price {
    font-size: 0.9rem;
    color: #d4a04a;
    font-weight: 600;
}

.m-add {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #d4a04a;
    color: #d4a04a;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
    background: transparent;
}

.m-add:hover {
    background: #d4a04a;
    color: #000;
}

.m-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #d4a04a;
    color: #000;
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 5px;
}

.load-more {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.load-more button {
    background: transparent;
    border: 1px solid rgba(212, 160, 74, 0.5);
    color: #d4a04a;
    padding: 13px 40px;
    border-radius: 30px;
    font-size: 0.78rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Poppins', sans-serif;
}

.load-more button:hover {
    background: #d4a04a;
    color: #000;
}

.no-results {
    text-align: center;
    padding: 60px 0;
    color: #666;
    font-size: 0.9rem;
    display: none;
}

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
    gap: 80px;
}

.footer-brand .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    letter-spacing: 2px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 700;
}

.footer-brand .footer-logo span {
    display: block;
    font-size: 12px;
    letter-spacing: 6px;
    color: #d4af37;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    margin-top: 5px;
}

.footer-desc {
    color: #a0a0a0;
    font-size: 14px;
    line-height: 1.8;
    margin-bottom: 30px;
    max-width: 400px;
}

.footer-socials {
    display: flex;
    gap: 15px;
}

.footer-socials .social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(212, 175, 55, 0.1);
}

.footer-socials .social-link:hover {
    background: #d4af37;
    color: #111;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
}

.footer-links-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
}

.footer-links-col h3 {
    font-family: 'Playfair Display', serif;
    color: #fff;
    font-size: 18px;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 10px;
    font-weight: 600;
}

.footer-links-col h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 1px;
    background-color: #d4af37;
}

.footer-links-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links-col ul li {
    margin-bottom: 15px;
}

.footer-links-col ul li a {
    color: #a0a0a0;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
    display: inline-block;
}

.footer-links-col ul li a.active,
.footer-links-col ul li a:hover {
    color: #d4af37;
    padding-left: 5px;
}

.footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 30px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
}

.footer-bottom p {
    color: #666;
    font-size: 13px;
    letter-spacing: 1px;
}

.site-footer {
    width: 100%;
    background: #fff6e0;
    padding: 60px 6vw 0;
}

.footer-top {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 50px;
    border-bottom: 1px solid #111;
}

.footer-brand-logo {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.6rem;
    color: #d4a04a;
    margin-bottom: 14px;
}

.footer-brand p {
    font-size: 0.8rem;
    color: #000;
    line-height: 1.8;
    max-width: 240px;
    margin-bottom: 20px;
}

.footer-socials {
    display: flex;
    gap: 10px;
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
    transition:
        border-color 0.2s,
        color 0.2s;
    text-decoration: none;
}

.footer-social:hover {
    border-color: #d4a04a;
    color: #d4a04a;
}

.footer-col h4 {
    font-size: 0.65rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 16px;
    font-weight: 500;
}

.footer-col a {
    display: block;
    font-size: 0.8rem;
    color: #000;
    text-decoration: none;
    margin-bottom: 8px;
    transition: color 0.2s;
}

.footer-col a:hover {
    color: #d4a04a;
}

.footer-newsletter-input {
    display: flex;
    gap: 8px;
    margin-top: 8px;
}

.footer-newsletter-input input {
    flex: 1;
    background: #0f0e12;
    border: 1px solid #1e1a14;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 0.75rem;
    color: #fff;
    outline: 0;
    font-family: 'Poppins', sans-serif;
}

.footer-newsletter-input input::placeholder {
    color: #333;
}

.footer-newsletter-input input:focus {
    border-color: #d4a04a;
}

.footer-newsletter-input button {
    background: #d4a04a;
    border: none;
    border-radius: 8px;
    padding: 8px 14px;
    font-size: 0.7rem;
    color: #000;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid #0d0d0d;
}

.footer-bottom span {
    font-size: 0.7rem;
    color: #333;
    letter-spacing: 1px;
}

.footer-bottom-links {
    display: flex;
    gap: 20px;
}

.footer-bottom-links a {
    font-size: 0.7rem;
    color: #000;
    text-decoration: none;
    transition: color 0.2s;
}

.footer-bottom-links a:hover {
    color: #d4a04a;
}

.footer-contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 2px;
    color: #000;
    font-size: 0.82rem;
    line-height: 1.6;
}

.footer-contact-item i {
    color: #605f11;
    font-size: 20px;
    min-width: 20px;
}

.footer-contact-item span {
    transition: 0.3s;
}

.footer-contact-item:hover span {
    color: #d4a04a;
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

.mobile-overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.55);

    z-index: 2000;

    display: flex;
    justify-content: flex-end;
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

    .mobile-drawer {
        width: 60vw;
        max-width: 85vw;
        height: 100vh;
        max-height: 100vh;
        background: #ffffff;
        padding: 30px 25px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-y: auto;
        z-index: 2001;
    }
}

@media (max-width: 850px) {
    .footer-top {
        display: flex;
        flex-direction: column;
    }

    .site-footer {
        padding-right: 0vw;
        width: 100vw;
    }

    .mobile-drawer {
        width: 60vw;
        max-width: 85vw;

        height: 100vh;
        max-height: 100vh;

        background: #ffffff;

        padding: 30px 25px;

        display: flex;
        flex-direction: column;

        box-sizing: border-box;

        overflow-y: auto;

        position: relative;
        z-index: 2001;
    }

    .mobile-overlay {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;

        background: rgba(0, 0, 0, 0.55);

        z-index: 2000;

        display: flex;
        justify-content: flex-end;
    }

    .header-bar {
        display: flex;
        flex-direction: row;
    }

    .hamburger {
        display: flex;
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

@media (max-width: 768px) {
    .masonry {
        columns: 2 160px;
    }

    .m-hero h1 {
        font-size: 2.4rem;
    }

}


@media (max-width: 850px) {}

@media (max-width: 768px) {
    .logo img {
        width: 20vw;
        height: auto;
    }
}
</style>
