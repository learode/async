No resolve or reject in the promise constructor the .then is not ran.
Same as the `.catch`,  `.finally`.

why?
These methods are invoked by either a `resolve` or a `reject`.

### Resolve promise
`resolve` is called in the Promise constructor which makes the `.then` and the `.finally` to run. Also the internal properties _Result_ and _State_ are changed.
- _Result_ is given the value passed into the `resolve` function.
- _State_ is given the value *fulfilled*

![Resolved promise](/assets/resolved%20promise.png)

### Rejected promise
`reject` is called instead of `resolve`, the `.then` and `.catch` is executed but the html reports _uncaught in promise_ error

![Rejected promise](/assets/rejected%20promise.png)