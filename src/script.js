// for responsive toggle

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.style.left = '0';
    document.querySelector('.mask').classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.style.left = '-100%';
    document.querySelector('.mask').classList.toggle('hidden');
});



// for responsive toggle end

document.querySelectorAll('.accordian-head').forEach(element => {
    element.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('accordian-col');
    });
});


document.querySelectorAll('.modal-tog').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.mask').classList.toggle('hidden');
        document.querySelector('.modal').classList.toggle('hidden');
    });
})

document.querySelector('.mask').addEventListener('click', event => {
    document.querySelector('.mask').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
    mobileMenu.classList.add('hidden');
    mobileMenu.style.left = '-100%';
});



$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

