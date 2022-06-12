const colors = ["1", "2", "3", "4", "5", "6", "7", "8"]

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
	const randomNumber = getRandomNumber();
	color.textContent = colors[randomNumber];
});

function getRandomNumber(){
	return Math.floor(Math.random()*colors.length);
}