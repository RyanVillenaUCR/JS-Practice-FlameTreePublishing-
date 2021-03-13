var com;
if (!com)
    com = {};

if (!com.flametreepublishing)
    com.flametreepublishing = {};

com.flametreepublishing.SimpleQuiz = function() {

    this.questions = []; // holds QuizQuestions
    this.loadQuestions();
}

com.flametreepublishing.SimpleQuiz.prototype.loadQuestions = function() {

    // Question 1
    this.questions.push(
        new com.flametreepublishing.QuizQuestion(
            1,
            "Approximately how far away from the Earth is the Sun?",
            ["200 miles", "93,000,000 miles", "49,000,000 miles", "150,000 miles"],
            1
        )
    );

    // Question 2
    this.questions.push(
        new com.flametreepublishing.QuizQuestion(
            2,
            "How many planets are there in our solar system?",
            ["6", "7", "8", "9"],
            2
        )
    );

    // Question 3
    this.questions.push(
        new com.flametreepublishing.QuizQuestion(
            3,
            "Which of these is a moon of Jupiter?",
            ["Ganymede", "Miranda", "Enceladus", "Mars"],
            0
        )
    );
}

com.flametreepublishing.SimpleQuiz.prototype.renderAllQuestions = function() {

    for (var i = 0; i < this.questions.length; i++)
        this.questions[i].renderQuestion();
}