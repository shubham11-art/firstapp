// React is a JavaScript library for building interactive/awesome user interfaces. It is a library and not a framework.
// React is used to build single-page applications.
// React allows us to create reusable UI components

// const { useState } = require("react");

// History
//  Created by Jordan Walke for FB news feed in 2011
//  2013 pasun Open Source ahe. Maintained by FB

// About

// React is made up of Components.
//Components chya madatine aapan complete website cha code peices madhe banvato ani at the end te pieces join karun complete website banvato.
//*// Components help us to 'Reuse peice of code(code can be of HTML,CSS)' n number of time. Like ,utility classes' banvayacho aapan in CSS.
// i.e Sarkhya Properties, Sarkha Code => Component.

// React uses Declarative Approach
// We just tell our requirements to react without knowing aagya-picha of that and react returns which fullfills our requirement thorowly.
// Generally Declarative Approach is used by Frameworks but despite library react uses it.

// React handles DOM gracefully
// React makes app building simple and blissfull.

// Why  React?
// Has huge community on GitHub. Helps in error handling.
// Compenent based architecture.

//Prerequisites for React
// HTML, CSS, JS, ES6, NPM(Note Package Manager)

//#4// React Installation
// install NodeJS(LTS-Long Term Support) and NPM(byDefault with NodeJS) //versions- nodejs 16.17,  npm 8.15
// install Editor - VS CODE/Sublime/Atom/Brackets/Notepad
// install React from Terminal(i.e cmd)
// npm install -g create-react-app (i.e create-react-app ko (g) globally install karna hai )
//  creat-react-app -version // 5.0.1  // to check whether installed or not.
// creat-react-app <projectname> (actual app to do work on react)
// Installation link in video #4(https://youtu.be/tg73NsiQOUE) description box.

//React Folder Strcuture
//1. node_module // Screenshot 78
// ReactApp ke saare dependancies are installed in node_module.
// Project madhe use karayache modules/liberary ethe installed pahijech pahije.

//2.package.json
// stores all the metadata associated with the project as well as stores the list of dependency packages(i.e project kispe depend hai i.e react).
// package.json helps us in sharing the project. Others could know about react-version, react-dom version and react-script version fron package.

//3. gitignore
// hum git use bhi karenhe aur o folder pe dikhega bhi nahi.

//4. logo.svg
// logo gol gol ghoom raha hai

//5. robot.txt
// It helps in SEO after hosting a site.

//6. manifest.json
// It has information about our App(i.e Reactpp) in json format.

//7. index.html
// Eske body ko chuna bhi nahi hai. i.e Without interferring with html code still we can show data on our Website this is power of React.
// Here i make < div id= 'root' > </div> as parent container for all my Code.

// 8.if you want to work in React these two modules should be there. So Importing it.

//#5// var React = require("react"); // old JS

// import React from "react";
// var ReactDOM = require("react-dom"); // old Js
// import ReactDOM from "react-dom";
//"react" module (var React = require("react")) is needed to use HTML Element in react.
// When aapan react require(get/import) karto tenvha tyachya barobar aapoaap babel ani web pack(to entact files and folder together) yeto.
//***/ Babel is a compiler between JS Code and Browser to compile a JS Code in executable form. EX const and Fat Arrow Function browser la kalat nahi but Babel converts const into var and FatArrow into normal function.
//*// OneLine - Browser dont support the modern js so Babel is meddling which supports modern js. It converts modern JS to browser redable JS.

//**// JS madhe mala jar HTML element cha access pahije asel tar mi DOM(document.) cha use krto mhanun ReactDom so that React chya aat aapan JS sarkhe DOM manipulation and updation karu shaku(i.e React madhe JS sarkhe DOM vaparu shakato ani he karnyasathi hume 'react-dom' module cha use karava lagto.).

//*// OneLine - React is required to use HTML Tags/Elements (inside ReactApp) and ReactDom is required to manipulate DOM (inside ReactApp).

//ReactDOM.render('Kya dikhana hai(write HTML code)', 'kaha dikhana hai(take DOM cha access in React like JS DOM)', 'callback func')
// What ever i am writing in the React(jsx) o .render karo on the browser with the help of DOM(i.e HTML element) karan DOM shivay ni te screen var nahi display karu shakat.
// ReactDOM.render(<h1> Hello World!</h1>, document.getElementById("root"));

//#6// JSX - JavaScript extentions or JavaScript XML
//*//  JSX allows you to use a mixture of HTML and JavaScript to write code in components

// JSX is the HTML like element in react
// so we require to import "react" module to use JSX in React.

//*// Browsers can't read JSX because there is no inherent implementation for the browser engines to read and understand them

// How Babel and React Works
//ReactDOM.render(<h1> Hello World!</h1>, document.getElementById("root"));
// ReactDOM.render(
//   /*#__PURE__*/ React.createElement("h1", null, " Hello World!"),
//   document.getElementById("root")
// );

// Same code with JS inside react (react ka lena dena hi nahi hai)
// i.e Without using HTML i can create HTML code in JS
// Ex Here i created <h1> tag and nested(child) it inside <div>.
//  var h1 = document.createElement("h1");
//  h1.innerHTML = "Hellow World";
//  document.getElementById("root").appendChild(h1);
// document.createElement => creating element in HTML
// .appendChild(h1) => yala child banva i.e nest it inisde the assigned element.

// Why ReactDOM to use its methods like render and Why react to use its methods like createElement.

//#7// How to Render Multiple JSX Elements inside ReactDOM.render()

// render method takes only one JSX element so to use multiple JSX elements we need to wrap them as a single element. This wrapping can be done with the help of [] or <div>.

//***// NOTE
// Jar mi JSX element single kela i.e ekhadya [], <div> and React.Fragment or <> </> madhe wrap kela tar aat madhalya code madhe mi complete HTML code Chapu shakato i.e kitihi <div>/ <ul> etc lihu shakato.

// But after React version above 16, it's possible to 'use' and 'return' an array of elements from render() method.

// Ex
// ReactDOM.render(
// <div>
// <h1> Hello World!</h1>
// <p>react is Good</p>
// </div>,
//document.getElementById("root"));

// ReactDOM.render(
// [
//<h1> Hello World!</h1>,
// <p>react is Good</p>,
// <h2>ReactDom Is Magic</h2>
//],
//  document.getElementById("root"));

//***// <div> and [value, value,] kasa lihilay tar tasach jasa HTML and JS madhe lihito respectively(NoComma and Comma).

//#8//  React.Fragment

//*// Multiple JSX elements jar <div> through use kele tar it creates extra node of that wrapper <div> so to avoid it we use React.Fragment
// Ex
// ReactDOM.render(
// <React.Fragment>
// <h1> Hello World!</h1>
// <p>react is Good</p>
// </React.Fragment>,
//document.getElementById("root"));

//*// Advantages
// Little Faster than <div>
// Takes less memory than <div>

//***// A special syntactical sugar format for fragments.
// instead of <React.Fragment> </React.Fragment> we can use only this <> </>.
// Ex
// ReactDOM.render(
// <>
// <h1> Hello World!</h1>
// <p>react is Good</p>
// </>,
//document.getElementById("root"));

//#9// Challenge

// Create a React App
//Ans

// import React from "react";

// import ReactDOM  from "react-dom/client";

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render();

//#10// JSX Expressions in ReactJs

