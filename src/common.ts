/**
 * Binary search algorithm.
 * @description Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item,
 * until you've narrowed down the possible locations to just one.
 *
 * @param array Array of numbers.
 * @param target Target number to search.
 * @returns Index of the target number in the array. If the target number is not found, return -1.
 */
function BinarySearch(array: number[], target: number): number {
    let left = 0,
        right = array.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (array[mid] == target) return mid;
        if (array[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

/**
 * Lower bound binary search algorithm.
 * @param array Array of numbers.
 * @param target Target number to search.
 * @returns Index of the target number in the array. If the target number is not found, return -1.
 * @description Lower bound is the index of the first element that is not less than the target number.
 * If the target number is not found, return the index of the first element that is greater than the target number.
 * If the target number is greater than all elements in the array, return the length of the array.
 * If the target number is less than all elements in the array, return 0.
 * @example
 */
function LowerBound(array: number[], target: number): number {
    let left = 0,
        right = array.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (array[mid] < target) left = mid + 1;
        else right = mid;
    }

    return left;
}

export { BinarySearch, LowerBound };
