// navbar
var activeNavItem = $('.nav-item');

activeNavItem.click(function(){
  activeNavItem.removeClass('active');
  $(this).addClass('active');  
});


$('.bi.bi-list').click(function(){
  $(this).toggleClass('bi-list')
  $(this).toggleClass('bi-chevron-left')
})


// fixed footer
function footer_behind_ctn(){
  var footerHeight = $('.footer').outerHeight();
  $('.footer-top-section').css('margin-bottom', footerHeight);
}

$(document).ready(footer_behind_ctn);
$(window).resize(footer_behind_ctn);