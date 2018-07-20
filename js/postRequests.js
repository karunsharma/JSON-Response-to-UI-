var $getPostRequestTextBox;
$('document').ready(() => {
  $('#submitButtonStyle').on('mouseover', () => {
    $getPostRequestTextBox = $('#textAreaId').text();
    console.log($getPostRequestTextBox);
  });
});
var postRequestConnection = new XMLHttpRequest();
postRequestConnection.open('POST', 'http://localhost:3000/names',true);
postRequestConnection.send($getPostRequestTextBox);
