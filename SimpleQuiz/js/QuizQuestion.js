var com;
if (!com)
    com = {};

if (!com.flametreepublishing)
    com.flametreepublishing = {};

com.flametreepublishing.QuizQuestion = function(aQuestionNum, aQuestionText, aAnswers, aCorrectAnswerIndex) {

    this.questionNum = aQuestionNum;
    this.questionText = aQuestionText;
    this.answers = aAnswers;
    this.correctAnswerIndex = aCorrectAnswerIndex;
}

com.flametreepublishing.QuizQuestion.prototype.checkUserAnswer = function(answerIndex) {

    return answerIndex === this.correctAnswerIndex;
}

com.flametreepublishing.QuizQuestion.prototype.renderQuestion = function() {

    var questionDiv = document.createElement("div");
    questionDiv.id = "q" + String(this.questionNum);

    var questionHeading = document.createElement("h2");
    questionHeading.innerHTML = "QUESTION " + this.questionNum;
    questionDiv.appendChild(questionHeading);

    var questionTextPara = document.createElement("p");
    questionTextPara.innerHTML = this.questionText;
    questionDiv.appendChild(questionTextPara);

    for (var i = 0; i < this.answers.length; i++) {

        var answerPara = document.createElement("p");
        answerPara.innerHTML = this.answers[i];
        answerPara.id = "a" + i;

        questionDiv.appendChild(answerPara);
    }

    document.body.appendChild(questionDiv);
}