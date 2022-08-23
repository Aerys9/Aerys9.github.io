var modelBlocker = document.querySelector(".model")
var modelsBlocker = document.querySelector(".models")
var castingBlocker = document.querySelector(".casting")
var indexBlocker = document.querySelector(".front-section")
var servicesBlocker = document.querySelector(".services");
var serviceBlocker = document.querySelector(".service");
var contactsBlocker = document.querySelector(".contacts");
var mediaBlocker = document.querySelector(".media");
/*----show models btn-----*/

if (modelsBlocker) {

	var showPerClick = 1;
	document.addEventListener('DOMContentLoaded', function () {
		if (document.documentElement.clientWidth > 991.98) {
			showPerClick = 9;
			document.getElementById("88sd8q").classList.remove('hidden');
		} else {
			showPerClick = 8;
			document.getElementById("88sd8q").classList.add('hidden');
		}
	});

	window.addEventListener("resize", function () {
		if (document.documentElement.clientWidth > 991.98) {
			showPerClick = 9;
			document.getElementById("88sd8q").classList.remove('hidden');
		} else {
			showPerClick = 8;
			document.getElementById("88sd8q").classList.add('hidden');
		}
	}, true);


	var modelsBtnShow = document.querySelectorAll('.models__btn-show');

	for (var i = 0; i < modelsBtnShow.length; i++) {
		modelsBtnShow[i].addEventListener('click', function () {
			var hidden = this.parentNode.querySelectorAll('div.hidden');
			for (var i = 0; i < showPerClick; i++) {
				if (!hidden[i]) return this.outerHTML = "";
				hidden[i].classList.remove('hidden');
			}
		});
	}
}

/*-----preview images------*/
if (castingBlocker) {
	let inputImages = document.querySelector('.form__input-images');
	const preview = document.querySelector('.form__preview-images');
	const fileList = [];

	if (inputImages) {
		inputImages.addEventListener('change', onChange);
	}

	function onChange() {
		[...inputImages.files].forEach(file => {
			const reader = new FileReader;
			reader.addEventListener('loadend', () => {
				const item = document.createElement('div');
				const image = new Image;
				image.src = `data:${file.type};base64,${btoa(reader.result)}`;
				const remove = document.createElement('div');
				remove.innerHTML = "<button type='button' class='form__btn-delete'><img class='form__btn-delete-icon' src='./img/casting/btn-delete.svg' /></button>";
				const fileItem = {
					name: file.name,
					modified: file.lastModified,
					size: file.size,
					data: reader.result
				};
				fileList.push(fileItem);
				remove.addEventListener('click', () => {
					fileList.splice(fileList.indexOf(fileItem), 1);
					item.classList.add('removing');
					setTimeout(() => item.remove(), 100);
				});
				item.appendChild(remove);
				item.appendChild(image);
				preview.appendChild(item);
			});
			reader.readAsBinaryString(file);
		});
		inputImages.value = '';
		const newInput = inputImages.cloneNode(true);
		inputImages.replaceWith(newInput);
		inputImages = newInput;
		inputImages.addEventListener('change', onChange);
	}
}
/*-------menu--------*/

