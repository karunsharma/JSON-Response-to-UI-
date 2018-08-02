/*File: GetRequests.js
  Description: New version of handling get requests
  Author: Karun Sharma
  Date 7-29-18
  Version: 1.3
*/

var mainURL  = 'http://localhost:8080/users'; //URL WHICH POINTS TO THE USERS ENDPOINT (Changeable)
function submitRequest(str) {
  var xhr = new XMLHttpRequest();
  var urlString = mainURL + str;
  var getId = document.getElementById('idBox');
  xhr.open('GET', urlString,true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader('Authorization','foo');
  xhr.setRequestHeader('Access-Control-Allow-Origin','*');
  xhr.send(null);
  xhr.onload = function() {
    if (xhr.status === 200) {
      $('.mainUnorderedList').each(function(){
        $('.mainUnorderedList .testf').remove();
      });
      console.log(xhr.response);
      drawLists(xhr.response,'Get request ID: ' + getId.value);
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
   var idtoTextNode = document.createTextNode(id);
   var getMainList = document.getElementsByClassName('mainUnorderedList')[0];
   getMainList.style.visibility = 'visible';
   var title = document.createElement('H3');
   var textTitle = document.createTextNode(id);
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

applyEffectForGetButtons('#getRequestSubmit');
applyEffectForGetButtons('#filterGetRequestSubmit');

$(function(){
  $('#getRequestSubmit').on('click',function(){
    var getId = document.getElementById('idBox');
    submitRequest('/'  + getId.value);
    return false;
  });
});

$(function(){
  $('#filterGetRequestSubmit').on('click',function(){
    submitRequest('?filter::name:' + $('#filterInput').val());
    return false;
  });
});