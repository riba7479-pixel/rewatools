// ===== REWATOOL WEBSITE - COMPLETE JAVASCRIPT =====
// Version: 2.0 | Author: REWATOOL | Date: 2024

// ===== WEBSITE CONFIGURATION =====
const SITE_CONFIG = {
    name: "REWATOOL",
    tagline: "300+ Tools | 100% Free",
    version: "2.0",
    currentYear: new Date().getFullYear()
};

// ===== ALL DATA =====
const categories = [
    { id: 1, name: "AI Tools", icon: "smart_toy", tools: 25, color: "#2563EB" },
    { id: 2, name: "PDF Tools", icon: "description", tools: 20, color: "#7C3AED" },
    { id: 3, name: "Image Tools", icon: "image", tools: 30, color: "#10B981" },
    { id: 4, name: "Video Tools", icon: "videocam", tools: 15, color: "#F59E0B" },
    { id: 5, name: "Audio Tools", icon: "audiotrack", tools: 12, color: "#EC4899" },
    { id: 6, name: "Text Tools", icon: "text_fields", tools: 18, color: "#8B5CF6" },
    { id: 7, name: "Web Tools", icon: "code", tools: 22, color: "#3B82F6" },
    { id: 8, name: "Security Tools", icon: "security", tools: 10, color: "#059669" },
    { id: 9, name: "Calculator Tools", icon: "calculate", tools: 25, color: "#DC2626" },
    { id: 10, name: "Design Tools", icon: "palette", tools: 15, color: "#D97706" },
    { id: 11, name: "Business Tools", icon: "business", tools: 12, color: "#1D4ED8" },
    { id: 12, name: "Social Media Tools", icon: "share", tools: 10, color: "#C026D3" }
];

const tools = [
    {
        id: 1,
        name: "AI Image Generator",
        category: "AI Tools",
        icon: "smart_toy",
        description: "Generate stunning AI images from text prompts",
        features: ["Text to Image", "Multiple Styles", "HD Quality", "Fast Generation"],
        rating: 4.9,
        reviews: 2450,
        isFeatured: true,
        isNew: false,
        usageCount: 125000
    },
    {
        id: 2,
        name: "PDF to Word Converter",
        category: "PDF Tools",
        icon: "description",
        description: "Convert PDF documents to editable Word format",
        features: ["Format Preservation", "OCR Support", "Batch Convert", "Fast Processing"],
        rating: 4.8,
        reviews: 1890,
        isFeatured: true,
        isNew: false,
        usageCount: 98000
    },
    {
        id: 3,
        name: "Video Compressor",
        category: "Video Tools",
        icon: "videocam",
        description: "Compress video files without quality loss",
        features: ["90% Size Reduce", "Quality Control", "Batch Process", "All Formats"],
        rating: 4.7,
        reviews: 1560,
        isFeatured: true,
        isNew: true,
        usageCount: 75000
    },
    {
        id: 4,
        name: "Audio Editor Pro",
        category: "Audio Tools",
        icon: "audiotrack",
        description: "Professional audio editing and processing",
        features: ["Trim & Cut", "Effects & Filters", "Noise Removal", "Export Options"],
        rating: 4.6,
        reviews: 1320,
        isFeatured: false,
        isNew: false,
        usageCount: 52000
    },
    {
        id: 5,
        name: "Text Summarizer",
        category: "Text Tools",
        icon: "text_fields",
        description: "Summarize long articles and documents",
        features: ["AI Summary", "Multiple Lengths", "Key Points", "Export Text"],
        rating: 4.5,
        reviews: 980,
        isFeatured: false,
        isNew: true,
        usageCount: 45000
    },
    {
        id: 6,
        name: "Password Generator",
        category: "Security Tools",
        icon: "security",
        description: "Generate strong and secure passwords",
        features: ["Custom Length", "Multiple Types", "Copy to Clipboard", "Save History"],
        rating: 4.8,
        reviews: 2100,
        isFeatured: true,
        isNew: false,
        usageCount: 150000
    },
    {
        id: 7,
        name: "Color Picker",
        category: "Design Tools",
        icon: "palette",
        description: "Pick colors from anywhere on screen",
        features: ["Eye Dropper", "Color Values", "Palettes", "Export CSS"],
        rating: 4.4,
        reviews: 760,
        isFeatured: false,
        isNew: false,
        usageCount: 32000
    },
    {
        id: 8,
        name: "QR Code Generator",
        category: "Business Tools",
        icon: "qr_code",
        description: "Create custom QR codes for any content",
        features: ["Custom Design", "Multiple Types", "Tracking", "High Resolution"],
        rating: 4.7,
        reviews: 1040,
        isFeatured: false,
        isNew: true,
        usageCount: 68000
    },
    {
        id: 9,
        name: "Image Compressor",
        category: "Image Tools",
        icon: "compress",
        description: "Compress images while maintaining quality",
        features: ["Bulk Compress", "Quality Control", "Format Support", "Fast Processing"],
        rating: 4.6,
        reviews: 1120,
        isFeatured: false,
        isNew: false,
        usageCount: 89000
    },
    {
        id: 10,
        name: "Unit Converter",
        category: "Calculator Tools",
        icon: "calculate",
        description: "Convert between various units and measurements",
        features: ["All Units", "Real-time", "History", "Offline Mode"],
        rating: 4.8,
        reviews: 1650,
        isFeatured: true,
        isNew: false,
        usageCount: 110000
    }
];

