/**
 * 濮尚服饰 - 静态网站 Vue 应用
 * 使用 Vue 3 + Vue Router (CDN) + i18n
 */

const { createApp, ref, computed, onMounted, onUnmounted, watch } = Vue;
const { createRouter, createWebHashHistory, useRoute, useRouter } = VueRouter;

/* ============================================
   工具函数
   ============================================ */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = String(dateStr).split('-');
  if (parts.length === 3) {
    return `${parts[0]}.${parts[1]}.${parts[2]}`;
  }
  return dateStr;
}

/* ============================================
   Navbar 组件
   ============================================ */
const Navbar = {
  template: `
    <header class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <span class="logo-text">濮尚</span>
          <span class="logo-sub">PUSHANG</span>
        </router-link>
        <nav class="nav-menu" :class="{ active: menuOpen }">
          <router-link to="/" @click="closeMenu">{{ t('nav.home') }}</router-link>
          <router-link to="/products" @click="closeMenu">{{ t('nav.products') }}</router-link>
          <router-link to="/about" @click="closeMenu">{{ t('nav.about') }}</router-link>
          <router-link to="/gallery" @click="closeMenu">{{ t('nav.gallery') }}</router-link>
          <router-link to="/news" @click="closeMenu">{{ t('nav.news') }}</router-link>
          <router-link to="/contact" @click="closeMenu">{{ t('nav.contact') }}</router-link>
        </nav>
        <div class="nav-right">
          <button class="lang-toggle" @click="toggleLang" :title="lang === 'zh' ? 'Switch to English' : '切换到中文'">
            {{ lang === 'zh' ? 'EN' : '中' }}
          </button>
          <button class="menu-toggle" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  setup() {
    const { lang, toggleLang, t } = window.useI18n();
    const isScrolled = ref(false);
    const menuOpen = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 60;
    };
    const toggleMenu = () => { menuOpen.value = !menuOpen.value; };
    const closeMenu = () => { menuOpen.value = false; };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { isScrolled, menuOpen, toggleMenu, closeMenu, lang, toggleLang, t };
  }
};

/* ============================================
   Footer 组件
   ============================================ */
const SiteFooter = {
  template: `
    <footer class="footer" v-if="company">
      <div class="footer-main">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col footer-brand">
              <h3 class="brand-name">{{ company.shortName }}</h3>
              <p class="brand-slogan">{{ company.slogan }}</p>
              <p class="brand-desc">{{ company.description?.substring(0, 120) }}...</p>
            </div>
            <div class="footer-col">
              <h4>{{ t('footer.quickNav') }}</h4>
              <ul>
                <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
                <li><router-link to="/products">{{ t('nav.products') }}</router-link></li>
                <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
                <li><router-link to="/gallery">{{ t('nav.gallery') }}</router-link></li>
                <li><router-link to="/news">{{ t('nav.news') }}</router-link></li>
                <li><router-link to="/contact">{{ t('nav.contact') }}</router-link></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>{{ t('footer.contactUs') }}</h4>
              <ul class="contact-info">
                <li><span>+86 19817578079</span></li>
                <li><span>400-107-3819</span></li>
                <li><span>19817578079@163.com</span></li>
                <li><span>{{ t('footer.wechatHours') }}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  setup() {
    const { lang, t, getCompanyInfo } = window.useI18n();
    const company = ref(null);
    onMounted(() => {
      company.value = getCompanyInfo();
    });
    watch(lang, () => {
      company.value = getCompanyInfo();
    });
    return { company, lang, t };
  }
};

/* ============================================
   Home 页面
   ============================================ */
