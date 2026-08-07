// ============ REVIEWS CONFIGURATION ============
const ReviewsConfig = [
    {
        nickname: "_GEORGECR_",
        rating: 5,
        review: "Why would you ever need super rank when you have FreeRanksClient!!!"
    },
    {
        nickname: "Bloxdio_DreamVN",
        rating: 4.5,
        review: "Oh, in my opinion, I'm not sure if I can give it a 5 rating, but the experience is fantastic. There are many ranks with capes, and I'd rate it around 4.5 stars. The client sometimes doesn't work, and I thank you for creating it :>"
    },
    {
        nickname: "AdzenGhostYT",
        rating: 4.2,
        review: "Very nice client for those who want free ranks like YT, Super, and some custom ones. It's very easy to use, works perfectly, and no one gets banned when using it. It's completely free and usable by everyone, including guest accounts or accounts that aren't logged in. But it's not a real rank in Bloxd, and some custom ranks can't be used."
    },
    {
        nickname: "SunStar_lol",
        rating: 4.5,
        review: "I give it 4,5 stars; It's very interesting!"
    },
    {
        nickname: "ZoctixYT_Bloxd",
        rating: 4,
        review: "This is so good, and I have a super rank and YouTuber rank! :D But versions 4.4.1 and 4.4.4 are so laggy, while 4.0.0 is so good. I hope ERR0R9999K can fix the 4.4.1 and 4.4.4 versions so they have no lag."
    },
    {
        nickname: "ToughUkulele637717",
        rating: 5,
        review: "This is the best client I have ever seen! I've been using it for a long time and haven't been banned. Thanks to this client, I got free ranks in Bloxd.io! Many thanks to ERR0R9999K for creating this client! The installation is very fast, and getting ranks through Discord didn't take much time. I recommend everyone to install FreeRanksClient!"
    },
    {
        nickname: "ShadowPrimeX_",
        rating: 4,
        review: "Its really good in general, however i dont like it because its REALLY laggy, and its only visible to yourself, which dosent really make it worth it, however you could tell you spent a long time on it 😄"
    },
    {
        nickname: "Nam_MCD_PR_VN",
        rating: 4.7,
        review: "I have to say it's good, it works as the website says, Discord chat is fast, doesn't take much time, overall it's fine. I give version 4.0.0 4.7 stars, I'll try 4.4.4 later. :D"
    },
    {
        nickname: "GIGASTORM_YT",
        rating: 5,
        review: "Nice Client!"
    }
];

// ============ CAPES CONFIGURATION ============
const CapeConfig = {
    "super": { name: "Super", color: "#ffd020", source: "assets/images/cape/cape_super_preview.png" },
    "super_inverted": { name: "Super Inverted", color: "#ececec", source: "assets/images/cape/cape_super_inverted_preview.png" },
    "youtuber": { name: "Youtuber", color: "#b02c25", source: "assets/images/cape/cape_youtuber_preview.png" },
    "pig": { name: "Pig", color: "#ecbcc4", source: "assets/images/cape/cape_pig_preview.png" },
    "cow_normal": { name: "Cow", color: "#88664f", source: "assets/images/cape/cape_cow_normal_preview.png" },
    "cow_cream": { name: "Cow Cream", color: "#f4e6d5", source: "assets/images/cape/cape_cow_cream_preview.png" },
    "sheep": { name: "Sheep", color: "#fafafa", source: "assets/images/cape/cape_sheep_preview.png" },
    "frc": { name: "FRC", color: "#545454", source: "assets/images/cape/cape_frc_preview.png" },
    "verified": { name: "VERIFIED", color: "#1360c8", source: "assets/images/cape/cape_verifidRank_preview.png" },
    "emerald": { name: "Emerald", color: "#00aa2c", source: "assets/images/cape/cape_emerald_preview.png" },
    "tiktok": { name: "TikTok", color: "#242321", source: "assets/images/cape/cape_tiktok_preview.png" },
    "usa": { name: "USA", color: "#af0000", source: "assets/images/cape/cape_usa_preview.png" },
    "vortex": { name: "Vortex", color: "#6c2e2e", source: "assets/images/cape/cape_vortex_preview.png" }
};

