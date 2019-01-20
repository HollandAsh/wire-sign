// BMI Calculator



var pounds = prompt("What is your weight in pounds?");
var inches = prompt("What is your height in inches?");

console.log("You have entered " + pounds + " pounds and " + inches + " inches");



  function converter() {
    weight = (pounds / 2.2).toFixed(1);
    console.log("Your weight in kilograms is: " + weight);
 

  height = (inches * 0.0254).toFixed(2);
  console.log("Your height in meters is: " + height);
    
    return weight, height;
   
  }   
    
converter(pounds, inches);
    
    function yourBMI() {

      if(weight <= 0 && height <= 0){
        
       console.log("Your weight and height are invalid. Please try again.");
       total === "invalid";
  
     }
     
    else {
      
      total = weight / (height * height);
      totalBMI = total.toFixed(1);
    }
   
  console.log("Your BMI is: " + totalBMI);
 
      return totalBMI; 
} 




yourBMI(weight, height);

function categories(){
  
      if(totalBMI < 18.5){
         
        category = "underweight";
        console.log("You are " + category);
         
         }
  
     else if(totalBMI >= 18.5 && totalBMI <= 24.9){
        category = "normal weight";
        console.log("You are a " + category);
         
         }
  
     else if(totalBMI >= 25 && totalBMI <= 29.9){
        category = "overweight";
        console.log("You are " + category);
         
         }
  
      else if(totalBMI >= 30){
        category = "obese";
        console.log("You are " + category);
        
      }
    
   else {
        category = "cannot be calculated";
        console.log("Your weight " + category);
        
      }
  
}
 
categories(totalBMI);
