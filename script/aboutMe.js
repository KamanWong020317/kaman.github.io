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
            // 移除所有按鈕的 active 樣式
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active'); // 設定當前按鈕為 active

            // 隱藏所有內容區塊
            contentSections.forEach(section => section.classList.remove('active'));

            // 顯示對應的內容
            const sectionId = button.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
