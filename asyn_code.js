let promise = new Promise((resolve, reject) => {
    
    let name = 'mulfranck'

    let now = Date.now()
    
    if (false) resolve(name + ' ' + now );
    else reject(name)
})


console.log(promise)

// promise.then((nigga) => {
//    console.log('this nigga is just a string: ', nigga)
// })

promise.then(null, er => {
    console.error(er)
})

promise.catch(() => {
    console.error('Why is this')
})

// promise.finally(() => {
//     console.log('this nigga should work right?')
// })