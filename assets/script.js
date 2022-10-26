const next = document.getElementById('forwardBtn');
const back = document.getElementById('backBtn');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const projects = document.querySelector('.work');
const contact = document.querySelector('.contact');

projects.addEventListener('click', function(){

    window.location.href = '../pages/projects.html';

});

about.addEventListener('click', function(){

   window.location.href = '../pages/about.html';
});

home.addEventListener('click', function(){

   window.location.href = '../index.html';
});
