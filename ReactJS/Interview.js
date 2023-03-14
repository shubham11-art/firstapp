//*// Note - KNOW IT?
// 1st time sagale components render honar.
// Though react rerenders only those components jyanchi state change hote aahe, but tya component madhe jar bulky code asel tar tya component madhil baki code/element harm/slow hotat. Tya bulky code la handle karnyasathi aapan useMemo, useCallback he hooks vaprto.
// function as a prop mhanun aapan pass karu shakato.
// Dependendencies matlab variables jo change ho rahe hai.

///***/// React

//*// Error Boundary in React JS

// Error Boundary can only be a class component.

// It is nothing but error Handling in React components.
// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
// You can apply them on synchronous operations. and on any component.
// its like a try...catch for DOM.

// 2 components are imp
// getDerivedState or componentDidCatch

// Error boundaries cant handle somethings like
//1. Event Handlers
//2. Asynchronous codes
//3. Server side renderings
//4. Errors thrown in the error boundary itself (rather than its children)

//*// State of application?
// It is a global data accessible in the application. When state changes the component using it, rerenders.

//*// Memoization in Javascript - Baar baar logic compute/calculate na ho, agar cache pe hai to o hi de. - Hum cache function me value dal rahe hai, ki o hi return ho if that function is called.

//*// Usecase of useMemo and useCallback
// UseCallback is used to optimize the rendering behavior of your React function components, while useMemo is used to memoize expensive functions to avoid having to call them on every render.

//*// useMemo() - memoization in react. cache wala kaam automatic hota hai.
// Uses
// to stop the unwanted functions calls/dependencies. i.e to stop unwanted rerendering.

//*// Syntax
// useMemo(()=>{},[])
// ya dependency sathich te chalnar, baki dusarya kontyahi element chya working var effect nahi yenar.

//*// Difference between useMemo and useCallbak
// Both are used for performance optimization by stopping unwanted rerendering.
// useMemo stores and returns the memoized result where as useCallback stores and returns the memoized function.
//*//Doghanchi useCase bagha
// Within a component elements la decouple karnyasathi we use useMemo ani don components(parent-child) na decouple karnyasathi we use useCallback.

//*// useCallback
// Hume chahiye tabhi call hoga, through dependencies.
// Problem Statement - Parent madhil changes mule parent chya rendering barobarch child pan call hotoy. To avoid this - child component export kartana memo madhun karayach and useCallback.
// Use
// To stop unwanted rerendering.

// Syntax
// useCallback(()=>{},[])

//*// Difference betWeen useMemo, useCallback and useEffect
// useMemo and useCallback ye behind the scene caching ch kaam kartat ani rendering pan manage kartat i.e state/dependency change zali tarach rendering karayachi.

//*// Context API
// One place where we hold our state and pass it to the application.
// React v16 madhe aale but works like Redux only. To data transfer over the component.
// Pure application ke upper wrapper bana deti hai i.e provider.
// createContext and useContext and wraps the application inside the provider
// Drawback
// Jya Components chya we dont change values te also rerenders, as wrapped inside the Provider. so redux

//*// Redux
//  Predictable state container,
// Provides consistance behaviour
// Easy to test.

//1. What is React
// JS Library, High Resuability of components, Helps in building complex UIs by simplefying the code writing amd maintainace and web applications.

// 2. Advantages of Using React
// As it works on VDOM so consumes less memory and faster updated, it increases the applications performance and efficiency..
// One way dataBinding is there.
// Help us in making Single Page Applications.
// Helpful in designing complex mobile user interfaces.
//  Writing UI test cases is easy
// Easy to integrate with other frameworks like Angular
// Because of JSx codes redability and writability increases and code is easy to understand.
// Can be used on client as well as server side.

//*// Features of React
// Single-directional data flow
// Allows you to control server side data processing and handling.
// Uses VDOM.

// 3. Limitations
// Just a library and not full blown framework hence calls for more dependencies.
// Very large with huge repository. And complexity that JSX brings. So not bigginer friendly.
// Faster updates(due to large open source community) make developers keep learning new ways time and again.
// Harder to maintain SEO practices with it.

// 4. Browser cant read JSX directly it need to be transformed in JS Object, which is done with the help of Babel transformer. Browsers can't read JSX because there is no inherent implementation for the browser engines to read and understand them

// 5. State
// Built in react object, used to contain data or informtion about component. And hence controls components behaviour.

//6. What are props.
// They are the arguments passed into the react component like HTML attributs. Used to pass data from one componet to other component.

