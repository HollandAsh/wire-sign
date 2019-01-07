/*
My code solutions for the Cole Steele  - Web Developer Bootcamp: Array Problem Set 
*/

var array1 = ["E","M","A","G","D","N","E"];
var array2 = [2,2,2,2,2,4,7,9];

var newArr = [];
var count = 0; 
var holder;
var base = array2[0];

      // reversePrint() - it prints the array in reverse

                    function printReverse(){ 

                    array1.forEach(function() {
                    newArr.unshift(array1[count]);
                    count++;

                    } );
                    console.log(newArr);  

                    }

                    printReverse();

                   //  :) 


      // uniform() - it checks if the values in the array are all the same or not

                  function uniform(){
                  for (count = 1; array2[count] === base; count++) {

                  console.log("The values in the array match. Continuing to check the values...");
                  }
                  console.log("The values in this array don't match.");
                  }
                  uniform();


      // sumArray() - it checks the values in an array of numbers and returns the sum of those numbers 

                  function sumArray(){
                  array2.forEach(function(num){
                  count = count + num;
                  });
                  console.log(count); 
                  }
                  sumArray();


      // max() - it returns the highest value in an array of numbers
 
 
