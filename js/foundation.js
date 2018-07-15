var generateDataSet = function()
{
  var nameArr = ['John','George','Angie','Max','Carmen','Dean','Sam']

  var objArr = []

  for(var index = 0; index < nameArr.length; index++)
  {
      var tempObj = {
        "id": index + 1,
        "name": nameArr[index]
      };

      objArr.push(tempObj);
  }

  var fakeStudentNames = ['Bob', 'Jim', 'Phil'];
  var grades = ['A','B','C'];
  var objArr2 = [];

  for(var index = 0; index < 3; index++){
      objArr2.push(
      {
        "student": fakeStudentNames[index],
        "grade": grades[index]
      }
      );
  }

  return {'names': objArr,'students': objArr2};
}


module.exports = generateDataSet;
