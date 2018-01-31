function insertQuestionSuccess(data)
{
	
	updateNonce(data.security.nonce);
	if(data.rightResponse.code === '99')
	{
		displayIdMessageColor('inputQuestionMessage', 'login required', 'red');
		return;
	}
	clearAskQuestionFields();
	displayIdMessageColor('inputQuestionMessage', 'question submitted successfully.' + REFRESH_ALL, 'blue');
	
}

function insertQuestionFailure(error)
{
	updateNonce(data.security.nonce);
	displayIdMessageColor('inputQuestionMessage', 'an error occurred. please try again later.', 'red');
}

function insertQuestion(questionToSubmit)
{
	if(!isUserLoggedIn())
	{
		return;
	}
	
	security = user;
	question = new Question('', questionToSubmit);
	answer = new Answer('', '', '', '');
	sqa = new SingleQuestionAnswer(question, answer);
	changePassword = new ChangePassword('', '', '');
	right = new Right(security, sqa, changePassword);
	ajaxPostRequestSendObject('insertquestion', JSON.stringify(right), insertQuestionSuccess, insertQuestionFailure);
}

