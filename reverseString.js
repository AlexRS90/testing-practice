function reverseString(newStr) {
  if (newStr.length>0) {
      return newStr.split("").reverse().join("");
   } else {
       throw new Error('No empty value allowed');
   }
}

module.exports = reverseString;
