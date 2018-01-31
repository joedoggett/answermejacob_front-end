
/**
 * register codes. 1: successful. 2: user name already taken.
 * @param data
 */
function registerSuccess(data)
{
	
	if(data.rightResponse.code === '1')
	{
		displaySuccessfulRegistration();
	}
	else if(data.rightResponse.code === '2')
	{
		displayRegistrationFailure('account user name already taken. please register with a different email address.');
	}
	else
	{
		displayRegistrationFailure('an error occurred during registration.');
	}
}

function displaySuccessfulRegistration()
{
	displayIdMessageColor('provideRegisterMessage', 'registration successful. please check the email account and navigate to the provided link to validate your account.', 'blue');
	$('#registerUserName').val('');
	$('#registerPassword').val('');
	$('#registerPasswordConfirm').val('');
}

function displayRegistrationFailure(message)
{
	displayIdMessageColor('provideRegisterMessage', message, 'red');
}

function registerFailure(error)
{
	displayIdMessageColor('provideRegisterMessage', 'an error occurred. please try again later.', 'red');
}

function register(userName, password)
{
	security = new Security('', userName, password, '');
	question = new Question('', '');
	answer = new Answer('', '', '', '');
	sqa = new SingleQuestionAnswer(question, answer);
	right = new Right(security, sqa);
	ajaxPostRequestSendObject('registeruser', JSON.stringify(right), registerSuccess, registerFailure);
}
