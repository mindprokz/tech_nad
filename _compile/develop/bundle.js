/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _sendForm = __webpack_require__(1);

	var _sendForm2 = _interopRequireDefault(_sendForm);

	var _floatMenu = __webpack_require__(2);

	var _floatMenu2 = _interopRequireDefault(_floatMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function changeMenuUp() {
	  document.querySelector('#navigation img').src = 'images/logo_small.jpg';
	}

	//Плавающее меню
	new _floatMenu2.default().init({
	  elem: document.getElementById('navigation'),
	  height: 120,
	  first_class: 'menu_fixed_on_top',
	  second_class: 'float_menu'
	}, function () {
	  return document.querySelector('#navigation img').src = 'images/logo_small.jpg';
	}, function () {
	  return document.querySelector('#navigation img').src = 'images/logo_big.png';
	});

	$('a[href^="#"]').on('click', function () {
	  $('html, body').animate({ scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top - 93 }, 1000);
	  return false;
	});

	// fancybox
	$(".fancybox").click(function () {
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
	};
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
	  image_stack: 1
	};
	document.querySelector('#projects .list_slides .wrap').style.left = 0;
	document.querySelector('#thumbimage').style.display = 'none';

	[].concat(_toConsumableArray(document.querySelectorAll('#projects .list_slides .list_elem'))).forEach(function (elem, index, arr) {
	  elem.addEventListener('click', function () {
	    var _this = this;

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

	      window.slider_app.image_interval = setInterval(function () {
	        window.slider_app.image_stack += 1;

	        if (window.slider_app.image_stack === parseInt(_this.dataset.range) + 1) window.slider_app.image_stack = 1;

	        document.querySelector('#thumbimage').src = 'images/' + _this.dataset.name_folder + ('/' + window.slider_app.image_stack + '.jpg');
	      }, 2500);
	    }

	    document.querySelector('#projects .shape .name span').textContent = this.dataset.object;
	    document.querySelector('#projects .shape .order span').textContent = this.dataset.order;
	    document.querySelector('#projects .shape .year span').textContent = this.dataset.year;
	  });
	});

	// Left slide button
	document.querySelector('#projects .slider .left').addEventListener('click', function () {
	  if (window.slider_app.slide !== 0) {
	    window.slider_app.slide -= 1;

	    var left = parseInt(document.querySelector('#projects .list_slides .wrap').style.left);
	    document.querySelector('#projects .list_slides .wrap').style.left = left + 380 + 'px';
	  }
	});

	// right slide button
	document.querySelector('#projects .slider .right').addEventListener('click', function () {
	  if (window.slider_app.slide !== 1) {
	    window.slider_app.slide += 1;

	    var left = parseInt(document.querySelector('#projects .list_slides .wrap').style.left);
	    document.querySelector('#projects .list_slides .wrap').style.left = left - 380 + 'px';
	  }
	});

	// accred slide
	[].concat(_toConsumableArray(document.querySelectorAll('#accred .container .ol .li'))).forEach(function (elem) {
	  elem.addEventListener('click', function (e) {
	    document.querySelector('#accred .container .li.active').classList.remove('active');
	    e.path[0].classList.add('active');

	    document.querySelector('#accred .container a img').src = 'images/' + e.path[0].dataset.img + '.png';

	    document.querySelector('#accred .container a').setAttribute('href', 'images/' + e.path[0].dataset.link + '.jpg');
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sendForm = function sendForm(id, dates, idMail) {
	  _classCallCheck(this, sendForm);

	  document.getElementById(id).addEventListener('submit', function () {

	    var data = {
	      name: document.querySelector(dates.name.value),
	      email: document.querySelector(dates.email.value),
	      telephone: document.querySelector(dates.telephone.value)
	    };

	    $("#application").submit(function () {
	      $.ajax({
	        type: "POST",
	        url: "mail.php",
	        data: data
	      }).done(function (value) {
	        var mail = document.getElementById(idMail);

	        mail.innerHTML = value;
	        mail.classList.remove('not_visible_mail');

	        setTimeout(function () {
	          $("#" + id).trigger("reset");
	          mail.classList.add('not_visible_mail');
	        }, 1000);
	      });

	      return false;
	    });
	  });
	};

	exports.default = sendForm;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Принимает объект с настройками для меню
	var FloatMenu = function () {
	  function FloatMenu() {
	    _classCallCheck(this, FloatMenu);
	  }

	  _createClass(FloatMenu, [{
	    key: 'init',

	    // @params - object

	    value: function init(params, callbackStart, callbackEnd) {
	      var param = {};
	      param.elem = params.elem;
	      param.height = params.height;
	      param.first_class = params.first_class;
	      param.second_class = params.second_class;
	      param.active_class = params.first_class;

	      if (window.pageYOffset > param.height) {
	        param.elem.classList.add(param.first_class);
	        param.elem.classList.add(param.second_class);
	        if (callbackStart) {
	          callbackStart();
	        }
	      } else {
	        param.elem.classList.add(param.first_class);
	        if (callbackEnd) {
	          callbackEnd();
	        }
	      }

	      window.addEventListener('scroll', function () {

	        if (window.pageYOffset > param.height && param.active_class === param.first_class) {
	          param.elem.classList.add(param.second_class);
	          param.active_class = param.second_class;
	          if (callbackStart) {
	            callbackStart();
	          }
	        } else if (window.pageYOffset < param.height && param.active_class === param.second_class) {
	          param.elem.classList.remove(param.second_class);
	          param.active_class = param.first_class;
	          if (callbackEnd) {
	            callbackEnd();
	          }
	        }
	      });
	    }
	  }]);

	  return FloatMenu;
	}();

	exports.default = FloatMenu;

/***/ }
/******/ ]);