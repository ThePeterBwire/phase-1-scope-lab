// Write your solution in this file!
// Task 1: Declare customerName in global scope using var
var customerName = 'bob';

// Task 2: Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Task 3: Function to create a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicit global variable creation
}

// Task 4: Function to overwrite the global bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Task 5: Declare a constant and attempt to change it
const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error
}