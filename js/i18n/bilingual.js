// js/i18n/bilingual.js

// Alle Texte gesammelt
const translations = {
  de: {
    orbitLabels: {
      contact: "Kontakt",
      experience: "Developer Journey",
      skills: "Skills",
      projects: "Projekte",
      certificates: "Zertifikate",
      about: "Über mich",
    },
    panels: {
      contact: {
        title: "Kontakt",
        intro:
          "Ich freue mich über jede Form von Kontakt rund um Webentwicklung, spannende Projekte oder fachlichen Austausch. Besonders interessieren mich Frontend-Entwicklung, JavaScript-Ecosystem, moderne Webarchitektur und Clean Code.\n\nWenn du eine Idee, ein Projekt oder einfach nur eine Frage hast – schreib mir gern. Ich melde mich so schnell wie möglich zurück.",
        subtitle: "Let’s Connect",
        emailLabel: "E-Mail",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        xingLabel: "Xing",
      },
      experience: {
        title: "Developer Journey",
        items: [
          {
            heading: "Umschulung – Fachinformatiker Anwendungsentwicklung",
            time: "2024 – 2026 (IHK)",
            text:
              "Fundierter Einstieg in professionelle Softwareentwicklung mit Fokus auf JavaScript, Webtechnologien, Softwarearchitektur, Versionsverwaltung, Projektarbeit und strukturiertes Problemlösen.",
          },
          {
            heading: "Praxisprojekte & Eigenentwicklung",
            time: "laufend",
            text:
              "Aktive Umsetzung eigener Anwendungen – vom kleinen Tool bis hin zu umfangreicheren Webprojekten. Fokus auf sauberen Code, UX, Performance und nachhaltige Struktur.",
          },
          {
            heading: "Weiterbildung & Spezialisierung",
            time: "2024 – heute",
            text:
              "Ergänzende Zertifizierungen u.a. über freeCodeCamp und Udemy in JavaScript, MySQL, Responsive Design und Fullstack-Entwicklung. Kontinuierliche Weiterentwicklung als Teil des täglichen Workflows.",
          },
        ],
      },
    },
  },

  en: {
    orbitLabels: {
      contact: "Contact",
      experience: "Developer Journey",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      about: "About Me",
    },
    panels: {
      contact: {
        title: "Contact",
        intro:
          "I’m always happy to connect about web development, interesting projects or professional exchange. My main interests are front-end development, the JavaScript ecosystem, modern web architecture and clean code.\n\nIf you have an idea, a project or simply a question – feel free to reach out. I’ll get back to you as soon as possible.",
        subtitle: "Let’s Connect",
        emailLabel: "Email",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        xingLabel: "Xing",
      },
      experience: {
        title: "Developer Journey",
        items: [
          {
            heading: "Retraining – Application Development Specialist",
            time: "2024 – 2026 (IHK)",
            text:
              "Solid foundations in professional software development with a focus on JavaScript, web technologies, software architecture, version control, project work and structured problem solving.",
          },
          {
            heading: "Practical Projects & Own Development",
            time: "ongoing",
            text:
              "Continuous work on personal projects – from small tools to more complex web applications. Focus on clean code, UX, performance and sustainable structure.",
          },
          {
            heading: "Continuous Learning & Specialization",
            time: "2024 – today",
            text:
              "Additional learning and certifications via platforms like freeCodeCamp and Udemy in JavaScript, MySQL, responsive design and fullstack web development.",
          },
        ],
      },
    },
  },
};

// interner Sprach-Status
const state = {
  lang: "en", // Startsprache
};

/**
 * Sprache setzen ("de" oder "en")
 * @param {"en"|"de"} lang
 */
export function setLang(lang) {
  if (translations[lang]) {
    state.lang = lang;
  }
}

/**
 * Aktuelle Sprache holen
 * @returns {"en"|"de"}
 */
export function getLang() {
  return state.lang;
}

/**
 * Panel-Texte holen (z.B. "contact", "experience")
 * @param {"contact"|"experience"} panelId
 */
export function tPanel(panelId) {
  return translations[state.lang].panels[panelId];
}

/**
 * Orbit-Label für eine ID holen (z.B. "contact", "skills")
 * @param {string} orbitId
 */
export function tOrbitLabel(orbitId) {
  return translations[state.lang].orbitLabels[orbitId] || orbitId;
}
