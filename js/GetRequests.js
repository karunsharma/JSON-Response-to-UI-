/*File: GetRequests.js
  Description: New version of handling get requests
  Author: Karun Sharma
  Date 7-26-18
  Version: 1.2
*/
function submitRequest() {

  var xhr = new XMLHttpRequest();
  var getId = document.getElementById('idBox');
  var getDatabasePath = document.getElementById("dataBaseIdBox");
  if (getDatabasePath.value.length == 0 || getDatabasePath.value == null) {
    alert('Error, database path is either empty or null');
  }
  var urlString = 'http://localhost:8080/' + getDatabasePath.value + '/' + getId.value;
  xhr.open('GET', urlString,true);
  xhr.setRequestHeader("Content-type", "application/json");
  if (document.getElementById("authorizationBox").value.length != 0 && document.getElementById("authorizationBox").value != null) {
    xhr.setRequestHeader('Authorization',document.getElementById("authorizationBox").value);
  }
  else {
    alert('Authorization header token is not correct');
  }
  xhr.send(null);
  xhr.onload = function() {
    if (xhr.status === 200) {
      drawLists(xhr.response,getId.value);
    }
  }
  return false;
}

function drawLists(responseObj,id) {
   var preTag = document.createElement('pre');
   var createList = document.createElement('li');
   var createDiv = document.createElement('div');
   createDiv.className = 'testingFadeIn';
   var toObj = JSON.parse(responseObj);
   var jsonResponse = document.createTextNode(JSON.stringify(toObj,undefined,2));
   var idtoTextNode = document.createTextNode('Get request ID: ' + id);
   var getMainList = document.getElementsByClassName('mainUnorderedList')[0];
   getMainList.style.visibility = 'visible';
   var title = document.createElement('H3');
   var textTitle = document.createTextNode('Get request ID: ' + id);
   title.appendChild(textTitle);
   createDiv.appendChild(title);
   createList.appendChild(jsonResponse);
   createDiv.appendChild(createList);
   createDiv.className = 'boxLayout';
   preTag.appendChild(createDiv);
   preTag.className = 'testf';
   $(function(){
      $('.mainUnorderedList').hide().append(preTag);
      $('.mainUnorderedList:last').fadeIn('slow');

   });
}

function applyEffectForGetButtons(str){
  $(function(){
    $(str).on('mouseover', function(){
      $(this).fadeTo('slow',0.5,function(){
        $(str).on('mouseout', function(){
          $(this).fadeTo('slow',1.0,function(){
          });
        });
      });
    });
  });
}

var submitButtonEvent = document.getElementById('getRequestSubmit');
submitButtonEvent.onclick = submitRequest;
applyEffectForGetButtons('#getRequestSubmit');
applyEffectForGetButtons('#clearRequests');

$(function(){
  $('#clearRequests').on('click',function(){
    $('.mainUnorderedList').each(function(){
      $(this).remove();
    });
  });
});
