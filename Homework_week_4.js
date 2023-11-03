// Function untuk menentukan nilai minimal dan maksimal pada array
function generateRandom() {
  return Math.floor(Math.random() * 50) + 1;
}

// Function untuk menemukan nilai minimal pada array
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Function untuk menemukan nilai maksimal pada array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function untuk menentukan jumlah total pada array
function findTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Function untuk menentukan rata-rata nilai pada array
function findAverage(arr) {
  return findTotal(arr) / arr.length;
}

// Memanggil function generateRandom untuk menghasilkan array 100 angka random dengan range nilai 1-50
let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push(generateRandom(1, 50));
}

// Memisahkan angka ganjil dan genap ke 2 array berbeda
let evenArray = [];
let oddArray = [];

for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] % 2 === 0 && evenArray.length < 50) {
    evenArray.push(randomArray[i]);
  } else if (randomArray[i] % 2 !== 0 && oddArray.length < 50) {
    oddArray.push(randomArray[i]);
  }
}

while (evenArray.length < 50) {
  let randomEven = generateRandom() * 2;
  if (randomEven <= 50) {
    evenArray.push(randomEven);
  }
}

while (oddArray.length < 50) {
  let randomOdd = generateRandom() * 2 + 1;
  if (randomOdd <= 50) {
    oddArray.push(randomOdd);
  }
}

// Mengkalkulasi min, max, total, dan rata-rata pada di array ganjil dan genap
let minEven = findMin(evenArray);
let maxEven = findMax(evenArray);
let totalEven = findTotal(evenArray);
let averageEven = findAverage(evenArray);

let minOdd = findMin(oddArray);
let maxOdd = findMax(oddArray);
let totalOdd = findTotal(oddArray);
let averageOdd = findAverage(oddArray);
let totalIndexEven = evenArray.length
let totalIndexOdd = oddArray.length

// Output
console.log("Array 100 angka dengan nilai random:", randomArray);
console.log("Array genap:", evenArray);
console.log("Array ganjil:", oddArray);

console.log("Min dari array genap:", minEven);
console.log("Max dari array genap:", maxEven);
console.log("Total dari array genap:", totalEven);
console.log("Average dari array genap:", averageEven);

console.log("Min dari array ganjil:", minOdd);
console.log("Max dari array ganjil:", maxOdd);
console.log("Total dari array ganjil:", totalOdd);
console.log("Average dari array ganjil:", averageOdd);

console.log("Total even Index:", totalIndexEven)
console.log("Total odd Index:", totalIndexOdd)
// Perbandingan
if (minEven > minOdd) {
  console.log("Min di array genap lebih besar");
} else if (minOdd > minEven) {
  console.log("Min di array ganjil lebih besar");
} else {
  console.log("Min dari kedua array sama");
}

if (maxEven > maxOdd) {
  console.log("Max di array genap lebih besar");
} else if (maxOdd > maxEven) {
  console.log("Max di array ganjil lebih besar");
} else {
  console.log("Max dari kedua array sama");
}

if (totalEven === totalOdd) {
  console.log("Total kedua array memiliki jumlah total yang sama");
} else {
  console.log("Total kedua array berbeda");
}

if (averageEven > averageOdd) {
  console.log("Rata-rata array genap lebih besar");
} else if (averageOdd > averageEven) {
  console.log("Rata-rata array ganjil lebih besar");
} else {
  console.log("Rata-rata kedua array memiliki nilai yang sama");
}
