/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener('resume', this.onResume, false);
		/* document.addEventListener("offline", onOffline, false);
        document.addEventListener("online", onOnline, false); */
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		
    },
	onResume: function() {
		
		 //app.receivedEvent('resume');
		 GetLatestReferringParams()
     },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//alert(id)
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		 SetDebug(true);
        InitSession();
    }
};

app.initialize();
function DeepLinkHandler(data)
{
    if (data) {
     // alert('DeeplinkInitialize: ' + JSON.stringify(data)); 
		// alert(data.param); 
		/* 
		alert(path)
		window.location=path; */
			var path=data.param;
			//alert(path)
			if(path.constructor === Array){
			//alert("array");
				//alert(result[0])
				window.location=path[1];
			}else{
			//alert("varaible")
				window.location=path;
			}
		
    } else {
       /*  alert('No data found'); */
		window.location="home.html"
    }
}

function NonBranchLinkHandler(data)
{
    if (data) {
		window.location = "home.html";
        //alert('Non-branch link found: ' + JSON.stringify(data));
    }
}

function SetDebug(isEnabled)
{
    console.log('Trigger SetDebug()');

    Branch.setDebug(isEnabled);

    /* alert('Debug mode enabled'); */
}

function InitSession()
{
    console.log('Trigger InitSession()');

    Branch.initSession().then(function (res) {
       
		
    //alert('InitResponse: ' + JSON.stringify(res)); 
	   var result=res.param;
	   var resultparse=JSON.stringify(res)
	   if((resultparse=="")||(resultparse==undefined)||(result==undefined)||(result=="")){
		   window.location = "home.html";
	   }else{
		   // var result=res.param;
			if(result.constructor === Array){
				//alert("array");
				//alert(result[1])
				window.location=result[1];
			}else{
				//alert("varaible")
				window.location=result;
			}
			
			 
	   }
    }).catch(function (err) {
        console.error(err);
		window.location = "home.html";
        //alert('Error: ' + JSON.stringify(err));
    });
}

 function CustomAction()
{
   // alert('Trigger CustomAction()');

    var action = document.getElementById('custom-action').value;

    Branch.userCompletedAction(action).then(function (res) {
        console.log(res);
       // alert('ResponseCompleted: ' + JSON.stringify(res));
    }).catch(function (err) {
        console.error(err);
       // alert('Error: ' + JSON.stringify(err));
    });
}
 
 
function GetLatestReferringParams()
{
    //alert('Trigger GetLatestReferringParams()');

    Branch.getLatestReferringParams().then(function (res) {
        console.log(res);
      // alert('ResponseLatest: ' + JSON.stringify(res));
		var path=res.param;
		//alert("latest:"+path);
		if((path=="")||(path==undefined)){
			//alert("NoPath")
			console.log("no path for redirecting")
		}else{
			window.location=path;
		}
		
    }).catch(function (err) {
        console.error(err);
       // alert('Error: ' + JSON.stringify(err));
    });
}
function GetCurrentReferringParams()
{
    //alert('Trigger GetCurrentReferringParams()');

    Branch.getCurrentReferringParams().then(function (res) {
        console.log(res);
        //alert('ResponseCurrent: ' + JSON.stringify(res));
    }).catch(function (err) {
        console.error(err);
       // alert('Error: ' + JSON.stringify(err));
    });
}
/* function onOnline() {
    // Handle the online event
    var networkState = navigator.connection.type;
	console.log(networkState)
	//alert("online:"+networkState);
	//onlineHotel()
   
}
function onOffline() {
	
    // Handle the offline event
	 var networkState = navigator.connection.type;
   // console.log("lost connection");
//alert("offline:"+networkState);
	showHotel();
	
} */