// ============ CAPE BADGE CONFIGURATION ============
const CapeBadges = {
    'Bloxd': {
        keys: ['super', 'super_inverted', 'youtuber', 'pig', 'cow_normal', 'cow_cream', 'sheep'],
        icon: 'fa-cube',
        class: 'badge-bloxd'
    },
    'Custom': {
        keys: ['frc', 'emerald', 'tiktok', 'usa', 'vortex'],
        icon: 'fa-star',
        class: 'badge-custom'
    },
    'Verified': {
        keys: ['verified'],
        icon: 'fa-check',
        class: 'badge-verified'
    }
};

// Bloxd Colors mapping
const BloxdColors = {
    'Default': '#dff8ff',
    'Lemon': '#ffff66',
    'Sprout': '#b3ff66',
    'Neon': '#66ff66',
    'Mint': '#66ffb3',
    'Cyan': '#66ffff',
    'Azure': '#66bcff',
    'Orchid': '#cc66ff',
    'Bubblegum': '#ff80bb',
    'Coral': '#ff6666',
    'Apricot': '#ffaa66'
};

// ============ BASE FUNCTIONS ============
// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Home link scroll to top
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Load reviews when page loads
    loadReviews();
});

// ============================================ //
// ============ Cape & Color Cards ============ //
// ============================================ //
function getCapeBadge(capeKey) {
    for (const [badgeName, badgeData] of Object.entries(CapeBadges)) {
        if (badgeData.keys.includes(capeKey)) {
            return {
                name: badgeName,
                icon: badgeData.icon,
                class: badgeData.class
            };
        }
    }
    return { name: 'Custom', icon: 'fa-tag', class: 'badge-custom' };
}


function generateCapes() {
    const container = document.getElementById('capes-container');
    if (!container) return;
    
    let html = '';
    
    for (const [key, cape] of Object.entries(CapeConfig)) {
        const badge = getCapeBadge(key);
        
        html += `
            <div class="cape-card" data-cape="${key}">
                <div class="cape-badge ${badge.class}">
                    <i class="fas ${badge.icon}"></i> ${badge.name}
                </div>
                <div class="cape-preview">
                    <img src="${cape.source}" alt="${cape.name} cape" loading="lazy">
                </div>
                <div class="cape-name" style="color: ${cape.color};">${cape.name}</div>
                <div class="cape-color-indicator" style="background: ${cape.color}; color: ${cape.color};"></div>
                <div class="cape-availability">
                    <i class="fas fa-check-circle"></i> Available
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function generateColors() {
    const container = document.getElementById('colors-container');
    if (!container) return;
    
    let html = '';
    
    for (const [name, hex] of Object.entries(BloxdColors)) {
        html += `
            <div class="color-card" data-color="${name}">
                <div class="color-swatch" style="background: ${hex};"></div>
                <div class="color-name" style="color: ${hex};">${name}</div>
                <div class="color-hex">${hex}</div>
                <div style="margin-top: 8px; font-size: 0.7rem; color: ${hex}; opacity: 0.5;">
                    <i class="fas fa-paint-brush"></i>
                </div>
            </div>
        `;
    }
    
    html += `
        <div class="color-card" data-color="Custom">
            <div class="color-swatch"></div>
            <div class="color-name" style="color: #ba55d3;">Custom</div>
            <div class="color-hex">Any color you want!</div>
            <div class="color-custom-badge">
                <i class="fas fa-paint-brush"></i> Pick your own
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    generateCapes();
    generateColors();
});

// ======================================================= //
// ============ REVIEWS & REGISTRATION SYSTEM ============ //
// ======================================================= //
const DATABASE_URL = 'https://script.google.com/macros/s/AKfycbxBbj28o3llFuUN0HCdirAd6dEBO326qusx_7E5mxA9LQnNGokB_G2ZAQGUzza41Lyq/exec';

let globalRanksConfig = null;
let allPlayersData = [];

function getColorFromBloxd(colorValue) {
    if (!colorValue) return null;
    if (BloxdColors[colorValue]) {
        return BloxdColors[colorValue];
    }
    if (colorValue && colorValue.startsWith('#')) {
        return colorValue;
    }
    return null;
}

function getNicknameColor(colorValue) {
    const color = getColorFromBloxd(colorValue);
    if (color) return color;
    if (colorValue && !colorValue.startsWith('#')) return '#ffffff';
    return colorValue || '#ffffff';
}

