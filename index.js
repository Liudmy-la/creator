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

function stopListen (evType, fnc) {	
	document.removeEventListener(evType, fnc);
}
//---------------------------------

function quitBlock (newElement, evType, fnc) {
	if (parseFloat(newElement.style.top) - newElement.getBoundingClientRect().top < 70) {
		newElement.style.top = newElement.getBoundingClientRect().top + 70 + 'px';
	}

	stopListen(evType, fnc);
}
//---------------------------------

function pullBlock(event) {
	const newElement = createNew(event);

	const shiftX = event.clientX - newElement.getBoundingClientRect().left;
	const shiftY = event.clientY - newElement.getBoundingClientRect().top;

	function moveNewElement (moveEvent) {
		moveBlock(moveEvent, newElement, shiftX, shiftY);
	}
	
    document.addEventListener(
		"mousemove", 
		moveNewElement
	);

	function handleMouseUp () {
		quitBlock(newElement, "mousemove", moveNewElement)
	}

    newElement.addEventListener(
		"mouseup", 
		handleMouseUp
	);
}

//---------------------------------

function grabElement (event) {
	console.log(event)

	const grabbedElement = document.elementFromPoint(event.clientX, event.clientY)
	console.log(grabbedElement)

	const shiftX = event.clientX - grabbedElement.getBoundingClientRect().left;
	const shiftY = event.clientY - grabbedElement.getBoundingClientRect().top;

	function moveElement (moveEvent) {
		moveBlock(moveEvent, grabbedElement, shiftX, shiftY);
	}
	
    document.addEventListener(
		"mousemove", 
		moveElement
	);

	grabbedElement.addEventListener(
		"mouseup", 
		() => document.removeEventListener("mousemove", moveElement)
	);
}

document.addEventListener(
	"mousedown", 
	grabElement
);