/**
 * 
 */

$(document).ready(function(){
	setUp();
});

function getURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}


function setUp()
{
	console.log("start registration validation.");
	registrationValidation();
}

function getRegistrationSuccess(data)
{
	console.log(data);
	if(data == 1)
	{
		displayIdMessageColor('registrationMessage', 'registration validation successfully sent. please try to login.', 'blue');
	}
	else
	{
		displayIdMessageColor('registrationMessage', 'there appears to be a problem with the registration. please try again later.', 'red');
	}
	
}

function getRegistrationFailure(error)
{
	displayIdMessageColor('registrationMessage', 'registration validation error. please try again later.', 'red');
}

function registrationValidation()
{
	var tokenValue = getURLParameter('token');
	console.log("token: " + tokenValue)
	
	ajaxGetRequest('registrationvalidation/' + tokenValue, getRegistrationSuccess, getRegistrationFailure);
	
	
}