//***// JEST and React Testing Library
// JEST is a test runner.
//**// npm test

//**// React chya installation barobarach aaplyala testing library milate. So kontich dependency install karaychi garaj nahi.

// package.json ==> test  madhe --verbose add kelyavar we get description of test suite and all the tests inside that test suite.

//**// NOTE
//**// Mi render la konta component detoy, konti query vaprun tyala kay pass kartoy, ani expect madhe konti method vaprtoy yavar test result depend aahe.

//**// Syntax
// test("description about tes", ()=>{
//   render<Component - je check karayachay/>
// const variable = screen.getByText(/re/i)  // Query to access element from screen
// expect(variable).toBeInTheDocument()      // What to expect from the test
// });

//**// Problem
// We want to test all the renderings we are doing on browser. Sagale components aaplyala pahije tase render zalet ki nahi. Whether user is interacting with the webPage/UI as the way we want.

// Solution
// DOM testing Library. We have access to DOM and so we can test the component rendering on the browser.

//**// React Testing Library is not a test runner. JEST DOM is a test Runner. Runner test.js chya saglya file check karto ani report banvato ki kontya test pass or fail kelya.

// Avoid Following implementation details
// internal state of components
// internal methods of components
// Lifecycle methods of a component
// Child components

//**// Instead we are going to test for the DOM elements which are rendered on the screen.

// To test logic and states we should use Enzyme along with React Testing Library
// But to check Rendering of a component from users perspective we use JEST and React Testing Library.

//***// Lama Dev

// Fixing one component might affect the other one and so on. So in big projects it is hectic one.
// So testing saves time and increases productivity.

//**// Syntax
// Queries => to find elements on the page.
// selection from the screen is done with the help of queries.
// Ex getByRole() - Every Html element has default role. like list role - listitem
// Ex getByTestId() - We provide testId sttibute to the element
// Ex getByPlaceholder()
// Ex getAllBy..., will access all elements of that query.
// Ex getByTitle() // provide title attribute element
// Ex getByText()

// expect(variable). toBeInTheDocument()
// expect(variable.length).toBe(3)
// toBeEqual, toBeNull, toBeGreaterThan, toMatch, toHaveLength() etc.

// Extention Wallaby.js for handy testing
// Onscreen results, filter our tests etc.

// JEST Vs React Testing Library(RTL)
// No Comparision

//**// To check our component we have to reach our DOM elements which we done through RTL with queries.
//**// JEST is JavaScript testing library. We run our test through it and it takes our expectation to show the test results.

// Test-Driven Developement
// Testing the component/software first(Raw form banun test karayach) and then developing it rather than doing ulta.
// Here we think like a normal user first.
// Steps - Test without creating a component- Ssow the Failures - and then develope the Application.  // Ethe aapan kay kartoy tar component madhe kahich nasnar, ulat aaplyala je banvayachay tyachi test.js file banvayachi aani te test karayach => test fails => nantar mag te component banvayache.

// <input/> madhe value attribute kay aahe tar tyachi value aaplyala feild madhe disnar.

// Testing - Login Form

// Test for placeholder, Button
// Test for Empty Feild, Disabled ( = "true")button
// Test for Error Msg - visibility : error? "visible" : "hidden"

// Conditional rendering bagha kashi aahe, Jithe static text aahe, tithe mala aadhi ek ani nantar ek as dakhavayach aahe tar Conditional rendering through dakhavata yet.

//**// JQuery
// Write less, do more
// Its a JS library, which simplifies complicated JS programming

//*// Advantages
// HTML/DOM manipulation
// CSS manipulation
// HTML event methods
// Effects and Animation
// Fetch requests

//**// MySQL
// It is a database Management System.
// Data - Dinstinct pecies of information.
// Database - This large data is stored in a place called Database. Data in the database can be of any dataType and it can be modified, deleted and retrived.
// Most common DataBase Management System(DBMS) is Relation DBMS and in RDBMS most commonone is MySQL.
// MySQL - My Structured Query Language
// OpenSource software to store data and perform various action.

// SQL is a language, Every relational database(like oracal, MySQL, - forms data in row-column format ) intract with a language called SQL