let menuBtn = document.querySelector('.header__btn-mobile-menu');
let menu = document.querySelector('.header__mobile-menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

var maxWidth_1079 = window.matchMedia("(max-width: 1079.98px)")

function movingBlocks(maxWidth_1079) {
	if (maxWidth_1079.matches) {
		document.querySelector('.header__mobile-menu').appendChild(document.querySelector(".header__menu"));
		document.querySelector('.header__mobile-menu').appendChild(document.querySelector(".header__select-language"));
		document.querySelector('.header__mobile-menu').appendChild(document.querySelector(".header__btn-order"));

	} else {
		let testActiveClass = document.querySelector(".header__mobile-menu").classList.contains("active");
		if (testActiveClass) {
			menuBtn.classList.toggle('active');
			menu.classList.toggle('active');
		}
		document.querySelector('.header__logo').insertAdjacentElement('afterEnd', document.querySelector(".header__menu"));
		document.querySelector('.header__container').appendChild(document.querySelector(".header__select-language"));
		document.querySelector('.header__container').appendChild(document.querySelector(".header__btn-order"));
	}
}
movingBlocks(maxWidth_1079)
maxWidth_1079.addListener(movingBlocks)

/*------------select city--------------*/
const selectSingle = document.querySelector('.select-city__select');
const selectSingle_title = selectSingle.querySelector('.select-city__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select-city__label');
const selectContent = document.querySelector('.select-city__content');

selectSingle_title.addEventListener('click', () => {
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.removeAttribute('data-state');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
});
document.addEventListener('click', (e) => {
	if (e.target.closest('.select-city__select') !== selectSingle) {
		selectSingle.removeAttribute('data-state');
	}
});

for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	});
}

/*-----------------popupBlock-order-------------------*/

let popupOrder = document.querySelector('.popup-order');
let popupBlock = document.querySelector('.popup-order__block');
let openPopupButtons = document.querySelectorAll('.btn-order');
let closePopupButton = document.querySelector('.popup-order__close');

openPopupButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popupOrder.classList.add('active');
		popupBlock.classList.add('active');
	})
});


closePopupButton.addEventListener('click', () => {
	popupOrder.classList.remove('active');
	popupBlock.classList.remove('active');
});

document.addEventListener('click', (e) => {
	if (e.target === popupOrder) {
		popupOrder.classList.remove('active');
		popupBlock.classList.remove('active');
	}
});
/*------swiper slider----------*/

if (indexBlocker) {


	const swiperSliderModels = new Swiper('.models-section__swiper', {
		slideClass: 'models-section__swiper-slide',
		wrapperClass: 'models-section__swiper-wrapper',
		scrollbar: {
			el: '.models-section__swiper-scrollbar',
			draggable: true,
		},
		slidesPerView: 'auto',
		simulateTouch: true,
		freeMode: true,

		mousewheel: {
			sensitivity: 1,
		},
	});
	const swiperSliderService = new Swiper('.additional-services-section__swiper', {
		slideClass: 'additional-services-section__swiper-slide',
		wrapperClass: 'additional-services-section__swiper-wrapper',
		scrollbar: {
			el: '.additional-services-section__swiper-scrollbar',
			draggable: true,
		},
		slidesPerView: 'auto',
		simulateTouch: true,
		freeMode: true,

		mousewheel: {
			sensitivity: 1,
		},
	});


	document.querySelector('.models-section__swiper-wrapper').addEventListener("mousewheel", function (e) {
		this.scrollTop -= (e.wheelDeltaY || (e.originalEvent && (e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta)) || e.wheelDelta || 0);

		e.preventDefault();
	});
}
if (modelBlocker) {
	const swiperSliderModelMore = new Swiper('.model__swiper', {
		slideClass: 'model__swiper-slide',
		wrapperClass: 'model__swiper-wrapper',

		navigation: {
			nextEl: '.model__swiper-button-next',
			prevEl: '.model__swiper-button-prev',
		},
		scrollbar: {
			el: '.model__swiper-scrollbar',
			draggable: true,
		},
		slidesPerView: "auto",
		simulateTouch: true,
		freeMode: true,
		observer: true,

		mousewheel: {
			sensitivity: 1,
		},
	});
	const swiperSliderModelImg = new Swiper('.model__swiper-img', {
		slideClass: 'model__swiper-slide-img',
		wrapperClass: 'model__swiper-wrapper-img',
		scrollbar: {
			el: '.model__swiper-scrollbar-img',
			draggable: true,
		},
		slidesPerView: 'auto',
		simulateTouch: true,
		freeMode: true,
		observer: true,
	});
}
/*----плавный скролл----*/


/*-------gsap animation-----*/
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".header__container", {
	y: -10,
}, {

	y: 0,
	opacity: 1,
	duration: .5,
	delay: 0.1,
});

