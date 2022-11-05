const imgs = [
	'img/01.webp',
	'img/02.webp',
	'img/03.webp',
	'img/04.webp',
	'img/05.webp',
];

const imgContainerEl = document.getElementById('imgContainer');
const upBtnEl = document.getElementById('upBtn');
const downBtnEl = document.getElementById('downBtn');

let activeImgIndex = 0;

for (let i = 0; i < imgs.length; i++) {
	const imgToAdd = document.createElement('img');

	imgToAdd.src = imgs[i];

	imgContainerEl.append(imgToAdd);

	imgContainerEl.firstChild.classList.add('active');
}

const imgList = imgContainerEl.childNodes;

upBtnEl.addEventListener('click', function () {
	if (activeImgIndex <= 0) {
		activeImgIndex = 0;
	} else {
		imgList[activeImgIndex].classList.remove('active');

		activeImgIndex--;

		imgList[activeImgIndex].classList.add('active');
	}
});

downBtnEl.addEventListener('click', function () {
	if (activeImgIndex >= imgs.length - 1) {
		activeImgIndex = imgs.length - 1;
	} else {
		imgList[activeImgIndex].classList.remove('active');

		activeImgIndex++;

		imgList[activeImgIndex].classList.add('active');
	}
});
