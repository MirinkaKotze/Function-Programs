// LESSON 27 - FUNCTIONS
// WRAPPER CONTAINER-FUNCTION
function wrapperInput() {
  userInput = parseInt(
    prompt(
      "Choose the number that is corresponding to the code you want to run: \n1.Return Numbers \n2.Factorial Numbers \n3.Separate Digits \n4.Area \n5.The perfect Number \n6.Perfect Number in the range \n7.Time in a format hh:mm:ss \n8.Total Seconds \n9.Seconds to hh:mm:ss \n10.Difference in dates"
    )
  );
  if (userInput === 1) {
    retunNumbers(2, 4);
  } else if (userInput === 2) {
    factorialNumber(4);
  } else if (userInput === 3) {
    separateDigits(1, 4, 9);
  } else if (userInput === 4) {
    area(4, 2);
  } else if (userInput === 5) {
    perfectNumber();
  } else if (userInput === 6) {
    minMax(1, 6);
  } else if (userInput === 7) {
    time(1, 30, 60);
  } else if (userInput === 8) {
    secondsTotal(1, 25, 45);
  } else if (userInput === 9) {
    secondsTranslate(6606);
  } else if (userInput === 10) {
    dateDifference();
  }
}
wrapperInput();

//INDIVIUAL FUNCTIONS
// 1. Write a function that accepts 2 numbers and returns
//  -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
function retunNumbers(x, y) {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else if (x == y) {
    return 0;
  }
}
// retunNumbers(2, 4)

// 2. Write a function that counts the factorial of a given number.
//          Factorial is defined as the product of that number with every whole number till 1.
//          For example, the factorial of 4 is 4×3×2×1, which is equal to 24
function factorialNumber(givenNumber) {
  let i = givenNumber - 1;
  let j = givenNumber;
  for (; i != 1; i--) {
    factorial = j * i;
    j = factorial;
  }
  console.log("The factorial of the given number " + givenNumber + " is: " + j);
}
// factorialNumber(4)

// 3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
function separateDigits(number1, number2, number3) {
  let x = number1.toString();
  let y = number2.toString();
  let i = number3.toString();
  console.log(x + y + i + " - Is the combined number");
}
// separateDigits(1, 4, 9)

// 4. Write a function that accepts the width and length of a rectangle and calculates its area.
//  If there is only one parameter given, it counts as a square.
//          Area = width x length
function area(width, length) {
  if (width > 0 && length > 0) {
    rectangleArea = width * length;
    console.log("The area of the rectangle is: " + rectangleArea);
  }
  if (length === undefined) {
    squareArea = length * length;
    console.log("The area of the square is: " + squareArea);
  }
}
// area(4, 2)

// 5. Write a function that checks if the given number is perfect.
//  A perfect number is a number equal to the sum of all its divisors.
//  For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
function perfectNumber(givenNumber) {
  let x = 1;
  let i = 0;
  while (x < givenNumber) {
    if (givenNumber % x === 0) {
      i += x;
      x++;
    }
    if (givenNumber % x !== 0) {
      x++;
    }
  }
  if (i === givenNumber) {
    console.log("The number: " + givenNumber + " is a perfect number!!");
  }
  // else {
  //     console.log('Oh NO! The number: ' + givenNumber + ' is  not a perfect number!!');
  // }
}
// perfectNumber()

// 6. Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range.
// Use the previous function to check, if numbers are perfect.
function minMax(min, max) {
  // Create rangeArray with given min and max values
  let rangeArray = [];
  for (i = min; i <= max; i++) {
    rangeArray.push(i);
  }
  // Push rangeArray through function[5] - divisors()
  rangeArray.forEach(perfectNumber);
}
// minMax(1, 6)

// 7. Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss.
// If the seconds are not given, they should be displayed as 00.
function time(hours, minutes, seconds) {
  if (hours > 0 && minutes > 0 && seconds > 0) {
    console.log("The time is: " + hours + ":" + minutes + ":" + seconds);
  }
  if (seconds == undefined) {
    let seconds = "00";
    console.log("The time is: " + hours + ":" + minutes + ":" + seconds);
  }
}
// time(1, 30, 60)

