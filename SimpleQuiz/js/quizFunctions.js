var com;
if (!com)
    com = {};

if (!com.flametreepublishing)
    com.flametreepublishing = {};



com.flametreepublishing.renderQuestionAtIndex = function(questionIndex) {

    document.write("<h2>QUESTION " + (questionIndex + 1) + "</h2>");

    var questionObject = com.flametreepublishing.questions[questionIndex];

    document.write("<p>" + questionObject.questionText + "</p>");
    document.write("<p>A1: " + questionObject.answers[0] + "</p>");
    document.write("<p>A2: " + questionObject.answers[1] + "</p>");
    document.write("<p>A3: " + questionObject.answers[2] + "</p>");
    document.write("<p>A4: " + questionObject.answers[3] + "</p>");
}

com.flametreepublishing.checkUserAnswer = function(questionIndex, answerIndex) {

    var questionObject = com.flametreepublishing.questions[questionIndex];
    
    return questionObject.correctAnswerIndex === answerIndex;
}