$(document).ready(function(){

var chosenNumber;

//get the number after the user clicks the submit button
$("#submitBtn").click(function(){
    
	chosenNumber = parseInt($("#numBox").val());
	$('.result').empty();
	createFizzBuzz(chosenNumber);
	
});

function createFizzBuzz(number){	
	for (var counter = 1; counter <= number; counter++) {
		result="";
		if(counter%3==0 && counter%5==0){
			result="Fizz Buzz";
		}else if(counter%3==0){ 
			result="Fizz ";
		}else if(counter%5==0){
			result +="Buzz ";
		}else{ 
			result=counter;
   		}
   			console.log(result);
   			$('.result').append(counter +" : " + result + "<br />");
	}
}

});//end document

