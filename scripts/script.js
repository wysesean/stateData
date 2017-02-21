var getLegislatorBox = function(resultsObj){
	var stringHTML = ''
	if(resultsObj.first_name){
		stringHTML+="<div id=legislatorBox><div id= legislatorName>" + resultsObj.first_name + " ";
	}
	else{
		stringHTML+="<div id=legislatorBox><div id= legislatorName>" + "n/a" + " ";
	}
	if(resultsObj.last_name){
		stringHTML+=resultsObj.last_name + "</div>";
	}
	else{
		stringHTML+="n/a"+ "</div>";
	}
	if(resultsObj.title){
		stringHTML+="<div id = legislatorTitle>" + resultsObj.title + " -- ";
	}
	else{
		stringHTML+="<div id = legislatorTitle>" + "n/a" + " -- ";
	}
	if(resultsObj.party){
		stringHTML+=resultsObj.party + "-";
	}
	else{
		stringHTML+= "n/a" + "-";
	}
	if(resultsObj.state_name){
		stringHTML+=resultsObj.state_name+"</div>";
	}
	else{
		stringHTML+= "n/a" +"</div>";
	}
	if(resultsObj.oc_email){
		stringHTML+="<ul><li>Email: " + resultsObj.oc_email + "</li>";
	}
	else{
		stringHTML+="<ul><li>Email: " + "n/a" + "</li>";
	}
	if(resultsObj.website){
		stringHTML+="<li> Website: " + resultsObj.website + "</li>";
	}
	else{
		stringHTML+="<li> Website: " + "n/a" + "</li>";
	}
	if(resultsObj.facebook_id){
		stringHTML+="<li> Facebook: " + resultsObj.facebook_id + "</li>";
	}
	else{
		stringHTML+="<li> Facebook: " + "n/a" + "</li>";
	}
	if(resultsObj.twitter_id){
		stringHTML+="<li> Twitter: " + resultsObj.twitter_id + "</li></ul>";	
	}
	else{
		stringHTML+="<li> Twitter: " + "n/a" + "</li></ul>";	
	}
	if(resultsObj.term_end){
		stringHTML+="<div id= legislatorEnd> Term End: " + resultsObj.term_end+"</div></div>";
	}
	else{
		stringHTML+="<div id= legislatorEnd> Term End: " + "n/a"+"</div></div>";
	}
	return stringHTML
}

var handleResponse = function(apiResponse) {
	var legislatorHTMLString = ''
	var legislatorNode = document.querySelector('#legislatorContainer')
	for(var i = 0; i<apiResponse.results.length; i++){
		legislatorHTMLString += getLegislatorBox(apiResponse.results[i])
	}
	legislatorNode.innerHTML = legislatorHTMLString
	var promis2 = $.getJSON()


}
var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators')

promise.then(handleResponse)