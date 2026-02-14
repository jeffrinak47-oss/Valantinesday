/* ========================================= */
/* INTRO OVERLAY CONTROL */
/* ========================================= */

const introOverlay = document.getElementById("introOverlay");
const enterBtn = document.getElementById("enterUniverseBtn");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        introOverlay.style.opacity = "0";
        setTimeout(() => {
            introOverlay.style.display = "none";
        }, 1000);
    });
}

/* ========================================= */
/* LOVE TIMER ENGINE */
/* ========================================= */

function updateLoveTimer() {
    const startDate = new Date("February 24, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    const timer = document.getElementById("love-timer");
    if (timer) {
        timer.innerHTML = `
            💗 ${days} Days 
            💞 ${hours} Hours 
            💘 ${minutes} Minutes 
            💓 ${seconds} Seconds
        `;
    }
}

setInterval(updateLoveTimer, 1000);
updateLoveTimer();

/* ========================================= */
/* FLOATING HEART GENERATOR */
/* ========================================= */

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "floatUp 6s linear forwards";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 800);

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);

/* ========================================= */
/* SPARKLE SYSTEM */
/* ========================================= */

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparkle.style.opacity = "0.3";
    sparkle.style.fontSize = "14px";
    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 5000);
}

setInterval(createSparkle, 1000);

/* ========================================= */
/* SECRET BUTTON SYSTEM */
/* ========================================= */

const secretBtn = document.getElementById("secretButton");
const secretMsg = document.getElementById("secretMessage");

if (secretBtn) {
    secretBtn.addEventListener("click", () => {
        secretMsg.style.display = "block";
        secretMsg.style.animation = "fadeIn 1s ease";
    });
}

