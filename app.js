function myFunction() {
    let name = prompt("Please enter your name:", "");
   
    let gender = prompt("Please enter your gender:", "");
    switch(gender){
      case "Male":
       gender="Male";
       break;
     case "Female":    
       gender="Female";
       break;  
     deafult:
       gender="null";
    
   } 
   
     
   let age = prompt("Please enter your age:", "");
   if(age<=0){
       alert("Your Age Should Be More Than One And Not Equal To Zero ");
      }
   let con=confirm("do you want to skip the welcoming message?");
      if(con===false){    
   if(gender==="Male") 
   {
     alert(`Welcome Mr ${name}`);
   }
   else if(gender==="Female")
   {
     alert(`Welcome Ms ${name}`);
   
   }
   else
   {
     alert(`Welcome ${name}`);
   
   } 
   }
   
   }  
   