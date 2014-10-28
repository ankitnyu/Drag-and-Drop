// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when a message is passed.  We assume that the content script
// wants to show the page action.
var gb;
//var form = document.getElementById('gaia_loginform');

function onRequest(request, sender, sendResponse) {
  // Show the page action for the tab that the sender (content script)
  // was on.
  chrome.pageAction.show(sender.tab.id);
  gb = sender.tab.id;
  var reply = localStorage[request.data];
  
  sendResponse({type:reply});

};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        //alert(request.email + " In runtime " + request.data);
        localStorage[request.email] = request.data;
        localStorage['user1'] = request.data;
        //alert("hi");
        return true;   // <-- I intend to call `sendResponse` later
    
    //return false;   // <-- I do NOT intend to call `sendResponse`
});
// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
chrome.pageAction.onClicked.addListener(doSomething);
