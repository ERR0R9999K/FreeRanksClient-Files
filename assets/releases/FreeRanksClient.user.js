// ==UserScript==
// @name         FreeRanksClient 4.6.0 Full / BETA⚠️
// @namespace    http://tampermonkey.net/
// @version      4.6.0
// @description  Get any rank in Bloxd.Io for free! NameTag Ranks!
// @author       @ERR0R9999K
// @match        https://*.bloxd.io/*
// @icon         https://err0r9999k.github.io/FreeRanksClient/assets/images/FreeRanksClientFull.png
// @homepageURL  https://err0r9999k.github.io/FreeRanksClient/
// @grant        GM_xmlhttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// ==/UserScript==

// ============================ USER'S LOCAL DATABASE ============================
// ⚠️ Fill in these details about yourself! ⚠️
// If you are already in the database, this data is ignored!
const LOCAL_PLAYER_DATA = {
    nickname: "", // 👤 Nickname From Bloxd(see on bloxd mainpage)
    nickname_color: "", // 🎨 Color for nickname(see on website)
    ranks: "", // 🏆 Ranks(see on website)
    cape: "" // 🏷️ Cape(see on website)
};
// ❗If you want to change something, write to me in discord!❗

/* ====================== CREDTS: ====================== *\
#  Code developer: @ERR0R9999K / FREERANKSCLIENT©         #
#  YouTube: https://www.youtube.com/@ERR0R9999K           #
#  WebSite: https://err0r9999k.github.io/FreeRanksClient  #
#                                                         #
#  Assistance in creating a client: GEORGECR              #
#  YouTube: https://www.youtube.com/@_GEORGECR_           #
#  WebSite: https://georgecr0.github.io/Vortex-Client/    #
\* ===================================================== */

// ============================ CLENT'S СODE ============================