// Add more tools to reach 30+
for (let i = 11; i <= 35; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const toolTypes = [
        "Editor", "Converter", "Generator", "Analyzer", "Optimizer",
        "Validator", "Checker", "Formatter", "Extractor", "Compressor"
    ];
    const toolNames = [
        "Code", "Image", "Video", "Audio", "Text", "PDF", "CSS", "HTML",
        "JSON", "XML", "File", "Data", "Color", "Font", "Icon", "Logo",
        "Chart", "Graph", "Diagram", "Map", "Calendar", "Timer", "Calculator"
    ];
    
    const name = `${toolNames[Math.floor(Math.random() * toolNames.length)]} ${toolTypes[Math.floor(Math.random() * toolTypes.length)]}`;
    
    tools.push({
        id: i,
        name: name,
        category: category.name,
        icon: category.icon,
        description: `Professional ${name.toLowerCase()} tool with advanced features`,
        features: ["Fast Processing", "100% Free", "No Watermark", "Multiple Formats"],
        rating: (Math.random() * 1 + 4).toFixed(1),
        reviews: Math.floor(Math.random() * 5000),
        isFeatured: i <= 15,
        isNew: i >= 30,
        usageCount: Math.floor(Math.random() * 100000)
    });
}

// ===== DOM ELEMENTS =====
const elements = {
    // Loading
    loadingOverlay: document.getElementById('loadingOverlay'),
    
    // Theme
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.getElementById('themeIcon'),
    
    // Notification
    notification: document.getElementById('notification'),
    notificationMessage: document.getElementById('notificationMessage'),
    
    // Navigation
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    navLinks: document.querySelectorAll('.nav-links a'),
    
    // Search
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    
    // Categories
    dropdownCategories: document.getElementById('dropdownCategories'),
    categoriesGrid: document.getElementById('categoriesGrid'),
    footerCategories: document.getElementById('footerCategories'),
    
    // Carousel
    carouselTrack: document.getElementById('carouselTrack'),
    carouselPrev: document.getElementById('carouselPrev'),
    carouselNext: document.getElementById('carouselNext'),
    carouselDots: document.getElementById('carouselDots'),
    
    // Tools
    toolsGrid: document.getElementById('toolsGrid'),
    toolsSearch: document.getElementById('toolsSearch'),
    categoryFilter: document.getElementById('categoryFilter'),
    sortFilter: document.getElementById('sortFilter'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    
    // Contact Form
    contactForm: document.getElementById('contactForm'),
    
    // Stats
    statNumbers: document.querySelectorAll('.stat-number'),
    
    // Footer
    currentYear: document.getElementById('currentYear')
};

// ===== GLOBAL VARIABLES =====
let currentSlide = 0;
let currentPage = 1;
const TOOLS_PER_PAGE = 12;
let filteredTools = [...tools];
let carouselInterval;
let isLoading = false;

// ===== WEBSITE INITIALIZATION =====
function initWebsite() {
    console.log(`🚀 ${SITE_CONFIG.name} v${SITE_CONFIG.version} Initializing...`);
    
    // Hide loading after 1.5 seconds
    setTimeout(() => {
        if (elements.loadingOverlay) {
            elements.loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                elements.loadingOverlay.style.display = 'none';
            }, 300);
        }
    }, 1500);
    
    // Initialize all features
    initDarkMode();
    initMobileMenu();
    initSearch();
    initCategories();
    initCarousel();
    initTools();
    initContactForm();
    initSmoothScroll();
    initAnimations();
    
    // Update footer year
    if (elements.currentYear) {
        elements.currentYear.textContent = SITE_CONFIG.currentYear;
    }
    
    // Show welcome notification
    showNotification(`Welcome to ${SITE_CONFIG.name}! Explore 300+ free tools.`, 'success');
    
    console.log(`✅ ${SITE_CONFIG.name} successfully loaded!`);
}