//Screenshog 79
// React aapan  JS language madhe (JavaScript var/madhe) lihit asto. Ani tayt aapan JSX(i.e HTML element) use karto => We are using html element in javascript.
//**// so HTML element madhe(i.e JSX madhe) JavaScript lihinyasathi we use JSX Expression { }.
//***// i.e we declare a variable on Global Space and pass it inside JSX through { }.

//Ex
// const firstName = "Shubham"; // const firstName = ["shubham", "Nikhil"];
// ReactDOM.render(
// <>
// <h1> My name is {firstName}.</h1>
// <p> I am a Good Guy.</p>
// <p> My Birth date is {3+5}.</p>
// <p> My lucky number is {Math.floor(Math.random()*10)}.</p>
// </>,
//document.getElementById("root"));

//****// {} aat we can use Expressions(which returns single value after evaluation), variableName(yaat single value, array, object etc) but not the Statements(ControFlow Expressions) because they first check the condition and then returns the value and we need direct value return.

//#11// ES6 Template Literals in JSX

//***// { } chya aat madhe template literals vaprayache. // ka? karan It is a JS and it is inside JSX/HTML
//***// ${ } yaat mi mathematical expression pan lihu shakato along with variables.
// const firstName = "shubham";
// const lastName = "gunjal";
// ReactDOM.render(
// <>
// <h1>  {`My name is ${firstName} ${lastName}. My age is ${20+7}`}.</h1>
// <p> I am a Good Guy.</p>
// <p> My Birth date is {3+5}.</p>
// <p> My lucky number is {Math.floor(Math.random())*10}.</p>
// </>,
//document.getElementById("root"));

// Other ways to write it
// <h1> My name is {firstName} {lastName}.</h1>
// <h1> My name is {firstName + " " + lastName}.</h1>

//***// NOTE
// Mi ji javaScript vaprayacho i.e JS coding ti jar React madhe inside JSX vaprayachi asel tar { } yaachya aat vapravi lagate.

//#12// Challenge Display Date
// import React from "react";
// import ReactDOM from "react-dom";

// const firstName = "Shubham";
// const newDate = new Date();
// ReactDOM.render(
//   <>
//     <h1> My name is {firstName}</h1>
//     <h1> {`Today's Date and Time is ${newDate.toLocaleString()}`}</h1>
//     <h1> {`Today's Date is ${newDate.toLocaleDateString()}`}</h1>
//     <h1> {`Today's Time is ${newDate.toLocaleTimeString()}`}</h1>
//   </>,
//   document.getElementById("root")
// );

// we can pass newDate variable also
//const newDate = new Date().toLocaleString();
//const newDate = new Date().toLocaleDateString();
//const newDate = new Date().toLocaleTimeString();

//#13// JSX Properties
//**// HTML attributes are JSX properties in React as we call Html elements as JSX in React.

// const firstName = "shubham";
// const lastName = "gunjal";
// const img1 = "link";
// const links = "link";
// ReactDOM.render(
// <>
// <h1 contentEditable = 'true/false'>  {`My name is ${firstName} ${lastName}. My age is ${20+7}`}.</h1>
// <img src = "link" alt = ''  />
// <img src = {img1} alt = ''  />
// <a href = 'link'  target = '_name'>
//<img src = "link" alt = '' />
//</a>
// <a href = {links}>
//<img src = "link" alt = '' />
//</a>
// </>,
//document.getElementById("root"));

// i.e Mi directly links deu shakato to the property or i can assign it to a variable and pass it to the property.

//#14// CSS Styling & Importing CSS Files in React JS

// import "./index.css";

// import './index.css' to get access of index.css file. and the access of the styling'
// HTML madhe we used to use anme 'class' but here in React class is a reserved word so we use 'className' (JSX Attribute). classname is used to style that particular tag content.

// <h1 className = 'heading'> My name is `${firstName}`.

//#15// Google fonts in React JS

// font chi link index.html madhe head tag madhe paste karayachi ani font-family index.css madhe jya element la pahije tithe paste karayachi.

// jar link import keli tar ti aapan index.css madhe paste karat asto.

//#16// Internal CSS & Inline CSS Styling In React JS

// React me Inline CSS jyada use hota hai.
// Inline css as an object hota hai tyamule don {{ }} yetat
// We use style property in JSX element which is in Object form.
//***// We create CSS Styling as an object in index.js.
//***// In object key should be in camelCase(without hyphan) and value should be in quotes("" or '').
// We pass that objectName to the style property.

//EX
// withoutObjectCreation - style property in JSX element is like this

//    style={{
//       color: "red",
//       textAlign: "center",
//       textTransform: "uppercase",
//       fontWeight: "100",
//       textShadow : "2px 3px 4px red",
//       fontFamily : '"Josefin Sans", sans-serif'
//     }}

//***// double {{ }} => Ek of using JS in JSX and Dusra Style property should be in Object Form.

//import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const firstName = "Shubham";
// ReactDOM.render(
//   <h1
//     style={{
//       color: "red",
//       textAlign: "center",
//       textTransform: "uppercase",
//       fontWeight: "100",
//       textShadow : "2px 3px 4px red",
//       fontFamily : '"Josefin Sans", sans-serif'
//     }}
//   >
//     {" "}
//     My name is {firstName}
//   </h1>,
//   document.getElementById("root")
// );

//          ByCreatinganObject - style property in JSX element is like this
//   style={heading}

//import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const firstName = "Shubham";
// const heading = {
//       color: "red",
//       textAlign: "center",
//       textTransform: "uppercase",
//       fontWeight: "100",
//     }
// ReactDOM.render(
//   <h1 style={heading}> My name is {firstName} </h1>,
//   document.getElementById("root")
// );

//#17// Hello Sir/Mam, Project

// Learnings
//***// Condition nusar jar ekhadya place chi value keeps changing, tar tya change nusar we assign value to perticular variable ani ya sathi aapan to variable in advance initialize karto without assigning any value.
// Ex here variable greeting and object cssStyle.

// index.js

// let curDate = new Date().getHours();
// // curDate = curDate.getHours();

// let cssStyle = {};

// let greeting = "";

// if (curDate >= 1 && curDate <= 11) {
//   greeting = "Good Morning";
//   cssStyle.color = "green";
// } else if (curDate > 11 && curDate <= 19) {
//   greeting = "Good Afternoon";
//   cssStyle.color = "orange";
// } else {
//   greeting = "Good Night";
//   cssStyle.color = "black";
// }

// ReactDOM.render(
//   <>
//     <div className="heading">
//       <h1>
//         Hello Sir/Mam, <span style={cssStyle}>{greeting} </span>
//       </h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );

// index.css

// body {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   background-color: rgb(86, 147, 147);
//   min-height: 80vh;
// }

// .heading {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgb(132, 116, 134);
//   margin: 25% auto;
//   width: 32vw;
//   height: 4vw;
//   border-radius: 10px;
// }
// .heading h1 {
//   color: darkmagenta;
// }

//#18// React Components

// File is of name .jsx, file name should be Capitalize(Ex- Heading.jsx, Para.jsx)
// For components we import React as we are playing/creating jsx element
//**// Component banvala mhanje, mi maza customize jsx element banvlay ani tyach navane mi to use karnar in jsx. EX- Components like Heading.jsx, Para.jsx and we use it as jsx like <Heading />, <Para /> etc.

// App.jsx
// This is Master Component which contains all other components.
// Use - Sutsutit index.js file

// Components
// Banavala tithun export karayacha ani pahije tithe import karayacha