const Home = {
  template: `
    <div class="home">
      <section class="hero" :style="{ backgroundImage: 'url(' + (company?.heroImage || '/photo/01-hero-fashion.png') + ')' }">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">{{ company?.shortName || '濮尚' }}</h1>
          <p class="hero-slogan">{{ company?.slogan }}</p>
          <p class="hero-desc">{{ company?.description?.substring(0, 80) }}...</p>
          <div class="hero-actions">
            <router-link to="/products" class="btn btn-primary">{{ t('hero.explore') }}</router-link>
            <router-link to="/contact" class="btn">{{ t('hero.contact') }}</router-link>
          </div>
        </div>
        <div class="scroll-hint">
          <span>{{ t('hero.scroll') }}</span>
          <div class="scroll-line"></div>
        </div>
      </section>

      <section class="featured-products">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">{{ t('home.featured.subtitle') }}</p>
            <h2>{{ t('home.featured.title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="product-grid" v-if="featuredProducts.length">
            <div class="product-card" v-for="product in featuredProducts" :key="product.id"
                 @click="$router.push('/products/' + product.id)">
              <div class="product-img">
                <img :src="product.image" :alt="product.name" />
                <div class="product-overlay"><span>{{ t('common.viewDetail') }}</span></div>
              </div>
              <div class="product-info">
                <span class="product-category">{{ product.categoryName }}</span>
                <h3>{{ product.name }}</h3>
                <p class="product-material">{{ product.material }}</p>
                <p class="product-price">¥{{ product.price }}</p>
              </div>
            </div>
          </div>
          <div class="text-center" style="margin-top: 40px;">
            <router-link to="/products" class="btn">{{ t('home.featured.viewAll') }}</router-link>
          </div>
        </div>
      </section>

      <section class="craft-preview">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">{{ t('home.craft.subtitle') }}</p>
            <h2>{{ t('home.craft.title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="craft-grid" v-if="stages.length">
            <div class="craft-card" v-for="(stage, index) in stages" :key="stage.id"
                 :style="{ backgroundImage: 'url(' + getStageImage(index) + ')' }">
              <div class="craft-overlay">
                <span class="craft-num">0{{ index + 1 }}</span>
                <h3>{{ stage.name }}</h3>
                <p>{{ stage.description }}</p>
              </div>
            </div>
          </div>
          <div class="text-center" style="margin-top: 40px;">
            <router-link to="/about" class="btn">{{ t('home.craft.learnMore') }}</router-link>
          </div>
        </div>
      </section>

      <section class="latest-news">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">{{ t('home.news.subtitle') }}</p>
            <h2>{{ t('home.news.title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="news-grid" v-if="newsList.length">
            <div class="news-card" v-for="news in newsList.slice(0, 3)" :key="news.id"
                 @click="$router.push('/news/' + news.id)">
              <div class="news-img">
                <img :src="news.image" :alt="news.title" />
              </div>
              <div class="news-info">
                <span class="news-date">{{ formatDate(news.publishDate) }}</span>
                <h3>{{ news.title }}</h3>
                <p>{{ news.summary }}</p>
                <span class="news-more">{{ t('common.readMore') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const { t, getCompanyInfo, getFeaturedProducts, getStages, getNewsList } = window.useI18n();
    const company = ref(null);
    const featuredProducts = ref([]);
    const stages = ref([]);
    const newsList = ref([]);

    const stageImages = [
      '/photo/01-raw-cashmere-fibers.jpg',
      '/photo/11-sweater-sketches.jpg',
      '/photo/21-industrial-knitting-machine.jpg',
      '/photo/46-yarn-dyeing-vat.jpg',
      '/photo/45-defect-checking.jpg',
      '/photo/84-box-packaging.jpg'
    ];
    const getStageImage = (index) => stageImages[index] || '/photo/30-factory-production-floor.jpg';

    const loadData = () => {
      company.value = getCompanyInfo();
      featuredProducts.value = getFeaturedProducts() || [];
      stages.value = getStages() || [];
      newsList.value = getNewsList() || [];
    };

    onMounted(loadData);

    return { company, featuredProducts, stages, newsList, getStageImage, formatDate, t };
  }
};

/* ============================================
   Products 页面
   ============================================ */
const Products = {
  template: `
    <div class="products-page">
      <div class="page-header" :style="{ backgroundImage: 'url(/photo/02-product-sweater.jpg)' }">
        <div class="header-overlay"></div>
        <div class="header-content">
          <h1>{{ t('products.header.title') }}</h1>
          <p>{{ t('products.header.desc') }}</p>
        </div>
      </div>

      <section class="filter-section">
        <div class="container">
          <div class="filter-tabs">
            <button :class="{ active: activeCategory === null }" @click="activeCategory = null">{{ t('common.all') }}</button>
            <button v-for="cat in categories" :key="cat.id"
                    :class="{ active: activeCategory === cat.id }"
                    @click="activeCategory = cat.id">
              {{ cat.name }}
            </button>
          </div>
        </div>
      </section>

      <section class="product-list-section">
        <div class="container">
          <div class="product-grid" v-if="products.length">
            <div class="product-card" v-for="product in products" :key="product.id"
                 @click="$router.push('/products/' + product.id)">
              <div class="product-img">
                <img :src="product.image" :alt="product.name" />
                <div class="product-overlay"><span>{{ t('common.viewDetail') }}</span></div>
                <div class="product-badge" v-if="product.isFeatured">{{ t('common.recommended') }}</div>
              </div>
              <div class="product-info">
                <span class="product-category">{{ product.categoryName }}</span>
                <h3>{{ product.name }}</h3>
                <p class="product-subtitle">{{ product.subtitle }}</p>
                <p class="product-material">{{ product.material }}</p>
                <p class="product-price">¥{{ product.price }}</p>
              </div>
            </div>
          </div>
          <div v-else class="loading"><p>{{ t('common.loading') }}</p></div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const { lang, t, getCategories, getProducts } = window.useI18n();
    const categories = ref([]);
    const products = ref([]);
    const activeCategory = ref(null);

    const loadProducts = () => {
      products.value = getProducts(activeCategory.value) || [];
    };

    watch(activeCategory, () => { loadProducts(); });
    watch(lang, () => {
      categories.value = getCategories() || [];
      loadProducts();
    });

    onMounted(() => {
      categories.value = getCategories() || [];
      loadProducts();
    });

    return { categories, products, activeCategory, t };
  }
};

