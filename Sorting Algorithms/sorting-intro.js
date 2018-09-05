var unsorted = [5, 7, 11, 65, 62, 3, 88, 47, 4, 8, 55, 101, 6, 2, 9, 7, 21, 15, 67, 92];

function bubbleSort (array) {
	var middle = array.length / 2;
	Math.floor(middle);
	for (let x = 0; x < array.length; x++) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				let small = array [i + 1];
				let big = array [i];
				array [i] = small;
				array [i + 1] = big;
			}
		}
	}
	return array;
    
}

console.log ('Unsorted:\n', unsorted);
console.log ('\nBubble Sort:\n', bubbleSort(unsorted));


function quickSort (array) {
	if (array.length <= 1) {
		return array;
	}
	let pivot = array.pop();
	let smallSort = [];
	let largeSort = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i] < pivot) smallSort.push (array[i]);
		else largeSort.push (array[i]);
	}


	return [...quickSort(smallSort), pivot, ...quickSort(largeSort)];
} 

console.log('\nQuick Sort:\n', quickSort(unsorted));


// created unsorted array
// created sorted array

// for every element in unsorted array
//      check element in unsorted with last index in sorted

var unsorted = [5, 7, 11, 65, 62, 3, 88, 47, 4, 8, 55, 101, 6, 2, 9, 7, 21, 15, 67, 92];
function insertionSort (array) {
    let sorted = [];

    while (array.length > 0) {
        sorted.push (array.shift());
        for (let i = sorted.length -1; i > 0; i--) {
            if (sorted[i] < sorted [i - 1]) {
                let smaller = sorted[i];
                sorted[i] = sorted[i - 1];
                sorted[i - 1] = smaller;
            } else break;
        }
    }
    return sorted;
}


console.log ('\nInsertion Sort:\n', insertionSort(unsorted));