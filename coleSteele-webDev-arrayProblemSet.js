
/*
My code solutions for the Cole Steele  - Web Developer Bootcamp: Array Problem Set 
*/

      // reversePrint() - it prints the array in reverse

var array1 = ["E","M","A","G","D","N","E"];
var array2 = [1,2,"A","B","C",5, 7, 13, 23]; 

var newArr = [];
var counter = 0; 


        function printReverse(){ 

        array1.forEach(function() {
        newArr.unshift(array1[counter]);
        counter++;

        } );
        console.log(newArr);  

        }

        printReverse();
        
       //  :) 


      // uniform() - it checks if the values in the array are all the same or not



      // sumArray() - it checks the values in an array of numbers and returns the sum of those numbers 


      // max() - it returns the highest value in an array of numbers
 
 
