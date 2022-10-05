//Codecademy rock, paper, scissors game!
const getUserChoice = (userInput) => {
  //.toLowerCase returns the value of the string converted to lower case
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

const getComputerChoice = () => {
  /*since there are 3 options Math.random() * 3 will create a random number between 0 and 2 
    and Math.floor() will round down to the nearest whole number*/
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
