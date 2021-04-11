const imageContainer = document.getElementById('image_container');
const magnifierContainer = document.getElementsByClassName(
	'magnifier_container'
)[0];
const icon1 = document.getElementsByClassName('icon_1')[0];
const icon2 = document.getElementsByClassName('icon_2')[0];
const icon3 = document.getElementsByClassName('icon_3')[0];
const iconOuters = [...document.getElementsByClassName('icon_outer')];

imageContainer.addEventListener('mouseover', () => {
	magnifierContainer.classList.add('appear');
});
imageContainer.addEventListener('mouseout', () => {
	magnifierContainer.classList.remove('appear');
});

icon1.addEventListener('click', () => {
	if (imageContainer.classList.contains('pic_1')) {
		return;
	} else {
		clearActiveIcon();
		iconOuters[0].classList.add('icon_active');
		updateImage('pic_1');
	}
});

icon2.addEventListener('click', () => {
	if (imageContainer.classList.contains('pic_2')) {
		return;
	} else {
		clearActiveIcon();
		iconOuters[1].classList.add('icon_active');
		updateImage('pic_2');
	}
});

icon3.addEventListener('click', () => {
	if (imageContainer.classList.contains('pic_3')) {
		return;
	} else {
		clearActiveIcon();
		iconOuters[2].classList.add('icon_active');
		updateImage('pic_3');
	}
});

const clearActiveIcon = () => {
	iconOuters.forEach((iconOuter) => iconOuter.classList.remove('icon_active'));
};

const updateImage = (newImage) => {
	imageContainer.classList = [];
	imageContainer.classList.add(newImage);
};
