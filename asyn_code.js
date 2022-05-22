let promise = new Promise((resolve, reject) => {
    
    let name = 'mulfranck'

    let now = Date.now()
    
    resolve(name + ' ' + now )
})


console.log(promise)

promise.then((nigga) => {
   console.log('this nigga is just a string: ', nigga)
})

promise.catch(() => {
    console.error('Why is this')
})

promise.finally(() => {
    console.log('this nigga should work right?')
})