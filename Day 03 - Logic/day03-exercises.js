//make an else if chain like this to say if someone is very short, short, middle, tall or very tall
//based on their height. It's up to you to decide what numbers to use for each height division

let height = 165;

if (height < 165) {
  console.log('Very Short');
} else if (height <= 165) {
  console.log('Short');
} else if (height <= 180) {
  console.log('Tall');
} else {
  console.log('Very Tall');
}


//2 weather inputs, temperature and conditions:
//temperature can be any number and conditions can be any of: raining, sunny and foggy
//based on the conditions and temperature print a console.log() a message for what to wear:
// Conditions | Below 15C    | Above 15 C
// Raining    | Thick Coat   | Thin Coat
// Sunny      | Light Jumper | T-Shirt
// Foggy      | Bright Coat  | Where Are You?

//Once you've got that working, then add an override variable called bothered,
//if bothered === true then run through the above code and console.log() the result
//ff the user is not bothered (=== false) then skip the whole section and console.log() "Best of luck!"

let temperature = 8;
let condition = 'Raining';
let bothered = true;

if (bothered) {
  if (temperature < 15 && condition === 'Raining') {
    console.log('Thick Coat');
  } else if (temperature < 15 && condition === 'Sunny') {
    console.log('Light Jumper');
  } else if (temperature < 15 && condition === 'Foggy') {
    console.log('Bright Coat');
  } else if (temperature >= 15 && condition === 'Raining') {
    console.log('Thin Coat');
  } else if (temperature >= 15 && condition === 'Sunny') {
    console.log('T-Shirt');
  } else if (temperature >= 15 && condition === 'Foggy') {
    console.log('Where Are You?');
  }
} else {
  console.log('Best of Luck!')
}