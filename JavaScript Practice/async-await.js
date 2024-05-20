const p = new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve("Promise Resolve")
    }, 5000);
});

async function handlePromise () {
    console.log("Hello world")
    // JS engine will wait for resolving the promise 
    const val = await p 
    console.log("Hello Async world")
    console.log(val)
}

handlePromise()