# Every component has lifecycle methods which could be monitored. Three phases of component lifecycle are Mounting, Updating, Unmounting.

1. `Mounting`
* `Constructor`: called before anything is initiated, natural to setup state in here.
* `getDerivedStateFromProps`:  method is called right before rendering the element(s) in the DOM. This is the natural place to set the state object based on the initial props. It takes state as an argument, and returns an object with changes to the state.
* `render()`: this function is responsible for rendering the element to the DOM.
* `componentDidMount()`: method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.

2. `Updating`: when the component is updated.
* `getDerivedStateFromProps`: Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated. This is still the natural place to set the state object based on the initial props.
* `shouldComponentUpdate`: returns a boolean value that specifies whether a react component should update or not. Also `render()` method is called again after updating.
* `getSnapshotBeforeUpdate`: State and props before update
* `componentDidUpdate`:The componentDidUpdate method is called after the component is updated in the DOM.

3. `Unmounting`
* `componentWillUnmount`: The componentWillUnmount method is called when the component is about to be removed from the DOM.