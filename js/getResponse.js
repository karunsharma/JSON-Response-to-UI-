var responseCounter = 1;
var createDiv = function(data,sizeOfData) {
  var getUnorderedList = document.getElementsByTagName('ul')[0];
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
  responseCounter++;
}
var xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (xhr.status === 200)
  {
    var convertStringtoObj = JSON.parse(xhr.response);
    var getList = document.getElementsByTagName('ul')[0];
    var title = document.createElement("h2");
    title.appendChild(document.createTextNode("Response" + " "  + responseCounter.toString()));
    getList.append(title);
    var getCurrentList;
    var status = true;
    var sizeArr = [];
    for(var index = 0; index < convertStringtoObj.length; index++) {
      sizeArr.push(Object.keys(convertStringtoObj[index]).length);
    }
    console.log(sizeArr.length);
    for(var index = 0; index < sizeArr.length; index++){
      createDiv(convertStringtoObj[index], sizeArr[index]);
    }
  }
  else
  {
    console.log('Error in getting data from server');
  }
  $('.mainUnorderedList li:nth-child(1n)').css({"clear":"both"});
};
xhr.open('GET','http://localhost:3000/names',true);
xhr.send(null);
