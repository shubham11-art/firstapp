//##//  Material UI
// week3- 5 and week4- 1
// See with MUI.jsx in Projects/MaterialUI.js

//***// Material Components vaprana ani tyanna style karan ya don veglya gosti aahet.

// Material Design
// Developed by Google.
// Stable design and gives mobile like feel. Web specific designs are also there.
// material.io is official design
// Various components like bootsrtap but different than those components also.
//**// It is in HTML form so he material react sathi customise kelel ahe. WebSite mui.com
// Matrial design pan Mui varunach vaprayachay.

//**// 3 Important things
// Layout  // Strucure of Page
// Components  // Importing the Components
// Component Styling  // Styling the Components

// Roboto font sathi copy link and pest it in head of index.html.

//**//Two types OF Imports
// Default import or Specific import
// import Button from "@mui/material/Button";
// Named Import
// import {Button} from "@mui/material";

// Button from MUI
//  import React from "react";
//  import Button from "@mui/material/Button";

//  const MaterialDesign = () => {
//    return (
//      <>
//        <h1>Hello World</h1>
//        <Button variant="text">Click Me</Button>
//        <Button variant="outlined">Click Me</Button>
//        <Button variant="contained">Click Me</Button>
//      </>
//    );
//  };
//  export default MaterialDesign;

// Varient nusar Button style/look change honar.

// MUILayout using MUI System

//**// Bootstrap madhe Layout (structure of our page) sathi Conatiner, Row, Column use karto ethe MUI madhe aapan Flex Box vaprto i.e Container and Grid.
// MUI madhe jar component var styling pahije asel tar tyala Wrap kartana <div> madhe nahi tar <Box>(component of MUI) madhe karayache.(<box> ha internally <div> sarkhach treat kela jato)

// <Box> kashya sathi ahe tar Material(MUI) madhe jar styling dyaychi asel tar normal styling sarkhi deu shakat nahi so <Box>
// Mala jar header, section, footer, h1 etc pahije asel material madhe tar te mi <Box Component = "" > through ghenar(i.e jo element/tag internally tayar zala pahije to component la dyaycha) direct ghayache nahi.

// style chya aaiwaji sx(MUI system styling) and it only apply on material components(imported) and not on any other html/jsx element.
//**// sx madhe or material styling hi spacer madhe chalate ani style vaparal tar px madhe chalat. sx aapan pixle madhe pan deu shakato.

{
  /* <h1>Material Layout</h1>
      <Container>
        <Box sx={{ backgroundColor: "red" }}>
          <Box component="header">Head</Box>
          <Box component="section">Section</Box>
          <Box component="footer">Footer</Box>
        </Box>
      </Container>
      <Container maxWidth={100}>
        <Box sx={{ backgroundColor: "red" }}>
          <Box component="header">Head</Box>
          <Box component="section">Section</Box>
          <Box component="footer">Footer</Box>
        </Box>
      </Container> */
}

// Layout Using MUI System
// flex-container ani fiex-item sathi aapan grid use karto
// import Grid from "@mui/material/Grid";
// bahercha <Grid> zala flex-container ani aatale <Grid> zale fiex-item ani mg tyanchya properties accordingly.

{
  /* 
   <h1>Material Layout</h1>
  <Container>
  <Grid container spacing={1}>
    <Grid item>
      <Box sx={{ backgroundColor: "red" }}>Item 1 </Box>
    </Grid>
    <Grid item container>
      <Box sx={{ backgroundColor: "green" }}>Item 2 </Box>
      <Grid item> item 4</Grid>
      <Grid item> item 5 </Grid>
      <Grid item> item 6</Grid>
    </Grid>
    <Grid item>
      <Box sx={{ backgroundColor: "blue" }}>Item 3 </Box>
    </Grid>
  </Grid>
</Container>; */
}

//**// <Container> mhanje wrapper ahe i.e normal <div> ne je karayacho tech ethe <Container> ne honar. nested <div> asayache tech ethe nested <Grid> ne honar. i.e ek <Grid> mhanje ek container/box, ani bahercha <Grid> aatylya <Grid> sathi parent tar aatla ha child zala. i.e bahercha <Grid container> ani aatla <Grid item>. Ani jar <Grid item container> as asel tar it means it is child of some other <Grid> and parent of some other <Grid>.

// Other Components
// Stepper
// Radio Button
// Sliders
// Switches
// Avtar // Img chya aaiwaji rounded img yeil// mostly profile sathi use karto
// Badges
// Divider // like <hr />
// Chips // Add , Delete karnyasathi on linked in etc
// Backdrop // Shadow back la

// Dialog
// <Dialog open = "" onClose = {}> // open jar true asel tar Dialog box disel ani open jar false asel tar nahi disnar. onClose la {handleClose} asat jya madhe open false kelela asto so that Dialog box chya baher screen var kuthe hi click kel tari Box close hoto.
// <Dialog> barobar <Button> asan garjech ahe jyala function deun open true kelel asat. So that onClick Dialog Box open hoil.
//   <DialogTitle>, <DialogContent> and <DialogActions>

// MaterialIcons
//**// Inside IconButton ghyayach so that aapan tyala styaling karu shakato.
// Direct Icon vaparan ani Inside IconButton vaparan farak ahe.

// Material Styling
// For Styling By 1) hooks(deprecated) 2) styled components 3) MUI system

// MUI base is unstyled components and MUI system is to apply style to them
//**// material-ui is material4 , uses JSS and hooks.
//**// and @mui is material5 sx is muiSystem

// import {makeStyles} from @mui/styles
// he depricate zal ahe
// function gheun to call karayacha asto yamadhe.

//**// Styled Components
// import { styled } from "@mui/material/styles";
// we are importing the styled function which needs to be called so styled() asa syntax ahe.
// const Title = styled (whichElementToBeStyled can be HTML or MaterialComponent ) ({css properties in object form})
// & represents parent element.

// React madhil css ani normal css madhe, lihinyat, farak ahe

// import React from "react";
// import { styled } from "@mui/material/styles";

// // const Title = styled("h1")({
// //   backgroundColor: "cyan",
// //   color: "#fff",
// //   "&:hover": {
// //     backgroundColor: "blue",
// //   },
// // });

//**// Varati Css using Object  // react css // object and camelCase
//**// Khali css using Backtick // vanila css

// const Title = styled("h1")`
//   background-color: cyan;
//   color: #fff;
//   &:hover {
//     background-color: blue;
//   }
// `;

// const MUILayout = () => {
//   return (
//     <>
//       <h1>Styled components</h1>
//       <Title>Styled component</Title>
//     </>
//   );
// };

// export default MUILayout;

// MUI System
//**// system mhanjech sx prop which can only be used on M UI component and not on normal html/jsx element like <h1>, <div> and <button> etc.
// CSS utilities for M UI Components.
// Values in spacer (direct style madhe px madhe astat) = number * spacing.

// Advantages over Styled component
//1. styled component madhe contex switch karava lagto, here then there operation ahe.
//2. styled component madhe custom names dyave lagtat, may create comfusion after more coding here it is avoided.

// break point css sathi array or object deu shakato. array[xs to lg], object madhe sequence doesnt matter.

// import React from "react";
// import Box from "@mui/material/Box";

// const MUILayout = () => {
//   return (
//     <>
//       <Box
//         component="h1"
//         sx={{
//           backgroundColor: "secondary.main",
//           p: 2,
//           m: 2,
//           boxShadow: 8,
//           border: 3,
//           ":hover": {
//             bgcolor: "primary.main",
//           },
//           width: {
//             xs: "100%",
//             sm: "70%",
//             md: "40%",
//           },
//         }}
//       >
//         MUI System
//       </Box>
//     </>
//   );
// };

// export default MUILayout;

