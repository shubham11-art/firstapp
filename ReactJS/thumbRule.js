// 1. Jar fakt HTML sarkhe elements, attributes, jar jsx element madhe vaprayche astil tar { } vaprayachi kahi garaj nahi
// je JS madhe shikloy ani te jsx madhe use karayachay tar {} must ahe.
// EX className = " "; but props, .map() etc in { }.

//2. Stylinhg jar inline karayachi asle tar property style should be an object.
// so stlye = {{ property and value }} // 2 {} karan ek object cha ani 1 of using JS in jsx.
// if Object created outside tar style = { objectName } 1 {} of using JS in jsx.

//3  . implies it is an object and we are taking its access.
// EX document., object.
// in React everything(array, tag, object etc) is considered as object. So with . we can access anything.

//4. prop cha nav ani sData(source) madhil key ch naav could be different (karan data access ani propertName he independent ahet) but obviously same asta for simplisity. But if various Cards astil tar in each Card one prop should be there which is key(same name). key kashyasathi tar pratyek Card should be Unique. Ani tya sathi sourcefile madhe pratyek element la id dyayacha(name could be anything but reserved characters) ani value of id could be number, string etc.
// Basically aapan jya properties (props) banvayacho ani tyachi value source file madhun ghayacho tasach every Card sathi key navachi prop banvayachi ani tyachi pan value source file madhun ghayachi ji number or string asnar ani pratyek element sathi vegli asnar.

//5. Return
// Return word n lihita jar mi sagale React.Fragment(<> </>) madhe takale tar sagale index.js madhe/or jithe import kela tithe access hotat.
// Ani jar return keyWord vaprala tar fakt tya madhilach data disto/access hoto.

// from Component
// Behind the scene return karat nahiye tar operation nantar jyacha use mala dusrya component madhe ahe or je mala screen var render/dakhavayachay karayachay tech return karto ahe.
// Mi return kartoy component madhun, i.e Mhanje jar mi component export kela tar mi ti Return Value Export karat Asto.

//6. React madhe properties or other things should be in camelCase.
// Component should be in Capitlize.

//7. React madhe aapan complete JavaScript lihto only difference is ti aapan Component madhe lihto(export-import), { ashi use karto}.

//8. Hooks
// Must
//Declaring Hook/useState(); at the top inside a component(i.e function)
// import React, {useState} from "react"; => Where we are using hook.
// Screen varil display cha jo first appearance ahe tyatil jya mala dusrya form madhe pahije i.e tyanchi static state change zali pahije  tar we use Hooks. [Appearing display ha hook chya intialData madhun yeto tar, changed State hi hook chya set... madhun yete].

//9. Spread Operator #38 madhe
// Aadhicha motha/repetative code ani tyachya chota kelela code he samorasamor theun baghitlyanantar optimization ani aaplied use of what we have learned as theory kalato.

//10. import kartoy mhanje to component ahe i.e it becomes jsx element so <Component /> asa element mhanu use karayacha.

//11. package.json madhe dependencies ahet. It means maza project kashyavar dependent aahe. i.e project banvanyasathi kay kay use zalay. Konte Konte code mi npm through install kele aahet.

//12. import React from "react"; means we are importing/using React Component from react Module/Package.

//13. React madhe Bootstrap varun or MUI varun or npm varun kahi import karun use kel tar. Tyatil self closing tags aaplyala hatane close karavya lagtat. like <img >, <input> etc

//14. Adhi useState() madhe, button la or <input /> la single event single function dyayacho but we can give n number of function. Tyat named and directly passed functions aahet je anynomous astat.
// Ex  <button onClick={(() => { setNum(num + 1);},() => { alert("i am clicked");}) }>   Click me {num} </button>)

//15. Hooks should be used at the top of the functional component(createContext() is not a hook)

//#55// React API Call to Get Pokemon JSON Data using Axios and useEffect
// api sathi either fetch API or axios ka use hota hai.

//17. Component banun import karan or Function component chya aat lihin ekach ahe
// Ex import About from "./" on App and using it as <About/> inside App == const App = () => { const About = () => {return <h1> Boss </h1>}}
// USED in #56 React Router

//18.  class components madhil life cycle methods ya hooks madhe resolve kelya aahet.
