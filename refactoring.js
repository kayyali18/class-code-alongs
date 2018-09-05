/* ----------- Do not refactor this section ----------- */
class Image {}

function drawImage(img) {
	console.log(img, x, y, width, height);
}

const x = 5;
const y = 10;
const width = 20;
const height = 40;

// switch explode between 'yes' & 'no' to check your results.
const explode = 'yes';

/* ------------- Refactor this section ------------- */

let playerImage = new Image();
explode === 'no'
	? (playerImage.src = 'assets/airplane.png')
	: (playerImage.src = 'assets/kapow.png');
drawImage(playerImage);

/* ----------- Do not refactor this section ----------- */
class Slot {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

/* -------------- Refactor this section -------------- */
let slots = [];

const rows = [
	{
		x: 40,
		y: 150
	},
	{
		x: 40,
		y: 230
	},
	{
		x: 40,
		y: 310
	},
	{
		x: 40,
		y: 390
	},
	{
		x: 40,
		y: 470
	},
	{
		x: 40,
		y: 550
	}
];

console.log(rows[0]);

let index = 5;
let splitter = 0;
while (splitter < 42) {
	slots.push(new Slot(rows[index].x, rows[index].y));
	rows[index].x += 95;
	splitter++;
	if (splitter % 7 == 0) index--;
}

console.log(slots);
