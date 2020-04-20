$(document).ready(function () {
  //Variables

  var time = 70;
  var questions = [
    {
      question: "Which of the following Syntax is correct?",
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
  var userAnswer = "";
  var score = 0;
  var intervalID;

  //Functions

  function endTimer() {
    if (time === 0) {
      clearInterval(intervalID);
    }
  }

  //Click Event Handling

  //Pause Timer Click
  $("#pause-timer").on("click", function () {
    clearInterval(intervalID);
  });

  //Answer Click
  $(".answer-button").on("click", function () {
    userAnswer = $(this).val();
    // console.log(userAnswer);

    if (userAnswer === questions[3].answer) {
      score += 10;
      $("#result").text("Correct!");
      $("#score").text(score);
    } else {
      score -= 5;
      time -= 15;
      $("#result").text("Wrong!");
      $("#score").text(score);
    }
  });

  //Start Button Click Event
  $("#start-button").on("click", function () {
    $("#quiz").attr("class", "d-block");
    $("#start-bar").attr("class", "d-none");

    intervalID = setInterval(function () {
      $("#timer").text(time);
      time--;
    }, 1000);

    // if (time <= 0) {
    //   clearInterval(intervalID);
    // }

    for (var i = 0; i < questions.length; i++) {
      // console.log(questions[i]);
      $("#question-header").text(questions[i].question);
      $("#a-answer").text(questions[i].a);
      $("#b-answer").text(questions[i].b);
      $("#c-answer").text(questions[i].c);
      $("#d-answer").text(questions[i].d);

      //   switch (i) {
      //     case i === 0:
      //       $("#question-header").text(questions[0].question);
      //       $("#a-answer").text(questions[0].a);
      //       $("#b-answer").text(questions[0].b);
      //       $("#c-answer").text(questions[0].c);
      //       $("#d-answer").text(questions[0].d);
      //       break;
      //     case i === 1:
      //       $("#question-header").text(questions[1].question);
      //       $("#a-answer").text(questions[1].a);
      //       $("#b-answer").text(questions[1].b);
      //       $("#c-answer").text(questions[1].c);
      //       $("#d-answer").text(questions[1].d);
      //       break;
      //     case i === 2:
      //       $("#question-header").text(questions[2].question);
      //       $("#a-answer").text(questions[2].a);
      //       $("#b-answer").text(questions[2].b);
      //       $("#c-answer").text(questions[2].c);
      //       $("#d-answer").text(questions[2].d);
      //       break;
      //     case i === 3:
      //       $("#question-header").text(questions[3].question);
      //       $("#a-answer").text(questions[3].a);
      //       $("#b-answer").text(questions[3].b);
      //       $("#c-answer").text(questions[3].c);
      //       $("#d-answer").text(questions[3].d);
      //       break;
      //     default:
      //       break;
      //   }
    }
  });

  // Loop
});
