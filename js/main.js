
var eqPushed = false;

function joinInEquation(equation, allDigits, operate){
	if (equation == "0" || equation == ""){
		$("#eq-entry").val(allDigits + operate );
	}else {
		$("#eq-entry").val( equation + allDigits + operate);
	}
}



function equate(){
	console.log("equate() ran...");
	
	$("button#equate").click(function(){
		
		console.log("equate clicked...");
		
		var firstPartEquation = $("#eq-entry").val();
		var lastPartEquation = $("#digits-entry").val();
		
		if ( firstPartEquation != "0" && lastPartEquation != "0" && eqPushed == false){
			var fullEquation = firstPartEquation + lastPartEquation;
			$("#eq-entry").val(fullEquation);
			var ans = math.eval(fullEquation);
			$("#digits-entry").val(ans);
			eqPushed = true;
		}else{
			console.log("equated on default ...");
		}
	});
}


function operatorInput(){

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

function totalClear(){
	$("#digits-entry").val("0");
	$("#eq-entry").val("0");
}

function justClear(){
	$("#eq-entry").val("0");
}

function numberInput(){
	console.log("Running Number Input")
	$(".num").click(function(){
		console.log("num clicked");
		
		if (eqPushed){ 
			totalClear(); 
			eqPushed = false;
		}
		
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
	equate();
}


$(calculate());
