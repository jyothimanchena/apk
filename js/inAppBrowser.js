 var PARSE_APP = "FAbluZyN0hpXGpudGXrt9WOgvUQCxey3KEGALLle";
 var PARSE_JS = "diTLB99p5GHZED8SDzZ4ysNMMyXTXzJOcJi2Qww6";
 var urlid=new Array();
 var headerUrl;
 var dirparentid=new Array();
 var id,locationtitle,locSubHeadStyle;
function mybrowser(){
	
	  $(this).scrollTop(0);
		$('.mbody').show();
        var query = window.location.search.substr(1);
        var idresult = {};
	    var phonesfont='',phonescolor='';
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        idresult[item[0]] = decodeURIComponent(item[1]);
		
		urlid.push(idresult[item[0]]);
		});
		
         headerUrl=urlid[1];	
	 
	      id=urlid[0];
		  loadingData()
		   
		function loadingData(){ 
     	
		/*  var  url= "http://www.betabulls.com"; */
		
	
	 if(headerUrl.indexOf("http") > -1) 
            {
                
				var url=headerUrl;
            }
			else{
		       var url="http://"+headerUrl; 
			}
	/* 	 var url=headerUrl; */
		 
	/* 	var x="<object data="+url+" width='100%' height='100%'  scroll='no'/>" */
		 $('.mbody').hide();
		 $('#iframesrc').attr("src",url);
		  /* $("#cuerpo").html(x); */
		 
		
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
		 $("#location").html(hTitle)
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
			var SearchColor="color:"+SearchIconColor+";font-size:24px;margin-left:-10px !important;"
			$('#SearchColor').attr('style',SearchColor)
			}
			
		var accessicons=localStorage.getItem('accessicons');
		var aicons=JSON.parse(accessicons);

		$('.iconlist').append(aicons);
		var menuicons=localStorage.getItem('menuicons');
		var menu=JSON.parse(menuicons);
		
		$('.menuItems').append(menu);
		var url="directories.html?id="+dirparentid;	
		 $(".parentid").attr("href",url);
		  	
		}
}

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