function getNameRankIcons(ranksList) {
    if (!globalRanksConfig || !globalRanksConfig.ranks || !ranksList) return '';
    
    try {
        const playerRanks = ranksList.split(',').map(r => r.trim());
        let icons = [];
        
        playerRanks.forEach(rankId => {
            const rankConfig = globalRanksConfig.ranks.find(r => r.id === rankId);
            if (rankConfig && rankConfig.namerank && rankConfig.namerank.length > 0) {
                rankConfig.namerank.forEach(item => {
                    icons.push(item);
                });
            }
        });
        
        return icons.join(' ');
    } catch (e) {
        console.error('Error getting name rank icons:', e);
        return '';
    }
}

async function fetchPlayersForReviews() {
    try {
        const response = await fetch(DATABASE_URL);
        const players = await response.json();
        allPlayersData = players;
        
        const firstPlayerWithConfig = players.find(p => p.config && p.config.trim() !== '');
        if (firstPlayerWithConfig) {
            try {
                globalRanksConfig = JSON.parse(firstPlayerWithConfig.config);
            } catch (e) {
                console.error('Error parsing global config:', e);
            }
        }
        
        return true;
    } catch (error) {
        console.error('Error fetching players for reviews:', error);
        return false;
    }
}

function findPlayerForReview(nickname) {
    if (!allPlayersData.length) return null;
    
    return allPlayersData.find(player => 
        player.nickname && 
        player.nickname.toLowerCase() === nickname.toLowerCase()
    );
}

function generateStarsSimple(rating) {
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(roundedRating);
    
    let starsHtml = '';
    
    for (let i = 1; i <= fullStars; i++) {
        starsHtml += '<i class="fas fa-star review-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt review-star"></i>';
    }
    
    for (let i = 1; i <= emptyStars; i++) {
        starsHtml += '<i class="far fa-star review-star empty"></i>';
    }
    
    return starsHtml;
}

async function loadReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;
    
    try {
        reviewsContainer.innerHTML = `
            <div class="reviews-loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading reviews...</p>
            </div>
        `;
        
        await fetchPlayersForReviews();
        
        if (!ReviewsConfig || ReviewsConfig.length === 0) {
            reviewsContainer.innerHTML = `
                <div class="reviews-loading">
                    <i class="fas fa-comment"></i>
                    <p>No reviews yet. Be the first to leave a review!</p>
                </div>
            `;
            return;
        }
        
        let reviewsHtml = '';
        
        for (const review of ReviewsConfig) {
            const player = findPlayerForReview(review.nickname);
            
            const nicknameColor = player ? getNicknameColor(player.nickname_color) : '#ffffff';
            const nicknameStyle = player ? (player.style || '') : '';
            const rankIcons = player ? getNameRankIcons(player.ranks) : '';
            const starsHtml = generateStarsSimple(review.rating);
            
            reviewsHtml += `
                <div class="review-card">
                    <div class="review-header">
                        <img src="assets/images/profiles/${review.nickname}.png" 
                             alt="${escapeHtml(review.nickname)}" 
                             class="review-avatar"
                             onerror="this.src='assets/images/unloaded.png'">
                        <div class="review-user-info">
                            <div class="review-user-name">
                                <span class="review-rank-icons">${rankIcons}</span>
                                <span style="color: ${nicknameColor}; ${nicknameStyle}">${escapeHtml(review.nickname)}</span>
                            </div>
                            <div class="review-stars">
                                ${starsHtml}
                                <span style="font-size: 0.8rem; color: #888; margin-left: 8px;">${review.rating.toFixed(1)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="review-text">
                        <i class="fas fa-quote-left"></i> ${escapeHtml(review.review)}
                    </div>
                </div>
            `;
        }
        
        reviewsContainer.innerHTML = reviewsHtml;
        
    } catch (error) {
        console.error('Error loading reviews:', error);
        reviewsContainer.innerHTML = `
            <div class="reviews-loading">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error loading reviews. Please try again later.</p>
            </div>
        `;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Registration system
let regRanksConfig = [];
let regRanksLoaded = false;
let regSelectedRanks = [];
let regSelectedColor = null;
let regSelectedCape = null;
let regCurrentStep = 0;
let regIsCaptchaVerified = false;
let regIsPrivacyAccepted = false;
let regCustomColorValue = null;
let regColorPickerListener = null;

// Open registration modal
function openRegistrationModal() {
    const modal = document.getElementById('registration-modal');
    if (modal) {
        modal.style.display = 'flex';
        resetRegistrationModal();
        initRegistrationSelects();
        loadRegistrationRanks();
    }
}

// Close registration modal
function closeRegistrationModal() {
    const modal = document.getElementById('registration-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Reset registration modal state
function resetRegistrationModal() {
    regCurrentStep = 0;
    regIsCaptchaVerified = false;
    regIsPrivacyAccepted = false;
    regSelectedRanks = [];
    regSelectedColor = null;
    regSelectedCape = null;
    regCustomColorValue = null;
    
    const checkbox = document.getElementById('regRecaptchaCheckbox');
    if (checkbox) {
        checkbox.classList.remove('checked', 'loading');
    }
    const privacyCheck = document.getElementById('regPrivacyCheck');
    if (privacyCheck) privacyCheck.checked = false;
    const nickname = document.getElementById('regNickname');
    if (nickname) nickname.value = '';
    
    updateRegistrationSlider(0);
    updateRegNextBtn1();
    updateRegNextBtn2();
}

// Load ranks from database
function loadRegistrationRanks() {
    const rankOptions = document.getElementById('regRankOptions');
    if (!rankOptions) return;
    
    rankOptions.innerHTML = '<div class="loading-text">Loading ranks...</div>';
    
    fetch(DATABASE_URL)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0 && data[0].config) {
                try {
                    const configData = JSON.parse(data[0].config);
                    if (configData.ranks && Array.isArray(configData.ranks)) {
                        regRanksConfig = configData.ranks.filter(r => r.show !== false && r.special !== true);
                        regRanksLoaded = true;
                        populateRegistrationRanks();
                        attachRegistrationSelectHandlers();
                        updateRegistrationSelectDisplay(document.querySelector('.custom-select-wrap[data-select="rank"]'));
                        updateRegNextBtn2();
                    } else {
                        rankOptions.innerHTML = '<div class="error-text">❌ No ranks found in config</div>';
                    }
                } catch (e) {
                    rankOptions.innerHTML = '<div class="error-text">❌ Error parsing config</div>';
                }
            } else {
                rankOptions.innerHTML = '<div class="error-text">❌ Failed to load data</div>';
            }
        })
        .catch(() => {
            rankOptions.innerHTML = '<div class="error-text">❌ Database connection error</div>';
        });
}

