$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});


function scroll1(){
  document.getElementById("project-row2").scrollIntoView({
        behavior: 'smooth'
    });
}

function scroll2(){
  document.getElementById("project-row3").scrollIntoView({
        behavior: 'smooth'
    });
}

function scroll3(){
  document.getElementById("project-row4").scrollIntoView({
        behavior: 'smooth'
    });
}

function scroll4(){
  document.getElementById("project-row5").scrollIntoView({
        behavior: 'smooth'
    });
}

function scroll5(){
  document.getElementById("project-row6").scrollIntoView({
        behavior: 'smooth'
    });
}
