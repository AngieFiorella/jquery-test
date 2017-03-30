$('#js-view').on('click', showCart );

function showCart() {
  // if ($('aside').hasClass('view')) {
  //   $('aside').removeClass('view');
  // } else {
  //   $('aside').addClass('view');
  // }

  $('aside').toggleClass('view');
}