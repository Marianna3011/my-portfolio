const translations = {
    en: {
        siteTitle: "Marianna Myszkowska",
        navAbout: "About",
        navProjects: "Projects",
        navResume: "Resume",
        navSkills: "Skills",
        navCaseStudies: "Case Studies",
        aboutTitle: "About Me",
        aboutText: "I am a passionate IT professional with a strong focus on delivering innovative solutions. My goal is to continuously grow and contribute to impactful projects.",
        projectsTitle: "Projects",
        project1Title: "Project 1",
        project1Text: "Developed a web application using React and Node.js to streamline task management for teams.",
        project2Title: "Project 2",
        project2Text: "Created a data visualization dashboard using Python and D3.js to analyze business metrics.",
        caseStudiesTitle: "Case Studies",
        caseStudy1Title: "Case Study 1: Task Management App",
        caseStudy1Challenge: "Challenge: Teams struggled with task tracking and collaboration.",
        caseStudy1Solution: "Solution: Built a web app with real-time updates and task assignment features.",
        caseStudy1Outcome: "Outcome: Improved team productivity by 30%.",
        caseStudy2Title: "Case Study 2: Data Dashboard",
        caseStudy2Challenge: "Challenge: Lack of insights into key business metrics.",
        caseStudy2Solution: "Solution: Designed an interactive dashboard for data visualization.",
        caseStudy2Outcome: "Outcome: Enabled data-driven decision-making across departments.",
        skillsTitle: "Skills",
        resumeTitle: "Resume",
        resumeText: "Download my resume for a detailed overview of my professional experience.",
        footerText: "© 2025 Marianna Myszkowska. All rights reserved."
    },
    pl: {
        siteTitle: "Marianna Myszkowska",
        navAbout: "O Mnie",
        navProjects: "Projekty",
        navResume: "CV",
        navSkills: "Umiejętności",
        navCaseStudies: "Studia Przypadków",
        aboutTitle: "O Mnie",
        aboutText: "Jestem pasjonatką IT z silnym naciskiem na dostarczanie innowacyjnych rozwiązań. Moim celem jest ciągły rozwój i udział w znaczących projektach.",
        projectsTitle: "Projekty",
        project1Title: "Projekt 1",
        project1Text: "Stworzyłam aplikację internetową za pomocą React i Node.js, aby usprawnić zarządzanie zadaniami w zespołach.",
        project2Title: "Projekt 2",
        project2Text: "Stworzyłam pulpit nawigacyjny do wizualizacji danych za pomocą Python i D3.js w celu analizy wskaźników biznesowych.",
        caseStudiesTitle: "Studia Przypadków",
        caseStudy1Title: "Studium Przypadku 1: Aplikacja do Zarządzania Zadaniami",
        caseStudy1Challenge: "Wyzwanie: Zespoły miały trudności z śledzeniem zadań i współpracą.",
        caseStudy1Solution: "Rozwiązanie: Stworzyłam aplikację internetową z aktualizacjami w czasie rzeczywistym i funkcjami przypisywania zadań.",
        caseStudy1Outcome: "Rezultat: Zwiększono produktywność zespołu o 30%.",
        caseStudy2Title: "Studium Przypadku 2: Pulpit nawigacyjny danych",
        caseStudy2Challenge: "Wyzwanie: Brak wglądu w kluczowe wskaźniki biznesowe.",
        caseStudy2Solution: "Rozwiązanie: Zaprojektowałam interaktywny pulpit nawigacyjny do wizualizacji danych.",
        caseStudy2Outcome: "Rezultat: Umożliwiono podejmowanie decyzji opartych na danych w całych działach.",
        skillsTitle: "Umiejętności",
        resumeTitle: "CV",
        resumeText: "Pobierz moje CV, aby uzyskać szczegółowy przegląd mojego doświadczenia zawodowego.",
        footerText: "© 2025 Marianna Myszkowska. Wszelkie prawa zastrzeżone."
    }
};

let currentLang = 'en';

document.getElementById('switch-lang').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pl' : 'en';
    updateLanguage();
});

function updateLanguage() {
    const t = translations[currentLang];
    document.getElementById('site-title').textContent = t.siteTitle;
    document.getElementById('nav-about').textContent = t.navAbout;
    document.getElementById('nav-projects').textContent = t.navProjects;
    document.getElementById('nav-resume').textContent = t.navResume;
    document.getElementById('nav-skills').textContent = t.navSkills;
    document.getElementById('nav-case-studies').textContent = t.navCaseStudies;
    document.getElementById('about-title').textContent = t.aboutTitle;
    document.getElementById('about-text').textContent = t.aboutText;
    document.getElementById('projects-title').textContent = t.projectsTitle;
    document.getElementById('project1-title').textContent = t.project1Title;
    document.getElementById('project1-text').textContent = t.project1Text;
    document.getElementById('project2-title').textContent = t.project2Title;
    document.getElementById('project2-text').textContent = t.project2Text;
    document.getElementById('case-studies-title').textContent = t.caseStudiesTitle;
    document.querySelectorAll('.case-study')[0].querySelector('h3').textContent = t.caseStudy1Title;
    document.querySelectorAll('.case-study')[0].querySelector('.challenge').textContent = t.caseStudy1Challenge;
    document.querySelectorAll('.case-study')[0].querySelector('.solution').textContent = t.caseStudy1Solution;
    document.querySelectorAll('.case-study')[0].querySelector('.outcome').textContent = t.caseStudy1Outcome;
    document.querySelectorAll('.case-study')[1].querySelector('h3').textContent = t.caseStudy2Title;
    document.querySelectorAll('.case-study')[1].querySelector('.challenge').textContent = t.caseStudy2Challenge;
    document.querySelectorAll('.case-study')[1].querySelector('.solution').textContent = t.caseStudy2Solution;
    document.querySelectorAll('.case-study')[1].querySelector('.outcome').textContent = t.caseStudy2Outcome;
    document.getElementById('skills-title').textContent = t.skillsTitle;
    document.getElementById('resume-title').textContent = t.resumeTitle;
    document.getElementById('resume-text').textContent = t.resumeText;
    document.getElementById('footer-text').textContent = t.footerText;

    // Change the button label too
    document.getElementById('switch-lang').textContent = currentLang === 'en' ? "🇬🇧 English" : "🇵🇱 Polski";
}