// index.js var App.jsx import kel
// App.jsx madhe Heading.jsx and Para.jsx import kela ani App madhun return kel
// Heading.jsx madhun <h1> return kel ani Para.jsx madhun <div> return kel

//#19// Rewrite our React Project into Components in React JS

//Pratyek code cha Component banau shakato ani to import karu shakto in APP.jsx
//***/ App madhun mi je return kartoy te fakt JSX code ahe. Bakicha code like JS and CSS etc mi APP function madhe lihitoy but return karat nahiye.
// i.e ReactDom.render(1st argument) => 1st argument je ahe it shoud be JSX/HTML element i.e APP.jsx madhun je components return honar te should be JSX elements.

//App.jsx

// import React from "react";

// function App() {
//   let curDate = new Date();
//   curDate = curDate.getHours;

//   let greeting = "";
//   let cssStyle = {};

//   if (curDate >= 1 && curDate <= 12) {
//     greeting = "Good Morning";
//     cssStyle.color = "green";
//   } else if (curDate > 12 && curDate <= 19) {
//     greeting = "Good Afternoon";
//     cssStyle.color = "orange";
//   } else if (curDate > 19 && curDate <= 23) {
//     greeting = "Good Night";
//     cssStyle.color = "black";
//   }

//   return (
//     <>
//       <h1>
//         Hello Sir/Mam, <span style={cssStyle}> {greeting} </span>
//       </h1>
//     </>
//   );
// }

// export default App;

// index.js
//import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from './App';

//ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

//#20// ES6 Modules Import Export

// export default
//*// default ne mi ekach value/variable/component export karu shakato per component
// default ne je export kelay te import kelyanantar kontyahi value ne mi ti access karu shakato. EX Suppose App.jsx madhun export kartoy =>  export default youtuber;
// import myFav from './App'; => myfav = youtuber.

// variables sum, person, function myname, remove
// export {person, sum, myName, remove};
// used name and passed name, of the variables and functions must be same.

//*// export kartana function asel tari fakt navane pathvayach i.e tyachya pudhe (); dyayach nahi nahitar te tithech call hoil.

// yaach jast use hot nahi
// Sagale export ekach import ne ghyayache astil tar we Use/ Write
// import * as anyName from './App';
// jsx madhe use kartana mala {anyName.default(for default value)}, {anyName.person(for variables)}, {anyName.remove()(for function)} etc as use karav lagtay. Here ques navane sagale import kele ahet.

//***// App.jsx file ahe

// import React from "react";

// const youtuber = "bbk";

// const sum = 12;

// const person = "mahan";

// function myName() {
//   let names = "first name";
//   return names;
// }
// function remove() {
//   let remove = "last name";
//   return remove;
// }

// export default youtuber;

// export { sum, person, myName, remove };

//***// index.js file (import as per export name)

// import React from "react";
// import ReactDOM from "react-dom/client";
// import kuch, { sum, person, myName, remove } from "./App";    // kuch = youtuber

//  root.render(
//   <>
//     <h1> {kuch}</h1>
//     <p> {myName()}</p>
//     <p> {remove()}</p>
//     <p> {sum}</p>
//     <p> {person}</p>
//   </>
// );

//***// index.js file (Sagale Ekdach import ques/anyName can be given)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// import React from "react";
// import ReactDOM from "react-dom/client";
// import * as ques from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <>
//     <h1> {ques.default}   </h1>
//     <p>  {ques.myName()}  </p>
//     <p>  {ques.remove()}  </p>
//     <p>  {ques.sum}       </p>
//     <p>  {ques.person}    </p>
//   </>
// );

//#21// Simple Calculator Project
// vol d - reacttutorial - SimpleCalculator

// NOTE
// Jithe function call kelet or caller chya form madhe return kelet tyach page var either te defined pahijet or import pahijet.
// EX here, Calci.jsx madhun mi return kele ahet in calling format so ethe either defined pahije hote or import pahije hote. So mi import kele ahet from Cal.jsx madhun.

// App.jsx var [import Calci.jsx to return <Calci /> from function App] and [import Cal.jsx] asa run nahi hot ye karan caller ani function yanchyat link hot nahiye bahutek.

//#22 Props in React Js and Netflix App

// Props means properties
//**// i.e HTML element madhe attributes astat like <input> has type, value, name, class, id etc. Same way jsx elements have properties like className.
// So, Props mean jas aapan aapala customise jsx element banau shakato (like <Heading />, <Para />) tasach aapan aapale customise properties pan banau shakato.

// Customise  jsx Element and Customise Property

// Use
// Card navacha component banvalay tyat jya values different aahet tya props(properties) banvayachya.
// Card ya component la props(kahihi nav deu shakato) parameter dyayacha.
// Card component madhe(jsx element swarupaat) jo code lihilay tyachya atrributes na(je different aahet i.e jyanchya props banvalet) aapan aadhi link dyayacho tithe {props.propertyName} dyayachi. =>  propertyName mhanje ji customise karun banvalii ahe in jsx element <card />. Because   props.propertyName = value;(value of that prop).

// App.jsx madhun i am exporting the Card. i.e App.jsx has function Card (props){Template cha hard code ScreenShot83}
// ScreenShot81 index.js var <Card /> it has properties => <Card imgsrc = "link" tite = " " watchNow = "link" /> order of properyties in each card should be same.
// ScreenShot83 Ani tya hard code madhe ( <img src = {props.imgsrc} /> <h1>{props.title}</h1> <a href = {props.watchNow} > <button> </a>). Karan {props.imgsrc}, {props.title}, {props.watchNow} this will access value of that respective prop which is in " ".(bcz balue should be in quotes).

// NOTE
// Why we access properties like props.propertyName because react/js treats them as an object. And when we refer object we use objectName. (.)

//#23// Netflix Project 2- Accesing Array on index.js
// ScreenShot86 Adding Heading and Mulitliple Cards.
// ScreenShot84/85  Created an array(source file) where elements are an object. (i.e sData[0]= 1stElement= 1stObject of an array.

// screenShot87/88  import sData on index.js. Jithe mi properties chi values hard code kelya hotya tithe i can assign them through object method. Ex sdata[0].title/sname/links will access title/sname/links from sData. By this we can assign them to properties.

// index.css
// ScreenShot 89 t0 94

// NOTE
// Jya properties already defined ahet in React like className(for styling) that should not be used in Components as Custom properties(to either style or for any thing) karan Component tyanna swathachi property mhanun treat karto na ki React property.i.e It will treat as a props of component itself.

//#24// Netflix Project 3 Array Map & Fat Arrow function

//ScreenShot95 Card component madhe sachya same ahe fakt properties (i.e values) change hotayet so aaapan card component ekadach lihun .map() through jevhadya values ahet tya onebyone access karu shakato.(i.e values through iterate karayachay ani tyancha use karayachay so .map()).
// Values kashya access kelaya ahet tar - After iteration through array(sData) value = element = object. i.e value has become the object. And we know object.key = value of that key => so value.key = value of key inside object.
// ScreenShot96 same function with Fat Arrow.
// function ncards(value){} == const ncards = (value) => {} == .map((value) => {})
// How this became an anynomous function karan aapan tashi .map() chya aat jar function define kel tar naav det nahi, baherun pass karayach mhanatl tar named function asat. Thats why this named function became anynoumous Fat Arrow Function.

// Warning
// Each Component/Card should have unique key. And value of key could be number or string.
// Keys are necessary to improve performance of your React App.
// How to add key?
// prop banvayach key (key asach/hech pahije) navan. sData madhe for each element key banvayavhi name of key could be anything(but reservedwords of react) and value of key can be number, string etc. Ani hya sData madhil key cha access card componant chya key la dyayacha.
// ScreenShot 97/98