if (indexBlocker) {
	gsap.fromTo(".vip-section__main-img img", {

		transform: "scale(1.2)",

	}, {
		scrollTrigger: {
			trigger: ".vip-section__main-img img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},

		transform: "scale(1)",


	});
	gsap.fromTo(".vip-section__main-img", {
		y: -25,
	}, {
		scrollTrigger: {
			trigger: ".vip-section__main-img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},
		y: 25,
	});




	gsap.fromTo(".vip-section__side-img img", {
		transform: "scale(1.2)",
	}, {
		scrollTrigger: {
			trigger: ".vip-section__side-img img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,

		},
		transform: "scale(1)",
	});
	gsap.fromTo(".vip-section__side-img", {
		y: 25,
	}, {
		scrollTrigger: {
			trigger: ".vip-section__side-img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},
		y: -25,
	});













	gsap.fromTo(".services-section__decoration-img-second img", {
		transform: "scale(1.2)",
	}, {
		scrollTrigger: {
			trigger: ".services-section__decoration-img-second img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,

		},
		transform: "scale(1)",
	});
	gsap.fromTo(".services-section__decoration-img-second", {
		y: 25,
	}, {
		scrollTrigger: {
			trigger: ".services-section__decoration-img-second",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},
		y: -25,
	});



	gsap.fromTo(".services-section__decoration-img-first img", {

		transform: "scale(1.2)",

	}, {
		scrollTrigger: {
			trigger: ".services-section__decoration-img-first img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},

		transform: "scale(1)",


	});
	gsap.fromTo(".services-section__decoration-img-first", {
		y: -25,
	}, {
		scrollTrigger: {
			trigger: ".services-section__decoration-img-first",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},
		y: 25,
	});

	gsap.fromTo(".front-section__title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".front-section__title",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".front-section__line", {
		width: 0,
	}, {
		scrollTrigger: ".front-section__line",
		width: 172,
		opacity: 1,
		duration: .3,
		delay: 1.2,
	});
	gsap.fromTo(".front-section__text", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: ".front-section__text",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.5,
	});


	gsap.fromTo(".services-section__section-name", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".services-section__text",
			start: "top 90%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".services-section__title", {
		y: -10,
		opacity: 0,
	}, {

		scrollTrigger: {
			trigger: ".services-section__text",
			start: "top 90%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".services-section__line", {
		width: 0,
	}, {
		scrollTrigger: {
			trigger: ".services-section__text",
			start: "top 90%"
		},
		width: 235,
		opacity: 1,
		duration: .3,
		delay: 0.7,
	});
	gsap.fromTo(".services-section__text", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".services-section__text",
			start: "top 90%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1,
	});
	gsap.fromTo(".services-section__btn", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".services-section__text",
			start: "top 90%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.5,
	});


	gsap.fromTo(".services-section__decoration-text", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".services-section__text",
			start: "top 90%"
		},
		opacity: 1,
		duration: 1.5,
		delay: 1.7,
	});





	gsap.fromTo(".services-section__list-title", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".services-section__list-title",
			start: "top 90%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});

	gsap.fromTo(".services-section__list-item", {
		y: -10,
		opacity: -1,
		width: "80%",
	}, {
		scrollTrigger: {
			trigger: ".services-section__list-title",
			start: "top 90%"
		},
		width: "100%",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.5,
		stagger: 0.2,
	});


	gsap.fromTo(".models-section__content p", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".models-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".models-section__section-name", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".models-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".models-section__swiper", {
		x: 500,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".models-section__container",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: 0.2,
	});







	gsap.fromTo(".advantages-section__item-num", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".advantages-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".advantages-section__item-text", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".advantages-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".advantages-section__rows-item", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".advantages-section__container",
			start: "top 85%"
		},

		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".advantages-section__section-name", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".advantages-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});






	gsap.fromTo(".casting-section__section-name", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".casting-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".casting-section__content-img", {
		x: 500,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".casting-section__container",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: 0.2,
	});
	gsap.fromTo(".casting-section__text", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".casting-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".casting-section__item-btn", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".casting-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".casting-section__decoration-text", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".casting-section__container",
			start: "top 85%"
		},
		opacity: 1,
		duration: 1.5,
		delay: 1.2,
	});






	gsap.fromTo(".vip-section__section-name", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".vip-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".vip-section__title", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".vip-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".vip-section__line", {
		width: 0,
	}, {
		scrollTrigger: {
			trigger: ".vip-section__container",
			start: "top 85%"
		},
		width: 235,
		opacity: 1,
		duration: .3,
		delay: 0.7,
	});
	gsap.fromTo(".vip-section__text", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".vip-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1,
	});
	gsap.fromTo(".vip-section__item-btn", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".vip-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.5,
	});
	gsap.fromTo(".vip-section__decoration-text", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".vip-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: 1.5,
		delay: 1.7,
	});







	gsap.fromTo(".additional-services-section__swiper", {
		x: 500,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".additional-services-section__container",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: 0.2,
	});
	gsap.fromTo(".additional-services-section__section-name", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".additional-services-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});


	gsap.fromTo(".media-section__section-name", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".media-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".media-section__list-item", {
		x: 400,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".media-section__container",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: .9,
		delay: 0.2,
		stagger: 0.3,
	});
	gsap.fromTo(".media-section__item-btn", {
		y: -10,
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".media-section__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.1,
	});
	gsap.fromTo(".media-section__decoration-text", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".media-section__container",
			start: "top 85%"
		},
		opacity: 1,
		duration: 1.5,
		delay: .5,
	});

}
if (modelsBlocker) {
	gsap.fromTo(".agency-section__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".agency-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,

	});
	gsap.fromTo(".agency-section__text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".agency-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".agency-section__text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".agency-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});



	gsap.fromTo(".agency-section__btn-order", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".agency-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .7,
	});



	gsap.fromTo(".agency-section__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".agency-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,

	});
	gsap.fromTo(".agency-section__text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".agency-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".agency-section__text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".agency-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});



	gsap.fromTo(".agency-section__btn-order", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".agency-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .7,
	});




	gsap.fromTo(".features-models-section__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".features-models-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".features-models-section__text-decoration", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".features-models-section",
			start: "top 85%"
		},
		opacity: 1,
		duration: 1.5,
		delay: 1,
	});
	gsap.fromTo(".features-models-section__main-image", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".features-models-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".features-models-section__text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".features-models-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".features-models-section__list-item", {
		x: 10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".features-models-section",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
		stagger: 0.1,
	});
	gsap.fromTo(".features-models-section__text-under-list", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".features-models-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".vip-escort-section__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".vip-escort-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".vip-escort-section__main-img", {
		x: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".vip-escort-section",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: 0.2,
	});
	gsap.fromTo(".vip-escort-section__title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".vip-escort-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".vip-escort-section__text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".vip-escort-section",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".vip-escort-section__text-decoration", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".vip-escort-section",
			start: "top 85%"
		},
		opacity: 1,
		duration: 1.5,
		delay: 1,
	});
}

