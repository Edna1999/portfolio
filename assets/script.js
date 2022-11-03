
let collapseOne = document.getElementById('collapseOne');
let collapseTwo = document.getElementById('collapseTwo');


let education = document.getElementById('ed');
let skill = document.getElementById('skills');



let action = 0;

education.addEventListener('click', function(){

  action++
  if(action % 2){

    collapseOne.setAttribute('class', 'collapse');
  } else {

    collapseOne.setAttribute('class', 'collapse show');
  }

});

skill.addEventListener('click', function(){

  action++
  if(action % 2){

    collapseTwo.setAttribute('class', 'collapse');

  } else {

    collapseTwo.setAttribute('class', 'collapse show');
    
  }

});






