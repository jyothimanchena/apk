 var PARSE_APP = "FAbluZyN0hpXGpudGXrt9WOgvUQCxey3KEGALLle";
    var PARSE_JS = "diTLB99p5GHZED8SDzZ4ysNMMyXTXzJOcJi2Qww6";
	
			var locationtitle=new Array();
			var locationlogo=new Array();
			var locationaddress1=new Array();
			var locationaddress2=new Array();
			var locationstreet=new Array();
			var locationtown=new Array();
			var locationzip=new Array();
			var locationCountry=new Array();
			var locationId=new Array();
			var locationurl=new Array();
	         var add1Style=new Array();
			 var add2Style=new Array();
			 var locationst=new Array();
			 var locationtwn=new Array();
			 var locationgap=new Array();
			 var locationctry=new Array();
			 var  locationbr=new Array();
			 var locationimg=new Array();
			 var locationzipcode=new Array();
			 var searchItem=new Array();
	var id,latitude,longitude;
	/* function locationFunction(){
		 Parse.initialize(PARSE_APP,PARSE_JS);
		 var SearchlocItem = Parse.Object.extend("Location");
         var SearchlocQuery = new Parse.Query(SearchlocItem);
		 SearchlocQuery.find().then(function(result){
		// console.log(result);
		 localStorage.setItem( 'SearchitemIndex',JSON.stringify(result));
		 });
	} */
 function locationFunction()
	{      
       //getid from url
	   	localStorage.clear();
	   var query = location.search.substr(1);
       var idresult = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        idresult[item[0]] = decodeURIComponent(item[1]);
		id=idresult[item[0]];
		});
	   
	   Parse.initialize(PARSE_APP,PARSE_JS);
		 var SearchlocItem = Parse.Object.extend("Location");
         var SearchlocQuery = new Parse.Query(SearchlocItem);
		 SearchlocQuery.find().then(function(result1){
	//console.log(result1);
	 for(var i=0;i<result1.length;i++){
	      locationtitle[i]=result1[i].get("Name");
		  locationlogo[i]=result1[i].get("Logo");
		  locationaddress1[i]=result1[i].get("Address1");
		  locationaddress2[i]=result1[i].get("Address2");
		  locationstreet[i]=result1[i].get("Street");
		  locationtown[i]=result1[i].get("Town");
		  locationzip[i]=result1[i].get("zipcode");
		  locationCountry[i]=result1[i].get("Country");
		  locationId[i]=result1[i].id;
		  var json={
			  "Name":locationtitle[i],
			  "Logo":locationlogo[i],
			  "Address1":locationaddress1[i],
			  "Address2":locationaddress2[i],
			  "Street":locationstreet[i],
			  "Town":locationtown[i],
			  "zipcode":locationzip[i],
			  "Country":locationCountry[i],
			  "id":locationId[i]
		  }
		  searchItem.push(json);
	 }
		 
			//console.log(searchItem)
		  localStorage.setItem( 'SearchitemIndex',JSON.stringify(searchItem));
		 });
		 var listdir;
		 var listlocations=" ";
		 //check for location exist or not
		/* var hotelDetails=localStorage.getItem('tempid');
		if(hotelDetails!=null){
			
			var hRes=JSON.parse(hotelDetails);
			
			  //LocId=hRes[0].objectId; 
			//  alert(hRes)
			  //alert(id) */
 	/* if(id!="undefined"){	  
	     Parse.initialize(PARSE_APP,PARSE_JS);
		 var hotellocItem = Parse.Object.extend("Location");
         var hotellocQuery = new Parse.Query(hotellocItem);
		 hotellocQuery.equalTo("objectId",id);
		 hotellocQuery.find().then(function(hotelresult){
			
			     Loctitle=hotelresult[0].get("Name");
				 Loclogo=hotelresult[0].get("Logo");
				 Locaddress1=hotelresult[0].get("Address1");
				 Locaddress2=hotelresult[0].get("Address2");
				 Locstreet=hotelresult[0].get("Street");
				 Loctown=hotelresult[0].get("Town");
				 Loczip=hotelresult[0].get("zipcode");
				 Loccountry=hotelresult[0].get("Country");
				 LocId=hotelresult[0].id;
				 console.log(Loclogo)
				 if(Loclogo!=undefined){
			  Locurl=Loclogo._url;
			  }
			  else{
				  locationimg="opacity:0"
			  }
			   if((Locaddress1==undefined)||(Locaddress1==""))
				 {
					 add1Style="display:none;"
					
					 
				 }
				 else{
					 add1Style="display:show;"
				 }
				 if((Locaddress2==undefined)||(Locaddress2==""))
				 {
					 add2Style="display:none;"
					
					 
				 }
				 else{
					 add2Style="display:show;"
				 }
				 if((Locstreet==undefined)||(Locstreet=="")){
					 locationst="display:none;";
					locationgap="display:none";
		          }
				  else{
					  locationst="";
				  }
		if(((Locstreet=="")&&(Loctown==""))||((Locstreet==undefined)&&(Loctown==undefined))){
			locationbr="display:none";
		}
		if((Locstreet=="")||(Loctown=="")){
			locationgap="display:none";
		}		  	
		if((Loctown==undefined)||(Loctown=="")){
					 locationtwn="display:none;";
					locationgap="display:none";
		          }
				  else{
					  locationtwn="";
				  }
		if((Loczip==undefined)||(Loczip=="")){
					 locationzipcode="display:none;";
		          }else{
					  locationzipcode="";
				  }
		if((Loccountry==undefined)||(Loccountry=="")){
					 locationctry="display:none;";
		          }else{
					  locationctry="";
				  }
			  
			listdir = "<div class='row location5' ><div class='col s3' ><div class='logo-img'><img  class='locationimg' style='"+locationimg+"' src='"+Locurl+"'/></div></div><div class='col s7' ><p > <b style='font-size:13px;' >"+Loctitle+" </br> </p>"+"<span style="+add1Style+">"+Locaddress1+"</span><br style="+add2Style+">"+
			   "<span style="+add2Style+">"+Locaddress2+"</span><br style="+add2Style+">"+
			   "<span style="+locationst+"> "+Locstreet+"</span><span style='"+locationgap+"'>, </span><span style="+locationtwn+">"+Loctown+"</span></br style="+locationbr+"><span>"+Loczip+"</span><br style="+locationctry+" >"+
			   "<span style="+locationctry+">"+Loccountry+"</span></div>"+
				"<div class='col s2'><a href='directories.html?id="+LocId+"'> <i class='small material-icons'>input</i> </a></div>"+
				"</div>";
				 $("#locations").append(listdir);
				 
			 
		 });
			 
			     
		}else{ */
		var options = { enableHighAccuracy: true , timeout: 2000 };
			  if ( navigator.geolocation )
				{
					//navigator.geolocation.getCurrentPosition(UserLocation);
					navigator.geolocation.getCurrentPosition(UserLocation,errorLocation,options);
				}
				// Default to Washington, DC
				else{
				//alert("no geolocation");
				console.log("no geolocation")
				
					/* var noresult="<div id='noresult'>"+
				"<div style='margin-top:50px;margin-left:30px;margin-right:30px;padding: 0 75px; '>"+
				"<center ><text class='text-center brand-logo' id='noresult' style='color:#ffffff;font-size: 15px !important;'>"+
				"No local locations currently found.</text></center></div>"+
				"<div style='margin-top:20px;padding: 0 60px; '>"+
				"<center ><text class='text-center brand-logo'  style='color:#ffffff;font-size: 15px !important;'>"+
				"Please enter a search value, or turn on location permissions on your device for this app.</text></center></div>"+
				"</div>"
			  

			       $("#locations").html(noresult);  */
				 }
                
	
       function errorLocation(err){
		  // alert(err.code)
		  /*  alert(err)*/
		//alert(err.code)
		  /* alert('code: '    + err.code    + '\n' +
          'message: ' + err.message + '\n');
		  if(err.code==3){
			  console.log("dfsaf")
			  UserLocation()
		  }else{
		var noresult="<div id='noresult'>"+
				"<div style='margin-top:50px;margin-left:30px;margin-right:30px;padding: 0 75px; '>"+
				"<center ><text class='text-center brand-logo' id='noresult' style='color:#ffffff;font-size: 15px !important;'>"+
				"No local locations currently found.</text></center></div>"+
				"<div style='margin-top:20px;padding: 0 60px; '>"+
				"<center ><text class='text-center brand-logo'  style='color:#ffffff;font-size: 15px !important;'>"+
				"Please enter a search value, or turn on location permissions on your device for this app.</text></center></div>"+
				"</div>"
			  			       $("#locations").html(noresult);  */
		  }	
						//console.log(err.code)
						/* if(( err.code == 2)||(err.code == 1)){
							


						}else {
							if(err.code==3){
								UserLocation();
							}
						}*
				
					} */
	  
		  
		   
		  
		  function UserLocation( position )
      {    
	  //alert(position)
	  $("#noGPS").attr("style","display:none")
	         latitude= position.coords.latitude;
            longitude= position.coords.longitude; 
			Parse.initialize(PARSE_APP,PARSE_JS);
		  var loc = new Parse.GeoPoint(latitude,longitude);
		 var locItem = Parse.Object.extend("Location");
         var locQuery = new Parse.Query(locItem);
		 //locQuery.equalTo("zipcode",id);
		 locQuery.withinMiles('Geopoints',loc,5);
		 locQuery.limit(1000);
		 locQuery.find().then(function(result){
	//console.log(result);
				
		if((result.length)==0){
			var noresult="<div id='noresult'>"+
				"<div style='margin-top:50px;margin-left:30px;margin-right:30px;padding: 0 75px; '>"+
				"<center ><text class='text-center brand-logo' id='noresult' style='color:#ffffff;font-size: 15px !important;'>"+
				"No local locations currently found.</text></center></div>"+
				"<div style='margin-top:20px;padding: 0 60px; '>"+
				"<center ><text class='text-center brand-logo'  style='color:#ffffff;font-size: 15px !important;'>"+
				"Please enter a search value, or turn on location permissions on your device for this app.</text></center></div>"+
				"</div>"
			  

			       $("#locations").html(noresult); 
		}else{
			
			  for(var i=0;i<result.length;i++){
	      locationtitle[i]=result[i].get("Name");
		// console.log(locationtitle[i])
		  locationlogo[i]=result[i].get("Logo");
		  locationaddress1[i]=result[i].get("Address1");
		  locationaddress2[i]=result[i].get("Address2");
		  locationstreet[i]=result[i].get("Street");
		  locationtown[i]=result[i].get("Town");
		  locationzip[i]=result[i].get("zipcode");
		  locationCountry[i]=result[i].get("Country");
		  locationId[i]=result[i].id;
		//  console.log(locationId[i]);
		  
		
		
		
			 if(locationlogo[i]!=undefined){
			  locationurl[i]=locationlogo[i]._url;
			  }
			  else{
				  locationimg[i]="opacity:0"
			  }
			   if((locationaddress1[i]==undefined)||(locationaddress1[i]==""))
				 {
					 add1Style[i]="display:none;"
					
					 
				 }
				 else{
					 add1Style[i]="display:show;"
				 }
				 if((locationaddress2[i]==undefined)||(locationaddress2[i]==""))
				 {
					 add2Style[i]="display:none;"
					
					 
				 }
				 else{
					 add2Style[i]="display:show;"
				 }
				 if((locationstreet[i]==undefined)||(locationstreet[i]=="")){
					 locationst[i]="display:none;";
					locationgap[i]="display:none";
		          }
				  else{
					  locationst[i]="";
				  }
		if(((locationstreet[i]=="")&&(locationtown[i]==""))||((locationstreet[i]==undefined)&&(locationtown[i]==undefined))){
			locationbr[i]="display:none";
		}
		if((locationstreet[i]=="")||(locationtown[i]=="")){
			locationgap[i]="display:none";
		}		  	
		if((locationtown[i]==undefined)||(locationtown[i]=="")){
					 locationtwn[i]="display:none;";
					locationgap[i]="display:none";
		          }
				  else{
					  locationtwn[i]="";
				  }
		if((locationzip[i]==undefined)||(locationzip[i]=="")){
					 locationzipcode[i]="display:none;";
		          }else{
					  locationzipcode[i]="";
				  }
		if((locationCountry[i]==undefined)||(locationCountry[i]=="")){
					 locationctry[i]="display:none;";
		          }else{
					  locationctry[i]="";
				  }
			  
			 listdir = "<div class='row location5' ><div class='col s3' ><div class='logo-img'><img  class='locationimg'style="+locationimg[i]+" src='"+locationurl[i]+"'/></div></div><div class='col s7' ><p > <b style='font-size:13px;' > "+locationtitle[i]+" </br> </p>"+
			   "<span style="+add1Style[i]+">"+locationaddress1[i]+"</span><br style="+add2Style[i]+">"+
			   "<span style="+add2Style[i]+">"+locationaddress2[i]+"</span><br style="+add2Style[i]+">"+
			   "<span style="+locationst[i]+"> "+locationstreet[i]+"</span><span style='"+locationgap[i]+"'>, </span><span style="+locationtwn[i]+">"+locationtown[i]+"</span></br style="+locationbr[i]+"><span>"+locationzip[i]+"</span><br style="+locationctry[i]+" >"+
			   "<span style="+locationctry[i]+">"+locationCountry[i]+"</span></div>"+
				"<div class='col s2'><a href='directories.html?id="+locationId[i]+"'> <i class='small material-icons'>input</i> </a></div>"+
				"</div>";
			
           listlocations=listlocations+listdir;			
		 }
		 $("#locations").append(listlocations);
		}
//console.log(listlocations)
/* var noresultstyle="display:none"
          $('#noresult').attr("style",noresultstyle) */
		  
         });
			
       
		  //var loc = new Parse.GeoPoint(17.45141956,78.38098168);
   }  
   
    $("#noGPS").attr("style","display:show")
