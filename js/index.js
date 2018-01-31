



function performSubmitAnswer()
{
	
	if(!isUserLoggedIn())
	{
		displayIdMessageColor('provideAnswerMessage', 'you must login to submit an answer', 'red');
		return;
	}
	
	var questionId = $('#specificQuestionSelectedId').val();
	
	if(questionId == null || isNaN(questionId) || !(questionId.length > 0) )
	{
		return;
	}
	
	var answer = $('#provideAnswer').val();
  
	insertAnswer(questionId, answer);
	
}



/**
 * abandon.
function insertQuestionAnswer()
{
	security = new Security('nTIULlSeJCZek6zcKJhCQQsJvcZpEFes2yFuLEmedSGbQMDBJ7xePpcXOnH7B6EI1mEXBgdpF93FVb7jN3d8ecgmyNRAfLI66QZiVpIvRltq7MiU74my0yFBXcyvrZHf', 'jdoggett', '', '');
	question = new Question('', 'here is my question');
	answer = new Answer('', 'here is my answer', '', '');
	sqa = new SingleQuestionAnswer(question, answer);
	right = new Right(security, sqa);
	console.log(JSON.stringify(right));
	ajaxPostRequestSendObject('rest/insertquestionanswer', JSON.stringify(right), insertQuestionAnswerSuccess, insertQuestionAnswerFailure);
}


function insertQuestionAnswerSuccess(data)
{
	console.log('start insertQuestionAnswerSuccess');
	console.log(JSON.stringify(data));
}

function insertQuestionAnswerFailure(error)
{
	console.log(error);
}

*/

function performSubmitQuestion()
{
	
	
	
	if(!isUserLoggedIn())
	{
		displayIdMessageColor('inputQuestionMessage', 'you must login to ask a question.', 'red');
		return;
	}
	
	var question = $('#inputQuestion').val();
	insertQuestion(question);
	
}



function clearAskQuestionFields()
{
	$('#inputQuestion').val('');
	$('#inputQuestionMessage').text('');
}



function performLogin()
{
	clearLoginMessage();
	var userName = $('#userName').val();
	var password = $('#password').val();
	login(userName, password);
}

function performChangePassword()
{
	clearChangePasswordMessage();
	var userName = $('#changePasswordUserName').val();
	var oldPassword = $('#changePasswordOldPassword').val();
	var newPassword = $('#changePasswordPassword').val();
	changeUserPassword(userName, oldPassword, newPassword);
}

function performRegister()
{
	var userName = $('#registerUserName').val();
	var password = $('#registerPassword').val();
	register(userName, password);
}

function displayYesterdayQuestionsHideAnswers()
{
	$('#yesterday_list_of_questions').show();
	$('#yesterday_list_of_answers').hide();
}

function displayYesterdayAnswersHideQuestions()
{
	$('#yesterday_list_of_questions').hide();
	$('#yesterday_list_of_answers').show();
}




function validationMethodsAdd()
{
	jQuery.validator.addMethod(
			"regex", 
				function(value, element, regexp)
				{
					//console.log("regexp: " + regexp);
					//console.log("value: " + value);
					var re = new RegExp(regexp);
					var op = this.optional(element);
					var test = re.test(value.trim());
					//console.log("test: " + test);
				    return  op || test;  
				},
			"Please check input."
			);
}
