const hamburger = document.querySelector(".menu-button");

hamburger.addEventListener("click", () => {
	let c = hamburger.classList.toggle("open");
	const menuList = document.querySelector(".menu-list");

	if (c) {
		console.log("open");
		hamburger.classList.remove("close");
		menuList.style.height = "100vh";
	} else {
		console.log("closed");
		hamburger.classList.add("close");
		menuList.style.height = "0vh";
	}
});
