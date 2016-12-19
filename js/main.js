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
}


$(calculate());
