function createArray(){
  var candy = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candy;
}

function addElementToArray(movies){
  movies.push("A Christmas Story");
  return movies;
}

function accessElementFromArray(entrepreneurs){
  return entrepreneurs[2];
}

function replaceElementInArray(authors){
  authors[1] = "Carter";
  return authors
}

function removeElementFromArray(dishes){
  dishes.splice(2,3, 'Roast Chicken');
  return dishes
}

function iterateArray(numbers){
  var newNums = [ ]
  numbers.forEach(function(n){
    newNums.push(n+5)
  })
  return newNums
}

// var newNums = originalNumber + 5;
