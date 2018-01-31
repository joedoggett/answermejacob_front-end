function clearChangePasswordMessage()
{
	displayIdMessageColor('provideChangePasswordMessage', '', 'black');
}


function changePasswordSuccess(data)
{
	user = new Security();
	if(data.rightResponse.code === '1')
	{
		displaySuccessfulChangePassword();
	}
	else
	{
		displayUnsuccessChangePassword();
	}
}

function displaySuccessfulChangePassword()
{
	displayIdMessageColor('provideChangePasswordMessage', 'change password successful. please use your new password when logging in.', 'blue');
	$('#changePasswordUserName').val('');
	$('#changePasswordOldPassword').val('');
	$('#changePasswordPassword').val('');
	$('#changePasswordPasswordConfirm').val('');
}

function displayUnsuccessChangePassword()
{
	displayIdMessageColor('provideChangePasswordMessage', 'change password not successful.', 'red');
}

function changePasswordFailure(error)
{
	displayIdMessageColor('provideChangePasswordMessage', 'an error occurred. change password not successful.', 'red');
}

function changeUserPassword(userName, oldPassword, newPassword)
{
	security = new Security('', '', '', '');
	question = new Question('', '');
	answer = new Answer('', '', '', '');
	sqa = new SingleQuestionAnswer(question, answer);
	changePassword = new ChangePassword(userName, oldPassword, newPassword);
	right = new Right(security, sqa, changePassword);
	ajaxPostRequestSendObject('changepassword', JSON.stringify(right), changePasswordSuccess, changePasswordFailure);
}

