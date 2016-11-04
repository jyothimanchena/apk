    var PARSE_APP = "FAbluZyN0hpXGpudGXrt9WOgvUQCxey3KEGALLle";
    var PARSE_JS = "diTLB99p5GHZED8SDzZ4ysNMMyXTXzJOcJi2Qww6";
	var id,LocationStyleid;
		var dirid=new Array();
	
	var locationtitile;
	function myFunction()
  { 
		  $('.mbody').show();
		  $(this).scrollTop(0);
		 
	var query = location.search.substr(1);
       var idresult = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        idresult[item[0]] = decodeURIComponent(item[1]);
		id=idresult[item[0]];
		});
			var hotelresult=localStorage.getItem('Hotel');
			var hRes=JSON.parse(hotelresult);
		
			/* if(navigator.onLine){
				alert("dasfdg")
			} */
			
			
	/* 	if(navigator.onLine){  */
			  if((hRes!=null)&&(hRes.length>0)&&(hRes[0].objectId==id)){
			//localstorage hotel
			localStorage.removeItem('SearchitemIndex')
				showHotel();
			}else{
				
				localStorage.clear();
				
					  
					  LocationFun();
					  
					 //getting hotel info 
					 function LocationFun(){
						 Parse.initialize(PARSE_APP,PARSE_JS);
					   var locItem = Parse.Object.extend("Location");
					   var locQuery = new Parse.Query(locItem);
					   locQuery.equalTo('objectId',id);
					   locQuery.find().then(function(result){
						 
					        if(result[0]=="undefined"||result[0]==null)
								  {
									//getting template
									var tempItem = Parse.Object.extend("Template");
									var tempQuery = new Parse.Query(tempItem);
									tempQuery.equalTo('objectId',id);
								    tempQuery.find().then(function(result){
										  if(result[0]=="undefined"||result[0]==null){
											  localStorage.clear();
											  window.location="home.html"
										  }
										  else{
									localStorage.setItem( 'Hotel',JSON.stringify(result));
									 locationstyle=result[0].get("StyleId");
											 if(locationstyle!=undefined){
												 LocationStyleid=locationstyle.id 
												 BrandStyleFun();
											 }else{
												 DirectoryItemFun();
											 }
										}

									 });
												  
								}
							else{
								/* localStorage.setItem( 'Hotel',JSON.stringify(result));
								  locationstyle=result[0].get("StyleId");
								     LocationStyleid=locationstyle.id  */
									 locationstyle=result[0].get("StyleId");
								  var locationDetail=new Array();
								     LocationStyleid=locationstyle.id 
									 locationtitile=result[0].get("Name");
									 locationcaption=result[0].get("hotelCaption");
									 locationLogo=result[0].get("Logo");
									 locationHotelLogo=result[0].get("hotelLogo");
									 locationMessage=result[0].get("description");
									 locationfooterimg=result[0].get("footerImage");
									 locationfooterText=result[0].get("footerText");
									 locationaddress1=result[0].get("Address1");
									 locationaddress2=result[0].get("Address2");
									 locationstreet=result[0].get("Street");
									 locationtown=result[0].get("Town");
									 locationzip=result[0].get("zipcode");
									 locationcountry=result[0].get("Country");
									 locationgeo=result[0].get("Geopoints");
									 lstyle=result[0].get("StyleId");
									 var parentid=result[0].id;
									
									 var locationjson={
										 "Name":locationtitile,
										 "hotelCaption":locationcaption,
										 "Logo":locationLogo,
										 "hotelLogo":locationHotelLogo,
										 "description":locationMessage,
										 "footerImage":locationfooterimg,
										 "footerText":locationfooterText,
										 "Address1":locationaddress1,
										 "Address2":locationaddress2,
										 "Street":locationstreet,
										 "Town":locationtown,
										 "zipcode":locationzip,
										 "Country":locationcountry,
										 "Geopoints":locationgeo,
										 "StyleId":lstyle,
										 "objectId":parentid
									 }
									 locationDetail.push(locationjson)
									 localStorage.setItem( 'Hotel',JSON.stringify(locationDetail));
									
									BrandStyleFun();
							}
				          })
						  
					 }
					 
						function BrandStyleFun(){	
						
							 if(LocationStyleid!=undefined){
								 Parse.initialize(PARSE_APP,PARSE_JS);
									   var locStyle = Parse.Object.extend("Style");
									   var StyleQuery = new Parse.Query(locStyle);
									   StyleQuery.equalTo('objectId',LocationStyleid);
									   StyleQuery.find().then(function(result1){
										  
										   localStorage.setItem('locationBrandstyle',JSON.stringify(result1));
										   DirectoryItemFun()
									   });
									}
									else{
										DirectoryItemFun()
									}
						}
						  //getting directories
						 function DirectoryItemFun(){
							 Parse.initialize(PARSE_APP,PARSE_JS);
						    var dItem = Parse.Object.extend("DirectoryItem");
							var dItemQuery = new Parse.Query(dItem);
							dItemQuery.limit(1000);
							dItemQuery.include("StyleId")
							dItemQuery.equalTo('LocationId', id);
							dItemQuery.ascending("CustomizedOrder");
							dItemQuery.find({
								success: function(dRes){
									//localStorage.setItem('directory',JSON.stringify(dRes
									     var dirDetails=new Array();
									for(i=0;i<dRes.length;i++){
										dirtitle=dRes[i].get("Title");
									    dircaption=dRes[i].get("Caption");
									    dirdesc=dRes[i].get("Description");
									    dirtiming=dRes[i].get("Timings");
									    dirpicture=dRes[i].get("Picture");
							            dirParentid=dRes[i].get("LocationId");
									    styleid=dRes[i].get("StyleId");
										dirId=dRes[i].get("DirectoryID");
										objId=dRes[i].id;
										var json={
											"Title":dirtitle,
											"Caption":dircaption,
											"Description":dirdesc,
											"Timings":dirtiming,
											"Picture":dirpicture,
											"LocationId":dirParentid,
											"StyleId":styleid,
											"DirectoryID":dirId,
											"objectId":objId
										}
										dirDetails.push(json);
										
									}
									localStorage.setItem('directory',JSON.stringify(dirDetails));
									
									HotelMenuListFun()
								}
									
								
								});
								
							}
							//getting menu icons
							function HotelMenuListFun(){
								Parse.initialize(PARSE_APP,PARSE_JS);
							 var MenuItem = Parse.Object.extend("HotelMenuList");
							   var MenuQuery = new Parse.Query(MenuItem);
							   MenuQuery.equalTo('HotelId',id);
							   MenuQuery.find({
								   success: function(menuRes){
								 localStorage.setItem( 'HotelMenu',JSON.stringify(menuRes));
								   	  
										
										PhonesFun()				
								}
							   });
								
							}
							function PhonesFun(){
						  //getting phones
						  Parse.initialize(PARSE_APP,PARSE_JS);
							 var pItem = Parse.Object.extend("Phones");
							  var pItemQuery = new Parse.Query(pItem);
							  pItemQuery.limit(1000);
							  pItemQuery.equalTo('LocationId', id);
							  pItemQuery.find({
							   success: function(pRes){
								   localStorage.setItem('phones',JSON.stringify(pRes));
							    MenuFun()
							   }
							   });
							  
						  }
							  //geeting menu
							function MenuFun(){
								Parse.initialize(PARSE_APP,PARSE_JS);
							  var mItem = Parse.Object.extend("Menu");
							  var mItemQuery = new Parse.Query(mItem);
							  mItemQuery.limit(1000);
							  mItemQuery.include("StyleID");
							  mItemQuery.equalTo('LocationId', id);
							  mItemQuery.ascending("Sequence");
							  mItemQuery.find({
							   success: function(mRes){
								   //localStorage.setItem('menu',JSON.stringify(mRes))
								   var menuDetails=new Array();
								   for(var i=0;i<mRes.length;i++){
										menuDesc=mRes[i].get("MenuDescription");
										menuSequence=mRes[i].get("MenuSequence");
										menuIcon=mRes[i].get("Icon");
										menuIconSeq=mRes[i].get("IconSequence");
										menuAction=mRes[i].get("IconAction");
										menuActionType=mRes[i].get("ActionType");
										var json={
											"MenuDescription":menuDesc,
											"MenuSequence":menuSequence,
											"Icon":menuIcon,
											"IconSequence":menuIconSeq,
											"IconAction":menuAction,
											"ActionType":menuActionType
										}
										menuDetails.push(json);
								   }
						 localStorage.setItem('menu',JSON.stringify(menuDetails))
								   StyleFun()
								}
							   });
						  }
							  //getting Styles
							function StyleFun(){
								Parse.initialize(PARSE_APP,PARSE_JS);
							  var sItem = Parse.Object.extend("Style");
							  var sItemQuery = new Parse.Query(sItem);
							  sItemQuery.limit(1000);
							  sItemQuery.equalTo('LocationId', id);
							  sItemQuery.find({
							   success: function(sRes){
								   localStorage.setItem('Style',JSON.stringify(sRes));
								   
									showHotel();
							   }
							  });
						  }
							 
						  
						  
							
			 }
			/* else if((hRes!=null)&&(hRes.length>0)&&(hRes[0].objectId==id)){
			//localstorage hotel
					
			  showHotel();
			} */
		
	   function	showHotel(){
		$('.mbody').hide();
				//about hotel
			var hotelresult=localStorage.getItem('Hotel');
			var hRes=JSON.parse(hotelresult);
			
			if(hRes[0]!=null){
				var locationimg,locationhotelimg,loctionBackground,locTextFont,	locationMsg,locFooterBackground,footerimg,locCaptionstyle,locationgap,locationbr;
				 locationtitile=hRes[0].Name;
				 locationcaption=hRes[0].hotelCaption;
				 locationLogo=hRes[0].Logo;
				 locationHotelLogo=hRes[0].hotelLogo;
				 locationMessage=hRes[0].description;
				 locationfooterimg=hRes[0].footerImage;
				 locationfooterText=hRes[0].footerText;
				 locationaddress1=hRes[0].Address1;
				 locationaddress2=hRes[0].Address2;
				 locationstreet=hRes[0].Street;
				 locationtown=hRes[0].Town;
				 locationzip=hRes[0].zipcode;
				 locationcountry=hRes[0].Country;
				 locationgeo=hRes[0].Geopoints;
				 lstyle=hRes[0].StyleId;
				 var parentid=hRes[0].objectId;
		         //id=result[0].get("Directories");
				 var dataurl="https://bnc.lt/a/key_live_hhoW7g0luMxwlGYKg4TelepbrzdSrV36?&param=directories.html?id="+parentid;
				 var maildataurl="https://bnc.lt/a/key_live_hhoW7g0luMxwlGYKg4TelepbrzdSrV36?%26param=directories.html?id="+parentid;
				// var maildataurl= encodeURI(dataurl);
				 //alert(maildataurl)
			//var maildataurl="https%3A%2F%2Fbnc.lt%2Fa%2Fkey_live_hhoW7g0luMxwlGYKg4TelepbrzdSrV36%3F%26param=directories.html%3Fid="+parentid;
				//var maildataurl="<html><a href='www.google.com'>www.google.com</a></html>"
				
		         //id=result[0].get("Directories");
				 //$(".dataurl1").attr("href","#")
				 $("#dataurltwitter").attr("data-url",dataurl)
				  $("#dataurfacebook").attr("data-url",dataurl)
				  /* $(".fbshare").attr("id","www.facebook.com/sharer.php?u="+dataurl); */
				  
				   $("#dataurgoogleplus").attr("data-url",dataurl)
				    $("#dataurlpinterest").attr("data-url",dataurl)
					 $("#dataurllinkedin").attr("data-url",dataurl)
					  $("#dataurlemail").attr("href","mailto:?Content-type=text/html&subject=A Guest Services Directory is being shared with you!&body="+maildataurl)
	           if(locationLogo!=undefined){
					 locationimg=locationLogo.url;
					
					  imgstyle="margin-top:5px;"
						/* 	$('#locationlogo').attr("src",locationimg).attr("style",imgstyle);  */
					$('#locationlogo').attr("src",locationimg)
				 }
				 else{
					  locationimg='display:none;margin-top:0px;margin-bottom:0px !important';
					  	$('#locationlogo').attr("style",locationimg);
				 }
				if(locationHotelLogo!=undefined){
							 locationhotelimg=locationHotelLogo.url;
							 localStorage.setItem('LocationImage',locationhotelimg);
								$('#locationhotellogo').attr("src",locationhotelimg);
						 }
						 else{
							  locationhotelimg='display:none;margin-top:0px;margin-bottom:0px !important';
								$('#locationhotellogo').attr("style",locationhotelimg)
						 }
		
						if((locationaddress1==undefined)||(locationaddress1=="")){
					 locationadd1='display:none;';
		          }else{
					  locationadd1="";
				  }

		if((locationaddress2==undefined)||(locationaddress2=="")){
					 locationadd2="display:none;";
		          }else{
					  locationadd2="";
				  }
				  
        if((locationstreet==undefined)||(locationstreet=="")){
					 locationst="display:none;";
					locationgap="display:none";
		          }
				  else{
					  locationst="";
				  }
		if(((locationstreet=="")&&(locationtown==""))||((locationstreet==undefined)&&(locationtown==undefined))){
			locationbr="display:none";
		}
		if((locationstreet=="")||(locationtown=="")){
			locationgap="display:none";
		}		  	
		if((locationtown==undefined)||(locationtown=="")){
					 locationtwn="display:none;";
					locationgap="display:none";
		          }
				  else{
					  locationtwn="";
				  }
		if((locationzip==undefined)||(locationzip=="")){
					 locationzipcode="display:none;";
		          }else{
					  locationzipcode="";
				  }
		if((locationcountry==undefined)||(locationcountry=="")){
					 locationctry="display:none;";
		          }else{
					  locationctry="";
				  }
				  
					   
								  
						if((locationaddress1==undefined)&&(locationaddress2==undefined)&&(locationstreet==undefined)&&(locationtown==undefined)&&(locationzip==undefined)&&(locationcountry==undefined)){
							locationgeopoints="display:none;";
							$('.mapfun').attr("style",locationgeopoints)
						}		  		  
						if(locationgeo==undefined){
									 locationgeopoints="display:none;";
									 locationlat="";
									 locationlang="";
									 /* style="margin:auto;width:100%"
									 $('#geocss').attr("style",style) */
									 style="col-md-12"
									 addbr="<br>"
									 styleclass="text-center"
									 /* locationadd1="margin-right:60px;" */
									 $('.geocss').attr("class",style)
									 
								  }
								  else{
									  addbr=""
									  locationlat=locationgeo.latitude;
									  locationlang=locationgeo.longitude;
									  locationgeopoints="display:show;";
									  styleclass="text-left"
								  }
						//template view{}
						if(lstyle==undefined){
							
							 localStorage.setItem( 'parentid',JSON.stringify(parentid));
							 localStorage.setItem( 'HotelTitle',JSON.stringify(locationtitile));
							$("#location").html(locationtitile);
							if((locationaddress1==undefined)&&(locationaddress2==undefined)&&(locationstreet==undefined)&&(locationtown==undefined)&&(locationzip==undefined)&&(locationcountry==undefined)){
									locationgeopoints="display:none;";
									$('.mapfun').attr("style",locationgeopoints)
		                         }
								if((locationaddress1==undefined)&&(locationaddress2==undefined)&&(locationstreet==undefined)&&(locationtown==undefined)&&(locationzip==undefined)&&(locationcountry==undefined)&&(locationLogo==undefined)&&(locationHotelLogo==undefined)&&(locationMessage==undefined)){
						locationcontent="display:none;";
						$('.locationcontent').attr("style",locationcontent)
		                    }
						}
						if(lstyle!=undefined){
							
							 var val=localStorage.getItem('locationBrandstyle');
							               var StyleId=JSON.parse(val);
								            
							if(StyleId!=null){
										
					locTitleColor=StyleId[0].hotelTitleColor;

					locTitleFont=StyleId[0].hotelTitleFont;
					 locTitleFontFamily=StyleId[0].hotelTitleFontFamily;
				   locCaptionColor=StyleId[0].hotelCaptionColor;
				    locCaptionFont=StyleId[0].hotelCaptionFont;
					 locCaptionFontFamily=StyleId[0].hotelCaptionFontFamily;
				   locBackground=StyleId[0].LocationBackground;
					locTextBackground=StyleId[0].LocationTextBackground;
					locHtmlColor=StyleId[0].HtmlContentColor;
					locHtmlFont=StyleId[0].HtmlContentFont;
					locFooterBackground=StyleId[0].LocationFooterBackground;
					locAddressFont=StyleId[0].LocationAddressFont;
					locAddressFontColor=StyleId[0].LocationAddressFontColor;
					locAddressFontFamily=StyleId[0].LocationAddressFontFamily;
					locFooterTextFont=StyleId[0].footerFont;
					locFooterTextFontfamily=StyleId[0].footerCaptionFamily;
					locFooterTextColor=StyleId[0].FooterTextColor;
					
					if(locFooterBackground != undefined)
					{
						var headerBackground = 'background-color:#'+locFooterBackground+';text-align:center;padding:7px 0 12px 0 !important;';
						localStorage.setItem('HeaderBackground',headerBackground);
								$('#headerBcgrnd').attr("style",headerBackground);
								$('#titledir').attr("style",headerBackground);
								var footBacgrnd = "background-color:#"+locFooterBackground+" !important";
								localStorage.setItem('footBacgrnd',footBacgrnd);
								$('.headerBackground').attr('style',footBacgrnd);
								//$('#locationcaption').attr('style',footBacgrnd);
								
					}
							if(locationtitile==undefined){
								locTitleStyle="display:none"
								$(".titlestyle").attr("style",locTitlestyle);
								
							}else{
								
								 locTitle="<text style='color:#"+locTitleColor+";font-size:"+locTitleFont+";font-family:"+locTitleFontFamily+"'>"+locationtitile+"</text>"
								  localStorage.setItem( 'HotelTitle',JSON.stringify(locTitle));
								   	$("#location").html(locTitle);
								 
							}
							if(locationcaption==undefined){
									locCaptionstyle="display:none";
									$(".captionstyle").attr("style",locCaptionstyle);
							 }
							else{
								  
								   locCaption="<text style='color:#"+locCaptionColor+";font-size:"+locCaptionFont+";font-family:"+locCaptionFontFamily+"'>"+locationcaption+"</text>"
								   localStorage.setItem( 'HotelCaption',JSON.stringify(locCaption));
								   $("#locationcaption").html(locCaption);
								   
									 if(locCaptionColor==undefined){
									   var SearchColor="color:#ffffff;font-size:24px;margin-left: 10px;  !Important"
									$('#SearchColor').attr('style',SearchColor)
								   }else{
									   var SearchColor="color:#"+locCaptionColor+";font-size:24px;margin-left: 10px;  !Important;margin-top:4px"
									$('#SearchColor').attr('style',SearchColor);
									
								   }
								   
								}
							   if(locBackground!=undefined){
								   loctionBackground="background-color:#"+locBackground;
									 localStorage.setItem( 'Hotelbackground',JSON.stringify(loctionBackground));
								   $("#locationbackground").attr("style",loctionBackground);
								   $("#headerBcgrnd").attr("style",loctionBackground);
								   
								   
							   }
								 if(locationMessage==undefined){
									locationmsg='display:none';
									$('#locationmessage').attr("style",locationmsg)
									}else{
										locationMsg="<div class='section'><div class='container'><div class='row' ><div class='col-md-12'>"+locationMessage+"</div></div></div></div>"
									  $('#locationmessage').html(locationMsg)
									}
                            /* if(locationhtml==undefined){
							locationhtml='display:none';
							$('#locationhtml').attr("style",locationhtml)
							}else{
								locationHtml="<div class='section'><div class='container'><div class='row' ><div class='col-md-12 text-center' style='font-size:"+
						      locHtmlFont+";color:#"+locHtmlColor+";'>"+locationhtml+"</div></div></div></div>"
							  $('#locationhtml').html(locationHtml)
							}
                            										 */
							if(locationfooterimg!=undefined){
									
									 footerimage=locationfooterimg.url;
									 
									footerimg="<div style='background-color:#"+locFooterBackground+";margin-top:5px;' ><center><img class='footer logo center-block margin' style='width:100%;height:auto' src='"+footerimage+"'></center></div>"
									localStorage.setItem( 'Hotelfooter',JSON.stringify(footerimg));
									  $('#footerimage').html(footerimg);
									  
								 }
								 else{
									 
									  footerimage='display:none';
									    $('#footerimage').attr("styles",footerimage)
								 }
						 
						   if(locationfooterText!=undefined){
							   
							   footerText="<div style='background-color:#"+locFooterBackground+";' ><center><text style='font-size:"+
						      locFooterTextFont+";font-family:"+locFooterTextFontfamily+";color:#"+locFooterTextColor+";'>"+locationfooterText+"</text></center></div>"	
									localStorage.setItem( 'HotelfooterText',JSON.stringify(footerText));
									  $('#footerText').html(footerText)
							   
						   }else{
							   footerText='display:none';
							   $('#footerText').attr("styles",footerText)
						   }
					   
						 var dirlocationdetails="<address class='"+styleclass+"' style='color:#"+locAddressFontColor+";font-size:"+locAddressFont+";font-family:"+locAddressFontFamily+"'>"+
						 addbr+
						 "<text style='"+locationadd1+"'>"+locationaddress1+"</text><br style='"+locationadd1+"'>"+
						 "<text style='"+locationadd2+"'>"+locationaddress2+"</text><br style='"+locationadd2+"'>"+
						 "<text style='"+locationst+"'>"+locationstreet+"</text><text style='"+locationgap+"'>, </text><text style='"+locationtwn+"'>"+locationtown+"</text><br style='"+locationbr+"'>"+
						 "<text style='"+locationzipcode+"'>"+locationzip+"</text><br style='"+locationzipcode+"'>"+"<text style='"+locationctry+"'>"+locationcountry+"</text></address>"
						 	$("#dirlocationdetails").html(dirlocationdetails);
							var geomap="<a style='"+locationgeopoints+"' onclick='myNavFunc(this.id,this.lang)' id='"+locationlat+"' lang='"+locationlang+"' class='mapPadding'>"+
		 "<img class = 'imgaspects map-logo' style='cursor:pointer' src='./images/map.jpg'  alt = '' >"+
		 "<p  class='mapPadding text-center' style='color:#"+locAddressFontColor+";font-size:"+locAddressFont+";font-family:"+locAddressFontFamily+";cursor:pointer' > Map</p><a>"
		$("#locationgeomap").html(geomap);
		localStorage.setItem( 'parentid',JSON.stringify(id));
		
									}
								
						}
						
		
			}//end of location
		var dirresult=localStorage.getItem('directory');
		var dRes=JSON.parse(dirresult);
		if(dRes!=null){
			
			var dirtitle=new Array();
			var dirLogo=new Array();
			var emptyImg=new Array();
			var dirid=new Array();
			var dirlogoDis=new Array();
			var  dirbutton=new Array();
			var dirurl=new Array();
			var titletotval="";
				for(var i=0;i<dRes.length;i++){
			 
			if(dRes[i].DirectoryID==id){
			
							dirtitle[i]=dRes[i].Title;
							dirid[i]=dRes[i].objectId;
							dirLogo[i]=dRes[i].Picture;
							dirlogoDis[i]='display:none;';
					  dirbutton[i]='margin-left:46px!important';
				/* if(dirLogo[i]!=undefined){
					
					emptyImg[i]=dirLogo[i].url;
					   var n=emptyImg[i].search("Empty.jpg")
					  
					   if(n==-1){
					   dirurl[i]=emptyImg[i]; 
						 
					   }
					   else{
						  
						   dirlogoDis[i]='display:none;';
					    dirbutton[i]='margin-left:44px!important';
					   }
				 }
				 else{
					  dirlogoDis[i]='display:none;';
					  dirbutton[i]='margin-left:44px!important';
				 } */
						var brandresult=localStorage.getItem('locationBrandstyle');
		                var bRes=JSON.parse(brandresult);
						if(bRes!=null){
						var brandButtonColor=bRes[0].BrandButtonColor;
						var brandFontColor=bRes[0].BrandFontColor;
						var brandFontFamily=bRes[0].BrandFontFamily;
						localStorage.setItem('buttonColor',brandButtonColor);
						}
						
					/* titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";'>"+dirtitle[i]+"</button></a></span></div>"; */
						
					 titleval="<div class='row'><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";'>"+dirtitle[i]+"</button></a></span></div>";	
					titletotval=titletotval+titleval;
				
				}
				
			}	
			$("#titledir").html(titletotval);
			$("#titledir").attr("style",loctionBackground);
		}//end of directory 
			
			var menuDesc=new Array();
									  var menuSequence=new Array();
									  var menuIcon=new Array();
									  var menuIconSeq=new Array();
									  var menuAction=new Array();
									  var menuActionType=new Array();
									  var menuUrl=new Array();
									  var menuUrlDis=new Array();
										var menuOrder=new Array();
										var iconOrder=new Array();
										var menulist,totmenulist="",iconlist,toticonlist="";
									var hotelmenulist=localStorage.getItem( 'HotelMenu');
										var menuRes=JSON.parse(hotelmenulist)
									for(var i=0;i<menuRes.length;i++){
										menuDesc[i]=menuRes[i].MenuDescription;
										menuSequence[i]=menuRes[i].MenuSequence;
										menuIcon[i]=menuRes[i].Icon;
										menuIconSeq[i]=menuRes[i].IconSequence;
										menuAction[i]=menuRes[i].IconAction;
										menuActionType[i]=menuRes[i].ActionType;
										if(menuIcon[i]!=undefined){
												 menuUrl[i]=menuIcon[i].url;
												
											 }
											 else{
												  menuUrlDis[i]='display:none;';
												 
											 }
										
										if((menuSequence[i]!=undefined))
										{
											var json={"menuDesc":menuDesc[i],
													  "menuSequence":menuSequence[i],
													  "menuIcon":menuUrl[i],
													  "menuAction":menuAction[i],
													  "menuActionType":menuActionType[i]
													  };
												menuOrder.push(json);
										}
										if((menuIconSeq[i]!=undefined))
										{
											var json={"menuDesc":menuDesc[i],
													  "menuIconSeq":menuIconSeq[i],
													  "menuIcon":menuUrl[i],
													  "menuAction":menuAction[i],
													  "menuActionType":menuActionType[i]
													  };
												iconOrder.push(json);
										}
										
									}
												//menuicons
												menuOrder.sort(function(a, b) {
											return parseInt(a.menuSequence) - parseInt(b.menuSequence);
											  });
									
											for(var i=0;i<menuOrder.length;i++){
												var mlink="";
											
												if(menuOrder[i].menuActionType=="Phone Number"){
													/* mlink="href='tel:"+menuOrder[i].menuAction+"'"; */
													mlink="id='"+menuOrder[i].menuAction+"'  onclick='phoneField(this.id)'";
												}
												else if(menuOrder[i].menuActionType=="URL"){
													/*  mlink="href='http://"+menuOrder[i].menuAction+"' onclick='window.open('this.href', '_system')' target='_blank'";  */
													/* mlink="href='inAppBrowser.html?id="+id+"&url="+menuOrder[i].menuAction+"'" ; */ 
													 mlink="id='"+menuOrder[i].menuAction+"' onclick='openInApp(this.id)'"; 
												}
												else{
													mlink="id='"+menuOrder[i].menuAction+"'  onclick='searchField(this.id)'";
												}
												
												
												menulist="<a "+mlink+" style='cursor:pointer'><span>"+menuOrder[i].menuDesc+"</span></a>"
												
												totmenulist=totmenulist+menulist;
											}
											$(".menuItems").append(totmenulist);
											 localStorage.setItem('menuicons',JSON.stringify(totmenulist));
											 
											//access icons
											iconOrder.sort(function(a, b) {
													return parseInt(a.menuIconSeq) - parseInt(b.menuIconSeq);
													  });
											
											for(var i=0;i<iconOrder.length;i++){
												var alink=''
												if(iconOrder[i].menuActionType=="Phone Number"){
													alink="href='tel:"+iconOrder[i].menuAction+"'";
												}
												else if(iconOrder[i].menuActionType=="URL"){
													/*  alink="href='http://"+iconOrder[i].menuAction+"' onclick='window.open('this.href', '_system')'  target='_blank'";  */
													/* alink="href='inAppBrowser.html?id="+id+"&url="+iconOrder[i].menuAction+"'" ;  */
												 alink="id='"+iconOrder[i].menuAction+"' onclick='openInApp(this.id)'"; 
													
												}
												else{
													alink="id='"+iconOrder[i].menuAction+"' onclick='searchField(this.id)'";
												}
												
												
												
													 
												
												iconlist="<a "+alink+" style='cursor:pointer'><img src='"+iconOrder[i].menuIcon+"' class='iconimg' title='"+iconOrder[i].menuDesc+"'></a>"
												toticonlist=toticonlist+iconlist;
											}
											$(".iconlist").append(toticonlist);
											 localStorage.setItem('accessicons',JSON.stringify(toticonlist));
			/* var menuicons=localStorage.getItem('menuicons');
		   var menu=JSON.parse(menuicons);
		   if(menu!=null){
			   $(".menuItems").append(menu);
		   }
			var accessicons=localStorage.getItem('accessicons');
		    var aicons=JSON.parse(accessicons);
			if(aicons!=null){
				$(".iconlist").append(aicons); 
			}
			
			//end of menu icons */
			
	   }
	    
  }	

  $('#search').click(function(){
		 var textres = $('#textbox').val();
		 var res = new RegExp(textres,"i");
		 $("#titledir").empty();
		 var dirresult=localStorage.getItem('directory');
		 var dRes=JSON.parse(dirresult);
		        var dirid=new Array();
				var directory=new Array();
				var dirtitle=new Array();
				var dircaption=new Array();
				var dirColor=new Array();
				var dirLogo=new Array();
				var dirurl=new Array();
				var styles=new Array();
				var TitleColor=new Array();
				var TitleFont=new Array();
				var dirlogoDis=new Array();
				var dirbutton=new Array();
				var emptyImg=new Array();
				var titleval;
				var titletotval="";
				var titletotval1="";
				var titletotval2="";
				var character="";
				var titledis="";
				var titlecapDis="";
				
				//dRes.sort();
				if(dRes.length==0){
					titledis='display:none';
				}
	            for(var i=0;i<dRes.length;i++){
					
					
						if((res.test(dRes[i].Title))){
							if(dRes[i].LocationId==id){
							
						dirtitle[i]=dRes[i].Title;
						dircaption[i]=dRes[i].Caption;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 styles[i]=dRes[i].StyleId;
						 dirlogoDis[i]='display:none';
							  dirbutton[i]='margin-left:46px!important';
/* 						/*  if(dirLogo[i]!=undefined){
							   emptyImg[i]=dirLogo[i].url;
							   var n=emptyImg[i].search("Empty.jpg")
							  
							   if(n==-1){
								    dirurl[i]=emptyImg[i]; 
								 
								
							   }
							   else{
								 dirlogoDis[i]='display:none;';
								dirbutton[i]='margin-left:44px!important';
							   }
							
						 } 
						 else{
							  dirlogoDis[i]='display:none';
							  dirbutton[i]='margin-left:43px!important';
						 } */
						if(styles[i]!=undefined)
						{
						 TitleColor[i]=styles[i].TitleColor;
						 TitleFont[i]=styles[i].TitleFont;
						 
						}
						if(dircaption[i]==undefined)
						{
						 titlecapDis='display:none';
						 
						}
						
						var brandresult=localStorage.getItem('locationBrandstyle');
		                var bRes=JSON.parse(brandresult);
						if(bRes!=null){
						var brandButtonColor=bRes[0].BrandButtonColor;
						var brandFontColor=bRes[0].BrandFontColor;
						var brandFontFamily=bRes[0].BrandFontFamily;
						}
						/*  titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";'>"+dirtitle[i]+"</button></a></span></div>";	
					titletotval=titletotval+titleval; */
					 titleval="<div class='row'><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";'>"+dirtitle[i]+"</button></a></span></div>";	
					titletotval=titletotval+titleval;
					  
					}
				 }
			}
			$("#titledir").html(titletotval);
			
				
		  event.stopPropagation();
	});
	
	function searchField(field){
	
	
			
		 var dirresult=localStorage.getItem('directory');
		 var dRes=JSON.parse(dirresult);
		 
		        
				
				if(dRes.length==0){
					titledis='display:none';
				}
	            for(var i=0;i<dRes.length;i++){
					
					var dtitle=(dRes[i].Title).toUpperCase();
					var sfield=field.toUpperCase();
						
						if(dtitle==sfield)
						{
							
							
							
							window.open("description.html?id="+dRes[i].objectId,"_self");
							i=dRes.length
				        }
						
				 }
			
			
		  event.stopPropagation();
	
}
function openInApp(url){
	
    var cUrl="http://"+url;
	

 try {
ref = window.open(cUrl,'_blank','location=yes'); //encode is needed if you want to send a variable with your link if not you can use ref = window.open(url,'_blank','location=no');
         ref.addEventListener('loadstop', LoadStop);
         ref.addEventListener('exit', Close);
    }
    catch (err)    
    {
        alert(err);
    }
}
function LoadStop(event) {
         if(event.url == "http://www.mypage.com/closeInAppBrowser.html"){
            // alert("fun load stop runs");
             ref.close();
         }    
    }
function Close(event) {
         ref.removeEventListener('loadstop', LoadStop);
         ref.removeEventListener('exit', Close);
    } 
	function phoneField(number){
	
	var callTo="tel:"+number;
	window.open(callTo, '_system')
   /* $('.phoneCall').attr('href',callTo) */
}