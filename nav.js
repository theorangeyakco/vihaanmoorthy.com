// const hamburger = document.getElementById("hamburger");
// const nav = document.getElementById("section");

// let isNavOpen = false;

// const openNav = () => {
// 	console.log("jews");
// 	console.log(nav.style);
// 	if (!isNavOpen) {
// 		nav.style.display = "none";
// 		isNavOpen = true;
// 	} else {
// 		nav.style.display = "block";
// 		isNavOpen = false;
// 	}
// };

$(document).ready(function () {
	$("#navbar-toggle").click(function () {
		$("#section").animate({
			width: "toggle",
		});
	});
});

document.querySelector("#nav-toggle").addEventListener("click", function () {
	this.classList.toggle("active");
});

// (hamburger).addEventListener("click", openNav);

$(document).ready(function () {
	$(".profile1").click(function () {
		$(".down1").slideToggle();
		$(".down2").slideUp();
		$(".down3").slideUp();
		$(".down4").slideUp();
		$(".down5").slideUp();
		$(".down6").slideUp();
	});

	$(".profile2").click(function () {
		$(".down2").slideToggle();
		$(".down1").slideUp();
		$(".down3").slideUp();
		$(".down4").slideUp();
		$(".down5").slideUp();
		$(".down6").slideUp();
	});

	$(".profile3").click(function () {
		$(".down3").slideToggle();
		$(".down1").slideUp();
		$(".down2").slideUp();
		$(".down4").slideUp();
		$(".down5").slideUp();
		$(".down6").slideUp();
	});

	$(".profile4").click(function () {
		$(".down4").slideToggle();
		$(".down1").slideUp();
		$(".down3").slideUp();
		$(".down2").slideUp();
		$(".down5").slideUp();
		$(".down6").slideUp();
	});

	$(".profile5").click(function () {
		$(".down5").slideToggle();
		$(".down1").slideUp();
		$(".down3").slideUp();
		$(".down4").slideUp();
		$(".down2").slideUp();
		$(".down6").slideUp();
	});

	$(".profile6").click(function () {
		$(".down6").slideToggle();
		$(".down1").slideUp();
		$(".down3").slideUp();
		$(".down4").slideUp();
		$(".down5").slideUp();
		$(".down2").slideUp();
	});
});
