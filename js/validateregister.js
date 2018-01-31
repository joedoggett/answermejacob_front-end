

function validateRegisterForm()
{
	$('#registerForm')
	.validate(
			{
				rules : {
					registerUserName : {
						required : true,
						regex: userNamePattern
					},
					registerPassword : {
						required : true,
						regex: passwordPattern,
						rangelength : [ 8, 20 ]
					},
					registerPasswordConfirm : {
						equalTo : registerPassword
					}
				}, //end rules
				messages : {
					
					registerUserName : {
						required : "please enter user name.",
						regex : "please enter a valid email address."
					},
					registerPassword : {
						required : "please enter password",
						regex : "password can contain alpha-numerics and special characters: !@#$%^*",
						rangelength : "password length is between 8 and 20."
					},
					registerPasswordConfirm : {
						equalTo : "password and confirm password must match."
					}
						
				},
				
				submitHandler : submitRegisterButtonClick

			}); // end validate 

}



	