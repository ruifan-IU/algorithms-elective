// Quick Sort

function quicksort(arr, lo, hi) {
  if (lo < hi) {
    const p = partition(arr, lo, hi);
    quicksort(arr, lo, p - 1);
    quicksort(arr, p + 1, hi);
  }
}

function partition(arr, lo, hi) {
  //Lomuto partition
  const pivot = hi;

  let left = lo;
  let right = hi - 1;

  while (left <= right) {
    if (arr[left] <= arr[pivot]) left++;
    else if (arr[right] > arr[pivot]) right--;
    else if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  swap(arr, left, pivot);

  return left;
}

const arr = [3, 2, 1, 5, 6, 4];

console.log(partition(arr, 0, arr.length - 1));

console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);

quicksort(arr, 0, arr.length - 1);
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);

// quicksort(arr, 0, arr.length - 1);
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);

// Heap Sort
// Some potentially helpful functions are provided below
const getLeftChildInd = (index) => 2 * index + 1;
const getRightChildInd = (index) => 2 * index + 2;
const getParentInd = (index) => Math.floor((index - 1) / 2);
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function siftUp(arr, endOfHeap) {}

function buildMaxHeap(arr) {}

function siftDown(arr, endOfHeap) {}

function heapsort(arr) {}

// Inversions

function inversions(arr) {}

// Longest Increasing Subsequence

function lis(seq) {}

// Quick Sort Extensions
// (please complete heap sort and disorder first)

function createSort(partition) {
  return function quicksort(arr, lo, hi) {};
}

function lomutoPartion() {}

function hoarePartition() {}

const quicksortLomuto = createSort(lomutoPartion);
const quicksortHoare = createSort(hoarePartition);
