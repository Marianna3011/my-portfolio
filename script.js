const translations = {
    en: {
        siteTitle: "Marianna Myszkowska",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        aboutTitle: "About Me",
        aboutText: "Brief introduction about yourself.",
        projectsTitle: "Projects",
        project1Title: "Project 1",
        project1Text: "Short project description.",
        project2Title: "Project 2",
        project2Text: "Short project description.",
        contactTitle: "Contact",
        sendButton: "Send Message",
        footerText: "© 2025 Your Name. All rights reserved."
    },
    pl: {
        siteTitle: "Marianna Myszkowska",
        navAbout: "O Mnie",
        navProjects: "Projekty",
        navContact: "Kontakt",
        aboutTitle: "O Mnie",
        aboutText: "Krótki wstęp o sobie.",
        projectsTitle: "Projekty",
        project1Title: "Projekt 1",
        project1Text: "Krótki opis projektu.",
        project2Title: "Projekt 2",
        project2Text: "Krótki opis projektu.",
        contactTitle: "Kontakt",
        sendButton: "Wyślij Wiadomość",
        footerText: "© 2025 Twoje Imię. Wszelkie prawa zastrzeżone."
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
    document.getElementById('nav-contact').textContent = t.navContact;
    document.getElementById('about-title').textContent = t.aboutTitle;
    document.getElementById('about-text').textContent = t.aboutText;
    document.getElementById('projects-title').textContent = t.projectsTitle;
    document.getElementById('project1-title').textContent = t.project1Title;
    document.getElementById('project1-text').textContent = t.project1Text;
    document.getElementById('project2-title').textContent = t.project2Title;
    document.getElementById('project2-text').textContent = t.project2Text;
    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('send-button').textContent = t.sendButton;
    document.getElementById('footer-text').textContent = t.footerText;

    // Change the button label too
    document.getElementById('switch-lang').textContent = currentLang === 'en' ? "🇬🇧 English" : "🇵🇱 Polski";
}
