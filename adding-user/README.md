# Wrapper and Fragments are used to solve the problem of div nesting and extend reusability of components.

* React needs a top level `root` element for every individual component.
* This generally means we can't render elements side by side we have to wrap them in something.
* HTML has to render this element which only serves purpose of rendering other elements.
* This leads to slow down performance. Hence we use Wrappers(HOC) or Fragments which act as root elements just return the props without any html elements being at root.
* Note: fragments can be used by wrapping code in `<>...</>` if the development workflow supports this

# Portals are used to port elements to a specific place in a html file.

* For example here we'd want our modal to be beside the root element because we might want it to overlay on the complete root element.
* So having the modal next to root is a better design principle.
* Portal needs 2 things:
    1. A place that we want the component port to.
    2. Let the component know that it has to port to that place.
* Steps:
    1. Seperate the components to port in individual components.
    2. Then we call a method from 'react-dom' library.
* The idea with portals is really simple that rendered html content is moved somewhere else.

# Refs allow us to access to other DOM elements and work with them.
* Updating the input state with every keystroke when we only need them while submitting the form sounds a little bit redundant.
* Refs can help us here.
* With refs we set up a connection to html element which is being rendered  nad JS code.
* useRef() returns a value which allows us to work with the element which it is connected to.
* If we just want to read a value refs are probably from state solution.
* If we manipulate values like this with refs they are also called by uncontrolled components, because the value inside them is not controlled by react.