// Difference between Props and State
//  Pros are read-only, State changes are async.
// P are immutable, S is mutable
// P can be accessed by child component, S cant.
// Stateless compoents can have P, cant have S. (Functional components are the stateless and class compoents are the Statefull)
// P makes components reusable, S cant

// 21.What is virtual DOM
// VDOM is a JS object. Like a node tree which consists of elements, there attributes etc.
//  It is a in Memory representation or virtual representation like light weight copy of a real DOM. Whenever 1st time our application is rendered then tree of HTML element is created and put into the memory which in sink with the Real Dom. Whenever any event or state change happens i.e any updation happens then 2nd copy of virtual dom is created then these two copies are compared with each other (with husristic body called difficult body thumb) and only the updated values are send to the virtual dom. Real dom and Virtul dom should be in sink with each other. This process of updation in the virtual dom after changes in the Real dom called as reconcilliation. It is used to increase the performance of our application.
//*// render function of React creates VDOM or this tree.
// Advantages of VDOM and Disadvantages og RDOM
// Easily updated, Minimal memory Wastage, Faster Updates, Cant update HTML directly(RDOM directly manupilates HTML), RDOM creates new dom if element updates.

//*// Data Binding?
// Communicating the data from Data Source to the View(display).

// 23.What is one-way DataBinding
// Data only flows from source to the control i.e display.
// Here, Data can only be displayed but cant be updated.
// Data is shared among various components with the help of contextapi, where data is stored globally or with the help of redux where data is stored centrally in a store.

// Advantages
// Debugging - developer knows where the data is coming from and where it is going
// Better Control and Less Error
// Efficiency

// 24.How Redux work
// Store - Where data is stored in a object form.
// Action - is a plain JS object
// Reducer - Two arguments, And reducer will returns us a new state.

// 25.What is Higher Order Component
// A higher-order component, in react, is a function which takes a component as an argument(adds functionality or data to it) and returns new component jisame humne functionality add kari hai..
//Syntax - Like normal arrow function. But we pass the prop with name hocName ="";
// TechnicalSuneja - Ajay component la subject(HOC) component madhe pass kel, ani tithun Ajay component madhe add ons kele. i.e as per defination Ajay navacha component ghetla ani subject navacha(class component) return kela. class component ka karan subject navacha HOC aadhich aahe tyatun aapan retrun kartoay mhanun.

// Or to HOCs is component inheritance.

// Uses
// To enhance the component with extra functionality.
// reusibility of code/components logic or functionality over the components.
// Manipulation of Props
// State manipulation

// Disadvantages
// Leads to prop collision
// Its a static composition.(Hard code)

//*// JSX
// Abbrevation for Javascript XML.
// HTML like elements and brings essense of javascript to react.
// Browser cant read jSx directly so, it must be transformed to JS Object with the help of Babel transformers.

//*// Angular Vs React
// Created Google/Facebook
// Render Support- Client/Server side
// DOM - RDOM/VDOM
// DataBinding - 2way/1way

//*// Differnece Between Flux and Redux
// Dispatcher - Has/No
// Data Binding - TwoWay/OneWay
// Store - Multiple/Single

//*// Components Based Architecure
// Web application is collection of various components, which are independent of each other and Compleletly reusable where we want. i.e we can make 10 components for 10 things.

//*// How rendering works?
// Every single component is rendered by using render function. render function madhun app render karato ani app madhun aapan sagale component return karto, hya components madhun jsx, css code return kelela asto.

//*// Arrow functions in React
// Useful in binding components together. Otherwise we have to use .bind() i.e manual binding karavi lagte.

//*// create-react-app
// for creation of react application without worring about independent dependencies.

//*// Advantages of using create-react-app
// SupportsvJSX, ES6 and flow statements.
// Live deployment servers help in debugging
// Already built auto-prefixed CSS.

//*// Redux
// Used to store the state of an application.

//*// 3 Phases of Component Life cycle
// Initial Rendering - Biggining of the component to the DOM
// Update - After it get added to the DOm, component can be updated and rendered again.
// Unmounting - Destruction and evenetual removal form the DOM.

//*// Events in React
// Whenever actions performed like onClick, Mousehover, keyPress etc these actions trigger the events.
// These events perform the activities.

//*// Synthetic Events
// Cross browser compatibility - React synthetic events work identically across browsers.
// ReactJS implements a synthetic events system because that brings consistency and high performance to React apps and application UI. It helps to achieve consistency by normalizing native events so that they have the same properties across different browsers and platforms.
// Ex - examples of the synthetic events are onClick(), onBlur() and onChange()

