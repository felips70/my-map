var words = ["ground", "control", "to", "major", "tom"];

function map (arr, func) {
  var newArr = [];
  var word = "";
  for (i = 0; i < arr.length; i++) {
     word = func(arr[i]);
     newArr.push(word);

  }
  return newArr;
}

console.log(map(words, function(word) {
  return word.length;
}));