// Working
// <Box> mhanje div banala
// component = "h1" mule internally <h1>MUI System </h1> as tayar zala
// sx mule styling apply zali to material component.

// TailWind CSS
// It also has classes like bootstrap.
// like Bootstrap Only.

// BootStrap
// Week3 -4.
// How we can run it on our React APP tar through CDN link or npm package.

// CDN link (pest in HTML <head> tag)
// Bootstrap javascript file pest in <body> tag

// npm install

//***// import these two where <Bootstrap/> components are being used
// for CSS
//  import "../node_module/bootstrap/dist/css/bootstrap.min.css";
// for Bootstrap JS
//  import "../node_module/bootstrap/dist/js/bootstrap.bundle";

// Bootstrap he HTML sathi banavalay and not for jsx so accordingly changes karayache like class to className SO
// Bootstrap React banvalay i.e customised bootstrap for React. Same bootstarp style and classes but customise form.

// APP.jsx var <Bootstarp/> component import karayacha ani css ani js import karayache from node_module
// EX mi direct Accordiaon use kelay instead mi tyacha component banavun import karu shakato.

// import React from "react";

// const Bootstrap = () => {
//   return (
//     <>
//       <button className="btn btn-primary"> Click</button>
//       <div class="accordion" id="accordionExample">
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="headingOne">
//             <button
//               class="accordion-button"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               Accordion Item #1
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             class="accordion-collapse collapse show"
//             aria-labelledby="headingOne"
//             data-bs-parent="#accordionExample"
//           >
//             <div class="accordion-body">
//               <strong>This is the first item's accordion body.</strong> It is
//               shown by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="headingTwo">
//             <button
//               class="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseTwo"
//               aria-expanded="false"
//               aria-controls="collapseTwo"
//             >
//               Accordion Item #2
//             </button>
//           </h2>
//           <div
//             id="collapseTwo"
//             class="accordion-collapse collapse"
//             aria-labelledby="headingTwo"
//             data-bs-parent="#accordionExample"
//           >
//             <div class="accordion-body">
//               <strong>This is the second item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bootstrap;

//**// React Bootstrap
// No need to import js file but css file needs to be imported.

//NOTE
// Bootstrap madhe aapan component import karat navhato direct code copy karun use karayacho but here in React Bootstrap we need to import the component we want to use.

// Advantages of React BT over Normal BT.
// HTML/jsx changes karayachi garaj nahi.

// EX now Accordian only but of React BootStrap
// import React from "react";
// import Accordion from "react-bootstrap/Accordion";

// const Bootstrap = () => {
//   return (
//     <>
//       <Accordion defaultActiveKey="0">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>Accordion Item #1</Accordion.Header>
//           <Accordion.Body>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="1">
//           <Accordion.Header>Accordion Item #2</Accordion.Header>
//           <Accordion.Body>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </>
//   );
// };

// export default Bootstrap;

//**// Layout in React Bootstrap

// This is in normal bootstrap
//  <div classNaame="container">
//    <div classNaame="row">
//      <div className="col bg-primary"> First</div>
//      <div className="col bg-danger"> Second</div>
//      <div className="col bg-success"> Third</div>
//    </div>
//  </div>;

// in React Bootstrap
// je normal yachyat className aahet te ethe Components aahet => needs to be imported.

// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const Bootstrap = () => {
//   return (
//     <>
//       <h1>Layout in React Bootstrap</h1>
//       {/* <div classNaame="container">
//         <div classNaame="row">
//           <div className="col bg-primary"> First</div>
//           <div className="col bg-danger"> Second</div>
//           <div className="col bg-success"> Third</div>
//         </div>
//       </div> */}
//       <Container fluid>
//         <Row>
//           <Col className="bg-primary"> first</Col>
//           <Col className="bg-secondary" md={6}>
//             second
//           </Col>
//           <Col className="bg-success"> third</Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Bootstrap;

// Working
// <Container> <Row> <Col> gheun LayOut banavala ahe.
// bootstrap classess he valid ahet but Component var use karayache
// <Container fluid>, fluid => full size i.e 100%
// <Container className = "justify-content-center">

// Image Slider
// import Carousel for imageSlider
// Repeatative code, component and property vaprun kami kela. Yavar suddha .map() method vaprun aankhi kami karu shakato how? tar props chya values cha array banvayacha(netflix project madhe kel tas).

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";

// const ImgItem = (props) => {
//   <Carousel.Item>
//     <img className="d-block w-100" src={props.image} alt={props.title} />
//     <Carousel.Caption>
//       <h3>{props.title}</h3>
//       <p>{props.body}</p>
//     </Carousel.Caption>
//   </Carousel.Item>;
// };

// export default ImgItem;

// import React from "react";
// import ImgItem from "./ImgItem";

// const Bootstrap = () => {
//   return (
//     <>
//       <h1>Layout in React Bootstrap</h1>
//       <Carousel>
//         <ImgItem image=" " title=" " body=" " />
//         <ImgItem image=" " title=" " body=" " />
//         <ImgItem image=" " title=" " body=" " />
//       </Carousel>
//     </>
//   );
// };

// export default Bootstrap;

// (props chya aaiwaji) => ({image, title, body}) as lihum ditrect access deu shakato without writing props word.

//***//  Component Life Cycle
// week 2 - video 1- 1:21:00

// What happens when we use component in React App.

// Mounting - Birth of a Component
// Update -   Growth of a Component
// Unmount - Death of a Component

// render() method is used to render HTML/DOM of the component in react. It runs during mounting and updating phase of your component.
// render method run hone ke baad componentDidMount() method runs after the component o/p has been rendered to the DOM. Used when API vaigara fetch() karna hota hai.
// componentDidUpdate() invoked as soon as the updating happens. Most common use case of componentDidUpdate() is updating DOM in response to prop or state changes. EX naye props mile, state change huye component ka.
// componentWillUnmount() method is called just before the component is unmounted and destroyed. Used to perform cleanups.

// With the help of hooks hum life cycle methods ko achieve karate hai in Functional components.

// Component LifeCycle means Component cha creation to distroy paryant cha phase

// internally component ha object mhanun treat hoto.

// 3 Phases
// Mounting
// Updating
// Unmounting

//ScreenShot 116

//1. Mounting Phase

// Creation and Inserting a Component into the DOM
// Mount kelay mhanje to render zalay/distoy on UI, we cant hide it.
// It executes only once in whole LifeCycle.

// Methods which executes in the mounting phase
// constructor() // uses initialize object // constructor gets executed when object is created.
// static getDerivedStateFromProps()
// render()
// componentDidMount()

//2. Updating Phase

// Already mounted Component madhe changes karan mhanje Updating

// Methods which executes in the mounting phase
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapShotBeforeUpdate()
// componentDidUpdate()

//3. Unmounting Phase

// DOM madhun Component kadhun takan mhanje Unmounting

// Methods which executes in the mounting phase
// componentWillUnmount()

// To tarck the phases and to do activities we have life Cycle methods.

// render method zalyanantarach UI update hoto i.e DOM update hoto.

//***// useEffect and LifeCycle
// week3 - video2

// ekhadi value/state change zalyavar jar khai activity karayachi ahe tar useEffect with dependency vaprayachi.
// LifeCycle chya functionality by useEffect hook. hook is a function

// useEffect(callback, dependencies) => after each dependency change callback gets executed, if no dependency callback executes only once.
//dependencies aapan array madhe deto(change/update honarya gosti)
// useEffect(()=>{}, [])
// empty array => callback executes only once after mounting
//**// multiple dependencies deu shakato.

// NOTE
// sideEffects mahnje UI chya baher kame karnyasathi like timer, serverDataFetch etc. Ya sideEffect perform karnyasathi we use useEffect(). i.e Asynchroneously kaame karnyasathi vaprato.

