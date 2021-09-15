var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

var userName = readlineSync.question("May I have your name? ");
console.log("Namaste " + userName + "!");

let options = "";

let decision = null;

let highscore = false;

var players = [
  { name: "Tanay", score: 4 },
  { name: "Akash", score: 2 },
];

console.log("Chaliye shuru karte hai , kaun banega Geographypati...");

let quesarray = [
  {
    country: "India",

    options: ["Mumbai", "Delhi", "Chennai", "Bangalore"],
    answer: "Delhi",
  },
  {
    country: "USA",

    options: ["New York", "Los Angeles", "Washington", "SanFrancisco"],
    answer: "Washington",
  },
  {
    country: "France",

    options: ["Paris", "Lyon", "Marsielle", "SanFrancisco"],
    answer: "Paris",
  },
  {
    country: "Russia",

    options: ["Moscow", "Saint Petersberg", "Chcehnya", "Kyiv"],
    answer: "Moscow",
  },
  {
    country: "Pakistan",

    options: ["Karachi", "Islamabad", "Lahore", "Punjab"],
    answer: "Islamabad",
  },
  {
    country: "Thailand",

    options: ["Ayutthaya", "Chiang Mai", "Phuket", "Bangkok"],
    answer: "Bangkok",
  },
  {
    country: "Nigeria",

    options: ["Abuja", "Lagos", "Ibadan", "Kano"],
    answer: "Abuja",
  },
  {
    country: "Australia",

    options: ["Canberra", "Melbourne", "Victoria", "Adelaide"],
    answer: "Canberra",
  },
  {
    country: "Peru",

    options: ["Arequipa", "Lima", "Trujillo", "Piura"],
    answer: "Lima",
  },
  {
    country: "Argentina",

    options: ["Buenos Aires", " Cordoba", "Rosario", "Mendoza"],
    answer: "Buenos Aires",
  },
];

function askques(quesobj) {
  console.log("---------------------------------------");

  console.log(
    "Which of the following is the capital of " + quesobj.country + " ?"
  );

  chosenindex = readlineSync.keyInSelect(quesobj.options, "Your answer: ");

  if (chosenindex === -1) {
    //console.log("Chosen to quit");

    if (readlineSync.keyInYN("Do you want to quit?")) {
      // Key that is  `Y` was pressed.

      console.log(chalk.red("Chosen to quit"));
      console.log("---------------------------------------");
      decision = true;
    }
  } else if (quesobj.options[chosenindex] === quesobj.answer) {
    console.log(
      quesobj.options[chosenindex] +
        " is  the " +
        chalk.green("right") +
        " answer."
    );

    score++;

    console.log(chalk.blue("Current Score: " + score));
  } else {
    console.log(
      quesobj.options[chosenindex] +
        " is  the " +
        chalk.red("wrong") +
        " answer."
    );
    console.log("Correct answer is: " + quesobj.answer);
    console.log(chalk.blue("Current Score: " + score));
  }
}

for (var i = 0; i < quesarray.length; i++) {
  askques(quesarray[i]);

  if (decision === true) {
    break;
  }
}

console.log(
  chalk.redBright("Your Final score is: " + score + " / " + quesarray.length)
);

for (var i = 0; i < players.length; i++) {
  if (score > players[i].score) {
    highscore = true;
  }
}

if (highscore === true) {
  console.log(chalk.yellowBright("YAAAAY!! You have highscore!! "));
}

players.push({ name: userName, score: score });

console.log(chalk.yellow("Player scores: "));

for (var i = 0; i < players.length; i++) {
  console.log(players[i].name + "'s score:" + chalk.yellow(players[i].score));
}
