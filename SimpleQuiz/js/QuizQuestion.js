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

    document.write("<h2>Question " + this.questionNum + "</h2>");
    document.write("<p>" + this.questionText + "</p>");
    document.write("<p>A1: " + this.answers[0] + "</p>");
    document.write("<p>A2: " + this.answers[1] + "</p>");
    document.write("<p>A3: " + this.answers[2] + "</p>");
    document.write("<p>A4: " + this.answers[3] + "</p>");
}