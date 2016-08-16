function func() {
	var str=document.getElementById("mail").value;
	var a=str.indexOf("@");
	var b=str.lastIndexOf(".");
	var len=str.length;
	if(a== -1 && ((str.length-b-1)>2))
		{
		alert("email is not valid");
		}
	else
		alert("success");
}