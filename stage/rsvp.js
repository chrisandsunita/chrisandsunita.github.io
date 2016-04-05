function lookup() {
	alert(document.getElementById("rsvpcode").value);
	if (name == " ") {
		document.getElementById("txtHint").innerHTML = "empty";
		return;
	}
	else {
		document.getElementById("txtHint").innerHTML = "<b> Hello world</b> "+name;
	}
}

function lookupcode() {
	var xhttp;
	if (window.XMLHttpRequest) {
	    xhttp = new XMLHttpRequest();
	    } else {
	    // code for IE6, IE5
	    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.getElementById("txtHint").innerHTML = xhttp.responseText;
		}
		else {
			document.getElementById("txtHint").innerHTML = "<b>ERROR: HTTP "+xhttp.status+"</b>";
		}
	};
	var code = document.getElementById("rsvpcode").value;

	code = code.replace(" ","_").toLowerCase() +".rsvp";

	alert(code);
	xhttp.open("GET",code,true);
	xhttp.send();

}