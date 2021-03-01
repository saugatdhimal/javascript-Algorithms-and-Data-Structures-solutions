Roman Numeral Converter

SOLUTION:

function convertToRoman(num) {
 let romanSymbols = ["M", 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 let inRomans = "";
 let numb = num;


 for (let i = 0; i < numbers.length; i++){
     for (let j = 0;numbers[i] <= numb; j++){
         inRomans += romanSymbols[i];
         numb -= numbers[i];
     }
 }; return inRomans;
};
