// $(function() {
// 	const main = $('#jquery');

//     main.hide();

// 	$('.button_pako_front').click(() => {
// 		main.show();
// 		main.css('animation-name', 'toScale');
//     });
// });

$(function () {
  const main = $('#jquery');
  const ress = $('.modal-footer');

  main.css('display', 'none');

  $('.button_pako_front').click(() => {
    main.fadeIn(1000);
  });

  // ress.click( () => {
  // 	window.onload(ressources.html);
  // });
});