// componentDidMount()
// const UseEffectHook = () => {useEffect(() => {console.log("componentDidMount");}, []);
// Mounting happens after 1st rendering karan tenvhach to DOM var disel. Ani component mount zalya zalya kahi dakhvayach asel tar te aapan useEffect() through deto. like constructor in class component.

// componentDidUpdate()
// 1st rendering pasun tya component chya jevhdya rendering hotil, i.e jenvha jenvha dependencies change hotil tenvha tenvha callback execute hoil i.e update run hoil
// const UseEffectHook = () => {useEffect(() => {console.log("componentDidUpdate");}, [change]);
// change => konti state change zalyavar he execute karayach.

// Ex
// import React, { useEffect, useState } from "react";

// const UseEffectHook = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("componentDidMount");
//   }, []);

//   useEffect(() => {
//     console.log("componentDidUpdate");
//   }, [count]);
//   return (
//     <>
//       <h1>UseEffectHook {count}</h1>
//       <button onClick={() => setCount(count + 1)}>++</button>
//       <button onClick={() => setCount(count - 1)}>--</button>
//     </>
//   );
// };
// export default UseEffectHook;

// WORKING
// Every first rendering la (i.e page refresh la) useEffect() madhil callback execute hoto.
// componentDidUpdate() la ji dependency(count) dili ahe ti execute zali ki componentDidUpdate wala useEffect() cha callback execute hoil

// componentWillUnmount

//*// mhanje useEffect() chya callback madhun dusar function return karayach. This function will be called when we remove that component from DOM. (Remove karane mhanje to component mi kashyatunach return kelal nahi i.e ). Unmounting happens when parent component performs an update that does not render the child component.

//*// As long as renderMyComponent = true , the component will render. If you set renderMyComponent = false , it will unmount from the DOM.

// useEffect(() => { return function () { console.log("componentWillUnmount");};},[])
// useEffect(() => { return () => { console.log("componentDidUnmount"); };},[])

//**// NOTE: mount sathi dependency empty asnar, update sathi dependencies yenar, willUnmount sathi callback madhun function return karayach.

//***// Fetch API / HTTP
// Week6- video4

// Without React Router DOM Routing kas karayach tar Manually DOM madhe Location, object, history yancha vapar karun karayala lagnar.

//**// HTTP
// Hyper Text Transfer Protocol
// It is used for communication by the two applications over the web.

// Web Client
// It makes different HTTP requests to the web servers. For fetching data, update/delete data etc.

// Web Server
// It is an application that accepts HTTP requersts of the client and sends HTTP response to the client.

// HTTP Requests Types
// CRUD operation methods.

//1. get
// It is used to fetch the data from server.
// It does not have body

//2. post
// It is used to send data(which is not present on the server) to the server
// It has body therefore data will be transferred within body.
// It is more secure than get

//3. delete
// It is used to delete a resource from the server

//4. put
// It is used to update(present aslelya data madhe update) the resource from the server

// Difference between post and put is, post is to add new user/data where as put is to update the existing user/data.

//5. patch
// It is used to partially update the resource from server
// Not used so much

// Requests are done through
// XMLHttpRequest
// fetch()

// Server aapan banau shakato.
// Fake server miltat vaparnyasathi i.e freee fake Api for testing
// Ex JSONPlaceholder
// EX Reqres // requestresponse
// Ex fakestoreapi.com

// fetch()

// inspect >> network madhe request chya details aahet
// 200=> request resolved
// 201 => response code for if any data created on server.
// Response => request resolve zalyavarch output.
// Payload aahe => request chya body madhe konta data chalala aahe.

// See Fetch Api Folder

//1. Get Request

// fetch() returns a promise which is resolved by .then(response), then gets a response
// Aalela data state madhe save karayacha.

// fetch() will return a promise jyachya resolve sathi .then ahe. But then madhil response chi json file jar pahije asel(i.e response.json()) tar async await vaprayala lagate karan response.json() returns a promise tar te resolve karnyasathi.

// May be, promise, .then(),, promise, .then() madhun vachnyasathi async await vaprayach asel.

//2. Post Request

// post madhe preflight request jaate for confirmation

// post and put method madhe data pathavava lagto so along with request we also pass an object which contains method, body, headers(setup ki contentType kay aahe i.e format kay aahe like json, text, XML etc ) etc.
// put madhe address/url la aapan position deto jithala data update karayacha ahe tithali.
// delete madhe data nasato just address and method

// Practice sathi Reqers Api site ghetali

// LEARNINGS
// GetRqe and Profile chi ji file aahe tyat response.json resolve karnyasathi async await vapral.
// .map() method vaparun user madhe data ghetala aahe, user cha data profile file madhe use kartana {name, id, phone}, array destructure karun use kela. i.e {...user} = {name, id, phone} karan const user = [name : " ", id = " ", phone : " "]

// Practice and PracProfile, madhe aapan same GetRqe and Profile files sarkha kel but props cha use kela aahe. User cha array tithech custom properties madhe break kela ani props through access kela.

//***// Axios
// Axios folder in src
// Week6 - video5

// fectch() he without axios api call sathi aahe

// aaplyala sagalikade axios ch vaprayach aahe.

//**// response
// url request nantar response jo yeto it is an object.
// We have response status codes like 100, 200 etc
// 100 means informative
// 200 => success // 200 ok, 201 created
// 300 => Redirection Related messages
// 400 => Client side Error  // 401 unauthorised 403 forbidden
// 500 => Internal server error
// console the response you got from request

// axios.method()
//**// pratyek method promise return karti so .then() yenar
// ethe useEffect() hook vaprun aapan direct render kelay response without button.

//***// NOTE
// 3 Steps Lakshyat ghya
// 1. Data fetch karan (axios or fetch)
// 2. Component madhe store/maintain karan (useState() or redux store)
//3. Data show karan on the UI

//***// Note
// Route parameter =>   /{value}
// Search parameter =>  ?{value}

//***// Axios madhe UserList and UserProfile files banvalya to get data with axios request.(UserList la App madhun render karun aapan O/P pahu shakato).

//***// Single user fetch karnyasathi url madhe /Id vaprala aahe.

// Don file banvalya (GetDEmo ani SingleUser)
// GetDemo kashyasathi tar jenvha url change hoil tenvha konta component render hoil so GetDemo madhe Routing through path set kela aahe component cha.
// Automatic functioning sathi GetDemo madhe Routing vaparali aahe. i.e jenvha url cha path change hoil tenvha he(element madhil) component dakhavayache ani tya component through je dakhavayach tyacha code tya tya components madhe aahe.

// id chya path var (i.e url madhe id ala ki SingleUser Component render vhayala haway)singleUser file thevali aahe aani SingleUser disnyasathicha/render honyacha program yaat aahe.

//1. Navavar click kelyavar to open/redirect vhyahala hawa aahe so navala <Link> tag madhe ghetala aahe. Ani path = to ha id aahe karan id through aapan individual user cha access gheu shakato by url. Ha change <UserProfile/> madhe karayacha

// khalach sagal <SingleUser/> madhe
//2. <Link/>var click kela ki route parameter yetoy(i.e url change i.e id) tyachya access sathi  useParams() hook. i.e useParams() call kela ki id milnar i.e route paramete milnar.(useParams() hook aahe url madhil change save karnyasathi i.e access karnyasathi)
//3. ha jo id alay tyach id ne server varun user fetch karayacha by axios.get() ani fetch kelelya server la maintain karnyasathi useState() ahe.
//4. jenvha jenvha id change hoil tenvha tenvha user la fetch karayachay so UseEffect(). [] la id pass kelay karan id change=> calling useEffect i.e axios request.
//5. ani ya user la fetch karnyasathi axios.get request aahe jyat id dynamic thevala aahe. Aalela response setUser through user la dila aahe i.e useState().
//7. Aani mg user madhil data vaprala. Every time user. karun vaprnyapekshya object destructuring karun vaprala

