function scrollLeftFunc() {
	const container = document.getElementById('scrollContainer');
	container.scrollBy({
		top: 0,
		left: -350, // Adjust the scroll distance to control speed
		behavior: 'smooth' // Enable smooth scrolling
	});
}

function scrollRightFunc() {
	const container = document.getElementById('scrollContainer');
	container.scrollBy({
		top: 0,
		left: +350, // Adjust the scroll distance to control speed
		behavior: 'smooth' // Enable smooth scrolling
	});
}

// sidebar start
function showSidebar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex';
}
function hideSidebar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none';
}


// sidebar end
// back to top start
const back = document.getElementById('back-btn');
back.addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});

})
// back to top end
// dark mode start
const ball = document.querySelector(".toggle-ball");
const sbBall = document.querySelector(".sb-toggle-ball")
const items = document.querySelectorAll("body,.toggle , .toggle-ball,.sb-toggle-ball,.search-box")
ball.addEventListener("click", function () {
	items.forEach((item) => item.classList.toggle("dark-mode"))
})
sbBall.addEventListener("click", function () {
	items.forEach((item) => item.classList.toggle("dark-mode"))
})
// dark mode end