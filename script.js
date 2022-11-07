let tabContents = document.querySelectorAll('.tab-contents');
let tabLinks = document.querySelectorAll('.tab-links');

const openTab = (tabName) => {
    tabContents.forEach((tab) => {
        tab.classList.remove('active');
    });
    tabLinks.forEach((tab) => {
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}