// WORKING
//<Link/> mule Clickable name >> change in url >> url change(id change) accessed and stored by useParams() ya id var Route karun SingleUser file var aalo >> [id] change mule UseEffect() call hoti aahe >> useEffect() mule axios.get() run hoil ani data fetch hoil >> ha data setUser() (useState()) through user madhe store kela >> ani mg to vaprala to diplay user.

//**// Week 6- video 6
// Server Setup and Tasks

// At Start Server setup and API creation
// 48:00 chya pudhe task

//**// Server setup
// JSON Server

// Installation
//**// npm i -g json-server
// Global Installation // i.e ekdach install karava lagat. Pratyek project sathi vegal karnyachi garaj nahi

// Server Creation

// server chi basic url kay asnar tar
// http://localhost:3002/name  // name represents APIs present on server i.e tya navacha API server var asnar jo ki url through access honar.
// Ex // http://localhost:3002/users
//   // http://localhost:3002/products etc

// APIs banvalyannatar server suru karayala lagnar. Tya shivay server request accept karat nahi.
// suru karnyasathi, D:\reacttutorial\firstapp\server> json-server db.json --port 4205 hi commomd run karayachi. Server ya folder madhe run karayachi.
//**// json-server db.json --port 4200 (Basic Commond)

//*// This json-server is temporary for checking client application karan dusar server ready nahiye.

//***// Server setup means mi mazya URL var db.json cha access gheto aahe. i.e setting up the file/place on web, computer etc on our URL.

// running script error
// set-ExecutionPolicy RemoteSigned -Scope CurrentUser
// Get-ExecutionPolicy
// Get-ExecutionPolicy -list

// Accessing Json Server
// ./src/Task1

// address?.city  // ? => adderess jar undefined or null ala tar safe navigation use karayach.

//***//   Week6- Video 6- 48:00
//        TASK 1 Folder
//        (TASK 1- Server Data and CRUD Operation)

// Fake API varun(fetch API and axios chya video madhun je shikalo te) fakt fetch() i.e get karata yetay but baki CRUD operations reflect hot nahiye so te karnyasathi Server banvato aahe.

// MUIDatables
// install npm i mui-datables
//  <MUIDataTable /> import kel from npm mui datatables varun to show the table.
// Table madhe kiti columns astil he sangave lagnar aahe so manually define kel ani ARRAY OF OBJECT banvala. const column = [ {lable: "Age", name: "age", options: { sort: true, filter: true,},, { }]

// MUI data table aahe yachya sathi aaplyala columns tayar karave lagtat i.e Name/Heading of Column(name).
// options jo aahe to, filter, sort ase options vaprnyasathi vaprtat. Je true karnar tech options aaplyala table madhe disnar.

// context vaprnyasathi seperate file banavali aahe(UserContext.js jyat createContext aahe), To provide the data from UserList to AddEditUser and its any child. UserList madhun jo data pathavala to AddEditUser madhe consume karnyasathi useContext vaprala jyala UserContext pass kela jo return madhe kay deil tar ji value Provider madhe aahe.

// Seperate form banavala jo DailogContent madhe access kela.

// Create var click kel ki server la post request jayala pahije ani aapala table update zala pahij.

// Chronology
// Written Notes Page 9/10 var chronology aahe.

// USerListServer and access from server through url
// Button ani Button var Dailog Box
// Dailog content madhe Form
// Form madhil Create Button dablyavar, Server Update
// Automatic update sathi loadUser() banvala in UserListServer ani pass kela UserForm la. Create Button la handleDailogClose dila.
// Actions i.e Edit/Delete user sathi IconButtons, extracolumn(custom column jenvha pahije asto tenvha extra property use karavi lagte like customBoduRenderLite or customBoduRender) ghetale. customBoduRenderLite this returns index of an array. const singleUser = user[index] => ki state madhe jo saglya users cha array maintain kelay tyatil single user(index varun) access kelay. Delete symbol la functionality add keli which is id pass kelay karan id chya basis var aapan delete karnar aahot.
// Delete press kelyavar sweetalert2 through alert dakhavala.
// sweetalert2 npm package
// prompt, alert, confirmation ase dialog aahet tyavar(june notifications browser dependent aslyamule vaparale nahit)
// Update press (EditIcon) kel ki Edit cha same form open zala pahije tyasathi column madhe editUser function ani initialUser mhanun state maintain karto aahe.
// useState() madhe initialUser ghetlela aahe, je empty form sathi addUser la pan dilel aahe.

//**// Week 7 - Video 1
// Yaat suruvaatila, pahile 42:00 min, pan TASK 1 continue kel aahe.
// Configuration of BAseURL and Its EndPoints in src/API folder

// .src/API/config.json file
// Base url set up kela ani tyat create = post cha path after baseUrl(/user), update = put cha path after baseUrl(/user/) etc

// instance create karayachay(axios cha instance create karat aahot)
// .src/API/Api.js
// Why instance tar, specific server config maintain karu shakato aani ethunach 2/3 server aapan aaplya project var call karu shakato. i.e pratyek server chi detail maintain karan sop jaat ethun.
// HOW to use instance
// import Api.js file and import endpoints instead of axios.
// Api madhe axios ani endpoints/config.json madhe url aahet.
// axios.get("http://localhost:4205/user") ==  Api.get(endpoints.api.user.fetchAll)  // config.json hi endpoints navaane access keleli aahe.
//  axios.delete(`http://localhost:4205/user/${id}`) == Api.delete(`${endpoints.api.user.delete}${id}`)
// axios.put(`http://localhost:4205/user/${user.id}`, user) == Api.put(`${endpoints.api.user.update}${user.id}`, user)
// axios.post("http://localhost:4205/user", user) ==  Api.post(endpoints.api.user.create, user)

// instance che Advantages
// Hard coded url naslyamule jar server var kahi changes zaale tar no tension. Eka thikanvarun change kela tar sagalekiade change hoil.

//**// Week 7 - Video 1 -- 43:00

// Interceptor
// Intercept karan mhanje modify/changes karan. i.e Start to End paryant janyachya margat madhech incercept/modify karane.

//**// HTTP Interceptors
// Interceptor through aapan Request ani Response donhi varati perform karto.
// client to server and server to client "n" number of requests ani responses respectively to and frow hot astat. So tyanchyavar kahi common operations perform karayache astil tar te intercept kele jatat. Ex Common operation like error handling on HTTP Responses
// Aapan Request and Response donhi madhe pahije te changes karto i.e intercept karto as per our need.

// TASK 1 madhun janarya pratyek request la modify karu

//**// Request Interceptor
//i.e pratyek request chya Request Header madhe authorization add karu.
// Done in Instance we have created
// src/API/Api.js

//**// Response Interceptor
// success che response aapan ethe handle nahi karat te API calllach handle hotat
// Error response like unauthorizes, forbidden etc ethe handle kele jatat

//**// Week 7 - Video 1 --  1:14:00
// TASK 2
// TASK 2- Part 2 - continued on Line No 1271 to 1341 - //***// 4/11/2022 Continued -- 31:30

//TASK 2- Part 1 - Week 7 - Video 1 --  1:14:00

// Fake Store API Product Task.
// Categories access zalya pahijet, onClick ty category che products disale pahijet, onClick individual product disala pahije.

// Step 1
// Category chya 1 time fetch sathi useState and useEffect with [].

// NavLink through render kelya aahet to show currently selected Category by Using styled Component for Styling. <Link> he styled component aahe, categories actually internally <NavLink> madhunach render honar aahet karan styled () la NavLInk pass kelel aahe.
// <Link> madhe to={} and end dilel aahe, end kashyasathi tar exact match sathi.

