var getType = "GET";
var postType = "POST";
var server = "http://localhost:8080/"

function ajaxGetRequest(urlString, successFunction, errorFunction)
{ 
	$.ajax({
		type: getType,
		url: server + urlString,
		dataType: "json", // data type of response
		success: successFunction,
		error: errorFunction,
		cache: false
	});
}

function ajaxPostRequestSendObject(urlString, dataToSend, successFunction, errorFunction)
{
	$.ajax({
		type: postType,
		contentType: 'application/json',
		url: server + urlString,
		dataType: "json",
		data: dataToSend,
		success: successFunction,
		error: errorFunction,
		cache: false
	});
}