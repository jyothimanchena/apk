 var PARSE_APP = "FAbluZyN0hpXGpudGXrt9WOgvUQCxey3KEGALLle";
 var PARSE_JS = "diTLB99p5GHZED8SDzZ4ysNMMyXTXzJOcJi2Qww6";
 var urlid=new Array();
 var dirparentid=new Array();
 var id,locationtitle,locSubHeadStyle;
function myDescription(){
	  $(this).scrollTop(0);
		
        var query = window.location.search.substr(1);
        var idresult = {};
	    var phonesfont='',phonescolor='';
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        idresult[item[0]] = decodeURIComponent(item[1]);
		
		urlid.push(idresult[item[0]]);
		});
		
         var headertitle=urlid[2];		
	      id=urlid[0];
		 
		 
		 var Hotelbackground=localStorage.getItem('Hotelbackground');
		var hbgRes=JSON.parse(Hotelbackground);
		 $("#locationbackground").attr("style",hbgRes)
		 
		var hotelresult=localStorage.getItem('Hotel');
		var hRes=JSON.parse(hotelresult);
		
		if(hRes[0]!=null){
			locationtitle=hRes[0].Name;
			dirparentid=hRes[0].objectId;
		}
		
		 var HTitle=localStorage.getItem('HotelTitle');
		var hTitle=JSON.parse(HTitle);
		
		if(hTitle!=null){
		 $("#location").html(hTitle);
		 var FBackground = localStorage.getItem('footBacgrnd');
		 if(FBackground != null)
		 {
			$('.headerBackground').attr("style",FBackground);
			$('#locationcaption').attr("style",FBackground);
			
		 }
		 
		}
		
		var HLogo=localStorage.getItem('LocationImage');
		var HBackground = localStorage.getItem('HeaderBackground');
		
		
		if(HLogo != null)
		{
			//$('#headerBcgrnd').attr("style",HBackground);
			if(HBackground != null)
			{
				$('#headerBcgrnd').attr("style",hbgRes);
			}
			
			
			$('#locationhotellogo').attr("src",HLogo);
		}
		
		  var HCaption=localStorage.getItem('HotelCaption');
		var hcaption=JSON.parse(HCaption);
		if(hcaption!=null){
		 $("#locationcaption").html(hcaption)
		}
		
	var brandresult=localStorage.getItem('locationBrandstyle');
		var bRes=JSON.parse(brandresult);
		if(bRes!=null){
			var SearchIconColor=bRes[0].hotelCaptionColor;
			var SearchColor="color:"+SearchIconColor+";font-size:24px;margin-left:10px !important;"
			$('#SearchColor').attr('style',SearchColor)
			}
			
		var accessicons=localStorage.getItem('accessicons');
		var aicons=JSON.parse(accessicons);

		$('.iconlist').append(aicons);
		var menuicons=localStorage.getItem('menuicons');
		var menu=JSON.parse(menuicons);
		
		$('.menuItems').append(menu);
		/* $("#locationFrontDesk").attr("href","tel:"+locationFrontDesk);
		$("#locationBellDesk").attr("href","tel:"+locationBellDesk);
		$("#locationMaidDesk").attr("href","tel:"+locationMaidDesk);
		$("#locationEmergency").attr("href","tel:"+locationEmergency);
		$("#locationLocalAttractions").attr("href","http://"+locationLocalAttractions)
		$("#locationHotelDirectory").attr("href","http://"+locationHotelDirectory) */
		
		var dirresult=localStorage.getItem('directory');
		var dRes=JSON.parse(dirresult);
		        var dirid=new Array();
				var dirtitles=new Array();
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
				 var pic,dirtitle='',dircaption='',dirnote='',dirdesc='',dirloc='',dirtiming='',dirprice='',dirwebsite='',websiteDis='',diremail='',emailDis='',dirpicture='',pictureDis='',dirParentid='';
					var styles,titlefont='',titlecolor='',captionfont='',captioncolor='',descrptionfont='',descriptioncolor='',timingsfont='',dirtimingnone='',dirdescnone='';
					var timingscolor='',pricefont='',pricecolor='',websitefont='',websitecolor='',emailfont='',emailcolor='' ,priceDis='',phonesbackground='',pricebackground='';	
					
          for(var i=0;i<dRes.length;i++){
			 
			  if(dRes[i].objectId==id){
				 	
					dirtitle=dRes[i].Title;
					dircaption=dRes[i].Caption;
					dirnote=dRes[i].Note;
					dirdesc=dRes[i].Description;
					dirloc=dRes[i].Location;
					dirtiming=dRes[i].Timings;
					dirprice=dRes[i].Price;
					dirwebsite=dRes[i].Website;
					dirpicture=dRes[i].Picture;
					diremail=dRes[i].Email;
					dirParentid=dRes[i].LocationId;
					var objid=dRes[i].StyleId.objectId;
					var val=localStorage.getItem('Style');
	                var StyleId=JSON.parse(val);
				
					for(var j=0;j<StyleId.length;j++){
						if(StyleId[j].objectId==objid){
					titlefont=StyleId[j].TitleFont;
					titlecolor=StyleId[j].TitleColor;
					titlefamily=StyleId[j].TitleFamily;
					titlebackground=StyleId[j].TitleBackground;
					imagebackground=StyleId[j].Imagebackground;
					captionfont=StyleId[j].CaptionFont;
					captioncolor=StyleId[j].CaptionColor;
					captionfamily=StyleId[j].CaptionFamily;
					descrptionfont=StyleId[j].DescriptionFont;
					descriptioncolor=StyleId[j].DescriptionColor;
					descriptionBackground=StyleId[j].DescriptionBackground;
					descriptionfamily=StyleId[j].DescriptionFamily;
					phonesfont=StyleId[j].PhonesFont;
					phonescolor=StyleId[j].PhonesColor;
					phonesbackground=StyleId[j].PhonesBackground;
					timingsfont=StyleId[j].TimingsFont;
					timingscolor=StyleId[j].TimingsColor;
					timingsfamily=StyleId[j].TimingsFamily;
					timingbackground=StyleId[j].TimingBackground;
					pricecolor=StyleId[j].PriceColor;
					pricefont=StyleId[j].PriceFont;
					pricebackground=StyleId[j].PriceBackground
					websitefont=StyleId[j].WebsiteFont;
					websitecolor=StyleId[j].WebsiteColor;
					emailfont=StyleId[j].EmailFont;
					emailcolor=StyleId[j].EmailColor;
						}
					}
					if(dirpicture!=undefined)
					{
					 var emptypic=dirpicture.url;
					 var n=emptypic.search("Empty.jpg");
					if(n==-1){
						pic=emptypic
						
					}else{
						dirpicture='';pictureDis='display:none';
					}
					 
					}
					if((dircaption==undefined)||(dircaption==''))
					{dircaption='';}
					if((dirnote==undefined)||(dirnote==''))
					{dirnote='';}
					if((dirdesc==undefined)||(dirdesc==''))
					{ dirdescnone='display:none';}
					if((dirloc==undefined)||(dirloc==''))
					{dirloc='';}
					if((dirtiming==undefined)||(dirtiming==''))
					{
						dirtimingnone='display:none';
						
				     }
					 if((dirprice==undefined)||(dirprice==''))
					{dirprice=''; priceDis='display:none;';}
					if((dirwebsite==undefined)||(dirwebsite==''))
					{dirwebsite='';websiteDis='display:none';}
					if((dirpicture==undefined)||(dirpicture==''))
					{dirpicture='';pictureDis='display:none';}
					if((diremail==undefined)||(diremail==''))
					{diremail='';emailDis='display:none;';}
				 /*   var titlecaption="<div class='section' style='background:#"+titlebackground+";' >"+
				   "<div class='container'><div class='row' >"+				   
				   "<div class='col-md-12' style='text-align:center;color:#"+titlecolor+";font-size:"+titlefont+";font-family:"
				   +titlefamily+"' >"+
				   "<div class='col-xs-1' style='padding:7px 0 0 0px !important;margin-left:27px'><a class='btn' onclick='funback()' style='color:black'><i class='fa fa-chevron-circle-left backbutton'> </i> </a></div>"+
				   "<div class='col-xs-10' style='padding-top:7px;padding-left:0px;'><span>"+
				   ""+dirtitle+"</span></div>"+				   
				   "<br><text style='color:#"+captioncolor+";font-size:"+captionfont+";font-family:"+captionfamily+"' >"+dircaption+"</text></div></div></div></div>" */
				   var titlecaption="<div class='section' style='background:#"+titlebackground+";' >"+
				   "<div class='container'><div class='row' >"+				   
				   "<div class='col-md-12' style='text-align:center;color:#"+titlecolor+";font-size:"+titlefont+";font-family:"
				   +titlefamily+"' >"+
				   "<div class='col-xs-12' style='padding-top:7px;padding-left:0px;'><span>"+
				   ""+dirtitle+"</span></div>"+				   
				   "<br><text style='color:#"+captioncolor+";font-size:"+captionfont+";font-family:"+captionfamily+"' >"+dircaption+"</text></div></div></div></div>"
				   $('#titlecaption').html(titlecaption);
				   var image="<div class='section' style='background:#"+imagebackground+";' >"+
				   "<div><div class='row' >"+
				   "<div class='col-md-12 text-center ' >"+
				   " <div class='imgaspects'><center><img style='"+pictureDis+"' src='"+pic+"'class='center-block  margin img-responsive' ></center></div></div></div></div>"
				   $("#titleimage").html(image);
				   var timings="<div class='section' style='background:#"+timingbackground+";"+dirtimingnone+"' >"+
				   "<div class='container'><div class='row' >"+
				   "<div class='col-md-12 text-center ' style='color:#"+timingscolor+";font-size:"+timingsfont+";font-family:"+timingsfamily+";margin-top:10px;' >"+
				   ""+dirtiming+"</div></div></div></div>"
				   $('#timings').html(timings);
				   var description="<div class='section' style='"+dirdescnone+"' >"+
				   "<div class='container'><div class='row' >"+
				   "<div class='col-md-12 ' style='margin-top:10px;' >"+
				   ""+dirdesc+"</div></div></div></div>"
				   $('#description').html(description);
				   
				   var val=localStorage.getItem('phones');
	         var pRes=JSON.parse(val);
			
	          var phonetype=new Array();
			  var phoneext=new Array();
			  var phonetot='',phone;
			  if((pRes.length)!=0){
			 for(var k=(pRes.length-1);k>=0;k--){
				   
				
						if((pRes[k].PhoneId)==id){
							
								phonetype[k]=pRes[k].Type;
								phoneext[k]=pRes[k].Ext;
								var brandresult=localStorage.getItem('locationBrandstyle');
								var bRes=JSON.parse(brandresult);
								
								if(bRes!=null){
								var brandButtonColor=bRes[0].BrandButtonColor;
								var brandFontColor=bRes[0].BrandFontColor;
								var brandFontFamily=bRes[0].BrandFontFamily;
								}
								
								if(phonetype[k]=="phone"){
									 phone="<p ><a  data-role='button' class='linkbutton ui-btn ui-shadow ui-btn-corner-all ui-btn-hover-c ui-btn-up-c' target='_new' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-theme='c' href='tel:"+phoneext[k]+"'><span class='ui-btn-inner ui-btn-corner-all' style='background-color:#"+brandButtonColor+"'><span class='ui-btn-text' style='color:#"+brandFontColor+";font-family:"+brandFontFamily+" !important;'>"+phonetype[k]+": "+phoneext[k]+"</span></span></a></p>";
								}
								if(phonetype[k]=="email"){
									 phone="<p><a  data-role='button' class='linkbutton ui-btn ui-shadow ui-btn-corner-all ui-btn-hover-c ui-btn-up-c' target='_new' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-theme='c' href='mailto: "+phoneext[k]+"'><span class='ui-btn-inner ui-btn-corner-all'style='background-color:#"+brandButtonColor+"'><span class='ui-btn-text' style='color:#"+brandFontColor+";font-family:"+brandFontFamily+" !important;'>"+phonetype[k]+": "+phoneext[k]+"</span></span></a></p>";
								}
								if(phonetype[k]=="website"){
									phone="<p><a  data-role='button' class='linkbutton ui-btn ui-shadow ui-btn-corner-all ui-btn-hover-c ui-btn-up-c' target='_blank' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-theme='c' id='"+phoneext[k]+"' onclick='openInApp(this.id)' ><span class='ui-btn-inner ui-btn-corner-all' style='background-color:#"+brandButtonColor+"'><span class='ui-btn-text' style='color:#"+brandFontColor+";font-family:"+brandFontFamily+" !important;'>"+phonetype[k]+": "+phoneext[k]+"</span></span></a></p>";
								}
							phonetot=phonetot+phone;	  	
						}
						
					}
			  }	 
				 phonecomplete="<div style='background:#"+phonesbackground+"'>"+phonetot+"</div>"
			   $("#phone").html(phonecomplete);
			  
			var val=localStorage.getItem('menu');
	        var mRes=JSON.parse(val);
			 
	        var description=new Array();
			var price=new Array();
			var pricefont
			var pricecolor
			var pricefamily
			var totalmenu='',menu;
			
			if((mRes.length)!=0){
				for(var l=0;l<mRes.length;l++){
					if(mRes[l].MenuId==id){
							 description[l]=mRes[l].Description;
							 price[l]=mRes[l].Price;
						
							 var objid=mRes[l].StyleID.objectId
							 var val=localStorage.getItem('Style');
							  var result=JSON.parse(val);
							  
						for(var m=0;m<result.length;m++){
							  if(result[m].objectId==objid){
									 pricecolor=result[m].PriceColor;
									 pricefont=result[m].PriceFont;
									 pricefamily=result[m].PriceFamily;
							  }
						  }
						 
						 menu="<tr><td class='tabheight' style='text-align:justify;font-size:"+pricefont+" !important;font-family:"+pricefamily+";color:#"+pricecolor+" !important;padding-right:60px;padding-bottom:10px;' >"+description[l]+"</td><td class='tabheight' style='font-size:"+pricefont+";font-family:"+pricefamily+" !important;color:#"+pricecolor+" !important;text-align:right;padding-bottom:10px;' >"+price[l]+"</td></tr><tr></tr><tr></tr>";
						 totalmenu=totalmenu+menu;
					}
				}
			  fullmenu="<div style='background:#"+pricebackground+"'><center><table  >"+totalmenu+"</table></center></div>"
			$("#menu").html(fullmenu);
			}
				   
			  }
			  if(dRes[i].DirectoryID==id){
					    dirtitles[i]=dRes[i].Title;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 dirlogoDis[i]='display:none';
						 dirbutton[i]='margin-left:46px!important';
						 
						/*  if(dirLogo[i]!=undefined){
							
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
							  dirbutton[i]='margin-left:44px!important';
						 } */
						var brandresult=localStorage.getItem('locationBrandstyle');
						var buttonColor = localStorage.getItem('buttonColor');
		                var bRes=JSON.parse(brandresult);
						
						if(bRes!=null){
							var brandButtonColor=bRes[0].BrandButtonColor;
						var brandFontColor=bRes[0].BrandFontColor;
						var brandFontFamily=bRes[0].BrandFontFamily;
						}
						
						 /* titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitles[i]+"'><button class='dirbutton' style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";' >"+dirtitles[i]+"</button></a></span></div>"; */
						
						 titleval="<div class='row'><span><a style='margin-left:46px' href='description.html?id="+dirid[i]+"&header="+dirtitles[i]+"'><button class='dirbutton' style='background-color:#"+buttonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";' >"+dirtitles[i]+"</button></a></span></div>";
					titletotval=titletotval+titleval;
			  }
			  
			 
		  }
		    $("#titledir").html(titletotval);
			 if(i<=dRes.length){
					var Hotelfooter=localStorage.getItem('Hotelfooter');
					 var hfooter=JSON.parse(Hotelfooter);
						var HotelfooterText=localStorage.getItem('HotelfooterText');
					 var hfooterText=JSON.parse(HotelfooterText);
					 if(hfooter!=undefined){
						  $('#footerimage').html(hfooter)
					 }
					 else{
						 hfooter='display:none';
						 $('#footerimage').attr("styles",hfooter)
					 }
					 if(hfooterText!=undefined){
						  $('#footerText').html(hfooterText)
					 }
					 else{
						 hfooterText='display:none';
						 $('#footerText').attr("styles",hfooterText)
					 }
			  }
		var url="directories.html?id="+dirParentid;	
		 $(".parentid").attr("href",url);
		 
}

