// js/i18n/bilingual.js

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
          "Ich freue mich über jede Form von Kontakt rund um Webentwicklung, spannende Projekte oder fachlichen Austausch. Besonders interessieren mich Frontend-Entwicklung, das JavaScript-Ökosystem, moderne Webarchitektur und Clean Code.\n\nWenn du eine Idee, ein Projekt oder einfach nur eine Frage hast – schreib mir gern. Ich melde mich so schnell wie möglich zurück.",
        buttons: {
          email: "E-Mail",
          github: "GitHub",
          linkedin: "LinkedIn",
          xing: "Xing",
        },
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
              "Ergänzende Zertifizierungen über freeCodeCamp und Udemy in JavaScript, MySQL, Responsive Design und Fullstack-Entwicklung.",
          },
        ],
      },

      skills: {
        title: "Skills",
        groups: [
          {
            title: "Frontend",
            items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
          },
          {
            title: "Backend",
            items: ["Node.js", "Express", "REST APIs", "MySQL", "PostgreSQL"],
          },
          {
            title: "Tools",
            items: ["Git & GitHub", "VS Code", "Postman", "Docker", "Linux Basics"],
          },
          {
            title: "Soft Skills",
            items: [
              "Teamarbeit",
              "Kommunikation",
              "Problemlösung",
              "Eigenständiges Arbeiten",
              "Kreativität",
            ],
          },
          {
            title: "Skills in Progress",
            items: [
              "Python – Lern- & Übungsprojekte",
              "PHP – Aufbau solider Backend-Kenntnisse",
            ],
          },
        ],
      },

      projects: {
        title: "Projekte",
        viewLabel: "Ansehen",
        items: [
          {
            title: "Verbesserte Portfolio Website",
            desc:
              "Individuelle Portfolio-Website mit Space-UI, Animationen und modularem JavaScript (diese Website).",
            tech: ["JavaScript", "HTML", "CSS", "GitHub", "PHP", "PostgreSQL"],
          },
          {
            title: "Food Tracking App",
            desc:
              "Web-App zur Übersicht vorhandener Lebensmittel im Haushalt.",
            tech: ["JavaScript", "HTML", "CSS", "PHP", "PostgreSQL"],
          },

          {
            title: "Portfolio Website",
            desc:
              "Portfolio Website in schlichtem Design um bisherige Skills und Erfolge zu zeigen.",
            tech: ["JavaScript", "HTML", "CSS"],
          },
          {
            title: "'Kot'-Game",
            desc:
              "Ein 1-Level Platformer Spiel das mit JavaScript geschrieben wurde.",
            tech: ["JavaScript", "HTML", "CSS"],
          },
          {
            title: "Erste eigene Website",
            desc:
              "Meine erste eigene Website um erlerntes anzuwenden.",
            tech: ["HTML", " CSS"],
          }
        ],
      },

      // --- in translations.de.panels ---
