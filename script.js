/* ===========================
   Typing Roles
=========================== */
const roles = [
  "Software Developer",
  "Flutter Developer",
  "Full-Stack Developer (Flutter + PHP)",
  "AI/ML Enthusiast (OCR & TensorFlow)"
];

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

/* ===========================
   Mobile nav toggle
=========================== */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navlinks");

navToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
document.querySelectorAll("#navlinks a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("show"));
});

/* ===========================
   Active link on scroll
=========================== */
const sections = [...document.querySelectorAll("section[id]")];
const links = [...document.querySelectorAll(".navlinks a")];

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  let current = "home";

  sections.forEach((sec) => {
    const top = sec.offsetTop - 130;
    if (scrollY >= top) current = sec.id;
  });

  links.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});

/* ===========================
   Typing effect
=========================== */
const typingEl = document.getElementById("typing");
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const word = roles[roleIndex];

  if (!deleting) {
    typingEl.textContent = word.slice(0, charIndex++);
    if (charIndex > word.length) {
      deleting = true;
      setTimeout(typeLoop, 900);
      return;
    }
  } else {
    typingEl.textContent = word.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
    }
  }

  setTimeout(typeLoop, deleting ? 35 : 55);
}
typeLoop();

/* ===========================
   Theme toggle
=========================== */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme){
  if(theme === "light"){
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("light");
    themeToggle.textContent = "🌙";
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  const newTheme = isLight ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});

/* ===========================
   About buttons
=========================== */
const aboutBox = document.getElementById("aboutBox");
const aboutData = {
  edu: `
    <strong>Education</strong><br/><br/>

    <strong>Bachelor of Computer Science (Hons)</strong><br/>
    Quest International University (QIU)<br/>
    CGPA: 3.31<br/><br/>

    <strong>Foundation in Business</strong><br/>
    Quest International University (QIU)<br/>
    CGPA: 3.03<br/><br/>

    <strong>Sijil Pelajaran Malaysia (SPM)</strong><br/>
    Sekolah Menengah Kebangsaan Convent<br/>
    2016 – 2021
  `,

  lang: `
    <strong>Languages</strong><br/><br/>

    • English – Professional proficiency<br/>
    • Bahasa Melayu – High proficiency<br/>
    • Tamil – Conversational (Mother Tongue)
  `
};

document.querySelectorAll("[data-about]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.about;
    aboutBox.innerHTML = aboutData[key] || "No data found.";
  });
});

/* ===========================
   Modal open/close
=========================== */
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function closeModal(){ modal.classList.remove("show"); }
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });
window.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

const projectDetails = {
  encryptify: {
    title: "Encryptify (FYP) — Handwritten Text Encryption System",

    bullets: [
      "Developed a desktop application to securely encrypt and decrypt handwritten text.",
      "Implemented OCR to extract text from handwritten images for processing.",
      "Applied machine learning techniques to generate unique encryption keys.",
      "Integrated secure authentication using password hashing for user access control.",
      "Demonstrated encryption using classical algorithms (Vigenère and Caesar ciphers)."
    ],

    images: [
      { src: "assets/Encryptify1.png", type: "landscape" },
      { src: "assets/Encryptify2.png", type: "landscape" },
      { src: "assets/Encryptify3.png", type: "landscape" }
    ]
  },

  ehelpdesk: {
    title: "eHelpdesk — IT Issue Tracking System",

    bullets: [
      "Developed a mobile system for staff to submit and track IT-related issues in real time.",
      "Implemented secure login, issue submission, and status tracking features.",
      "Improved internal communication between staff and IT support team.",
      "Built full-stack integration using Flutter, PHP, and MySQL backend."
    ],

    images: [
      { src: "assets/eHelpdesk1.png", type: "portrait" },
      { src: "assets/eHelpdesk2.png", type: "portrait" },
      { src: "assets/eHelpdesk3.png", type: "landscape" }
    ]
  },

  ehadir: {
    title: "eHadir — Attendance Mobile System",

    bullets: [
      "Developed a mobile-based attendance system to digitise staff check-in and check-out.",
      "Implemented secure authentication using staff ID and password.",
      "Enabled real-time display of staff details and attendance history.",
      "Integrated REST APIs with MySQL database for data management."
    ],

    images: [
      { src: "assets/eHadir1.png", type: "portrait" },
      { src: "assets/eHadir2.png", type: "portrait" },
      { src: "assets/eHadir3.png", type: "portrait" }
    ]
  },

  manual: {
    title: "Flutter Manual + Training",

    bullets: [
      "Created a structured Flutter training manual covering setup, development, and APK build process.",
      "Included step-by-step guidance for API integration and application testing.",
      "Designed visual documentation for easy understanding by non-technical users.",
      "Conducted training sessions to improve team productivity and onboarding efficiency."
    ],

    images: [
      { src: "assets/Flutter_Manual1.png", type: "landscape" },
      { src: "assets/Flutter_Manual2.png", type: "landscape" },
      { src: "assets/Flutter_Manual3.png", type: "landscape" }
    ]
  },

  esticker: {
    title: "eSticker System Enhancement",

    bullets: [
      "Enhanced internal sticker management workflow to improve processing speed.",
      "Improved database accuracy and consistency for better data handling.",
      "Implemented search functionality using plate and serial numbers.",
      "Optimised usability for daily operational use by staff."
    ],

    images: [
      { src: "assets/eSticker1.png", type: "landscape" },
      { src: "assets/eSticker2.png", type: "landscape" },
      { src: "assets/eSticker3.png", type: "landscape" }
    ]
  }
};

