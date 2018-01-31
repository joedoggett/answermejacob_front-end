function voteAnswerSuccess(data)
{
	updateNonce(data.security.nonce);
	if(data.rightResponse.code === '99')
	{
		displayIdMessageColor('answersToSpecificQuestionSelectedMessage', 'login required', 'red');
		return;
	}
	displayIdMessageColor('answersToSpecificQuestionSelectedMessage', 'vote successfully submitted.' + REFRESH_ALL, 'blue');
}

function voteAnswerFailure(error)
{
	displayIdMessageColor('answersToSpecificQuestionSelectedMessage', 'an error occurred. please try again later.', 'red');
}


function voteAnswer(questionId, answerId)
{
	if(!isUserLoggedIn())
	{
		return;
	}
	security = user;
	question = new Question(questionId, '');
	answer = new Answer(answerId, '', '', '');
	sqa = new SingleQuestionAnswer(question, answer);
	changePassword = new ChangePassword('', '', '');
	right = new Right(security, sqa, changePassword);
	ajaxPostRequestSendObject('voteanswer', JSON.stringify(right), voteAnswerSuccess, voteAnswerFailure);
}


function answerChosenByUser()
{
	
	if(!isUserLoggedIn())
	{	
		displayIdMessageColor('answersToSpecificQuestionSelectedMessage', 'you must login to vote an answer', 'red');
		return;
	}
	var answerId = $(this).closest("tr").find(".answerId").val();
	var questionId = $('#specificQuestionSelectedId').val();
	if(questionId == null || isNaN(questionId) || !(questionId.length > 0) || answerId == null || isNaN(answerId) || !(answerId.length > 0))
	{
		return;
	}
	
	voteAnswer(questionId, answerId);
}
