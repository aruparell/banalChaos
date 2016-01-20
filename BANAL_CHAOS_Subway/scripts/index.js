window.onload=function(){

// var myVariable = prompt('Enter A Mood: Party or Zen');
var body=$("#container");
// var Thisparty=$("#Thisparty");


// function party(){


//play diana....

	$(".diana").click(function(){
		$(body).css("background-color","pink");
		$("#willSound").get(0).pause();
		$("#jennaSound").get(0).pause();
		$("#joannaSound").get(0).pause();
		$("#karinaSound").get(0).pause();
		$("#aartiSound").get(0).pause();
		$("#dianaSound").get(0).play();
		// alert("this is working");
	console.log("this is diana");


});

//play jenna...
$(".jenna").click(function(){
		$(body).css("background-color","blue");
		$("#willSound").get(0).pause();
		$("#dianaSound").get(0).pause();
		$("#joannaSound").get(0).pause();
		$("#karinaSound").get(0).pause();
		$("#aartiSound").get(0).pause();
		$("#jennaSound").get(0).play();
		// alert("this is working");
	console.log("this is jenna");


});

//play will
$(".will").click(function(){
		$(body).css("background-color","green");
		$("#jennaSound").get(0).pause();
		$("#dianaSound").get(0).pause();
		$("#joannaSound").get(0).pause();
		$("#karinaSound").get(0).pause();
		$("#aartiSound").get(0).pause();
		$("#willSound").get(0).play();
		// alert("this is working");
	console.log("this is will");


});

//play will
$(".aarti").click(function(){
		$(body).css("background-color","purple");
		$("#jennaSound").get(0).pause();
		$("#dianaSound").get(0).pause();
		$("#joannaSound").get(0).pause();
		$("#karinaSound").get(0).pause();
		$("#willSound").get(0).pause();
		$("#aartiSound").get(0).play();
		// alert("this is working");
	console.log("this is aarti");


});

//play joanna

$(".joanna").click(function(){
		$(body).css("background-color","orange");
		$("#jennaSound").get(0).pause();
		$("#dianaSound").get(0).pause();
		$("#aartiSound").get(0).pause();
		$("#karinaSound").get(0).pause();
		$("#willSound").get(0).pause();
		$("#joannaSound").get(0).play();
		// alert("this is working");
	console.log("this is joanna");


});

//play karina

$(".karina").click(function(){
		$(body).css("background-color","red");
		$("#jennaSound").get(0).pause();
		$("#dianaSound").get(0).pause();
		$("#aartiSound").get(0).pause();
		$("#joannaSound").get(0).pause();
		$("#willSound").get(0).pause();
		$("#karinaSound").get(0).play();
		// alert("this is working");
	console.log("this is joanna");


});

// function zen(){

// 	$(".zen").click(function(){
// 		$(body).css("background-color", "purple");
// 		$("#partySound").get(0).pause();
// 		$("#zenSound").get(0).play();
		
// 		console.log("this is Zen function");

// });

//quiet please...

$(".silence").click(function(){
		$(body).css("background-color", "white");
		// $("#partySound").get(0).pause();
		// $("#zenSound").get(0).pause();
		$("#jennaSound").get(0).pause();
		$("#dianaSound").get(0).pause();
		$("#aartiSound").get(0).pause();
		$("#joannaSound").get(0).pause();
		$("#willSound").get(0).pause();
		$("#karinaSound").get(0).pause();
		
		console.log("QUIET PLEASE");

});
// $(Thisparty).click(function(){
// 	console.log("party has been clicked")
// });






// if (myVariable == "Party"){

// 	party();


// } else if (myVariable == "Zen"){
// 	zen();
// } else alert("Make Up Your Mind")
	
// });

};



