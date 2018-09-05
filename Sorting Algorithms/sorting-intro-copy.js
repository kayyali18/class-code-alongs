var unsorted = [5, 7, 11, 65, 62, 3, 88, 47, 4, 8, 55, 101, 6, 2, 9, 7, 21, 15, 67, 92];


function bubbleSort (array) {
    for (let x = 0; x < array.length; x++) {
        for (let i = 0; i <array.length; i++){
            if (array [i] > array [i + 1]) {
                let small = array [i + 1];
                let large = array [i];
                array [i] = small;
                array [i +1] = large;
            }
        }
    }

    return array;
}