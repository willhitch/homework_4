$(document).ready(function () {
  //Variables

  var time = 60;
  var score = 0;
  var counter = 0;
  var questions = [
    {
      question: "Which of the following HTML syntax is correct?",
      a: "a) <h1>This is a heading<h1>",
      b: "b) </h1>This is a heading<h1>",
      c: "c) <h1>This is a heading</h1>",
      d: "d) </h1>This is a heading</h1>",
      answer: "c",
    },
    {
      question: "Which of the following is NOT a way to gather user input?",
      a: "a) prompt()",
      b: "b) confirm()",
      c: "c) alert()",
      d: "d) print()",
      answer: "d",
    },
    {
      question:
        "Which syntax is uesed to seperate different values of an array?",
      a: "a) A period",
      b: "b) A semi-colon",
      c: "c) A comma",
      d: "d) None of the above",
      answer: "c",
    },
    {
      question: "What is the airspeed velocity of an unladen swallow?",
      a: "a) African or European?",
      b: "b) 28 kph ",
      c: "c) 20 kph",
      d: "d) 30 kph",
      answer: "a",
    },
  ];
  var highScores = JSON.parse(localStorage.getItem("#score")) || [];
  var userAnswer = "";
  var userName = "";
  var intervalID;

  //Functions

  function endTimer() {
    clearInterval(intervalID);
  }

  //Click Event Handling

  //Pause Timer Click
  $("#pause-timer").on("click", function () {
    clearInterval(intervalID);
  });

  //Answer Click
  $(".answer-button").on("click", function () {
    userAnswer = $(this).val();
    handleAnswer();
    counter++;
    appendQuestion();
    handleCounter();
  });

  function handleAnswer() {
    if (userAnswer === questions[counter].answer) {
      score += 10;
      $("#result").text("Correct!");
      $("#score").text(score);
    } else if (userAnswer !== questions[counter].answer) {
      score -= 5;
      time -= 15;
      $("#result").text("Wrong!");
      $("#score").text(score);
    }
  }

  function appendQuestion() {
    if (counter === 4) {
      return;
    }
    $("#question-header").text(questions[counter].question);
    $("#a-answer").text(questions[counter].a);
    $("#b-answer").text(questions[counter].b);
    $("#c-answer").text(questions[counter].c);
    $("#d-answer").text(questions[counter].d);
  }

  function saveHighScore() {}

  function handleCounter() {
    if (counter === 4) {
      $("#quiz").attr("class", "d-none");
      $("form").attr("class", "d-block");
      endTimer();
      return;
    }
  }

  function handleTimer() {
    time--;
    $("#timer").text(time);

    if (time <= 0) {
      endTimer();
    }
  }

  function quizInit() {
    var time = 60;
    var score = 0;
    var counter = 0;
    var userAnswer = "";
    var userName = "";

    $("#quiz").attr("class", "d-none");
    $("#start-bar").attr("class", "d-block");
    $("form").attr("class", "d-none");
  }

  function showScore() {
    var tRow = $("<tr>");
    var userTd = $("<td>").text(userName);
    var scoreTd = $("<td>").text(score);

    tRow.append(userTd, scoreTd);

    $("#quiz-score").prepend(tRow);
  }

  //Reset Button Click Event
  $("#reset-quiz").on("click", function () {
    quizInit();
  });

  //Start Button Click Event
  $("#start-button").on("click", function () {
    $("#quiz").attr("class", "d-block");
    $("#start-bar").attr("class", "d-none");

    intervalID = setInterval(handleTimer, 1000);

    appendQuestion();
  });

  //Local Storage

  $("#save-name").on("click", function (event) {
    event.preventDefault();

    userName = $("#username").val();

    localStorage.setItem("username", userName);
    localStorage.setItem("highscores", JSON.stringify(score));
    $("form").trigger("reset");
    showScore();
    console.log(localStorage.getItem("#username"));
  });
});