//*// Native events
// These are normal JS events. i.e things happen to HTML element.

//*// Can Ajax be used with React
// Yes, AJAX library like axios and jQuery can be used.

//*// Stateful components(class components)
// These are components that store the state and changes that happens to them and stores in the memory. yanchya vs stateless components(Functional Components).

//*// What are Refs
// Refs is references, usd to store refence to a single element or react component. These references are returned using render function.
// Uses
// Use it to access the DOM elements or React elements.
// ref ch kaam aapam useRef hook ne karto.
// animations, palyback sathi vaprato.

//*// Controlled Components
// components that have ability to maintain their state.
// Data is controlled by the parent component

//*// Router
// Use to manage multiple routes when user enters URL.

//*// Components of Redux
// Action, Reducer, Store, View - Displays data provided by the store.

//*// Advantages of Using Redux
// Organised code so easy to work with the code.
// Larger community,easy and efficient libraries.
// Testable code and easy to track actions.

//*// Pure Componets
// It renders the same output for the same state and props
// They do not rerender still their prop or state changes.
// Helpful to incrase performance of the application.
// React.pureComponent ko implement karana padata hai if you want to use pure components.

//*// React.StrictMode
// Wrapps our full application inside it. To highlight potential issues in a programm i.e debugging.
// Uses
// Help to write better react components with recommended practices.
// Identifying components with unsafe lifecycles.

//*// What to do if react is rendering slowly?
// It renders slowly because of number of rerender operation, This can be solved by
// React.memo to avoid all unnecessary operations
// pureComponents can be used.

//*// Hooks
// They are the functions in the functional components allows us to do the work which we were doing in class components with classes. like accessing the state.
// useState - to update the state and set initial state
// useEffect - to perform side effects i.e something shoud happen after some action
// useContext - to avoid prop drilling . Globally state maintained asate which can be accessed anywhere on the component.
// useRef - returns mutable object, used to access DOM. Use nahi kel.

// Rules of Hook
// Can only be called inside the function components
// Can only be called at the top level - i.e cant be called inside any loop or nested functions as they needed to be rendered after rendering of functional component.
// can not be conditional

//**// Middlewares
// Like redux saga, redux thunk
// Reducer only runs synchronous operations. So if action is async. then we catch that before it reaches the reducer.
// Without thunk, we can built our own middleware, we have applyMiddleware() function of redux to catch the action in the middle before it reaches to the reducer.

//**// Redux- Thunk
// It is primaraly used for, async operations.
// Thunk means rather than simply executing it, wrap it inside the function then execute it by calling that function.
// Here, we are dispatching the thunk function which has action wrapped inside it.
// Actions to be dispatched from thunk, they should be converted to the action creators.
// Thunk takes two arguments i.e getState and dispatch karan - dispatch is to dispatch the action which is caught in middle.

// Uses
// To delay the dispatch action i.e only dispatch the action if certain condition is met.
// Logging
// Error reporting
// Async requests.

//**// Debouncing and Throttling
// Achieved with the help of, setTimeout API.
// These are functions in React.
// Used to avoid unwanted function/api calls. Used mainly for search bars along with parallel operations like buttonClick, scroll, resize etc where we want to avoid unwanted api/function calls.
// Used for improving application performance

//*// Debouncing
// Performing the search(make API request) only after x milliseconds (or seconds) and not for every type after the user has stopped typing is called "debounce". Achieved with setTimeout web Api.

//*// Throttling
// Throttling is used to call a function after every millisecond or a particular interval of time. Debouncing madhe typing samplyavae call honar, here in throttling time fix aahe.

//*// Differenece Between two
// Debouncing a function means we wait a certain time, doing nothing, until we call the function.(i.e tumach kaam zalyavarzch function call hoil. Ex - type zalyanantar 500ms cha time aahe, i.e type samplyavar 500ms thabale gtarach function call hoil) Throttling a function means we wait a certain time, doing nothing, after we call the function.(Function call hot, ti request purn hoi paryant you cant do anything. Ex - Search bar var click kel ki response yei paryant you cant click serach bar again)

//*// Connect Method
// The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

//*// Class Component Syntax
// Takes prop and returns JSX(HTML). And it maintains the internal state which is private to that component.
// We create class, use component class of react, use render() method which returns null or JSX element, export that component.

// import React, {component} from "react";
// class welcome extends component{
//     render(){
//         return <h1>Class Component</h1>
//     }
// }

// export default welcome