// Product.js madhe description sathi conditional rendering keli aahe.

// Written Notes page 10/11 ani Telegram/SavedMesasge/VoiceMessage-23/11/2022

// Flow
//1. ProductTask.js - Routing sathi
//2. Category.js - Accessing the categories and showing them.
//3. ProductList.js - Specific category and all product chya call sathi (yaatil /details he aapan aaplya convienence sathi ghetlel aahe)
//4. Product.js - To show all and Category products.
//5. ProductDetails.js - Individual Product sathi
//6. Header
//7. Checkout
//8. DisplayItem

// Chronology
// Categories.js madhe categoires paryantachi request takali ani te show kele. Category la link dili.
// ProductList.js madhe category word ne categori madhil product chi request takali ani all product chi request takali, ani te Product.js madhe show kele.
// Product.js madhe product id and name la link deun, ProductDetails.js madhe individual product show kela. Jyat individual product sathichi request keli.
// Header.js Ghetala jyat Product ani CartBadge clickable thevala.
// cartBadge var Checkout.js ahe ani Checkout.js madhun DisplayItem.js aahe.

//**// State Maintaining- Local/Application Level
// useReducer()
// Week7- video2

// State
// The state is a built-in React object that is used to contain data or information about the component.

// There are Two Types of states

//1. Local/component level state (state is used inside a single component), This state is maintained in class component by "state" property and in function component using "useState()" hook.
// The local state cant be directly accessed from another component but those can be shared with other components using "props" and "lifting state up". Sharing the state of one component with multiple components is not convenient.

//2. Application level state (used over many components) EX current logged in user. Maintained at Application level. Maintained using
//1. By using useReducer() and useContext() hooks.
//2. By using state container libraries like 'Redux'.

//  Application Level state without Redux
//**// Application level la state ka ghetaly tar karan, jar ekhadi state multiple thikani ghyayachi ahe ani multiple thikannan varun update karayachi ahe tar.

// useState() vs useReducer()

// Both the hooks are used to maintain the state
// useState() hook internally uses useReducer() to maintain the state
// useState() is preferred to maintain simple state
// useReducer() is preferred to maintain complex state
// useState() madhe logic he <button> la i.e tithech defined asat and in useReducer() logic he ekach thikani defined asat ani aapan action various thikanan varun ghet asto.

// NOTE
//**// Redux madhe mi reducer logic store la pass karto, jya mule store var state maintain keli jaate BUT here aapan reducer logic useReducer la pass karto aahot so state maintain useReducer() madhe keli jaate.

// Scenario
// customer che donach kam ek dish pahije ani dusar sangan ki konti dish pahije
// counter ch kam order ghyayachi ani chef la dyayachi.
// chef cha kam specific ahe ki order nusar dish banvayachi

// dish mhanje state ani customer mhanje UI. UI madhe aaplyala state pahije asate. UI state modify karat nahi (aadhi state madhe aapan changes karayacho ata tyasathi manus ahe i.e chef)

// Dispatch(counter) takes action(order about state update) from UI(customer) and pass it to the Reducer(chef).chef is Reducer to update the state as per order.
//**// Reducer needs two inputs current state and Action.

//**// UI is react component, Action is an object, Dispatch and Reducer are functions.

//**// NOTE Application level mhanje App component madhe karan tithe maintain keleli state aapan kuthe pan use karu shakato. State aapan store var maintain karto(w/o redux madhe ashya component madhe je App.js madhun render kelel asat) ani store cha access Index.js la dilela asto.

// Reducer
// It is a function takes two arguments state(i.e current/initial state) and action to calculate new state
//*// Performs immutable changes(returns new object) karan existing state ani change zaleli state vegali ahe he kalayala pahije.
// const reducer = (state,action)=>{}

// Ex
// const initialstate = { count: 0 };

// const reducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return initialstate;
//   }
// };

// Action
// It is an object. Has two properties, 'type'(tells which action to perform to calculate state ex increment,decrement) and 'payload'(data to be carried to perform operation)
// EX const incrementAction = {type : "increment"}

//**// action is like a event and reducer is like event listener, event aali ki kam karayach

// NOTE
// const obj = {a:"aa", b:"bb"}
// obj.c = "cc"; // mutable change
// aahe tyach object madhe change kela jato

// const onj2 = {...obj, c:"cc"}; // immutable change
// Navin object create karun tyat juna object copy kela jato ani mag tyat changes kele jatat.

// See WithoutRedux.js folder

// useReducer()
// The useReducer Hook is similar to the useState Hook.
// SYNTAX
// The useReducer Hook accepts two arguments.
// useReducer(<reducer>, <initialState>)

//*// The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
//*// The useReducer Hook returns the current state(i.e current state mhanje it cam be updatedSate or initiat state i.e ji state aahe ti return karto) and a dispatch method.

// Ex const [state, dispatch] = useReducer(reducer, initialstate);

// FLOW
// WithoutRedux madhe reducer function and useReducer() hook define kelay.
// createContext kela with CounterContext variable.
// CounterContext ne values provide kelya to <ParentComp />
// jya values useContext() ne consume kelya inside Component A, B and C.
// dispatch(i.e action) define keliye jithun ti perform honar aahe.

//**// Note: reducer, state, dispatch ashi ji naave aahet tithe aapan kontehi naav vapru shakato.

// WORKINg
// initialState define keleli aahe in object form
// <button> varun action ghetali jatey in dispatch function madhe, and dispatch provides it to reducer jyamule reducer function execute hotay ani new state bhetate aahe ji state(array created by useReducer() hook) madhe save hote aahe. Ani mg hi updated state through CounterContext, createContext and useContext sagalikade provide keli jaate aahe.
// values jya provide kelya aahet tya object form madhe dilya aahet through createContext ani consume kartana object destructuring madhe consume kelya aahet.
// useReducer() hook is used to maintain the state here. useReducer() ne state update keli ji createContext ani useContext() ne consume keli.

//**// dispatch() cha pravas UI Component to reducer aahe AND state cha pravas reducer to UI Component aahe.

//***// Redux
// redux.js.org
// week7- video3

// Redux is not a React specific library.
// Redux is a predictable state container for javascript application. Predictable mhanje state kay asel he mahiti asate i.e consistant behaviour karan state aapan change karat asto.

// includes methods like
// Working ScreenShot 117

//1. store
// it is an object which contains the state and reducers to update that state
// redux ch sagal kahi he store chya undera ch hotay.
// Khalache sagale store che part aahet.

//2. state
// the values/data(it can be object,array, number, boolean) to be maintained

//3. reducer
// it is a function which takes current state and action to calculate the new state
// reducer performs immutable updates
// reducer should not contain async. logic like timer, fetch API etc but it must calculate new state based on only current state and action.

//4. action
// it is an object having 'type' prperty which represents what action to be performed on the state
// it is optionaly contains 'payload' property to carry the data with action

// action creator
// it is a function returning the perticular action
// function la call kel ki return madhe action milate
// EX
// const increment = ()=>() // paranthisis ghetale tar return n lihita direct object return karu shakato
// const increment = (value = 1) =>( {type : "counter/increment", payload : value})

// const increment = ()=>{} // yaat return karav lagat
// const increment = (value = 1) =>{return {type : "counter/increment", payload : value}}
// domain/eventName
// counter => domain i.e kashyavar action perform karayachi ahe // helps in understanding and debugging
// value is by default value if no value is passed

//5. dispatch
// .dispatch() is a method of redux store which accepts an action, then store calls perticular reducer by passing the current state and received action.

//6. getState
// .getState() is a method of store which returns the state of the store (i.e value of the state).

//7. selector
// it is used to access the the part of the store state value. Here state madhun count kadhalay. state madhe barach kahi save karnar aahe so tyatil perticular part ghenyasathi/accesssathi selector vaprtat.
// const selectCount = state => state.count

