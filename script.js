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
        aboutText: "Hi, I'm <b>Marianna Myszkowska</b>, an Artificial Intelligence student at Poznań University of Technology, based in Poznań, Poland. I'm passionate about <b>Data Science</b> and <b>Data Analysis</b>, and I'm actively working toward a career that combines both. Currently, I work as an Integrations Specialist at Lawbiz Technology, contributing to the development of the Umownik application. In addition to my data interests, I enjoy front-end development and programming, which allows me to build intuitive interfaces and bridge the gap between data and users.",
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
        jobTitle: "Aspiring Data Analyst",
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
        aboutText: "Cześć! Nazywam się <b>Marianna Myszkowska</b> i jestem studentką Sztucznej Inteligencji na Politechnice Poznańskiej. Mieszkam w Poznaniu i pasjonuję się <b>Data Science</b> oraz <b>analizą danych</b> — aktywnie rozwijam swoje umiejętności, by w przyszłości połączyć obie te dziedziny w swojej karierze zawodowej. Na co dzień pracuję jako Specjalistka ds. Integracji w firmie <b>Lawbiz Technology</b>, gdzie wspieram rozwój aplikacji Umownik. Poza światem danych interesuję się również programowaniem i frontendem, co pozwala mi tworzyć funkcjonalne i estetyczne interfejsy użytkownika oraz skutecznie łączyć warstwę technologiczną z doświadczeniem użytkownika. ",
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
        jobTitle: "Aspirująca analityczka danych ",
        footerText: "© 2025 Marianna Myszkowska. Wszelkie prawa zastrzeżone."
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', function () {
    const translation = translations[currentLang];
    document.getElementById('site-title').innerHTML = translation.siteTitle; // Use innerHTML for bold text
    document.getElementById('job-title').innerHTML = translation.jobTitle; // Use innerHTML for bold text
    document.getElementById('about-title').textContent = translation.aboutTitle;
    document.getElementById('about-text').innerHTML = translation.aboutText; // Use innerHTML for bold text
    document.getElementById('projects-title').textContent = translation.projectsTitle;
    document.getElementById('project1-title').textContent = translation.project1Title;
    document.getElementById('project1-text').textContent = translation.project1Text;
    document.getElementById('project2-title').textContent = translation.project2Title;
    document.getElementById('project2-text').textContent = translation.project2Text;
    document.getElementById('experience-title').textContent = translation.experienceTitle;
    document.getElementById('experience-text').textContent = translation.experienceText;
    document.getElementById('hobbies-title').textContent = translation.hobbiesTitle;
    document.getElementById('hobbies-text').textContent = translation.hobbiesText;
    document.getElementById('skills-title').textContent = translation.skillsTitle;
    document.getElementById('footer-text').textContent = translation.footerText;

    // Ensure only the "about-contact" section is visible initially
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = section.id === 'about-contact' ? 'block' : 'none';
    });
});

document.getElementById('switch-lang').addEventListener('click', function () {
    const button = this;
    currentLang = currentLang === 'en' ? 'pl' : 'en'; // Toggle language
    button.textContent = currentLang === 'en' ? 'Polish' : 'English'; // Update button text

    // Update page content based on the selected language
    const translation = translations[currentLang];
    document.getElementById('site-title').innerHTML = translation.siteTitle; // Use innerHTML for bold text
    document.getElementById('job-title').innerHTML = translation.jobTitle; // Use innerHTML for bold text
    document.getElementById('about-title').textContent = translation.aboutTitle;
    document.getElementById('about-text').innerHTML = translation.aboutText; // Use innerHTML for bold text
    document.getElementById('projects-title').textContent = translation.projectsTitle;
    document.getElementById('project1-title').textContent = translation.project1Title;
    document.getElementById('project1-text').textContent = translation.project1Text;
    document.getElementById('project2-title').textContent = translation.project2Title;
    document.getElementById('project2-text').textContent = translation.project2Text;
    document.getElementById('experience-title').textContent = translation.experienceTitle;
    document.getElementById('experience-text').textContent = translation.experienceText;
    document.getElementById('hobbies-title').textContent = translation.hobbiesTitle;
    document.getElementById('hobbies-text').textContent = translation.hobbiesText;
    document.getElementById('skills-title').textContent = translation.skillsTitle;
    document.getElementById('footer-text').textContent = translation.footerText;
});

document.querySelectorAll('nav ul.menu li').forEach(item => {
    item.addEventListener('click', function () {
        const sectionId = this.querySelector('a').getAttribute('data-section');
        document.querySelectorAll('main section').forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    });
});
