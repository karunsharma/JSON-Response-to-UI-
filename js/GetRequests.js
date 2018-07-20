/*File: GetRequests.js
  Description: New version of handling get requests
  Author: Karun Sharma
  Date 7-20-18
  Version: 1.0
*/
function submitRequest() {
  var xhr = new XMLHttpRequest();
  var getId = document.getElementById('idBox');
  console.log(getId.value);
  var urlString = 'http://localhost:8080/users/' + getId.value;
  xhr.open('GET', urlString,true);
  xhr.send(null);
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.response);
    }
  }
  return false;
}



var submitButtonEvent = document.getElementById('getRequestSubmit');
submitButtonEvent.onclick = submitRequest;
