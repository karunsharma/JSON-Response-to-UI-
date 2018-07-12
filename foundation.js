var generateDataSet = function()
{
  var nameArr = ['John','George','Angie','Max','Carmen','Dean','Sam']

  var objArr = []

  for(var index = 0; index < nameArr.length; index++)
  {
      var tempObj = {
        "id": index + 1,
        "name": nameArr[index]
      }

      objArr.push(tempObj)
  }

  return {'names': objArr}
}

module.exports = generateDataSet
