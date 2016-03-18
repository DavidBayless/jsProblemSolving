var callBackButton = document.querySelector('.callback');
var promiseButton = document.querySelector('.promise');

callBackButton.addEventListener('click', function() {
  console.log("I'm a callback and I've been invoked!");
});

function setPromiseButtonClick() {
  return new Promise(function(resolve, reject) {
    promiseButton.addEventListener('click', function(event) {
      if (event.which === 1) {
        console.log('hello');
        resolve(event);
      } else {
        reject(event);
      }
    });
  });
}

setPromiseButtonClick()
  .then(function(response) {
    console.log("I'm a promise and I've been invoked!");
    setPromiseButtonClick().then(function(response) { console.log('Haha joke is on you!');});
  })
  .catch(function(error) {
    console.log("I've been used incorrectly");
  });