//8. subscribe
// Whenever state modifies, we can get to know by this method. By subscribing to the store
// ekhadi gost perform zali ki ti aaplyala kalayala pahije tyasathi subscription ahe

//store.subscribe(()=>{})
// whenever there are changes in the state, the callback passed to the subscribe() method will get executed. (logic passed to the callback is such which needs to get executed after state update)

// NOTE
// Normal JS Application madhe redux vaparnyasathi
// installation sathi
// kontihi third party file installation sathi package.json file asan garjech aahe.
// then to create the file run npm init-y
// npm i redux

// LEARNINGS
// immutable changes in the reducer
// tyamule reducer madhun return kartana purn object return kela i.e new object banvala
// if(action.type === 'counter/increment'){ return {...state, count : state.count + 1}}
// if condition madhe return, kartana new object banvala ani to return kela.

// Redux with toolkit
// for Normal JS Application
// installation
// npm i @reduxjs/toolkit
// 1:26:00

// Concept
// aadhi single reducer madhe multiple actions handle karayacho
//**// ethe slice banvaychet. Store madhe ji state maintain keli aahe tyat various values/data asnar aahet. so pratyek value/data cha slice configure karayacha
// seperate reducer banvanya aaiwaji slice through banvayache.

// WORKING
// toolkit barobar slice banvava lagnar aahe.
// creatSlice({name : " ", initiailState : {count :0}, reducers:{actionName:tya action la handle karnara reducer}}) madhe object asnar jyat 3 value asnar. yatil name Domian chya gaji access ghenar

// toolkit madhe mutable(should not have return statement) and immutable(reqiures return statement) ase donhi update/changes karu shakato.
// toolkit madhil immer library handles the mutable updates(internally ti yala immutable banavate)

//***// Redux in React
// video- 3/11/2022

//**// Two things are important
// how to dispatch the action from React UI Component
// how to access the state from Redux Store on React UI Component

// React redux package for connectivity between Redux and React App/Component

//SetUp
// redux dependency // npm i redux @reduxjs/toolkit
// React Redux Connectivity // npm i react-redux

//**// createSlice, action creators, reducer, selector

// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { count: 0 },
//   reducers: {
//     increment: (state, action) => ({ count: state.count + action.payload }),
//     decrement: (state, action) => ({ count: state.count - action.payload }),
//     reset: (state, action) => ({ count: 0 }),
//   },
// });

// export const { increment, decrement, reset } = counterSlice.actions;

// export const selectCount = (state) => state?.counter?.count;

// export default counterSlice.reducer;

// NOTE
// Selector madhe state.counter.count aahe tyat counter je aahe,, te store varach reducer var aahe,,,  selector ch kam aahe state access karayachi, so state.counter madhun count access kelay for the state of a count.

//***// Setting store through toolkit

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./Slices/CounterSlice";

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export default store;

// WORKING
// slice banavali(import {createSlice})counter navane, tyat reducer logic dil aahe
// ti slice tyach navane store madhlya reducer madhe vaprali/save aahe(same name- Identification sathi).

// CONNECTIVITY
// connectivity jar top level chya component la jar provide keli tar state kuthe pan consume karata yet.
// Top level cha mhanje root component jo aahe tyala provide karayach i.e App component

// used in index.js
// import { Provider } from "react-redux";
// import reduxstore from "./ReduxApp/store";

// root.render(
//   <>
//     <Provider store={reduxstore}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </>
// );

// NOTE
// store export kelay redux madhun je reduxstore mhanun import kelay in index.js
// <Provider> madhe store hi prop use keli aahe to pass reduxstore.

// state Access on UI Component
// useSelector() hook vaprato ani tyala selector pass karto
// Accessing state from App into the child Components

// access sathi hook ahe useSelector(), selector ahe selectCount(defined in slice).
// useSelector(selectCount) => useSelector internally selectCount la call kartay ani tyala state pass kartoy, mag selectCount je slice madhe defined aahe to (state) ghetoy ani return kartroy count i.e value of count (const selectCount = (state) => state?.counter?.count; yaat (state) ji aahe ti selectCount la bhetati aahe useSelector kadun aani mag to ti use kartoy tyachya program madhe). ? => safe navigation i.e thodifar error aali tari to access karel

// Action dispatch from UI Component
// useDispatch() hook vaprto ani tyala action pass karto

//<button onClick ={()=> dispatch(increment(1))}
// onClick through action dyayachi aahe so, action aapan deto dispatch through ani dispatch he function ahe so call it dispatch(), dispatch madhe action dyaychi jo detoy actionCreator which is again a function so action is increment(), i.e action creator la call kela ki to action denar(jyat tya action ch logic defined aahe), aani action creator la aapan payload pass karu shakato so increment(payload)(payload mhanje state change sathi ji action aahe tyachi value kay asnar aahe.).

//**// dispatch madhun ji action dili jail tyavar reducer kam karnar ani tya action sathi kay karayach yaach logic reducer madhe lihilel aahe.

//**// createSlice madhe sagal logic defined aahe, je store var save aahe ani useSelector and useDispatch he Component madhe vaparale aahet.

//***// WORKING // Very Important
// I Guess
// count ya state sathi slice banvala counterSlice. Tya slice madhe count chi initial state aahe, ani ji action yeil tyavar kay karayach yaach logic reducer la dilel aahe. action creator vaparale aahet action ghenyasathi dispatch kadun. selector aahe selectCount navacha to access current state of the count.
// ha sarv slice and logic store la provide kelay counterReducer through. store varati various reducers astil of each slice
// store cha access App through components(X, Y,Z etc) la dila aahe.
// Components madhe aahe access and dispatch
// Component madhe action dispatch sathi useDispatch() hook vaprlay, dipatch madhun aapan actionCreator la call kartoy jyachya madhe action defined aahe. i.e increment() call kel tar increment action janar and so on.
// Ani updated state access sathi useSelector() hook vapral, jyat selector through state count chi state access keli.

//**// NOTE:  Without Redux madhe useReducer() through state maintain karayacho ani dispatch through reducer la action dyayacho ani createContext() ani UseContext() ne ti Component madhe consume karayacho.
// With Redux madhe, store ahe to maintain state and reducer logic,  state access ani action dispatch sathi Component madhe useSelector() and useDispatch() vaparale aahet.

//***// How to use Redux Developer Tool
// Add from chrome

// Left side la, ji action perform keli aahe ti disate

// Right side la

// Action
// Tree  // type(pin):"counter/increment" payload(pin):5
// chart
// Raw // action object //  { type: 'counter/increment', payload: 5 }

// State
// shows the current state in the store
// { counter: { count: 6 }

// Diff
// Tree count(pin):1 => 6
// Raw  { counter: { count: 1 : 6 } }

//**// Action despatch hoti aahe (nasel hot tar Button cha problem) ka ani state change hoti aahe ka(nasel hot tar reducer cha problem).
// Ashya prakare developer tool vaparane garjeche aahe.

// TASK 3
// 3/11 - 1:09:00
//***// Task rqeres.api varun users Aceess karayache je Redux Store var save karayache ani eka page var dakhaun tithe Edit-Delete button dakhavayache Jyavar click kel te Store var Edit -Delete zale pahije and not on API.

// /src/TASK 3

// UsersSlice.js  //  /src/ReduxApp/slices/UsersSlices

// initialState = [], karan api madhun array milnar aahe

