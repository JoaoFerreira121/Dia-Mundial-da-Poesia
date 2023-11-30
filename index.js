const allLoadings = document.querySelectorAll('.loading');
const toggler = document.getElementById('toggle');

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');


    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkmode', isDarkModeEnabled);


    if (!isDarkModeEnabled) {
        body.classList.add('light-mode'); 
    } else {
        body.classList.remove('light-mode'); 
    }
    
}


toggler.addEventListener('click', toggleDarkMode);

window.addEventListener('load', () => {

    const isDarkModeEnabled = localStorage.getItem('darkmode');

    if (isDarkModeEnabled === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    setInterval(() => {
        allLoadings.forEach(item => {
            item.classList.remove('loading');
        });
    }, 10);
});


function scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10);
}


function toggleScrollButton() {
    const scrollButton = document.querySelector('.sp-scroll-up');
    if (window.scrollY > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

const scrollButton = document.querySelector('.sp-scroll-up');
scrollButton.addEventListener('click', function (e) {
    e.preventDefault();
    scrollToTop();
});

window.addEventListener('scroll', toggleScrollButton);