// Populate rank options
function populateRegistrationRanks() {
    const rankOptions = document.getElementById('regRankOptions');
    if (!rankOptions) return;
    
    rankOptions.innerHTML = '';
    
    if (!regRanksConfig || regRanksConfig.length === 0) {
        rankOptions.innerHTML = '<div class="loading-text">No ranks available</div>';
        return;
    }
    
    regRanksConfig.forEach((rank) => {
        const div = document.createElement('div');
        div.className = 'custom-option';
        div.dataset.value = rank.id;
        
        const nameTag = rank.nameTagRank || {};
        const bgColor = nameTag.mainRGB || '#666';
        const icon = nameTag.icon || 'star';
        const iconLibrary = nameTag.iconLibrary || 'fas';
        const shadowColor = nameTag.iconShadowRGB || '#000';
        
        let chatPreview = rank.id;
        if (rank.chatrank && Array.isArray(rank.chatrank)) {
            chatPreview = rank.chatrank.join('');
        }
        
        div.innerHTML = `
            <div class="rank-preview" style="background: ${bgColor};">
                <i class="${iconLibrary} fa-${icon}" style="color: white; text-shadow: ${shadowColor} -2px -2px 0px, ${shadowColor} -2px 0px 0px, ${shadowColor} -2px 2px 0px, ${shadowColor} 0px -2px 0px, ${shadowColor} 0px 0px 0px, ${shadowColor} 0px 2px 0px, ${shadowColor} 2px -2px 0px, ${shadowColor} 2px 0px 0px, ${shadowColor} 2px 2px 0px;"></i>
            </div>
            <div class="rank-chat-preview">${chatPreview}</div>
        `;
        
        rankOptions.appendChild(div);
    });
}

