// js/i18n/bilingual.js

const translations = {
  de: {
    ui: {
      boostHint: "Klicke auf die Sphere, um die Rotation zu beschleunigen",
    },

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
      phase: "engineering",
      heading: "Software Engineering Practice",
      time: "laufend",
      text:
        "Tägliche praktische Arbeit mit JavaScript, Git und modularen Projektstrukturen. Ich entwickle, teste und verbessere Features kontinuierlich – von UI-Interaktionen und State-Handling bis hin zu sauberer Code-Architektur, Debugging und Performance-Optimierung."
    },
    {
      phase: "projects", 
      heading: "Project-Based Development",
      time: "laufend",
      text:
        "Umsetzung realer, nutzbarer Anwendungen wie Portfolio-Websites, Web-Apps und eines Browser-Games. Jedes Projekt folgt einem vollständigen Entwicklungszyklus: Konzept → UI → Implementierung → Testing → Iteration. Diese Website selbst ist ein modular aufgebautes JavaScript-Projekt mit Canvas-Animationen, UI-State und dynamischen Panels."
    },
    {
      phase: "education",
      heading: "Umschulung – Fachinformatiker für Anwendungsentwicklung (IHK)",
      time: "2024 – 2026",
      text:
        "Strukturierte Ausbildung in professioneller Softwareentwicklung mit Fokus auf Programmiergrundlagen, Webtechnologien, Datenbanken, Softwaredesign, Versionsverwaltung und projektbasiertes Arbeiten. Ziel ist der IHK-Abschluss im Juli 2026."
    },
    {
      phase: "growth",  
      heading: "Continuous Learning & Specialization",
      time: "parallel",
      text:
        "Kontinuierliche Vertiefung über freeCodeCamp, Udemy und eigene Lernprojekte – unter anderem in JavaScript, MySQL, Responsive Design und Fullstack-Themen. Gelerntes wird direkt in reale Projekte integriert statt nur theoretisch erarbeitet."
    }
  ]
}
,

      skills: {
        title: "Skills",
        groups: [
          { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] },
          { title: "Backend", items: ["Node.js", "Express", "REST APIs", "MySQL", "PostgreSQL"] },
          { title: "Tools", items: ["Git & GitHub", "VS Code", "Postman", "Docker", "Linux Basics"] },
          {
            title: "Soft Skills",
            items: ["Teamarbeit", "Kommunikation", "Problemlösung", "Eigenständiges Arbeiten", "Kreativität"],
          },
          {
            title: "Skills in Progress",
            items: ["Python – Lern- & Übungsprojekte", "PHP – Aufbau solider Backend-Kenntnisse"],
          },
        ],
      },

      projects: {
        title: "Projekte",
        viewLabel: "Ansehen",
        openLabel: "Neu öffnen",
        repoLabel: "Repo",
        playLabel: "Spielen",
        builtLabel: "Built:",
        learnedLabel: "Learned:",
        items: [
          {
            id: "portfolio-v2",
            title: "Verbesserte Portfolio Website",
            desc: "Individuelle Portfolio-Website mit Space-UI, Animationen und modularem JavaScript.",
            tech: ["JavaScript", "HTML", "CSS", "GitHub"],
            preview: "assets/projects/portfolio-v2.jpg",
            url: "", // optional
            repoId: "portfolio-v2",
            built: "Canvas-Background, Orbit-UI, Panels, i18n (DE/EN), modulare Struktur",
            learned: "UI-State, Event Delegation, Performance/Rendering, saubere Modul-Trennung",
          },
          {
            id: "foodapp",
            title: "Food Tracking App",
            desc: "Web-App zur Übersicht vorhandener Lebensmittel im Haushalt.",
            tech: ["JavaScript", "HTML", "CSS", "PHP", "PostgreSQL"],
            preview: "assets/projects/flosfoodapp.jpg",
            url: "",
            repoId: "foodapp",
            built: "CRUD-Flow, Datenmodell, UI-Listen & Detailansichten",
            learned: "Datenhaltung, Formular-UX, strukturierter Backend/Frontend-Workflow",
          },
          {
            id: "portfolio-v1",
            title: "Portfolio Website (V1)",
            desc: "Ältere Portfolio-Website in schlichtem Design.",
            tech: ["JavaScript", "HTML", "CSS"],
            preview: "assets/projects/portfolio-v1.jpg",
            url: "assets/links/website2/index.html",
            repoId: "portfolio-v1",
            built: "Mehrseitiges Layout, UI-Komponenten, grundlegende Animationen",
            learned: "Layouting, CSS-Struktur, sauberes Refactoring in V2",
          },
          {
            id: "kot-game",
            title: "'Kot'-Game",
            desc: "Ein 1-Level Platformer Spiel das mit JavaScript geschrieben wurde.",
            tech: ["JavaScript", "HTML", "CSS"],
            preview: "assets/projects/kotgame.jpg",
            url: "assets/links/kotgame/index.html",
            repoId: "kot-game",
            type: "game",
            built: "Player Movement, Collision, Level-Loop, Input Handling",
            learned: "Game Loop, Timing, Debugging von Physik & Zuständen",
          },
          {
            id: "website1",
            title: "Erste eigene Website",
            desc: "Meine erste eigene Website um erlerntes anzuwenden.",
            tech: ["HTML", "CSS"],
            preview: "assets/projects/website1.jpg",
            url: "assets/links/website1/index.html",
            repoId: "website1",
          },
        ],
      },

      // Zentral gepflegte Repo-Links (Placeholder = leer => Button wird nicht gezeigt)
      repos: {
        placeholder: "",
        items: {
          "portfolio-v2": "https://github.com/Flowdi/portfolio-v2",
          "foodapp": "https://github.com/Flowdi/FlosFoodApp",
          "portfolio-v1": "https://github.com/Flowdi/portfolio-v1",
          "kot-game": "https://github.com/Flowdi/kotgame",
          "website1": "https://github.com/Flowdi/website1",
        },
      },

      certificates: {
        title: "Zertifikate",
        sections: { earned: "Abgeschlossene Zertifikate", progress: "In Bearbeitung", upcoming: "Geplant" },
        buttons: { view: "Ansehen", verify: "Verifizieren", back: "Zurück" },
        viewer: { headline: "Zertifikat", verifyHint: "Verifikation öffnen" },
        items: {
          earned: [
            {
              id: "fcc-js",
              title: "JavaScript Algorithms & Data Structures",
              issuer: "freeCodeCamp",
              year: "2024",
              img: "assets/certificates/fcc-js.png",
              verifyUrl: "#",
            },
            {
              id: "fcc-responsive",
              title: "Responsive Web Design",
              issuer: "freeCodeCamp",
              year: "2024",
              img: "assets/certificates/fcc-responsive.png",
              verifyUrl: "#",
            },
          ],
          progress: [
            { id: "udemy-fullstack", title: "Fullstack Development", issuer: "Udemy", year: "2025", status: "In Progress" },
            { id: "udemy-mysql", title: "MySQL Database Certification", issuer: "Udemy", year: "2025", status: "In Progress" },
          ],
          upcoming: [
            { id: "ihk-fiae", title: "Fachinformatiker Anwendungsentwicklung", issuer: "IHK", year: "2026", status: "July 2026" },
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
    ui: {
      boostHint: "Click the sphere to boost the rotation",
    },

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
      phase: "engineering",
      heading: "Software Engineering Practice",
      time: "ongoing",
      text:
        "Daily hands-on work with JavaScript, Git and modular project structures. I continuously build, test and refine features — from UI interactions and state handling to clean code architecture, debugging and performance optimization."
    },
    {
      phase: "projects", 
      heading: "Project-Based Development",
      time: "ongoing",
      text:
        "Development of real, usable applications such as portfolio websites, web apps and a browser-based game. Each project follows a full development cycle: concept → UI → implementation → testing → iteration. This portfolio itself is a modular JavaScript project with canvas animations, UI state and dynamic panels."
    },
    {
      phase: "education", 
      heading: "Professional Retraining – Application Development Specialist (IHK)",
      time: "2024 – 2026",
      text:
        "Structured training in professional software development, covering programming fundamentals, web technologies, databases, software design, version control and project-based work. Target: IHK graduation in July 2026."
    },
    {
      phase: "growth",  
      heading: "Continuous Learning & Specialization",
      time: "parallel",
      text:
        "Ongoing learning through freeCodeCamp, Udemy and self-directed projects — including JavaScript, MySQL, responsive design and fullstack topics. Everything learned is applied directly to real projects instead of staying purely theoretical."
    }
  ]
}
,

      skills: {
        title: "Skills",
        groups: [
          { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] },
          { title: "Backend", items: ["Node.js", "Express", "REST APIs", "MySQL", "PostgreSQL"] },
          { title: "Tools", items: ["Git & GitHub", "VS Code", "Postman", "Docker", "Linux Basics"] },
          {
            title: "Soft Skills",
            items: ["Teamwork", "Communication", "Problem Solving", "Self-directed Work", "Creativity"],
          },
          { title: "Skills in Progress", items: ["Python – learning & practice projects", "PHP – building solid backend skills"] },
        ],
      },

      projects: {
        title: "Projects",
        viewLabel: "View",
        openLabel: "Open",
        repoLabel: "Repo",
        playLabel: "Play",
        builtLabel: "Built:",
        learnedLabel: "Learned:",
        items: [
          {
            id: "portfolio-v2",
            title: "Enhanced Portfolio Website",
            desc: "Custom portfolio website with space UI, animations and modular JavaScript.",
            tech: ["JavaScript", "HTML", "CSS", "GitHub"],
            preview: "assets/projects/portfolio-v2.jpg",
            url: "",
            repoId: "portfolio-v2",
            built: "Canvas background, orbit UI, panels, i18n (DE/EN), modular structure",
            learned: "UI state, event delegation, performance/rendering, clean module separation",
          },
          {
            id: "foodapp",
            title: "Food Tracking App",
            desc: "Web app to track available food items at home.",
            tech: ["JavaScript", "HTML", "CSS", "PHP", "PostgreSQL"],
            preview: "assets/projects/flosfoodapp.jpg",
            url: "",
            repoId: "foodapp",
            built: "CRUD flow, data model, UI lists & detail views",
            learned: "data handling, form UX, structured backend/frontend workflow",
          },
          {
            id: "portfolio-v1",
            title: "Portfolio Website (V1)",
            desc: "Older portfolio website with a simpler design.",
            tech: ["JavaScript", "HTML", "CSS"],
            preview: "assets/projects/portfolio-v1.jpg",
            url: "assets/links/website2/index.html",
            repoId: "portfolio-v1",
            built: "Multi-page layout, UI components, basic animations",
            learned: "layouting, CSS structure, refactoring improvements in V2",
          },
          {
            id: "kot-game",
            title: "'Kot' Game",
            desc: "A 1-level platformer game built with JavaScript.",
            tech: ["JavaScript", "HTML", "CSS"],
            preview: "assets/projects/kotgame.jpg",
            url: "assets/links/kotgame/index.html",
            repoId: "kot-game",
            type: "game",
            built: "player movement, collision, level loop, input handling",
            learned: "game loop, timing, debugging physics/state issues",
          },
          {
            id: "website1",
            title: "First own Website",
            desc: "My first own website using skills I had just learned.",
            tech: ["HTML", "CSS"],
            preview: "assets/projects/website1.jpg",
            url: "assets/links/website1/index.html",
            repoId: "website1",
          },
        ],
      },

      repos: {
        placeholder: "",
        items: {
          "portfolio-v2": "https://github.com/Flowdi/portfolio-v2",
          "foodapp": "https://github.com/Flowdi/FlosFoodApp",
          "portfolio-v1": "https://github.com/Flowdi/portfolio-v1",
          "kot-game": "https://github.com/Flowdi/kotgame",
          "website1": "https://github.com/Flowdi/website1",
        },
      },

      certificates: {
        title: "Certificates",
        sections: { earned: "Earned Certificates", progress: "In Progress", upcoming: "Upcoming" },
        buttons: { view: "View", verify: "Verify", back: "Back" },
        viewer: { headline: "Certificate", verifyHint: "Open verification" },
        items: {
          earned: [
            {
              id: "fcc-js",
              title: "JavaScript Algorithms & Data Structures",
              issuer: "freeCodeCamp",
              year: "2024",
              img: "assets/certificates/fcc-js.png",
              verifyUrl: "#",
            },
            {
              id: "fcc-responsive",
              title: "Responsive Web Design",
              issuer: "freeCodeCamp",
              year: "2024",
              img: "assets/certificates/fcc-responsive.png",
              verifyUrl: "#",
            },
          ],
          progress: [
            { id: "udemy-fullstack", title: "Fullstack Development", issuer: "Udemy", year: "2025", status: "In Progress" },
            { id: "udemy-mysql", title: "MySQL Database Certification", issuer: "Udemy", year: "2025", status: "In Progress" },
          ],
          upcoming: [
            { id: "ihk-fiae", title: "Application Development Specialist", issuer: "IHK", year: "2026", status: "July 2026" },
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

// internal language state
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

export function tUI(key) {
  return translations[state.lang].ui?.[key] || key;
}

// Repo resolver: return null => hide button
export function tRepo(repoId) {
  const p = translations[state.lang].panels;
  const url = p?.repos?.items?.[repoId] ?? p?.repos?.placeholder ?? "";
  if (!url || url === "#") return null;
  return url;
}