//**// Creating a table in MySQL
// You can create multiple dataBases and multiple tables.
// Open MySQL command Palette
//1. create database nameOfDatabase - Enter - Query Ok, 1 row affected
//2. use nameOfDatabase - Using the database - Database changed
//3. create table nameOfTable(feild datatypeOfFeild(limit)) // create table students(rollNo int(3), name char(10), section char(2))
// feild - heading of feild
// datatype - tya feild madhe kontya dataType chi value janar like int(integer - numerical), char(string),
// limit - liti of dataType value.
// Table kasa disnar
// Feild  Type  Null Key  Default  Extra // Feild chya khali feild disnar and so on.
//4. desc nameOfTable; - Show the table of that name
//5. insert nameOfTable(101, "Amit", "A") - will insert the data in the table.
//6. select * from nameOfTable - show all rows and columns // Aapan jo data enter kelay to row wise enter honar.
//7. select rollNo from nameOfTable - only show the rollNo vala column
//7. select rollNo, name from nameOfTable - show the rollNo and name vala column.
//8. exit/quit - to come out of commond.

//**// POSTMAN

// Database se connect karne ke liye hum APIs banate hai. Aur API integrate karte samay agar error aa raha hai to use test katne ke liye hum postman ka use karte hai.
// APIs backend waale banvnar ani tyacha URl(i.e API Request)tech sangnar.

// What is Postman? - To test the APIS. i.e HTTP request ne jo API yenar to test karntyasathi.It sends requests from client to the server.
// Install? - Postman Chrome Extention for temprory purpose.

//**// API
// Application Programming Interface
// Its like a messenger which carries data from one place to other.
// APIs give final product to requester.
// API Key - Paid Key - Security(Karan direct system access nahiye) and Monitering(kiti vela access magitlay, illigale activites nahi kar sakate)
// System la jya data cha access dyaychay tyache API banvun thevlee astat. Ani te use karyala dilele astat.

//**// Awards
// Spot Award - New joinee, we were shifting form class component to functional component, did my bit though i was weak at using class componet. Within deadlind i completed it.

// Pat-on-Back Award - My consistancy, desciplin, teamwork. Adhering to the deadline. So it was a routine work with my dedication.

//**// Browser Developer Tool
// console, debugging, network madhe API requests, React deve. tool madhe components ans states. Redux developer tool. Styling with inspect code.

//**// REST Apis(RESTful API) - Represntational State Transfer
// RESTful means referred to web services that implement REST.
// On request we get state of an object and not the object so State Trnasfer.
// Use to build these HTTP services,  it retrives data through standard HTTP methods like, get,post,put,delete.
// https => to exchange data on secure channel
// Companies use word api in there address to expose there restful services.
// RESTful conventation where we expose our resources(from server) and supports various operation like CRUD(Create, Read, Update, Delete)

// Common API standard used for communication between applications is REST API.

// Other services like SOAP, web services.

// Api will connect you and that server.
// Data we get is either in XML(heirachy like tags) or in JSON(object) format.

// Advantages of using RESTAPI
// Flexible - can have multiple calls
// Adaptable - Adaptable to any modifications done in the database.
// Easy to use and understand.

//**// Basic AWS(Amazone web services)
// Cloud computing services
// Cloud Computing Services- Renting the computer services like databases, servers etc
// Services like - Hosting websites,
// Why fameous - 1st service, pay as you go(like public service - jenvhs use karata tenvhach pay karayach)

// How to Learn
// Setup and Account
// Learning about AWS management services
// learning about Cloud developement Kit
// And learn basic services like - 1)AWS EC2 - Ethe aapan basic services and applications ko run kar sakate hai. 2) AWS S3 - To store the data.

//**// Agile and JIRA (Final Practice/Company Working)

//**// SASS

//**// Extentaions - Live server, Pretier, Babel JS, code runner, Intellisense, Bracket Pair Color.

//**// Object Oriented Programming
// A computer programming model that organizes software design around data, or objects, rather than functions and logic
// Used for mobile applications, system simulation, databases
// Why?
// To make work simple
// Javascript madhe jast high level OOps nasate.
// To improve the quality and productivity of system analysis and design.
// Making it more usable.

//*// Object Oriented Programming - for DRY
// Object has two things - Properties/Features(Defining object) and actions performed by it or performed on it.
// Ex Human Features - height, weight, color, actions - move, walk, talk etc

// Implemented using class concept after ES6.