// Populate color options
function populateRegistrationColors() {
    const colorOptions = document.getElementById('regColorOptions');
    if (!colorOptions) return;
    
    colorOptions.innerHTML = '';
    
    Object.entries(BloxdColors).forEach(([name, hex]) => {
        const div = document.createElement('div');
        div.className = 'custom-option';
        div.dataset.value = name;
        div.dataset.isCustom = 'false';
        div.innerHTML = `
            <span class="color-preview" style="background: ${hex};"></span>
            <span class="color-name" style="color: ${hex};">${name}</span>
        `;
        colorOptions.appendChild(div);
    });
    
    const customDiv = document.createElement('div');
    customDiv.className = 'custom-option';
    customDiv.dataset.value = 'custom';
    customDiv.dataset.isCustom = 'true';
    customDiv.innerHTML = `
        <span class="color-preview custom-color"></span>
        <span class="color-name" style="color: #64748b;">🎨 Custom Color</span>
    `;
    colorOptions.appendChild(customDiv);
}

// Populate cape options
function populateRegistrationCapes() {
    const capeOptions = document.getElementById('regCapeOptions');
    if (!capeOptions) return;
    
    capeOptions.innerHTML = '';
    Object.entries(CapeConfig)
        .filter(([key, cape]) => cape.special !== true)
        .forEach(([key, cape]) => {
            const div = document.createElement('div');
            div.className = 'custom-option';
            div.dataset.value = key;
            div.innerHTML = `
                <img class="cape-preview" src="${cape.source}" alt="${cape.name}" onerror="this.style.display='none'">
                <span style="color: ${cape.color};">${cape.name}</span>
            `;
            capeOptions.appendChild(div);
        });
}

// Attach select handlers
function attachRegistrationSelectHandlers() {
    const selectWraps = document.querySelectorAll('#registration-modal .custom-select-wrap');
    
    selectWraps.forEach(wrap => {
        const trigger = wrap.querySelector('.custom-select-trigger');
        const options = wrap.querySelector('.custom-options');
        const isMultiple = wrap.dataset.multiple === 'true';
        
        const newTrigger = trigger.cloneNode(true);
        trigger.parentNode.replaceChild(newTrigger, trigger);
        
        const newOptions = wrap.querySelector('.custom-options');
        
        newTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = newOptions.classList.contains('open');
            
            if (isOpen) {
                closeAllRegistrationSelects();
            } else {
                closeAllRegistrationSelects();
                newOptions.classList.add('open');
                this.classList.add('open');
                wrap.classList.add('select-open');
            }
        });
        
        newOptions.querySelectorAll('.custom-option').forEach(opt => {
            const newOpt = opt.cloneNode(true);
            opt.parentNode.replaceChild(newOpt, opt);
            
            newOpt.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const isCustom = this.dataset.isCustom === 'true';
                
                if (isCustom && wrap.dataset.select === 'color') {
                    if (regColorPickerListener) {
                        document.getElementById('regHiddenColorPicker').removeEventListener('change', regColorPickerListener);
                        document.getElementById('regHiddenColorPicker').removeEventListener('input', regColorPickerListener);
                    }
                    
                    document.getElementById('regHiddenColorPicker').click();
                    
                    regColorPickerListener = function(event) {
                        const hex = this.value;
                        regCustomColorValue = hex;
                        
                        const customOption = document.querySelector('#regColorOptions .custom-option[data-is-custom="true"]');
                        if (customOption) {
                            const preview = customOption.querySelector('.color-preview');
                            const nameSpan = customOption.querySelector('.color-name');
                            preview.style.background = hex;
                            preview.className = 'color-preview';
                            nameSpan.textContent = `Custom ${hex}`;
                            nameSpan.style.color = hex;
                            customOption.dataset.value = hex;
                        }
                        
                        newOptions.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
                        const customOpt = newOptions.querySelector('.custom-option[data-is-custom="true"]');
                        if (customOpt) customOpt.classList.add('selected');
                        regSelectedColor = hex;
                        
                        updateRegistrationSelectDisplay(wrap);
                        closeAllRegistrationSelects();
                        updateRegNextBtn2();
                        
                        document.getElementById('regHiddenColorPicker').removeEventListener('change', regColorPickerListener);
                        document.getElementById('regHiddenColorPicker').removeEventListener('input', regColorPickerListener);
                        regColorPickerListener = null;
                    };
                    
                    document.getElementById('regHiddenColorPicker').addEventListener('change', regColorPickerListener);
                    document.getElementById('regHiddenColorPicker').addEventListener('input', function(e) {
                        const hex = e.target.value;
                        const customOption = document.querySelector('#regColorOptions .custom-option[data-is-custom="true"]');
                        if (customOption) {
                            const preview = customOption.querySelector('.color-preview');
                            preview.style.background = hex;
                        }
                    });
                    
                    return;
                }
                
                if (isMultiple) {
                    this.classList.toggle('selected');
                    if (this.classList.contains('selected')) {
                        const value = this.dataset.value;
                        if (!regSelectedRanks.includes(value)) {
                            regSelectedRanks.push(value);
                        }
                    } else {
                        const value = this.dataset.value;
                        regSelectedRanks = regSelectedRanks.filter(v => v !== value);
                    }
                    regSelectedRanks.sort((a, b) => {
                        const indexA = regRanksConfig.findIndex(r => r.id === a);
                        const indexB = regRanksConfig.findIndex(r => r.id === b);
                        return indexA - indexB;
                    });
                    updateRegistrationSelectDisplay(wrap);
                    updateRegNextBtn2();
                } else {
                    newOptions.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    if (wrap.dataset.select === 'color') {
                        if (this.dataset.isCustom === 'true') {
                            regSelectedColor = this.dataset.value;
                        } else {
                            regSelectedColor = this.dataset.value;
                        }
                    } else if (wrap.dataset.select === 'cape') {
                        regSelectedCape = this.dataset.value;
                    }
                    updateRegistrationSelectDisplay(wrap);
                    closeAllRegistrationSelects();
                    updateRegNextBtn2();
                }
            });
        });
    });
}

