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

// ============ НОВЫЙ DOWNLOAD MODAL (4 ШАГА) ============
let modalCurrentStep = 0;
const modalTotalSteps = 4;
let modalDownloadUrl = '';
let regData = {};

// Open download modal
function openDownloadModal(downloadUrl) {
    const modal = document.getElementById('download-modal');
    if (modal) {
        modal.style.display = 'flex';
        modalDownloadUrl = downloadUrl;
        modalCurrentStep = 0;
        updateModalSlider(0);
        resetModalForm();
    }
}

// Close download modal
function closeDownloadModal() {
    const modal = document.getElementById('download-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Reset form
function resetModalForm() {
    document.getElementById('regNickname').value = '';
    document.getElementById('regComment').value = '';
    
    // Reset selects
    document.querySelectorAll('.custom-select-trigger').forEach(t => {
        t.classList.remove('active');
        const text = t.querySelector('.selected-text');
        text.textContent = 'Выберите вариант';
        text.classList.add('placeholder');
    });
    document.querySelectorAll('.custom-select-dropdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.custom-select .option').forEach(o => o.classList.remove('selected'));
    
    document.getElementById('customColorRow').style.display = 'none';
    
    regData = {};
}

// Update slider
function updateModalSlider(step) {
    const slider = document.getElementById('modalSlider');
    const progress = document.getElementById('modalProgress');
    const label = document.getElementById('modalStepLabel');
    const indicator = document.getElementById('modalStepIndicator');
    
    slider.style.transform = `translateX(-${step * 100}%)`;
    progress.style.width = `${(step / (modalTotalSteps - 1)) * 100}%`;
    label.textContent = `Шаг ${step + 1} из ${modalTotalSteps}`;
    indicator.textContent = `${step + 1}/${modalTotalSteps}`;
    modalCurrentStep = step;
}

// Go to next step
function modalGoToNext() {
    if (modalCurrentStep < modalTotalSteps - 1) {
        // Validate step 2 before proceeding
        if (modalCurrentStep === 1) {
            const nickname = document.getElementById('regNickname').value.trim();
            const rank = document.querySelector('#rankSelect .option.selected');
            const color = document.querySelector('#colorSelect .option.selected');
            const cape = document.querySelector('#capeSelect .option.selected');
            
            if (!nickname) {
                ShowErrorModal('Пожалуйста, введите ваш ник в Bloxd.io');
                return;
            }
            if (!rank) {
                ShowErrorModal('Пожалуйста, выберите ранг');
                return;
            }
            if (!color) {
                ShowErrorModal('Пожалуйста, выберите цвет ника');
                return;
            }
            if (!cape) {
                ShowErrorModal('Пожалуйста, выберите накидку');
                return;
            }
            
            // Save data
            regData.nickname = nickname;
            regData.ranks = rank.dataset.value;
            regData.nickname_color = color.dataset.value;
            
            // Check if custom color
            if (color.dataset.value === 'custom') {
                const hex = document.getElementById('customColorHex').value.trim();
                if (hex && hex.startsWith('#')) {
                    regData.nickname_color = hex;
                } else {
                    ShowErrorModal('Пожалуйста, введите корректный HEX цвет (например: #cc66ff)');
                    return;
                }
            }
            
            regData.cape = cape.dataset.value;
        }
        
        updateModalSlider(modalCurrentStep + 1);
        
        // If step 4, start download
        if (modalCurrentStep === 3) {
            generateAndDownloadClient();
        }
    }
}

// Go to previous step
function modalGoToBack() {
    if (modalCurrentStep > 0) {
        updateModalSlider(modalCurrentStep - 1);
    }
}

// Show error in modal
function ShowErrorModal(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 999999;
        background: #1e1e1e; border-radius: 8px; padding: 12px 20px;
        border-left: 4px solid #ff4444;
        color: #fff; font-size: 14px; max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = '❌ ' + message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============ КАСТОМНЫЕ ВЫПАДАЮЩИЕ СПИСКИ ============
document.addEventListener('DOMContentLoaded', function() {
    // Custom select toggle
    document.querySelectorAll('.custom-select-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = this.parentElement.querySelector('.custom-select-dropdown');
            const isOpen = dropdown.classList.contains('open');
            
            // Close all other dropdowns
            document.querySelectorAll('.custom-select-dropdown.open').forEach(d => {
                d.classList.remove('open');
                d.parentElement.querySelector('.custom-select-trigger').classList.remove('active');
            });
            
            if (!isOpen) {
                dropdown.classList.add('open');
                this.classList.add('active');
            }
        });
    });
    
    // Custom select option click
    document.querySelectorAll('.custom-select .option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const container = this.closest('.custom-select');
            const trigger = container.querySelector('.custom-select-trigger');
            const text = trigger.querySelector('.selected-text');
            const dropdown = container.querySelector('.custom-select-dropdown');
            
            // Remove selected from all options in this dropdown
            container.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            
            // Update trigger text
            const label = this.textContent.trim();
            text.textContent = label;
            text.classList.remove('placeholder');
            
            // Close dropdown
            dropdown.classList.remove('open');
            trigger.classList.remove('active');
            
            // Show custom color input if custom selected
            if (this.dataset.value === 'custom' && container.id === 'colorSelect') {
                document.getElementById('customColorRow').style.display = 'flex';
            } else if (container.id === 'colorSelect') {
                document.getElementById('customColorRow').style.display = 'none';
            }
        });
    });
    
    // Close dropdowns on outside click
    document.addEventListener('click', function() {
        document.querySelectorAll('.custom-select-dropdown.open').forEach(d => {
            d.classList.remove('open');
            d.parentElement.querySelector('.custom-select-trigger').classList.remove('active');
        });
    });
    
    // Custom color picker sync
    const colorPicker = document.getElementById('customColorPicker');
    const colorHex = document.getElementById('customColorHex');
    
    if (colorPicker && colorHex) {
        colorPicker.addEventListener('input', function() {
            colorHex.value = this.value;
        });
        colorHex.addEventListener('input', function() {
            if (this.value.startsWith('#')) {
                colorPicker.value = this.value;
            }
        });
    }
    
    // Comment templates
    document.querySelectorAll('.comment-template-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const textarea = document.getElementById('regComment');
            const template = this.dataset.template;
            
            if (template === 'review') {
                textarea.value = '⭐ Rate: 5\nReview: FreeRanksClient is amazing! I got Super rank for free!';
            } else if (template === 'update') {
                const oldNick = document.getElementById('regNickname').value.trim() || 'Nickname_YT';
                textarea.value = `I want update nickname!\n\nOld Nickname: ${oldNick} > New NickName: NewNickname123_YT`;
            }
        });
    });
    
    // Navigation buttons
    document.getElementById('modalNext1').addEventListener('click', () => modalGoToNext());
    document.getElementById('modalNext2').addEventListener('click', () => modalGoToNext());
    document.getElementById('modalNext3').addEventListener('click', () => modalGoToNext());
    document.getElementById('modalBack2').addEventListener('click', () => modalGoToBack());
    document.getElementById('modalBack3').addEventListener('click', () => modalGoToBack());
    
    // Download button on last page
    document.getElementById('modalDownloadBtn').addEventListener('click', function() {
        generateAndDownloadClient();
    });
});

// ============ ГЕНЕРАЦИЯ КЛИЕНТА ============
function generateAndDownloadClient() {
    const url = modalDownloadUrl || 'assets/releases/FreeRanksClient.user.js';
    
    fetch(url)
        .then(response => response.text())
        .then(scriptContent => {
            // Fill LOCAL_PLAYER_DATA
            const filledScript = scriptContent.replace(
                /const LOCAL_PLAYER_DATA = \{[^}]*\}/,
                `const LOCAL_PLAYER_DATA = {
    nickname: "${regData.nickname || ''}",
    nickname_color: "${regData.nickname_color || 'Default'}",
    ranks: "${regData.ranks || ''}",
    cape: "${regData.cape || ''}"
}`
            );
            
            // Send comment to Telegram if exists
            const comment = document.getElementById('regComment').value.trim();
            if (comment) {
                sendToTelegram(comment);
            }
            
            // Download the file
            const blob = new Blob([filledScript], { type: 'application/javascript' });
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'FreeRanksClient.user.js';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);
            
            // Show success
            const btn = document.getElementById('modalDownloadBtn');
            btn.innerHTML = '<i class="fas fa-check"></i> Установка началась!';
            btn.disabled = true;
        })
        .catch(error => {
            console.error('Error generating client:', error);
            ShowErrorModal('Ошибка генерации клиента. Попробуйте ещё раз.');
        });
}

// ============ TELEGRAM БОТ ============
function sendToTelegram(message) {
    const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
    const CHAT_ID = 'YOUR_CHAT_ID_HERE';
    
    const data = {
        chat_id: CHAT_ID,
        text: `📝 Новый комментарий от игрока:\n\n${message}`,
        parse_mode: 'HTML'
    };
    
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Comment sent to Telegram');
        } else {
            console.error('Telegram error:', data);
        }
    })
    .catch(error => {
        console.error('Failed to send to Telegram:', error);
    });
}

// Close modal on Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeDownloadModal();
    }
});

// Close modal on click outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('download-modal');
    if (event.target === modal) {
        closeDownloadModal();
    }
});

