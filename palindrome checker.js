PALINDROME CHECKER: 
SOLUTION:


function palindrome(str) {
  let newStr = str.replace(/\W|_/g, "");
  let newStr1 = newStr.toUpperCase();
  let arr = newStr1.split("");
  let arr1 = [...arr];
  let reverseArr = arr1.reverse();
  for (let i = 0; i < arr.length; i++){
    if (arr[i] != reverseArr[i]){
      return false;
    }
  } return true;
}
