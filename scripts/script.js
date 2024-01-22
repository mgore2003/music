/*
	Student Name: Mark Gore
	File Name: script.js
	Date: 01/16/2024
*/

// Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}