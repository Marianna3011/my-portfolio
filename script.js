const translations = {
    en: {
        siteTitle: "Marianna Myszkowska",
        navAbout: "About Me & Contact",
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
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const translation = translations.en; // Use only English translations
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

document.querySelectorAll('nav ul.menu li').forEach(item => {
    item.addEventListener('click', function () {
        const sectionId = this.querySelector('a').getAttribute('data-section');
        document.querySelectorAll('main section').forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    });
});