certificates: {
  title: "Zertifikate",
  sections: {
    earned: "Abgeschlossene Zertifikate",
    progress: "In Bearbeitung",
    upcoming: "Geplant",
  },
  buttons: {
    view: "Ansehen",
    verify: "Verifizieren",
    back: "Zurück",
  },
  viewer: {
    headline: "Zertifikat",
    verifyHint: "Verifikation öffnen",
  },
  items: {
    earned: [
      {
        id: "fcc-js",
        title: "JavaScript Algorithms & Data Structures",
        issuer: "freeCodeCamp",
        year: "2024",
        img: "assets/certificates/fcc-js.png",
        // TODO: hier deine echte freeCodeCamp Verify-URL rein
        verifyUrl: "#",
      },
      {
        id: "fcc-responsive",
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        year: "2024",
        img: "assets/certificates/fcc-responsive.png",
        // TODO: hier deine echte freeCodeCamp Verify-URL rein
        verifyUrl: "#",
      },
    ],
    progress: [
      {
        id: "udemy-fullstack",
        title: "Fullstack Development",
        issuer: "Udemy",
        year: "2025",
        status: "In Progress",
      },
      {
        id: "udemy-mysql",
        title: "MySQL Database Certification",
        issuer: "Udemy",
        year: "2025",
        status: "In Progress",
      },
    ],
    upcoming: [
      {
        id: "ihk-fiae",
        title: "Fachinformatiker Anwendungsentwicklung",
        issuer: "IHK",
        year: "2026",
        status: "July 2026",
      },
    ],
  },
},
      about: {
        title: "Über mich",
        paragraphs: [
          "Ich bin angehender Fachinformatiker für Anwendungsentwicklung (IHK-Abschluss Juli 2026) mit Leidenschaft für sauberen Code, moderne Webentwicklung und kreative Benutzeroberflächen.",
          "Mein Weg in die IT begann früh durch Technikbegeisterung und Gaming. Heute setze ich eigene Projekte um und entwickle mich kontinuierlich weiter – unter anderem durch Zertifizierungen in JavaScript, MySQL und Fullstack-Themen.",
          "Abseits des Bildschirms beschäftige ich mich gerne mit Sport, Wandern und kreativen Projekten, um neue Impulse zu sammeln.",
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
          "I’m always happy to connect about web development, exciting projects or professional exchange. My main interests are front-end development, the JavaScript ecosystem, modern web architecture and clean code.\n\nIf you have an idea, a project or simply a question – feel free to reach out.",
        buttons: {
          email: "Email",
          github: "GitHub",
          linkedin: "LinkedIn",
          xing: "Xing",
        },
      },

      experience: {
        title: "Developer Journey",
        items: [
          {
            heading: "Retraining – Application Development Specialist",
            time: "2024 – 2026 (IHK)",
            text:
              "Solid foundation in professional software development with a focus on JavaScript, web technologies, software architecture and structured problem solving.",
          },
          {
            heading: "Practical Projects & Own Development",
            time: "ongoing",
            text:
              "Continuous work on personal applications – from small tools to more complex web projects.",
          },
          {
            heading: "Continuous Learning & Specialization",
            time: "2024 – today",
            text:
              "Additional certifications via freeCodeCamp and Udemy in JavaScript, MySQL, responsive design and fullstack development.",
          },
        ],
      },

      skills: {
        title: "Skills",
        groups: [
          {
            title: "Frontend",
            items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
          },
          {
            title: "Backend",
            items: ["Node.js", "Express", "REST APIs", "MySQL", "PostgreSQL"],
          },
          {
            title: "Tools",
            items: ["Git & GitHub", "VS Code", "Postman", "Docker", "Linux Basics"],
          },
          {
            title: "Soft Skills",
            items: [
              "Teamwork",
              "Communication",
              "Problem Solving",
              "Self-directed Work",
              "Creativity",
            ],
          },
          {
            title: "Skills in Progress",
            items: [
              "Python – learning & practice projects",
              "PHP – building solid backend skills",
            ],
          },
        ],
      },

      projects: {
        title: "Projects",
        viewLabel: "View",
        items: [
          {
            title: "Enhanced Portfolio Website",
            desc:
              "Custom portfolio website with space UI, animations and modular JavaScript.",
            tech: ["JavaScript", "HTML", "CSS", "GitHub", "PHP", "PostgreSQL"],
          },
          {
            title: "Food Tracking App",
            desc:
              "Web app to track available food items at home.",
            tech: ["JavaScript", "HTML", "CSS", "PHP", "PostgreSQL"],
          },
          {
            title: "Portfolio Website",
            desc:
              "Portfolio website in a common design to show a few skills and achievements.",
            tech: ["JavaScript", "HTML", "CSS"],
          },
          {
            title: "'Kot'-Game",
            desc:
              "A 1-Level platformer game created in JavaScript.",
            tech: ["JavaScript", "HTML", "CSS"],
          },
          {
            title: "First own Website",
            desc:
              "My first own website using some baseskills that i had learned.",
            tech: ["HTML", " CSS"],
          }
        ],
      },

// --- in translations.en.panels ---
certificates: {
  title: "Certificates",
  sections: {
    earned: "Earned Certificates",
    progress: "In Progress",
    upcoming: "Upcoming",
  },
  buttons: {
    view: "View",
    verify: "Verify",
    back: "Back",
  },
  viewer: {
    headline: "Certificate",
    verifyHint: "Open verification",
  },
  items: {
    earned: [
      {
        id: "fcc-js",
        title: "JavaScript Algorithms & Data Structures",
        issuer: "freeCodeCamp",
        year: "2024",
        img: "assets/certificates/fcc-js.png",
        // TODO: put your real freeCodeCamp verify URL here
        verifyUrl: "#",
      },
      {
        id: "fcc-responsive",
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        year: "2024",
        img: "assets/certificates/fcc-responsive.png",
        // TODO: put your real freeCodeCamp verify URL here
        verifyUrl: "#",
      },
    ],
    progress: [
      {
        id: "udemy-fullstack",
        title: "Fullstack Development",
        issuer: "Udemy",
        year: "2025",
        status: "In Progress",
      },
      {
        id: "udemy-mysql",
        title: "MySQL Database Certification",
        issuer: "Udemy",
        year: "2025",
        status: "In Progress",
      },
    ],
    upcoming: [
      {
        id: "ihk-fiae",
        title: "Application Development Specialist",
        issuer: "IHK",
        year: "2026",
        status: "July 2026",
      },
    ],
  },
},

about: {
  title: "About Me",
  paragraphs: [
    "I’m a future application development specialist (IHK exam planned for July 2026) with a passion for clean code, modern web development and creative user interfaces.",
    "My journey into IT started early with a strong interest in technology and gaming. Today I build my own projects and continuously improve my skills — supported by certificates in JavaScript, MySQL and fullstack topics.",
    "Outside the screen I enjoy sports, hiking and creative activities to gain new inspiration.",
  ],
},


    },
  },
};

// interner Sprachstatus
const state = {
  lang: "en",
};

export function setLang(lang) {
  if (translations[lang]) state.lang = lang;
}

export function getLang() {
  return state.lang;
}

export function tPanel(panelId) {
  return translations[state.lang].panels[panelId];
}

export function tOrbitLabel(orbitId) {
  return translations[state.lang].orbitLabels[orbitId] || orbitId;
}
