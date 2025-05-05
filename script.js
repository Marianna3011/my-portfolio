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
        skills: [
            { title: "Programming", details: ["Python (pandas, numpy, matplotlib, seaborn, scikit-learn)", "SQL", "Git"] },
            { title: "Data Analysis", details: ["Exploratory Data Analysis (EDA)", "Data Cleaning", "Hypothesis Testing", "Regression Analysis", "Classification", "Clustering", "Feature Engineering", "Model Evaluation Metrics (Accuracy, Precision, Recall, F1, ROC-AUC)"] },
            { title: "Visualization", details: ["Seaborn", "Matplotlib", "Plotly", "Excel (Pivot Tables, Charts)"] },
            { title: "Tools", details: ["Jupyter Notebooks", "Google Colab", "GitHub", "Visual Studio Code", "Command Line", "Docker (Basic)", "LaTeX"] },
            { title: "Web & Data Access", details: ["APIs (REST, JSON)", "Web Scraping (BeautifulSoup, requests, Selenium)"] },
            { title: "Machine Learning", details: ["Supervised and Unsupervised Learning", "Cross-Validation", "Hyperparameter Tuning (GridSearchCV, RandomizedSearchCV)"] },
            { title: "Soft Skills", details: ["Data Storytelling", "Problem Solving", "Communication", "Teamwork"] }
        ],
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

    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = ''; // Clear existing content
    translation.skills.forEach(skill => {
        const skillBox = document.createElement('div');
        skillBox.className = 'skill-box';

        const skillTitle = document.createElement('div');
        skillTitle.className = 'skill-title';
        skillTitle.textContent = skill.title;

        const skillDetails = document.createElement('div');
        skillDetails.className = 'skill-details';
        skill.details.forEach(detail => {
            const detailSpan = document.createElement('span');
            detailSpan.textContent = detail;
            skillDetails.appendChild(detailSpan);
        });

        skillBox.appendChild(skillTitle);
        skillBox.appendChild(skillDetails);
        skillsGrid.appendChild(skillBox);
    });

    // Ensure only the "about-contact" section is visible initially
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = section.id === 'about-contact' ? 'block' : 'none';
    });
});

document.querySelectorAll('nav ul.menu li').forEach(item => {
    item.addEventListener('click', function () {
        const sectionId = this.querySelector('a').getAttribute('data-section');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');

        // Apply the hidden class with a smooth transition to header and footer only
        if (sectionId === 'about-contact') {
            header.classList.remove('hidden');
            footer.classList.remove('hidden');
        } else {
            header.classList.add('hidden');
            footer.classList.add('hidden');
        }

        // Show the selected section and hide others
        document.querySelectorAll('main section').forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    });
});

// Ensure the menu is always visible on page load
const menu = document.querySelector('nav');
menu.style.opacity = 1; // Always visible
menu.style.visibility = 'visible'; // Always visible
