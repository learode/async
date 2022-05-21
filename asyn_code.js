let promise = new Promise((resolve, reject) => {
    resolve((nigga) => {
        console.log('does resolve take in functions?', nigga)
    })
})


console.log(promise)

promise.then((nigga) => {
    console.log('what the hell is this', nigga)
})

promise.catch(() => {
    console.error('Why is this')
})

promise.finally(() => {
    console.log('this nigga should work right?')
})