(function() {
    'use strict';

    // ============================ CONFIGURATION ============================
    const DATABASE_URL = 'https://script.google.com/macros/s/AKfycbxBbj28o3llFuUN0HCdirAd6dEBO326qusx_7E5mxA9LQnNGokB_G2ZAQGUzza41Lyq/exec';

    const FreeRanksClientLogo = "https://err0r9999k.github.io/FreeRanksClient/assets/images/FreeRanksClientFull.png";
    const OwnerLogo = "https://err0r9999k.github.io/FreeRanksClient/assets/images/ERR0R9999K.png";
    const ClientBackground = "https://err0r9999k.github.io/FreeRanksClient/assets/images/skybox.png";

    const FRCcape = 'https://err0r9999k.github.io/FreeRanksClient/assets/images/frc_cape.png';
    const VerifiedCape = 'https://err0r9999k.github.io/FreeRanksClient/assets/images/verifidRank_cape.png';

    const RankIcon = FreeRanksClientLogo;

    // System
    const SubVersion = "4.6.0";
    const ClientVersion = SubVersion + " BETA⚠️";
    const WelcomeMessage = `[FRC] 🚀 Free Ranks Client ${ClientVersion} initialized! Сode cleanup & Size reduction!`;
    const WelcomeMessageColor = "#cc66ff";

    const SiteName = "Bloxd / FRC " + ClientVersion

    const ADblock = true;

    // ============================ BLOXD COLORS ============================
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

    // ============================ IMAGE LIBRARY  ============================
    const IMAGE_LIBRARY = {
        "Logo": FreeRanksClientLogo,
        "bg": ClientBackground,
        "Owner": OwnerLogo,
        "Space": "https://i.postimg.cc/NMG91FWH/space-BG-loco.jpg",
        "Galaxy": "https://i.postimg.cc/1XzTTzhW/galaxy.png",
        "PinkSky": "https://i.postimg.cc/J4Q0jrRs/14896441-xl.webp",
        "CyanSky": "https://i.postimg.cc/tC9CqKFp/banner.jpg",
        "VortexSky": "https://i.postimg.cc/GhjHcr2x/sw-irling-clouds-create-captivating-natural-vortex-sky-138943-2179.avif",
        "THXfrc": "https://err0r9999k.github.io/FreeRanksClient/assets/images/thx.png"
    };

    // ============================ HELPER FUNCTIONS ============================
    function resolveNicknameColor(colorValue) {
        if (!colorValue) return null;

        if (BloxdColors[colorValue]) {
            return BloxdColors[colorValue];
        }

        if (colorValue.startsWith('#')) {
            return colorValue;
        }

        if (colorValue.startsWith('rgb')) {
            return colorValue;
        }

        const lowerKey = colorValue.toLowerCase();
        for (const [key, value] of Object.entries(BloxdColors)) {
            if (key.toLowerCase() === lowerKey) {
                return value;
            }
        }

        return colorValue;
    }

    function getLocalPlayer() {
        if (typeof LOCAL_PLAYER_DATA === 'undefined') return null;
        if (!LOCAL_PLAYER_DATA.nickname || LOCAL_PLAYER_DATA.nickname.trim() === '') {
            console.warn('[FRC] ⚠️ Local player not configured!');
            return null;
        }
        return LOCAL_PLAYER_DATA;
    }

    function isLocalPlayerEnabled() {
        if (typeof LOCAL_PLAYER_DATA === 'undefined') return false;
        if (!LOCAL_PLAYER_DATA.nickname || LOCAL_PLAYER_DATA.nickname.trim() === '') return false;
        return true;
    }

    // ============================ GLOBAL VARIABLES ============================
    let players = [];
    let ranks = [];
    let currentPlayer = null;

    const processedPreviews = new WeakSet();
    const processedProfiles = new WeakSet();
    const processedChats = new WeakSet();
    const processedLeaderboards = new WeakSet();
    const processedSuperRank = new WeakSet();

    let isPageVisible = true;
    let scanTimeout;
    let superRankObserver = null;

    let lastSkins = new Map();

	let thxMessage = true;

    // ============================ DATA LOADING SYSTEM ============================
    function mergeLocalPlayerIntoPlayers(playersArray) {
        if (!isLocalPlayerEnabled()) return playersArray;
        const localPlayer = getLocalPlayer();
        if (!localPlayer) return playersArray;

        const existingIndex = playersArray.findIndex(p => p.nickname === localPlayer.nickname);
        if (existingIndex >= 0) {
            console.log(`[FRC] ℹ️ Player "${localPlayer.nickname}" found in database, using server data`);
            return playersArray;
        }

        console.log(`[FRC] ✅ Adding local player: "${localPlayer.nickname}"`);

        const localPlayerData = {
            nickname: localPlayer.nickname,
            nickname_color: localPlayer.nickname_color || 'Default',
            ranks: localPlayer.ranks || '',
            Cape: localPlayer.cape || '',
            isLocal: true
        };

        return [localPlayerData, ...playersArray];
    }

    function loadData() {
        GM_xmlhttpRequest({
            method: 'GET',
            url: DATABASE_URL,
            onload: function(response) {
                try {
                    let loadedPlayers = JSON.parse(response.responseText);
                    loadedPlayers = loadedPlayers.filter(p => p.nickname && p.nickname.trim() !== '');

                    if (loadedPlayers[0] && loadedPlayers[0].config) {
                        ranks = JSON.parse(loadedPlayers[0].config).ranks;
                    }

                    const dbNicknames = new Set(loadedPlayers.map(p => p.nickname));

                    players = mergeLocalPlayerIntoPlayers(loadedPlayers);

                    if (isLocalPlayerEnabled()) {
                        const localPlayer = getLocalPlayer();
                        if (localPlayer && !dbNicknames.has(localPlayer.nickname)) {
                            ShowMSG("#66ff66", `[FRC] ✅ Local player "${localPlayer.nickname}" loaded!`, 5000);
                        }
                    }

                    if (isPageVisible) {
                        scheduleScan();
                    }
                } catch (e) {
                    console.error("Couldn't load data", e);
                    ShowError("[FRC] Couldn't load data: ", 8000);
                }
            },
            onerror: function(error) {
                console.error("Failed to fetch data");
                ShowError("[FRC] Failed to connect to database", 8000);
            }
        });
    }

    function findCurrentPlayer() {
        const currentPlayerElement = document.querySelector('.PlayerNamePreview.PlayerNamePreviewNoRanks .TextFromServerEntityName');
        if (currentPlayerElement) {
            const nickname = currentPlayerElement.textContent.trim();
            currentPlayer = findPlayer(nickname);
        }
    }

    function findPlayer(nickname) {
        return players.find(p => p.nickname === nickname);
    }

    function findRank(rankId) {
        return ranks.find(r => r.id === rankId);
    }

    // ============================ AD BLOCK ============================
    const ADobjects = [
        '#preroll',
        '.ShopBannerDiv',
        '.CharCustomisationBodyHeader',
        '.TopAllCustomGamesRight',
        '.EverythingMenuAd',
        '.LoadingOverlayRightAdBannerContainer',
        '.LoadingOverlayLeft',
        '.InventoryAdOuter',
        '.HomePagerAdContainer',
        '.SleepingOverlayAdContainerInner',
        '.RespawnSideSquareBannerDiv',
        '.RespawnLeaderboardBannerDivInner',
        '.CreateCustomGameCTA',
        '.AdBannerContainer',
        '.GenericVideoWrapper',
        '#GenericVideoWrapper'
    ];

    function removeAds() {
        if (!ADblock) return;

        ADobjects.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.remove();
            });
        });
    }

    // ============================ CREATE CREDITS ============================
    function CreateCredits() {
        const bloxdInformation = document.querySelector('[class*="BloxdInformation"], .BloxdInformation, div[class*="Information"]');

        if (bloxdInformation) {
            const sectionList = bloxdInformation.querySelector('[class*="BloxdInformationSectionList"], .BloxdInformationSectionList');

            if (sectionList && !bloxdInformation.querySelector('.FRC.CreditsContainer')) {
                const creditsHTML = `
                <div class="FRC CreditsContainer">
                    <div class="FRC CreditsTitle"><i class="fas fa-zap"></i>FreeRanksClient Credits</div>
                    <div class="FRC CreditsMain">
                        <div class="FRC InfoText Large">FreeRanksClient Info:</div>
                        <div class="FRC InfoText Normal"><i class="fas fa-heart"></i> FreeRanksClient - the best free client for bloxd.io!</div>
                        <div class="FRC InfoText Specific"><i class="fas fa-user"></i> Author: @ERR0R9999K</div>
                        <div class="FRC InfoText Normal Version"><i class="fas fa-code-branch"></i> Version: ${ClientVersion}</div>
                        <div class="FRC InfoText Normal"><i class="fas fa-globe"></i> Official website: <a href="https://err0r9999k.github.io/FreeRanksClient/" target="_blank" class="FRC InfoText Link">FreeRanksClient</a></div>
                        <div class="FRC InfoText Normal YouTube"><i class="fab fa-youtube"></i> YouTube: <a href="https://www.youtube.com/@err0r9999k" target="_blank" class="FRC InfoText Link">@err0r9999k</a></div>
                        <div class="FRC InfoText Normal GitHub"><i class="fab fa-github"></i> GitHub: <a href="https://github.com/ERR0R9999K" target="_blank" class="FRC InfoText Link">ERR0R9999K</a></div>
                        <div class="FRC InfoText Normal Discord"><i class="fab fa-discord"></i> Discord: <a href="https://discord.com/users/1139633608827601071" target="_blank" class="FRC InfoText Link">@err0r9999k</a></div>
                        <div class="FRC InfoText Specific">This client helps players get any rank in bloxd.io for free!</div>
                        <div class="FRC InfoText Large">Credits:</div>
                        <div class="FRC InfoText Normal"><i class="fas fa-heart"></i> ©FreeRanksClient - Thank you for using!</div>
                        <div class="FRC InfoText Normal SpaceBG"><i class="fas fa-tornado"></i> GE0RGECR - Thank you very much! He helped create the name tag and cape systems. <a href="https://www.youtube.com/@_GEORGECR_" target="_blank" class="FRC InfoText Link">&gt; GE0RGECR YouTube &lt;</a></div>
                        <div class="FRC InfoText Specific"><i class="fas fa-user-shield"></i> @ERR0R9999K - Creator & Developer</div>
                    </div>
                </div>
            `;
                sectionList.insertAdjacentHTML('afterend', creditsHTML);
            }
        }
    }

    // ============================ EXTRACT SKINS ============================
    function extractSkins(p) {
        const t = {};
        if (!p) return t;
        p.querySelectorAll('[class*="ProfilePictureComponent"]').forEach(c => {
            const s = c.getAttribute('src');
            if (s) {
                if (c.classList.contains('ProfilePictureComponentSkin')) t.skin = s;
                else if (c.classList.contains('ProfilePictureComponentEyes')) t.eyes = s;
                else if (c.classList.contains('ProfilePictureComponentEyebrows')) t.eyebrows = s;
                else if (c.classList.contains('ProfilePictureComponentHead')) t.head = s;
                else if (c.classList.contains('ProfilePictureComponentHat')) t.hat = s;
            }
        });
        return t;
    }

    function updatePlayerSkin(nickname, skins) {
        if (Object.keys(skins).length === 0) return;
        const last = lastSkins.get(nickname);
        if (last && JSON.stringify(last) === JSON.stringify(skins)) return;

        GM_xmlhttpRequest({
            method: 'POST',
            url: DATABASE_URL,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({ nickname: nickname, PlayerSkin: skins }),
            onload: () => lastSkins.set(nickname, skins)
        });
    }

    function updateAllPlayerSkins() {
        const playersInDB = new Set(players.map(p => p.nickname));
        document.querySelectorAll('.LobbyLeaderboardValueText, .ProfilePreview').forEach(el => {
            const name = el.querySelector('.TextFromServerEntityName')?.textContent.trim();
            if (!name || !playersInDB.has(name)) return;
            const skins = extractSkins(el.querySelector('.ProfilePicture'));
            if (Object.keys(skins).length > 0) updatePlayerSkin(name, skins);
        });
    }

    // ============================ NOA FUNCTIONS ============================
	const getColor = (colorValue) => {
		if (!colorValue) return null;
		if (colorValue.startsWith('#')) return colorValue;
		if (BloxdColors[colorValue]) return BloxdColors[colorValue];
		return null;
	};

	const splitName = (str, name) => {
		if (!str || typeof str !== 'string') return { name: null, parts: [str] };
		let patterns = [new RegExp(`^(${name})(.*)$`), new RegExp(`^(${name})\\s+(.*)$`),
						new RegExp(`^(.*)(${name})$`), new RegExp(`^(.*)(${name})(.*)$`)];
		for (let p of patterns) {
			let m = str.match(p);
			if (m) {
				if (m[1] === name) return { name, parts: m[2] ? [m[2].trim()] : [] };
				if (m[2] === name) return { name, parts: [m[1]?.trim(), m[3]?.trim()].filter(v => v && v !== name) };
			}
		}
		return str === name ? { name, parts: [] } : { name: null, parts: [str] };
	};

    function CreateNameTagRanks(noa) {
        if (!noa) {
            console.error("[FRC] Noa not found");
            return;
        }

        if (!noa?.bloxd?.entityNames) return;

        const rankConfigs = {};
        if (typeof ranks !== 'undefined' && ranks && ranks.length) {
            ranks.forEach(rank => {
                if (rank.nameTagRank && rank.show !== false) {
                    rankConfigs[rank.id] = {
                        icon: rank.nameTagRank.icon,
                        mainRGB: rank.nameTagRank.mainRGB,
                        iconShadowRGB: rank.nameTagRank.iconShadowRGB,
                        show: rank.show !== false
                    };
                }
            });
        }

        for (let [id, data] of Object.entries(noa.bloxd.entityNames)) {
            let playerName = data.entityName;
            let player = typeof findPlayer !== 'undefined' ? findPlayer(playerName) : null;

            if (!player) continue;

            let tag = noa.entities.getState(parseInt(id), "entityName");
            if (!tag) continue;

            tag.nameTagInfo = tag.nameTagInfo || {};
            let old = tag.nameTagInfo.content || [];

            let existingRanks = [], elements = [];
            for (let el of old) {
                if (el.icon && el.mainRGB) {
                    existingRanks.push(el);
                } else if (el.str !== undefined) {
                    let { name, parts } = splitName(el.str, playerName);
                    if (name) {
                        elements.push({ ...el, str: name, isName: true });
                        for (let p of parts) {
                            if (p) elements.push({ str: p, style: el.style });
                        }
                    } else {
                        elements.push(el);
                    }
                } else {
                    elements.push(el);
                }
            }

            const playerRanks = player.ranks ? player.ranks.split(',').map(r => r.trim()) : [];

            let newRanks = [];
            playerRanks.forEach(rankId => {
                let conf = rankConfigs[rankId];
                if (conf && conf.show !== false) {
                    newRanks.push({
                        icon: conf.icon,
                        mainRGB: conf.mainRGB,
                        chatTag: [],
                        nameTag: { iconShadowRGB: conf.iconShadowRGB }
                    });
                }
            });

            let merged = [...newRanks];
            let existingIcons = new Set(newRanks.map(r => r.icon));
            existingRanks.forEach(r => {
                if (!existingIcons.has(r.icon)) {
                    merged.push(r);
                    existingIcons.add(r.icon);
                }
            });

            let color = resolveNicknameColor(player.nickname_color) || BloxdColors.Default;

            let result = [...merged];
            let replaced = false;
            for (let el of elements) {
                if (el.isName && !replaced) {
                    result.push({ str: playerName, style: { color } });
                    replaced = true;
                } else if (!el.isName) {
                    result.push(el);
                }
            }
            if (!replaced) result.push({ str: playerName, style: { color } });

            function parseNameTagBG(value) {
                if (!value) return null;

                if (typeof value === 'object' && value !== null) {
                    return value;
                }

                if (typeof value === 'string') {
                    const trimmed = value.trim();
                    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
                        try {
                            const parsed = JSON.parse(trimmed);
                            return parsed;
                        } catch (e) {
                            return value;
                        }
                    }
                    return value;
                }

                return null;
            }

            if (player.NameTagBG) {
                let bgConfig = parseNameTagBG(player.NameTagBG);

                if (typeof bgConfig === 'string') {
                    let bgColor = resolveNicknameColor(bgConfig);
                    if (bgColor) {
                        tag.nameTagInfo.backgroundColor = bgColor;
                    }
                }
                else if (typeof bgConfig === 'object' && bgConfig !== null) {

                    if (bgConfig.content !== undefined) {
                        if (bgConfig.content === null) {
                            delete tag.nameTagInfo.backgroundColor;
                        } else if (typeof bgConfig.content === 'string') {
                            let bgColor = resolveNicknameColor(bgConfig.content);
                            if (bgColor) {
                                tag.nameTagInfo.backgroundColor = bgColor;
                            }
                        }
                    }

                    if (bgConfig.subtitle !== undefined) {
                        if (bgConfig.subtitle === null) {
                            delete tag.nameTagInfo.subtitleBackgroundColor;
                        } else if (typeof bgConfig.subtitle === 'string') {
                            let subtitleColor = resolveNicknameColor(bgConfig.subtitle);
                            if (subtitleColor) {
                                tag.nameTagInfo.subtitleBackgroundColor = subtitleColor;
                            }
                        }
                    }

                    if (bgConfig.border !== undefined) {
                        if (bgConfig.border === null) {
                            delete tag.nameTagInfo.border;
                        } else if (typeof bgConfig.border === 'object' && bgConfig.border !== null) {
                            let border = bgConfig.border;

                            if (!tag.nameTagInfo.border) {
                                tag.nameTagInfo.border = {};
                            }

                            if (border.colour !== undefined) {
                                if (border.colour === null) {
                                    delete tag.nameTagInfo.border.colour;
                                } else if (typeof border.colour === 'string') {
                                    let borderColor = resolveNicknameColor(border.colour);
                                    if (borderColor) {
                                        tag.nameTagInfo.border.colour = borderColor;
                                    }
                                }
                            }

                            if (border.style !== undefined) {
                                if (border.style === null) {
                                    delete tag.nameTagInfo.border.style;
                                } else {
                                    tag.nameTagInfo.border.style = border.style;
                                }
                            }

                            if (border.width !== undefined) {
                                if (border.width === null) {
                                    delete tag.nameTagInfo.border.width;
                                } else {
                                    tag.nameTagInfo.border.width = border.width;
                                }
                            }

                            if (border.applyTo !== undefined) {
                                if (border.applyTo === null) {
                                    delete tag.nameTagInfo.border.applyTo;
                                } else {
                                    tag.nameTagInfo.border.applyTo = border.applyTo;
                                }
                            }

                            if (Object.keys(tag.nameTagInfo.border).length === 0) {
                                delete tag.nameTagInfo.border;
                            }
                        }
                    }
                }
            }

            if (!player.NameTagBG) {
                if (!tag.nameTagInfo.backgroundColor) {
                    tag.nameTagInfo.backgroundColor = "#22283b";
                }
            }

            if (JSON.stringify(tag.nameTagInfo.content) !== JSON.stringify(result)) {
                tag.nameTagInfo.content = result;
                if (tag.nameTagInfoSub && typeof tag.nameTagInfoSub.listener === 'function') {
                    tag.nameTagInfoSub.listener(tag.nameTagInfo);
                }
            }
        }
    }

    function CreateCapes(noa) {
		if (!noa) {
			console.error("[FRC] Noa not found");
			return;
		}

        if (!noa?.bloxd?.entityNames) return;

        const CapeLibrary = {
            'frc': FRCcape,
            'verified': VerifiedCape,
            'tiktok': 'https://err0r9999k.github.io/FreeRanksClient/assets/images/tiktok_cape.png',
            'emerald': 'https://err0r9999k.github.io/FreeRanksClient/assets/images/emerald_cape.png',
            'usa': 'https://err0r9999k.github.io/FreeRanksClient/assets/images/usa_cape.png',
            'vortex': 'https://err0r9999k.github.io/FreeRanksClient/assets/images/vortex_cape.png'
        };

        for (let [id, data] of Object.entries(noa.bloxd.entityNames)) {
            let player = findPlayer?.(data.entityName);
            if (!player?.Cape?.trim()) continue;

            try {
                let cape = noa.entities.getState(parseInt(id), "cape");
                if (!cape) continue;

                if (!cape.mesh) {
                    cape.chooseCape('super');
                }

                let texture = cape.mesh?.material?.diffuseTexture;
                if (texture) {
                    const capeUrl = CapeLibrary[player.Cape];
                    if (capeUrl) {
                        texture.updateURL(capeUrl);
                        texture.hasAlpha = true;
                        if (typeof cape.mesh.material.markAsDirty === "function") {
                            cape.mesh.material.markAsDirty();
                        }
                    }
                }
            } catch(e) {
                console.error("[FRC] Cape error for", data.entityName, e);
            }
        }
    }

	function findNoa() {
		const deepFindSafe = (obj, test, seen = new Set()) => {
			if (!obj || typeof obj !== 'object' || seen.has(obj)) return null;
			seen.add(obj);
			try {
				if (test(obj)) return obj;
				for (const val of Object.values(obj)) {
					const res = deepFindSafe(val, test, seen);
					if (res) return res;
				}
			} catch (e) {}
			return null;
		};

		let noa = null;
		const getNoa = () => {
			if (noa) return noa;
			const element = document.querySelector('div.InventoryWrapper');
			if (!element) return null;
			const fiberKey = Object.keys(element).find(k => k.startsWith('__reactFiber$'));
			if (!fiberKey) return null;
			const fiber = element[fiberKey];
			const test = (obj) => obj && obj.entities && typeof obj.entities.getState === 'function' && obj.camera;
			noa = deepFindSafe(fiber.memoizedProps, test) || deepFindSafe(fiber.memoizedState, test);
			window._noa = noa;
			return noa;
		};

		const result = getNoa();

		if (result) {
			if (thxMessage) {
				console.log("%c[FRC] ⚡Thanks to GE0RGECR for this function❤️! 🔥YouTube channel🎉: https://www.youtube.com/@_GEORGECR_", "color: #007bff; font-weight: bold; font-size: 16px;");
				thxMessage = false;
			}

			CreateNameTagRanks(result);
			CreateCapes(result);
		}

		return result;
	}

    // ============================ EXECUTE RANK FUNCTIONS ============================
    function executeRankFunctions(player) {
        if (!player || !player.ranks) return;

        const playerRanks = player.ranks.split(',');

        playerRanks.forEach(rankId => {
            const rankConfig = findRank(rankId.trim());
            if (!rankConfig || !rankConfig.show) return;

            if (rankConfig.useFunction && rankConfig.useFunction.trim() !== '') {
                switch(rankId.trim()) {
                    case 'super':
                        CreateSuperRankVisuals();
                        break;
                    default:
                        console.log(`[FRC] Unknown function: ${rankConfig.useFunction} for rank ${rankId}`);
                }
            }
        });
    }

    // ============================ PROCESS IMAGE MESSAGES ============================
    function processImageMessages() {
        const chatMessages = document.querySelectorAll('.MessageWrapper.ChatMsgSelectWrapper');

        chatMessages.forEach(message => {
            if (message.hasAttribute('data-frc-image-processed')) return;

            const textFromServer = message.querySelector('.TextFromServer');
            if (!textFromServer) return;

            const individualTexts = textFromServer.querySelectorAll('.IndividualText');
            if (individualTexts.length < 3) return;

            let nameElement = null;
            for (let i = individualTexts.length - 1; i >= 0; i--) {
                const text = individualTexts[i].textContent.trim();
                if (text && text !== ': ' && text !== ':' && !nameElement) {
                    const color = individualTexts[i].style.color;
                    if (color && color !== 'rgb(255, 255, 255)') {
                        nameElement = individualTexts[i];
                        break;
                    }
                }
            }

            if (!nameElement) return;

            const nickname = nameElement.textContent.trim();
            const player = findPlayer(nickname);

            if (!player || (player.typePlayer !== 'owner' && player.typePlayer !== 'verified')) {
                return;
            }

            const messageElement = individualTexts[individualTexts.length - 1];
            if (!messageElement) return;

            const messageText = messageElement.textContent.trim();

            const imgMatch = messageText.match(/<IMG\s*=\s*"([^"]+)"\s*>/i);

            if (imgMatch) {
                const imageValue = imgMatch[1];

                const FALLBACK_IMAGE = 'https://err0r9999k.github.io/FreeRanksClient/assets/images/unloaded.png';

                const insertImage = (imageUrl) => {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imgElement.alt = 'image';
                    imgElement.style.cssText = `width: 60%; height: auto; display: block; margin: 2% auto; border-radius: 10px;`;

                    imgElement.onerror = () => {
                        console.warn(`[FRC] Failed to load image: ${imageUrl}, using fallback`);
                        imgElement.src = FALLBACK_IMAGE;
                        if (imageUrl !== FALLBACK_IMAGE) {
                            ShowError(`[FRC] Image not found, using fallback`, 10000);
                        }
                    };

                    messageElement.innerHTML = '';
                    messageElement.appendChild(imgElement);
                    messageElement.classList.add('frc-image-message');
                    message.setAttribute('data-frc-image-processed', 'true');
                };

                if (IMAGE_LIBRARY.hasOwnProperty(imageValue)) {
                    insertImage(IMAGE_LIBRARY[imageValue]);
                    return;
                }

                let processedUrl = imageValue;

                processedUrl = processedUrl.replace(/,/g, '.');
                processedUrl = processedUrl.replace(/c0m/g, 'com');
                const fullUrl = 'https://' + processedUrl;

                insertImage(fullUrl);
            }
        });
    }

    // ============================ CLIENT MESSAGES ============================
    const style = document.createElement('style');
    style.id = 'custom-notification-styles';
    style.textContent = `
/* Notifications styles */
#custom-notification-container{position:fixed;top:20px;right:20px;z-index:999999;display:flex;flex-direction:column;gap:10px;pointer-events:none;}
.custom-notification{display:flex;min-width:200px;max-width:250px;background:#1e1e1e;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.3);animation:slideIn 0.3s ease-out;pointer-events:auto;}
.custom-notification-left-border{width:4px;flex-shrink:0;}
.custom-notification-content{padding:12px;color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:1.4;word-wrap:break-word;word-break:break-word;flex:1;}
@keyframes slideIn{from{transform:translateX(100%);opacity:0;}to{transform:translateX(0);opacity:1;}}
@keyframes slideOut{from{transform:translateX(0);opacity:1;}to{transform:translateX(100%);opacity:0;}}.slide-out{animation:slideOut 0.3s ease-out;}
    `;

    if (!document.querySelector('#custom-notification-styles')) {
        document.head.appendChild(style);
    }

    let notificationContainer = document.querySelector('#custom-notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'custom-notification-container';
        document.body.appendChild(notificationContainer);
    }

    function removeNotification(notification) {
        if (!notification || !notification.parentNode) return;

        notification.classList.add('slide-out');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }

    function ShowMSG(color, message, duration = 3000) {
        const notification = document.createElement('div');
        notification.className = 'custom-notification';

        const leftBorder = document.createElement('div');
        leftBorder.className = 'custom-notification-left-border';
        leftBorder.style.backgroundColor = `${color}`;

        const content = document.createElement('div');
        content.className = 'custom-notification-content';
        content.textContent = message;

        notification.appendChild(leftBorder);
        notification.appendChild(content);

        notification.addEventListener('click', () => {
            removeNotification(notification);
        });

        notificationContainer.insertBefore(notification, notificationContainer.firstChild);

        if (duration > 0) {
            setTimeout(() => {
                removeNotification(notification);
            }, duration);
        }

        return notification;
    }

    function ShowError(message, duration = 3000) {
        return ShowMSG("#ff4444", message, duration);
    }

    // ============================ ADD GAME STYLES ============================
    function AddGameStyles() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://err0r9999k.github.io/FreeRanksClient-Files/bloxd.css';

        document.head.appendChild(link);

        const style = document.createElement('style');
        style.id = 'Game Styles';
        style.textContent = `
/* Styles */
:root {
    --space-bg: url(${IMAGE_LIBRARY.Space});
    --client-bg: url('${ClientBackground}');
    --client-logo: url(${FreeRanksClientLogo});
}
        `;
        document.head.appendChild(style);
    }

    function CreateLogos() {
        // Menu Title
        const title = document.querySelectorAll('.Title');
        for(let i = 0; i < title.length; i++) {
            if (!title[i].querySelector('.fas.fa-zap')) {
                title[i].innerHTML = '';

                const icon = document.createElement('i');
                icon.className = 'fas fa-zap';

                title[i].appendChild(icon);
                title[i].appendChild(document.createTextNode('FreeRanksClient'));
            }
        }

        // In Game Title
        let inGameLogo = document.querySelector('.InGameHeaderLogo');

        if (inGameLogo) {
            if (!inGameLogo.querySelector('.fas.fa-zap')) {
                const icon = document.createElement('i');
                icon.className = 'fas fa-zap';

                for (let node of inGameLogo.childNodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        inGameLogo.insertBefore(icon, node);
                        node.nodeValue = 'FreeRanksClient';
                        break;
                    }
                }
            }
        }

        // Loading Title
        const loadingOverlay = document.querySelector('.LoadingOverlayRightBody');

        if (loadingOverlay) {
            if (!loadingOverlay.querySelector('.Text-Logo')) {
                const textLogo = document.createElement('div');
                textLogo.className = 'Text-Logo';
                textLogo.innerHTML = '<i class="fas fa-zap"></i> FreeRanksClient';

                textLogo.style.cssText = `
                    font-size: 6rem;
                    margin-bottom: 2rem;
                `;

                loadingOverlay.insertBefore(textLogo, loadingOverlay.firstChild);
            }
        }

        // Subtitle
        let container = document.querySelector('.TitleContainer');
        if (container) {
            let subtitle = container.querySelector('.SubTitleList');
            if (subtitle) {
                subtitle.textContent = SubVersion;
            }
        }

        // Website Name
        if (SiteName) {
            document.title = SiteName;
        }
    }

	// ============================ CREATE SUPER RANK VISUALS ============================
	function CreateSuperRankVisuals() {
		function addBoxes() {
			const el = document.querySelector('.SettingsMenuRightInner.AccountSettings');
			if (el && !el.querySelector('.CustomBox')) {
				const box1 = document.createElement('div');
				box1.className = 'SettingBox CustomBox';
				box1.innerHTML = `
	<div class="SettingBoxInner">
		<div class="flex-center">
			<i class="fas fa-zap icon-gold"></i>
			<span class="text-gold">Super Rank</span>
			<span class="text-gray">(∞ days left)</span>
		</div>
		<div class="flex-start mb-18">
			<div class="text-gray ml-20">
				• ∞ days ago you received ∞ days from YT__ERR0R9999K__YT<br>
				• ∞ days ago you received 90 days from FreeRanksClient
			</div>
		</div>
		<div class="flex-start mb-18">
			<div class="NewButton GoldButton">
				<div class="ButtonBottomBorder"></div>
				<div class="ButtonTopBorder"></div>
				<div class="ButtonBody">
					<i class="fas fa-zap icon-white"></i>
					<span class="text-white">Get 90 additional days for 8.99 USD</span>
				</div>
			</div>
		</div>
		<div class="flex-start-no-mb">
			<div class="NewButton GoldButton">
				<div class="ButtonBottomBorder"></div>
				<div class="ButtonTopBorder"></div>
				<div class="ButtonBody">
					<i class="fas fa-zap icon-white"></i>
					<span class="text-white">Gift Super Rank</span>
				</div>
			</div>
		</div>
	</div>
				`;
				el.appendChild(box1);

				const box2 = document.createElement('div');
				box2.className = 'SettingBox';
				box2.innerHTML = `
	<div class="SettingBoxInner">
		<div class="flex-center-no-mb">
			<span class="text-gray">∞ days ago you purchased ∞ days</span>
		</div>
	</div>
				`;
				el.appendChild(box2);
			}
		}

		if (window.superRankObserver) {
			window.superRankObserver.disconnect();
		}

		window.superRankObserver = new MutationObserver(function(mutations) {
			const settingsMenu = document.querySelector('.SettingsMenuRightInner.AccountSettings');
			if (settingsMenu && !settingsMenu.querySelector('.CustomBox')) {
				addBoxes();
			}
		});

		window.superRankObserver.observe(document.body, {
			childList: true,
			subtree: true
		});
	}

    // ============================ SCANNING BLOXD.IO ============================
    function scheduleScan() {
        clearTimeout(scanTimeout);
        scanTimeout = setTimeout(() => {
            if (isPageVisible) {
                requestAnimationFrame(() => {
                    scanForChanges();
                });
            }
        }, 100);
    }

    function scanForChanges() {
        const previews = document.querySelectorAll('.PlayerNamePreview.PlayerNamePreviewNoRanks');
        const profiles = document.querySelectorAll('.ProfilePreviewRight, .PlayerProfileLeft');
        const chatMessages = document.querySelectorAll('.MessageWrapper.ChatMsgSelectWrapper');
        const leaderboardEntries = document.querySelectorAll('.PlayerPfpAndName');

        for (const preview of previews) {
            if (processedPreviews.has(preview)) continue;
            CreateMenuRank(preview);
        }

        for (const profile of profiles) {
            if (processedProfiles.has(profile)) continue;
            CreateNameRank(profile);
        }

        for (const message of chatMessages) {
            if (processedChats.has(message)) continue;
            CreateChatRank(message);
        }

        processImageMessages();

        for (const entry of leaderboardEntries) {
            if (processedLeaderboards.has(entry)) continue;
            CreateLeaderboardRank(entry);
        }

        CreateFRCinfo();
        findCurrentPlayer();

        if (currentPlayer) {
            executeRankFunctions(currentPlayer);
        }
    }

    // ============================ CREATE MENU RANK ============================
    function CreateMenuRank(preview) {
        const nameElement = preview.querySelector('.TextFromServerEntityName');
        if (!nameElement) return;

        const player = findPlayer(nameElement.textContent.trim());
        if (!player) return;

        processedPreviews.add(preview);

        const resolvedColor = resolveNicknameColor(player.nickname_color);
        if (resolvedColor) {
            nameElement.style.color = resolvedColor;
        }

        if (!player.ranks) return;

        let ranksContainer = preview.querySelector('.bloxd-ranksContainer');
        if (!ranksContainer) {
            ranksContainer = document.createElement('div');
            ranksContainer.className = 'bloxd-ranksContainer';
            ranksContainer.style.cssText = 'display: flex; height: 100%; align-items: center;';

            const textFromServer = preview.querySelector('.TextFromServer');
            if (textFromServer) {
                preview.insertBefore(ranksContainer, textFromServer);
            }
        }

        const playerRanks = player.ranks.split(',');
        const fragment = document.createDocumentFragment();

        playerRanks.forEach(rankId => {
            const rankConfig = findRank(rankId.trim());
            if (!rankConfig || !rankConfig.show) return;

            if (ranksContainer.querySelector(`.menu-rank.${rankConfig.customClass || ''}`)) return;

            const rankElement = document.createElement('div');
            rankElement.className = `menu-rank ${rankConfig.customClass || ''}`;

            let styleText = 'height: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center;';

            if (rankConfig.bgColor) {
                if (rankConfig.bgColor.includes('linear-gradient')) {
                    styleText += ` background: ${rankConfig.bgColor};`;
                } else {
                    styleText += ` background-color: ${rankConfig.bgColor};`;
                }
            }

            rankElement.style.cssText = styleText;

            if (rankConfig.menurank && rankConfig.menurank.length) {
                rankElement.innerHTML = rankConfig.menurank.join('');
            }

            fragment.appendChild(rankElement);
        });

        if (fragment.children.length > 0) {
            ranksContainer.appendChild(fragment);
        }
    }

    // ============================ FRC INFO ============================
    function CreateFRCinfo() {
        function CreateListBarInfo() {
            const menuSideBar = document.querySelector('.MenuSideBar');
            if (!menuSideBar) return;

            const firstSidebarBody = menuSideBar.querySelector('.MenuSideBarBody');
            if (!firstSidebarBody) return;

            const secondSidebarBody = firstSidebarBody.querySelector('.MenuSideBarBody');
            if (!secondSidebarBody) return;

            if (secondSidebarBody.querySelector('.FRC-SideBarInfo')) return;

            const sidebarTab = document.createElement('div');
            sidebarTab.className = 'MenuSideBarBodyTab FRC-SideBarInfo';

            const icon = document.createElement('div');
            icon.className = 'MenuSideBarBodyTabIcon';
            icon.innerHTML = '<i class="fas fa-zap" style="opacity: 0.5"></i>';

            const text = document.createElement('div');
            text.textContent = 'Free Ranks Client';

            sidebarTab.appendChild(icon);
            sidebarTab.appendChild(text);

            sidebarTab.addEventListener('click', (e) => {
                e.stopPropagation();
                window.open('https://err0r9999k.github.io/FreeRanksClient/', '_blank');
            });

            secondSidebarBody.appendChild(sidebarTab);
        }

        CreateListBarInfo();
    }

    // ============================ CREATE NAME RANK ============================
    function CreateNameRank(profile) {
        const isPlayerProfile = profile.classList.contains('PlayerProfileLeft');

        let nameContainer;
        let textFromServer;
        let nameWithTags;
        let nameElement;

        if (isPlayerProfile) {
            nameContainer = profile.querySelector('.PlayerProfileName');
            if (!nameContainer) return;

            textFromServer = nameContainer.querySelector('.TextFromServer');
            if (!textFromServer) return;

            nameWithTags = textFromServer.querySelector('.TextFromServerEntityNameWithTags');
            if (!nameWithTags) return;

            nameElement = nameWithTags.querySelector('.TextFromServerEntityName');
            if (!nameElement) return;
        } else {
            nameContainer = profile.querySelector('.ProfilePreviewName');
            if (!nameContainer) return;

            textFromServer = nameContainer.querySelector('.TextFromServer');
            if (!textFromServer) return;

            nameWithTags = textFromServer.querySelector('.TextFromServerEntityNameWithTags');
            if (!nameWithTags) return;

            nameElement = nameWithTags.querySelector('.TextFromServerEntityName');
            if (!nameElement) return;
        }

        const player = findPlayer(nameElement.textContent.trim());
        if (!player) return;

        processedProfiles.add(profile);

        const resolvedColor = resolveNicknameColor(player.nickname_color);
        if (resolvedColor) {
            nameElement.style.color = resolvedColor;
        }

        if (!player.ranks) return;

        let ranksContainer = nameWithTags.querySelector('.bloxd-nameRanksContainer');
        if (!ranksContainer) {
            ranksContainer = document.createElement('div');
            ranksContainer.className = 'bloxd-nameRanksContainer';
            ranksContainer.style.cssText = 'display: inline-flex; align-items: center; text-shadow: none;';

            nameWithTags.insertBefore(ranksContainer, nameElement);
        }

        const playerRanks = player.ranks.split(',');
        const fragment = document.createDocumentFragment();

        playerRanks.forEach(rankId => {
            const rankConfig = findRank(rankId.trim());
            if (!rankConfig || !rankConfig.show) return;

            if (ranksContainer.querySelector(`.name-rank.${rankConfig.customClass || ''}`)) return;

            const rankElement = document.createElement('span');
            rankElement.className = `name-rank ${rankConfig.customClass || ''}`;
            rankElement.style.cssText = 'display: inline-flex; align-items: center; margin-right: 3px;';

            if (rankConfig.namerank && rankConfig.namerank.length) {
                rankElement.innerHTML = rankConfig.namerank.join('');
            }

            fragment.appendChild(rankElement);
        });

        if (fragment.children.length > 0) {
            ranksContainer.appendChild(fragment);
        }
    }

    // ============================ CREATE CHAT RANK ============================
    function CreateChatRank(message) {
        const textFromServer = message.querySelector('.TextFromServer');
        if (!textFromServer) return;

        const individualTexts = textFromServer.querySelectorAll('.IndividualText');
        if (individualTexts.length < 3) return;

        let nameElement = null;

        for (let i = individualTexts.length - 1; i >= 0; i--) {
            const text = individualTexts[i].textContent.trim();
            if (text && text !== ': ' && text !== ':' && !nameElement) {
                const color = individualTexts[i].style.color;
                if (color && color !== 'rgb(255, 255, 255)') {
                    nameElement = individualTexts[i];
                    break;
                }
            }
        }

        if (!nameElement) return;

        const player = findPlayer(nameElement.textContent.trim());
        if (!player) return;

        processedChats.add(message);

        const resolvedColor = resolveNicknameColor(player.nickname_color);
        if (resolvedColor) {
            nameElement.style.color = resolvedColor;
        }

        if (!player.ranks) return;

        let ranksContainer = message.querySelector('.bloxd-chatRanksContainer');
        if (!ranksContainer) {
            ranksContainer = document.createElement('div');
            ranksContainer.className = 'bloxd-chatRanksContainer';
            ranksContainer.style.cssText = 'display: inline-flex; align-items: center;';
            textFromServer.insertBefore(ranksContainer, nameElement);
        }

        const playerRanks = player.ranks.split(',');
        const fragment = document.createDocumentFragment();

        playerRanks.forEach(rankId => {
            const rankConfig = findRank(rankId.trim());
            if (!rankConfig || !rankConfig.show) return;

            if (ranksContainer.querySelector(`.chat-rank.${rankConfig.customClass || ''}`)) return;

            const rankElement = document.createElement('span');
            rankElement.className = `chat-rank ${rankConfig.customClass || ''}`;

            if (rankConfig.chatrank && rankConfig.chatrank.length) {
                rankElement.innerHTML = rankConfig.chatrank.join('');
            }

            fragment.appendChild(rankElement);
        });

        if (fragment.children.length > 0) {
            ranksContainer.appendChild(fragment);
        }
    }

    // ============================ CREATE LEADERBOARD RANK ============================
    function CreateLeaderboardRank(entry) {
        const textFromServer = entry.querySelector('.TextFromServer');
        if (!textFromServer) return;

        const nameWithTags = textFromServer.querySelector('.TextFromServerEntityNameWithTags');
        if (!nameWithTags) return;

        const nameElement = nameWithTags.querySelector('.TextFromServerEntityName');
        if (!nameElement) return;

        const player = findPlayer(nameElement.textContent.trim());
        if (!player) return;

        processedLeaderboards.add(entry);

        const resolvedColor = resolveNicknameColor(player.nickname_color);
        if (resolvedColor) {
            nameElement.style.color = resolvedColor;
        }

        if (!player.ranks) return;

        let ranksContainer = nameWithTags.querySelector('.bloxd-leaderboardRanksContainer');
        if (!ranksContainer) {
            ranksContainer = document.createElement('div');
            ranksContainer.className = 'bloxd-leaderboardRanksContainer';
            ranksContainer.style.cssText = 'display: inline-flex; align-items: center;';
            nameWithTags.insertBefore(ranksContainer, nameElement);
        }

        const playerRanks = player.ranks.split(',');
        const fragment = document.createDocumentFragment();

        playerRanks.forEach(rankId => {
            const rankConfig = findRank(rankId.trim());
            if (!rankConfig || !rankConfig.show) return;

            if (ranksContainer.querySelector(`.leaderboard-rank.${rankConfig.customClass || ''}`)) return;

            const rankElement = document.createElement('span');
            rankElement.className = `leaderboard-rank ${rankConfig.customClass || ''}`;
            rankElement.style.cssText = 'display: inline-flex; align-items: center; margin-right: 3px;';

            if (rankConfig.namerank && rankConfig.namerank.length) {
                rankElement.innerHTML = rankConfig.namerank.join('');
            }

            fragment.appendChild(rankElement);
        });

        if (fragment.children.length > 0) {
            ranksContainer.appendChild(fragment);
        }
    }

    // ============================ FIX FONTAWESOME ============================
    function FixFontAwesomeIcons() {
        try {
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.id = 'FontAwesome-Styles';
            linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

            document.head.appendChild(linkElement);
        } catch (error) {
            console.error('[FRC] Failed to load FontAwesome icons:', error);
            ShowError('[FRC] Failed to load FontAwesome icons: ' + error.message, 8000);
        }
    }

    // ============================ OPTIMIZED OBSERVER ============================
    function startObserver() {
        const observer = new MutationObserver((mutations) => {
            let hasAddedNodes = false;
            for (let i = 0; i < mutations.length; i++) {
                if (mutations[i].addedNodes.length > 0) {
                    hasAddedNodes = true;
                    break;
                }
            }

            if (hasAddedNodes && isPageVisible) {
                scheduleScan();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return observer;
    }

    // ============================ VISIBILITY OPTIMIZATION ============================
    function setupVisibilityTracking() {
        document.addEventListener('visibilitychange', () => {
            isPageVisible = !document.hidden;
            if (isPageVisible) {
                scheduleScan();
            }
        });
    }

    // ============================ INITIALIZE ============================
    function init() {
        console.log(`%c${WelcomeMessage}`, `color: ${WelcomeMessageColor}; font-weight: bold; font-size: 16px;`);
        ShowMSG(WelcomeMessageColor, WelcomeMessage, 8000);

        setInterval(removeAds, 8000);
        setInterval(CreateLogos, 2000);
        setInterval(updateAllPlayerSkins, 3000);
        setInterval(findNoa, 5500);

        CreateLogos();
        setupVisibilityTracking();
        loadData();
        FixFontAwesomeIcons();
        AddGameStyles();
        CreateCredits();

        const creditsObserver = new MutationObserver(() => {
            CreateCredits();
        });

        creditsObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });

        const observer = startObserver();

        setInterval(() => {
            if (isPageVisible) {
                loadData();
            }
        }, 120000);

        window.addEventListener('beforeunload', () => {
            observer.disconnect();
            if (superRankObserver) {
                superRankObserver.disconnect();
            }
            clearTimeout(scanTimeout);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