if (servicesBlocker) {
	gsap.fromTo(".services__way-block", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".services__way-block",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});


	gsap.fromTo(".services__title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".services__title",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".services__service-item", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".services__service-item",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.4,
		stagger: 0.1,
	});
	gsap.fromTo(".services__list", {

		opacity: 0,

	}, {
		scrollTrigger: ".services__list",
		opacity: 1,
		duration: .5,
		delay: 1.4,

	});

	gsap.fromTo(".services__info-title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".services__info",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".services__info-line", {
		width: 0,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".services__info",
			start: "top 85%"
		},
		width: 246,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".services__info-p", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".services__info",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".services__info-text-decoration", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".services__info",
			start: "top 85%"
		},
		opacity: 1,
		duration: 1.5,
		delay: 1.7,
	});
	gsap.fromTo(".services__info img", {
		x: -500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".services__info",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: 0.2,
	});
}
if (castingBlocker) {
	gsap.fromTo(".advantage__img", {
		y: -25,
	}, {
		scrollTrigger: {
			trigger: ".advantage__img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},
		y: 25,
	});

	gsap.fromTo(".advantage__img img", {

		transform: "scale(1.15)",

	}, {
		scrollTrigger: {
			trigger: ".advantage__img img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},

		transform: "scale(1)",


	});














	gsap.fromTo(".agency__img-right img", {

		transform: "scale(1.15)",

	}, {
		scrollTrigger: {
			trigger: ".agency__img-right img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},

		transform: "scale(1)",


	});
	gsap.fromTo(".agency__img-right", {
		y: -15,
	}, {
		scrollTrigger: {
			trigger: ".agency__img-right",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},
		y: 15,
	});

	gsap.fromTo(".agency__img-left img", {

		transform: "scale(1.15)",

	}, {
		scrollTrigger: {
			trigger: ".agency__img-left img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},

		transform: "scale(1)",


	});
	gsap.fromTo(".agency__img-left", {
		y: 15,
	}, {
		scrollTrigger: {
			trigger: ".agency__img-left",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},
		y: -15,
	});







	gsap.fromTo(".casting__way-block", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".casting__way-block",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});


	gsap.fromTo(".casting__title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".casting__title",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".casting__p", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".casting__p",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".casting__img-main-wrapper", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".casting__img-main-wrapper",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.2,
	});
	gsap.fromTo(".work-with-us__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-work-with-us",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".work-with-us__subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-work-with-us",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".work-with-us__item-num", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-work-with-us",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
		stagger: .1,
	});
	gsap.fromTo(".work-with-us__item-text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-work-with-us",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1,
		stagger: .1,
	});
	gsap.fromTo(".work-with-us__item", {
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-work-with-us",
			start: "top 85%"
		},
		opacity: 1,
		duration: .5,
		delay: 1,
		stagger: .1,
	});



	gsap.fromTo(".agency__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-agency",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".agency__subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-agency",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.5,
	});



	gsap.fromTo(".agency__text-decoration", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".casting__section-agency",
			start: "top 85%"
		},
		opacity: 1,
		duration: 1.5,
		delay: 1.5,
	});
	gsap.fromTo(".agency__line", {
		width: 0,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-agency",
			start: "top 85%"
		},
		width: 235,
		opacity: 1,
		duration: .5,
		delay: 1.5,
	});
	gsap.fromTo(".agency__text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-agency",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2,
	});

	gsap.fromTo(".requirements__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-requirements",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});


	gsap.fromTo(".requirements__subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-requirements",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,

	});
	gsap.fromTo(".requirements__list-item", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-requirements",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
		stagger: .1,
	});
	gsap.fromTo(".advantage__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-advantage",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".advantage__subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-advantage",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".advantage__line", {
		width: 0,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-advantage",
			start: "top 85%"
		},
		width: 235,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});

	gsap.fromTo(".advantage__p", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-advantage",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".advantage__item", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-advantage",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
		stagger: .1,
	});

	gsap.fromTo(".advantage__text", {

		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: ".casting__section-advantage",
			start: "top 85%"
		},
		opacity: 1,
		duration: 1.5,
		delay: .7,
	});
	gsap.fromTo(".necessarily__section-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-necessarily",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
	});
	gsap.fromTo(".necessarily__content-img", {
		x: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-necessarily",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1.5,
		delay: 0.2,
	});
	gsap.fromTo(".necessarily__subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-necessarily",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".necessarily__line", {
		width: 0,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-necessarily",
			start: "top 85%"
		},
		width: 235,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".necessarily__info-p", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".casting__section-necessarily",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});





	gsap.fromTo(".questionnaire__title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".questionnaire__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".form__form-data-shell", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".questionnaire__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .7,
	});
	gsap.fromTo(".form__form-images", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".questionnaire__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".form__text-explanation", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".questionnaire__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".form__btn", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".questionnaire__container",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.2,
	});

}
if (contactsBlocker) {
	gsap.fromTo(".contacts__way-block", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".contacts__way-block",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});


	gsap.fromTo(".contacts__title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".contacts__title",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".contacts__line", {
		width: "0%",
		opacity: 0,

	}, {
		scrollTrigger: ".contacts__line",
		width: "100%",
		opacity: 1,
		duration: 1,
		delay: 1.7,
	});
	gsap.fromTo(".contacts__subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".contacts__subtitle",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.7,
	});
	gsap.fromTo(".contacts__line-02", {
		width: 0,
		opacity: 0,

	}, {
		scrollTrigger: ".contacts__line-02",
		width: 395,
		opacity: 1,
		duration: 0.5,
		delay: 3.2,
	});
	gsap.fromTo(".contacts__list-item", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".contacts__container",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 3.7,
		stagger: 0.1,
	});
	gsap.fromTo(".contacts__btn", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".contacts__container",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 4.2,
	});
}
if (mediaBlocker) {
	gsap.fromTo(".media__way-block", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".media__way-block",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});


	gsap.fromTo(".media__title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".media__title",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});

	gsap.fromTo(".media__content-block:nth-child(1)", {

		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(1)",

		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".media__content-block:nth-child(2)", {

		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(2)",

		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".media__content-block:nth-child(3)", {

		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(3)",
			start: "top 85%"
		},

		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(4)", {

		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(4)",
			start: "top 85%"
		},
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(5)", {

		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(5)",
			start: "top 85%"
		},

		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(6)", {

		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(6)",
			start: "top 85%"
		},

		opacity: 1,
		duration: .5,
		delay: .2,
	});



	gsap.fromTo(".media__content-block:nth-child(1) .media__content-block-subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(1)",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".media__content-block:nth-child(2) .media__content-block-subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(2)",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".media__content-block:nth-child(3) .media__content-block-subtitle", {
		y: -10,
		opacity: 0,

	}, {

		scrollTrigger: {
			trigger: ".media__content-block:nth-child(3)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(4) .media__content-block-subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(4)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(5) .media__content-block-subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(5)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(6) .media__content-block-subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(6)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(1) .media__content-block-text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(1)",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.2,
	});
	gsap.fromTo(".media__content-block:nth-child(2) .media__content-block-text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(2)",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.2,
	});
	gsap.fromTo(".media__content-block:nth-child(3) .media__content-block-text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(3)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .7,
	});
	gsap.fromTo(".media__content-block:nth-child(4) .media__content-block-text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(4)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .7,
	});
	gsap.fromTo(".media__content-block:nth-child(5) .media__content-block-text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(5)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .7,
	});
	gsap.fromTo(".media__content-block:nth-child(6) .media__content-block-text", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(6)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .7,
	});
	gsap.fromTo(".media__content-block:nth-child(1) .media__content-block-more", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(1)",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.7,
	});
	gsap.fromTo(".media__content-block:nth-child(2) .media__content-block-more", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(2)",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.7,
	});
	gsap.fromTo(".media__content-block:nth-child(3) .media__content-block-more", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(3)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".media__content-block:nth-child(4) .media__content-block-more", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(4)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".media__content-block:nth-child(5) .media__content-block-more", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(5)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".media__content-block:nth-child(6) .media__content-block-more", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(6)",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".media__content-block:nth-child(1) img", {
		x: -500,
		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(1)",
		x: 0,
		opacity: 1,
		duration: 1,
		delay: 1.7,
	});
	gsap.fromTo(".media__content-block:nth-child(2) img", {
		x: 500,
		opacity: 0,

	}, {
		scrollTrigger: ".media__content-block:nth-child(2)",
		x: 0,
		opacity: 1,
		duration: 1,
		delay: 1.7,
	});
	gsap.fromTo(".media__content-block:nth-child(3) img", {
		x: -500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(3)",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(4) img", {
		x: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(4)",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(5) img", {
		x: -500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(5)",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: .2,
	});
	gsap.fromTo(".media__content-block:nth-child(6) img", {
		x: 500,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".media__content-block:nth-child(6)",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: 1,
		delay: .2,
	});

}
if (modelBlocker) {
	gsap.fromTo(".model__way-block", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".model__way-block",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".model__content", {

		opacity: 0,

	}, {
		scrollTrigger: ".model__content",

		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".model__images img", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".model__images img",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
		stagger: .2,
	});
	gsap.fromTo(".model__info-name", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".model__info-name",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});
	gsap.fromTo(".model__info-property", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".model__info-property",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
		stagger: .1,
	});
	gsap.fromTo(".model__title-about", {
		y: -10,
		width: 125,
		opacity: 0,

	}, {
		scrollTrigger: ".model__title-about",
		y: 0,
		width: 235,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".model__about-p", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".model__about-p",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.2,
	});
	gsap.fromTo(".model__info-price", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".model__info-price",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.7,
	});
	gsap.fromTo(".model__info-btn", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".model__info-btn",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 3.2,
	});


	gsap.fromTo(".model__more-models-title", {
		x: -30,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".model__more-models",
			start: "top 85%"
		},
		x: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".model__swiper-button-next", {
		x: 30,


	}, {
		scrollTrigger: {
			trigger: ".model__more-models",
			start: "top 85%"
		},
		x: 0,

		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".model__swiper-button-prev", {
		x: 30,


	}, {
		scrollTrigger: {
			trigger: ".model__more-models",
			start: "top 85%"
		},
		x: 0,

		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".model__swiper-slide", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".model__more-models",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.2,
		stagger: .1,
	});
}
if (serviceBlocker) {
	gsap.fromTo(".service__decoration-img img", {

		transform: "scale(1.2)",

	}, {
		scrollTrigger: {
			trigger: ".service__decoration-img img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},

		transform: "scale(1)",


	});
	gsap.fromTo(".service__decoration-img", {
		y: -25,
	}, {
		scrollTrigger: {
			trigger: ".service__decoration-img",
			start: "top bottom",
			end: "bottom top",
			scrub: 3,
		},
		y: 25,
	});














	gsap.fromTo(".service__way-block", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".service__way-block",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 0.7,
	});


	gsap.fromTo(".service__title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".service__title",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.2,
	});
	gsap.fromTo(".service__text-01", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".service__text-01",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 1.7,
	});
	gsap.fromTo(".service__price", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".service__price",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.2,
	});
	gsap.fromTo(".service__btn", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".service__btn",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 2.7,
	});
	gsap.fromTo(".service__page-wrapper-img", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: ".service__page-wrapper-img",
		y: 0,
		opacity: 1,
		duration: .5,
		delay: 3.2,
	});
	gsap.fromTo(".service__text-02", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__text-02",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".service__mc-subtitle", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__mc-subtitle",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".service__text-03", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__text-03",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".service__text-bottom-list", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__text-bottom-list",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".service__list-title", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__list-title",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".service__list-item", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__list-item",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
		stagger: .1,
	});
	gsap.fromTo(".service__mc-subtitle-01", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__mc-subtitle-01",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".service__mc-subtitle-02", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__mc-subtitle-02",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".service__mc-subtitle-03", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__mc-subtitle-03",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});
	gsap.fromTo(".service__text-04", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__text-04",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
	});

	gsap.fromTo(".service__other-services-item", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__other-services-list",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,
		stagger: .1,
	});
	gsap.fromTo(".service__other-services-list", {
		y: -10,
		opacity: 0,

	}, {
		scrollTrigger: {
			trigger: ".service__other-services-list",
			start: "top 85%"
		},
		y: 0,
		opacity: 1,
		duration: .5,
		delay: .2,

	});
}


