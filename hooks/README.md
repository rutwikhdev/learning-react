1. useState: this.state
```javascript
const [count, setCount] = useState(0)
```
2. useEffect: data fetching, subscriptions, manually changing DOM from React components ("side effects"). 
* Same as componentDidMount, componentDidUpdate, componentWillUnmount
* Clean up work can also be done here by returning a function.
