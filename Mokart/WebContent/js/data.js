function category(id,name,count,img,age){
	this.id=id;
	this.name=name;
	this.count=count;
	this.img=img;
	this.age=age;
	
	
	
}

function category_details(){
	var furniture=new category(101,"Furniture",101,"","");
	var mob=new category(100,"Mobiles and Tablets",100,"","");
	var cars=new category(102,"Cars",102,"","");
	var bikes=new category(103,"Bikes",103,"","");
	var homes=new category(104,"Homes",104,"","");
}

function Furniture(f_type,f_name,f_count,f_img,f_age){
	this.f_type=f_type;
	this.f_name=f_name;
	this.f_count=f_count;
	this.f_img=f_img;
	this.f_age=f_age;
}

function furniture_details(){
	var bed=new Furniture("Bed","Beds",100,"","");
	var table=new Furniture("Table", "Tables", 101, "","");
	var chair=new Furniture("Chair","Chairs",102,"","");
	var cupboard=new Furniture("Cupboard","Cupboards",103,"","");
}

function Mobile(m_type,m_brand,m_modelNo,m_img,m_age){
	this.m_type=m_type;
	this.m_brand=m_brand;
	this.m_modelNo=m_modelNo;
	this.m_img=m_img;
	this.m_age=m_age;
}

function mobile_details(){
	var Apple=new Mobile("Tablet","Apple","","","");
	var IPhone=new Mobile("Mobile","Apple","","","");
	var Nokia=new Mobile("Mobile","Nokia","","","");
	var Samsung=new Mobile("Mobile","Samsung","","","");
	var Motorola=new Mobile("Mobile","Motorola","","","");
	var MicroMax=new Mobile("Mobile","MicroMax","","","");
	var Karbonn=new Mobile("Mobile","Karbonn","","","");
	var Nexus=new Mobile("Tablet","Nexus","","","");
}

function Cars(c_type,c_brand,c_model,c_img,c_age){
	this.c_type=c_type;
	this.c_brand=c_brand;
	this.c_model=c_model;
	this.c_img=c_img;
	this.c_age=c_age;
}

function car_details(){
	var Merc_s=new Cars("Sedan","Mercedes","","","");
	var Merc_h=new Cars("Hatchback","Mercedes","","","");
	var BMW=new Cars("Sedan","BMW","","","");
	var Suzuki=new Cars("Hatchback","Suzuki","Swift","","");
}

function Bikes(b_type,b_brand,b_model,b_img,b_age){
	this.b_type=b_type;
	this.b_brand=b_brand;
	this.b_model=b_model;
	this.b_img=b_img;
	this.b_age=b_age;
}

function bike_details(){
	var Suzuki_access=new Cars("Moped","Suzuki","Access","","");
	var TVS_scooty=new Cars("Moped","TVS","Scooty","","");
	var Honda_activa=new Cars("Moped","Honda","Activa","","");
	var Hero =new Cars("Bike","Hero","Hero-Honda","","");
}

function Homes(h_type,h_area,h_city,h_state,h_price,h_date,h_img){
this.h_type=h_type;
this.h_area=h_area;
this.h_city=h_city;
this.h_state=h_state;
this.h_price=h_price;
this.h_date=h_date;
this.h_img=h_img;


//sorting function low to high
this.sortprice_low=function(s)
{
	document.write("The details of employee according to sorted price are as follows:<br>");
	console.log(s.h_price);
	s.sort(function(a, b){return a.h_price-b.h_price});
	
	document.write("Id: "+s[0].h_type+", Name: "+s[0].h_area+", Salary: "+s[0].h_city+", Dept_Id: "+s[0].h_state+", Price: "+s[0].h_price +", Date:"+s[0].h_date +"," +s[0].h_img  );
	document.write("<br>Id: "+s[1].h_type+", Name: "+s[1].h_area+", Salary: "+s[1].h_city+", Dept_Id: "+s[1].h_state+", Price: "+s[1].h_price +", Date:"+s[1].h_date +"," +s[1].h_img );
	document.write("<br>Id: "+s[2].h_type+", Name: "+s[2].h_area+", Salary: "+s[2].h_city+", Dept_Id: "+s[2].h_state+", Price: "+s[2].h_price +", Date:"+s[2].h_date +"," +s[2].h_img );
	}

// sort high to low
this.sortprice_high=function(s)
{
	document.write("The details of employee according to sorted high to low price are as follows:<br>");
	console.log(s.h_price);
	s.sort(function(a, b){return b.h_price-a.h_price});
	
	document.write("Id: "+s[0].h_type+", Name: "+s[0].h_area+", Salary: "+s[0].h_city+", Dept_Id: "+s[0].h_state+", Price: "+s[0].h_price +", Date:"+s[0].h_date +"," +s[0].h_img  );
	document.write("<br>Id: "+s[1].h_type+", Name: "+s[1].h_area+", Salary: "+s[1].h_city+", Dept_Id: "+s[1].h_state+", Price: "+s[1].h_price +", Date:"+s[1].h_date +"," +s[1].h_img );
	document.write("<br>Id: "+s[2].h_type+", Name: "+s[2].h_area+", Salary: "+s[2].h_city+", Dept_Id: "+s[2].h_state+", Price: "+s[2].h_price +", Date:"+s[2].h_date +"," +s[2].h_img );
	}

// sort date
this.sortfunc=function(s)
{
	document.write("The details of employee according to sorted price are as follows:<br>");
	s.sort(function(a, b){return a.h_date-b.h_date});
	
	document.write("Id: "+s[0].h_type+", Name: "+s[0].h_area+", Salary: "+s[0].h_city+", Dept_Id: "+s[0].h_state+", Price: "+s[0].h_price +", Date:"+s[0].h_date  );
	document.write("<br>Id: "+s[1].h_type+", Name: "+s[1].h_area+", Salary: "+s[1].h_city+", Dept_Id: "+s[1].h_state+", Price: "+s[1].h_price +", Date:"+s[1].h_date);
	document.write("<br>Id: "+s[2].h_type+", Name: "+s[2].h_area+", Salary: "+s[2].h_city+", Dept_Id: "+s[2].h_state+", Price: "+s[2].h_price +", Date:"+s[2].h_date);
	}
}

function home_details(){
	var home1=new Homes("Row-House","Baner","Pune","Maharashtra","101","10-05-2015","../images/h_1.jpg");
	var home2=new Homes("Stanalone-Apartment","Baner","Pune","Maharashtra","99","03-10-2014","../images/h_2.jpg");
	var home3=new Homes("Society-Apartment","Baner","Pune","Maharashtra","10","21-04-2016","../images/h_3.jpg");
	

    var home = [home1,home2,home3];
   // return home;
   var sort_basis=document.getElementById("sort_basis").value;
    
   if(sort_basis=="date")
	  {
	   
	   }
   if(sort_basis=="l_price")
   {
	   home1.sortprice_low(home);
   
   }  
   if(sort_basis=="h_price")
   {
	   home1.sortprice_high(home);
   
   }  
    
}

//sort class
//function sortfun(s_cat,s_order){
//	this.s_cat=s_cat;
//	this.s_order=s_order;
	
	
//}
//function sort_op() {
	
	//var sort_basis=document.getElementById("sort_basis").value;
	//var cat=document.getElementById("category").value;
	//obj of homes class
	//var obj=new Homes();
	
	//if(sort_basis=="price" && cat=="home")
		//{
		//obj.sortprice(home);
		//}console.log(obj.h_price);
	
//}





