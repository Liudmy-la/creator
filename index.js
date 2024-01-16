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

function pullBlock(event) {
	const newElement = createNew(event);

    const shiftX = event.clientX - newElement.getBoundingClientRect().left;
    const shiftY = event.clientY - newElement.getBoundingClientRect().top;

	const moveNewElement = (moveEvent) => moveBlock(moveEvent, newElement, shiftX, shiftY)

    document.addEventListener(
		"mousemove", 
		moveNewElement
	);

    newElement.addEventListener(
		"mouseup", 
		() => {			
			if (parseFloat(newElement.style.top) - newElement.getBoundingClientRect().top < 70) {
				newElement.style.top = newElement.getBoundingClientRect().top + 70 + 'px';
			}

			document.removeEventListener(
				"mousemove", 
				moveNewElement
			);
		}
	);
}
//---------------------------------

function createNew(event) {
    const newElement = document.createElement('div');
		newElement.classList.add('created');
		newElement.textContent = `New ${event.target.innerText}`;

		newElement.style.position = 'absolute';
		newElement.style.left = event.target.getBoundingClientRect().left + 'px';
		newElement.style.top = event.target.getBoundingClientRect().top + 'px';

    elementsContainer.appendChild(newElement);    
    return newElement;
}
//---------------------------------

function moveBlock (event, element, shiftX, shiftY) {
    element.style.left = event.clientX - shiftX + 'px';
    element.style.top = event.clientY - shiftY + 'px';
}
//---------------------------------

// function quitBlock (element) {
//     if (parseFloat(element.style.top) - element.getBoundingClientRect().top < 70) {
// 		element.style.top = element.getBoundingClientRect().top + 70 + 'px';
// 	}
// }


// function pullBlock(event) {
// 	debugger

// 	const newElement = document.createElement('div');
// 		newElement.classList.add('created');
// 		newElement.textContent = `New ${event.target.innerText}`;
// 		newElement.style.position = 'absolute';

// 		newElement.style.left = event.target.getBoundingClientRect().left + `px`
// 		newElement.style.top = event.target.getBoundingClientRect().top + `px`
//  	elementsContainer.appendChild(newElement);

// 		let shiftX = event.clientX - newElement.getBoundingClientRect().left;
// 		let shiftY = event.clientY - newElement.getBoundingClientRect().top;
	
//  	document.addEventListener("mousemove", moveBlock);
// 	function moveBlock (event) {
// 		newElement.style.left = event.clientX - shiftX + `px`
// 		newElement.style.top = event.clientY - shiftY + `px`
// 	}

// 	newElement.addEventListener("mouseup", quitBlock);
// 	function quitBlock () {
// 		if (parseFloat(newElement.style.top) - event.target.getBoundingClientRect().top < 70) {
// 				newElement.style.top = event.target.getBoundingClientRect().top + 70 + `px`
// 		}

// 		document.removeEventListener("mousemove", moveBlock);
// 	}
// }