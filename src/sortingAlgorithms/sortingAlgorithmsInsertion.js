export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSort(array,animations) ;
    return animations;
}

function insertionSort(inputArr,animations) {
    let n = inputArr.length;

        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 

            while ((j > -1) && (current < inputArr[j])) {
                animations.push([j+1,inputArr[j]]);
                //animations.push([j+1,j,inputArr[j+1],inputArr[j]]);
                inputArr[j+1] = inputArr[j];
                j--;
            }
            animations.push([j+1,current]);
            inputArr[j+1] = current;
        }
      //  console.log(animations);
    return animations;
}