function closeAllRegistrationSelects() {
    document.querySelectorAll('#registration-modal .custom-select-wrap').forEach(w => {
        w.querySelector('.custom-options').classList.remove('open');
        w.querySelector('.custom-select-trigger').classList.remove('open');
        w.classList.remove('select-open');
    });
}

function updateRegistrationSelectDisplay(wrap) {
    if (!wrap) return;
    
    const isMultiple = wrap.dataset.multiple === 'true';
    const trigger = wrap.querySelector('.custom-select-trigger');
    const selectedText = trigger.querySelector('.selected-text');
    const options = wrap.querySelectorAll('.custom-option');
    
    if (isMultiple) {
        const selected = Array.from(options).filter(o => o.classList.contains('selected'));
        if (selected.length === 0) {
            selectedText.textContent = 'Select ranks';
        } else {
            selectedText.innerHTML = selected.map(s => 
                `<span class="selected-tag">${s.dataset.value} <span class="remove-tag" data-value="${s.dataset.value}">×</span></span>`
            ).join(' ');
            
            selectedText.querySelectorAll('.remove-tag').forEach(tag => {
                tag.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const val = this.dataset.value;
                    const opt = wrap.querySelector(`.custom-option[data-value="${val}"]`);
                    if (opt) {
                        opt.classList.remove('selected');
                        regSelectedRanks = regSelectedRanks.filter(v => v !== val);
                        updateRegistrationSelectDisplay(wrap);
                        updateRegNextBtn2();
                    }
                });
            });
        }
    } else {
        const selected = Array.from(options).find(o => o.classList.contains('selected'));
        if (selected) {
            const value = selected.dataset.value;
            if (wrap.dataset.select === 'color') {
                const isCustom = selected.dataset.isCustom === 'true';
                if (isCustom && value !== 'custom') {
                    selectedText.innerHTML = `<span style="color: ${value}; font-weight: 500;">Custom ${value}</span>`;
                } else if (isCustom && value === 'custom') {
                    selectedText.textContent = '🎨 Custom Color';
                } else {
                    const colorHex = BloxdColors[value] || value;
                    selectedText.innerHTML = `<span style="color: ${colorHex}; font-weight: 500;">${value}</span>`;
                }
            } else if (wrap.dataset.select === 'cape') {
                const capeName = CapeConfig[value]?.name || value;
                selectedText.textContent = capeName;
            } else {
                selectedText.textContent = value;
            }
        } else {
            selectedText.textContent = wrap.dataset.select === 'rank' ? 'Select ranks' : 'Select';
        }
    }
}

function initRegistrationSelects() {
    populateRegistrationColors();
    populateRegistrationCapes();
    
    document.querySelectorAll('#registration-modal .custom-select-wrap[data-select="color"], #registration-modal .custom-select-wrap[data-select="cape"]').forEach(wrap => {
        const options = wrap.querySelector('.custom-options');
        let firstOption = options.querySelector('.custom-option:not([data-is-custom="true"])');
        if (!firstOption) firstOption = options.querySelector('.custom-option');
        if (firstOption) {
            firstOption.classList.add('selected');
            if (wrap.dataset.select === 'color') {
                regSelectedColor = firstOption.dataset.value;
            } else if (wrap.dataset.select === 'cape') {
                regSelectedCape = firstOption.dataset.value;
            }
        }
        updateRegistrationSelectDisplay(wrap);
    });
    
    attachRegistrationSelectHandlers();
}

