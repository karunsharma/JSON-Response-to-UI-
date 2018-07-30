/*File: postRequests.js
  Description: Allows POST functionality
  Author: Karun Sharma
  Date 7-30-18
  Version: 1.3
*/
var container = document.getElementById("testJSON");
var editor = new JSONEditor(container,{"mode":"code"});

function onSubmitPostRequests(){
  var xhr = new XMLHttpRequest();
  var getJSONData = editor.get();
  var urlString = 'http://localhost:8080/users'; //URL WHICH POINTS TO USERS ENDPOINT
  xhr.open('POST',urlString, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader('Authorization','foo');
  xhr.send(JSON.stringify(getJSONData));
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('All is good!');
    }
    else{
      console.log(xhr.response);
    }
  }
  alert('POST request sent');
  return false;
}

var postButtonRequest = document.getElementById('submitButtonStyle');
postButtonRequest.onclick = onSubmitPostRequests;

$(function(){
  $('#submitButtonStyle').on('mouseover', function(){
    $(this).fadeTo('slow',0.5,function(){
      $('#submitButtonStyle').on('mouseout', function(){
        $(this).fadeTo('slow',1.0,function(){
        });
      });
    });
  });
});