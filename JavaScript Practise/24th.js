/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const lowerstr1 = str1.toLowerCase().split("").sort().join("");
    // const lowerstr1 = str1.toLowerCase(); //PaL => pal
    // const arr1 = lowerstr1.split(""); //empty array => pal = ["p","a","l"];
    // arr1.sort(); //["a","l","p"];
    // const sortedstr1 = arr1.join("");

    const lowerstr2 = str2.toLowerCase().split("").sort().join("");
    // const lowerstr2 = str2.toLowerCase()
    // const arr2 = lowerstr2.split(""); //empty array
    // arr2.sort();
    // const sortedstr2 = arr2.join("");

    // if(sortedstr1 == sortedstr2){
    if(lowerstr1 == lowerstr2){
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram("Palla" , "allap"));
module.exports = isAnagram;