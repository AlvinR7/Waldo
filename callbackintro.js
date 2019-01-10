// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr[i], i);   // execute callback
    }
  }
}

function actionWhenFound(name, i) {
  console.log('Found ' + name + ' at index', i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// found.forEach(actionWhenFound)







// var names = ["Alice", "Bob", "Waldo", "Winston"]

// var printName = function(name, i) {
//   console.log(name, ' at ', i);
// }

// names.forEach(printName)

// arr.forEach(found())


// var names = ['Khurram', 'Don', 'Joel', 'David', 'etc']

// var printName = function(name, i) {
//   console.log(name, ' at ', i);
// }

// names.forEach(printName)