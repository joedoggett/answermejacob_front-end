/**
 * 
 */

var Right = function(security, singleQuestionAnswer, changePassword)
{
	this.security = security;
	this.singleQuestionAnswer = singleQuestionAnswer;
	this.changePassword = changePassword;
}

var Security = function(nonce, userName, password, validDate)
{
	this.nonce = nonce;
	this.userName = userName;
	this.password = password;
	this.validDate = validDate;
}

var Question = function(questionId, question)
{
	this.questionId = questionId;
	this.question = question;
}

var Answer = function(answerId, answer, questionId, count)
{
	this.answerId = answerId;
	this.answer = answer;
	this.questionId = questionId;
	this.count = count;
}

var SingleQuestionAnswer = function(question, answer)
{
	this.question = question;
	this.answer = answer;
}

var ChangePassword = function(userName, oldPassword, newPassword)
{
	this.userName = userName;
	this.oldPassword = oldPassword;
	this.newPassword = newPassword;
}