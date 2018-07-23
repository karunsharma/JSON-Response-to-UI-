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
      drawLists(xhr.response,getId.value);
    }
  }
  return false;
}

function drawLists(responseObj,id) {
   var createList = document.createElement('li');
   var createDiv = document.createElement('div');
   var jsonResponse = document.createTextNode(responseObj);
   var idtoTextNode = document.createTextNode('id: ' + id);
   var getMainList = document.getElementsByClassName('mainUnorderedList')[0];
   var title = document.createElement('h2').appendChild(idtoTextNode);
   createList.appendChild(jsonResponse);
   createDiv.appendChild(createList);
   createDiv.className = 'boxLayout';
   getMainList.appendChild(createDiv);
}



var submitButtonEvent = document.getElementById('getRequestSubmit');
submitButtonEvent.onclick = submitRequest;
