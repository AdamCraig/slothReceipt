$(document).ready(function() {

 $("form#info").submit(function(event){
	var name = $("#name").val();
	var address = $("#address").val();
	$("#receiptname").text(name);
	$("#receiptaddress").text(address);
	$(".receipt").show();

	event.preventDefault();

	});
});
