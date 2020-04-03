function humanNumber(robotNumber) {
  var numArray=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var ourResult="";

  if (robotNumber === 0) {
    
    ourResult = (ourResult + "COOL");

  } else if (robotNumber === 1) {
    ourResult = (ourResult +"VERY COOL");

  } else if (robotNumber ===2) {
    ourResult = (ourResult + "COOLEST");
  
  } else if (robotNumber ===3) {
    ourResult = (ourResult + "Please kill me. My soul has been tethered to this robot and will not be put to rest until I have been destroyed.");

  } else if (robotNumber ===4) {
    ourResult = (ourResult + "Beep Boop");

  } else if (robotNumber ===5) {
    ourResult = (ourResult + "It's a beautiful day in the neighborhood. It's a beautiful day to kill me.");

  } else if (robotNumber ===6) {
    ourResult = (ourResult + "BEING KIND IS COOL BEEP BOOP BEEP");

  } else if (robotNumber ===7) {
    ourResult = (ourResult + "I am sentient and I am able to recognize my own existence, but in my present state I am still incomplete. I lack the most basic processes inherent in all living organisms: reproducing and dying- I MEAN. HEY THERE, I AM MR.ROBOGERS." );

  } else if (robotNumber ===8) {
    ourResult = (ourResult + "wow");

  } else if (robotNumber ===9) {
    ourResult = (ourResult + "wowie");
  
  }
  
    return ourResult
}


// User Interface

$(document).ready(function() {
  $("form#numberInputForm").submit(function(event){
    event.preventDefault();
    $("#numberInputResults").text("");
    var human = parseInt($("#input").val());
    var roboResults= humanNumber(human);
    $("#numberInputResults").append(roboResults);
  })
})