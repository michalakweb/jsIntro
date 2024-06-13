// Select the clickable element
const clickableElement = document.querySelector("#clickableElement")

// Select the target element whose color will change
const targetElement = document.querySelector("#targetElement")

clickableElement.addEventListener("click", () => {
	targetElement.style.display = "block"

	alert("You won a million $")
})