// updateUser = , madhe arr madhe state aahe which holds userData from API ani action.payload ha object aahe jyat Update karnyacha data janar jyala destructure karun tyatun id ani updateData ghetala aahe.
// state madhala jo user update karachay to index madhe ghetala(by matching ids of updated and jyala update karayachay tyacha ), tya index chya basis var aaray madhun user/data kadhala.i.e const index ani const user ==> mule jyacha data update karaychay tyacha index number ghetla aahe ani tya indexNumber cha element user madhe ghetala aahe ani ...updateData tyala dila aahe.(u means array madhala data i.e state)  Ani mg splice method ne update kela ani update nantar whole array return kela.

// deleteUser madhe id chya basis var delete kela aahe. jyala delete karayachay tyacha id ghetla from action.payload ani state madhun .filter vaprun tya id cha sidun baki array return kela.

// Asynchronous data fetch sathi aahet thunk and middlewares.

// App folder madhe API call kela ani tithun action dispatch karun store madhil state la data pathavala aahe. dispatch sathi ji action deto aahe ti actionCreator madhun yete aahe.
// TASK3/UserList madhe to data/state access keli with useselector ani users la dili ti UserProfile madhe display keli.

// UserList madhe state madhun data fetch kelay aani UserProfile la dilay

// Flow
// UsersSlice madhe Reducers banavle
// Te store madhe access kele
// App folder madhe One time User fetch kele from reqres.api ani dispatch kele with the help of Thunk-Function-Creator to state maintained in reducer
// He users i.e state access keli on UserList with the help of selector ani UserProfile la dili.
// UserProfile var sagal(Yaacha Flow khali lihito) defined aahe.
// Ya saglyancha UserApp var access gheun to App through render kela.

// Flow of UserProfile
// Edit and Delete Button add kele
// Delete Button la sweetalert and action disptach keli jyat deleteUser(actionCreator) ani payload pathavala hach payload reducer madhe access kelela aahe.
// Edit button var Dialog ani dialog madhe Form ghetala.
// Form bharlela pahije yasathi useEffect ani tyatil values props destructuing madhun ghetlya.
// Form sathi flow Written Notes Page 11/12 var aahe
// Update Button var Action dispatch keli jyat updateUser(actionCreator) ani payload pathavala updated data i.e user jo useState through maintain kela hota. Hach payload reducer madhe access kelela aahe.

//**/*/ Note Edit var click kelyavar form bharlela ka distoy, karan tya form la user ya state madhun values yetayet ani user hi state automatic data access karati aahe due to useEffect() ani ha data store varun access kela aahe (using selector). Jenvha mi form madhe changes kartoy tenvha user update hotoy ani Update button click kelyavar ha updated user slice la jatoy. (Edit var click kel ki useEffect run hotoy ani user update hoto aahe). TASK 1 madhe Form bharlela disnyasathi, const [initialUser, serInitialUser] = useState(), hi state maintain keli hoti.

// Learnings from Revision
// Aapan logic sagal baher ghetalay i.e API call through Thunk and update, delete and state he slice madhe. UI varun aapan fakt action dispatch karto aahot with payload, where ever required.

//***//  4/11/2022
//  MiddleWare

// Analogy- Driving liscence through Agent karan 10 manas tich process independently kartayet tar vel ani paisa lagel. i.e 10 manas sarkhi process 10 vela kartayet tar Agent ekdach process karel ani 10 jannanchi kame hotil.
// Middlewares
//*// Perform common operations on actions after execution of dispatch() function i.e dispatch madhun action sutlyanantar. i.e customising the action
//*// Placed Inbetween Dispatch() ani Reducer function.

//**// USES
// logging // to see store madhil activites on console and application madhil problems check karnyasathi by seeing log file, error handle keli jaate
// crash reporting.
// talking to asynchronous api
// routing etc

//**// Redux Thunk
// It is a function
// Thunk mhanje code that dose delayed work i.e not now but later execute hoil i.e Async Operation.
//*// It is a function that interacts with Redux store's dispatch and getstate methods.
//*// Thunk function takes store related logic and it is used to take Logic out of UI component(Logic of actionCraetor, payload etc).

//  Aadhi aapan action dispatch sathiche logic useDispatch() through component madhech lihit hoto. Aata with the help of Middlewear aapan te logic component madhun baher kadhanar aani UI var thunk-function call karnar.
// MiddleWear cha code sync or async kasahi theu shakato. (TASK 3 madhe- App madhil get request hi Synchronous hoti ti Async karu shakato.)

// There are different MiddleWares like Thunk, Saga.

//***// 4/11/2022(Continued)

//**// Aadhi aapan fakt action(object) dispatch karayacho now function(holds the common logic) pan dispatch karnar aahot. So work of middleware is to check whether that action(came fron dispatch) is object or not, jar asel tar tasach reducer la pass karayach ani jar function(came fron dispatch) asel tar te execute karayach which dispatches action. And this middleware known as Thunk middleware. And that function is known as Thunk function.

// EX Jar various components madhun aapan same API call kartoay tar, Hi API call chi action aapan Thunk function madhe lihinar ani component madhun API call chya jagi he Thunk function dispatch karnar je thunk middleware execute karnar.

// ONE LINE
// Common actions through middleware known as Thunk middleware and logic of those common actions defined in the function known as thunk function.

// USE CASE of Thunk
// To make Asynchronous API call to server.

// Example
// TASK 3 / thunk-creator
// Thunk is a function which accepts two arguments : dispatch and getState.
// Here we can perform async and sync logic.

// Thunk Function and Thunk Function Creator(The function which returns thunk function).

// WHY thunk creator // forms closure
// To create parent and pass an argument if required. Which works like closure i.e can access parents variables.

//***// 4/11/2022 Continued -- 31:30

// TASK 2 continued CART banvalay.
// Previous TASK 2 On Week 7 - Video 1 --  From 1:14:00

// Route madhe element madhe <Navigate to = " " /> use kel for automatic loading(on PageRefresh) of All category cha data(aadhi to navhata)
// TASK2API Folder madhe axios cha instance create kela for serviceBase URL.
// Task2Services/ProductServices madhe static method banavali to call API. Yaat mi function banavalay, he function call kel ki API call honar. Jithe dynamic call ahe like id, category etc tithe to concatinate karun dilela aahe.
// src/ReduxApp/slice madhe ProductSlice banvala, to get the data on store. Yaat addProducts madhe {payload} ghetalay i.e action object destructure kelay (Task 3 madhe action.payload) ghetala hota. addproducts madhe ghetlet mhanje state madhe ghetlay. Slice store la add keli.
// Task2/thunk-action - Products fetch karnyasathi thunk crator banvala jyatun thunk function(anonymous aahe) return kel to fetch data asynchronously. ha Thunk-creator App.jsx varil useEffect madhun dipatch kela. Ya Api call nantar data store var maintain kelay ani tithun access karun display kelay.

//***// Evolution Bagha
// Aadhi API call ani state maintain he sarv UI Component varach hot hot.  // i.e Donhi tithech
// Nantar API call ani action disptach through actionCreator from UI Component ani state maintain store var keli jayachi  //i.e State baher
// Aata API URL cha instance banavala(TASK2API folder), API call(through Instance) pan Baherach(ProductService Folder), Store la data pathavanyasathi(i.e dispatch of actionCreator) Thunk-Creator-Function Ani At the end UI Component varun he Thunk-Creator-Function dispatch kelay. i.e API call ani state maintain donhi pan UI Component chya baher kadhale. Ani fakt Thunk-Creator-Function UI var thevale. // Doni baher

// 4/11/2022 Continued -- 1:17:30
// Cart specific Work

// cartSlice banavala
// Add to cart button var click kel ki action dispatch karayachi ani te product cart madhe add zale pahije.

// HeaderBar.js
// App bar ghetala from material to show cart's position. YAsathi HeaderBar.js component banvala. Cart madhil items access sathi ek selector banavala selectCartLength ani to access kela. i.e use of selector bagha, mala store varil state madhil ek gost pahije hoti ani tyach logic silce madhe hot so i.e state madhil perticular gost hawi hoti => selector vaprala.

