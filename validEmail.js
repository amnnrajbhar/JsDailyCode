function isValidEmail(email) {
    // write your code below 
    debugger;
    if(email.includes('@') && email.includes('.')){
        return true;
    }
    return false;
}
console.log(isValidEmail('aman@gmail.com'));
// Input: "user@example.com"
// Expected Output: true