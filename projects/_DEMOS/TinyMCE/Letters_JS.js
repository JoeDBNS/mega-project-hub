var hasEdit = 0;

$(document).ready(function() {
	checkSecondAddress();
	GetRenewalYearMinusOne();
	$('.formatMoney').mask("#,##0.00", {reverse: true});
});

function checkSecondAddress() {
	try {
		if ($("#mgt_address1")[0].innerHTML == "<br>" || $("#mgt_address1")[0].innerHTML == "")
			$("#mgt_address1").remove();
	} catch (error) { }
	try {
		if ($("#franchise_address1")[0].innerHTML == "<br>" || $("#franchise_address1")[0].innerHTML == "")
			$("#franchise_address1").remove();
	} catch (error) { }
	try {
		if ($("#lawyer_address1")[0].innerHTML == "<br>" || $("#lawyer_address1")[0].innerHTML == "")
			$("#lawyer_address1").remove();
	} catch (error) { }
}

function GetRenewalYearMinusOne() {
	try {
		var getRenewalYear = $('.dateMinusOne').html().split(', ')[1];
		var renewalYearMinisOne = parseInt(getRenewalYear) - 1;
		$('.dateMinusOne').html(renewalYearMinisOne);
	} catch (error) { }
}

$("#printContent").on("click", function() {
	$("#printContent").hide();
	$("#tinyTextarea_parent").show();

	$("#tinyTextarea_ifr")[0].contentDocument.getElementById("tinymce").innerHTML = $("#printContent")[0].innerHTML;
	hasEdit = 1;
});

$("#header").on("click", function() {
	if (hasEdit == 1) {
		$("#printContent")[0].innerHTML = $("#tinyTextarea_ifr")[0].contentDocument.getElementById("tinymce").innerHTML;

		$("#tinyTextarea_parent").hide();
		$("#printContent").show();

		checkSecondAddress();
	}
});

$("#select_addressee").on("change", function() {
	if ($("#select_addressee")[0].value == "Franchise") {
		$(".lawyer_contact_info").hide();
		$(".franchise_contact_info").show();
	}
	else if ($("#select_addressee")[0].value == "Lawyer") {
		$(".franchise_contact_info").hide();
		$(".lawyer_contact_info").show();
	}
});