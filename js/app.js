/**
 * 濮尚服饰 - 静态网站 Vue 应用
 * 使用 Vue 3 + Vue Router (CDN)
 */

const { createApp, ref, computed, onMounted, onUnmounted, watch } = Vue;
const { createRouter, createWebHashHistory, useRoute, useRouter } = VueRouter;

/* ============================================
   工具函数
   ============================================ */
function formatDate(dateStr) {
  if (!dateStr) return '';
  // 直接拆分字符串，避免 new Date() 的时区偏移问题
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
          <router-link to="/" @click="closeMenu">首页</router-link>
          <router-link to="/products" @click="closeMenu">产品中心</router-link>
          <router-link to="/about" @click="closeMenu">关于我们</router-link>
          <router-link to="/gallery" @click="closeMenu">品牌画廊</router-link>
          <router-link to="/news" @click="closeMenu">新闻资讯</router-link>
          <router-link to="/contact" @click="closeMenu">联系我们</router-link>
        </nav>
        <button class="menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `,
  setup() {
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

    return { isScrolled, menuOpen, toggleMenu, closeMenu };
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
              <h4>快速导航</h4>
              <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/products">产品中心</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
                <li><router-link to="/gallery">品牌画廊</router-link></li>
                <li><router-link to="/news">新闻资讯</router-link></li>
                <li><router-link to="/contact">联系我们</router-link></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>联系方式</h4>
              <ul class="contact-info">
                <li><span class="icon">📞</span><span>19817578079</span></li>
                <li><span class="icon">💬</span><span>微信扫码添加（见联系我们页）</span></li>
                <li><span class="icon">🕐</span><span>周一至周日 09:00 - 18:00</span></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>关注我们</h4>
              <div class="wechat-qr">
                <img src="/photo/connectus.jpg" alt="微信二维码" class="qr-img" />
                <p class="qr-label">扫码添加微信</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  setup() {
    const company = ref(null);
    onMounted(() => {
      const res = API.getCompanyInfo();
      company.value = res.data;
    });
    return { company };
  }
};

/* ============================================
   Home 页面
   ============================================ */
const Home = {
  template: `
    <div class="home">
      <section class="hero" :style="{ backgroundImage: 'url(' + (company?.heroImage || '/photo/01-hero-fashion.jpg') + ')' }">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">{{ company?.shortName || '濮尚' }}</h1>
          <p class="hero-slogan">{{ company?.slogan || '匠心编织 · 羊绒之选' }}</p>
          <p class="hero-desc">{{ company?.description?.substring(0, 80) }}...</p>
          <div class="hero-actions">
            <router-link to="/products" class="btn btn-primary">探索产品</router-link>
            <router-link to="/contact" class="btn">联系我们</router-link>
          </div>
        </div>
        <div class="scroll-hint">
          <span>SCROLL</span>
          <div class="scroll-line"></div>
        </div>
      </section>

      <section class="featured-products">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">FEATURED PRODUCTS</p>
            <h2>精选产品</h2>
            <div class="divider"></div>
          </div>
          <div class="product-grid" v-if="featuredProducts.length">
            <div class="product-card" v-for="product in featuredProducts" :key="product.id"
                 @click="$router.push('/products/' + product.id)">
              <div class="product-img">
                <img :src="product.image" :alt="product.name" />
                <div class="product-overlay"><span>查看详情</span></div>
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
            <router-link to="/products" class="btn">查看全部产品</router-link>
          </div>
        </div>
      </section>

      <section class="craft-preview">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">OUR CRAFT</p>
            <h2>匠心工艺</h2>
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
            <router-link to="/about" class="btn">了解更多</router-link>
          </div>
        </div>
      </section>

      <section class="latest-news">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">LATEST NEWS</p>
            <h2>品牌资讯</h2>
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
                <span class="news-more">阅读全文 →</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
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

    onMounted(() => {
      const companyRes = API.getCompanyInfo();
      const productRes = API.getFeaturedProducts();
      const stageRes = API.getStages();
      const newsRes = API.getNewsList();
      company.value = companyRes.data;
      featuredProducts.value = productRes.data || [];
      stages.value = stageRes.data || [];
      newsList.value = newsRes.data || [];
    });

    return { company, featuredProducts, stages, newsList, getStageImage, formatDate };
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
          <h1>产品中心</h1>
          <p>甄选优质天然纤维，匠心编织每一件作品</p>
        </div>
      </div>

      <section class="filter-section">
        <div class="container">
          <div class="filter-tabs">
            <button :class="{ active: activeCategory === null }" @click="activeCategory = null">全部产品</button>
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
                <div class="product-overlay"><span>查看详情</span></div>
                <div class="product-badge" v-if="product.isFeatured">推荐</div>
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
          <div v-else class="loading"><p>加载中...</p></div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const categories = ref([]);
    const products = ref([]);
    const activeCategory = ref(null);

    const loadProducts = () => {
      const res = API.getProducts(activeCategory.value);
      products.value = res.data || [];
    };

    watch(activeCategory, () => { loadProducts(); });

    onMounted(() => {
      const res = API.getCategories();
      categories.value = res.data || [];
      loadProducts();
    });

    return { categories, products, activeCategory };
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
            <router-link to="/">首页</router-link>
            <span class="sep">/</span>
            <router-link to="/products">产品中心</router-link>
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
                <span class="price-label">参考价格</span>
                <span class="price">¥{{ product.price }}</span>
              </div>
              <div class="info-list">
                <div class="info-item">
                  <span class="info-label">材质</span>
                  <span class="info-value">{{ product.material }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">分类</span>
                  <span class="info-value">{{ product.categoryName }}</span>
                </div>
              </div>
              <div class="description">
                <h3>产品描述</h3>
                <p>{{ product.description }}</p>
              </div>
              <div class="actions">
                <router-link to="/contact" class="btn btn-primary">咨询订购</router-link>
                <router-link to="/products" class="btn">返回列表</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="texture-section">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">TEXTURE DETAIL</p>
            <h2>面料纹理</h2>
            <div class="divider"></div>
          </div>
          <div class="texture-grid">
            <div class="texture-card" v-for="tex in textures" :key="tex">
              <img :src="tex" alt="面料纹理" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else-if="loading" class="loading-page"><p>加载中...</p></div>
    <div v-else class="loading-page"><p>未找到该产品。</p></div>
  `,
  setup() {
    const route = useRoute();
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
      const res = API.getProductDetail(route.params.id);
      product.value = res.data;
      loading.value = false;
    };

    watch(() => route.params.id, () => {
      loadProduct();
      window.scrollTo({ top: 0 });
    });

    onMounted(() => { loadProduct(); });

    return { product, textures, loading };
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
          <h1>新闻资讯</h1>
          <p>了解濮尚最新动态与品牌故事</p>
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
                <span class="news-more">阅读全文 →</span>
              </div>
            </div>
          </div>
          <div v-else class="loading"><p>加载中...</p></div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const newsList = ref([]);
    onMounted(() => {
      const res = API.getNewsList();
      newsList.value = res.data || [];
    });
    return { newsList, formatDate };
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
            <router-link to="/">首页</router-link>
            <span class="sep">/</span>
            <router-link to="/news">新闻资讯</router-link>
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
            <router-link to="/news" class="btn">返回新闻列表</router-link>
          </div>
        </div>
      </article>

      <section class="related-news" v-if="relatedNews.length">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">RELATED NEWS</p>
            <h2>相关资讯</h2>
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
    <div v-else-if="loading" class="loading-page"><p>加载中...</p></div>
    <div v-else class="loading-page"><p>未找到该新闻。</p></div>
  `,
  setup() {
    const route = useRoute();
    const router = useRouter();
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
      const res = API.getNewsDetail(route.params.id);
      news.value = res.data;
      if (allNews.value.length === 0) {
        const listRes = API.getNewsList();
        allNews.value = listRes.data || [];
      }
      loading.value = false;
    };

    watch(() => route.params.id, () => {
      loadNews();
      window.scrollTo({ top: 0 });
    });

    onMounted(() => { loadNews(); });

    return { news, contentParagraphs, relatedNews, goToNews, formatDate, loading };
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
          <h1>品牌画廊</h1>
          <p>光影之间，见证匠心之美</p>
        </div>
      </div>

      <section class="filter-section">
        <div class="container">
          <div class="filter-tabs">
            <button :class="{ active: activeCategory === '全部' }" @click="selectCategory('全部')">全部</button>
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
          <div v-else class="loading"><p>加载中...</p></div>
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
    const categories = ref([]);
    const galleryList = ref([]);
    const activeCategory = ref('全部');
    const lightboxItem = ref(null);

    const selectCategory = (cat) => {
      activeCategory.value = cat;
      if (cat === '全部') {
        const res = API.getGalleryList();
        galleryList.value = res.data || [];
      } else {
        const res = API.getGalleryList(cat);
        galleryList.value = res.data || [];
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

    onMounted(() => {
      const catRes = API.getGalleryCategories();
      const listRes = API.getGalleryList();
      categories.value = catRes.data || [];
      galleryList.value = listRes.data || [];
    });

    return { categories, galleryList, activeCategory, lightboxItem, selectCategory, openLightbox, closeLightbox };
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
          <h1>联系我们</h1>
          <p>期待与您携手，共创美好未来</p>
        </div>
      </div>

      <section class="info-cards-section">
        <div class="container">
          <div class="info-cards">
            <div class="info-card">
              <div class="info-icon">📞</div>
              <h3>联系电话</h3>
              <p class="phone-number">19817578079</p>
            </div>
            <div class="info-card">
              <div class="info-icon">💬</div>
              <h3>微信扫码</h3>
              <p>扫描下方二维码添加微信</p>
            </div>
            <div class="info-card">
              <div class="info-icon">🕐</div>
              <h3>营业时间</h3>
              <p>周一至周日 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      <section class="form-section">
        <div class="container">
          <div class="wechat-center">
            <div class="section-title">
              <p class="subtitle">WECHAT</p>
              <h2>微信联系</h2>
              <div class="divider"></div>
            </div>
            <p class="wechat-intro">扫描下方二维码，添加濮尚官方微信，获取最新产品资讯与专属服务。</p>
            <div class="qr-code-wrapper">
              <img src="/photo/connectus.jpg" alt="微信二维码" class="qr-code" />
              <p class="qr-tip">扫码添加微信</p>
            </div>
            <div class="phone-display">
              <span class="phone-label">服务热线</span>
              <span class="phone-value">19817578079</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    return {};
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
          <h1>关于濮尚</h1>
          <p>{{ company?.slogan || '匠心编织 · 羊绒之选' }}</p>
        </div>
      </div>

      <section class="story-section">
        <div class="container">
          <div class="story-grid">
            <div class="story-text">
              <div class="section-title" style="text-align: left;">
                <p class="subtitle">OUR STORY</p>
                <h2>品牌故事</h2>
                <div class="divider" style="margin: 16px 0 0;"></div>
              </div>
              <p class="story-desc">{{ company?.description }}</p>
              <p class="story-desc">从一根羊绒纤维到一件完美成衣，濮尚始终坚持对品质的极致追求。我们甄选全球优质天然纤维原料，引进国际先进的全成型编织设备，拥有经验丰富的工艺团队，每一道工序均严格把控，致力于为消费者提供兼具舒适与优雅的高端针织服饰。</p>
              <div class="story-values">
                <div class="value-item">
                  <h4>匠心精神</h4>
                  <p>每一件毛衣都凝聚着匠人的心血，从原料到成衣，精益求精。</p>
                </div>
                <div class="value-item">
                  <h4>品质承诺</h4>
                  <p>严格的质检标准，确保每一件成衣品质如一。</p>
                </div>
                <div class="value-item">
                  <h4>持续创新</h4>
                  <p>不断引进先进设备与工艺，以科技赋能传统纺织。</p>
                </div>
                <div class="value-item">
                  <h4>环保理念</h4>
                  <p>采用天然植物染料与环保工艺，践行可持续发展。</p>
                </div>
              </div>
            </div>
            <div class="story-images">
              <img src="/photo/04-brand-story.jpg" alt="品牌故事" class="story-img-main" />
              <img src="/photo/01-raw-cashmere-fibers.jpg" alt="原材料" class="story-img-sub" />
            </div>
          </div>
        </div>
      </section>

      <section class="stages-section">
        <div class="container">
          <div class="section-title">
            <p class="subtitle">PRODUCTION PROCESS</p>
            <h2>生产工艺流程</h2>
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
            <h2>工序详情</h2>
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
            <p class="subtitle">OUR FACILITY</p>
            <h2>工厂与门店</h2>
            <div class="divider"></div>
          </div>
          <div class="factory-grid">
            <div class="factory-card">
              <img src="/photo/30-factory-production-floor.jpg" alt="生产车间" />
              <div class="factory-overlay">
                <h3>现代化生产车间</h3>
                <p>自动化编织机排列整齐，明亮洁净的生产环境</p>
              </div>
            </div>
            <div class="factory-card">
              <img src="/photo/23-whole-garment-machine.jpg" alt="全成型设备" />
              <div class="factory-overlay">
                <h3>全成型编织设备</h3>
                <p>国际先进全成型编织机，一体成型无需缝合</p>
              </div>
            </div>
            <div class="factory-card">
              <img src="/photo/100-brand-flagship.jpg" alt="旗舰店" />
              <div class="factory-overlay">
                <h3>品牌旗舰店</h3>
                <p>双层挑高空间，高端陈列，沉浸式购物体验</p>
              </div>
            </div>
            <div class="factory-card">
              <img src="/photo/92-store-interior.jpg" alt="门店空间" />
              <div class="factory-overlay">
                <h3>门店空间</h3>
                <p>宽敞明亮的店内空间，极简陈列架精心布置</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
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
      const res = API.getProcesses(stageId);
      processes.value = res.data || [];
    };

    onMounted(() => {
      const companyRes = API.getCompanyInfo();
      const stageRes = API.getStages();
      company.value = companyRes.data;
      stages.value = stageRes.data || [];
      if (stages.value.length > 0) {
        selectStage(stages.value[0].id);
      }
    });

    return { company, stages, processes, activeStage, activeStageName, selectStage };
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
  components: { Navbar, SiteFooter }
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
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: { template: '<div class="loading-page"><p style="font-size:1.2rem;">页面不存在，<router-link to=\"/\" style=\"color:var(--color-primary);\">返回首页</router-link></p></div>' } }
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
