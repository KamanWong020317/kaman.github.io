fetch('navbar.html')
.then(response => response.text())
.then(data => {
const navbarContainer = document.getElementById('navbar');
const tempDiv = document.createElement('div');
tempDiv.innerHTML = data;
const navElement = tempDiv.querySelector('nav');
if (navElement) {
    navbarContainer.appendChild(navElement);
}
})
.catch(error => console.error('Error loading navbar:', error));

const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active'); 
            contentSections.forEach(section => section.classList.remove('active'));

            const sectionId = button.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
