

function validateLoginForm()
{
	$('#loginForm')
	.validate(
			{
				rules : {
					userName : {
						required : true,
						regex: userNamePattern
					},
					password : {
						required : true,
						regex: passwordPattern,
						rangelength : [ 8, 20 ]
					}
				}, //end rules
				messages : {
					
					userName : {
						required : "please enter user name.",
						regex : "please enter a valid email address."
					},
					password : {
						required : "please enter password",
						regex : "password can contain alpha-numerics and special characters: !@#$%^*",
						rangelength : "password length is between 8 and 20."
					}
						
				},
				
				submitHandler : submitLoginButtonClick

			}); // end validate 

}



	