// DevTool nusar action tar zali but cart madhe item add nahi zala => ki reducer logic madhe problem aahe.

//TASk 2- Product.js >> Add To Cart Button able-Disable banval. HOW? cart madhe item aahe ka te check kel through id, Tya sathi selector through cartItems access kele ani aapla id(dispatch honar) match karun to item aahe ka nahi te bagitala through findIndex. Asel tar isAdded true kelay which makes the Button disabled ani shows Added on it. [again bagha cartmadhil state pahayachi tar aapan selector banvalay]
// isAdded kam fakt Button varil naav ani able-disable karnyasathi aahe. Buton ch working kas aahe tar, Every rendering la isAdded run honar so te continuously cart la check karat rahil. Pahilya rendering la item madhe product nasnar so button-able, addToCart kelyanantar product asnar ani tyaveli isAdded run hoil ani item madhe product asnar so button-disabled.

//***// 5/11/2022

//*// Redux store he temporary aslyamule jar aapan page refresh kel tar store punha reset hot i.e sarv functionality nighun jaate. For permanant data storage we use Local Storage.
//*// Local storage var manually pan store karu shakato or Redux specific storage ahe for doing this i.e persiststore. Persist Storage takes data from Redux store and saves it on local storage.
// Inspect >> Application >> LocalStorage aahe tyat maintain karayach

// 5/11/2022 --  21:00
// Install Redux Persist from npm
// One time Configuration aahe.
// Toolkit madhil combineReducers method vaaprun aapan sagale reducers combine kele(he rootReducer madhe save kele) ani saglyanch milun ek reducer banaval i.e persistedReducer. Ha persistedReducer store la pass kela aahe. Store la middleware pass kelay for internal configure actions saathi.
// persistedReducer he reducers madhil changes local storage la jaun update karato.
// PersistGate ha index.js var ghetlay jo provider through dilay. PersistGate la persistor dilay jyat  store import kelay reduxstore navaane. persistStorage saathi cartSlice madhe kahi changes kele aahet.

// Checkout.js
// Cart Symbol var click kel ki cart madhil product list yayla pahije. Yasathi Checkout.js component banaval. Tyat 3 part cha Grid banavala Img, Details and Price cha.
// only selectCartItems ha selector nahi vaaparata yenar karan yaat fakt id ani quantity aahe baki product details nahit. SO for product details ProductSlice madhun selectProduct ha selector import kela.
// Cart madhe details dakhavnyasathi Navin array of objects banavala (const output) which is combination of cartItems and Products array.
// Checkout la Route kel from Cart Symbol

// DisplayItem.js component banvala to show products added in cart. Yaat ek dropdown ghetala jyavar handleQtyChange function run kel jyatun action dispatch keli to cartSlice jyat id and qty expected aahe. qty chi value event madhun ghetali.

// ProductTask.js madhe Catalog banaval karan Checkout pag var pan Categories disat hotya. Cart Icon shejari Product word(Header.js madhe) dila routing towords all products.
// Ata Route madhe donach component aahet Catalog ani Checkout i.e primaraly he donach component render hotil. i.e ektar he disel or te donhi eka veli nahi disnar. Ani Catalog component madhe <Category> component he varti aslyamule Joparyant Catalog component render hotoy tyat <Category> component kayamach render hot rahil.(Catalog component banvalach yasathi karan aadhi <Category> component saglya page var render hot hot.)

// Checkout.js madhe Sub Total add keli. Sub Total calculation sathi, subTotal function madhe, checkout madhe jo combined array banvala hota tyatun iterate kel ani to item word madhe ghetla jyatun price ani quantity kadhali ani total calculate keli. Ti subTotal object form madhe pricing la dili ani pricing.subTotal through access keli to  display. [array.reduce((total, cutterntVal) =>   , initialValue) method

// NOTE

//1. Aapan thunk, ProductServices etc madhe url sathi je function define kartoy ani tyat parameter detoy like id, category etc tar it implies ki 1) te dynamic aahet ani 2) UI component madhe thunk creator call kartana as an argument aapan te pass karnar aahot. (link/url kadhi all asel or kadhi category asel te <Link> madhe mention aahe. Thunk madhil category word ha all ani category donhi asnar aahe karan link hi/all or /category asnar aahe )
//2. action(actionCreator madhun) ani thunk creator donhi pan execution sathi dispatch karave lagtat.
//3. Aadhi Api call karun aalela data aapan usestate() through locally maintain karayacho but ata thunk vaigare vaprun to store var maintain karto aahe ani tithun access gheto aahot.
// App varun ani ProductList madhun, jo thunk-creator dispatch kelay tyachya through aapan API call kelay for All products ani Category specific products respectively.
// Stote or Slice related kahi operation asel about state tar selector ghyayacha, kitihi selectors gheu shakato(referance to cartLength selector)
// Aapan store la jo data pathavaly to kontya form madhe store aahe te aapan DevTool- State madhe pahu shakato.
// Mi store var data pathavatoy mhanje to state.reducerName madhe save hotoy. Slice madhe jar tya state/data cha access pahije asel tar state. ne gheta yeto.
//** Ata Route madhe donach component aahet Catalog ani Checkout i.e primaraly he donach component render hotil. i.e ektar he dissl or te, donhi ekach veli nahi disnar.
// {...pricing, subTotal: subTotal} => yaacha arth aahe 2nd element(subTotal: subTotal) will update the first element(...pricing).

//***// TASK - 1,2,3
// App.js
// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { loadUsers } from "./TASK 3/thunk-creator";
// import { loadProducts } from "../src/TASK 2/thunk-action";
// import WithoutRedux from "../src/WithoutRedux.js/WithoutRedux";
// import UserTask from "../src/TASK 1/UserTask";
// import ProductTask from "../src/TASK 2/ProductTask";
// import UserApp from "../src/TASK 3/UserApp";
// import CounterDemo from "../src/ReduxApp/counter-demo/CounterDemo.js";
// import axios from "axios";
// import { addUsers } from "./ReduxApp/Slices/UsersSlice";

// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     // axios.get("http://reqres.in/api/users").then((response) => {
//     //   dispatch(addUsers(response.data.data));
//     // });
//     dispatch(loadUsers());
//     dispatch(loadProducts());
//   }, []);

//   return (
//     <>
//       {/* <WithoutRedux /> */}
//       {/* <UserTask /> */}
//       {/* <UserApp /> */}
//       {/* <CounterDemo /> */}
//       <ProductTask />
//     </>
//   );
// };
// export default App;

// Index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import reduxStore from "../src/ReduxApp/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const persistor = persistStore(reduxStore);

// root.render(
//   <Provider store={reduxStore}>
//     <PersistGate loading={<div>loading...</div>} persistor={persistor}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </PersistGate>
//   </Provider>
// );

// PRACTICE
// Fetch, Axios, Redux and Tasks
// LEARNINGS

// Mi mazya component madhun je return karto te screen var disata, tya vyatirikt sagal return chya baher inside the Component lihayach je behind the scene chalnar.
// Fetch/GetRqe - Flow bagha
// 1. Aadhi JSX/Html i.e DOM var kay dakhavayachtay te design karnar. (button - onClick- getUsers)
// 2. Tya JSX/Html elements var click kelyavar kay zal pahije he logic define karayach. (getUsers madhe getRequest)
// 3. Request cha Response alyannatar to console karayacha, Ani tya nusar pudhachya steps ki array or object alay, ki, Response alaya ka, json file ali ki kay alay etc (i.e post martam of the response)
//4. Aalelya Response nusar Aapan state maintain karnar.
// 5. Aalela data(maintained in state), use/show karayacha as we want.
// OneLine - Aadhu design cha part nantar logic ani components banvayache.