/* ============================================
   Product Detail 页面
   ============================================ */
const ProductDetail = {
  template: `
    <div class="product-detail" v-if="product">
      <div class="breadcrumb-bar">
        <div class="container">
          <div class="breadcrumb">
            <router-link to="/">{{ t('nav.home') }}</router-link>
            <span class="sep">/</span>
            <router-link to="/products">{{ t('nav.products') }}</router-link>
            <span class="sep">/</span>
            <span class="current">{{ product.name }}</span>
          </div>
        </div>
      </div>

      <section class="product-main">
        <div class="container">
          <div class="product-detail-grid">
            <div class="product-detail-image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="product-detail-info">
              <span class="category-tag">{{ product.categoryName }}</span>
              <h1>{{ product.name }}</h1>
              <p class="subtitle">{{ product.subtitle }}</p>
              <div class="price-row">
                <span class="price-label">{{ t('common.priceLabel') }}</span>
                <span class="price">¥{{ product.price }}</span>
              </div>
              <div class="info-list">
                <div class="info-item">
                  <span class="info-label">{{ t('common.material') }}</span>
                  <span class="info-value">{{ product.material }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">{{ t('common.category') }}</span>
                  <span class="info-value">{{ product.categoryName }}</span>
                </div>
              </div>
              <div class="description">
                <h3>{{ t('common.productDesc') }}</h3>
                <p>{{ product.description }}</p>
              </div>
              <div class="actions">
                <router-link to="/contact" class="btn btn-primary">{{ t('common.inquire') }}</router-link>
                <router-link to="/products" class="btn">{{ t('common.backToList') }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="texture-section">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">{{ t('product.texture.subtitle') }}</p>
            <h2>{{ t('product.texture.title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="texture-grid">
            <div class="texture-card" v-for="tex in textures" :key="tex">
              <img :src="tex" :alt="t('product.texture.title')" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else-if="loading" class="loading-page"><p>{{ t('common.loading') }}</p></div>
    <div v-else class="loading-page"><p>{{ t('common.productNotFound') }}</p></div>
  `,
  setup() {
    const route = useRoute();
    const { lang, t, getProductDetail } = window.useI18n();
    const product = ref(null);
    const loading = ref(true);
    const textures = [
      '/photo/71-cable-knit-texture.jpg',
      '/photo/72-rib-knit-detail.jpg',
      '/photo/79-cashmere-halo.jpg',
      '/photo/80-stitch-definition.jpg'
    ];

    const loadProduct = () => {
      loading.value = true;
      product.value = getProductDetail(route.params.id);
      loading.value = false;
    };

    watch(() => route.params.id, () => {
      loadProduct();
      window.scrollTo({ top: 0 });
    });
    watch(lang, () => { loadProduct(); });

    onMounted(() => { loadProduct(); });

    return { product, textures, loading, t };
  }
};