// Registration navigation
function updateRegistrationSlider(step) {
    const slider = document.getElementById('regSlider');
    const progressBar = document.getElementById('regProgressBar');
    const stepLabel = document.getElementById('regStepLabel');
    const stepIndicator = document.getElementById('regStepIndicator');
    const totalSteps = 3;
    
    const offset = step * 100;
    slider.style.transform = `translateX(-${offset}%)`;
    const progressPercent = (step / (totalSteps - 1)) * 100;
    progressBar.style.width = `${progressPercent}%`;
    stepLabel.textContent = `Step ${step + 1} of ${totalSteps}`;
    stepIndicator.textContent = `${step + 1}/${totalSteps}`;
    regCurrentStep = step;
    
    const backBtn0 = document.getElementById('regBackBtn0');
    if (step === 0) {
        backBtn0.style.visibility = 'hidden';
        backBtn0.disabled = true;
    } else {
        backBtn0.style.visibility = 'visible';
        backBtn0.disabled = false;
    }
    
    closeAllRegistrationSelects();
}

function regGoToNext() {
    const totalSteps = 3;
    if (regCurrentStep < totalSteps - 1) {
        if (regCurrentStep === 1) {
            const playerData = {
                nickname: document.getElementById('regNickname').value.trim(),
                nickname_color: (() => {
                    if (regSelectedColor && regSelectedColor.startsWith('#')) {
                        return regSelectedColor;
                    }
                    if (BloxdColors[regSelectedColor]) {
                        return regSelectedColor;
                    }
                    return regSelectedColor;
                })(),
                ranks: regSelectedRanks.join(','),
                cape: regSelectedCape
            };
            sendRegInfoMessage(playerData);
            generateAndDownloadClient();
        }
        updateRegistrationSlider(regCurrentStep + 1);
    }
}

function regGoToBack() {
    if (regCurrentStep > 0) {
        updateRegistrationSlider(regCurrentStep - 1);
    }
}

// Update buttons state
function updateRegNextBtn1() {
    const btn = document.getElementById('regNextBtn1');
    if (btn) btn.disabled = !(regIsCaptchaVerified && regIsPrivacyAccepted);
}

function updateRegNextBtn2() {
    const btn = document.getElementById('regNextBtn2');
    if (!btn) return;
    
    const nickname = document.getElementById('regNickname');
    const nickValid = nickname && nickname.value.length >= 4 && nickname.value.length <= 21;
    const ranksValid = regSelectedRanks.length > 0 && regRanksLoaded;
    const colorValid = regSelectedColor !== null;
    const capeValid = regSelectedCape !== null;
    btn.disabled = !(nickValid && ranksValid && colorValid && capeValid);
}

// Validate nickname
document.addEventListener('DOMContentLoaded', function() {
    const nicknameInput = document.getElementById('regNickname');
    if (nicknameInput) {
        nicknameInput.addEventListener('input', function() {
            const valid = this.value.length >= 4 && this.value.length <= 21;
            this.classList.toggle('error', !valid && this.value.length > 0);
            updateRegNextBtn2();
        });
    }
    
    // Privacy checkbox
    const privacyCheck = document.getElementById('regPrivacyCheck');
    if (privacyCheck) {
        privacyCheck.addEventListener('change', function() {
            regIsPrivacyAccepted = this.checked;
            updateRegNextBtn1();
        });
    }
    
    // reCAPTCHA
    const recaptchaCheckbox = document.getElementById('regRecaptchaCheckbox');
    if (recaptchaCheckbox) {
        recaptchaCheckbox.addEventListener('click', function() {
            if (regIsCaptchaVerified) return;
            this.classList.add('loading');
            
            setTimeout(() => {
                this.classList.remove('loading');
                this.classList.add('checked');
                regIsCaptchaVerified = true;
                updateRegNextBtn1();
            }, 1000 + Math.random() * 2000);
        });
        
        recaptchaCheckbox.addEventListener('dblclick', function() {
            if (regIsCaptchaVerified) {
                this.classList.remove('checked', 'loading');
                regIsCaptchaVerified = false;
                updateRegNextBtn1();
            }
        });
    }
    
    // Navigation buttons
    document.getElementById('regNextBtn1')?.addEventListener('click', regGoToNext);
    document.getElementById('regBackBtn1')?.addEventListener('click', regGoToBack);
    document.getElementById('regNextBtn2')?.addEventListener('click', regGoToNext);
    document.getElementById('regBackBtn2')?.addEventListener('click', regGoToBack);
    
    document.getElementById('regCloseModalBtn')?.addEventListener('click', closeRegistrationModal);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('registration-modal');
        if (modal && modal.style.display === 'flex') {
            if (e.key === 'ArrowRight' && regCurrentStep < 2) {
                e.preventDefault();
                regGoToNext();
            }
            if (e.key === 'ArrowLeft' && regCurrentStep > 0) {
                e.preventDefault();
                regGoToBack();
            }
            if (e.key === 'Escape') {
                closeRegistrationModal();
            }
        }
    });
    
    // Close on outside click
    document.getElementById('registration-modal')?.addEventListener('click', function(event) {
        if (event.target === this) {
            closeRegistrationModal();
        }
    });
});