//#25// Debugging & Error Handling
// Done with the help of React Dev Tool
// inspect- component

// To make card unique create key prop.
// Componente prop key la property manatach nahi use ho apane saath rakhata hai. Keys help React identify which item have changed(added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.

// App Component import kela

// Aadhi jsx element banvanyapasun suruvaat karayachi, pudhe pudhe jaat rahayach jashi jashi garaj padel tashe tashe component banvat rahayache ani mag te import-export karayache.

// Complete Project
// ScreenShot 104 to 109(App.jsx in 111)

// Debugging Component
// screenshot 110

//#26// Conditional Rendering

// Normal if... else jas vaprato tasach vaparl ahe.
// App.jsx madhun mi je .map() method ani Card return karat hoto te baher gheun eka component madhe takun tithe if..else condition laun to component import karaycha in App.jsx ani App component madhe mention karayach.
// Siranni ek chuk keli ahe ti mhanje Ek ek series var if..else vaparli but i guess .map() ani if (favSeries === 'netflix' && {val.key} >= 4 or jyaIdParyantNetflixDataAhe){<Card prop = val.}....else{<Card prop = val.} (i.e if madhe Netflix cha data ani Else madhe Amazone cha Data) karun mi saglya Netflix/Amazone ashya sort karu shakato.

// Component madhil sagala code or Component madhil return kelela code mala Mi jithe component vaprel tithe disto.
// Return word n lihita jar mi sagale React.Fragment madhe takale tar sagale index madhe access hotat.
// Ani jar return keyWord vaprala tar fakt tya madhilach data disto.

//#27// Conditional Rendering | Ternary Operator
// Varchi if else chi condition Ternary Operator ne banavali ahe.

//#28// Slot Machine Game
// Component SlotM - variables should be in quotes.

// Sirranni output kas ghtlay tar,
// JavaScript chya part ch Component banaval SlotM navane ani te export-import kel on App. It contains variables and if condition.
// SlotM cha access dila App la where it contains props. SlotM che 4 elements banvale in App so that 4 values display hotil.

//#29// How to Type Emoji 👍
// Install emojisense extension to use emojis in REACT App.
// Nantar kahi settings ahet see the video

//#30// Hooks
// Introduced in React Version 16.8
//*// Help to use React features without writing a class. Shift from Class component to Functional Component.
//*// Do not work inside Classes. Functional component me states ko use kar sake is liye React banaya gaya hai.
// Used only in functions o bhi at the top level.

// Event
// Js madhe event sathi jenvha mi callBack function dyaycho(2nd way) tenvha tyala parenthesis () dyayacho to call(defined in script) but here in React only naav lihayach without ().
// onClick runs the function which is defined as a component somewhere else.

// count++ => console var kam karatay but baher nahi karat ye. i.e State of count is not changing so here is work of hook to change the State.

// What is useState() (It is known as Hook in React)
// Need to import it in React to use it.
// const state = useState();
// console.log(state);
// O/P [undefined, f]
// useState() is a function which returns an array of two items. [undefined, function]
// undefined is StateObject/CurrentData and f is updated function/Updated Data.
// useState(value); => value is called Initial Data.
// Initial Data is passed on to the CurrentData.
// Ex const [count, setCount] = useState(0);
// Here we have declared count in a way.
// CurrentData = count, Updated Data = setCount, Initial Data = 0.

//*// const [count, setCount] = useState(0); This is also known as Array Destructuring where we declare array of variables and pass value to it.

// And with the help of this hook we can change the State of a variable.

// Working
// Use screenShot 113 Here IncNum is given to Button which gets executed onClick.

// const [count, setCount] = useState(0);
// We call setCount(count++/count + 5  etc); Where we want count.
// count = 0 initially. Then when setCount will be called, through an event or anything, operation inside setCount will be performed and setCOunt will take that value. This is updated Data/value which then accessed by the count as current data. This is how the state of the count(variable) gets changed.

//#31// React Hooks Challenge #6: Get Time on Refreshing and Clicking Button

//#32// Create a Digital Clock

//#33// Handling Events

//*// Ekhadi gost purn page chya center la ghyayachi ahe tar Purn page la <div> madhe ghyayach ani tyat diplay : "flex"; jus-con and align-item : center;

// initial values and change honarya values donhi pan useState() through dyayachya aahet. Screen var jya gosti change honar aahet tya jsx madhe { } yachyat denar jya useState() through(initialData) yenar. Ani event nantar je function run honar tyat set... through change dilela asnar.

// jsx element madhe content varible chya form madhe ghyayacha, he variables useState() madhe defined asnar for initial display. Event add karun function run karnar ani tya function madhe setCount/setBack la jo change pahije to assign karnar.

// ScreenShot 114/115
// const App = () => {
//   let greeting = "Hello Sir/Madam";
//   const [message, setMsg] = useState(greeting);

//   const onClick = () => {
//     let newMsg = "Come Sir/Madam";
//     setMsg(newMsg);
//   };

//   const onDoubleClick = () => {
//     let veryNewMsg = "Nigha Sir/Madam";
//     setMsg(veryNewMsg);
//   };

//   return (
//     <>
//       <div className="container">
//         <h1 className="heading">{message}</h1>
//         <button className="btn" onClick={onClick} onDoubleClick={onDoubleClick}>
//           Click Here
//         </button>
//       </div>
//     </>
//   );
// };

//#34// Forms

//*// Controlled vs Uncontrolled component

// In controlled component form data is handled by React component by writing event handler for state updates. But in uncontrolled component, form data is handled by DOM itself. ref is used to receive the form value from DOM.

// Controlled component
// React has complete control over the component.
// Singular form of data for the forms.
// Controlled means react component is handling/controlling it(data entered in the input field is handlled by react state). Form data(entered values) is controlled by react state i.e useState is called 'controlled component'. i.e whenever input field is changing we are getting the value in the state.
// Every input field has the callback (onChange={})and change is passed to  the value property
// Form validation is easy
// Internal state maintained nasate
// Better control over the form elements and data
// State is predictable due to state maintained by react state.

// Uncontrolled components
// Form data is handelled/controlled by the DOM and not by the React componets.
// Uncontrolled means traditional one where form data is handlled by DOM(input tag or form tag) and this is done by itself with the help of refs.
// No callback to the feild
// Form validation is difficult
// Internal state maintained asate
// State is not predictable as reference may loose in the life cycle or other components may have access to the form data.

// If we kept attribute value =" "(empty) then it makes input feild ReadOnly.
// value=""(empty) and onChange={onChnage} dil tar we can type but we cant see. So, to see value attribute should be given some value.
// To enter data we need either some defaultValue = "" OR need to use onChange and Value={variable} together.
// To write in the input feild and store input field we need onChange event(we get to know ki kya type kar rahe hai) and value field.
// onChange event vaprali ahe to get to know what is being entered by user. Accessed from event.target.value.

// OneLine
// onChange event(function inputEvent) kadun ji value ghetali, je value ="name" mule type karane shakya zalay, ti tya name variable madhe save keli which is defined through useState().

// 'single source of truth' means har ek input field me jo bhi value pass karte hai o must come from same source/variable. Here name is that source.
// Single variable cha ani tichya value cha access mi purn form madhe ghet asto.
// value = {variable} ahe tyachi value <input> tag control nahi karat (jo HTML me hota tha). yaha pe react usako control kar raha hai
// "name" variable chi value input field kadun ghetali by value = " " attribute.

