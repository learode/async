let promise = new Promise((resolve, reject) => {
    resolve((nigga) => {
        console.log('does resolve take in functions?', nigga)
    })
})


console.log(promise)

promise.then((nigga) => {
    // a function is recieved from resolve
    nigga("that function was anyn and needed a parameter")
})

promise.catch(() => {
    console.error('Why is this')
})

promise.finally(() => {
    console.log('this nigga should work right?')
})