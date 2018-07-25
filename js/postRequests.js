/*File: postRequests.js
  Description: Allows POST functionality
  Author: Karun Sharma
  Date 7-24-18
  Version: 1.1
*/
var container = document.getElementById("testJSON");
var editor = new JSONEditor(container,{"mode":"code"});

function onSubmitPostRequests(){
  var xhr = new XMLHttpRequest();
  var getJSONData = editor.get();
  var getDatabasePath = document.getElementById("dataBaseIdBox");
  if (getDatabasePath.value.length == 0 || getDatabasePath.value == null) {
    alert('Error, database path is either empty or null');
  }
  var urlString = 'http://localhost:8080/' + getDatabasePath.value;
  xhr.open('POST',urlString, true);
  xhr.setRequestHeader("Content-type", "application/json");
  if (document.getElementById("authorizationBox").value.length != 0 && document.getElementById("authorizationBox").value != null) {
    xhr.setRequestHeader('Authorization',document.getElementById("authorizationBox").value);
  }
  else {
    alert('Authorization header token is not correct');
  }
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