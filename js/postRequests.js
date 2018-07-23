/*File: postRequests.js
  Description: Allows POST functionality
  Author: Karun Sharma
  Date 7-22-18
  Version: 1.0
*/

function onSubmitPostRequests(){
  var xhr = new XMLHttpRequest();
  var textBox = document.getElementById('textAreaId');
  console.log(JSON.stringify(textBox.value));
  xhr.open('POST','http://localhost:8080/users/', true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(textBox.value);
  xhr.onload = function () {
    if (xhr.response === 200) {
      console.log('All is good!');
    }
    else{
      console.log(xhr.response);
    }
  }
  return false;
}

var postButtonRequest = document.getElementById('submitButtonStyle');
postButtonRequest.onclick = onSubmitPostRequests;