// ============ REVIEWS ============
const _0x3b739d=_0x442c;(function(_0x55ee21,_0x457ac5){const _0x1375c6=_0x442c,_0x3a2f76=_0x55ee21();while(!![]){try{const _0x38908f=-parseInt(_0x1375c6(0x440,'DGQm'))/(0x83*0x3d+0x5*0x81+-0x21bb)+-parseInt(_0x1375c6(0x430,'j2Eo'))/(0x716+0x1e60+0x234*-0x11)*(-parseInt(_0x1375c6(0x1c9,'B^13'))/(-0x4bd*-0x6+-0x1*0x187c+0x1*-0x3ef))+parseInt(_0x1375c6(0x33c,'rH04'))/(-0x1*-0x184+-0x161d+0x149d*0x1)+parseInt(_0x1375c6(0x2f2,'*ES*'))/(-0xc55+-0xbbe+0x6*0x404)*(-parseInt(_0x1375c6(0x240,'5k$^'))/(-0x7bf*-0x5+0x266a+-0x19b5*0x3))+parseInt(_0x1375c6(0x3e8,'J(SD'))/(0x127*0x8+-0x1*0x990+0x5f)*(-parseInt(_0x1375c6(0x2f0,'0H$('))/(-0xac2+0xa*0x301+-0x1340))+-parseInt(_0x1375c6(0x3ee,'W5vp'))/(0xe85+0x1*0x161f+-0x249b)+parseInt(_0x1375c6(0x48c,'T!&9'))/(0x26ce+-0xfa3+0x1*-0x1721);if(_0x38908f===_0x457ac5)break;else _0x3a2f76['push'](_0x3a2f76['shift']());}catch(_0x265296){_0x3a2f76['push'](_0x3a2f76['shift']());}}}(_0x1b76,0x56742+0x4*-0x14ac7+0x85bb9));const _0x4eccdc=(function(){const _0x30b36d=_0x442c,_0x27fb8e={};_0x27fb8e[_0x30b36d(0x2e6,']jd$')]=function(_0xb9e479,_0x4482b5){return _0xb9e479===_0x4482b5;},_0x27fb8e[_0x30b36d(0x2b5,'j2Eo')]=_0x30b36d(0x2da,'K1E7'),_0x27fb8e[_0x30b36d(0x323,'DGQm')]=_0x30b36d(0x48a,'RSw8'),_0x27fb8e[_0x30b36d(0x27a,'q@s5')]=_0x30b36d(0x487,'E2)#');const _0x42dbd5=_0x27fb8e;let _0x282225=!![];return function(_0x4f9dc5,_0x2b3bd4){const _0x47a533=_0x30b36d,_0x4fa0cc={};_0x4fa0cc[_0x47a533(0x391,'j2Eo')]=_0x42dbd5[_0x47a533(0x490,')1Dv')];const _0x1417f0=_0x4fa0cc,_0x3ef160=_0x282225?function(){const _0x4627fd=_0x47a533;if(_0x2b3bd4){if(_0x42dbd5[_0x4627fd(0x354,'MxaY')](_0x42dbd5[_0x4627fd(0x398,'rH04')],_0x42dbd5['nPDLW'])){const _0x240a9b=_0x4771ec['creat'+'eElem'+_0x4627fd(0x449,'LjjU')](_0x1417f0[_0x4627fd(0x2cf,'mPW9')]);return _0x240a9b[_0x4627fd(0x371,'6aot')+_0x4627fd(0x49c,'Ckpt')+'t']=_0x8e2068,_0x240a9b[_0x4627fd(0x387,'p#ib')+'HTML'];}else{const _0x17266d=_0x2b3bd4[_0x4627fd(0x314,'HpN*')](_0x4f9dc5,arguments);return _0x2b3bd4=null,_0x17266d;}}}:function(){};return _0x282225=![],_0x3ef160;};}()),_0x223791=_0x4eccdc(this,function(){const _0x26fec9=_0x442c,_0x261754={};_0x261754[_0x26fec9(0x37d,'T!&9')]=_0x26fec9(0x352,'xK%v')+')+)+)'+'+$';const _0x45ecc4=_0x261754;if(_0x223791['bind']()[_0x26fec9(0x382,'%UY6')+'ing']()[_0x26fec9(0x469,'D@ez')+'Of']('\x0a')!==-(-0x1*-0x10fd+-0x3b8+-0xd44))return;return _0x223791[_0x26fec9(0x3fd,'EiPC')+_0x26fec9(0x344,'jf9N')]()['searc'+'h'](_0x45ecc4[_0x26fec9(0x317,'q7oN')])[_0x26fec9(0x264,'Za7T')+_0x26fec9(0x29d,'E2)#')]()[_0x26fec9(0x3cd,'#A@Q')+_0x26fec9(0x1be,'E2)#')+'r'](_0x223791)['searc'+'h'](_0x45ecc4[_0x26fec9(0x44a,']y#h')]);});_0x223791();const DATABASE_URL=_0x3b739d(0x2f3,'#A@Q')+_0x3b739d(0x49f,'LjjU')+_0x3b739d(0x2cb,'q@s5')+_0x3b739d(0x43b,'sTkU')+_0x3b739d(0x274,'rH04')+_0x3b739d(0x306,'mR9y')+'os/s/'+_0x3b739d(0x26a,'B^13')+_0x3b739d(0x2bd,'j2Eo')+'28o3l'+_0x3b739d(0x40b,'J(SD')+_0x3b739d(0x36d,'Ckpt')+_0x3b739d(0x4b4,'xK%v')+_0x3b739d(0x43e,'gNwx')+_0x3b739d(0x237,'xK%v')+_0x3b739d(0x32f,'Za7T')+_0x3b739d(0x33d,'q@s5')+_0x3b739d(0x236,'gNwx')+_0x3b739d(0x304,'EiPC')+'AQGUz'+_0x3b739d(0x2b7,'191x')+_0x3b739d(0x38d,'Za7T')+'ec';let globalRanksConfig=null,allPlayersData=[];function getColorFromBloxd(_0x37239b){const _0x2728a2=_0x3b739d,_0x3ec142={'pymZA':function(_0x213477,_0x114121){return _0x213477(_0x114121);},'uKUMO':function(_0x76dd3e,_0x15fbb5){return _0x76dd3e(_0x15fbb5);},'zfvnR':function(_0x553f9b,_0x1db3af){return _0x553f9b(_0x1db3af);},'jsDoU':_0x2728a2(0x2a4,'dwvI')};if(!_0x37239b)return null;if(BloxdColors[_0x37239b])return BloxdColors[_0x37239b];if(_0x37239b&&_0x37239b[_0x2728a2(0x1ec,'J(SD')+_0x2728a2(0x3ad,']jd$')]('#')){if(_0x3ec142[_0x2728a2(0x400,'rRWL')]!==_0x3ec142[_0x2728a2(0x338,'mPW9')]){const _0x1263c1=_0x3ec142['pymZA'](_0x539ada,_0x2968da[_0x2728a2(0x3da,'wADS')+_0x2728a2(0x31f,']jd$')]),_0x54c775=_0x1263c1?_0x3ec142[_0x2728a2(0x49a,'6aot')](_0x3b2bd0,_0x1263c1[_0x2728a2(0x273,'oWFB')+_0x2728a2(0x3a4,'q@s5')+_0x2728a2(0x364,'T!&9')]):_0x2728a2(0x2aa,'Za7T')+'ff',_0x2dd6a3=_0x1263c1?_0x1263c1[_0x2728a2(0x394,'sTkU')]||'':'',_0x415ee9=_0x1263c1?_0x3ec142[_0x2728a2(0x423,'sTkU')](_0x40f972,_0x1263c1['ranks']):'',_0x1c18fb=_0x3ec142[_0x2728a2(0x498,'0zSf')](_0x35bf00,_0x212990['ratin'+'g']);_0x5ac93b+=_0x2728a2(0x235,'p%T!')+_0x2728a2(0x2e3,'sTkU')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x29b,'191x')+'v\x20cla'+'ss=\x22r'+_0x2728a2(0x3c6,'q7oN')+'-card'+_0x2728a2(0x2f6,'B^13')+_0x2728a2(0x2e3,'sTkU')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x3c4,'^*WW')+_0x2728a2(0x38c,'5k$^')+_0x2728a2(0x2fc,']jd$')+_0x2728a2(0x446,'rK!Q')+_0x2728a2(0x43a,'rRWL')+_0x2728a2(0x3d7,'DGQm')+_0x2728a2(0x1c3,'wADS')+_0x2728a2(0x21c,'HpN*')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x343,'W5vp')+_0x2728a2(0x471,'p#ib')+_0x2728a2(0x21e,'GYXU')+_0x2728a2(0x36c,'mPW9')+'src=\x22'+_0x2728a2(0x239,'u0b4')+'s/ima'+_0x2728a2(0x2b2,'Za7T')+_0x2728a2(0x31c,'xK%v')+_0x2728a2(0x2d0,'jf9N')+_0x118c69[_0x2728a2(0x48d,'gNwx')+_0x2728a2(0x40a,'u0b4')]+(_0x2728a2(0x2c7,'6aot')+_0x2728a2(0x220,'MxaY')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x299,'J(SD')+_0x2728a2(0x1fe,'gNwx')+_0x2728a2(0x3b1,'6aot')+_0x2728a2(0x343,'W5vp')+'\x20alt='+'\x22')+_0x3ec142[_0x2728a2(0x3d4,'K1E7')](_0x584c60,_0x3a0437['nickn'+'ame'])+(_0x2728a2(0x435,'xK%v')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2728a2(0x44b,'rRWL')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x21e,'GYXU')+_0x2728a2(0x342,'^*WW')+_0x2728a2(0x3bc,'6aot')+'eview'+_0x2728a2(0x24e,'EiPC')+_0x2728a2(0x1d6,'rRWL')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x475,'0zSf')+_0x2728a2(0x432,'rH04')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x458,'LjjU')+_0x2728a2(0x2f4,'EiPC')+_0x2728a2(0x3f2,'W5vp')+_0x2728a2(0x320,'k$3N')+_0x2728a2(0x34e,'k$3N')+'=\x27ass'+_0x2728a2(0x260,']y#h')+_0x2728a2(0x45e,'q7oN')+'/unlo'+_0x2728a2(0x358,'xK%v')+_0x2728a2(0x438,'u0b4')+_0x2728a2(0x453,'RSw8')+_0x2728a2(0x206,'%UY6')+_0x2728a2(0x37c,'D@ez')+_0x2728a2(0x47f,'p%T!')+'\x20\x20\x20\x20\x20'+'\x20<div'+_0x2728a2(0x3f4,'0H$(')+_0x2728a2(0x421,'k$3N')+_0x2728a2(0x454,'#A@Q')+'user-'+_0x2728a2(0x1fc,'%UY6')+_0x2728a2(0x2b4,'#A@Q')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2728a2(0x462,'mPW9')+_0x2728a2(0x2de,'5k$^')+_0x2728a2(0x3c3,']y#h')+_0x2728a2(0x2b9,'c1zY')+_0x2728a2(0x349,'*ES*')+_0x2728a2(0x216,'*ES*')+_0x2728a2(0x460,'gNwx')+_0x2728a2(0x3a1,'B^13')+'ame\x22>'+_0x2728a2(0x33b,'*ES*')+_0x2728a2(0x410,'191x')+_0x2728a2(0x410,'191x')+_0x2728a2(0x370,'wADS')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20<s'+'pan\x20c'+_0x2728a2(0x2ee,'DGQm')+_0x2728a2(0x3fc,']y#h')+_0x2728a2(0x2ed,'%UY6')+'nk-ic'+_0x2728a2(0x30d,'gNwx'))+_0x415ee9+(_0x2728a2(0x1ff,'wADS')+_0x2728a2(0x266,'%UY6')+_0x2728a2(0x397,'DGQm')+_0x2728a2(0x3b3,'j2Eo')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x3c4,'^*WW')+_0x2728a2(0x1c6,'MxaY')+_0x2728a2(0x37c,'D@ez')+_0x2728a2(0x3ba,'xK%v')+_0x2728a2(0x461,'K1E7')+'e=\x22co'+_0x2728a2(0x2d7,'*ES*'))+_0x54c775+';\x20'+_0x2dd6a3+'\x22>'+_0x3ec142[_0x2728a2(0x40f,'jf9N')](_0xc351ae,_0xfe144a[_0x2728a2(0x4af,'DGQm')+_0x2728a2(0x369,'EiPC')])+(_0x2728a2(0x278,'5k$^')+_0x2728a2(0x37b,'#A@Q')+_0x2728a2(0x343,'W5vp')+_0x2728a2(0x3b1,'6aot')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x3c4,'^*WW')+_0x2728a2(0x47a,'c1zY')+'\x20</di'+_0x2728a2(0x241,'mR9y')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2728a2(0x396,'HpN*')+_0x2728a2(0x1e4,'jf9N')+'\x20\x20\x20\x20\x20'+'\x20<div'+_0x2728a2(0x39e,'sTkU')+_0x2728a2(0x23f,'oWFB')+'view-'+_0x2728a2(0x262,'^*WW')+'\x22>\x0a\x20\x20'+_0x2728a2(0x2e8,'q7oN')+_0x2728a2(0x410,'191x')+_0x2728a2(0x3b3,'j2Eo')+_0x2728a2(0x47a,'c1zY')+_0x2728a2(0x267,'*ES*')+_0x2728a2(0x3f9,'oWFB'))+_0x1c18fb+(_0x2728a2(0x1cf,'Za7T')+_0x2728a2(0x370,'wADS')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x44e,'K1E7')+_0x2728a2(0x471,'p#ib')+_0x2728a2(0x458,'LjjU')+_0x2728a2(0x1f0,')1Dv')+_0x2728a2(0x23e,'*ES*')+'tyle='+_0x2728a2(0x3c9,'c1zY')+'-size'+_0x2728a2(0x292,'k$3N')+'rem;\x20'+_0x2728a2(0x442,'^*WW')+_0x2728a2(0x204,'EiPC')+_0x2728a2(0x2a8,'MxaY')+'rgin-'+'left:'+'\x208px;'+'\x22>')+_0x3012b6[_0x2728a2(0x1ea,'Za7T')+'g'][_0x2728a2(0x474,'Za7T')+'ed'](-0x2f2+0x2*-0x35+0x3*0x11f)+('</spa'+_0x2728a2(0x450,'j2Eo')+_0x2728a2(0x44b,'rRWL')+_0x2728a2(0x458,'LjjU')+_0x2728a2(0x475,'0zSf')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2728a2(0x48b,'EiPC')+_0x2728a2(0x436,'xK%v')+_0x2728a2(0x43f,'rK!Q')+_0x2728a2(0x218,'xK%v')+_0x2728a2(0x2fd,'q@s5')+_0x2728a2(0x21e,'GYXU')+_0x2728a2(0x434,'jf9N')+_0x2728a2(0x1fa,'Za7T')+_0x2728a2(0x1fe,'gNwx')+_0x2728a2(0x4b0,')1Dv')+_0x2728a2(0x448,'RSw8')+_0x2728a2(0x46b,'wADS')+_0x2728a2(0x424,'dwvI')+'\x0a\x20\x20\x20\x20'+_0x2728a2(0x370,'wADS')+_0x2728a2(0x231,'dwvI')+_0x2728a2(0x366,'AZKh')+_0x2728a2(0x43d,'B^13')+_0x2728a2(0x1ed,'xK%v')+_0x2728a2(0x2d4,'LjjU')+_0x2728a2(0x288,'T!&9')+_0x2728a2(0x477,'c1zY')+_0x2728a2(0x497,'u0b4')+_0x2728a2(0x47a,'c1zY')+_0x2728a2(0x47a,'c1zY')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2728a2(0x4ac,'%UY6')+_0x2728a2(0x31b,'u0b4')+_0x2728a2(0x1f1,'191x')+'fa-qu'+_0x2728a2(0x42a,'H#*c')+_0x2728a2(0x375,']y#h')+'</i>\x20')+_0x3ec142[_0x2728a2(0x315,'%UY6')](_0x2d47e7,_0x2d7b1a['revie'+'w'])+(_0x2728a2(0x40d,'LjjU')+_0x2728a2(0x299,'J(SD')+'\x20\x20\x20\x20\x20'+_0x2728a2(0x3b5,'Ckpt')+_0x2728a2(0x3a7,']jd$')+_0x2728a2(0x23a,'#A@Q')+_0x2728a2(0x471,'p#ib')+_0x2728a2(0x3c3,']y#h')+_0x2728a2(0x33f,'DGQm')+'/div>'+_0x2728a2(0x3b2,'p#ib')+_0x2728a2(0x286,'E2)#')+_0x2728a2(0x300,'5k$^'));}else return _0x37239b;}return null;}function getNicknameColor(_0x5eeeaf){const _0x7fefe1=_0x3b739d,_0x358c2e={'uHEZS':function(_0x44781f,_0x26e5d6){return _0x44781f(_0x26e5d6);},'hpyvz':_0x7fefe1(0x25b,'oWFB')+'ff','qMblI':function(_0x1db949,_0x4944f1){return _0x1db949||_0x4944f1;}},_0x5e107d=_0x358c2e[_0x7fefe1(0x25e,'6aot')](getColorFromBloxd,_0x5eeeaf);if(_0x5e107d)return _0x5e107d;if(_0x5eeeaf&&!_0x5eeeaf['start'+_0x7fefe1(0x26b,'q7oN')]('#'))return _0x358c2e[_0x7fefe1(0x26d,'K1E7')];return _0x358c2e[_0x7fefe1(0x1fd,']y#h')](_0x5eeeaf,_0x7fefe1(0x443,'GYXU')+'ff');}function getNameRankIcons(_0x253866){const _0x58a686=_0x3b739d,_0x1e42a5={};_0x1e42a5[_0x58a686(0x32c,'sTkU')]=function(_0x77b6ff,_0x4d5070){return _0x77b6ff/_0x4d5070;},_0x1e42a5['tcEmc']=function(_0x43176f,_0x3b85dd){return _0x43176f>_0x3b85dd;},_0x1e42a5[_0x58a686(0x2e1,'j2Eo')]=function(_0x325a3e,_0x1c4f9f){return _0x325a3e===_0x1c4f9f;},_0x1e42a5[_0x58a686(0x4b1,'MxaY')]=_0x58a686(0x27e,'DGQm'),_0x1e42a5[_0x58a686(0x2fa,'W5vp')]=_0x58a686(0x4b2,'B^13')+'\x20gett'+_0x58a686(0x295,'%UY6')+_0x58a686(0x2a6,'LjjU')+_0x58a686(0x334,'191x')+_0x58a686(0x1eb,'*ES*');const _0x14a36e=_0x1e42a5;if(!globalRanksConfig||!globalRanksConfig[_0x58a686(0x225,'%UY6')]||!_0x253866)return'';try{const _0x12ad4d=_0x253866[_0x58a686(0x390,'6aot')](',')[_0x58a686(0x302,'H#*c')](_0x2d4f38=>_0x2d4f38[_0x58a686(0x246,'k$3N')]());let _0x3132a6=[];return _0x12ad4d[_0x58a686(0x28a,'B^13')+'ch'](_0x4939e9=>{const _0x16edb2=_0x58a686,_0x32c90c={'jpUwZ':function(_0x574f7d,_0x4ba98f){const _0x297d00=_0x442c;return _0x14a36e[_0x297d00(0x22e,']jd$')](_0x574f7d,_0x4ba98f);}},_0x1c7044=globalRanksConfig[_0x16edb2(0x30e,'sTkU')][_0x16edb2(0x1d7,'xK%v')](_0x25870e=>_0x25870e['id']===_0x4939e9);if(_0x1c7044&&_0x1c7044[_0x16edb2(0x3fa,'*ES*')+_0x16edb2(0x404,'p%T!')]&&_0x14a36e[_0x16edb2(0x250,'B^13')](_0x1c7044[_0x16edb2(0x414,'#A@Q')+_0x16edb2(0x205,'HpN*')][_0x16edb2(0x47d,'oWFB')+'h'],0x112*-0x1e+-0x26d9+0x46f5)){if(_0x14a36e['MIrug'](_0x14a36e['MNQLE'],_0x16edb2(0x35e,'mPW9')))_0x1c7044[_0x16edb2(0x414,'#A@Q')+_0x16edb2(0x25a,'rRWL')]['forEa'+'ch'](_0x384c01=>{const _0x440436=_0x16edb2;_0x3132a6[_0x440436(0x2b3,'rH04')](_0x384c01);});else{const _0x3e30a2=_0xfde85['round'](_0x32c90c['jpUwZ'](_0x473347,-0x1a58+-0xc3b*-0x1+0xe1d+0.25)*(0x161*0x9+-0xeaa*0x1+0x2a5));_0x1a08f7+=_0x16edb2(0x470,'Ckpt')+'ass=\x22'+_0x16edb2(0x2dc,'B^13')+'a-sta'+_0x16edb2(0x203,'c1zY')+_0x16edb2(0x2ec,']y#h')+'tar\x22\x20'+'style'+'=\x22bac'+_0x16edb2(0x41b,'j2Eo')+_0x16edb2(0x48f,'MxaY')+_0x16edb2(0x333,'0zSf')+_0x16edb2(0x257,'p%T!')+'ient('+_0x16edb2(0x329,'Ckpt')+_0x16edb2(0x2b1,'B^13')+_0x16edb2(0x341,'W5vp')+_0x3e30a2+(_0x16edb2(0x4a8,'6aot')+'55\x20')+_0x3e30a2+(_0x16edb2(0x413,'mR9y')+_0x16edb2(0x224,'gNwx')+'t-bac'+'kgrou'+_0x16edb2(0x4b3,'u0b4')+_0x16edb2(0x2e7,'rH04')+'ext;\x20'+_0x16edb2(0x319,'c1zY')+_0x16edb2(0x36b,'p%T!')+_0x16edb2(0x412,'mPW9')+_0x16edb2(0x326,'gNwx')+_0x16edb2(0x39b,'0H$(')+'lor:\x20'+_0x16edb2(0x26c,'0H$(')+_0x16edb2(0x28e,'sTkU')+'t;\x20-w'+'ebkit'+'-text'+'-fill'+_0x16edb2(0x3e6,'LjjU')+'r:\x20tr'+'anspa'+'rent;'+_0x16edb2(0x22d,'rH04')+'-shad'+_0x16edb2(0x20b,'j2Eo')+_0x16edb2(0x417,'dwvI')+'></i>');}}}),_0x3132a6['join']('\x20');}catch(_0x1f0384){return console[_0x58a686(0x367,'mR9y')](_0x14a36e[_0x58a686(0x325,'Ckpt')],_0x1f0384),'';}}async function fetchPlayersForReviews(){const _0xf9f099=_0x3b739d,_0x35ffe0={'GwmgM':function(_0x574788,_0x3c9fd6){return _0x574788(_0x3c9fd6);},'ROZtH':function(_0x1e4576,_0x2c49c6){return _0x1e4576===_0x2c49c6;},'DdArR':_0xf9f099(0x491,'%UY6'),'rRoCz':_0xf9f099(0x3ce,'#A@Q'),'KoGmf':function(_0x40e4e9,_0x17164c){return _0x40e4e9===_0x17164c;},'nLysM':_0xf9f099(0x481,'k$3N'),'VpNmA':_0xf9f099(0x37a,'dwvI')+_0xf9f099(0x385,'MxaY')+_0xf9f099(0x219,'q@s5')+_0xf9f099(0x1f9,'^*WW')+_0xf9f099(0x1db,'E2)#')+_0xf9f099(0x24a,')1Dv'),'spsJU':_0xf9f099(0x409,'q@s5')+_0xf9f099(0x2f7,'mPW9')+'hing\x20'+_0xf9f099(0x44f,')1Dv')+_0xf9f099(0x374,']y#h')+'r\x20rev'+_0xf9f099(0x393,'*ES*')};try{const _0x2f4b48=await _0x35ffe0[_0xf9f099(0x289,'B^13')](fetch,DATABASE_URL),_0x4430dd=await _0x2f4b48[_0xf9f099(0x478,'RSw8')]();allPlayersData=_0x4430dd;const _0x5f4a96=_0x4430dd['find'](_0x45a04a=>_0x45a04a[_0xf9f099(0x212,'W5vp')+'g']&&_0x45a04a[_0xf9f099(0x383,'dwvI')+'g'][_0xf9f099(0x468,'p%T!')]()!=='');if(_0x5f4a96){if(_0x35ffe0[_0xf9f099(0x494,'Ckpt')](_0x35ffe0[_0xf9f099(0x379,'%UY6')],_0x35ffe0[_0xf9f099(0x47e,'5k$^')]))_0x5b9cc7+=0x341*0xb+-0x2*-0xf4+0x25b2*-0x1;else try{globalRanksConfig=JSON[_0xf9f099(0x3e7,']jd$')](_0x5f4a96[_0xf9f099(0x47c,']jd$')+'g']);}catch(_0x261275){_0x35ffe0[_0xf9f099(0x1f7,']jd$')](_0x35ffe0[_0xf9f099(0x45f,'HpN*')],_0x35ffe0[_0xf9f099(0x1f5,'wADS')])?console[_0xf9f099(0x1c5,'0zSf')](_0x35ffe0[_0xf9f099(0x2bb,'#A@Q')],_0x261275):_0x59afb0[_0xf9f099(0x290,'%UY6')+'ank']['forEa'+'ch'](_0x49f06a=>{const _0x111996=_0xf9f099;_0x493450[_0x111996(0x46c,')1Dv')](_0x49f06a);});}}return!![];}catch(_0x433867){return console[_0xf9f099(0x4a6,'q@s5')](_0x35ffe0[_0xf9f099(0x4a1,'gNwx')],_0x433867),![];}}function findPlayerForReview(_0x108643){const _0x43bb01=_0x3b739d;if(!allPlayersData[_0x43bb01(0x439,'EiPC')+'h'])return null;return allPlayersData[_0x43bb01(0x3ac,']jd$')](_0x3baf19=>_0x3baf19[_0x43bb01(0x4af,'DGQm')+_0x43bb01(0x41c,']y#h')]&&_0x3baf19[_0x43bb01(0x215,'#A@Q')+_0x43bb01(0x41c,']y#h')]['toLow'+_0x43bb01(0x3e1,'mPW9')+'e']()===_0x108643[_0x43bb01(0x2a0,'5k$^')+_0x43bb01(0x2e2,'W5vp')+'e']());}function generateStarsSimple(_0x5be4d3){const _0x2cfee8=_0x3b739d,_0xac4a38={};_0xac4a38[_0x2cfee8(0x411,'B^13')]=function(_0x2f971e,_0xeca3bd){return _0x2f971e/_0xeca3bd;},_0xac4a38[_0x2cfee8(0x41f,'k$3N')]=function(_0x3bdc42,_0x25d0e2){return _0x3bdc42*_0x25d0e2;},_0xac4a38[_0x2cfee8(0x24f,'wADS')]=function(_0x39af1a,_0x57fd84){return _0x39af1a!==_0x57fd84;},_0xac4a38['QxMdX']=function(_0x2f9ad6,_0xfeab84){return _0x2f9ad6%_0xfeab84;},_0xac4a38[_0x2cfee8(0x1f6,'u0b4')]=function(_0x2a1da7,_0x52a835){return _0x2a1da7-_0x52a835;},_0xac4a38[_0x2cfee8(0x1c4,'q7oN')]=_0x2cfee8(0x2a1,'W5vp')+_0x2cfee8(0x3c1,'%UY6')+'fas\x20f'+_0x2cfee8(0x3db,'rK!Q')+'r\x20rev'+_0x2cfee8(0x3b7,'rH04')+_0x2cfee8(0x1e9,'xK%v')+'</i>',_0xac4a38['etOWN']='<i\x20cl'+_0x2cfee8(0x2ab,'E2)#')+_0x2cfee8(0x431,'*ES*')+'a-sta'+_0x2cfee8(0x3b4,'gNwx')+'f-alt'+_0x2cfee8(0x3e5,'^*WW')+_0x2cfee8(0x2bc,'q@s5')+_0x2cfee8(0x248,'EiPC')+_0x2cfee8(0x1bc,'q@s5'),_0xac4a38['Noauy']=function(_0x53894c,_0x19f25e){return _0x53894c<=_0x19f25e;};const _0x3f50e1=_0xac4a38,_0x416032=_0x3f50e1[_0x2cfee8(0x3a3,')1Dv')](Math[_0x2cfee8(0x27c,'RSw8')](_0x3f50e1[_0x2cfee8(0x2f9,')1Dv')](_0x5be4d3,-0x11f*-0x5+-0x1d06+0x3*0x7cf)),0xa*0x2bd+-0x1*-0x40a+-0x1f6a),_0x3f3bd3=Math[_0x2cfee8(0x33e,'q@s5')](_0x416032),_0x56d835=_0x3f50e1[_0x2cfee8(0x33a,'rRWL')](_0x3f50e1['QxMdX'](_0x416032,-0x1196+0x597+0xc00),0x116*-0x14+-0x1769+0x2d21),_0x1673c2=_0x3f50e1[_0x2cfee8(0x21b,'LjjU')](0x1d80+0x2*0x62d+-0x1*0x29d5,Math[_0x2cfee8(0x42b,'D@ez')](_0x416032));let _0x55a393='';for(let _0x3feddc=-0x1883*0x1+0x96e*0x2+0x5a8;_0x3feddc<=_0x3f3bd3;_0x3feddc++){_0x55a393+=_0x3f50e1['bXhrE'];}_0x56d835&&(_0x55a393+=_0x3f50e1[_0x2cfee8(0x35b,'T!&9')]);for(let _0x152bd7=-0xb*0x39+0x1*-0x207e+0x22f2;_0x3f50e1['Noauy'](_0x152bd7,_0x1673c2);_0x152bd7++){_0x55a393+=_0x2cfee8(0x351,'5k$^')+_0x2cfee8(0x3eb,'wADS')+_0x2cfee8(0x24c,'5k$^')+'a-sta'+_0x2cfee8(0x38e,'#A@Q')+'iew-s'+_0x2cfee8(0x406,'W5vp')+_0x2cfee8(0x4aa,'c1zY')+_0x2cfee8(0x49d,'T!&9');}return _0x55a393;}function generateStars(_0x43c2c7){const _0x182372=_0x3b739d,_0x3e18fd={};_0x3e18fd[_0x182372(0x3f7,'rH04')]=_0x182372(0x27f,'k$3N')+_0x182372(0x36a,'mPW9')+_0x182372(0x3dd,'p#ib')+'a-sta'+_0x182372(0x335,'5k$^')+_0x182372(0x221,'wADS')+_0x182372(0x1d8,'*ES*')+'ew-st'+_0x182372(0x2c8,'Ckpt')+_0x182372(0x463,'0H$('),_0x3e18fd[_0x182372(0x294,'^*WW')]=function(_0x13f3cb,_0x2841a1){return _0x13f3cb!==_0x2841a1;},_0x3e18fd['sHNoA']='(((.+'+')+)+)'+'+$',_0x3e18fd[_0x182372(0x201,'EiPC')]=function(_0xef29e5,_0x245a9b){return _0xef29e5+_0x245a9b;},_0x3e18fd['FIRnN']=function(_0x322736,_0x557610){return _0x322736*_0x557610;},_0x3e18fd['IuJgt']=function(_0xeea5c3,_0x365dfb){return _0xeea5c3-_0x365dfb;},_0x3e18fd[_0x182372(0x312,']y#h')]=function(_0x3f7175,_0x454ba7){return _0x3f7175>=_0x454ba7;},_0x3e18fd[_0x182372(0x214,'jf9N')]=function(_0x12a2e6,_0x39bc09){return _0x12a2e6<_0x39bc09;},_0x3e18fd[_0x182372(0x38f,'0H$(')]=function(_0x34604c,_0x24d532){return _0x34604c>=_0x24d532;},_0x3e18fd[_0x182372(0x359,'191x')]=function(_0x151a5c,_0x1ff53b){return _0x151a5c||_0x1ff53b;},_0x3e18fd[_0x182372(0x277,'EiPC')]=function(_0x3a51bb,_0x52b101){return _0x3a51bb-_0x52b101;},_0x3e18fd[_0x182372(0x30b,'MxaY')]=function(_0x1b5f9f,_0x29386b){return _0x1b5f9f<=_0x29386b;},_0x3e18fd['MJZCM']=function(_0x404a17,_0x23219c){return _0x404a17===_0x23219c;},_0x3e18fd['tFetC']=_0x182372(0x1d9,'J(SD'),_0x3e18fd[_0x182372(0x272,'E2)#')]='<i\x20cl'+_0x182372(0x4b5,'#A@Q')+'fas\x20f'+_0x182372(0x29a,'EiPC')+_0x182372(0x2af,'jf9N')+_0x182372(0x226,'W5vp')+'tar\x22>'+_0x182372(0x1d0,'LjjU'),_0x3e18fd[_0x182372(0x376,'B^13')]='pteEV',_0x3e18fd['poUFP']=function(_0x250224,_0x19c3d0){return _0x250224-_0x19c3d0;},_0x3e18fd[_0x182372(0x32d,'AZKh')]=_0x182372(0x3bb,'rK!Q'),_0x3e18fd['NHFSL']=_0x182372(0x482,'xK%v')+'ass=\x22'+_0x182372(0x44d,'GYXU')+_0x182372(0x308,'Za7T')+_0x182372(0x2e4,'p#ib')+_0x182372(0x484,'D@ez')+'tar\x20e'+_0x182372(0x24d,'T!&9')+_0x182372(0x21d,'Za7T');const _0x1c4122=_0x3e18fd,_0x43b84b=Math[_0x182372(0x346,'E2)#')](0x1fad+0x5f*-0x41+-0x78e,Math[_0x182372(0x399,'RSw8')](0x2418+0x5*0x2fb+-0x32fa,_0x43c2c7)),_0x9931c6=Math[_0x182372(0x420,'rH04')](_0x43b84b),_0x58468f=_0x1c4122['IuJgt'](_0x43b84b,_0x9931c6),_0x3ad90d=_0x1c4122[_0x182372(0x2c1,'6aot')](_0x58468f,-0x17d1+-0xdab+0x257c+0.25)&&_0x58468f<0x1e74+-0x10e9+0xd8b*-0x1+0.75,_0x5c0e4c=_0x58468f>=0x613*0x5+0x5a7*-0x3+-0x2*0x6b5+0.01&&_0x1c4122[_0x182372(0x2ba,'HpN*')](_0x58468f,-0x45c+0x1adb+0x167f*-0x1+0.25),_0x37f383=_0x1c4122[_0x182372(0x1c8,'AZKh')](_0x58468f,-0x3*-0x8e4+0x550+-0x1ffc+0.75);let _0x33d72d=_0x9931c6;(_0x1c4122[_0x182372(0x26e,'B^13')](_0x3ad90d,_0x5c0e4c)||_0x37f383)&&(_0x33d72d+=0x15c7+0x2ef*-0xd+0x105d);const _0x50f105=_0x1c4122['tYrsU'](0x506*-0x2+-0xfab+-0x2dc*-0x9,_0x33d72d);let _0x54ccda='';for(let _0x3aed8b=-0x832+0x169d+-0x1*0xe6a;_0x1c4122[_0x182372(0x20a,'DGQm')](_0x3aed8b,_0x9931c6);_0x3aed8b++){_0x1c4122[_0x182372(0x49e,'0zSf')](_0x182372(0x42f,'MxaY'),_0x1c4122[_0x182372(0x324,'J(SD')])?_0x54ccda+=_0x1c4122[_0x182372(0x4ad,'u0b4')]:_0x2eac2e+=wacGZq[_0x182372(0x3ca,'HpN*')];}if(_0x3ad90d){if(_0x1c4122[_0x182372(0x1dc,'*ES*')]===_0x1c4122['porFc'])_0x54ccda+=_0x1c4122[_0x182372(0x35f,'p%T!')];else{if(wacGZq[_0x182372(0x39a,'LjjU')](_0x376b06[_0x182372(0x2ac,'LjjU')]()['toStr'+_0x182372(0x425,'oWFB')]()[_0x182372(0x251,'p#ib')+'Of']('\x0a'),-(0x238c+0x2226+0x3ab*-0x13)))return;return _0x2a971d['toStr'+_0x182372(0x29e,'rH04')]()['searc'+'h'](wacGZq[_0x182372(0x4a7,'mR9y')])['toStr'+'ing']()[_0x182372(0x229,'D@ez')+_0x182372(0x4a3,'5k$^')+'r'](_0x40775e)[_0x182372(0x35a,'EiPC')+'h'](_0x182372(0x298,'E2)#')+_0x182372(0x39c,'jf9N')+'+$');}}else{if(_0x5c0e4c){const _0x52a008=Math[_0x182372(0x285,'J(SD')](_0x1c4122['FIRnN'](_0x58468f/(0x1e5c+0xc94+-0x2af0+0.25),-0x1f3d+0xa*0x182+0x108d));_0x54ccda+=_0x182372(0x3d0,'D@ez')+_0x182372(0x23c,'k$3N')+_0x182372(0x3ea,'E2)#')+_0x182372(0x336,'#A@Q')+_0x182372(0x2d9,'5k$^')+'iew-s'+_0x182372(0x473,'rRWL')+_0x182372(0x4a0,'p%T!')+_0x182372(0x3df,'rK!Q')+_0x182372(0x3af,'T!&9')+_0x182372(0x41e,'mPW9')+_0x182372(0x256,'H#*c')+_0x182372(0x1d5,'wADS')+'ient('+_0x182372(0x2e5,'wADS')+_0x182372(0x307,'p%T!')+_0x182372(0x32a,'k$3N')+_0x52a008+('%,\x20#5'+_0x182372(0x380,'T!&9'))+_0x52a008+(_0x182372(0x429,'LjjU')+_0x182372(0x2bf,'mPW9')+_0x182372(0x2dd,'%UY6')+_0x182372(0x1e6,'6aot')+_0x182372(0x377,'sTkU')+'ip:\x20t'+_0x182372(0x457,'wADS')+_0x182372(0x444,'dwvI')+_0x182372(0x485,'k$3N')+_0x182372(0x4a5,'q@s5')+_0x182372(0x35c,'W5vp')+_0x182372(0x318,'191x')+_0x182372(0x22b,'c1zY')+_0x182372(0x26c,'0H$(')+_0x182372(0x210,'191x')+_0x182372(0x3d1,'Ckpt')+_0x182372(0x3bd,'sTkU')+_0x182372(0x332,'DGQm')+_0x182372(0x392,'0H$(')+_0x182372(0x3fb,'AZKh')+_0x182372(0x355,'p#ib')+_0x182372(0x243,'^*WW')+_0x182372(0x2f8,'*ES*')+_0x182372(0x37f,'q@s5')+_0x182372(0x2d8,'q7oN')+_0x182372(0x39d,'rH04')+_0x182372(0x230,'H#*c')+'></i>');}else{if(_0x37f383){if(_0x1c4122[_0x182372(0x3cb,'rK!Q')]('SciCF',_0x182372(0x1c7,'191x'))){const _0x2c916a=Math[_0x182372(0x422,'191x')](_0x1c4122[_0x182372(0x3fe,'DGQm')](_0x1c4122['poUFP'](_0x58468f,0x1c1b+-0x1*0x2b9+-0x1962+0.75)/(0x1ac6*0x1+-0x51*0x71+0x13*0x79+0.25),0x5cc+-0x25*0xbc+0x15c4)+(-0xfa7+0x1215+0x1*-0x223));_0x54ccda+=_0x182372(0x437,'jf9N')+_0x182372(0x3eb,'wADS')+_0x182372(0x360,'sTkU')+_0x182372(0x202,'DGQm')+_0x182372(0x402,'0zSf')+_0x182372(0x2fe,']jd$')+'tar\x22\x20'+'style'+_0x182372(0x46a,'T!&9')+'kgrou'+_0x182372(0x322,'gNwx')+_0x182372(0x2d2,'RSw8')+_0x182372(0x1d5,'wADS')+_0x182372(0x1d2,'mR9y')+_0x182372(0x3dc,'q@s5')+_0x182372(0x46e,'rH04')+_0x182372(0x310,']jd$')+_0x2c916a+('%,\x20#5'+_0x182372(0x46d,'B^13'))+_0x2c916a+(_0x182372(0x381,'DGQm')+_0x182372(0x32e,'%UY6')+_0x182372(0x428,'p#ib')+_0x182372(0x353,'GYXU')+'nd-cl'+_0x182372(0x43c,'p%T!')+'ext;\x20'+_0x182372(0x415,'LjjU')+'round'+_0x182372(0x42d,'wADS')+_0x182372(0x321,']jd$')+'t;\x20co'+_0x182372(0x276,'0zSf')+_0x182372(0x40e,'%UY6')+_0x182372(0x3e2,'E2)#')+_0x182372(0x41a,'AZKh')+_0x182372(0x41d,'rRWL')+_0x182372(0x2ff,'J(SD')+'-fill'+_0x182372(0x309,'j2Eo')+_0x182372(0x483,'#A@Q')+_0x182372(0x328,'dwvI')+_0x182372(0x20f,'W5vp')+'\x20text'+_0x182372(0x2b0,']jd$')+_0x182372(0x493,'c1zY')+_0x182372(0x426,'E2)#')+_0x182372(0x1c1,'MxaY'));}else return _0x1cc8d8['error'](_0x182372(0x1e5,'p%T!')+_0x182372(0x451,'RSw8')+_0x182372(0x313,'oWFB')+_0x182372(0x433,'gNwx')+_0x182372(0x20c,'mPW9')+_0x182372(0x30c,'mR9y'),_0x2e6c40),'';}}}for(let _0x4f9401=0x60f*-0x1+-0x9f*0x2f+0x2341;_0x4f9401<=_0x50f105;_0x4f9401++){if(_0x1c4122[_0x182372(0x3e4,'rRWL')]!==_0x1c4122[_0x182372(0x1e0,'oWFB')]){const _0x295806=_0x41661d[_0x182372(0x3b0,'rH04')](_0x1c4122[_0x182372(0x261,'c1zY')](_0x1c4122[_0x182372(0x357,'p%T!')](_0x1c4122[_0x182372(0x3a5,'B^13')](_0x56d3f4,-0x1*-0x2398+0x62a+0x1*-0x29c2+0.75)/(0x1*0x209b+0x1c9e+0x3d39*-0x1+0.25),0x8c9+0x197d+0x1*-0x21e2),0x99f+0x1*0x18bb+-0x220f));_0x4ca713+=_0x182372(0x27b,'mPW9')+_0x182372(0x3d3,'Ckpt')+_0x182372(0x1bf,'6aot')+_0x182372(0x345,'0zSf')+_0x182372(0x2f1,'q7oN')+_0x182372(0x405,'rK!Q')+_0x182372(0x2c9,']jd$')+_0x182372(0x2cd,'%UY6')+'=\x22bac'+_0x182372(0x269,'rRWL')+_0x182372(0x36e,'AZKh')+'inear'+_0x182372(0x2d5,'EiPC')+'ient('+_0x182372(0x372,'RSw8')+_0x182372(0x24b,'*ES*')+_0x182372(0x1e7,'wADS')+_0x295806+(_0x182372(0x316,'E2)#')+_0x182372(0x363,'oWFB'))+_0x295806+(_0x182372(0x2c2,'H#*c')+_0x182372(0x268,'K1E7')+_0x182372(0x2eb,'LjjU')+_0x182372(0x408,'p%T!')+_0x182372(0x465,'0zSf')+'ip:\x20t'+_0x182372(0x3f6,'Za7T')+_0x182372(0x265,'#A@Q')+_0x182372(0x3a0,'MxaY')+'-clip'+_0x182372(0x2ae,'rRWL')+_0x182372(0x282,'p#ib')+_0x182372(0x254,'p%T!')+_0x182372(0x249,'HpN*')+_0x182372(0x389,'jf9N')+'t;\x20-w'+_0x182372(0x41d,'rRWL')+_0x182372(0x368,'5k$^')+_0x182372(0x252,'191x')+_0x182372(0x42c,'0H$(')+_0x182372(0x492,'0H$(')+'anspa'+_0x182372(0x2d6,'0zSf')+_0x182372(0x238,'LjjU')+_0x182372(0x356,'j2Eo')+_0x182372(0x3c7,'wADS')+_0x182372(0x476,'0zSf')+_0x182372(0x3a9,'5k$^'));}else _0x54ccda+=_0x1c4122['NHFSL'];}return _0x54ccda;}function _0x1b76(){const _0x3615df=['WPD7WRuYW5u','lePowCoz','vMxcP3pcLa','W44Wd8khWRG','WQNdOSkTW7lcGq','EaJcRarD','s8o9W67cHCo+','ECkiyfBdHa','zMuoWQNcM2mdW4BdMW','WPS8wmojWQe','W5e1EmoOoa','h21ZW4hdHa','mYxcHbby','WPJcRCoQW7hcOa','WOSDW7T+mW','fbvRWQ/cLG','WPH5nCkIpq','l8kpW4VdUSk9','umo1ymobaG','CW7dJ0ZcOW','WOKus8oVtq','D8k8W4tdUCkuWPpdNq','WRNdQcmoba','bcz9WQ/cMG','BXDjW53cUa','uGi8w2C','e8kPBSkiW5u','WQ8eWPm','ErBdR2K','WOVdUSkVWQFdRa','BuNcUmoknq','W5/dG8oLWPPr','WOOHhCosWRK','qSo9za','WPNdVazBCq','idnmWQ/cVa','W4tdPHGbCW','qZFcJNldTa','iW3cOSokEq','v8k/W7lcHq','W7bAl8onDa','W6K+W61MWRy','W5tcN8kBW5Sv','BqRdTmklzG','qCkSfLBdPq','vSk5qHlcTa','tGW9BJK','zXixWP7cSG','W4mzW6aXDW','EwpcLxpcLq','WPFdICk/vfW','WRa2WRlcR8oA','WRy2vmkqAa','DXZdRwNcVq','W4ajhCo4ua','AxxdGuuz','i0/cOa','vSkRFWOk','swJcH3xcTq','WRhdLmkJxuC','W6FcGmoKWQbs','xIBcSqHL','W4L/WQ4XAq','WOpdUCkKW6dcOa','vCo5zmoeta','W4hdJCkceSkE','W5DzWRNdGCob','rSoMAmowfG','WOD1wmkwWQK','WQmMCmo2WOK','WQWOW4RdQSkm','W7LAWQFdHSou','W64RW7L7WOe','W5mVW5LMmq','WOb9WQldJmoB','jKnywCkq','EGjdWPhcUW','v8o/iCoFba','WP7dICk+dCo9','u8kIzaOh','WQddQfdcIaC','WOddHSkr','W6pcLa0OWOG','W5KGW6VdG8oy','WPJcH8ozxmoz','WR7dHrJdNb8','krvwWPZcRq','W7lcM8oXfeO','ddNcPrrY','tqy9btq','W7HMWRDXWPO','zwlcTqTa','kgZdGwio','DXyftY4','WPhcJmktg8kr','kCoiWRX0Cq','WQnADSkiia','WPLPv8odW7m','nKVcRarA','v11fchO','B8kDW710','ESkJW7PKCa','W73cQNHRWQK','Fr3dSNtcMa','WQpdNvFcKHu','WR17WRuYW5u','W6dcT8oQWQxdSG','WOzoWRm/DW','W54LW6SIza','u1/dRtBcVq','W7zlW7rKAW','WRJdL1xdKqi','W7nKbSoFoG','kCkvW7rXCq','W4vUimkNFq','prDTqCkg','W64OWQGWWOC','BbrrWPtcQG','WR1NWRP2WPW','W6VcRYWSWRG','W5edrx1d','xhtcPZZdPq','WRjmW4NdGSk4','e8o/fHdcQG','WQBdLSkHWQat','qIxcObT4','mCkhs8kUW5C','WR8nnConoG','WOefpYvy','qCk7WPOoWQa','W6JcK8oAq8kF','eq5MDmkR','W417W7b+kG','WR1NW5BdVmko','WPjdW53dTCkz','WROrWPpdSSoy','WQP/vmotja','b0tdRtVdQG','WRZdLSkXWQ4l','eGZcVIVcVW','W6O+WQSjba','WQKKySkXWOm','gmoZWR3dL8k9','bmkVle9g','WP/dISkjW5Cx','W7ZdGuVcHHq','WR4tBmkgoG','hw5DyCkn','CdhdGfGk','WOZdTSk5WQxcTa','o1FcKSoknq','qwfmDmkp','wCo+W67cH8o0','WP3dVtyhia','fq7cOtFcJa','W7a7fCoCpa','WRLQW57cHCkz','WQBcHmoKW7zA','WQpcUIOLWQa','ECkvW6fJFq','W4ucaM07W4HYWOtdPG','W5lcRmoQW6JcSW','aW7cOhlcHa','WRejFmoqDG','WOWOWQn/EW','WOD1wmkkW7e','WOemdmkZb8oyWPb3eND0ja','wSkXuf/cQa','ptjkW6pdPG','W7H/f8oBjG','W5zgtCoLrW','A1hcVmk7W6u','WO14WQFdGCoe','ybJcL8kNW6O','WR8Vk8kOW5e','WOFdIgBcKJm','W7rfW5lcP8os','WROrWPpdRSkC','iuDct8oy','yaRdT8kgEG','eCkTu0BdOW','v8o/uSoheW','nColfKrP','W4TTW7bSEa','WObkW4pcHmky','FfZcRmoAjW1bWRDKW7xcRSkgW6y','emoQW51Tma','imkqW7ddQ8k/','mZjs','fszzomkF','W4DvtCkQua','vcOH','otTlWQ7cRq','dhpdLLiF','W5euWOK','WP19qfa2','qCoJW79aW7q','WOtdUwvPW68','sxxcTw/cTa','W4VdISkggCkI','zmo4WQBcJCo5','tsK6rJm','W5xdRbKpiW','WP/cMmkSW5uo','WRbPW5xdQSki','W6ZcUcyIWQG','q8k+wbddUq','WR3dLCkOaaW','fSoWAHyi','W74rWPCQla','ovlcUmohyG','W40jW6fWiG','uSkYuW','WO9BW6ZcGSk5','WPBdQ09gpW','E8kuW77cSSoU','WRFdNK3cKWm','s8oUWR/cHCo4','nSk3W7pdG8k9','Fd1VWRdcKq','W73dN8kKtra','W7nFW5q','cGhcTMNdGa','xXa8fxG','WP7cUSkOW6tcSq','WQVdSh5PW6i','AHVdK8k2WQK','W7vZhCoC','WOb4WQtdJmoy','W70zy8keja','abVcOh3cIW','fcZcPdHo','WPDBWQCVzs/dPCoeWQNcKmkzW7/dUW','kuDCcSom','W7hcKGldNfe','W41LW6zJEG','WPhcJmomwmku','W5S9wSoMmW','WO8JwSoMmW','WO3dHCoqfmkC','W4axWOShbq','t8o1B8oufq','WPHCW7hcGSkO','BHLvWPRcSG','oYWdW6hcRa','hL8RqsW','W6LkW4XWoG','xgmonCom','s8k7DbmEz2n4WP7cJtBdRW','nCkCrW','W6xcMCoTW69b','v2XNW4JdLW','WRddMSkUueK','WRBdNSk/gra','htbDkmoo','WQCtW4hcQ8ok','W43cJ8oFWP5s','W6VcTZe','uSk5w0ldMG','W4OzWQFdI8oT','i0VcPSowoG','eMTZWO7dLW','WR9vW55KAW','zKtcOrXm','W4HqWPK/DW','W43dImkAW4Og','u8oXmfnl','W5pcPCoFWP5s','WQHHW53dUmox','WQf0W7WSW5u','dCk+W4OLkG','WRucE8owDa','WQ7dUwvPW68','W6lcUdy6W7i','W740WPFdQ8kt','xMRcUvP1','W43cNCo/x8kU','u8kIzbzd','oCkqrCkUW5m','W5dcPCoNxSkq','W4vTW7rUFq','WR8gWOO9jW','W5JcR1vgCW','WOjYW7u','W61cWP3dOmks','dmkUWOjRkG','iSorqCkNW4e','W5JdGSkEeSkc','jI5qWQW','W794emovma','k1JdONRcJG','W7bAl8onAa','zL3cSW0','c1zV','W73cKGhcUJC','W5ZdKmoKW5vf','tXBdRxxdSq','W4RcT8oQWQxdSG','umkZv0pdUq','WP5yW7xdICoT','WQ44gCo6WOK','qSoQWO8OzG','dCkKW4OZza','f8k4WO0uW7y','WOFdNmkqW5a','W6PAlmovBa','q8o9W5vaW7q','AWBdLCoWWQS','ASkBW712Cq','W7zuW53cQCoi','W5uhf8oPWRC','CNWzW6hdUa','W5tdNSkcgmkc','tmkKW7dcP8o5','W4v0CmkLFW','WQWYWPJdU8ki','W79Za8kDoW','sSk8W6JcMCo5','W5KyWOjhsW','aqBcPq','F0BcRGbB','eemntxO','WPJdM8kCW5Ce','a8kSlSoxca','j07cTYNdMYxdUxicWQ4yWQzbnG','W4jHW6aOzG','W7hdGeFcIHG','edldQLP6','v3NcIcDB','xeZcJuRcPG','W58HW6VdLmof','dmkQW49aWRO','itdcL2ldLq','W4ucW7jSja','W6dcSMGGWQW','WO5ZW4WabW','f8kbW7Pfcq','Be/dLCo3WQq','W6GqW4bFWRO','qJ/cVr02','hbhcUxpdSW','keBcR3ldKW','l8kaW7vlcW','WRtdTMO6WQW','isHaWQ3cVq','W594W7ajxq','WP7dICk+dCoH','W5uGg8oEWQi','WO07W6VcGmkx','zgldIfqD','lhpdLLiF','W4NdUCozWPPI','WRH3WRuXW4a','fW7cVtNcKq','dSkTWOezW7y','WOpdUCkTWQxcOa','htVcVshcPa','W7qBWQ5wCa','W4mDWRW','hCoRj0fj','nGJdOeuj','mXJcGtzt','EXe9rYG','W54DW4fdsW','WOTCnmoWDW','WR97W4VcSSoy','W5m9hCkkWQS','zMJcMG','gmoZWQhcK8o0','fXRcScBcJq','W7S6W6yYWPm','W5tcNCoQWQxdSG','qgRdVXmO','rSo2DCkrxW','WRqFFCopAG','nSkPsSk5W6u','b8k4W51Nna','xNBdSfO2','mSk3W6/dJ8k0','gsJdTmkmDG','dqCnFbDMcq','W57cNqGfWRy','fCk5WOjKkq','rSovBCowda','uay9cdW','jxfrWQtcUq','W5b3F8kZW5e','WRldTIX3','WRu6mSo2WP8','W5pdLmo5WOel','k8kjWRGS','W7fZamo1ja','W70DFCkmma','WOTlWQxdOCoT','WP90pSkI','B1rkxmod','WPTbquCG','aSoRaqlcVmkqlapdHmorWOpcOvGl','rqZcVdZcHa','p0LDBmoj','v8kqW67cJCoX','iMj1WQ7cUq','W6RcK8oVW6Dh','W4LIW6RcOmoO','W4i0hSoWWR8','AmkhWRn2Eq','WOtcU8k3W5ud','WPhcJmoqv8oq','fY5lWQ7cQG','W7y8W6D9WOa','WPrnp8oDDa','WOPUBCoKyq','WO18iSoKlq','WQG2k8o6WP8','leLbwCkq','WOjpvhCm','W5L+pmkNya','dIzyFmkj','WPRcKCk3W5ud','nGJdOfLA','zSk+W6FdNSo5','W4PFW6BdHSkU','Ev/dRtBcVq','W64PW7yVW5C','WR42DSkEgq','W4eRWQTUAq','qSkBW5r9FG','WPe0WQ/dICob','W6RcMCoJW6fF','WRmHyCkzW5e','vdzLW4FdHW','vgNcSM7dPq','qSksvfZdGW','WOWOWQnJka','W6XvFmkDnq','WOics8kBnq','r8oBEmo1cG','eSkVn15g','eCo9WOCfWQi','gCkWiSklwq','W5/cH8o1','hsFdTchdPW','WO3dVbauFG','hSk6tLpdPG','WPJdSmkJW6VdVW','gCo2lunm','W4KzWQK/oq','WPNdOr5goG','fmkCW4VdOCkG','FWJcOWLi','W4fruCo+dG','nmk5W7tdImk3','W7eOW4D0jG','W5bBuCoSxa','jqZdMSo6WRy','W4tdMSk+b8kc','WRbHW5VdPmku','CGrDt8oC','xgmsoSki','W5K9CmoMmW','ig/dGX0k','WQyEW4dcVSoD','W7/cIWihWOe','WRtdICk+dCo9','W6rRCmo6W48','vcOHWO7cKq','W6vLsCksoG','xLZdSfO2','WRzxBSkbia','a8kWiCktxq','W4frsCoJua','W5TTW6eOyq','t2BcUMRcTa','W5PrsmkNrG','W7lcR1vgCW','cCoanKTr','W7v5gSodpa','W4lcG8kzgSkr','d8kYWODAW7q','kCouWRmWoa','W7hdHKFcHau','wCkGW6nIDW','kaFdRa','AGhdK8kGW6C','W7lcM8oTgW4','WPXRoCkJza','W4v+WQmGza','WOLZn8oHmq','whWzW6hdUa','W4jgW4qSyW','W49SjCk1AW','WQ7cRsaXWRS','W5ekWP9fuW','WQG2WRlcR8oA','vXvVsZy','wCkGW67dISk/','WQZdUu9PW68','p0DbcSoz','W6KmWPhcVmoz','WPfStCkyW716W4ypWQHKWP7dIa','W4ZcJ8kDW5ud','W7DLb8knAG','W6FcMmoYW7bs','amo2z8ovbW','W4RcJ8osWODr','tmkHW7tcMG','WRJdHbZdTLe','qSoIi8knxq','W4RcM8o/q8kU','F0/dUG','yWymBmoS','W4e0cSkkWQS','EWRdTgldJW','dSoXD8osfq','WOyUAmkPlq','sGakrtK','WOpdUCkUW6dcQG','ACk+W6/dGCk1','o8owcwy','pJnlW7VdUa','WQ9JWQyRW4FdVCokq2VcVCkWWRm','BahdK8o6WRC','FZTlWQdcVa','W41LW6y','nLRcOdVdJq','WOTxW6W','WRLxW5xcQmoA','lH3cTZTv','bt3dLCkM','W6GtW5biWQy','WPRdJSk6Bxy','vSkRrr/dOW','b8kwWOWMWR8','W7xcGSoGW7ja','W4XOW6VdHSow','WQ44dmoNWOm','WRXPW5VdPmkD','uZNdNIhdPW','BWypcSkk','W6GqWPWViG','WOfEW7xcHmk4','FYGPutK','j8kMs8k/W4G','W5LPWQRdJSoe','W7CfWOCYmq','vtqcFZ4','W74OWPJcR8oA','WPJcJ8kDW5ud','sSk2W6VcNSo4','iq3cKstcTq','W7ryW5dcPCos','WRtcNehcKXW','WRhdLmkHvfW','dSkLW50YzG','v8ojC8oana','WPT6c8oAWQW','b8oOWPe0Aq','cfddRh8F','W4tdPLufpW','WP/dGmkkW5aw','W7P3F8kZW5e','mSoLeKjW','bmk6WR3cLmoX','WPXQFCk1zW','W65MWRDGWPa','WP7cRmoQW6BcVq','W5VcKGldNfe','W43dNCkAW4GB','WOnuqgSC','ru/dS3ldGG','uCoKjvKh','ybpdPwZdGa','ErqItXC','waW9BtS','WPVcKCo1WP5s','WOVdS8kJW6VcTq','aJbCWQdcQW','ErDiWPJcSa','u1/dRtBcOq','u2BcUwtcTq','WRJcJcJdNfe','aSoZWQ3dMCkL','WOVdPmk5W6dcPG','W6VcU8ojW6f0','vgNcSYhcQq','ECkIzaOh','ErtdTh7cGW','tuFdU3ZdIq','W5eBfsvy','qSk9CSohaa','zmo4WRRdICkW','bYDTW4hdKa','dahcTa','WRJdNeu','W77dLKVcIK8','W5m6nmofWRO','WO9Dh8oPwq','WPbzW4WabW','qmoXruldQq','WPVdUSk7D1K','W4hdJCkEv8kt','W6/cTcbPWR0','Emk9W4PLEW','rM3dSbD3','W5JcM8oTgW4','W7KXoCo1WPC','bbZcOg/dGa','W6ZcScST','WO9uW6lcHCk5','W5azW7pcJSk1','W4pcJmkceSkg','jmkhW7TXFa','eKnSBHW','WR0Ylmk8WOe','WQhdH1hcLa','W6acWPJcR8oA','W5C0W6fRiq','WP8qW5i','pSk5WRlcNmkv','WPpdI2VcMa','x8k5WPWwW7q','W4VcN8oqxCkV','WOH4W7BdOSk7','lhBcIu4z','W4qwW5f9pq','W73cRtWLWQO','WO/dQHCnoG','pwtdNeKU','W7iXW51wWP4','ieBcJCk7W6G','WRFdJCkKxLK','W5qpW6D2oq','khdcOdVdJq','a3KSW43dNG','WRmRW7T1W5C','eG3dRYJcOq','FCkvW6eYoa','WOTDW67cHCkQ','o2JdLeLd','WPhdGmkFfSku','tNpcRw3cOG','a8kNW4Pxjq','WO3dJJ8Fnq','W5tdN8oF','lKpcScldLchcUaaYWR4AWP8','WOtdGCkAW58a','wSkXwfxdUa','W73dPgC7WQO','dSo3C8osbq','emkVW4f8Fq','i0LDemkk','ECkcsSkQW4q','W5v1cSopWRS','W5yFWQ0ahq','nvLjWO3cVW','wai8cdW','ssRcTMdcPa','WOD1wmkkW60','W4G7WR/dKSoo','xgmokCkF','W6SNW6fQma','W5zgFmoRrG','kvyAW53dVG','WPJcT8k4W6dcPa','W6LkA8kimW','rmkhW4D6vG','WRJdGHJdNau','DmoraSoRWOa','c8kKW4fTna','A8oetmo/','W7RdTcCOWQW','wSk6qr3dUq','whddUxpcPG','h8oJn1KA','hsFdQgxcRG','WPuOW7VcLSkdBwBcQtJcL14','jSorumkUW5y','FbzTymoZbfzZ','WRz8W4ZdV8kj','a8kWiCoCdW','yG3dSCkCkW','hf1fchO','W5JdQrasma','punbxSkr','vw/cOYbA','W5DxvCofvG','WP7dICkIrmo9','ymkcWRnZDa','AshcHb1n','ymkrW6q9AW','W5Xpuh0m','WOD1wa','W5ZcMJm4WPy','Aa7dHG','a8kWiCktqq','yCoprSkboW','W5KpW4XdsW','WPxdNmo2WPzr','FNWAWOFcNG','WRT6lmoNWPa','WOSnW7XZoa','W70jF8keoG','fclcUrn9','W5NdNSo5WOyz','W4nMW7bHnG','EXDuWPBcRq','nCkDWRnZDa','tCodWQmGoa','WO1KpmkJlG','xmk1FNtdOq','W7nFW5tdRSos','W5/cMCoUqCkK','tx7cUvVcHG','qepdS3hdLW','nCkxt8k5W7a','mmoJWQBdJSk2','aCk8WPylWRm','nLRcOhtcGW','W5WyWP9tgG','WOTYnSkVFW','kuCcw8oF','Emk8W6/dM8o5','AmkzW7y','bCoXW6NcN8o0','m8ouW6D1ya','W4jSWRLJza','hCosagzW','WOv9uhe7','fXZcP1NdVG','WPyOW7CMCa','smoTWPFdL8k9','WRpdLCk+s08','sK/cQxpdUG','FmoKWQ3dH8k9','tayIe3O','wsjkWO/cSq','hJRdGCkeqq','sMlcTMRcRG','WOvGgSkMWPW','B35FWQdcQW','dSo4v0pdUq','xSo2ivjt','c8kKW4PPna','jCk2W63cJCkW','W5v4emolWQe','WR8LW4VdU8kB','W5xdHCkEemos','WPldVdejbG','W7zuW5xcUSkg','WRXTW6dcR8k0','rqypcSkk','W6pcHrldJuddV8krmW/cUSoHjvO','mudcNxe8','l23dI1iF','u8kIzaOB','W4JdSCkLW6VcPG','W7Cdd8k6fq','WQBdLSoIW6Xs','WPmuh8kQfq','W5JdGSkx','a8oNW5X8jW','ca7cQW','WOZdGSkEW4OB'];_0x1b76=function(){return _0x3615df;};return _0x1b76();}function _0x442c(_0x13a470,_0x1e3e6e){_0x13a470=_0x13a470-(0x16f2+0x233+-0x36*0x6f);const _0x365e8d=_0x1b76();let _0x5dd8a4=_0x365e8d[_0x13a470];if(_0x442c['WELGiv']===undefined){var _0x23a5fd=function(_0x5996fa){const _0x463709='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5d74dd='',_0xf4f07='',_0x1c69ff=_0x5d74dd+_0x23a5fd,_0x424e61=(''+function(){return 0x10c8+-0x761*0x3+-0x1*-0x55b;})['indexOf']('\x0a')!==-(0x1*0x20f+-0x156d+-0x105*-0x13);for(let _0x5ce354=-0x3d*-0x8b+0x1bae+-0x3ccd,_0x427591,_0x12ff54,_0x45591c=-0x41*-0x56+0xc0b*0x3+0x30d*-0x13;_0x12ff54=_0x5996fa['charAt'](_0x45591c++);~_0x12ff54&&(_0x427591=_0x5ce354%(-0xa6*-0x25+0x7f3+-0x2e7*0xb)?_0x427591*(0x61*0x1c+0x13*-0x205+0x1c03)+_0x12ff54:_0x12ff54,_0x5ce354++%(0x82*0x2f+-0xbd9+-0x1*0xc01))?_0x5d74dd+=_0x424e61||_0x1c69ff['charCodeAt'](_0x45591c+(0xa1b+0xb+-0xa1c))-(-0x2587+-0x1b5*-0x2+-0x2227*-0x1)!==0xf50+0xd3a+-0x1c8a?String['fromCharCode'](-0x1881+0x2*-0xcb9+0x32f2&_0x427591>>(-(0x211f*0x1+0x1784+0x817*-0x7)*_0x5ce354&-0xdc0+-0x973*0x1+-0x29*-0x91)):_0x5ce354:0x5*-0x35+0x240a+-0x2301){_0x12ff54=_0x463709['indexOf'](_0x12ff54);}for(let _0x434ddd=0x6e+-0x2*-0x34f+0x1*-0x70c,_0x8b383b=_0x5d74dd['length'];_0x434ddd<_0x8b383b;_0x434ddd++){_0xf4f07+='%'+('00'+_0x5d74dd['charCodeAt'](_0x434ddd)['toString'](0x1*-0x1b1f+0x77d+-0x1*-0x13b2))['slice'](-(-0xa0c+0x1*0x224e+-0x1840));}return decodeURIComponent(_0xf4f07);};const _0x729932=function(_0x2f8218,_0x4e955a){let _0x3bc5f4=[],_0x461091=0xc86+0xb57*0x1+0x95*-0x29,_0x470396,_0x40d8b1='';_0x2f8218=_0x23a5fd(_0x2f8218);let _0x53aa4b;for(_0x53aa4b=-0x656+0xce1+-0x1*0x68b;_0x53aa4b<-0x1ccc+-0x7fc+0x4b9*0x8;_0x53aa4b++){_0x3bc5f4[_0x53aa4b]=_0x53aa4b;}for(_0x53aa4b=-0x24a2+-0xb74+-0x3016*-0x1;_0x53aa4b<-0x778*-0x5+0x182a+-0x3c82;_0x53aa4b++){_0x461091=(_0x461091+_0x3bc5f4[_0x53aa4b]+_0x4e955a['charCodeAt'](_0x53aa4b%_0x4e955a['length']))%(0x97*-0x3+0x16e7+0x6*-0x35b),_0x470396=_0x3bc5f4[_0x53aa4b],_0x3bc5f4[_0x53aa4b]=_0x3bc5f4[_0x461091],_0x3bc5f4[_0x461091]=_0x470396;}_0x53aa4b=-0x7d9+-0x2ed+-0xe*-0xc5,_0x461091=0x1*-0x684+0x41e*0x5+-0xe12*0x1;for(let _0x364f9b=0x11d8+-0x133c+0x164;_0x364f9b<_0x2f8218['length'];_0x364f9b++){_0x53aa4b=(_0x53aa4b+(0x207a+0x20f5*-0x1+0x7c))%(0x954*-0x1+0x5c1+-0x1*-0x493),_0x461091=(_0x461091+_0x3bc5f4[_0x53aa4b])%(0x11a3+0x1f*0xf3+-0x16*0x218),_0x470396=_0x3bc5f4[_0x53aa4b],_0x3bc5f4[_0x53aa4b]=_0x3bc5f4[_0x461091],_0x3bc5f4[_0x461091]=_0x470396,_0x40d8b1+=String['fromCharCode'](_0x2f8218['charCodeAt'](_0x364f9b)^_0x3bc5f4[(_0x3bc5f4[_0x53aa4b]+_0x3bc5f4[_0x461091])%(0x8*0x46a+-0x18b2+-0x99e)]);}return _0x40d8b1;};_0x442c['trtLJR']=_0x729932,_0x442c['CkxgMr']={},_0x442c['WELGiv']=!![];}const _0x292b6d=_0x365e8d[0x51+0x1f9*-0x1+0x4*0x6a],_0x170d61=_0x13a470+_0x292b6d,_0x4b5bc1=_0x442c['CkxgMr'][_0x170d61];if(!_0x4b5bc1){if(_0x442c['khgpOl']===undefined){const _0x5e9af8=function(_0xb0515a){this['mkVNAy']=_0xb0515a,this['HxKcLZ']=[0x3*0xada+-0x15b2+-0xadb,-0x1127+-0xba7*-0x2+-0x9*0xaf,0x2550+-0x455*-0x5+0x1*-0x3af9],this['xTskGY']=function(){return'newState';},this['LlLQml']='\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a',this['gBAOfK']='\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';};_0x5e9af8['prototype']['NluroY']=function(){const _0x28e5e8=new RegExp(this['LlLQml']+this['gBAOfK']),_0xffe73f=_0x28e5e8['test'](this['xTskGY']['toString']())?--this['HxKcLZ'][0x210a+-0x8fc+-0x180d]:--this['HxKcLZ'][-0x653+0x1203+-0xbb0];return this['JQKLtn'](_0xffe73f);},_0x5e9af8['prototype']['JQKLtn']=function(_0x41071f){if(!Boolean(~_0x41071f))return _0x41071f;return this['ZnaotF'](this['mkVNAy']);},_0x5e9af8['prototype']['ZnaotF']=function(_0x328f87){for(let _0x483615=-0xb*-0x233+-0x1*0x172e+0x7*-0x25,_0x115f54=this['HxKcLZ']['length'];_0x483615<_0x115f54;_0x483615++){this['HxKcLZ']['push'](Math['round'](Math['random']())),_0x115f54=this['HxKcLZ']['length'];}return _0x328f87(this['HxKcLZ'][-0x2*-0x39+-0x6dc+0x66a]);},(''+function(){return 0xc0d*0x2+0x1*-0xc20+-0xbfa;})['indexOf']('\x0a')===-(0x6*0x55e+0x4*-0x719+0xf*-0x41)&&new _0x5e9af8(_0x442c)['NluroY'](),_0x442c['khgpOl']=!![];}_0x5dd8a4=_0x442c['trtLJR'](_0x5dd8a4,_0x1e3e6e),_0x442c['CkxgMr'][_0x170d61]=_0x5dd8a4;}else _0x5dd8a4=_0x4b5bc1;return _0x5dd8a4;}async function loadReviews(){const _0x2bd3cf=_0x3b739d,_0x3914c4={'PKgAC':_0x2bd3cf(0x30f,']jd$')+_0x2bd3cf(0x446,'rK!Q')+_0x2bd3cf(0x46f,'mR9y')+'a-sta'+'r-hal'+_0x2bd3cf(0x3e3,'D@ez')+_0x2bd3cf(0x284,'RSw8')+_0x2bd3cf(0x280,'xK%v')+'ar\x22><'+_0x2bd3cf(0x2b6,'u0b4'),'lDqMB':_0x2bd3cf(0x3d8,'RSw8')+_0x2bd3cf(0x2c6,'GYXU')+_0x2bd3cf(0x3f8,'oWFB')+'er','oCszl':function(_0x3e4782){return _0x3e4782();},'JWVfN':function(_0xa6b965,_0x51335f){return _0xa6b965===_0x51335f;},'WFTkq':function(_0x52baac,_0x330258){return _0x52baac(_0x330258);},'zBrav':function(_0x30cab4,_0x1ae2e5){return _0x30cab4(_0x1ae2e5);},'RxDva':_0x2bd3cf(0x244,'EiPC')+'ff','qIYuc':function(_0x1a8f20,_0x50f7b0){return _0x1a8f20(_0x50f7b0);},'dHvFf':function(_0xb29f5c,_0x464c15){return _0xb29f5c(_0x464c15);},'CugwS':function(_0x1f32bf,_0x374c01){return _0x1f32bf(_0x374c01);},'kbsrS':function(_0x507180,_0x475ab0){return _0x507180(_0x475ab0);},'RCvqY':function(_0x535fd0,_0x4d0445){return _0x535fd0!==_0x4d0445;},'qxJbO':_0x2bd3cf(0x1e1,'5k$^'),'HuwVX':'Error'+_0x2bd3cf(0x2cc,'jf9N')+_0x2bd3cf(0x4ab,'p#ib')+_0x2bd3cf(0x232,'xK%v')+'s:'},_0x45c136=document[_0x2bd3cf(0x1d4,'D@ez')+_0x2bd3cf(0x2ad,'rRWL')+_0x2bd3cf(0x2b8,'rH04')](_0x3914c4[_0x2bd3cf(0x3c2,'#A@Q')]);if(!_0x45c136)return;try{_0x45c136[_0x2bd3cf(0x2e9,'0zSf')+_0x2bd3cf(0x253,'DGQm')]=_0x2bd3cf(0x2a9,'dwvI')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20<d'+_0x2bd3cf(0x233,'gNwx')+_0x2bd3cf(0x3cc,'gNwx')+'revie'+'ws-lo'+_0x2bd3cf(0x2ca,'rRWL')+'\x22>\x0a\x20\x20'+_0x2bd3cf(0x458,'LjjU')+_0x2bd3cf(0x1e4,'jf9N')+'\x20\x20\x20\x20<'+_0x2bd3cf(0x499,'H#*c')+'ss=\x22f'+_0x2bd3cf(0x1e2,']jd$')+_0x2bd3cf(0x30a,'wADS')+_0x2bd3cf(0x1cd,'B^13')+_0x2bd3cf(0x3e0,'k$3N')+_0x2bd3cf(0x44c,'AZKh')+_0x2bd3cf(0x291,'rH04')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x366,'AZKh')+_0x2bd3cf(0x222,'EiPC')+_0x2bd3cf(0x1de,'p%T!')+'ding\x20'+_0x2bd3cf(0x223,'W5vp')+_0x2bd3cf(0x464,'oWFB')+'</p>\x0a'+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x366,'AZKh')+_0x2bd3cf(0x217,'rK!Q')+'iv>\x0a\x20'+_0x2bd3cf(0x410,'191x')+'\x20\x20',await _0x3914c4[_0x2bd3cf(0x1dd,'k$3N')](fetchPlayersForReviews);if(!ReviewsConfig||_0x3914c4[_0x2bd3cf(0x34f,']y#h')](ReviewsConfig[_0x2bd3cf(0x1df,'^*WW')+'h'],-0x20dc+-0x2*-0x11f9+0xa*-0x4f)){_0x45c136[_0x2bd3cf(0x467,'jf9N')+_0x2bd3cf(0x2ea,'EiPC')]=_0x2bd3cf(0x1f3,'Ckpt')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x27d,'Za7T')+_0x2bd3cf(0x1bd,'k$3N')+'v\x20cla'+_0x2bd3cf(0x1e8,'xK%v')+_0x2bd3cf(0x38b,'EiPC')+_0x2bd3cf(0x29c,'GYXU')+_0x2bd3cf(0x337,'jf9N')+_0x2bd3cf(0x2c5,'T!&9')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x27d,'Za7T')+_0x2bd3cf(0x2a2,'u0b4')+_0x2bd3cf(0x2fb,'HpN*')+_0x2bd3cf(0x472,']y#h')+_0x2bd3cf(0x330,'p%T!')+_0x2bd3cf(0x1f2,'rRWL')+_0x2bd3cf(0x1d1,'Za7T')+'t\x22></'+_0x2bd3cf(0x3ab,'B^13')+_0x2bd3cf(0x366,'AZKh')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x22c,']jd$')+'\x20\x20\x20<p'+'>No\x20r'+'eview'+_0x2bd3cf(0x3a8,'wADS')+_0x2bd3cf(0x489,'B^13')+_0x2bd3cf(0x1bb,'5k$^')+'irst\x20'+_0x2bd3cf(0x395,'EiPC')+_0x2bd3cf(0x384,'^*WW')+_0x2bd3cf(0x48e,'rH04')+_0x2bd3cf(0x3f5,'H#*c')+_0x2bd3cf(0x327,'k$3N')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x22c,']jd$')+_0x2bd3cf(0x28f,'Ckpt')+_0x2bd3cf(0x29f,'rH04')+'\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20';return;}let _0xf2cbfb='';for(const _0x34369a of ReviewsConfig){const _0x27c0a0=_0x3914c4[_0x2bd3cf(0x211,'j2Eo')](findPlayerForReview,_0x34369a[_0x2bd3cf(0x47b,'H#*c')+_0x2bd3cf(0x258,'gNwx')]),_0x38d407=_0x27c0a0?_0x3914c4[_0x2bd3cf(0x38a,'0H$(')](getNicknameColor,_0x27c0a0[_0x2bd3cf(0x3f1,'D@ez')+_0x2bd3cf(0x2ce,'0zSf')+_0x2bd3cf(0x36f,'k$3N')]):_0x3914c4[_0x2bd3cf(0x200,'wADS')],_0x169df5=_0x27c0a0?_0x27c0a0[_0x2bd3cf(0x2be,'LjjU')]||'':'',_0x28596d=_0x27c0a0?_0x3914c4[_0x2bd3cf(0x228,'DGQm')](getNameRankIcons,_0x27c0a0[_0x2bd3cf(0x4a9,'E2)#')]):'',_0x4cf937=_0x3914c4[_0x2bd3cf(0x2a7,']jd$')](generateStarsSimple,_0x34369a[_0x2bd3cf(0x2c4,'j2Eo')+'g']);_0xf2cbfb+=_0x2bd3cf(0x296,'DGQm')+_0x2bd3cf(0x4b0,')1Dv')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x2ef,'%UY6')+_0x2bd3cf(0x466,'q7oN')+_0x2bd3cf(0x21f,'D@ez')+_0x2bd3cf(0x3bf,'LjjU')+'-card'+'\x22>\x0a\x20\x20'+_0x2bd3cf(0x1c6,'MxaY')+_0x2bd3cf(0x1ef,'mR9y')+_0x2bd3cf(0x448,'RSw8')+_0x2bd3cf(0x3cf,'oWFB')+_0x2bd3cf(0x305,'u0b4')+_0x2bd3cf(0x427,'B^13')+'revie'+_0x2bd3cf(0x1ce,'p%T!')+_0x2bd3cf(0x445,'dwvI')+_0x2bd3cf(0x348,'6aot')+_0x2bd3cf(0x206,'%UY6')+_0x2bd3cf(0x22c,']jd$')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x49b,'MxaY')+_0x2bd3cf(0x1f4,'6aot')+_0x2bd3cf(0x293,'p#ib')+_0x2bd3cf(0x22a,'jf9N')+_0x2bd3cf(0x3ff,'gNwx')+'rofil'+_0x2bd3cf(0x4ae,'j2Eo')+_0x34369a['nickn'+_0x2bd3cf(0x441,'q7oN')]+(_0x2bd3cf(0x2c7,'6aot')+'\x20\x0a\x20\x20\x20'+_0x2bd3cf(0x44b,'rRWL')+_0x2bd3cf(0x3b1,'6aot')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x3b1,'6aot')+'\x20\x20\x20\x20\x20'+'\x20alt='+'\x22')+_0x3914c4[_0x2bd3cf(0x403,'191x')](escapeHtml,_0x34369a['nickn'+_0x2bd3cf(0x369,'EiPC')])+(_0x2bd3cf(0x23d,'LjjU')+_0x2bd3cf(0x2a2,'u0b4')+_0x2bd3cf(0x471,'p#ib')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x458,'LjjU')+_0x2bd3cf(0x3a6,'jf9N')+_0x2bd3cf(0x3d5,'Za7T')+_0x2bd3cf(0x2c3,'dwvI')+'-avat'+'ar\x22\x0a\x20'+_0x2bd3cf(0x475,'0zSf')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x303,'EiPC')+_0x2bd3cf(0x37c,'D@ez')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x31a,'T!&9')+_0x2bd3cf(0x480,'jf9N')+'=\x22thi'+_0x2bd3cf(0x2a3,']y#h')+_0x2bd3cf(0x331,']y#h')+_0x2bd3cf(0x42e,'E2)#')+'mages'+'/unlo'+'aded.'+_0x2bd3cf(0x234,'xK%v')+_0x2bd3cf(0x1e3,'mR9y')+_0x2bd3cf(0x259,'T!&9')+_0x2bd3cf(0x3b1,'6aot')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20<div'+_0x2bd3cf(0x373,'AZKh')+_0x2bd3cf(0x37e,'W5vp')+_0x2bd3cf(0x454,'#A@Q')+_0x2bd3cf(0x207,'mPW9')+_0x2bd3cf(0x3ef,']y#h')+'>\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x475,'0zSf')+_0x2bd3cf(0x3d6,'k$3N')+_0x2bd3cf(0x286,'E2)#')+_0x2bd3cf(0x2fd,'q@s5')+_0x2bd3cf(0x31e,'191x')+_0x2bd3cf(0x495,'j2Eo')+_0x2bd3cf(0x447,'oWFB')+_0x2bd3cf(0x34b,'5k$^')+'ser-n'+_0x2bd3cf(0x365,'p#ib')+'\x0a\x20\x20\x20\x20'+_0x2bd3cf(0x1c6,'MxaY')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x303,'EiPC')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x2a2,'u0b4')+_0x2bd3cf(0x3ec,'gNwx')+_0x2bd3cf(0x2a5,'jf9N')+_0x2bd3cf(0x459,'LjjU')+'\x22revi'+_0x2bd3cf(0x386,'gNwx')+_0x2bd3cf(0x496,'LjjU')+_0x2bd3cf(0x3f0,'p%T!'))+_0x28596d+('</spa'+'n>\x0a\x20\x20'+_0x2bd3cf(0x410,'191x')+_0x2bd3cf(0x343,'W5vp')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x396,'HpN*')+_0x2bd3cf(0x343,'W5vp')+_0x2bd3cf(0x259,'T!&9')+_0x2bd3cf(0x3c5,'MxaY')+_0x2bd3cf(0x452,'DGQm')+_0x2bd3cf(0x3a2,'6aot')+'lor:\x20')+_0x38d407+';\x20'+_0x169df5+'\x22>'+_0x3914c4[_0x2bd3cf(0x34c,'p#ib')](escapeHtml,_0x34369a['nickn'+_0x2bd3cf(0x41c,']y#h')])+(_0x2bd3cf(0x2db,'sTkU')+_0x2bd3cf(0x3f3,'H#*c')+_0x2bd3cf(0x22c,']jd$')+_0x2bd3cf(0x4a4,'0H$(')+_0x2bd3cf(0x22c,']jd$')+_0x2bd3cf(0x396,'HpN*')+_0x2bd3cf(0x366,'AZKh')+_0x2bd3cf(0x45a,'#A@Q')+_0x2bd3cf(0x3de,'AZKh')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x475,'0zSf')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x2de,'5k$^')+_0x2bd3cf(0x21e,'GYXU')+'\x20<div'+_0x2bd3cf(0x213,'H#*c')+_0x2bd3cf(0x281,'6aot')+_0x2bd3cf(0x288,'T!&9')+_0x2bd3cf(0x45c,'HpN*')+_0x2bd3cf(0x270,'mR9y')+_0x2bd3cf(0x259,'T!&9')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x475,'0zSf')+_0x2bd3cf(0x299,'J(SD')+_0x2bd3cf(0x47f,'p%T!')+_0x2bd3cf(0x259,'T!&9'))+_0x4cf937+(_0x2bd3cf(0x227,'mPW9')+_0x2bd3cf(0x3b3,'j2Eo')+_0x2bd3cf(0x2a2,'u0b4')+_0x2bd3cf(0x475,'0zSf')+_0x2bd3cf(0x2e3,'sTkU')+_0x2bd3cf(0x397,'DGQm')+_0x2bd3cf(0x2e0,'rK!Q')+_0x2bd3cf(0x416,']y#h')+_0x2bd3cf(0x311,'xK%v')+_0x2bd3cf(0x340,'p#ib')+_0x2bd3cf(0x3d9,'rH04')+_0x2bd3cf(0x3d2,'^*WW')+_0x2bd3cf(0x32b,'B^13')+_0x2bd3cf(0x275,'dwvI')+_0x2bd3cf(0x479,'wADS')+_0x2bd3cf(0x3e9,'p#ib')+_0x2bd3cf(0x209,'p#ib')+_0x2bd3cf(0x339,'oWFB')+_0x2bd3cf(0x3c0,'J(SD')+'\x22>')+_0x34369a['ratin'+'g']['toFix'+'ed'](-0xeda*0x1+-0x3c0+0x1*0x129b)+(_0x2bd3cf(0x21a,'oWFB')+'n>\x0a\x20\x20'+_0x2bd3cf(0x471,'p#ib')+_0x2bd3cf(0x343,'W5vp')+_0x2bd3cf(0x366,'AZKh')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x370,'wADS')+_0x2bd3cf(0x3be,'6aot')+_0x2bd3cf(0x241,'mR9y')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x259,'T!&9')+_0x2bd3cf(0x44b,'rRWL')+_0x2bd3cf(0x39f,'dwvI')+_0x2bd3cf(0x247,'rH04')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20<'+'/div>'+'\x0a\x20\x20\x20\x20'+_0x2bd3cf(0x370,'wADS')+_0x2bd3cf(0x458,'LjjU')+_0x2bd3cf(0x303,'EiPC')+_0x2bd3cf(0x1fb,'GYXU')+_0x2bd3cf(0x3aa,')1Dv')+'s=\x22re'+_0x2bd3cf(0x388,'EiPC')+'text\x22'+_0x2bd3cf(0x1c0,'p#ib')+_0x2bd3cf(0x2fd,'q@s5')+_0x2bd3cf(0x4a4,'0H$(')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x303,'EiPC')+_0x2bd3cf(0x45b,'MxaY')+_0x2bd3cf(0x361,'B^13')+_0x2bd3cf(0x287,'DGQm')+_0x2bd3cf(0x31d,'*ES*')+_0x2bd3cf(0x456,'0zSf')+_0x2bd3cf(0x1c2,'EiPC')+_0x2bd3cf(0x455,'6aot'))+_0x3914c4[_0x2bd3cf(0x34a,'%UY6')](escapeHtml,_0x34369a[_0x2bd3cf(0x1ee,'rK!Q')+'w'])+(_0x2bd3cf(0x283,'rH04')+_0x2bd3cf(0x259,'T!&9')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'+'\x20</di'+_0x2bd3cf(0x28b,'RSw8')+_0x2bd3cf(0x396,'HpN*')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x4a2,'HpN*')+_0x2bd3cf(0x2f5,'AZKh')+_0x2bd3cf(0x33b,'*ES*')+_0x2bd3cf(0x2fd,'q@s5')+_0x2bd3cf(0x407,'GYXU'));}_0x45c136[_0x2bd3cf(0x2d3,']y#h')+_0x2bd3cf(0x25d,'AZKh')]=_0xf2cbfb;}catch(_0x34086b){_0x3914c4[_0x2bd3cf(0x301,'LjjU')](_0x2bd3cf(0x362,'q7oN'),_0x3914c4['qxJbO'])?(console[_0x2bd3cf(0x3b8,'D@ez')](_0x3914c4[_0x2bd3cf(0x25f,'dwvI')],_0x34086b),_0x45c136['inner'+_0x2bd3cf(0x1d3,'c1zY')]='\x0a\x20\x20\x20\x20'+_0x2bd3cf(0x432,'rH04')+_0x2bd3cf(0x45d,'DGQm')+_0x2bd3cf(0x23b,'B^13')+_0x2bd3cf(0x242,'D@ez')+_0x2bd3cf(0x271,'k$3N')+_0x2bd3cf(0x1cb,'0zSf')+_0x2bd3cf(0x419,'K1E7')+_0x2bd3cf(0x40c,'c1zY')+_0x2bd3cf(0x366,'AZKh')+'\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20<'+_0x2bd3cf(0x20e,')1Dv')+_0x2bd3cf(0x3ae,'LjjU')+_0x2bd3cf(0x263,'0H$(')+_0x2bd3cf(0x208,']y#h')+_0x2bd3cf(0x347,'RSw8')+'on-tr'+_0x2bd3cf(0x486,'u0b4')+_0x2bd3cf(0x279,'0zSf')+_0x2bd3cf(0x3b6,'K1E7')+_0x2bd3cf(0x26f,'#A@Q')+_0x2bd3cf(0x366,'AZKh')+_0x2bd3cf(0x3ed,'5k$^')+_0x2bd3cf(0x245,'mR9y')+'or\x20lo'+_0x2bd3cf(0x28c,'p#ib')+'\x20revi'+_0x2bd3cf(0x378,'j2Eo')+_0x2bd3cf(0x28d,'p%T!')+_0x2bd3cf(0x2df,'0H$(')+_0x2bd3cf(0x3b9,']jd$')+_0x2bd3cf(0x34d,')1Dv')+_0x2bd3cf(0x418,'DGQm')+_0x2bd3cf(0x3c8,'J(SD')+_0x2bd3cf(0x286,'E2)#')+'\x20\x20\x20\x20\x20'+_0x2bd3cf(0x1f8,'0H$(')+_0x2bd3cf(0x1e3,'mR9y')+'\x20\x20\x20\x20\x20'):_0x464c50+=AqRHqM[_0x2bd3cf(0x25c,'MxaY')];}}function escapeHtml(_0x59de6b){const _0x28d1ff=_0x3b739d,_0x44955c={};_0x44955c[_0x28d1ff(0x1ca,'LjjU')]='div';const _0x446658=_0x44955c,_0x229aae=document['creat'+_0x28d1ff(0x1cc,'EiPC')+_0x28d1ff(0x22f,'AZKh')](_0x446658[_0x28d1ff(0x20d,'191x')]);return _0x229aae[_0x28d1ff(0x2c0,'q@s5')+_0x28d1ff(0x297,'T!&9')+'t']=_0x59de6b,_0x229aae[_0x28d1ff(0x488,')1Dv')+_0x28d1ff(0x253,'DGQm')];}

// ============ CAPE SYSTEM ============
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