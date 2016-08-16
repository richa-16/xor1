function Data(h_type,h_area,h_city,h_state,h_price,h_date,h_img,h_cat)
{
	this.h_type=h_type;
	this.h_area=h_area;
	this.h_city=h_city;
	this.h_state=h_state;
	this.h_price=h_price;
	this.h_date=h_date;
	this.h_img=h_img;
	this.h_cat=h_cat;

	
	/*this.sortprice_low=function(s)
	{
		document.write("The details of employee according to sorted price are as follows:<br>");
		console.log(s.h_price);
		s.sort(function(a, b){return a.h_price-b.h_price});
		if(s.h_cat=="bike")
			{
		document.write("Id: "+s[0].h_type+", Name: "+s[0].h_area+", Salary: "+s[0].h_city+", Dept_Id: "+s[0].h_state+", Price: "+s[0].h_price +", Date:"+s[0].h_date +"," +s[0].h_img  );
		document.write("<br>Id: "+s[1].h_type+", Name: "+s[1].h_area+", Salary: "+s[1].h_city+", Dept_Id: "+s[1].h_state+", Price: "+s[1].h_price +", Date:"+s[1].h_date +"," +s[1].h_img );
		document.write("<br>Id: "+s[2].h_type+", Name: "+s[2].h_area+", Salary: "+s[2].h_city+", Dept_Id: "+s[2].h_state+", Price: "+s[2].h_price +", Date:"+s[2].h_date +"," +s[2].h_img );
		}}*/
	
}

function data_details(){
	var home1=new Data("Row-House","Baner","Pune","Maharashtra","101","10-05-2015","../images/h_1.jpg","home");
	var home2=new Data("Stanalone-Apartment","Baner","Pune","Maharashtra","99","03-10-2014","../images/h_2.jpg","home");
	var home3=new Data("Society-Apartment","Baner","Pune","Maharashtra","10","21-04-2016","../images/h_3.jpg","home");
	
	//bike
	var bi=new Data("Moped","Baner","Pune","Maharashtra","123","10-05-2014","../images/h_1.jpg","bike");
	var TVS_scooty=new Data("Moped","Baner","Pune","Maharashtra","99","03-10-2014","../images/h_2.jpg","bike");
	var Honda_activa=new Data("Moped","Baner","Pune","Maharashtra","919","03-10-2014","../images/h_2.jpg","bike");
	var Hero =new Data("Bike","Baner","Pune","Maharashtra","199","03-10-2014","../images/h_2.jpg");
	//car
	var Merc_s=new Data("Sedan","Baner","Pune","Maharashtra","92","03-10-2014","../images/h_2.jpg","car");
	var Merc_h=new Data("Hatchback","Baner","Pune","Maharashtra","199","03-10-2014","../images/h_2.jpg","car");
	var BMW=new Data("Sedan","Baner","Pune","Maharashtra","9","03-10-2014","../images/h_2.jpg","car");
	var Suzuki=new Data("Hatchback","Baner","Pune","Maharashtra","919","03-10-2014","../images/h_2.jpg","car");
	
	//mobile
	var Apple=new Data("Tablet","Baner","Pune","Maharashtra","10","03-10-2014","../images/h_2.jpg" ,"mobile");
	var IPhone=new Data("Mobile","Baner","Pune","Maharashtra","9","03-10-2014","../images/h_2.jpg","mobile");
	var Nokia=new Data("Mobile","Baner","Pune","Maharashtra","990","03-10-2014","../images/h_2.jpg","mobile");
	var Samsung=new Data("Mobile","Baner","Pune","Maharashtra","199","03-10-2014","../images/h_2.jpg","mobile");
	var Motorola=new Data("Mobile","Baner","Pune","Maharashtra","909","03-10-2014","../images/h_2.jpg","mobile");
	var MicroMax=new Data("Mobile","Baner","Pune","Maharashtra","992","03-10-2014","../images/h_2.jpg","mobile");
	var Karbonn=new Data("Mobile","Baner","Pune","Maharashtra","299","03-10-2014","../images/h_2.jpg","mobile");
	var Nexus=new Data("Tablet","Baner","Pune","Maharashtra","993","03-10-2014","../images/h_2.jpg","mobile");
	
	//furniture
	var bed=new Data("Bed","Baner","Pune","Maharashtra","99","03-10-2014","../images/h_2.jpg","furniture");
	var table=new Data("Table", "Baner","Pune","Maharashtra","99","03-10-2014","../images/h_2.jpg","furniture");
	var chair=new Data("Chair","Baner","Pune","Maharashtra","99","03-10-2014","../images/h_2.jpg","furniture");
	var cupboard=new Data("Cupboard","Baner","Pune","Maharashtra","99","03-10-2014","../images/h_2.jpg","furniture");
	
	
	

    var home = [home1,home2,home3,bi, TVS_scooty,Honda_activa,Hero,Merc_s,Merc_h,BMW,Suzuki,Apple,IPhone,Nokia,Samsung,Motorola,MicroMax,Karbonn,Nexus,bed,table,chair,cupboard];
   // return home;
   var sort_basis=document.getElementById("sort_basis").value;
   var sort_cat=document.getElementById("category").value; 
/*   if(sort_basis=="date")
	  {
	   
	   }
   if(sort_basis=="l_price" && sort_cat=="home")
   {
	   home1.sortprice_low(home);
   
   }  
   if(sort_basis=="h_price")
   {
	   home1.sortprice_high(home);
   
   }*/
   
   
   if(sort_basis=="l_price")
   {
	   //home1.sortprice_low(home);
   home.sort(function(a, b){return a.h_price-b.h_price});
	   
   }  
   
   if(sort_basis=="h_price")
   {
	   //home1.sortprice_low(home);
   home.sort(function(a, b){return b.h_price-a.h_price});
   
	   
   }
   
   //var para = document.createElement("div");
   //var s=document.getElementById("dis");
/*   var node = document.createTextNode(home[0].h_type+"<br>"+"Area : "+home[0].h_area+"<br>City : "+home[0].h_city+"<br>"+"State : "+home[0].h_state+"<br>"+"Price : "+home[0].h_price+"<br>"+"Date : "+home[0].h_date+"<br>"+"Category : "+home[0].h_cat+"<br><br>");
   para.appendChild(node);
   s.parentNode.insertBefore(para,s);
  */ 
   for(var k=1;k<home.length;k++)
	{
	   if(home[k].h_cat==sort_cat)
	   {
		   
		   var old=document.getElementById("my").innerHTML;
		   
		   document.getElementById("my").innerHTML="<div>"+old+"</div>"+"<div>"+home[k].h_type+"<br>Area : "+home[k].h_area+"<br>City : "+home[k].h_city+"<br>"+"State : "+home[k].h_state+"<br>"+"Price : "+home[k].h_price+"<br>"+"Date : "+home[k].h_date+"<br>"+"Category : "+home[k].h_cat+"br"+home[k].h_img+" <br><br>  </div>";
		   
		/*   para = document.createElement("div");
		   s=document.getElementById("dis");
		   node = document.createTextNode(home[k].h_type+"<br>"+"Area : "+home[k].h_area+"<br>City : "+home[k].h_city+"<br>"+"State : "+home[k].h_state+"<br>"+"Price : "+home[k].h_price+"<br>"+"Date : "+home[k].h_date+"<br>"+"Category : "+home[k].h_cat+"<br><br>");
		   para.appendChild(node);
		   s.parentNode.insertBefore(para,s);
	 */
		}
	}
   
}