// ===== DARK MODE =====
function initDarkMode() {
    if (!elements.themeToggle) return;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        if (elements.themeIcon) elements.themeIcon.textContent = 'light_mode';
    }
    
    elements.themeToggle.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        if (elements.themeIcon) elements.themeIcon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
    } else {
        if (elements.themeIcon) elements.themeIcon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'light');
    }
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    if (!elements.mobileMenuBtn || !elements.mobileMenu) return;
    
    elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.mobileMenu.contains(e.target) && 
            !elements.mobileMenuBtn.contains(e.target) &&
            elements.mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Close menu on link click
    elements.mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu();
        });
    });
}

function toggleMobileMenu() {
    elements.mobileMenu.classList.toggle('active');
    elements.mobileMenuBtn.innerHTML = elements.mobileMenu.classList.contains('active') 
        ? '<span class="material-icons-round">close</span>'
        : '<span class="material-icons-round">menu</span>';
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    if (!elements.notification || !elements.notificationMessage) return;
    
    // Set message and type
    elements.notificationMessage.textContent = message;
    elements.notification.className = `notification ${type}`;
    
    // Show notification
    elements.notification.classList.add('show');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
    if (!elements.searchInput || !elements.searchResults) return;
    
    let searchTimeout;
    
    elements.searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();
        
        if (query.length < 2) {
            elements.searchResults.classList.remove('active');
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.searchInput.contains(e.target) && 
            !elements.searchResults.contains(e.target)) {
            elements.searchResults.classList.remove('active');
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            elements.searchResults.classList.remove('active');
        }
    });
}

function performSearch(query) {
    const results = tools.filter(tool => {
        const searchIn = [
            tool.name.toLowerCase(),
            tool.category.toLowerCase(),
            tool.description.toLowerCase(),
            ...tool.features.map(f => f.toLowerCase())
        ].join(' ');
        
        return searchIn.includes(query);
    }).slice(0, 10);
    
    if (results.length > 0) {
        elements.searchResults.innerHTML = results.map(tool => `
            <div class="search-result-item" onclick="openTool(${tool.id})">
                <div class="search-result-icon">
                    <span class="material-icons-round">${tool.icon}</span>
                </div>
                <div class="search-result-content">
                    <strong>${tool.name}</strong>
                    <small>${tool.category} • ${tool.rating}★ (${tool.reviews})</small>
                    <p>${tool.description.substring(0, 60)}...</p>
                </div>
            </div>
        `).join('');
        elements.searchResults.classList.add('active');
    } else {
        elements.searchResults.innerHTML = `
            <div class="search-result-item">
                <span class="material-icons-round">search_off</span>
                <div>
                    <strong>No results found</strong>
                    <p>Try different keywords</p>
                </div>
            </div>
        `;
        elements.searchResults.classList.add('active');
    }
}

