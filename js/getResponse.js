/*File: getResponse.js
  Description: Takes backend JSON responses and converts them to boxes that look presentable
  Author: Karun Sharma
  Date 7-16-18
  Version: 1.0
*/
var responseCounter = 1;

function createDiv(data,sizeOfData,currentUnorderedList) {
  var getUnorderedList = currentUnorderedList;
  var currentList = document.createElement("li");
  var keys = Object.keys(data);
  for (var index = 0; index < sizeOfData; index++){
      var element = document.createElement("div");
      var responseToText = document.createTextNode(data[keys[index]]);
      element.appendChild(responseToText);
      element.className = "boxLayout";
      currentList.appendChild(element);
  }
  getUnorderedList.appendChild(currentList);
}

function iterateThroughElements(currentObj,currentList) {
  var sizeArr = [];
  var title = document.createElement("h2");
  title.appendChild(document.createTextNode("Response" + " "  + responseCounter.toString()));
  title.idName = "responseTitle";
  currentList.appendChild(title);
  console.log(Array.isArray(currentObj));
  if (!Array.isArray(currentObj)) {
     createDiv(currentObj,1,currentList);
  }
  else
  {
    for(var index = 0; index < currentObj.length; index++) {
      sizeArr.push(Object.keys(currentObj[index]).length);
    }
    for(var index = 0; index < sizeArr.length; index++){
      createDiv(currentObj[index], sizeArr[index],currentList);
    }
  }

  responseCounter++;
}
var xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (xhr.status === 200)
  {
    var convertStringtoObj = JSON.parse(xhr.response);
    console.log(convertStringtoObj);
    var getList = document.getElementsByTagName('ul')[0];
    var getMainDiv = document.getElementById('boxCreation'); 

    if (Object.keys(convertStringtoObj).length > 1) {
        for(var index = 0; index < Object.keys(convertStringtoObj).length - 1; index++) {
            var tempUL = document.createElement('ul');
            tempUL.className = "mainUnorderedList";
            getMainDiv.appendChild(tempUL);
        }
    }
    var getAllUnorderedLists = Array.prototype.slice.call(document.getElementsByClassName("mainUnorderedList"));
    console.log(getAllUnorderedLists);

    if (Object.keys(convertStringtoObj).length > 1){
      for (var key in convertStringtoObj) {
          iterateThroughElements(convertStringtoObj[key],getAllUnorderedLists.shift());
      }

    }
    else
    {
        iterateThroughElements(convertStringtoObj,getAllUnorderedLists[0]);
    }

  }
  else
  {
    console.log('Error in getting data from server');
  }
  $('.mainUnorderedList li:nth-child(1n)').css({"clear":"both"});
};
xhr.open('GET','http://localhost:3000/db',true);
xhr.send(null);
