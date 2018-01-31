function displayIdMessageColor(id, message, messageColor)
{
	$('#' + id).text(message).css({"color": messageColor});
}