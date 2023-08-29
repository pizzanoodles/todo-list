const answer = "No";
let promise = new Promise((resolve, reject) => {
    console.log("Promise is started.");
    if (answer === "Yes") {
        resolve("Promise is resolved!");
    } else {
        reject("Promise has been rejected!");
    }  
});
promise.then((message) => {
    console.log("Resolve message: ", message);
}, (error) => {
    console.log("Reject message: ", error);
})