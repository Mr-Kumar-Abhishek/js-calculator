
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
	
	$("button#equals").click(function(){
		
		console.log("equate clicked...");
		
		var firstPartEquation = $("#eq-entry").val();
		var lastPartEquation = $("#display").val();
		
		if ( firstPartEquation != "0" && lastPartEquation != "0" && eqPushed == false){
			var fullEquation = firstPartEquation + lastPartEquation;
			$("#eq-entry").val(fullEquation);
			var ans = math.eval(fullEquation);
			var ansOut = ans.toString();
			if (ansOut.length >= 9 ){
				$("#display").val(ansOut.substring(0,8));
				alert("Answer exceeded the screen size ! The answer displayed is turnicated.");
			}else{
				$("#display").val(ansOut);
			}
			eqPushed = true;
		}else{
			console.log("equated on default ...");
		}
	});
}


function operatorInput(){

	$(".op").click(function(){
		
		var operate = $(this).attr("value");
		var allDigits = $("#display").val();
		var equation = $("#eq-entry").val();
		
		if (eqPushed){
			joinInEquation("0", allDigits, operate);
			eqPushed = false;
		}
		else {
			joinInEquation(equation, allDigits, operate);
		}
		
		$("#display").val("0");
	});
}

function numberClear() {
	console.log("numberClear() running ...");
	$(".clearer").click(function(){
		if($(this).attr("value") == "ac"){
			$("#eq-entry").val("0");
		}
		
		$("#display").val("0");
	});
}

function totalClear(){
	$("#display").val("0");
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
		
		var digitEntry = $("#display").val();
		console.log(digitEntry);
		
		if ( (digit == "." && digitEntry == "0") || (digit == "." && digitEntry == "")) {
			$("#display").val( "0" + digit);
		}
  /*  else if( RegExp('\.').test(digitEntry) == true){
      console.log('did nothing...')
    }*/
		else if (digitEntry == "0") {
			$("#display").val(digit);
		}
		else {
			$("#display").val(digitEntry + digit);
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