// JavaScript jar jsx madhe lihayachi ahe tarach { } yenar, tyachya baher i.e in component or in function vaprayachi asel tar normally mi jashi lihito tashi lihinar.

//#35//  Login Form Submit
//**// <form> ch default behaviour ahe ki when we submit form, to page refresh hoke data BackEnd/Server la jaat hota. Ethe aapan data server la pathavat nahiye so to udun jatoy after submit.
// To solve this we use onSubmit attribute in form, which fires an event when we submit form. Tya event cha access gheun we can prevent form's default behaviour event.preventDefault();
// <form onSbmit={onSubmit}> in function  onSubmit (event) {event.preventDfault();}

// Hello shejari data ka dakhavtoy karan, just to show that now i have the input data with me. Now i can use it as i want.

// const App = () => {
//   const [name, setName] = useState();
//   const [lname, setLname] = useState();
//   const [first, setFirstName] = useState();
//   const [last, setLastname] = useState();

//   const onChange = (event) => {
//     setName(event.target.value);
//   };

//   const onLastChange = (event) => {
//     setLname(event.target.value);
//   };

//   const onSubmits = (event) => {
//     event.preventDefault();
//     setFirstName(name);
//     setLastname(lname);
//   };

//   return (
//     <>
//       <h1>
//         Hello {first} {last}
//       </h1>
//       <form onSubmit={onSubmits}>
//         <input
//           style={{ display: "block" }}
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={onChange}
//         />
//         <input
//           style={{ display: "block" }}
//           type="text"
//           placeholder="Enter LastName"
//           value={lname}
//           onChange={onLastChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

//#36// Handling Complex Multiple Input Form States
// hande written notes on Page(7).
// Only one useState()
// useState() madhe object define kelay so currentData is an object now.
// Only one function to all onChange events of input feilds.
// event.target.value yachi ji value ahe it is data entered in the input feild.
// We can access value of any attribute we required event.target.attributeName = valueStoredInAttribute.
// preValue of setCount function gives previous value stored in the current Data. For the 1st time preValue is initial data.
// name attribute and onChange event mule mi type karu shakato. name attribute vaparlyamule ji value yeti ahe ti ya navane(name chya value chya) yete ahe. [ekach onChange event aslyamule enteredData la differentiate karnyasathi name attribute vaparale ahe.]
// Attributes cha use kay ahe tar, name mhanje ya navane value janar, value mhanje ti actual value ahe tya input feild chi. i.e ya navane hi value janar.

// Adhi kay karacho tar ji value/dataEntered ahe ti event madhun access karaycho ani setname() through currentData la dyayacho. To currentData value attribute chi value mhanun server/screenvarach la pathvayacho.
// Adhi name attribute chi garaj navhati karan, pratyek input feild chi value mi different event through ghyaycho ani differnt useState variable madhe store karayacho.
// Now, ekach event ani ekach use state aslyamule, input feild madhil jo data/value mi ghetoy/store kartoy ti differnt navane/name ne ghetoy. Ani ti gheun ekach useState variable(object vaprun mi Ekache 10 variable banau shakato. i.e object keys will become variable now) through value attribute la value mhanun detoy.
// if...else ka karan name nusar differntiate karun variable la assign karnya sathi.

// preValue ka use kelay tar??
// setFulName through jenvha data patvatoy to mala eka variable madhe nahi tar variable.variable(i.e object madhe) madhe pathvayachay. Thats why if...else madhun suddha mi object return kartoy.[fullName is an object so setfunction through values assign kartana suddha objet madhech pahije]. tyamule pratyek condition nusar 1 value assign hoil ani bakichya preValue ne assign kelya.

// setFullName la data pathavtana mi object madhil keys cha direct access ghetala(may be bcz of preValue) mala fullName.fName or fullName.lName dyayachi garaj nahi padali.

// import React, { useState } from "react";

// const App = () => {
//   const object = { fName: "", lName: "" };

//   const [fullName, setFullName] = useState(object);

//   const onChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//     setFullName((preValue) => {
//       if (name == "fname") {
//         return {
//           fName: value,
//           lName: preValue.lName,
//         };
//       } else if (event.target.name == "lname") {
//         return {
//           lName: value,
//           fName: preValue.fName,
//         };
//       }
//     });
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <>
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           onChange={onChange}
//           name="fname"
//           value={fullName.fName}
//         />
//         <input
//           type="text"
//           placeholder="Enter Name"
//           onChange={onChange}
//           name="lname"
//           value={fullName.lName}
//         />
//       </form>
//       <button>Submit</button>
//     </>
//   );
// };

// export default App;

// yaat submit button kam karat nahiye like did in last one
// onChange through ji value yete ahe ti fname, lname ya barobar yete ahe i.e atrribute name through. Ani event.target.name mahnje value of event.target.name (i.e event.target.name = fname/lname etc).

//#37// React Login Form Challenge
// Two Learnings

//1. fullName madhe mi jevhade variables pass kele aahet through object thevde setFullName through return karayache while assigning values.

// 2. Object destructuring
// const value = event.target.value
// const name = event.target.name

// SAME AS

// const {value, name} = event.target;

// ek property ahe autoComplete = "on/off";
// type kelyanantar je suggestions yetat te on/off sathi ahe.

// 2 more input feilds == email and phone.

//#38// Spread Operator in Forms
// setFullName madhe mi je object return kartoy te repetative ahe so tithe object destructuring vapru shakato.

// const onChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//          OR  OR  OR  OR
// const {value, name} = event.target;

//     setFullName((preValue) => {
// const {fname,...remaining}={...prev}
//       if (name === 'fname') {
//         return {
//           fname: value,
//           ...remaining,
//         }
//       }
//       else  if (name === 'lname') {
//         const {lname,...remaining}={...prev}
//         return {
//           lname: value,
//           ...remaining,
//         }
//       }
//       if (name === 'email') {
//         const {email,...remaining}={...prev}
//         return {
//           email: value,
//           ...remaining,
//         }
//       }
//       if (name === 'phone') {
//         const {phone,...remaining}={...prev}
//         return {
//           phone: value,
//           ...remaining,
//         }
//       }

//       else { return prev; }

//     })
//   }

// Bagha kas simplyfy kelay te
// if madhun return honarya object madhe 1 value ani baki preValue hotya so, if madhun return kartana through object destructuring 1kala value ani bakichyanna preValue deun return kel ahe.
// if madhe gelya nantar aadhi saglyanna preValue assign keli ani nantar required value required variable la deun sagale return kele.

//#39// Turn 100 lines of code in just 2 lines to Complete Our Login Form

// useState() madhil initialData ha currentData madhe tar aahech but updatedData(Set..) also holds it through object preValue.(i.e like event object, preValue is object of set...)

// #38 pekshya sop kelay yaat
// Ek change kay kelay tar useState madhil object chi key ani name attribute chi value ya same kelya aahet aadhi tya differnt hotya. So that tya name ne value access zali ki ti simultaneously object la assign hoil.

// const onChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//          OR  OR  OR  OR
// const {value, name} = event.target;

//     setFullName((preValue) => {

// return {
//     ...preValue,
// [name] = value
// }
// })
// }

