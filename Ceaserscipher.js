Caesars Cipher:

SOLUTION;

function rot13(str) {
let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
let arr = str.split("");
let string = "";
for (let i = 0; i < arr.length; i++){
  let index = alphabets.indexOf(arr[i]);
  if (index > -1){
    string += alphabets[index+13]
  } else {
    string += arr[i]
  }
};
 return string;
};
