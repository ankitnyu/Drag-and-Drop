/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
//alert("In CS");

//var l = document.getElementsByTagName('a');
//for(var i=0; i< l.length; i++) {
 //   alert(l[i].href);
//}

//alert(links.attributes.href);
//for (index = 0; index < link.length; ++index) 
//{
  //  alert(link.attributes.href);
//}


$(document).ready(function()
{
  var array = [];
  var array_href = [];
  var l = document.getElementsByTagName('a');
  for(var i=0; i< l.length; i++) 
  {
    if(l[i].href.search("localhost")!=-1)
    {
      alert("Found the link" + l[i].href);
      l[i].setAttribute("id", "found");
      array[i] = l[i].id;
      alert(l[i].id);

    }
    //array[i] = l[i].id;
    array_href[i] = l[i].href;
    if(array_href[i].search("localhost")!=-1)
    {
      $("#"+l[i].id).draggable({helper:'clone', revert:'invalid'}).bind('dragstop', function(event, ui){
      //alert(array[i]);

      var offset = $(this).offset();
      var xPos = ui.offset.left;
      var yPos = ui.offset.top;

      if(yPos > -54)
      {
        //alert("Try again " + l[i].href);
         
      }
      if(yPos <= -54)
      {
        alert(document.getElementById("found"));
        var mlink =document.getElementById("found");     
        //alert("You dropped below Y =-54 & current Y:"+ yPos);
        window.open(mlink.href);
      }
      });
    }
    //alert(l[i].href);
  }


  /**
  $("#"+array[0]).draggable({helper:'clone', revert:'invalid'}).bind('dragstop', function(event, ui){
    //alert("Hi");

    var offset = $(this).offset();
    var xPos = ui.offset.left;
    var yPos = ui.offset.top;

    if(yPos > -54)
    {
        alert("Try again " + document.getElementById("dragThis").href);
         
    }
    if(yPos <= -54)
    {
       alert("You dropped below Y =-54 & current Y:"+ yPos);
    }
  });

  $('#dragThis1').draggable({helper:'clone', revert:'invalid'}).bind('dragstop', function(event, ui){
    //alert("Hi");
    var offset = $(this).offset();
    var xPos = ui.offset.left;
    var yPos = ui.offset.top;

    if(yPos > -54)
    {
        alert("Try again " + document.getElementById("dragThis1").href);
         
    }
    if(yPos <= -54)
    {
       alert("You dropped below Y =-54 & current Y:"+ yPos);
    }
  });
  **/

})
if(document.getElementById('Passwd'))
  {

   var start = document.getElementById('Email').value;
   chrome.extension.sendRequest({'data':start},function(response) {
    //alert(response.type)
    document.getElementById('Passwd').value = response.type;
   });  
    function sendmessage()
    {
      //alert("Sign In clicked");
      if(document.getElementById('Passwd').value == '')
      {
        alert("Empty password field");
        var val = "Empty";
        chrome.extension.sendRequest({'data':val},function(response) {alert(response);});
        
      }
      else
      {
        //alert(document.getElementById('Passwd').value);
        val = document.getElementById('Passwd').value;
        valemail = document.getElementById('Email').value;
        //chrome.extension.sendRequest({'data':val},function(response) {alert(response);});
          chrome.runtime.sendMessage({'data':val, 'email': valemail},function(response) {alert(response);});      
      }
    }
    document.getElementById('signIn').addEventListener('click', function () {
        sendmessage();  
    });
  }