document.querySelectorAll("[data-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.modal;
    const data = projectDetails[key];
    if(!data) return;

    modalContent.innerHTML = `
    <h4>${data.title}</h4>

    <ul>
      ${data.bullets.map(x => `<li>${x}</li>`).join("")}
    </ul>

    ${
      data.images
        ? `
        <div class="modal-gallery">
          ${data.images.map(img => `
            <img src="${img.src}" 
                class="${img.type === 'portrait' ? 'portrait-img' : 'landscape-img'}">
          `).join("")}
        </div>
        `
        : ""
    }
`;
    modal.classList.add("show");
  });
});

document.querySelectorAll("[data-award]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.award;
    if(key !== "mos") return;

    modalContent.innerHTML = `
      <h4>Microsoft Office Specialist Certifications</h4>
      <ul>
        <li>Demonstrated advanced proficiency in Word, Excel, Access, and PowerPoint</li>
        <li>Applied skills in document automation, data analysis, and presentation design</li>
        <li>Enhanced productivity and problem-solving capabilities in real-world tasks</li>
      </ul>

      <h4>eMOBIQ Challenge 2023</h4>
      <ul>
        <li>Collaborated in a team to design and develop a mobile application</li>
        <li>Worked in a competitive, fast-paced development environment</li>
        <li>Focused on user experience, functionality, and innovation</li>
      </ul>
    `;
    modal.classList.add("show");
  });
});

/* ===========================
   Spotlight Reveal on Scroll
=========================== */
const revealCards = document.querySelectorAll(".reveal-card");

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("is-in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.18 });

revealCards.forEach(el => io.observe(el));

/* ===========================
   Skills fill only when visible
=========================== */
const fills = document.querySelectorAll(".fill");
let skillsDone = false;
const skillsSection = document.getElementById("skills");

const skillsIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting && !skillsDone) {
      skillsDone = true;
      fills.forEach((bar, i) => {
        const pct = bar.dataset.pct || "0";
        setTimeout(() => { bar.style.width = pct + "%"; }, i * 90);
      });
      skillsIO.unobserve(skillsSection);
    }
  });
}, { threshold: 0.25 });

if (skillsSection) skillsIO.observe(skillsSection);

/* ===========================
   Magnetic buttons
=========================== */
const magneticButtons = document.querySelectorAll(".magnetic");
magneticButtons.forEach(btn => {
  const strength = 12;

  function onMove(e){
    const r = btn.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    btn.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  }
  function onLeave(){ btn.style.transform = ""; }

  btn.addEventListener("mousemove", onMove);
  btn.addEventListener("mouseleave", onLeave);
});

/* ===========================
   3D Tilt project cards
=========================== */
const tiltCards = document.querySelectorAll(".tilt");
tiltCards.forEach(card => {
  const max = 8;

  function tiltMove(e){
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    const rotY = (px - 0.5) * (max * 2);
    const rotX = (0.5 - py) * (max * 2);

    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
  }

  function tiltLeave(){ card.style.transform = ""; }

  card.addEventListener("mousemove", tiltMove);
  card.addEventListener("mouseleave", tiltLeave);
});

/* ===========================
   ✅ NEW: Scroll Progress + Navbar Shine
=========================== */
const progress = document.getElementById("scrollProgress");
const navbar = document.getElementById("navbar");

function onScrollPremium(){
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;
  const pct = height > 0 ? (scrollTop / height) * 100 : 0;

  if(progress) progress.style.width = pct + "%";

  if(navbar){
    if(scrollTop > 20) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", onScrollPremium);
onScrollPremium();
