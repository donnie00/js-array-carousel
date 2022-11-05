const imgs = [
	'../img/01.webp',
	'../img/02.webp',
	'../img/03.webp',
	'../img/04.webp',
	'../img/05.webp',
];

const imgContainerEl = document.getElementById('imgContainer');
const upBtnEl = document.getElementById('upBtn');
const downBtnEl = document.getElementById('downBtn');

const sliderEl = document.getElementById('slider');

let activeImgIndex = 0;

for (let i = 0; i < imgs.length; i++) {
	const imgToAdd = document.createElement('img');

	imgToAdd.src = imgs[i];

	const sliderImgToAdd = imgToAdd.cloneNode();

	imgContainerEl.append(imgToAdd);
	sliderEl.append(sliderImgToAdd);

	imgContainerEl.firstChild.classList.add('active');
	sliderEl.firstChild.classList.add('active');
}

const imgList = imgContainerEl.childNodes;
const sliderList = sliderEl.childNodes;

upBtnEl.addEventListener('click', function () {
	if (activeImgIndex <= 0) {
		imgList[activeImgIndex].classList.remove('active');
		sliderList[activeImgIndex].classList.remove('active');

		activeImgIndex = imgList.length - 1;

		imgList[activeImgIndex].classList.add('active');
		sliderList[activeImgIndex].classList.add('active');
	} else {
		imgList[activeImgIndex].classList.remove('active');
		sliderList[activeImgIndex].classList.remove('active');

		activeImgIndex--;

		imgList[activeImgIndex].classList.add('active');
		sliderList[activeImgIndex].classList.add('active');
	}
});

downBtnEl.addEventListener('click', function () {
	if (activeImgIndex >= imgs.length - 1) {
		imgList[activeImgIndex].classList.remove('active');
		sliderList[activeImgIndex].classList.remove('active');

		activeImgIndex = 0;

		imgList[activeImgIndex].classList.add('active');
		sliderList[activeImgIndex].classList.add('active');
	} else {
		imgList[activeImgIndex].classList.remove('active');
		sliderList[activeImgIndex].classList.remove('active');

		activeImgIndex++;

		imgList[activeImgIndex].classList.add('active');
		sliderList[activeImgIndex].classList.add('active');
	}
});

for (let i = 0; i < sliderList.length; i++) {
	sliderList[i].addEventListener('click', function () {
		imgList[activeImgIndex].classList.remove('active');
		sliderList[activeImgIndex].classList.remove('active');

		activeImgIndex = i;

		imgList[activeImgIndex].classList.add('active');
		sliderList[activeImgIndex].classList.add('active');
	});
}
