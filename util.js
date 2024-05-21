
const urlServer = "https://664cba55ede9a2b5565160ad.mockapi.io/Cliente";

let btns = document.querySelectorAll('a','.menuLink');
let currentUrl = window.location.href.split('?')[0];

for (let btn of btns) {
    
    if (btn.href === currentUrl) {
        btn.classList.add('active');
        break;
    }
}