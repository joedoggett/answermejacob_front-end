function insertAnswerSuccess(data)
{
	updateNonce(data.security.nonce);
	if(data.rightResponse.code === '99')
	{
		displayIdMessageColor('provideAnswerMessage', 'login required', 'red');
		return;
	}
	clearQuestionAnswerFields();
	displayIdMessageColor('provideAnswerMessage', 'answer submitted successfully.' + REFRESH_ALL, 'blue');
}

function insertAnswerFailure(error)
{
	updateNonce(data.security.nonce);
	displayIdMessageColor('provideAnswerMessage', 'an error occurred. please try again later.', 'red');
}


function insertAnswer(questionId, answer)
{
	if(!isUserLoggedIn())
	{
		return;
	}
	security = user;
	question = new Question(questionId, '');
	answer = new Answer('', answer, '', '');
	sqa = new SingleQuestionAnswer(question, answer);
	changePassword = new ChangePassword('', '', '');
	right = new Right(security, sqa, changePassword);
	ajaxPostRequestSendObject('insertanswer', JSON.stringify(right), insertAnswerSuccess, insertAnswerFailure);
}

