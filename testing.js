function someFunction(){
    let start = Date.now();
    while (Date.now() - start < 500) {
        //1000 nanoseconds = 1 second
        // do nothing
    }
    return "Hello";
}
console.log('Starting...');

let result = someFunction();
console.log(result);

console.log('...Finishing');

//////////////below is the example for asynchrounous programming////////////////
console.log("Start of script");

setTimeout( () => {
  console.log("First timeout completed");
}, 1000);

console.log("End of script");
//callback example///

// Declare function
function fetchData(callback) {
    setTimeout(() => {
      const data = {name: "John", age: 30};
      callback(data);
    }, 3000);
  }
  
  // Execute function with a callback
  fetchData(function(data) {
    console.log(data);
  });
  
  console.log("Data is being fetched...");

  //promise//
// Initialize a promise


  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise!");
    }, 5000);
});
console.log(myPromise)

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //code here will be executed regardless of the status
    //of a promise (fulfilled or rejected)
    console.log("this is the final state")
  });

  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  }
  
  getData();
