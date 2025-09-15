function callWithDelay(callback) {
  setTimeout(() => {
    callback();
  }, 2000); 
}

function sayHello() {
  console.log("Привет! через 2 секунды.");
}

console.log("Ждём 2 секунды...");

callWithDelay(sayHello);