// Object - has properties/fetaures and actions
// Class (grouping of object)- To avoide repetation. We define the common/repetable things. Ex viswajit, elonMusk ek object hai jo Man class ka. i.e Ekhadya object cha class sangitla ki aapan tyache features and actions olkhu shakato.
// Inheritance
// Inheriting the properties and actions from some other class. Ex Software Engineer inherit man class

//*// Problem
// Ek object various casses cha asu shakto. Ex - Shubham is object of Software Engineer class and object of Man class. => After inheritance => Shubham is object of Sofetware Engineer class.

// Functional Programming - for DRY
// In JavaScript all functions are first class functions. That means they can be treated like any other variable. First class functions are functions that can be assigned as values to variables, returned from other functions, and passed as arguments to other functions.

// 4 Pillers of OOPs
// Abstraction - Hiding the details (Aam khao guthliya mat gino-- just reun the program)
// Encaptulation - Various gostinchi ek entity banvali like camera aahe, spekaer aahe, wifi aahe ani mobile banvala. i.e saglyanchi ek entity banvali.
// Inheritance - Earlier version or code cha use karun aapan navin version/code banu shakato. erlier entity madhe improve karun navin entity banvali.
// Polymorphism - Ek cheese alag alag forms like aaapka phone - camera, notemaking, music plauyer as sagal aahe.

// Object - Oriented approach means - Data we handle or state we manage in api calls, state maintaince , data transfer ha object form madhe hoto.

//**// Versions Used in Project

//1. Material UI - 5.8.10. V5 released in sept 2021 I am using it currently tya chya aadhi V4 hot. Rather than migration use both alongSide.
// makeStyles to styled Component
// some classes removed or renamed -
// Removed Props - like onCellBlur, onCellOut etc
// name change of selectors to gridRowIdSelector etc.

//2. Javascript
// ES5 in 2009, ES6 in 2015
// News about launching of 13th edition, 2022. but dont know.

//3. HTML5 and CSS3

//4. ReactJs
// v16 in 2017 - Improved error handling with error boundary. 16.8 - Added hooks.
// v17.0.1 in oct 2020 - no new features, just to upgrade react itself
// v18 in mar 2022 - Now i am using it. Not much changed.
// 18 is still in developing phase so it may cause problem, in updating, testing phase.

//5. VS Code
// August 2022 1.71.1
// Nove 2020   1.51.1

//6. Git
// 2.34.1
// 2.22.1

//#// Why do we need Node js
// Aaplyala npm pahije asat for package management ani npm needs Node js. Tasach node js he backend operations like Server balancing, API calls sathi pan pahije asat.

// github token
// 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

//*// useavigation, useLocation hook
// useNavigate Hook
// For redirection and go back functionality

// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// const goHome = ()=>{
// navigate("/path")  // Route cha path dyayacha.
// }
// <button onClick = {goHome}><button/>
// <button onClick = {()=>navigate(-1)}><button/>   // lead to the previous page

// pass the data with useNavigate hook
// navigate("/about", {state: {id:variableToBePasses}})
// To consume the data passed - we use useLocation hook
// On About Component
// const location = useLocation();
// location.state.id   // as id is the key jyala data pass kela aahe.

// useLocation hook  // used to access the pathname i.e current URL
// import { useLocation } from "react-router-dom";
// const location = useLocation();
// location is a object, to access pathname location.pathname
// location.pathname.replace("/", " "). // To access the URL name.

//useRef hook
// useRef hook returns us an object which has current has a key.
// It creats the a mutable variable which will not rerender the components.
// access the DOM directly.

// Stop rerendering
// useEffect through state denyapekshya aapan const count = useRef(); i.e count.current = count.current + 1; ne karnar.

// access the dom directly (useRef and ref attribute use karava lagto in sink)
// const inputElem = useRef();
// inputElem.current  // thus will return us DOM element, jya element madhe ref = {inputElem}, use kelela aahe.

//onFocus and onBlur
// <input ref = {inputElem} onFocus = {(e)=>{inputElem.current.style.outline = "#808080"}} onBlur= {(e)=>{inputElem.current.style.outline = "#fff"}}/>

// Shallow and Deep Copy
// Copy, Object.assign({}, object1), spread operator,
// JSON.parse(JSON.stringify(object1)) // lost the function and dataType.
// To solve we have lodash library // npm i lodash  // This require no use any of above method.
// const _ = require('lodash');
// let object2 = _.cloneDeep(object1);

