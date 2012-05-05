function fold(categoryid){
	var num_category = document.getElementsByName("category").length;
	for (i = 0; i < num_category; i++){
		document.getElementsByName("category")[i].style.fontWeight = "normal";
		document.getElementsByName("category")[i].style.color = "#000000";
	}
	
	document.getElementById("category" + categoryid).style.fontWeight = "bold";
	document.getElementById("category" + categoryid).style.color = "#B90000";
	
	for (i = 1; i <= num_category; i++){
		var num_sub = document.getElementsByName("subcategory" + i).length;
		for (j = 0; j < num_sub; j++){
			document.getElementsByName("subcategory" + i)[j].style.display = "none";
			document.getElementsByName("subcategory" + i)[j].style.color = "#000000";
		}
	}
	
	var num = document.getElementsByName("subcategory" + categoryid).length;
	for (i = 0; i < num; i++){
		document.getElementsByName("subcategory" + categoryid)[i].style.display = "";
	}
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("contentcontainer").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST","categorylist.php",true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("id=" + categoryid);
}
function subfold(subcategoryid,categoryid){
	var num = document.getElementsByName("subcategory" + categoryid).length;
	for (i = 0; i < num; i++){
		document.getElementsByName("subcategory" + categoryid)[i].style.color = "#000000";
	}
	
	document.getElementById("subcategory" + subcategoryid).style.color = "#B90000";
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("contentcontainer").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST","productlist.php",true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("id=" + subcategoryid);
}
function product(id){
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("contentcontainer").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST","product.php",true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("id=" + id);
}
function payment(){
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("maincontainer").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","payment.php",true);
	xmlhttp.send();
}