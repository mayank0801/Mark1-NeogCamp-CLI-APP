const readLineSync = require("readline-sync")
const userName = readLineSync.question("What is your name? ");
console.log(`Hello ${userName.toUpperCase()}!!!
Welcome!!
WHAT DO YOU KNOW ABOUT MAYANK 😊`);

var Score = 0;
const helper = function(question, answer) {
  var userAns = readLineSync.question(question);

  if (userAns.toLowerCase() === answer.toLowerCase()) {
    console.log("Right!!");
    Score++;
  }
  else {
    console.log("Wrong answer!");
  }

}

var questions = [{
  Question: "What is my homeTown? ",
  Answer: "muzaffarpur",
}, {
  Question: "What sports do i play the most? ",
  Answer: "cricket",
}, {
  Question: "Who is my favourite cricketer? ",
  Answer: "sachin",
}, {
  Question: "What is my favourite color? ",
  Answer: "red",
}, {
  Question: "What is my favourite food? (rajma-chawal/chole-bhature/chicken-biryani)",
  Answer: "biryani",
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  // helper(questions[i].Question, questions[i].Answer);
  helper(currentQuestion.Question, currentQuestion.Answer);

}

if (Score > 0) { console.log(`Great!! Your score is: ${Score}`); }
else { console.log("Never mind! Your score is", Score) }
