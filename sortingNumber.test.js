const sortingNumber = require("./sortingNumber");

function testSortingNumber() {
  let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  let ascending = true;
  let descending = false;

  // Test kondisi ascending
  let resultAscending = sortingNumber(array, ascending);
  let expectedAscending = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
  if (resultAscending.toString() === expectedAscending.toString()) {
    console.log(
      `Test Passed. Expected: ${expectedAscending}. actual output: ${resultAscending}`
    );
    console.log("Test Ascending PASSED");
  } else {
    console.log(
      `Test Failed. Expected: ${expectedAscending}. but actual output: ${resultAscending}`
    );
    console.log("Test Ascending FAILED");
  }

  // Test kondisi descending
  let resultDescending = sortingNumber(array, descending);
  let expectedDescending = [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1];
  if (resultDescending.toString() === expectedDescending.toString()) {
    console.log(
      `Test Passed. Expected: ${expectedDescending}. actual output: ${resultDescending}`
    );
    console.log("Test descending PASSED");
  } else {
    console.log(
      `Test Failed. Expected: ${expectedDescending}. but actual output: ${resultDescending}`
    );
    console.log("Test descending FAILED");
  }
}

// Jalankan test
testSortingNumber();
