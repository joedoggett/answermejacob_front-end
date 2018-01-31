

function validateAnswerForm()
{
	$('#answerForm')
	.validate(
			{
				rules : {
					provideAnswer : {
						required : true,
						regex: answerPattern,
						rangelength : [ 2, 2048 ]
					}
				}, //end rules
				messages : {
					
					provideAnswer : {
						required : "please enter an answer.",
						regex : "answer can contain alpha-numerics and special characters: !@#$%^*?",
						rangelength : 'answer length minimum is 2.'
					}
						
				},
				
				submitHandler : submitAnswerButtonClick

			}); // end validate 

}



	