/*    event.stopPropagation();  */
//alert(listlocations)

	} 
//Search box	
    
     $('#textbox').on("input",function(event){
	 $("#noGPS").attr("style","display:none")
		     var listdir;
			 var listlocations=" ";
			 var add1Style=new Array();
			 var add2Style=new Array();
			 var locationst=new Array();
			 var locationtwn=new Array();
			 var locationgap=new Array();
			 var locationctry=new Array();
			 var  locationbr=new Array();
			 var locationimg=new Array();
			 var locationzipcode=new Array();
	      var textres = $(this).val();
		  
		    $("#locations").empty();
			/* var SearchlocItem = Parse.Object.extend("Location");
         var SearchlocQuery = new Parse.Query(SearchlocItem);
		 SearchlocQuery.find().then(function(result){
		// console.log(result);
		 localStorage.setItem( 'SearchitemIndex',JSON.stringify(result));
		 }); */
		 
        var val=localStorage.getItem('SearchitemIndex');
	      var result=JSON.parse(val);
		 var res = new RegExp(textres,"i");
		  var resvalue;
		  for(var i=0;i<result.length;i++){
	        if((res.test(result[i].Name))||(res.test(result[i].Address1))||(res.test(result[i].Address2))||(res.test(result[i].Street))||(res.test(result[i].Town))||(res.test(result[i].zipcode))||(res.test(result[i].id)))
			  {
			locationtitle[i]=result[i].Name;
			  locationlogo[i]=result[i].Logo;
			  locationaddress1[i]=result[i].Address1;
			  locationaddress2[i]=result[i].Address2;
			  locationstreet[i]=result[i].Street;
			  locationtown[i]=result[i].Town;
			  locationzip[i]=result[i].zipcode;
			   locationCountry[i]=result[i].Country
			  locationId[i]=result[i].id;
			  if(locationlogo[i]!=undefined){
			  locationurl[i]=locationlogo[i].url;
			  }
			  else{
				  locationimg[i]="opacity:0"
			  }
			   if((locationaddress1[i]==undefined)||(locationaddress1[i]==""))
				 {
					 add1Style[i]="display:none;"
					
					 
				 }
				 
				 if((locationaddress2[i]==undefined)||(locationaddress2[i]==""))
				 {
					 add2Style[i]="display:none;"
					
					 
				 }
				
				
				 if((locationstreet[i]==undefined)||(locationstreet[i]=="")){
					 locationst[i]="display:none;";
					locationgap[i]="display:none";
		          }
				  else{
					  locationst[i]="";
				  }
		if(((locationstreet[i]=="")&&(locationtown[i]==""))||((locationstreet[i]==undefined)&&(locationtown[i]==undefined))){
			locationbr[i]="display:none";
		}
		if((locationstreet[i]=="")||(locationtown[i]=="")){
			locationgap[i]="display:none";
		}		  	
		if((locationtown[i]==undefined)||(locationtown[i]=="")){
					 locationtwn[i]="display:none;";
					locationgap[i]="display:none";
		          }
				  else{
					  locationtwn[i]="";
				  }
		if((locationzip[i]==undefined)||(locationzip[i]=="")){
					 locationzipcode[i]="display:none;";
		          }else{
					  locationzipcode[i]="";
				  }
		if((locationCountry[i]==undefined)||(locationCountry[i]=="")){
					 locationctry[i]="display:none;";
		          }else{
					  locationctry[i]="";
				  }
			  
			//  console.log(locationId);
			   listdir = "<div class='row location5' ><div class='col s3' ><div class='logo-img'><img  class='locationimg'style="+locationimg[i]+" src='"+locationurl[i]+"'/></div></div><div class='col s7' ><p > <b style='font-size:13px;' > "+locationtitle[i]+" </br> </p>"+
			   "<span style="+add1Style[i]+">"+locationaddress1[i]+"</span><br style="+add2Style[i]+">"+
			   "<span style="+add2Style[i]+">"+locationaddress2[i]+"</span><br style="+add2Style[i]+">"+
			   "<span style="+locationst[i]+"> "+locationstreet[i]+"</span><span style='"+locationgap[i]+"'>, </span><span style="+locationtwn[i]+">"+locationtown[i]+"</span></br style="+locationbr[i]+"><span>"+locationzip[i]+"</span><br style="+locationctry[i]+" >"+
			   "<span style="+locationctry[i]+">"+locationCountry[i]+"</span></div>"+
				"<div class='col s2'><a href='directories.html?id="+locationId[i]+"'> <i class='small material-icons'>input</i> </a></div>"+
				"</div>";
			   listlocations=listlocations+listdir;			
			  }
				  
		  }
		  if(listlocations==" "){
			  var noresult="<center><text class='text-center brand-logo' id='noresult' style='color:#ffffff;'> No results were found</text></center>"
			   $("#locations").append(noresult);
			  
		  }
		   else{
			  
			    $("#locations").append(listlocations);
		   }
		  event.stopPropagation();
	});
 /*  $(window).unload(function(){
  localStorage.clear();
});        
 */