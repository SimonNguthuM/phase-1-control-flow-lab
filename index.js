function scuberGreetingForFeet(feet){
  let charges;
  if (feet <= 400){
    charges = 'This one is on me!'
  }
  else if (feet > 400 && feet < 2000){
    charges = 'That will be twenty bucks.'
  }
  else if (feet > 2000 && feet < 2501){
    charges = 'I will gladly take your thirty bucks.'
  }
  else {
    charges = 'No can do.'
  }
  return charges;
}
function ternaryCheckCity(city){
  let result = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return result;
}

function switchOnCharmFromTip(tip){
  let response;

  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response;
}