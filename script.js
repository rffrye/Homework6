
// store the value of the input
let city = $("#searchTerm").val();
// store api key
const apiKey = "&appid=957c40c40e959ff7f4bd70a494cfc79a";

let date = new Date();

$("#searchTerm").keypress(function(event) { 
	
	if (event.keyCode === 13) { //if user hits enter key.  Found on stackoverflow.
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});

$("#searchBtn").on("click", function() {

    $('#forecastH5').addClass('show');
  
    // get the value of the input from user
    city = $("#searchTerm").val();

     // clear input box
    $("#searchTerm").val("");  

});