//*// Data from Child to Parent
// Lifting State Up - State is not the components state but basic data.
// Parent and child component banvayache, parent madhe function banvayach je prop through child la pass karayach, child component madhun props.propertyName(dataToBeTransferred); ne pathavayach , jo parent madhlya function madhe access karayacha.

//*// Lazy Loading
// Lazy loading is a design pattern for optimizing web application.
// initialize objects that are critical to the user interface first and quietly render noncritical items later.
//  Lazy loading enables you to render elements on demand
// React has two features that make it very easy to apply code-splitting and lazy loading to React components: React.lazy() and React.Suspense.

//*// Code Splitting
// Code-splitting is the process of dividing a large bundle of code into multiple bundles that can be loaded dynamically. i.e dynamic import karun render karayacha.

//*// Keys in React JS
// Used to check and track the changes
// Used to check whether item has added or removed.

// Key should be uniqe i.e two child cant have same key on one page/component. It is a property of JSx element.
//  In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists.
// We create list of components with the help of Array. Tya list madhe duplicate elements nahi hone chahiye.
// .map() through mi list banavato, so jithe .map() asel tithe key pass karayachi.
// Key denyasathi we can have defined array of numbers.
// Key (i.e value of key) cant be accessed as a prop on other component. so, other/value attribute banvun tyala key = , pass karayacha ani other/value access karayachi=> key access zali.

//*// Core Types of React
// Types of react means types of components
// Functional, Class, Pure, HOCs,

//*// Is it possible to display props on a parent component
// OR
// How do you send props to parent component in React? I.e Data transfer from child to parent?

// To pass data from a child component to its parent, we can call a parent function from the child component with arguments.

//*// In react js why there is a need to capitalize on the components
// To instruct the react component about JSX tags/code, otherwise it will through an error.
// This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

//*// What is Diffing and reconciliation?
// Virtual DOM is synced with real DOM with ReactDOM library. This process is called Reconciliation.
// React compares the Virtual DOM and pre-updated Virtual DOM and only marks the sub-tree of components that are updated. This process is called diffing. The algorithm behind diffing is called Diffing algorithm.

//*// <Suspense> lets you display a fallback until its children have finished loading.

//*// As your app grows there is a risk of bugs and typeErrors. Normally we use JS extentions like Flow or Typescript to typecheck the Appilcation.
// For big applications we should validate the data that we getting through prop. This helps in debugging and also avoids the future bugs.

//*// defaultProps and propTypes
// install propTypes package

// Uses
// Validate the prop data.
// Avoid future error.
// Keep app more clean.

// propTypes
// To check typechecking on the props for a component, you can assign propTypes property.
// used to validate the values/data we are passing or receiving through props.

// Syntax
//*// Should be stated outside the functional Component before export.
// Component.propTypes = {
// prop : PropTypes.dataType(string, number, bool, symbol),
// propName : PropTypes.array,
// propName : PropTypes.object,
// propName : PropTypes.func,
// propName : PropTypes.element,
// propName : PropTypes.dataType,
// propName : PropTypes.dataType,
// }

// Ex
// Link.propTypes = {
// title : PropTypes.string,
// roll : PropTypes.number.isRequired,
// sub : PropTypes.array,
// }

// isRequired => ki hi property parent ne pass karayalach pahije, other wise error will be thrown.

//*// Validation mule Code break hot nahi i.e o/p disnarach. Jar aapan error handling lavli asel tar error yeil. Validation helps developers in better and bugless app building.

//*// Default Prop
// Suppose value is not passed by the parent component, then this default value of that pertucilar prop should be used.
// Kayam saglya values parent kadunach ghyayachya nastat, some values aapan defaultProps nech deto.

// Syntax
//*// Should be stated outside the functional Component before export.
// Component.defaultProps = {
// propName : value,
// propName : value,
// propName : value,
// }

// Ex
// Link.defaultProps = {
// title = "Gandhiji",
// roll = {12},
// sub : [Math, Law]
// }

//*// Validation rule for props will apply to defualtProps also. i.e defaultProps madhun yenarya values la suddha validation rule of propTypes applied asto.

//*// Redux-Thunk vs Redux-Saga

// Similarities
// Need npm install
// Used for calling API and dispatch the response to the reducer.
// Error Logging.

// Difference
// Setup - Easy/Hard - As Saga has generator functions, yeild keyword and built-in, effects like call, put, takeEvery, debaounce and throttle(to stop unwanted api calls) etc. Saga effects make it easy to achieve JS work which need to be hard coded with thunk.
// Organaisation - Problematic/Easy - Api calls and realizing data of promise and returning the data creates mess in Thunk. But saga with yeild which works like await make it easy to chain Api calls, and realize the data. Saga handles asynchronous data flow easily.
// Readeability - Problematic/Easy - Thunk may lead to promise chaining.
// Learning and New devloper - Yes/No
// Large Projects - No/Yes

