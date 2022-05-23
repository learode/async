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


### Actuallity
#### `resolve`
takes an argument and returns it when the `.then` is called. ie. the `resolve` calls the `.then` and gives it the values passed into the `resolve`
If the value passed in the `resolve` is a function the function is returned, if the value is any value, character, string then it is passed into the `.then`

By so, the `.then` can have a function to handle the passed value or run the passed function.

![Resolve returns any thing passed to it](/assets/resolve_returns.png)
Function passed is returned.

![Run a returned function](/assets/running_passed_function.png)
Function passed call be executed in the `.then`

![String passed](/assets/string_passed.png)
A string is easily received.

### Async Await
why _async await_?
- Makes code cleaner

    #### `async` keyword
    - lets the js engine to create a thread for runing the block of code, the actual async action.
    - A keyword that let Js engine know the fumction declared is an asynchronous function.
    - This keyword makes possible of using `await` in this function.
    - Returning in an `async` function is like calling a _resolve_ and _reject_ in Promise.
    - `async` can be used like the `function` keyword, and before the  `function`

        ```js
        async function someFctn(para) { ... }
        ```

        ```js
        const someArowFctn = async (para) => { ... }
        ```

    ### `await` keyword
    - Makes Js to wait on the async action's results
    - Used to get a value from a function, normally the `.then()`
    - Instead of using `.then` after a on a promise, we can simply assign a variable to the result using _await_


    ```js async await
    async function getUsers(url) {
        const Users = await server.getPeople();
        const UsersJson = await Users.json();

        return UsersJson;
    }
    ```

#### Error Handling
- The `.catch()` or `.then(null, ())` can be used after the _async function_ call.
    ```js
    getUsers(url).catch(er => { ... })
    ```

- Or the errors can be handled in the _async function_ using the `try/catch` block.
```js
    async function getUsers(url) {
        try {
            const Users = await server.getPeople();
            const UsersJson = await Users.json();

            return UsersJson
        } catch(er) {
            console.error('Nigga an ', er, ' occured.')
        }
    }

```

#### Thress ways of asynchoronous in js.
- callback action asynchronous
- promise .then .catch .finally
- async await