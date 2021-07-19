# Side Effects:
# useEffect()
* Used to handle side effects.
* combines componentDidMount, componentDidUnmount and ...
* we return a function from inside the useEffect as a clean up function
* second argument is an array which contains pointers which can be used to re-render or re-run useEffect when any of those pointer values change.

# useReducer()
* useState() often becomes hard or error-prone to use - it's easy to to write bad, inefficient or buggy code in such scenarios.
* useReducers can be used for more powerful state management.
* useReducers is a bit more complex and requires a setup so useState is still the preferred choice in most cases.
* We can use useReducers when we're updating a useState var where we're checking another useState var.
* For e.g. trying to validate email when the email isn't yet updated to latest value.
