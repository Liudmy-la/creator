const ground = document.querySelector("#ground");
ground.addEventListener("mousedown", pullBlock);

const water = document.querySelector("#water");
water.addEventListener("mousedown", pullBlock);

const fire = document.querySelector("#fire");
fire.addEventListener("mousedown", pullBlock);

const air = document.querySelector("#air");
air.addEventListener("mousedown", pullBlock);

const elementsContainer = document.querySelector('.elements');

//---------------------------------

// function pullBlock(event) {
//     const newElement = createNew(event);

//     document.addEventListener(
// 		"mousemove", 
// 		(moveEvent) => moveBlock(moveEvent, newElement)
// 	);

//     newElement.addEventListener(
// 		"mouseup", 
// 		() => quitBlock(newElement)
// 	);
// }

// //---------------------------------

// function createNew(event) {
//     const newElement = document.createElement('div');
//     newElement.classList.add('created');
//     newElement.textContent = `New ${event.target.innerText}`;

//     newElement.style.position = 'absolute';
//     newElement.style.left = event.target.getBoundingClientRect().left + 'px';
//     newElement.style.top = event.target.getBoundingClientRect().top + 'px';

//     elementsContainer.appendChild(newElement);
//     return newElement;
// }

// //---------------------------------

// function moveBlock (event, element) {
//     const shiftX = event.clientX - element.getBoundingClientRect().left;
//     const shiftY = event.clientY - element.getBoundingClientRect().top;
//     element.style.left = event.clientX - shiftX + 'px';
//     element.style.top = event.clientY - shiftY + 'px';
// }

// //---------------------------------

// function quitBlock (element) {
//     if (parseFloat(element.style.top) - element.getBoundingClientRect().top < 70) {
//         element.style.top = element.getBoundingClientRect().top + 70 + 'px';
//     }

//     document.removeEventListener(
// 		"mousemove", 
// 		(moveEvent) => moveBlock(moveEvent, element)
// 	);
// }


function pullBlock(event) {
	const newElement = document.createElement('div');
		newElement.classList.add('created');
		newElement.textContent = `New ${event.target.innerText}`;
		newElement.style.position = 'absolute';

		newElement.style.left = event.target.getBoundingClientRect().left + `px`
		newElement.style.top = event.target.getBoundingClientRect().top + `px`
 	elementsContainer.appendChild(newElement);

		let shiftX = event.clientX - newElement.getBoundingClientRect().left;
		let shiftY = event.clientY - newElement.getBoundingClientRect().top;
	
 	document.addEventListener("mousemove", moveBlock);
	function moveBlock (event) {
		newElement.style.left = event.clientX - shiftX + `px`
		newElement.style.top = event.clientY - shiftY + `px`
	}

	newElement.addEventListener("mouseup", quitBlock);
	function quitBlock () {
		if (parseFloat(newElement.style.top) - event.target.getBoundingClientRect().top < 70) {
				newElement.style.top = event.target.getBoundingClientRect().top + 70 + `px`
		}

		document.removeEventListener("mousemove", moveBlock);
	}
}
