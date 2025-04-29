const translations = {
    en: {
        siteTitle: "Marianna Myszkowska",
        navAbout: "About",
        navProjects: "Projects",
        navResume: "Resume",
        navSkills: "Skills",
        navExperience: "Experience",
        navHobbies: "Hobbies",
        aboutTitle: "About Me",
        aboutText: " Aspiring Data Analyst and AI student at Poznan University of Technology, passionate about Data Analysis and Business Intelligence. Experienced in extracting insights from data to solve real-world problems and optimize processes. Constantly learning and seeking opportunities to contribute to innovative data solutions.",
        projectsTitle: "Projects",
        project1Title: "Project 1",
        project1Text: "Developed a web application using React and Node.js to streamline task management for teams.",
        project2Title: "Project 2",
        project2Text: "Created a data visualization dashboard using Python and D3.js to analyze business metrics.",
        experienceTitle: "Experience",
        experienceText: "I have worked on various projects, including web development, data visualization, and software engineering. My experience spans multiple industries, allowing me to adapt and deliver impactful solutions.",
        hobbiesTitle: "Hobbies",
        hobbiesText: "In my free time, I enjoy hiking, photography, and exploring new technologies. These activities help me stay creative and energized.",
        skillsTitle: "Skills",
        jobTitle: "Poznan University of Technology AI student | Aspiring Data Analyst | AI & Data Enthusiast",
        footerText: "© 2025 Marianna Myszkowska. All rights reserved."
    },
    pl: {
        siteTitle: "Marianna Myszkowska",
        navAbout: "O Mnie",
        navProjects: "Projekty",
        navResume: "CV",
        navSkills: "Umiejętności",
        navExperience: "Doświadczenie",
        navHobbies: "Hobby",
        aboutTitle: "O Mnie",
        aboutText: " Aspirująca analityczka danych i studentka sztucznej inteligencji na Politechnice Poznańskiej, pasjonująca się analizą danych i Business Intelligence. Doświadczenie w pozyskiwaniu informacji z danych w celu rozwiązywania rzeczywistych problemów i optymalizacji procesów. Stale rozwijam swoje umiejętności i szukam okazji, aby przyczynić się do innowacyjnych rozwiązań opartych na danych.",
        projectsTitle: "Projekty",
        project1Title: "Projekt 1",
        project1Text: "Stworzyłam aplikację internetową za pomocą React i Node.js, aby usprawnić zarządzanie zadaniami w zespołach.",
        project2Title: "Projekt 2",
        project2Text: "Stworzyłam pulpit nawigacyjny do wizualizacji danych za pomocą Python i D3.js w celu analizy wskaźników biznesowych.",
        experienceTitle: "Doświadczenie",
        experienceText: "Pracowałam nad różnymi projektami, w tym tworzeniem stron internetowych, wizualizacją danych i inżynierią oprogramowania. Moje doświadczenie obejmuje wiele branż, co pozwala mi dostosowywać się i dostarczać znaczące rozwiązania.",
        hobbiesTitle: "Hobby",
        hobbiesText: "W wolnym czasie lubię wędrówki, fotografię i odkrywanie nowych technologii. Te aktywności pomagają mi zachować kreatywność i energię.",
        skillsTitle: "Umiejętności",
        jobTitle: "Studentka sztucznej inteligencji na Politechnice Poznańskiej | Aspirująca analityczka danych | Entuzjastka AI i danych",
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
    document.getElementById('job-title').textContent = t.jobTitle; // Update the job title dynamically
    document.getElementById('nav-about').textContent = t.navAbout;
    document.getElementById('nav-projects').textContent = t.navProjects;
    document.getElementById('nav-skills').textContent = t.navSkills;
    document.getElementById('nav-experience').textContent = t.navExperience;
    document.getElementById('nav-hobbies').textContent = t.navHobbies;
    document.getElementById('about-title').textContent = t.aboutTitle;
    document.getElementById('about-text').textContent = t.aboutText;
    document.getElementById('projects-title').textContent = t.projectsTitle;
    document.getElementById('project1-title').textContent = t.project1Title;
    document.getElementById('project1-text').textContent = t.project1Text;
    document.getElementById('project2-title').textContent = t.project2Title;
    document.getElementById('project2-text').textContent = t.project2Text;
    document.getElementById('experience-title').textContent = t.experienceTitle;
    document.getElementById('experience-text').textContent = t.experienceText;
    document.getElementById('hobbies-title').textContent = t.hobbiesTitle;
    document.getElementById('hobbies-text').textContent = t.hobbiesText;
    document.getElementById('skills-title').textContent = t.skillsTitle;
    document.getElementById('footer-text').textContent = t.footerText;

    // Change the button label too
    document.getElementById('switch-lang').textContent = currentLang === 'en' ? "Polski" : "English";
}
