function scuberGreetingForFeet(distance){
  // Write your code here!
  //if the distance is less than 400, it should say 'thts on me'
    if (distance <= 400) {
      return 'This one is on me!';
  //using the else if, if the distance is greater than 2500 it returns 'no can do' 
    } else if (distance > 2500) {
      return 'No can do.';
  //this rep the distance over 2000 feet
    } else {
      return 'I will gladly take your thirty bucks.';
    }
  }
  scuberGreetingForFeet(1800                     )

  


function ternaryCheckCity(city){
  // Write your code here!
 //the ternary operator uses the '?' to know if its NYC using the '===' strict equality 
 //operator ':' this separates the choices to be used
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  
}
console.log(ternaryCheckCity(NYC))


  // Write your code here!
  function switchOnCharmFromTip(tip) {
    //i used the switch statement here
    //the tip parameter is passed as the value being evaluated
    switch (tip) {
      //each case statements checks if the expression matches 
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
    //the default value executes if no tip was good   
      default:
        return 'Bye.';
    }
  }
  
    
  
