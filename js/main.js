function numberInput(){
	console.log("Running Number Input")
	$(".num").click(function(){
		console.log("num clicked");
		
		var digit = $(this).attr("value");
		console.log(digit);
		
		var digitEntry = $("#digits-entry").val();
		console.log(digitEntry);
		
		if (digit == "." && digitEntry == "") {
			$("#digits-entry").val( "0" + digit);
		}
		else  {
			$("#digits-entry").val(digitEntry + digit);
		}
	});
}

function calculate() {
	console.log("Running Calculate");
	numberInput();
}


$(calculate());