//search box
	$('#search').click(function(){
		 var textres = $('#textbox').val();
		 var res = new RegExp(textres,"i");
		 $("#titledir").empty();
		 var parentid=localStorage.getItem('parentid');
		var parentres=JSON.parse(parentid);
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
							
							if(dRes[i].LocationId==parentres){
							
						dirtitle[i]=dRes[i].Title;
						dircaption[i]=dRes[i].Caption;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 styles[i]=dRes[i].StyleId;
						 dirlogoDis[i]='display:none';
						dirbutton[i]='margin-left:46px!important';
						/*  if(dirLogo[i]!=undefined){
							emptyImg[i]=dirLogo[i].url;
							   var n=emptyImg[i].search("Empty.jpg")
							  
							   if(n==-1){
								   dirurl[i]=emptyImg[i]; 
								  
								
							   }
							   else{
								  dirlogoDis[i]='display:none;';
								dirbutton[i]='margin-left:43px!important';
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
						
						 /* titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton'style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";' >"+dirtitle[i]+"</button></a></span></div>"; */
								titleval="<div class='row'><span><a style='margin-left:46px' href='description.html?id="+dirid[i]+"&header="+dirtitles[i]+"'><button class='dirbutton' style='background-color:#"+buttonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";' >"+dirtitles[i]+"</button></a></span></div>";
								
					titletotval=titletotval+titleval;
					  
					}
				 }
			}
			
			$("#titledir").html(titletotval);
					
		   event.stopPropagation();
	});