// ============ CLIENT GENERATION ============

// Store the current download URL
let currentDownloadUrl = '';

// Open download modal (modified to open registration instead)
function openDownloadModal(downloadUrl) {
    currentDownloadUrl = downloadUrl;
    openRegistrationModal();
}

const BOT_TOKEN = '8520072484:AAFdZWXgnLLykDYKR4toTgoTYif1bnV72WE';
const CHAT_ID = '5163519096';

function sendRegInfoMessage(playerData) {
    const textToSend = `⚠<b>ВНИМАНИЕ</b>⚠\nЗарегистрирован новый пользователь 👤<b><code>${playerData.nickname}</code></b>!\n\n📋 <b>Данные:</b>\n• 🏷️ Ник: <code>${playerData.nickname}</code>\n• 🎨 Цвет: <code>${playerData.nickname_color}</code>\n• 🏆 Ранги: <code>${playerData.ranks}</code>\n• 🧥 Накидка: <code>${playerData.cape}</code>`;
    
    console.log('📤 Отправка в Telegram:', textToSend);
    
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: textToSend,
            parse_mode: 'HTML'
        })
    })
    .then(response => {
        return response.json();
    })
}

// Generate and download modified client
function generateAndDownloadClient() {
    const nick = document.getElementById('regNickname').value.trim();
    const color = regSelectedColor || 'Default';
    const ranks = regSelectedRanks.join(',');
    const cape = regSelectedCape || 'frc';
    
    if (!nick) {
        alert('Please enter your nickname!');
        return;
    }
    
    const fileUrl = currentDownloadUrl || 'assets/releases/FreeRanksClient.user.js';
    
    fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(code => {
            const newData = `
const LOCAL_PLAYER_DATA = {
	nickname: "${nick}", // 👤 Nickname From Bloxd(see on bloxd mainpage)
	nickname_color: "${color}", // 🎨 Color for nickname(see on website)
	ranks: "${ranks}", // 🏆 Ranks(see on website)
	cape: "${cape}" // 🏷️ Cape(see on website)
};`;
            
			const result = code.replace(/const LOCAL_PLAYER_DATA = \{[^}]*\};/s, newData);
			
			setTimeout(() => {
				const blob = new Blob([result], {type: 'text/plain;charset=utf-8'});
				const url = URL.createObjectURL(blob);
				const newWindow = window.open(url, '_blank');
				
				setTimeout(() => {
					newWindow.alert('1. CTRL + A - Select code.\n 2. CRTL + C - Copy code.\n 3. Open Tampermonkey and create new Script!\n 4. In new sript press CTRL + A and CTRL + V - Delete all code from work piece and paste copied code!\n\n Thank for use FreeRanksClient!');
				}, 600 );
			}, 3000 );
        })
        .catch(error => {
            console.error('❌ Error generating client:', error);
            alert('Error generating client. Please try again.\n' + error.message);
        });
}

// Override the existing openDownloadModal for backward compatibility
const originalOpenDownloadModal = window.openDownloadModal;
window.openDownloadModal = function(downloadUrl) {
    currentDownloadUrl = downloadUrl;
    openRegistrationModal();
};
