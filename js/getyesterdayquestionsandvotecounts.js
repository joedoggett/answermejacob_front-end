
function getYesterdayVoteCountSuccess(data)
{
	yesterdayAnswers = data;
}

function getYesterdayVoteCountFailure(error)
{
	//nothing to do.
}

function getYesterdayVoteCount()
{
	ajaxGetRequest('getyesterdayvotecount', getYesterdayVoteCountSuccess, getYesterdayVoteCountFailure);
}

function getYesterdayQuestionsSuccess(data)
{
	yesterdayQuestions = data;
	buildYesterdayQuestionTable(data);
	displayIdMessageColor('provideYesterdayMessage', 'number of questions to display: ' + yesterdayQuestions.length, 'blue');
}


function getYesterdayQuestionsFailure(error)
{
	displayIdMessageColor('provideYesterdayMessage', 'error retrieving questions. please try again later.', 'red');
}


function getYesterdayQuestions()
{
	ajaxGetRequest('getyesterdayquestions', getYesterdayQuestionsSuccess, getYesterdayQuestionsFailure);
}