/**
 * 
 */

var HOME = 'home';
var SELECTED = 'specificQuestion';
var ASK = 'askQuestion';
var LOGIN = 'provideCredentials';
var REGISTER = 'register';
var YESTERDAY = 'yesterday';

var NAV_HOME = 'navHome' ;
var NAV_SELECTED = 'navSpecificQuestion';
var NAV_ASK = 'navAskQuestion';
var NAV_LOGIN = 'navProvideCredentials';
var NAV_REGISTER = 'navRegister';
var NAV_YESTERDAY = 'navYesterday';


var REFRESH_ALL = ' please navigate to home and refresh questions and answers.';

var userNamePattern = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
var passwordPattern = /^[a-zA-Z0-9!@#$%^*]*$/;

var questionPattern = /^[a-zA-Z0-9!@#$%^*\?\s\.]*$/;
var answerPattern =   /^[a-zA-Z0-9!@#$%^*\?\s\.]*$/;

var questions = [];
var answers = [];

var yesterdayQuestions = [];
var yesterdayAnswers = [];

var user = new Security();

function isUserLoggedIn()
{
	if(user.nonce != null && user.nonce.length > 0 && user.userName != null && user.userName.length > 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function updateNonce(nonce)
{
	user.nonce = nonce;
}