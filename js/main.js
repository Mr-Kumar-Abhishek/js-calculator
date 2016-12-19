

function joinInEquation(equation, allDigits, operate){
	if (equation == "0" || equation == ""){
		$("#eq-entry").val(allDigits + operate );
	}else {
		$("#eq-entry").val( equation + allDigits + operate);
	}
}



function operatorInput(){
	console.log("operatorInput() running ....");
	$(".op").click(function(){
		
		var operate = $(this).attr("value");
		var allDigits = $("#digits-entry").val();
		var equation = $("#eq-entry").val();
		
		joinInEquation(equation, allDigits, operate);
		
		$("#digits-entry").val("0");
	});
}

function numberClear() {
	console.log("numberClear() running ...");
	$(".clearer").click(function(){
		if($(this).attr("value") == "ac"){
			$("#eq-entry").val("0");
		}
		
		$("#digits-entry").val("0");
	});
}

function numberInput(){
	console.log("Running Number Input")
	$(".num").click(function(){
		console.log("num clicked");
		
		var digit = $(this).attr("value");
		console.log(digit);
		
		var digitEntry = $("#digits-entry").val();
		console.log(digitEntry);
		
		if ( (digit == "." && digitEntry == "0") || (digit == "." && digitEntry == "") ) {
			$("#digits-entry").val( "0" + digit);
		}
		else if (digitEntry == "0") {
			$("#digits-entry").val(digit);
		}
		else {
			$("#digits-entry").val(digitEntry + digit);
		}
	});
}


function calculate() {
	console.log("Running Calculate");
	numberInput();
	operatorInput();
	numberClear();
}


$(calculate());
