let promise = new Promise((resolve, reject) => {
    resolve("Nigga")
    // 
})


console.log(promise)

promise.then(() => {
    console.log('what the hell is this')
})

promise.catch(() => {
    console.log('Why is this')
})

promise.finally(() => {
    console.log('this nigga should work right?')
})