//*// Functional component ke andar ham lifecycle methods and state use nahi kar sakate to o hum hooks ke help se karte hai.

//*// Custom Hooks - customHook is nothing but reusable function component starts with "use".

// Common functionality banani hoti hai based on hooks but bydefault o react provide nahi karata to hume custom hook banana padata hai.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

// Uses
// Reusability of components logic
// Neat and Cleaner code.
// Reduces time to write code.
// Improves performance of app as increases the rendering speed.

// Aapan custom hook banval ki, it holds the common logic and jithe aapan he hook import karnar tithun dynamic value as a prop pathavnar ji common logic madhe consume honar.

//*// customHook is like a normal function, import kelelya place varun aapan tyala call karto with an argument je aapan common logic chya thikani kontyahi navane use karu shakato. And customHook madhun je return karnar te caller la assign honar.

//*// Normal hooks che rules customHook la pan apply hotat.

// Ex W3School. useFetch(), hook banaval aahe. Explain - index.js varun useFetch() call kel with and URladdress, jo url navane customHook madhe consume kel. Ani tya customHook madhun data return kela so index.js var to consume kela after destructuring.

//*// Local storage
// Only stores data as an object in key:value pair, where key:value can only be a string.

// Advantages/Uses
// Instead of storing on server, unimportant data is dumped here in local storage. like User specific data.
// Optimizes the performance of the web app, as we can access the data easily rather than making the frequent server calls.

// Unlike cookie data, session storages' data dont used for an API call.

// storage varun data access karayacha asel tar, we make an API call like we do for server. For accessing the data we follw rule of Same Origin i.e Protocall, Host and Port must match the URL address to access either web store APi or from server.

// Working
// Local storage ha window object varach asto
// localStorage.setItem("key", "value") - to set data on the localStorage.
// localStorage.getItem("key") - return us the value for that key. i.e to access the data from local storage.
// key should be unique otherwise later will override the earlier one.

//*// Jest and API mocking/testing

// Working
// Write test function with it case.

// Movies.js
// class Movies {
//  api(){  // api will be a function now.
// return fetch(" ").then((res)=>{return response.json();})
//     }
// }

// test.js varti
// import Movies form "./Movies"
// Syntax

// it ("Api Testing", async function (){
//      const response = new Movies(); //This will create the object of movies
//   const data = await response.api();
// expect(data.movies[0].id).toEqual("1")
// })

// it ("description", async callback{ await result;
//test the result with expext()})
// async karan aaplyaa la promise return honar aahe, jar promise nasel(i.e axios call) tar async chi pan garaj nahi.

// Mhanje ek component banvun tyatun APi call karun response return karnar. Mag to response aapan test case madhe mala pahije tasa alay ka nahi he check karto.

//*// Axios Interceptors
// Axios interceptors are functions and a powerful tool for customizing the behavior of a HTTP call when making the call or just after receiving the response back.
// used to add headers(for authintication and validation by adding token id), modify requests, handle errors, transform the response.

// Global Interceptors
//*// Interceptors should be written on index.js file(root file). Component madhil kontihi request janyachya aadhi or response component la janyachya aadhi te interceptor madhun jatil.

// Syntax

// Request
// axios.interceptors.request.use((request)=>{request.headers.channelName = "Leela Web"
// return request})

// Response
// axios.interceptors.reponse.use((response)=>{ return response})

// Mutable Vs Immutable
// In JavaScript, objects and arrays are mutable by default, but primitive values are not — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned. n the case of immutable objects, whenever we change the state of the object, a new object will be created.
// In JS, only objects and arrays are mutable, not primitive values.

//*// Advantages of Immutability
// Error Handling and Debugging becomes easy.
// Improves readability anf efficiency.
// Improves safety as they cant be changed.
// Helps in cashing.

//*// How can we make object immutable?
// Don't provide "setter" methods — methods that modify fields or objects referred to by fields.
// Make all fields final and private .

// Class Components
// rcc - shortcut
// constructor method, page load hone se pehele i.e componentDidMount run honyachya aadhi he disnar display la.
// this.state ={"to maintain state"}
// this.state.key - to access the state.
// onClick={()=>{this.increment()}} la je function detoy, te varti lihinyasathi direct increment (){} (i.e no function word). this chya refencing sathi aadhi bind method hoti ata arrow functions vaparto.