/*search field*/
/* function searchField(field){
	
	var resfield = new RegExp(field,"i")
	$("#titledir").empty();
		 var parentid=localStorage.getItem('parentid');
		var parentres=JSON.parse(parentid);
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
					
					
						
						if(resfield.test(dRes[i].Title))
						{
							if(dRes[i].LocationId==parentres){
						
						dirtitle[i]=dRes[i].Title;
						dircaption[i]=dRes[i].Caption;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 styles[i]=dRes[i].StyleId;
						 if(dirLogo[i]!=undefined){
							 dirurl[i]=dirLogo[i].url;
							
						 }
						 else{
							  dirlogoDis[i]='display:none';
							  dirbutton[i]='margin-left:43px!important';
						 }
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
						titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton'style='background-color:#"+brandButtonColor+";color:#"+brandFontColor+";font-family:"+brandFontFamily+";' >"+dirtitle[i]+"</button></a></span></div>";	
					    titletotval=titletotval+titleval;
						
					}
				 }
			}
				
				
			    $("#titledir").html(titletotval);
		  event.stopPropagation();
}	 */

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
							
							
							
							window.open("description.html?id="+dRes[i].objectId,'_self');
							i=dRes.length
				        }
						
				 }
			
			
		  event.stopPropagation();
	
}	

