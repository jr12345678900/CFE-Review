/**
 * CFE Review 2: Sequences and Series
 * Fill in the code for each function below.
 */

// 1. Arithmetic Sequence (n-th term)
// Formula: u_n = u_1 + (n-1)d
function arithmeticTerm(u1, d, n) {
  // YOUR CODE HERE
  
}

// 2. Arithmetic Series (Sum of first n terms)
// Formula: S_n = (n/2) * (2*u_1 + (n-1)d)
function arithmeticSum(u1, d, n) {
  // YOUR CODE HERE
  
}

// 3. Geometric Sequence (n-th term)
// Formula: u_n = u_1 * r^(n-1)
function geometricTerm(u1, r, n) {
  // YOUR CODE HERE
  
}

// 4. Geometric Series (Sum of first n terms)
// Formula: S_n = (u_1 * (r^n - 1)) / (r - 1)
function geometricSum(u1, r, n) {
  // YOUR CODE HERE
  
}

// 5. Synthesis: Option B Salary (Geometric)
// Find the salary in year 'n' given a starting salary (u1) and an annual percentage raise (pct)
// Note: You must convert the percentage (e.g., 5) into a ratio (e.g., 1.05) inside the function!
function calculateOptionBSalary(u1, pct, n) {
  // YOUR CODE HERE
  
}


// DO NOT EDIT BELOW THIS LINE (This exports the functions for the grading script)
module.exports = { arithmeticTerm, arithmeticSum, geometricTerm, geometricSum, calculateOptionBSalary };