// Working
// ...preValue mule saglya key access zalya
// [name] => dynamicProperty event.target.name chi value yamule access honar. therfore [name] = fname/lname/email/phone and [name] = value aslyamule tyala value(enteredData) assign hoil. Ani ya name attribute chi value ani useState() madhil key(i.e preValue madhil key) he same aslyamule preValue madhil key ti value gheli. preValue mule useState update hoil.

//#40// Building a Todo List App Project
// return [...preValue, list] ==> why this?? karan list mule navin entered value array madhe add hot rahil but purn array cha access pahije ahe so ...preVlaue.(jya mule magchya values yetil jya list ne add zalya aahet)
// input feild empty kasa kela tar list chi value after all operation empty keli by setList(""); pass karun.
// Component ToDoList madhe mi return kartoy props.text (i.e itemList ji .map() ne map keli ahe ) but tya ToDoList la kas kalnar ki itemList kay ahe So, here is work of props. Tar props ne ti olakh patavali ahe.  HOW?? Component ToDoList madhun itemList return karta yaavi mhanun customise property banvali zila .map() chya itemList cha access dila. Ani ya property cha access props through ghetla Component ToDoList madhe.
// LEARNING ki Component la access denyasathi props pahije. i.e props is connecting dot.

// delete karnyasathi id, key ani delete function barach vaparalay tar te video madhunach bghun ghya.

//#41// Incrementing and Decrementing the State Variable on Button clicked
// Conditional Rendering kashi keli bagha
// if(num>0){
// setNum (num-1)
// }else{
// setNum (0)
// alert ("Sorry, Zero reached")
// }

// Layi sop aahe thodas logic develope karayachay.

//#42// How to use Material UI Icons
// Best icon pack over fontAwesome, fabIcon etc
// fontAwesome madhe link copy kara ani lihayala lagayach but MaterialUI madhe import karun component mhanun use karayach direct.

//#43// The Best UI Framework for ReactJS - Getting Started with Material UI
// Inbuilt component(jsx element) small letter se start hote hai but custom components Capital letters se start hote hai and imported rehate hai. . Ex <div>, <button> and <App />, <AddIcon /> etc

// index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AddIcon from "@mui/icons-material/Add";
// import AddIcCallIcon from "@mui/icons-material/AddIcCall";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <Tooltip title="Delete">
//       <Button>
//         <AddIcon />
//       </Button>
//     </Tooltip>

//     <br />
//     <Button>
//       <AddIcCallIcon />
//     </Button>
//
//   </>
// );

//#44// NPM (Node Package Manager)
//**// NPM is world's largest Software Registry
//**// The registry contains over 8L code packages.
// Open source // Developers use it to share their software.

// Software Package Manager (i.e package.json i guess)
// to install, run, npm init on cmd.
// npm madhe sagale code ahet but tyatil je code/packages mi use kele ahet yancha track thevnyasathi or reposistery mhanun yaacha use hoto which are stored in package.json in JSON form.
// USE when we share our project, to identify used packages.

// Command Line Client(CLI)
// Windows waale uses cmd and Lenux wale use CLI to install and all.

// npm can manage dependencies.
// How to use
// Jo npm component use karayachay to aadhi cmd through install karayacha(check dependency in package.json). import its component. Use the component whereever it is required.

// Ex CountDown from npm
// install the dependency
// import Countdown from "react-countdown";
//  <Countdown date={Date.now() + 20000} />;

//#45// React Project using Material UI
// To Do List using Material UI

// M Ui does not have input feild but it has Textfeild but not recommended to use.

// (event) means input feild chya saglya properties/attributes mi access karu shakato by event.target.propertyName.

// Whenever we use .map() method tar it should have unique key property.

//#46// How to Run React App in VS Code inbuilt Terminal

// cmd open n karta VS Code terminal var direct run karu shakato.
// VS Code madhe jo terminal ahe to VS Code cha ahe
// 3 Ways to open Terminal
// ctrl backtick (opens already opened terminal),
// ctrl shift backtick (opens new terminal)
// ctrl j (show/hide the terminal)

// same project multiple ports var open karu shakato by npm start in new terminal everytime.

// ctrl c (terminates the port i.e running stops)

//#47// How to Install and Use Bootstrap 4
//#66// How to Install and Use Bootstrap s

// npm install bootstrap on cmd/terminal (google search npmjs/bootstrap)
// import from node module to use its properties
// import "../node_module/bootstrap/dist/css/bootstrap.min.css"

//#48// React Bootstrap Autocomplete Extension
// Auto suggestion jas yet tasach when we add bootstrap classes by installing IntelliSense for CSS we can get auto suggestion.

//#49// React WebPage in just 1 MINUTE Onl
// Je pahije te bootsrtap varun uchlayach ani pahije tithe paste karayach.

//#50// Google Keep App

//#51// Context API in React JS

// **// Context APIs are used to set the global data(i.e to hold the state) and this data can now be accessed in any of the children's components without the need to pass it through every parent component.
// React hooks provides a concept called Context.
// React Context API allows us to easily access data at different levels of component tree, without passing prop to every level.(parent kadun direct pahije tya descendent child la janar and vice-versa)

// 3 Steps
// createContext() // to create data i.e context holds the state/s
// Provider // to pass it where it is needed // provider through aapan function pan pass karu shakato.
// Consumer // to access it where it is needed

// Ex suppose component App madhe child component ComA, component ComA madhe child component ComB ani component ComB madhe child component ComC
// Earlier ComC cha data App madhe dakhavnyasathi like chain ComC to ComB to ComA to App
// But Context API mule direct App madhun ComC madhe gheu shakato(App madhe data define kela ani tyachya access direct descendent child la dila with Context API)

// LEARNINGS
// provider madhe value asate ani consumer takes the function.
// contextCreate karto mhanje we create customise jsx element/component.

// Simplified with the help of useContext()

// createContext() and useContext() help us to avoid props drilling to the nested child.

//#52// useContext Hook
// Used to simplify Consumer part of createContex().
//**// To use the state/context in the child we use useContext() hook.

// Jithun data pathavayachay tithe createContext() ne Components/Variables banvayache ani Provider use karun value(jo data pathvayachay to) define karayachi.

// Jithe data vaprayachay/consumeKarayachay tithe useContext(pass Components/Variables created by createContext()) vaprun variables create karayache ani te vaprayache.
// OR createContext ani provider through jya values pathavalya(to object asel) tya aapan useContext() madhe destructure karun acceess karato.

// index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render (<App />);

// App.jsx
// import React, { createContext } from "react";
// import ComA from "./ComA";

// const FirstName = createContext();
// const LastName = createContext();

// const App = () => {
//   return (
//     <>
//       <FirstName.Provider value={"Shubham "}>
//         <LastName.Provider value={"Gunjal"}>
//           <ComA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </>
//   );
// };

// export default App;
// export { FirstName, LastName };

// ComA.jsx
// import React from "react";
// import ComB from "./ComB";

// const ComA = () => {
//   return <ComB />;
// };
// export default ComA;

// ComB
// import React from "react";
// import ComC from "./ComC";

// const ComB = () => {
//   return <ComC />;
// };
// export default ComB;

// ComC
// import React, { useContext } from "react";
// import { FirstName, LastName } from "./App";

// const ComC = () => {
//   const fName = useContext(FirstName);
//   const lName = useContext(LastName);
//   return (
//     <>
//       <h1>
//         My Name is {fName}
//         {lName}
//       </h1>
//       ;
//     </>
//   );
// };
// export default ComC;