/* search for food  */	

	 $("#food").click(function(){
   
	var textfood = "Food and Beverage"
	 var textdining = "dining";
	 var textrestaurant ="restaurant";
		 var resdining = new RegExp(textdining,"i");
		 var resfood = new RegExp(textfood,"i");
		 var resrestaurant = new RegExp(textrestaurant,"i");
		 $("#titledir").empty();
		 var parentid=localStorage.getItem('parentid');
		var parentres=JSON.parse(parentid);
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
					
					
						if((resdining.test(dRes[i].Title))||(resfood.test(dRes[i].Title))||(resrestaurant.test(dRes[i].Title))){
							if(dRes[i].LocationId==parentres){
							
						dirtitle[i]=dRes[i].Title;
						dircaption[i]=dRes[i].Caption;
						dirid[i]=dRes[i].objectId;
						dirLogo[i]=dRes[i].Picture;
						 styles[i]=dRes[i].StyleId;
						 if(dirLogo[i]!=undefined){
							 dirurl[i]=dirLogo[i].url;
							
						 }
						 else{
							  dirlogoDis[i]='display:none';
							  dirbutton[i]='margin-left:43px!important';
						 }
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
						
						var brandButtonColor=bRes[0].BrandButtonColor;
						var brandFontColor=bRes[0].BrandFontColor;
						var brandFontFamily=bRes[0].BrandFontFamily;
						titleval="<div class='row'><span class='menudir'><img  src='"+dirurl[i]+"' class='dirlogo' style='"+dirlogoDis[i]+"'></span><span><a style='"+dirbutton[i]+"' href='description.html?id="+dirid[i]+"&header="+dirtitle[i]+"'><button class='dirbutton' >"+dirtitle[i]+"</button></a></span></div>";	
					    titletotval=titletotval+titleval;
						
					}
				 }
			}
				
				
			    $("#titledir").html(titletotval);
		  event.stopPropagation();
});
function phoneField(number){
	
	var callTo="tel:"+number;
	window.open(callTo, '_system')
   /* $('.phoneCall').attr('href',callTo) */
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