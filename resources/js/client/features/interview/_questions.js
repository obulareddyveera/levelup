export default [
    {
        id: 1,
        question: "Tell me about your self?",
        tags: "Basic",
        answers: [
            {
                rating: 3,
                answer: `<div class="bg-light text-secondary">
                    My self Rambabu Vuppari
                    I have around 8 years of experience as a software developer. I have been working as a frontend developer for quite some time. 
                    I have hands on experience with HTML5, CSS3, Bootstrap, and Materialize CSS along with various JavaScript frameworks like React.js, 
                    Redux (state management), and Angular.js as well.
                
                    <div class="text-danger">
                    With my last project at state-street, I got good experience in upgrading old legacy backbone.js application to React.js responsive 
                    web application using ApolloClient (i.e. Apollo GraphQL Client) and GraphQL as restful service.
                    </div>
                    
                    <div class="text-primary">
                    With my current project “Verizon” – We are adding additional features to support 5G registrations for customers. 
                    Here I am working closely with form data submission and validation.  
                    In this project we are using Formik, YUP validator, Redux (for state management).
                    </div>
                    Regarding the development process we are following agile methodology working in bi-weekly sprints.
                    <h6>Profile Details</h6>
                    Completed BTech 2009(IT)
                    <table>
                        <thead>
                        <tr>
                            <th>Period</th>
                            <th>#</th>
                            <th>About</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="bg-dark text-light">
                            <td>Mar-2013 -- July-2015</td>
                            <td>Working at Hyderabad</td>
                            <td>Serco - is staffing Agency Company. I worked with their internal portal which helps HR-Executives to handle employee recutment and billing</td>
                        </tr>
                        <tr class="bg-light text-dark">
                            <td>July-2015 -- May 2017</td>
                            <td>
                                <div>Education: Missouri Western State University, St Joseph( close to kansas city), MO(Missouri)</div>
                                <div>Course: Information Systems</div>
                                <ul>
                                    <li>VISA: F1 VISA </li>
                                    <li>
                                        <div>Type - CPT (Curricular Practical Training)</div>
                                        <div>Period - 11 Months max</div>
                                        <div>Constraint - Remote locations is not eligible, only at univercity location</div>
                                    </li>
                                    <li>
                                        <div>Type - OPT (Optional Practical Training)</div>
                                        <div>Period - Default One Year and extension upto 18-24 months </div>
                                        <div>Constraint - Remote locations is eligible (any location)</div>
                                    </li>
                                </ul>
                            </td>
                            <td>While doing graduation I started working via CPT (Curricular Practical Training) [CPT - max 11 months]</td>
                        </tr>
                        <tr class="bg-dark text-light">
                            <td>Aug-2016 -- Aug 2018</td>
                            <td>
                                <div>Location: paladion, Herndon, VA(Virginia)</div>
                            </td>
                            <td>Graduated MS</td>
                        </tr>
                        <tr class="bg-dark text-light">
                            <td>Sep-2018 -- Dec 2019</td>
                            <td>
                                <div>Location: StateStreet, Boston, MA</div>
                            </td>
                            <td>There is an old trading application.</td>
                        </tr>
                        <tr class="bg-light text-dark">
                            <td>July-2020 -- Till date</td>
                            <td>
                                <div>Education: NEC (New England Collage)</div>
                                <div>Course: Information Systems</div>
                            </td>
                            <td>Activily working as CPT</td>
                        </tr>
                        <tr class="bg-dark text-light">
                            <td>Jan-2020 -- Till date</td>
                            <td>
                                <div>Location: Verizon, Piscataway, NJ</div>
                            </td>
                            <td>Verizon E-Commerce portal</td>
                        </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        showAnswer: true
    },
    {
        id: 2,
        question: "What are new semantic tags?",
        tags: "HTML, HTML5, Front-End",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-danger">
                            HTML5 semantic tags define the function and the category of the text, simplifying the work for browsers, 
                            search engines, and for developers. HTML5 introduced new semantic elements to define different parts of a 
                            web page like header, footer, article, nav, section, aside, details, main, summary and so on.
                        </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 3,
        question: "Difference between div and span?",
        tags: "HTML, HTML5, Front-End",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-danger">
                            div is a block level element and span is an inline element. Basically, div takes entire width of its parent tag 
                            while span takes only necessary width.
                        </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 4,
        question: "difference between local storage and session storage?",
        tags: "HTML, HTML5, Front-End",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-danger">
                            <ul>
                                <li>localStorage and sessionStorage properties in JavaScript allow to save key/value pairs in a web browser.</li>
                                <li><b>localStorage stores data with no expiration date.</b> data will not be deleted when the browser is closed, 
                                and in order to delete the localStorage, we need to clear the browser cache.</li>
                                <li><b>data in sessionStorage is saved temporarily</b>, it means the sessionStorage data is cleared when the window or 
                                tab is closed or session ends.</li>
                            </ul>
                        </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 5,
        question: "What is box modal?",
        tags: "CSS, CSS3",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    Box model is used to create the design and layout of web pages. It is used to customize the layout of html elements. 
                    The browser renders every element as a rectangular box. The actual content is wrapped with padding then borders then margins.
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 6,
        question: "what is display flex?",
        tags: "CSS, CSS3",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    By added display: flex property to an element, we are making the element a flex container. When display: flex property is added to an element, we are really defining display: block flex. The outer display type of our flex container is block and it acts like a block level element in normal flow. The inner display type is flex, so items directly inside our container will participate in flex layout.
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 7,
        question: "what are closure?",
        tags: "Javascript",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                Closure means that an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned. To use a closure, simply define a function inside another function and expose it.Closure is used to hide the implementation details in JavaScript. In other words, it can be useful to create private variables or functions.
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 8,
        question: "Difference between let, const an var?",
        tags: "Javascript, ES6",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    Var, let and const are used for variable declarations in JavaScript. <br />
                    Var is older way of variable declaration where are let and const are introduced in ES6 to overcome some of the limitations of var declarations. <br/>
                    -- <span class="text-danger">Var declarations are global, and function scoped where as let and const are block scoped.</span> <br/>
                    <ul>
                        <li>Var declared variables can be updated and re-declared within its scope;</li>
                        <li>let variables can be updated but <b>not re-declared</b> within its scope</li>
                        <li>const variables <b>cannot</b> be updated or re-declared within its scope.</li>
                    </ul>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 9,
        question: "Different data types in JavaScript?",
        tags: "Javascript",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    JavaScript supports Primitive and complex data types. Boolean Number, String, undefined are the Primitive data types supported by JavaScript. Object and function are the Complex types supported by JavaScript.
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 10,
        question: "what are arrow functions?",
        tags: "Javascript ES6",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    Arrow function in ES6 removes some of the syntax along with refining how to handle “this”. Arrow functions do not have their own “this”. They are not well suited for defining object methods. Arrow functions are not hoisted that means they must be defined before they are used. Using const is safer than using var because a function expression is always a constant value.
                    <br/> // ES5
                    <br/> var x = function(x, y) {
                        <br/> return x * y;
                    <br/> }
                    <br/> // ES6
                    <br/> const x = (x, y) => x * y;
                    <br/> 
                    <br/> hello = function() {
                        <br/> return "Hello World!";
                    <br/> }
                    <br/> hello = () => {
                        <br/> return "Hello World!";
                    <br/> }
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 11,
        question: "What is the different between == and ===?",
        tags: "Javascript",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <ol>
                        <li>
                        == compares the value of the variables not their type; if we use == to compare a string value 5 and a number value 5 it returns true.
                        </li>
                        <li>
                        === compares the value and the type of value that means if we use === to compare a string value 5 and a number value 5 it returns false. It returns true only when the value and type are matching.
                        </li>
                    </ol>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 12,
        question: "What is event loop?",
        tags: "Javascript, event-loop, event loop,",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                JavaScript executes all operations on a single thread, but with the help of call stack, API stack, event queue and event loop, it gives the illusion of multi-threading. The event loop handles the process of checking whether the call stack empty or not. If the call stack is empty, new functions are added from the event queue to call stack. If the call stack is not empty, then the function call is processed. Event loop plays a major role behind JavaScript's asynchronous programming.
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 13,
        question: "promises vs async/await",
        tags: "Javascript, promises, async/await, async, await,",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                Both promises and async/await are built on promises. Only the promise chain is asynchronous in promises whereas the entire wrapper function is asynchronous in async/ await. Synchronous work can be handled in the same callback that means multiple promises can use Promise.call() in case of promises whereas synchronous work needs to be moved out of the callback that means multiple promises can be handled with simple variables. Error handling is similar in both promises and async/ await.
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 14,
        question: "what are promises?",
        tags: "Javascript, promises,",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback and writing the cleaner code. A promise is an object that may produce a single value sometime in the future with a resolved value or a reason that it is not resolved (for example, network error).
                <br/> It will be in one of the 3 possible states:
                <ol>
                    <li><b>Pending:</b> Pending is the initial state of the Promise before an operation begins</li>
                    <li><b>Fulfilled:</b> Fulfilled means the specified operation was completed.</li>
                    <li><b>Rejected:</b> Rejected means the operation did not complete. In this case an error value will be thrown.</li>
                </ol>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 15,
        question: "Difference between react and angular?",
        tags: "React.js, React, angular, angular.js",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <ol>
                        <li>React is a library and has only the view layer whereas Angular is a framework and has complete MVC functionality.</li>
                        <li>React uses Virtual DOM whereas Angular uses browser’s DOM.</li>
                        <li>React uses JSX that looks like HTML in JS whereas Angular follows the template approach for HTML, which makes code shorter and easy to understand.</li>
                        <li>In React data flows in one direction only, this makes debugging easy whereas in Angular, data flows both ways that is it has two-way data binding between parent and child this makes debugging a little difficult.</li>
                    </ol>                
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 16,
        question: "Why should we use react?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <ol>
                        <li>We use React because of virtual DOM, basically it is JavaScript copy of DOM</li>
                        <li>As DOM is in tree structure, react uses a diffing algorithm to check what nodes should be re-rendered and it will only change that part of the tree. So, the view rendering is very efficient in react.</li>
                        <li>We can also create reusable components in react</li>
                    </ol>                
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 17,
        question: "What is the difference between state and props?",
        tags: "React.js, React, state, props",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <ol>
                        <li>Props is a way to pass data between parent to child, this is uni-directional, and props are immutable.</li>
                        <li>state is very owned to component, so it is used to hold some data in the component and state can be updated using set-state method.</li>
                    </ol>                
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 18,
        question: "what are higher order components?",
        tags: "React.js, React, HOC",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    Higher order components take a component as input and returns same component with some added properties.               
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 19,
        question: "what are PropTypes?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    PropTypes is a basic type checker (runtime checker) in React. It checks the types of props being passed to a given component.               
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 20,
        question: "Difference between class components and functional components.",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    Class components: </br>
                    <ol>
                        <li>A class component will extend from React.Component and create a render function which returns a React element.</li>
                        <li>It must have the render() method returning HTML.</li>
                        <li>Also known as Stateful components because they implement logic and state.</li>
                        <li>React lifecycle methods can be used inside class components.</li>
                    </ol>
                    Functional Components: <br/>
                    <ol>
                        <li>A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element and there is no render method used in functional components.</li>
                        <li>Also known as Stateless components as they simply accept data and display them in some form, that is they are mainly responsible for rendering UI.</li>
                        <li>React lifecycle methods cannot be used in functional components; with the help of hooks we can use state and lifecycle methods in functional components.</li>
                    </ol>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 21,
        question: "What is context API?",
        tags: "React.js, React, Context API",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                When we need to pass down the data, to components that lives in many levels of nested components, to avoid passing the same data through so many levels down, we can use context API so that every component can have access to it without passing
                down data through multiple levels.               
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 22,
        question: "how do you use state and lifecycle methods in functional components?",
        tags: "React.js, React, lifecycle",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <ol>
                        <li>In functional components, with the help of hooks we can use state and lifecycle methods.</li>
                        <li>We use useState() hook or State hook to access state and useEffect() hook or Effect hook to access lifecycle methods in functional components.</li>
                    </ol>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 23,
        question: "what is redux?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <ol>
                        <li>Redux is a state management system for JavaScript applications based on Flux design pattern. It is tiny in size and has no dependencies.</li>
                        <li>Redux follows Single source of truth, state is read-only and changes to state are made with pure functions. These principles make state becomes more predictable.</li>
                        
                    </ol>
                    Redux contains various components like: <br />
                    <ul>
                        <li>actions are plain JavaScript objects that hold type of action and the optional payload, reducers are pure functions to compute new state based on action that got triggered, store, containers, and components.</li>
                        <li>Using connect(), we can map the actions and we can map the new state to the component as props.</li>
                    </ul>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 24,
        question: "what are useCallback and useMemo?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <ol>
                        <li>useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</li>
                        <li>useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.</li>
                    </ol>                
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 25,
        question: "How do you make asynchronous calls in a react app?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <ol>
                        <li>We can make asynchronous calls in react using window.fetch or using axios.</li>
                        <li>While using Redux, we use redux-saga and redux-thunk.</li>
                    </ol>                
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 26,
        question: "what is a life cycle of a class component? how are they replaced in functional components with hooks?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    The component lifecycle has three distinct lifecycle phases: <br/>
                    <ol>
                        <li><b>Mounting:</b> The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.</li>
                        <li><b>Updating:</b> In this phase, the component get updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() methods.</li>
                        <li><b>Unmounting:</b> In this last phase, the component is not needed and get unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.</li>
                    </ol>
                    Functional Component: <br/>
                    <ul>
                        <li>In functional components, with the help of useEffect() hook we can use side effects
                        of the lifecycle methods like componentDidMount(), componentDIdUpdate(),
                        componentWillUnmount().</li>
                        <li>useEffect takes a callback method and an optional state param.</li>
                        <li>useEffect runs after initial render and each update.</li>
                    </ul>
                    Lifecycle: <br />
                    <ol>
                        <li><b>getDerivedStateFromProps:</b> Invoked right before calling render() and is invoked
                        on every render. This exists for rare use cases where you need derived state. Worth
                        reading if you need derived state.</li>
                        <li><b>componentDidMount:</b> Executed after first rendering and here all API calls, DOM or
                        state updates, and set up event listeners should occur.</li>
                        <li><b>shouldComponentUpdate:</b> Determines if the component will be updated or not. By
                        default, it returns true. If you are sure that the component doesn't need to render after
                        state or props are updated, you can return false. It is a great place to improve
                        performance as it allows to prevent a re-render if component receives new prop.</li>
                        <li><b>getSnapshotBeforeUpdate:</b> Executed right before rendered output is committed to the
                        DOM. Any value returned by this will be passed into componentDidUpdate(). This is
                        useful to capture information from the DOM i.e. scroll position.</li>
                        <li><b>componentDidUpdate:</b> Mostly it is used to update the DOM in response to prop or
                        state changes. This will not fire if shouldComponentUpdate() returns false.</li>
                        <li><b>componentWillUnmount:</b> It will be used to cancel any outgoing network requests or
                        remove all event listeners associated with the component.</li>
                    </ol>
                    React 16.3 & greater versions <br />
                    <img class="img-fluid" src="https://miro.medium.com/max/3348/0*OoDfQ7pzAqg6yETH." />
                    <img class="img-fluid" src="https://miro.medium.com/max/1200/1*Y4Sf-f3WRHh1H1345r_kRQ.jpeg" />

                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 27,
        question: "what is context in React?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
                </div>`
            },
            {
                rating: 3,
                answer: `<div class="text-secondary">
                <div class="bg-danger text-light">
                "Context provides a way to pass data through the component tree without having to pass props down manually at every level"
                </div>
                When to use the Context API? <br />
                <div>It can also be used in a multilingual application where we want to implement multiple languages that can be translated into the required text with the help of ContextAPI. It will save prop-drilling</div>
                <ul>
                    <li>
                        <div>const MyContext = React.createContext(defaultValue);</div>
                        <div>
                            <code>&lt;MyContext.provider value={{counter:1}} /></code>
                        </div>
                    </li>
                    <li>
                    Consuming Context With <b>Class Components</b> <br />
                    <code>
                    render() { <br />
                        &lt;MyContext.consumer&gt;<br />
                            &nbsp;{ <br />
                                &ensp;(value) => &lt;div&gt;{value}&lt;/div&gt;<br />
                            &nbsp;}<br />
                        &lt;/MyContext.consumer&gt;<br />
                    }<br />
                    </code>
                    </li>
                    <li>
                    Consuming Context With <b>Functional Components</b> <br/>
                    const value = useContext(MyContext);
                    </li>
                </ul>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 28,
        question: "What is useEffect equivalent in class component?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    useEffect Hook lets you perform side effects in function components. with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
                    <br />
                    <code>
                        React.useEffect(() => {
                            return (
                                // act as componentWillUnmount
                            )
                        })
                    </code>               
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 29,
        question: "How to use componentWillUnmount in react hooks?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    As per react hooks rule whenever an effect received a return function it runs only at the time of cleanup of the component, which is equivalent to componentWillUnmount class component lifecycle method.
                    <br />
                    <code>
                        React.useEffect(() => { 
                            document.addEventListener('click', handleClick);
                            return function cleanup () {
                            document.removeEventListener('click', handleClick);
                            }
                        }, [])
                    </code>               
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 30,
        question: "What is useRef hook and why it is used?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). 
                    The returned object will persist for the full lifetime of the component.
                    <br />
                    <code>
                        const refContainer = useRef(initialValue);
                    </code>               
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 31,
        question: "Controlled vs uncontrolled components in react?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    <div>
                        <h6>Controlled Component</h6>
                        <p>A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM.</p>
                        <p>Controlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data.</p>
                    </div>
                    <div>
                        <h6>Uncontrolled Component</h6>
                        <p>It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes. To write an uncontrolled component, there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.</p>
                    </div>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 32,
        question: "what are react fragments?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    In react render method will only render a single root node inside it at a time. When we are trying to render more than one 
                    root element we have to put the entire content inside the a tag - <br />
                    1) If we wrap using explicit tag a new DOM node is going to get created, which will impact performance. <br />
                    2) So in React 16.2 version, Fragments were introduced and we use them instead of the extraneous wrapper ‘div’ tag. <br />
                    <code>
                        <React.Fragment>
                            <div>First</div>
                            <div>Second</div>
                        </React.Fragment>
                    </code>
                </div>`
            }
        ],
        showAnswer: false
    },
    {
        id: 33,
        question: "did you use Custom React Hooks?",
        tags: "React.js, React",
        answers: [
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    No
                </div>`
            },
            {
                rating: 3,
                answer: `<div class="text-secondary">
                    Yes, in my current project Verizon we need to load an external script for analytical purpose. To fullfil this we have developed useScript hook to load external script tag
                    <br />
                    <code>
                    const [ loading, error ] = useScript({
                        src: "analytics.google.com/api/v2/",
                        onload: () => console.log("Script loaded")
                    })
                    </code>
                </div>`
            }
        ],
        showAnswer: false
    },
];
