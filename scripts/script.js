const ttitle = document.querySelector("#testimonials .title"),
tabout = document.querySelector("#testimonials .desc"),
reviews = document.querySelector("#testimonials .reviews");

reviews.style.top = (225 + ttitle.offsetHeight + tabout.offsetHeight) + "px";

let current = 1, scrolled,
offset = reviews.offsetWidth - 1140;

const move = mode => {
	current += 
	(mode == "next" ?
	(current < 4 ? 1 : 0) :
	(current > 1 ? -1 : 0));

	document.querySelector(".dot[active]").removeAttribute("active");
	document.querySelector(".dot[dotid='" + current + "']").setAttribute("active", "");

	document.querySelector(".review[active]").removeAttribute("active");
	document.querySelector(".review[userid='" + current + "']").setAttribute("active", "");

	scrolled = (current - 1) * 450;
	reviews.style.left = -(scrolled < offset ? scrolled : offset) + "px";
}