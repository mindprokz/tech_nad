import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';
//   $(document).ready(function () {
//     'use strict';
// //Аякс отправка форм
//     $("#application").submit(function () {
//       var data = {
//         name : document.querySelector('input[name="name"]').value,
//         email : document.querySelector('input[name="email"]').value,
//         telephone : document.querySelector('input[name="telephone"]').value
//       };
//       $.ajax({
//         type: "POST",
//         url: "mail.php",
//         data: data
//       }).done(function (value) {
//         $('#mail')[0].innerHTML = value;
//         $('#mail').removeClass('not_visible_mail');
//         setTimeout(function () {
//           $("#form").trigger("reset");
//         }, 1000);
//       });
//     return false;
//     });
//  function  test() {
// 	console.log('test!');
// }
//         $("img, a").on("dragstart", function (event) { event.preventDefault(); });
//   });

function changeMenuUp() {
  document.querySelector('#navigation img').src = 'images/logo_small.jpg';
}

//Плавающее меню
new FloatMenu().init({
  elem : document.getElementById('navigation'),
  height : 120,
  first_class : 'menu_fixed_on_top',
  second_class : 'float_menu'
}, () => document.querySelector('#navigation img').src = 'images/logo_small.jpg', () => document.querySelector('#navigation img').src = 'images/logo_big.png');


$('a[href^="#"]').on('click', function () {
	$('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 93 }, 1000 );
	return false;
});
// Отправка формы обратной связи скрипту для отправления по почте
// let data = {
//   name : 'input[name="name"]',
//   email : 'input[name="email"]',
//   telephone : 'input[name="telephone"]'
// };
//
// new SendFunc('application', data, 'mail');

// fancybox
$(".fancybox").click(function() {
	$(".fancybox").fancybox({
		openEffect: 'fade',
		closeEffect: 'elastic'
	});
});

// MAPS
 var myLatlng = new google.maps.LatLng(51.130896, 71.496806);
 var myOptions = {
   zoom: 15,
   center: myLatlng,
   disableDefaultUI: true,
   mapTypeId: google.maps.MapTypeId.ROADMAP
 }
 var map = new google.maps.Map(document.getElementById("map"), myOptions);

 var marker = new google.maps.Marker({
   position: myLatlng,
   map: map,
   icon: 'images/geo.png'
 });

//PROJECTS
window.slider_app = {
  slide: 0,
  left: 0,
  image_interval: null,
  image_stack: 1,
};
document.querySelector('#projects .list_slides .wrap').style.left = 0;
document.querySelector('#thumbimage').style.display = 'none';

[...document.querySelectorAll('#projects .list_slides .list_elem')].forEach( (elem, index, arr) => {
  elem.addEventListener('click', function () {
    if (elem.dataset.type === 'video') {
      if (window.slider_app.image_interval != null) clearInterval(window.slider_app.image_interval);
      document.querySelector('#thumbvideo').src = 'videos/' + this.dataset.video;
      document.querySelector('#thumbimage').style.display = 'none';
      document.querySelector('#thumbvideo').style.display = 'inline';
    } else if (elem.dataset.type === 'image') {
      document.querySelector('#thumbvideo').style.display = 'none';
      document.querySelector('#thumbimage').style.display = 'inline';
      document.querySelector('#thumbimage').src = 'images/' + this.dataset.name_folder + '/1.jpg';
      if (window.slider_app.image_interval != null) clearInterval(window.slider_app.image_interval);

      window.slider_app.image_interval = setInterval(() => {
        window.slider_app.image_stack += 1;

        if (window.slider_app.image_stack === parseInt(this.dataset.range) + 1) window.slider_app.image_stack = 1;

        document.querySelector('#thumbimage').src = 'images/' +
          this.dataset.name_folder + `/${window.slider_app.image_stack}.jpg`;
      }, 2500);
    }

    document.querySelector('#projects .shape .name span').textContent = this.dataset.object;
    document.querySelector('#projects .shape .order span').textContent = this.dataset.order;
    document.querySelector('#projects .shape .year span').textContent = this.dataset.year;
  });
});

// Left slide button
document.querySelector('#projects .slider .left').addEventListener('click', () => {
  if (window.slider_app.slide !== 0) {
    window.slider_app.slide -= 1;

    let left = parseInt(document.querySelector('#projects .list_slides .wrap').style.left);
    document.querySelector('#projects .list_slides .wrap').style.left = (left + 380) + 'px';
  }
});

// right slide button
document.querySelector('#projects .slider .right').addEventListener('click', () => {
  if (window.slider_app.slide !== 1) {
    window.slider_app.slide += 1;

    let left = parseInt(document.querySelector('#projects .list_slides .wrap').style.left);
    document.querySelector('#projects .list_slides .wrap').style.left = (left - 380) + 'px';
  }
});