/* ============================================
   News 页面
   ============================================ */
const News = {
  template: `
    <div class="news-page">
      <div class="page-header" :style="{ backgroundImage: 'url(/photo/94-featured-wall.jpg)' }">
        <div class="header-overlay"></div>
        <div class="header-content">
          <h1>{{ t('news.header.title') }}</h1>
          <p>{{ t('news.header.desc') }}</p>
        </div>
      </div>

      <section class="news-list-section">
        <div class="container">
          <div class="news-list" v-if="newsList.length">
            <div class="news-item" v-for="news in newsList" :key="news.id"
                 @click="$router.push('/news/' + news.id)">
              <div class="news-img">
                <img :src="news.image" :alt="news.title" />
              </div>
              <div class="news-content">
                <span class="news-date">{{ formatDate(news.publishDate) }}</span>
                <h2>{{ news.title }}</h2>
                <p class="news-summary">{{ news.summary }}</p>
                <span class="news-more">{{ t('common.readMore') }}</span>
              </div>
            </div>
          </div>
          <div v-else class="loading"><p>{{ t('common.loading') }}</p></div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const { lang, t, getNewsList } = window.useI18n();
    const newsList = ref([]);

    const loadNews = () => {
      newsList.value = getNewsList() || [];
    };

    watch(lang, loadNews);
    onMounted(loadNews);

    return { newsList, formatDate, t };
  }
};

/* ============================================
   News Detail 页面
   ============================================ */
const NewsDetail = {
  template: `
    <div class="news-detail" v-if="news">
      <div class="breadcrumb-bar">
        <div class="container">
          <div class="breadcrumb">
            <router-link to="/">{{ t('nav.home') }}</router-link>
            <span class="sep">/</span>
            <router-link to="/news">{{ t('nav.news') }}</router-link>
            <span class="sep">/</span>
            <span class="current">{{ news.title }}</span>
          </div>
        </div>
      </div>

      <article class="article">
        <div class="container">
          <div class="article-header">
            <span class="article-date">{{ formatDate(news.publishDate) }}</span>
            <h1>{{ news.title }}</h1>
            <p class="article-summary">{{ news.summary }}</p>
          </div>
          <div class="article-image">
            <img :src="news.image" :alt="news.title" />
          </div>
          <div class="article-body">
            <p v-for="(para, i) in contentParagraphs" :key="i">{{ para }}</p>
          </div>
          <div class="article-footer">
            <router-link to="/news" class="btn">{{ t('common.backToNews') }}</router-link>
          </div>
        </div>
      </article>

      <section class="related-news" v-if="relatedNews.length">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">{{ t('news.related') }}</p>
            <h2>{{ t('news.relatedTitle') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="related-grid">
            <div class="related-card" v-for="item in relatedNews" :key="item.id"
                 @click="goToNews(item.id)">
              <div class="related-img">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="related-info">
                <span class="related-date">{{ formatDate(item.publishDate) }}</span>
                <h3>{{ item.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else-if="loading" class="loading-page"><p>{{ t('common.loading') }}</p></div>
    <div v-else class="loading-page"><p>{{ t('common.newsNotFound') }}</p></div>
  `,
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { lang, t, getNewsDetail, getNewsList } = window.useI18n();
    const news = ref(null);
    const allNews = ref([]);
    const loading = ref(true);

    const contentParagraphs = computed(() => {
      if (!news.value?.content) return [];
      return news.value.content.split('\n').filter(p => p.trim());
    });

    const relatedNews = computed(() => {
      return allNews.value.filter(n => n.id !== news.value?.id).slice(0, 3);
    });

    const goToNews = (id) => { router.push('/news/' + id); };

    const loadNews = () => {
      loading.value = true;
      news.value = getNewsDetail(route.params.id);
      if (allNews.value.length === 0) {
        allNews.value = getNewsList() || [];
      }
      loading.value = false;
    };

    watch(() => route.params.id, () => {
      loadNews();
      window.scrollTo({ top: 0 });
    });
    watch(lang, loadNews);

    onMounted(() => { loadNews(); });

    return { news, contentParagraphs, relatedNews, goToNews, formatDate, loading, t };
  }
};

/* ============================================
   Gallery 页面
   ============================================ */
const Gallery = {
  template: `
    <div class="gallery-page">
      <div class="page-header" :style="{ backgroundImage: 'url(/photo/93-window-display.jpg)' }">
        <div class="header-overlay"></div>
        <div class="header-content">
          <h1>{{ t('gallery.header.title') }}</h1>
          <p>{{ t('gallery.header.desc') }}</p>
        </div>
      </div>

      <section class="filter-section">
        <div class="container">
          <div class="filter-tabs">
            <button :class="{ active: activeCategory === t('gallery.all') }" @click="selectCategory(t('gallery.all'))">{{ t('gallery.all') }}</button>
            <button v-for="cat in categories" :key="cat"
                    :class="{ active: activeCategory === cat }"
                    @click="selectCategory(cat)">
              {{ cat }}
            </button>
          </div>
        </div>
      </section>

      <section class="gallery-section">
        <div class="container">
          <div class="gallery-grid" v-if="galleryList.length">
            <div class="gallery-item" v-for="item in galleryList" :key="item.id"
                 @click="openLightbox(item)">
              <div class="gallery-img">
                <img :src="item.image" :alt="item.title" loading="lazy" />
              </div>
              <div class="gallery-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <span class="gallery-cat">{{ item.category }}</span>
              </div>
            </div>
          </div>
          <div v-else class="loading"><p>{{ t('common.loading') }}</p></div>
        </div>
      </section>

      <div class="lightbox" v-if="lightboxItem" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <img :src="lightboxItem.image" :alt="lightboxItem.title" />
          <div class="lightbox-info">
            <h3>{{ lightboxItem.title }}</h3>
            <p>{{ lightboxItem.description }}</p>
            <span class="lightbox-cat">{{ lightboxItem.category }}</span>
          </div>
          <button class="lightbox-close" @click="closeLightbox">✕</button>
        </div>
      </div>
    </div>
  `,
  setup() {
    const { lang, t, getGalleryCategories, getGalleryList } = window.useI18n();
    const categories = ref([]);
    const galleryList = ref([]);
    const activeCategory = ref('');
    const lightboxItem = ref(null);

    const loadGallery = () => {
      categories.value = getGalleryCategories() || [];
      const all = t('gallery.all');
      activeCategory.value = all;
      galleryList.value = getGalleryList() || [];
    };

    const selectCategory = (cat) => {
      activeCategory.value = cat;
      const all = t('gallery.all');
      if (cat === all) {
        galleryList.value = getGalleryList() || [];
      } else {
        galleryList.value = getGalleryList(cat) || [];
      }
    };

    const openLightbox = (item) => {
      lightboxItem.value = item;
      document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
      lightboxItem.value = null;
      document.body.style.overflow = '';
    };

    watch(lang, loadGallery);
    onMounted(loadGallery);

    return { categories, galleryList, activeCategory, lightboxItem, selectCategory, openLightbox, closeLightbox, t };
  }
};

/* ============================================
   Contact 页面
   ============================================ */
const Contact = {
  template: `
    <div class="contact-page">
      <div class="page-header" :style="{ backgroundImage: 'url(/photo/91-storefront-exterior.jpg)' }">
        <div class="header-overlay"></div>
        <div class="header-content">
          <h1>{{ t('contact.header.title') }}</h1>
          <p>{{ t('contact.header.desc') }}</p>
        </div>
      </div>

      <section class="form-section">
        <div class="container">
          <div class="contact-detail-grid">
            <div class="contact-detail-left">
              <div class="section-title" style="text-align: left;">
                <p class="subtitle">{{ t('contact.detail.subtitle') }}</p>
                <h2>{{ t('contact.detail.heading') }}</h2>
                <div class="divider" style="margin: 16px 0 0;"></div>
              </div>
              <p class="contact-desc">濮尚服饰期待与您携手合作，无论您有任何产品咨询、合作意向或售后需求，欢迎随时联系我们，我们将竭诚为您服务。</p>
              <div class="contact-items">
                <div class="contact-item">
                  <div class="contact-item-text">
                    <span class="contact-item-label">{{ t('contact.phone.title') }}</span>
                    <span class="contact-item-value">+86 19817578079</span>
                    <span class="contact-item-value">400-107-3819</span>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-item-text">
                    <span class="contact-item-label">{{ t('contact.email.title') }}</span>
                    <span class="contact-item-value">19817578079@163.com</span>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-item-text">
                    <span class="contact-item-label">{{ t('contact.hours.title') }}</span>
                    <span class="contact-item-value">{{ t('contact.hours.time') }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-detail-right">
              <div class="contact-map-placeholder">
                <img src="/photo/92-store-interior.jpg" alt="濮尚门店" class="contact-map-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const { t } = window.useI18n();
    return { t };
  }
};

/* ============================================
   About 页面
   ============================================ */
const About = {
  template: `
    <div class="about-page">
      <div class="page-header" :style="{ backgroundImage: 'url(/photo/06-heritage-atmosphere.jpg)' }">
        <div class="header-overlay"></div>
        <div class="header-content">
          <h1>{{ t('about.header.title') }}</h1>
          <p>{{ company?.slogan }}</p>
        </div>
      </div>

      <section class="story-section">
        <div class="container">
          <div class="story-grid">
            <div class="story-text">
              <div class="section-title" style="text-align: left;">
                <p class="subtitle">{{ t('about.story.subtitle') }}</p>
                <h2>{{ t('about.story.title') }}</h2>
                <div class="divider" style="margin: 16px 0 0;"></div>
              </div>
              <p class="story-desc">{{ company?.description }}</p>
              <p class="story-desc">{{ t('about.story.desc2') }}</p>
              <div class="story-values">
                <div class="value-item">
                  <h4>{{ t('about.values.craftsmanship') }}</h4>
                  <p>{{ t('about.values.craftsmanship.desc') }}</p>
                </div>
                <div class="value-item">
                  <h4>{{ t('about.values.quality') }}</h4>
                  <p>{{ t('about.values.quality.desc') }}</p>
                </div>
                <div class="value-item">
                  <h4>{{ t('about.values.innovation') }}</h4>
                  <p>{{ t('about.values.innovation.desc') }}</p>
                </div>
                <div class="value-item">
                  <h4>{{ t('about.values.eco') }}</h4>
                  <p>{{ t('about.values.eco.desc') }}</p>
                </div>
              </div>
            </div>
            <div class="story-images">
              <img src="/photo/04-brand-story.jpg" :alt="t('about.story.title')" class="story-img-main" />
              <img src="/photo/01-raw-cashmere-fibers.jpg" :alt="lang === 'zh' ? '原材料' : 'Raw Materials'" class="story-img-sub" />
            </div>
          </div>
        </div>
      </section>

      <section class="stages-section">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">{{ t('about.process.subtitle') }}</p>
            <h2>{{ t('about.process.title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="stages-grid" v-if="stages.length">
            <div class="stage-card" v-for="(stage, index) in stages" :key="stage.id"
                 :class="{ active: activeStage === stage.id }"
                 @click="selectStage(stage.id)">
              <div class="stage-num">0{{ index + 1 }}</div>
              <h3>{{ stage.name }}</h3>
              <p>{{ stage.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="process-section" v-if="processes.length">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">{{ activeStageName }}</p>
            <h2>{{ t('about.process.detail') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="process-grid">
            <div class="process-card" v-for="proc in processes" :key="proc.id">
              <div class="process-img">
                <img :src="proc.image" :alt="proc.title" />
              </div>
              <div class="process-info">
                <h3>{{ proc.title }}</h3>
                <p>{{ proc.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="factory-section">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">{{ t('about.facility.subtitle') }}</p>
            <h2>{{ t('about.facility.title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="factory-grid">
            <div class="factory-card">
              <img src="/photo/30-factory-production-floor.jpg" :alt="t('about.facility.workshop')" />
              <div class="factory-overlay">
                <h3>{{ t('about.facility.workshop') }}</h3>
                <p>{{ t('about.facility.workshop.desc') }}</p>
              </div>
            </div>
            <div class="factory-card">
              <img src="/photo/23-whole-garment-machine.jpg" :alt="t('about.facility.wgMachine')" />
              <div class="factory-overlay">
                <h3>{{ t('about.facility.wgMachine') }}</h3>
                <p>{{ t('about.facility.wgMachine.desc') }}</p>
              </div>
            </div>
            <div class="factory-card">
              <img src="/photo/100-brand-flagship.jpg" :alt="t('about.facility.flagship')" />
              <div class="factory-overlay">
                <h3>{{ t('about.facility.flagship') }}</h3>
                <p>{{ t('about.facility.flagship.desc') }}</p>
              </div>
            </div>
            <div class="factory-card">
              <img src="/photo/92-store-interior.jpg" :alt="t('about.facility.store')" />
              <div class="factory-overlay">
                <h3>{{ t('about.facility.store') }}</h3>
                <p>{{ t('about.facility.store.desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const { lang, t, getCompanyInfo, getStages, getProcesses } = window.useI18n();
    const company = ref(null);
    const stages = ref([]);
    const processes = ref([]);
    const activeStage = ref(null);

    const activeStageName = computed(() => {
      const stage = stages.value.find(s => s.id === activeStage.value);
      return stage ? stage.name : '';
    });

    const selectStage = (stageId) => {
      activeStage.value = stageId;
      processes.value = getProcesses(stageId) || [];
    };

    const loadData = () => {
      company.value = getCompanyInfo();
      stages.value = getStages() || [];
      if (stages.value.length > 0) {
        selectStage(stages.value[0].id);
      }
    };

    watch(lang, loadData);
    onMounted(loadData);

    return { company, stages, processes, activeStage, activeStageName, selectStage, lang, t };
  }
};

/* ============================================
   App 根组件
   ============================================ */
const App = {
  template: `
    <div>
      <Navbar />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <SiteFooter />
    </div>
  `,
  components: { Navbar, SiteFooter },
  setup() {
    const { lang } = window.useI18n();
    watch(lang, (newLang) => {
      document.documentElement.lang = newLang === 'zh' ? 'zh-CN' : 'en';
    });
  }
};

/* ============================================
   路由配置
   ============================================ */
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/products/:id', name: 'ProductDetail', component: ProductDetail },
  { path: '/about', name: 'About', component: About },
  { path: '/news', name: 'News', component: News },
  { path: '/news/:id', name: 'NewsDetail', component: NewsDetail },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: { template: '<div class="loading-page"><p style="font-size:1.2rem;">Page Not Found, <router-link to="/" style="color:var(--color-primary);">Back to Home</router-link></p></div>' } }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

/* ============================================
   创建应用
   ============================================ */
const app = createApp(App);
app.use(router);
app.mount('#app');