// 8. Write a function that accepts hours, minutes, and seconds and returns that time only in seconds.
//  For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
//          1 day = 86 400 seconds
//          1 hour = 3600 seconds
//          1 minute = 60 seconds
function secondsTotal(hours, minutes, seconds) {
  let hourSeconds = hours * 3600;
  let minuteSeconds = minutes * 60;
  totalSeconds = hourSeconds + minuteSeconds + seconds;
  console.log("The total seconds is: " + totalSeconds);
}
// secondsTotal(1, 25, 45)

// 9. Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
function secondsTranslate(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minuteSecondsLeft = seconds % 3600;
  let minutes = Math.floor(minuteSecondsLeft / 60);
  let secondsLeft = minuteSecondsLeft % 60;
  if (secondsLeft < 10) {
    console.log(
      seconds +
        " seconds translates to (hh:mm:ss): " +
        hours +
        ":" +
        minutes +
        ":" +
        "0" +
        secondsLeft
    );
  } else {
    console.log(
      seconds +
        " seconds translates to (hh:mm:ss): " +
        hours +
        ":" +
        minutes +
        ":" +
        secondsLeft
    );
  }
}
// secondsTranslate(6606)

// 10. Write a function that counts the difference between the dates.
// The function accepts 6 parameters that describe 2 dates; and returns them as hh:mm:ss.
// While solving this problem use the functions from the two previous ones:
// at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.
//  {{ASSUMING THE SECOND DAY IS THE FOLLOWING DAY OF DAY 1}}

// Function from #8.
function secondsTotal(hours, minutes, seconds) {
  let hourSeconds = hours * 3600;
  let minuteSeconds = minutes * 60;
  let totalSeconds = hourSeconds + minuteSeconds + seconds;
  secondsArray.push(totalSeconds);
}

// Function from #9.
function secondsTranslate(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minuteSecondsLeft = seconds % 3600;
  let minutes = Math.floor(minuteSecondsLeft / 60);
  let secondsLeft = minuteSecondsLeft % 60;
  if (secondsLeft < 10) {
    console.log(
      "The time difference is (hh:mm:ss): " +
        hours +
        ":" +
        minutes +
        ":" +
        "0" +
        secondsLeft
    );
  } else {
    console.log(
      "The time difference is (hh:mm:ss): " +
        hours +
        ":" +
        minutes +
        ":" +
        secondsLeft
    );
  }
}

// #10
let secondsArray = [];
function dateDifference(year, month, day, hour, minutes, seconds) {
  let userDateArray = [];
  let dayTime = [];
  for (i = 0; i <= 1; i++) {
    let userDate = prompt(
      "Please enter a date and time in format: yyyy, mm, dd, hh, mm, ss"
    );
    let userDateSplit = userDate.split(",");
    userDateArray = userDateSplit.map(Number);
    if (i == 0) {
      let hour = 23 - userDateArray[3];
      let minutes = 60 - userDateArray[4];
      let seconds = 60 - userDateArray[5];
      dayTime.push(hour, minutes, seconds);
    }
    if (i == 1) {
      let hour = userDateArray[3];
      let minutes = userDateArray[4];
      let seconds = userDateArray[5];
      dayTime.push(hour, minutes, seconds);
    }
  }
  let dayTime1 = dayTime.slice(0, 3);
  let dayTime2 = dayTime.slice(3, 6);
  secondsTotal.apply(this, dayTime1);
  secondsTotal.apply(this, dayTime2);
  let day1seconds = secondsArray.slice(0, 1);
  let day2seconds = secondsArray.slice(1, 2);
  let secondsDifference = day2seconds[0] + day1seconds[0];
  secondsTranslate(secondsDifference);
}
dateDifference();