// ===== CATEGORIES =====
function initCategories() {
    // Dropdown Categories
    if (elements.dropdownCategories) {
        elements.dropdownCategories.innerHTML = categories.map(cat => `
            <a href="#${cat.name.toLowerCase().replace(/ /g, '-')}" class="dropdown-category" onclick="filterByCategory('${cat.name}')">
                <span class="material-icons-round">${cat.icon}</span>
                <strong>${cat.name}</strong>
                <small>${cat.tools}+ Tools</small>
            </a>
        `).join('');
    }
    
    // Categories Grid
    if (elements.categoriesGrid) {
        elements.categoriesGrid.innerHTML = categories.map(cat => `
            <div class="category-card fade-in" onclick="filterByCategory('${cat.name}')">
                <div class="category-icon" style="background: ${cat.color}20; border: 1px solid ${cat.color}40;">
                    <span class="material-icons-round" style="color: ${cat.color}">${cat.icon}</span>
                </div>
                <h3>${cat.name}</h3>
                <p class="category-description">${cat.tools}+ professional tools</p>
                <div class="category-stats">
                    <span class="tool-count">${cat.tools}+ Tools</span>
                    <span class="material-icons-round" style="color: ${cat.color}">arrow_forward</span>
                </div>
            </div>
        `).join('');
    }
    
    // Category Filter Options
    if (elements.categoryFilter) {
        elements.categoryFilter.innerHTML = `
            <option value="">All Categories</option>
            ${categories.map(cat => `
                <option value="${cat.name}">${cat.name} (${cat.tools})</option>
            `).join('')}
        `;
        
        elements.categoryFilter.addEventListener('change', filterTools);
    }
    
    // Footer Categories
    if (elements.footerCategories) {
        elements.footerCategories.innerHTML = categories.slice(0, 6).map(cat => `
            <li><a href="#${cat.name.toLowerCase().replace(/ /g, '-')}" onclick="filterByCategory('${cat.name}')">${cat.name}</a></li>
        `).join('');
    }
}

// ===== CAROUSEL =====
function initCarousel() {
    if (!elements.carouselTrack || !elements.carouselPrev || !elements.carouselNext) return;
    
    const featuredTools = tools.filter(tool => tool.isFeatured).slice(0, 5);
    
    if (featuredTools.length === 0) return;
    
    // Populate carousel
    elements.carouselTrack.innerHTML = featuredTools.map((tool, index) => `
        <div class="carousel-slide" data-index="${index}">
            <div class="carousel-slide-image">
                <div style="width: 100%; height: 300px; background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple)); border-radius: var(--radius-lg); display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; padding: 20px; text-align: center;">
                    <span class="material-icons-round" style="font-size: 4rem; margin-bottom: 1rem;">${tool.icon}</span>
                    <h2 style="font-size: 2rem; margin: 0;">${tool.name}</h2>
                    <p style="opacity: 0.9; margin-top: 0.5rem;">${tool.category}</p>
                </div>
            </div>
            <div class="carousel-slide-content">
                <h3>${tool.name}</h3>
                <div class="carousel-rating">
                    <span style="color: #F59E0B;">${'★'.repeat(Math.floor(tool.rating))}${'☆'.repeat(5-Math.floor(tool.rating))}</span>
                    <span>${tool.rating} (${tool.reviews.toLocaleString()} reviews)</span>
                </div>
                <p>${tool.description}</p>
                <ul class="carousel-features">
                    ${tool.features.map(f => `
                        <li><span class="material-icons-round" style="color: var(--accent-green); font-size: 1rem;">check_circle</span> ${f}</li>
                    `).join('')}
                </ul>
                <button class="btn btn-primary" onclick="openTool(${tool.id})">
                    <span class="material-icons-round">launch</span>
                    Launch Tool
                </button>
            </div>
        </div>
    `).join('');
    
    // Create dots
    if (elements.carouselDots) {
        elements.carouselDots.innerHTML = featuredTools.map((_, index) => `
            <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="goToSlide(${index})"></div>
        `).join('');
    }
    
    // Event listeners
    elements.carouselPrev.addEventListener('click', () => {
        goToSlide((currentSlide - 1 + featuredTools.length) % featuredTools.length);
    });
    
    elements.carouselNext.addEventListener('click', () => {
        goToSlide((currentSlide + 1) % featuredTools.length);
    });
    
    // Auto-rotate every 5 seconds
    carouselInterval = setInterval(() => {
        goToSlide((currentSlide + 1) % featuredTools.length);
    }, 5000);
    
    // Pause on hover
    elements.carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    elements.carouselTrack.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            goToSlide((currentSlide + 1) % featuredTools.length);
        }, 5000);
    });
    
    updateCarousel();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.caro
