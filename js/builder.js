
function findByQuestionIndexAndAllowEdit()
{
	var index = $(this).closest("tr").find(".questionIndex").val();
	questionSelectedDisplayWithAnswer(index);
}

function questionSelectedDisplayWithAnswer(questionIndex)
{
	clearQuestionAnswerFields();
	var questionId = questions[questionIndex].questionId;
	var answersProvided = [];
	var index = 0;
	for(var i = 0; i < answers.length; i ++)
	{
		if(answers[i].questionId === questionId)
		{
			answersProvided.push(answers[i]);
			index ++;
		}
	}
	buildAnswerTable(answersProvided);
	$('#specificQuestionSelected').text(questions[questionIndex].question);
	$('#specificQuestionSelectedId').val(questionId);
	var confirmId = $('#specificQuestionSelectedId').val();
	selectedClick();
}

function clearQuestionAnswerFields()
{
	displayIdMessageColor('provideAnswerMessage', '', 'black');
	displayIdMessageColor('answersToSpecificQuestionSelectedMessage', '', 'black');
	$('#provideAnswer').val('');
}

function buildYesterdayQuestionTable(data)
{
	$( "#yesterdayTableBodyQuestions" ).empty().append(buildQuestionRows(data));
	$(".drillDown").hover(drillDownHover, drillDownOffHover);
	$('.drillDown').click(findByQuestionIndexAndDisplayYesterdayAnswers);
}


function findByQuestionIndexAndDisplayYesterdayAnswers()
{
	var index = $(this).closest("tr").find(".questionIndex").val();
	yesterdayQuestionSelectedDisplayWithAnswer(index);
}

function yesterdayQuestionSelectedDisplayWithAnswer(yesterdayQuestionIndex)
{
	clearYesterdayFields();
	var yesterdayQuestionId = yesterdayQuestions[yesterdayQuestionIndex].questionId;
	var yesterdayAnswersProvided = [];
	var index = 0;
	for(var i = 0; i < yesterdayAnswers.length; i ++)
	{
		if(yesterdayAnswers[i].questionId === yesterdayQuestionId)
		{
			yesterdayAnswersProvided.push(yesterdayAnswers[i]);
			index ++;
		}	
	}
	
	buildYesterdayAnswerTable(yesterdayAnswersProvided);
	displayYesterdayQuestionAndAnswers(yesterdayQuestions[yesterdayQuestionIndex].question);
	
	
	
}

function clearYesterdayFields()
{
	displayIdMessageColor('yesterdayQuestionDisplayAnswers', '', 'black');
	
}

function displayYesterdayQuestionAndAnswers(yesterdayQuestion)
{
	displayIdMessageColor('yesterdayQuestionDisplayAnswers', yesterdayQuestion, 'red');
	displayYesterdayAnswersHideQuestions();
	
}

function buildYesterdayAnswerTable(data)
{
	
	$( "#yesterdayTableBodyAnswers" ).empty().append(buildAnswerRows(data));
	$(".chooseAnswer").hover(drillDownHover, drillDownOffHover);
}


function buildQuestionTable(data) 
{
	$( "#tableBodyQuestions" ).empty().append(buildQuestionRows(data));
	$(".drillDown").hover(drillDownHover, drillDownOffHover);
	$('.drillDown').click(findByQuestionIndexAndAllowEdit);
}

function buildQuestionRows(inQuestions) 
{
    
    var rows = $("<tbody></tbody>");
    for(var i = 0; i < inQuestions.length; i ++)
    {
    	var row = $("<tr></tr>").addClass('drillDown');
		var firstEntry = $("<td></td>");
		firstEntry.append("<input type='hidden' class='questionIndex' value='" + i + "'>");
		row.append(firstEntry);
		row.append($("<td></td>").text(inQuestions[i].question));
		rows.append(row);
    }
    
    return rows;
}

function buildAnswerRows(answersProvided) 
{
    //return _.template( $( "#questionTemplate" ).html(), {"questions": questions});
    var rows = $("<tbody></tbody>");
    for(var i = 0; i < answersProvided.length; i ++)
    {
    	var row = $("<tr></tr>").addClass('chooseAnswer');
		var firstEntry = $("<td></td>");
		firstEntry.append("<input type='hidden' class='answerId' value='" + answersProvided[i].answerId + "'>");
		row.append(firstEntry);
		row.append($("<td></td>").text(answersProvided[i].answer));
		row.append($("<td></td>").text(answersProvided[i].count));
		rows.append(row);
    }
    
    return rows;
}

function buildAnswerTable(data) 
{
	$( "#tableBodyAnswers" ).empty().append(buildAnswerRows(data));
	$(".chooseAnswer").hover(drillDownHover, drillDownOffHover);
	$('.chooseAnswer').click(answerChosenByUser);
}

function drillDownHover()
{
	$(this).css("background", "blue");
}

/**
 * helper method to set background of table row back to nothing when not hover
 */
function drillDownOffHover()
{
	$(this).css("background", "");
}