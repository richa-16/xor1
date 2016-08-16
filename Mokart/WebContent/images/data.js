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

function Homes(h_type,h_area,h_city,h_state,h_price,h_img){
this.h_type=h_type;
this.h_area=h_area;
this.h_city=h_city;
this.h_state=h_state;
this.h_price=h_price;
this.h_img=h_img;
}

function home_details(){
	var home1=new Homes("Row-House","Baner","Pune","Maharashtra",10000000,"");
	var home2=new Homes("Stanalone-Apartment","Baner","Pune","Maharashtra",10000000,"");
	var home3=new Homes("Society-Apartment","Baner","Pune","Maharashtra",10000000,"");
}