// WORKING
// Mi context banavala i.e(Component banavala) with createContext method. Jya component madhun mala values provide karayachya aahet, tithe createContext vala component import kela ani tyachya through Provider madhun values taklya. Jithe ya values use karayachya aahet tithe createContext vala component import kela ani useContext la provide kela. Tya values aapan ethe vaparu shakato(by desructuring or by creating variable/s.)
// Varachya example madhe mi sepereate Context Component n banvata tithech banavun export kela aahe.

//#53// useEffect Hook

// USE eka element chi state change zalya nantar jar dusrya element chi state change karayachi asel tar to dusara element useEffect() through dyayacha.

// render means root.render wala
// by using this you tell React, What component needs to do after rendering.
// page renders whenever we save/refresh it.   EX  useEffect(() => {alert("i am clicked");});

//Ani jar useEffect() madhe [] pass kela tar fakt pahilya rendering nantarach(i.e pahilya page refresh nantar) useEffect() run hoto.i.e for one time only. EX useEffect(function, []) =>  useEffect(() => {alert("i am clicked");}, []);

// Jar perticular event chya rendering nantarach useEffect() run karayach asel tar, tya event madhil variable cha nav [] madhe pass karayach  EX useEffect(function, [variableName]) (yaat pan page refresh la chaltoy) EX  useEffect(() => {alert("i am clicked");}, [num]);

// LRAENING
// every page refresh la useEffect() run hotoy karan page refresh nantar sagalech elements submit/run/execute hotat so....

// useEffect always expects a function.

//index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// App.jsx
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [nums, setNums] = useState(0);
//   useEffect(() => {
//     alert("i am clicked");
//   }, [nums]);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setNum(num + 1);
//         }}
//       >
//         Click me {num}
//       </button>
//       <button
//         onClick={() => {
//           setNums(nums + 1);
//         }}
//       >
//         Click me {nums}
//       </button>
//     </>
//   );
// };

// export default App;

//#54// Changing the Title value of Website on Button Click

