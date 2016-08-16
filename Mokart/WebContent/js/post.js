/*
 * name:
 * category:
 * image:
 * price:
 * mob no:
 * submit:
 * 
 */



function post(){
	
	var count=1;
	var name,cat,price,mob,submit=0;
	console.log
	console.log("In post ");
	

	var name = document.getElementById("name").value;
	var cat = document.getElementById("cat").value;

	var price = parseInt(document.getElementById("price").value);
    var mob = parseInt(document.getElementById("mob").value);
   

	
	var testObject =[{ name: name, cat:cat , price: price , mob: mob}];
	
	
	localStorage.setItem(count, JSON.stringify(testObject));
	var retrievedMovieArray = JSON.parse(localStorage.getItem(count));
	alert("Ad added successfully!!!");
	for (var p in retrievedMovieArray) {

		document.write(p +':'+'<br>'+ testObject[p].name +'<br>'+testObject[p].cat +'<br>'+testObject[p].price);
	}}