const fadeStyle = document.createElement("style");
fadeStyle.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}`;
document.head.appendChild(fadeStyle);

/* ========================================= */
/* PRESS P SURPRISE */
/* ========================================= */

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "p") {
        alert("💗 P is for Pritikah. P is for Perfect. P is for My Person. 💗");
        emojiBurst();
    }
});

/* ========================================= */
/* DOUBLE CLICK SURPRISE */
/* ========================================= */

document.addEventListener("dblclick", () => {
    alert("🥺 You double clicked? That means double love!");
    emojiBurst();
});

/* ========================================= */
/* EMOJI BURST EFFECT */
/* ========================================= */

function emojiBurst() {
    const emojis = ["💗","💞","💘","💕","💓","💝","🎀","✨"];
    for (let i = 0; i < 25; i++) {
        const emoji = document.createElement("div");
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = Math.random() * window.innerHeight + "px";
        emoji.style.fontSize = Math.random() * 25 + 20 + "px";
        emoji.style.pointerEvents = "none";

        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 2000);
    }
}

/* ========================================= */
/* BLUE MODE (HER FAV COLOUR) */
/* ========================================= */

document.addEventListener("keydown", (e) => {
    if (e.key === "b") {
        document.body.style.background = "linear-gradient(135deg, #001f3f, #003366, #0055aa)";
        alert("💙 Blue mode activated for Ammu 💙");
    }
});

/* ========================================= */
/* NUMBER 26 GLOW EFFECT */
/* ========================================= */

function glow26() {
    if (new Date().getDate() === 26) {
        emojiBurst();
    }
}

glow26();

/* ========================================= */
/* RAIN MODE */
/* ========================================= */

function rainEffect() {
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement("div");
        drop.innerHTML = "🌧️";
        drop.style.position = "fixed";
        drop.style.left = Math.random() * window.innerWidth + "px";
        drop.style.top = "-20px";
        drop.style.fontSize = "14px";
        drop.style.animation = "rainFall 4s linear forwards";
        drop.style.pointerEvents = "none";

        document.body.appendChild(drop);
        setTimeout(() => drop.remove(), 4000);
    }
}

const rainStyle = document.createElement("style");
rainStyle.innerHTML = `
@keyframes rainFall {
    0% { transform: translateY(0); }
    100% { transform: translateY(110vh); }
}`;
document.head.appendChild(rainStyle);

document.addEventListener("keydown", (e) => {
    if (e.key === "r") {
        rainEffect();
    }
});

/* ========================================= */
/* AUTO PLAY SONG ON FIRST CLICK */
/* ========================================= */

const song = document.getElementById("loveSong");

document.body.addEventListener("click", () => {
    if (song && song.paused) {
        song.play().catch(() => {});
    }
}, { once: true });

/* ========================================= */
/* RANDOM EMOJI AMBIENCE */
/* ========================================= */

function randomAmbience() {
    const emojis = ["🥺","💗","💞","💘","💕","✨","🎀","💙"];
    const emoji = document.createElement("div");
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.right = "10px";
    emoji.style.bottom = "10px";
    emoji.style.fontSize = "18px";
    emoji.style.opacity = "0.4";
    emoji.style.pointerEvents = "none";

    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
}

setInterval(randomAmbience, 4000);


/* ===================================================== */
/* COSMIC VIDEO RANDOM ENGINE */
/* ===================================================== */

const skyVideo = document.getElementById("skyVideoPlayer");
const constellationNodes = document.querySelectorAll(".constellation-node");
const starIndicators = document.querySelectorAll(".star-indicator");

let totalEdits = 70;

/* Play random edit */
function playRandomEdit() {
    const randomNumber = Math.floor(Math.random() * totalEdits) + 1;
    skyVideo.src = `videos/edit${randomNumber}.mp4`;
    skyVideo.play();

    igniteStars(randomNumber);
    cosmicPulse();
}

/* Attach click to all constellation nodes */
constellationNodes.forEach(node => {
    node.addEventListener("click", () => {
        node.style.transform = "scale(2)";
        node.style.boxShadow = "0 0 40px white";
        setTimeout(() => {
            node.style.transform = "scale(1)";
        }, 600);

        playRandomEdit();
        createStarExplosion(node);
    });
});

/* ===================================================== */
/* STAR COUNTER IGNITION */
/* ===================================================== */

function igniteStars(index) {
    starIndicators.forEach(star => {
        star.style.background = "white";
        star.style.boxShadow = "0 0 15px white";
    });

    if (starIndicators[index - 1]) {
        starIndicators[index - 1].style.background = "#ff66cc";
        starIndicators[index - 1].style.boxShadow = "0 0 30px #ff66cc";
    }
}

/* ===================================================== */
/* STAR EXPLOSION EFFECT */
/* ===================================================== */

function createStarExplosion(originNode) {
    for (let i = 0; i < 20; i++) {
        const spark = document.createElement("div");
        spark.innerHTML = "✨";
        spark.style.position = "absolute";
        spark.style.left = originNode.offsetLeft + "px";
        spark.style.top = originNode.offsetTop + "px";
        spark.style.fontSize = Math.random() * 20 + 10 + "px";
        spark.style.pointerEvents = "none";
        spark.style.transition = "1s ease";

        document.querySelector(".sky-field").appendChild(spark);

        setTimeout(() => {
            spark.style.transform = `
                translate(${Math.random() * 200 - 100}px, 
                          ${Math.random() * 200 - 100}px)
                scale(0)
            `;
            spark.style.opacity = "0";
        }, 10);

        setTimeout(() => spark.remove(), 1000);
    }
}

/* ===================================================== */
/* COSMIC PULSE WHEN VIDEO PLAYS */
/* ===================================================== */

function cosmicPulse() {
    const portal = document.querySelector(".portal-frame");
    portal.style.boxShadow = "0 0 80px #ff66cc";

    setTimeout(() => {
        portal.style.boxShadow = "0 0 40px #ff66cc";
    }, 800);
}

/* ===================================================== */
/* SHOOTING STARS SYSTEM */
/* ===================================================== */

function createShootingStar() {
    const star = document.createElement("div");
    star.innerHTML = "🌠";
    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = "0px";
    star.style.fontSize = "20px";
    star.style.pointerEvents = "none";
    star.style.transition = "2s linear";

    document.body.appendChild(star);

    setTimeout(() => {
        star.style.transform = "translate(-200px, 600px)";
        star.style.opacity = "0";
    }, 10);

    setTimeout(() => star.remove(), 2000);
}

setInterval(createShootingStar, 4000);

/* ===================================================== */
/* MOON REACTS WHEN VIDEO PLAYS */
/* ===================================================== */

const moon = document.querySelector(".moon");

skyVideo.addEventListener("play", () => {
    moon.style.boxShadow = "0 0 80px #ffffff";
});

skyVideo.addEventListener("pause", () => {
    moon.style.boxShadow = "0 0 40px white";
});

/* ===================================================== */
/* AUTO AMBIENT STAR FLOAT */
/* ===================================================== */

function floatingCosmicDust() {
    const dust = document.createElement("div");
    dust.innerHTML = "✨";
    dust.style.position = "fixed";
    dust.style.left = Math.random() * window.innerWidth + "px";
    dust.style.top = Math.random() * window.innerHeight + "px";
    dust.style.opacity = "0.3";
    dust.style.fontSize = "12px";
    dust.style.pointerEvents = "none";

    document.body.appendChild(dust);

    setTimeout(() => {
        dust.style.transform = "translateY(-30px)";
        dust.style.opacity = "0";
    }, 1000);

    setTimeout(() => dust.remove(), 2000);
}

setInterval(floatingCosmicDust, 1200);

/* ===================================================== */
/* KEYBOARD COSMIC MODES */
/* ===================================================== */

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "a") {
        alert("💗 Ammu Mode Activated 💗");
        createStarExplosion(constellationNodes[0]);
    }

    if (e.key.toLowerCase() === "m") {
        alert("🌙 Moon Glow Intensified 🌙");
        moon.style.boxShadow = "0 0 120px white";
    }

    if (e.key.toLowerCase() === "s") {
        playRandomEdit();
    }
});

/* ===================================================== */
/* INITIAL STAR FIELD LIFE */
/* ===================================================== */

window.addEventListener("load", () => {
    for (let i = 0; i < 30; i++) {
        createShootingStar();
    }
});




/* ==========================================
   LOVE FILM ULTRA ENGINE
========================================== */

const loveFilmPlayer = document.getElementById("loveFilmPlayer");

if (loveFilmPlayer) {

    let currentEdit = 1;
    const totalEdits = 70;

    const cinemaFrame = document.querySelector(".film-cinema-frame");

    /* Preload next video */
    function preloadVideo(index) {
        const preload = document.createElement("video");
        preload.src = `videos/edit{index}.mp4`;
    }

    /* Glow pulse animation */
    function pulseFrame() {
        cinemaFrame.style.boxShadow =
            "0 0 60px #ff4ecb, 0 0 120px #4e6bff";
        setTimeout(() => {
            cinemaFrame.style.boxShadow =
                "0 0 40px #ff4ecb, 0 0 80px #4e6bff";
        }, 600);
    }

    /* Floating reaction */
    function createFloatingReaction() {
        const reactions = ["💗", "💞", "💘", "🎀", "💟", "✨"];
        const span = document.createElement("span");
        span.innerText = reactions[Math.floor(Math.random() * reactions.length)];

        span.style.position = "fixed";
        span.style.left = Math.random() * 100 + "vw";
        span.style.bottom = "0px";
        span.style.fontSize = "24px";
        span.style.opacity = "0.8";
        span.style.pointerEvents = "none";
        span.style.transition = "transform 4s linear, opacity 4s";

        document.body.appendChild(span);

        setTimeout(() => {
            span.style.transform = "translateY(-100vh)";
            span.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            span.remove();
        }, 4000);
    }

    /* Special glow for edit 26 */
    function special26Effect() {
        cinemaFrame.style.boxShadow =
            "0 0 80px #00bfff, 0 0 150px #4e6bff";
        setTimeout(() => {
            cinemaFrame.style.boxShadow =
                "0 0 40px #ff4ecb, 0 0 80px #4e6bff";
        }, 3000);
    }

    /* Play current edit */
    function playCurrentEdit() {

        if (currentEdit > totalEdits) {
            currentEdit = 1;
        }

        loveFilmPlayer.src = `videos/edit${currentEdit}.mp4`;
        loveFilmPlayer.play();

        pulseFrame();
        createFloatingReaction();

        if (currentEdit === 26) {
            special26Effect();
        }

        preloadVideo(currentEdit + 1);

        currentEdit++;
    }

    /* When video ends → next */
    loveFilmPlayer.addEventListener("ended", () => {
        playCurrentEdit();
    });

    /* Start automatically */
    window.addEventListener("load", () => {
        playCurrentEdit();
    });

    /* Auto floating reactions every few seconds */
    setInterval(() => {
        createFloatingReaction();
    }, 5000);

}


/* ==========================================
   SURPRISE PAGE – LEGENDARY ENGINE
========================================== */

const surpriseBody = document.querySelector(".surprise-body");

if (surpriseBody) {

    /* ===============================
       1️⃣ LOVE TIMER
    =============================== */

    const startDate = new Date("February 24, 2025 00:00:00").getTime();

    function updateLoveTimer() {
        const now = new Date().getTime();
        const distance = now - startDate;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById("surpriseDays").innerText = days;
        document.getElementById("surpriseHours").innerText = hours;
        document.getElementById("surpriseMinutes").innerText = minutes;
        document.getElementById("surpriseSeconds").innerText = seconds;
    }

    setInterval(updateLoveTimer, 1000);
    updateLoveTimer();


    /* ===============================
       2️⃣ CONFETTI SHOWER ON LOAD
    =============================== */

    function createConfetti() {
        const emojis = ["💗","🎀","💞","✨","🎁","💘"];
        const confetti = document.createElement("span");

        confetti.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "24px";
        confetti.style.transition = "transform 4s linear, opacity 4s";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform = "translateY(110vh)";
            confetti.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }

    for (let i = 0; i < 30; i++) {
        setTimeout(createConfetti, i * 150);
    }


    /* ===============================
       3️⃣ GIFT BOX CLICK BURST
    =============================== */

    const giftBoxes = document.querySelectorAll(".gift-box");

    giftBoxes.forEach(box => {
        box.addEventListener("click", () => {

            for (let i = 0; i < 10; i++) {
                createConfetti();
            }

            box.style.transform = "scale(1.15)";
            setTimeout(() => {
                box.style.transform = "scale(1)";
            }, 300);
        });
    });


    /* ===============================
       4️⃣ LETTER GLOW & OPEN EFFECT
    =============================== */

    const letter = document.querySelector(".letter-card");

    if (letter) {
        letter.addEventListener("click", () => {
            letter.style.boxShadow = "0 0 80px #ffffff";
            letter.style.transform = "scale(1.05)";
            setTimeout(() => {
                letter.style.boxShadow = "0 0 40px #ff66cc";
                letter.style.transform = "scale(1)";
            }, 800);
        });
    }


    /* ===============================
       5️⃣ TEDDY BOUNCE MAGIC
    =============================== */

    const teddySection = document.querySelector(".teddy-grid");

    if (teddySection) {
        teddySection.addEventListener("click", () => {
            teddySection.style.transform = "scale(1.1)";
            setTimeout(() => {
                teddySection.style.transform = "scale(1)";
            }, 400);
        });
    }


    /* ===============================
       6️⃣ SCROLL HEART RAIN
    =============================== */

    window.addEventListener("scroll", () => {

        if (Math.random() < 0.3) {

            const heart = document.createElement("span");
            heart.innerText = "💗";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "0";
            heart.style.fontSize = "20px";
            heart.style.transition = "transform 5s linear, opacity 5s";
            heart.style.zIndex = "9999";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.transform = "translateY(100vh)";
                heart.style.opacity = "0";
            }, 50);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

    });


    /* ===============================
       7️⃣ RANDOM LOVE POPUPS
    =============================== */

    const loveMessages = [
        "You are my forever 💗",
        "My blue sky 💙",
        "My rainy season 🌧",
        "My sweet vanilla 🍦",
        "Bike rides with you 🏍",
        "Ammu forever 🎀"
    ];

    function randomLovePopup() {
        const popup = document.createElement("div");
        popup.innerText = loveMessages[Math.floor(Math.random()*loveMessages.length)];

        popup.style.position = "fixed";
        popup.style.bottom = "20px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.padding = "10px 25px";
        popup.style.borderRadius = "30px";
        popup.style.background = "rgba(255,255,255,0.2)";
        popup.style.backdropFilter = "blur(10px)";
        popup.style.boxShadow = "0 0 30px #ff66cc";
        popup.style.zIndex = "9999";
        popup.style.opacity = "0";
        popup.style.transition = "opacity 1s";

        document.body.appendChild(popup);

        setTimeout(() => popup.style.opacity = "1", 100);
        setTimeout(() => popup.style.opacity = "0", 4000);
        setTimeout(() => popup.remove(), 5000);
    }

    setInterval(randomLovePopup, 15000);

}









