// App.jsx
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   useEffect(() => {
//     document.title = `You Clicked Me ${num} Times`;
//   });

//   return (
//     <button
//       onClick={() => {
//         setNum(num + 1);
//       }}
//     >
//       Click me {num}
//     </button>
//   );
// };

// export default App;

//#55// React API Call to Get Pokemon JSON Data using Axios and useEffect

// api, axios cha use kela to get api
// res is an object which stores API, got through axios.
// moves is an array so wrote moves.length

// App.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const APP = () => {
//   const [num, setNum] = useState();
//   const [name, setName] = useState();
//   const [moves, setMoves] = useState();

//   useEffect(() => {
//     async function getData() {
//       const res = await axios.get(`link`);
//       console.log(res);
//       setName(res.data.name);
//       setMoves(res.data.moves.length);
//     }
//     getData();
//   });
//   return (
//     <>
//       <h1>You Choose {num}</h1>
//       <h1>Your Name is {name}</h1>
//       <h1>Your Moves are {moves}</h1>
//       <select
//         value={num}
//         onChange={(event) => {
//           setNum(event.target.value);
//         }}
//       >
//         <option value="1">1</option>
//         <option value="25">25</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//       </select>
//     </>
//   );
// };

//#56// React Router Tutorial
// source FreeCodeCamp

//*// Server side Routing/Rendering - Whole page reloads even for a single update.
//*// Client side Routing/Rendering - Only a part of page reloads as per the demand

// Jar React Router cha use karayachay tar npm install react-router-dom, import BrowserRouter, render all the components through  <BrowserRouter> component AND need to import Route, Switch/Routes.
//**// <BrowserRouter> required to connect our React App with browser url.

// <Route> used to provide path and component i.e url var kay search kelyavar user kuthe gela pahije.
//**// <Switch> used to show only one component i.e First Match.

// <Route path = " " Component = {} >
// path = " ", means user kay search karel
// Component = {} means tya(path madhil) search la userla kuthe land karvayacha.
// path =" " varil content ha component = {} madhe thevlela ahe.
// EX path = "/" means Home Page, "/contact" means Contact Page and Component madhe he pages dyayala lagtat.

// Without <Switch> browser inGeneral madhe sagalech match karat ani sagalech page dakhavat. i.e jar /contact search kel tar / ani /contact wale pages/components dahavnar. // He  thevlech nahiye bahutek
// <Router madhe exact>, exact property helps to render the page/Component only if user exactly matches the path.// exact chi pan garaj vatat nahi ata.

// Jar path chukala or page exist karat nasel tar we have default Error page/Component.
// LEARNING
// <Switch> ani tyamule honara gondal chi tie tie fish zali ahe.

// index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Error from "./Error";
// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/About" element={<About />} />
//       <Route path="/Contact" element={<Contact />} />
//       <Route path="*" element={<Error />} />
//     </Routes>
//   );
// };
// export default App;

//Home.jsx
// import React from "react";
// const Home = () => {
//   return <>I am Home Page</>;
// };
// export default Home;

//About.jsx
// import React from "react";

// const About = () => {
//   return <h1>This is About Page</h1>;
// };
// export default About;

// Contact.jsx
// import React from "react";

// const Contact = () => {
//   return <h1>This is Contact Page</h1>;
// };
// export default Contact;

// Error.jsx
// import React from "react";

// const Error = () => {
//   return <h1>Ooops! Page Not Found</h1>;
// };
// export default Error;

//#57// Create React NAVBAR / MENU using React Router
//**// <Menu> madhe anchor tag vaprun href la <Route> madhil path la vaprlelya values dilya tar Navbar/Menubar madhil element/component var click kelyavar purn page reload hot. So router method cha kahich use hot nahi.

//**// To avode this we used to use link from react-router-dom.
// Anchor tag chya aaiwaji we use <Link>.ani href chya aaiwaji to.
//**// i.e <a href = ""> => <Link to = ""> AND vaule of to = value of path. But <Link> mule idea milat navati ki aapan nemak kontya page var aahe te. So tyasathi <NavLink> ahe

// NewUpdate
// import {NavLink} instead of {Link}
//*// <NavLink> mule (when we see in inspect - elements) active navacha class add hoto to every content written inside <NavLink>. Ya class la css madhe .active{} ne we can add styling so that aapan jya content var click kelay it will get highlighted.

// LAKSHYAT GHYA
// <Route> madhe path madhe component hota
// <NavLink> madhe content var click kel ki (through to="" i.e path="") component open hoil jo <Route> madhe defined ahe

//**// DIFFERENCE BETWEEN <Route> [it is SELF CLOSING] and <NavLink> [it takes content which is clickable]
// Ani <NavLink> madhil content clickable aahe karan it is like <a> tag (ani inspect-element madhe ti <NavLink> nahi tar <a> mhanun disate.)

// Menu.jsx
// import React from "react";

// import { NavLink } from "react-router-dom";

// const Menu = () => {
//   return (
//     <>
//       <NavLink to="/">Home Page</NavLink>
//       <NavLink to="/about">About Page</NavLink>
//       <NavLink to="/contact">Contact Page</NavLink>
//       <br />
//       <br />
//       <a href="/">Home Page</a>
//       <br />
//       <a href="/about">About Page</a>
//       <br />
//       <a href="/contact">Contact Page</a>
//     </>
//   );
// };

// export default Menu;

//App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Error from "./Error";
// import Menu from "./Menu";
// import "./index.css";

// const App = () => {
//   return (
//     <>
//       <Menu />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </>
//   );
// };
// export default App;

//index.css
// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
//   background-color: #ccc;
// }

// .active {
//   color: rgb(212, 33, 33);
//   text-decoration: none;
// }

// Bakiche components same as previous video

// Single Page Application
//**// Ethe aaplyakade single page aahe i.e index.js ani tya single pagevar with the help of router we can render multiple components. (But it seems like we are rendering multiple pages)

//#58// React Route Render Method | Difference between Render and Component Prop

// 3 Route Render Methods
// <Route component> // ata component jaun element aalela aahe.
// <Route render>
// <Route children> function

// USE kasa ahe tar
// Aadhi mi <Route> madhe jithe Component property vaprayacho tithe render vaprayach.
// Both properties could be written, tyanchi value aapan function through deu shakato. Why function, so that props could be used.

// EX  <Route path="/About" render={() => <About text="About Us" />} />
//     <Route path="/Contact" component={() => <Contact text="Contact Us" />}

// About.jsx (props passed to function About) will  return <h1>This is {props.text} Page</h1>;
// Contact.jsx (props passed to function Contact ) will  return <h1>This is {props.text} Page</h1>;

//**// Difference Between Two is
// Jenvha mi component through page render karnar tar it will create new page for every rendering
// Jenvha mi render through page render karnar tar it will create new page for 1st rendering and for later renderings it will just render same page with update if any. EX of Painting // Every time navin painting kadhun dakhavan ani tich painting dakhavan

// When to use What
// There is no performance difference
//*// Jar prop pass karayachi nasel tar component method but if you want to pass prop use render method.

//#59// useParams Hooks in React Router

//*// The useParams hook is used to read the dynamic params from the current URL that were matched by.

// Aadhi component la dilela path url madhe takla ki to component render vhayacha. But tya component madhil ekhadi gost access karayachi asel tar url madhi path varun hot navhati(Error component render vhayach if path doesnt match) for that to happen we use usePrams hook. Karan component sathicha path ani component madhil gostincha path vegla asnar so component madhe url through access ghenyasathi we use Params hook.

// Use
// fakt path nahi tar url barobar aankhi kahi takal tarach page access hoil yasathi useParam hook ahe => exclusive access sathi aapan as karu shakato.
// Bydefault naav denyasathi <NavLink> madhil to la to = "/user/vinod" dila tar vinod by default disel {fname} chya jagevar on user page/component. Karan jo paryant url madhun data yet nahi toparyant <Navlink madhun data access hoil=> this is to show user what to insert for access of this page.

// <Route> madhil path ="" la mi jevhade parameters denar tevhadya values dyanamically mi url, useParams la add karu shakato.

// NOTE
// <NavLink> madhil to="" chi ji value ahe ti default value ahe i.e tya component var gelyavar ti value disel
// <Route> madhe ani useParam() madhe fname and lname deto ahe jyachya value url madhun access hotil(url madhun <Route> madhe ani <Route> madhun useParams madhe). Ani tyanchya default values <NavLink> madhun dilelya aahet.

//User.jsx
// import React from "react";
// import { useParams } from "react-router-dom";

// const User = () => {
//   const { fname, lname } = useParams(); // Exclusive access sathi theu shakato he page
//   return (
//     <h1>
//       User{fname} {lname} Page
//     </h1>
//   );
// };

// export default User;

// App.jsx
//  <Route path="/user/:fname/:lname" Component={Name} />

// Menu.jsx
// <NavLink exact to="/User/vinod/thapa"> // default data till user enters right one
//     User
//   </NavLink>

//#60// useLocation Hook in React Router
//**// useLocation () returns location Object that represents the pathname/current url.
// useLocation() se ham current path ka pata laga sakate hai.
// my url is my current location

// User.jsx
// import React from "react";
// import { useParams, useLocation } from "react-router-dom";

// const User = () => {
//   const { fname, lname } = useParams();
//   const location = useLocation();
//   return (
//     <>
//       <h1>
//         User{fname} {lname} Page
//       </h1>
//       <p>My current location is {location.pathname}</p>
//     </>
//   );
// };

// export default User;

//#61// useHistory Hook in React Router
//**// useHistory () returns history Object that represents goBack()(redirects to previous search) along with other varios properties.
//**// useHistory () also gives location(like useLocation ()) but as history object is mutable/changable its recommended to use it from useLocation only.

// useHistory Hook gives you access to the history instance that you may use to navigate.
// Aadhi url through je pan search/access kelay te useHistory() ne access karu shakato.

// User.jsx
// import React from "react";
// import { useParams, useLocation, useHistory } from "react-router-dom";

// const User = () => {
//   const { fname, lname } = useParams();
//   const location = useLocation();
//   const history = useHistory();
//   return (
//     <>
//       <h1>
//         User{fname} {lname} Page
//       </h1>
//       <p>
//         My current location is {location.pathname}
//         {location.pathname === `/user/shubham/gunjal` ? ( <button onClick={() => history.goBack()}>Go Back</button>) : null}
//       </p>
//     </>
//   );
// };

// export default User;

// history.push()
//         {location.pathname === `/user/shubham/gunjal` ? (
//           <button onClick={() => history.push("/")}>Home Page</button>
//         ) : null}

// i.e .push() mule, ji value deil(value could be a path of component) tithe mi redirect hoil and not the back search like goBack().

//#62// Live Search Filter using Hooks & Router

// Search.jsx
// import React, { useState } from "react";
// import Sresult from "./Sresult";

// const Search = () => {
//   const [img, setImg] = useState("");
//   const inputEvent = (event) => {
//     const data = event.target.value;
//     setImg(data);
//   };
//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="Search Anything"
//           value={img}
//           onChange={inputEvent}
//         />
//        { img === "" ? null : <Sresult name={img} />}
//       </div>
//     </>
//   );
// };
// export default Search;

// Sresult.jsx
// import React from "react";

// const Sresult = (props) => {
//   const img = `http://source.unsplash.com/300x300/?${props.name}`;
//   return (
//     <>
//       <div>
//         <img src={img} alt="thapa" />
//       </div>
//     </>
//   );
// };
// export default Sresult;

// LEARNING
// props through me ek component dusrya component la jodu shakato.
// Initially empty karnyasathi ternery operator vaprla where initialData and condtion must be same (i.e "")

//#63// Create React 404 Error Page Not Found

// Error Page

//#64// 404 Error Page Redirect to Homepage or Custom Page

// Adhi aapan Error page dakhvayacho ata te n dakhavata direct user la Redirect karayach on Home Page if he/She enters wrong url.
// For this to happen we have Redirect component in react-router-dom module;
// <Redirect to = "/" /> use this component in App component.

//#65// Component life cycle // #Harry

// What happens when we use component in React App.
// Mounting - Birth of a Component
// Update - Growth of a Component
// Unmount - Death of a Component

// render() method is used to render HTML/DOM of the component in react. It runs during mounting and updating of your component.
// render method run hone ke baad componentDidMount() method runs after the component o/p has been rendered to the DOM. Used when API vaigara fetch() karna hota hai.
// componentDidUpdate() invoked as soon as the updating happens. Most common use case of componentDidUpdate() is updating DOM in response to prop or state changes. EX naye props mile, state change huye component ka.
// componentWillUnmount() method is called just before the component is unmounted and destroyed. Used to perform cleanups.

// With the help of hooks hum life cycle methods ko achieve karate hai in Functional components.

// Class Components

// Syntax

// class Title extends React.Component
// render(){
//     return <div>
//         Something
//     </div>
// }

// Using created Component
//  <Title>Sample title</Title>
