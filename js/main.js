function numberInput(){
	console.log("Running Number Input")
	$(".num").click(function(){
		console.log("num clicked");
		var digit = $(this).attr("value");
		console.log(digit);
		$("#digits-entry").val($("#digits-entry").val() + digit);
	});
}

function calculate() {
	console.log("Running Calculate");
	numberInput();
}


$(calculate());
