const next = document.getElementById('forwardBtn');
const back = document.getElementById('backBtn');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const projects = document.querySelector('.work');
const contact = document.querySelector('.contact');

projects.addEventListener('click', function(){

    window.location.href = 'https://edna1999.github.io/portfolio/pages/projects/';

});

about.addEventListener('click', function(){

   window.location.href = 'https://edna1999.github.io/portfolio/pages/about/';
});

home.addEventListener('click', function(){

   window.location.href = 'https://edna1999.github.io/portfolio/';
});
