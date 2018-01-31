
function loginSuccess(data)
{
	user = new Security();
	if(data.rightResponse.code === '1')
	{
		updateNonce(data.security.nonce);
		user.userName = $('#userName').val();
		displaySuccessfulLogin();
	}
	else
	{
		displayUnsuccessLogin();
	}
}

function clearLoginMessage()
{
	displayIdMessageColor('provideLoginMessage', '', 'black');
}

function displaySuccessfulLogin()
{
	displayIdMessageColor('provideLoginMessage', 'login successful. please enjoy the site.', 'blue');
	$('#userName').val('');
	$('#password').val('');
}

function displayUnsuccessLogin()
{
	displayIdMessageColor('provideLoginMessage', 'login not successful.', 'red');
}

function loginFailure(error)
{
	user = new Security();
	displayIdMessageColor('provideLoginMessage', 'an error occurred. login unsuccessful.', 'red');
}

function login(userName, password)
{
	security = new Security('', userName, password, '');
	question = new Question('', '');
	answer = new Answer('', '', '', '');
	sqa = new SingleQuestionAnswer(question, answer);
	changePassword = new ChangePassword('', '', '');
	right = new Right(security, sqa, changePassword);
	ajaxPostRequestSendObject('login', JSON.stringify(right), loginSuccess, loginFailure);
}
