

function validateQuestionForm()
{
	$('#questionForm')
	.validate(
			{
				rules : {
					inputQuestion : {
						required : true,
						regex: questionPattern,
						rangelength : [ 2, 1024 ]
					}
				}, //end rules
				messages : {
					
					inputQuestion : {
						required : "please enter a question.",
						regex : "question can contain alpha-numerics and special characters: !@#$%^*?",
						rangelength : 'question length minimum is 2.'
					}
						
				},
				
				submitHandler : submitQuestionButtonClick

			}); // end validate 

}



	