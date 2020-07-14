
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
})
});

function copy_clip(text){
  var dummy = document.createElement("textarea");
   document.body.appendChild(dummy);
   dummy.value = text;
   dummy.select();
   document.execCommand("copy");
   document.body.removeChild(dummy);
}
