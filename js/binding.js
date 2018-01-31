$(document).ready(function(){
	setUp();
});


function setUp()
{
	bindNavigationLinks();
	showArticle(HOME); 
}

function showArticle(articleToDisplay)
{
	hideAllArticles();
	$( '#' + articleToDisplay ).show(); 
}


function hideAllArticles()
{
	$('#' + HOME).hide();
	$('#' + SELECTED).hide();
	$('#' + ASK).hide();
	$('#' + LOGIN).hide();
	$('#' + REGISTER).hide();
	$('#' + YESTERDAY).hide();
}

function showSelectedItems()
{
	var questionId = $('#specificQuestionSelectedId').val();
	
	if(questionId == null || isNaN(questionId) || !questionId.length > 0 )
	{
		$( '#' + 'hideSpecificQuestion' ).show();
		$( '#' + 'showSpecificQuestion' ).hide();
	}
	else
	{
		$( '#' + 'showSpecificQuestion' ).show();
		$( '#' + 'hideSpecificQuestion' ).hide();
	}
}

function homeClick(){ showArticle(HOME); }
function selectedClick(){ showSelectedItems(); showArticle(SELECTED); }
function askClick(){ showArticle(ASK); }
function loginClick(){ showArticle(LOGIN); }
function registerClick(){ showArticle(REGISTER); }
function yesterdayClick(){ showArticle(YESTERDAY); }

function questionsRefreshButtonClick(){ getQuestions(); getVoteCount(); }

function yesterdayQuestionsRefreshButtonClick(){ getYesterdayQuestions();  getYesterdayVoteCount();   }

function submitAnswerButtonClick(){	if($('#answerForm').valid() == true) { performSubmitAnswer(); } }

function submitQuestionButtonClick(){ if($('#questionForm').valid() == true) { 	performSubmitQuestion(); } }

function submitLoginButtonClick(){ if($('#loginForm').valid() == true){ performLogin(); } }

function submitRegisterButtonClick(){if($('#registerForm').valid() == true){ performRegister(); } };

function submitChangePasswordButtonClick(){  if($('#changePasswordForm').valid() == true){  performChangePassword(); } }

function displayYesterdayQuestionsClick(){ displayYesterdayQuestionsHideAnswers();  }


function refreshHomeArticle()
{
	questionsRefreshButtonClick();
	homeClick();
}


function refreshSelectedArticle(questionIndex)
{
	clearProvideAnswerFields();
	questionSelectedDisplayWithAnswer(questionIndex);
}
function clearProvideAnswerFields()
{
	$('#provideAnswer').val('');
	$('#provideAnswerMessage').text('');
}

function bindNavigationLinks()
{
	$('#' + NAV_HOME ).click(homeClick);
	$('#' + NAV_SELECTED).click(selectedClick);
	$('#' + NAV_ASK).click(askClick);
	$('#' + NAV_LOGIN).click(loginClick);
	$('#' + NAV_REGISTER).click(registerClick);
	$('#' + NAV_YESTERDAY).click(yesterdayClick);
	  
	$('#' + 'questionsRefreshButton').click(questionsRefreshButtonClick);
	$('#submitQuestionButton').click(submitQuestionButtonClick);
	$('#submitAnswerButton').click(submitAnswerButtonClick);
	$('#submitLoginButton').click(submitLoginButtonClick);
	$('#submitRegisterButton').click(submitRegisterButtonClick);
	$('#changePasswordButton').click(submitChangePasswordButtonClick);
	$('#yesterdayQuestionsRefreshButton').click(yesterdayQuestionsRefreshButtonClick);
	$('#displayYesterdayQuestions').click(displayYesterdayQuestionsClick);
	
	
	
	
	validateQuestionForm();
	validateAnswerForm()
	validateRegisterForm();
	validateLoginForm();
	validateChangePasswordForm();
	validationMethodsAdd();
	
	
	displayYesterdayQuestionsHideAnswers();
	
	
}