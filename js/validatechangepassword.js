

function validateChangePasswordForm()
{
	$('#changePasswordForm')
	.validate(
			{
				rules : {
					changePasswordUserName : {
						required : true,
						regex: userNamePattern
					},
					changePasswordOldPassword : {
						required : true,
						regex: passwordPattern,
						rangelength : [ 8, 20 ]
					},
					changePasswordPassword : {
						required: true,
						regex: passwordPattern,
						rangelength : [ 8, 20 ]
					},
					
					changePasswordPasswordConfirm : {
						equalTo : changePasswordPassword
					}
				}, //end rules
				messages : {
					
					changePasswordUserName : {
						required : "please enter user name.",
						regex : "please enter a valid email address."
					},
					changePasswordOldPassword : {
						required : "please enter old password",
						regex : "old password can contain alpha-numerics and special characters: !@#$%^*",
						rangelength : "old password length is between 8 and 20."
					},
					changePasswordPassword : {
						required : "please enter new password",
						regex : "new password can contain alpha-numerics and special characters: !@#$%^*",
						rangelength : "new password length is between 8 and 20."
					},
					changePasswordPasswordConfirm : {
						equalTo : "new password and confirm password must match."
					}
						
				},
				
				submitHandler : submitChangePasswordButtonClick

			}); // end validate 

}



	