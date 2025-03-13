fetch('../components/navbar.html')
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