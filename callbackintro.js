// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name, i) {
    if (name === "Waldo") {
      found(name, i);
    }
  }

function actionWhenFound(name, i) {
  console.log('Found ' + name + ' at index', i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

