function numbersToObject[2,4,6,8,10,12,14] {
  const resultObject = {};
  var i = 0;
  var array = [2,4,6,8,10,12,14];
  for (i = 1; i < arguments.length; i++) {
    for (key in arguments[i]) {
      if (obj.hasOwnProperty && !_.isArray(obj)) {
        obj[key] = arguments[i][key];
      }
    }
  }
  for (var j = 0; j < obj.length; j++) {
    for (key in obj[j]) {
      array[j] = obj[j];
    }
  }
  return array;
}

