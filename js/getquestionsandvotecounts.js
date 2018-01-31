
function getVoteCountSuccess(data)
{
	answers = data;
}

function getVoteCountFailure(error)
{
	//nothing to do.
}

function getVoteCount()
{
	ajaxGetRequest('getvotecount', getVoteCountSuccess, getVoteCountFailure);
}

function getQuestionsSuccess(data)
{
	questions = data;
	buildQuestionTable(data);
	displayIdMessageColor('questionTableMessage', 'number of questions to display: ' + questions.length, 'blue');
}


function getQuestionsFailure(error)
{
	displayIdMessageColor('questionTableMessage', 'error retrieving questions. please try again later.', 'red');
}


function getQuestions()
{
	ajaxGetRequest('getquestions', getQuestionsSuccess, getQuestionsFailure);
}