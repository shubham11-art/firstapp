import {  render, screen } from "@testing-library/react";
import App from "./App";

// test("whether to do list is rendering", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/todo List/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test("renders list fruit items", () => {
//   render(<App />);
//   const listItems = screen.getAllByRole("listitem");
//   expect(listItems).toHaveLength(3);
//   // expect(listItems.length).toBe(3);
//   // expect(listItems.length).toEqual(3);
// });
// test("sum should be 10", () => {
//   const sum = screen.getByTitle("sum");
//   expect(sum.textContent).toBe("9");
// });
// test("tital is rendering", () => {
//   render(<App />);
//   const title = screen.getByTestId("schedule");
//   expect(title).toBeInTheDocument();
// });

// Check the Header Present
// test("header on app component", ()=>{
//   render (<App/>);
//   const data = screen.getByText("Testing the component");
//   expect(data).toBeInTheDocument();
// })

// Check the Child Component
// test("Login Rendered successfully", () => {
//   const component = render(<App />);
//   const isPresent = component.getByTestId("login-1");
//   expect(isPresent).toBeTruthy();
// });

// Test Suit
// describe("Test the Login Component", ()=>{

// test("render the login form with 2 buttons", ()=>{
// render (<Login/>);
// const buttonList = screen.getAllByRole("button");
// console.log(buttonList)
// expect(buttonList).toHaveLength(2); 
// })

// test("email input field should accept only email", ()=>{
// render (<Login/>);
// const email = getByPlaceholderText("Enter email");
// expect(email.value).toMatch(abcd@gmail.com);
// })

// })

// it is a test case

//***// Lama Dev
// test (" ") => description about whatever we want to do in this test
// render => render the component of which element we want to test
// screen. (object -- it represents whole document which we are rendering) and getBy... (is a query)=> Here we select specific HTML element which we want to test. We can select it by many ways like using getByText (je screen var distay), using getByRole (element which is a link) or using getByTest-Id (like class/id we can provide test-id to an element). getByText kel tar Regex vaprayach.
// expect(). (ethe aapan method lihito) => here we are our expectation ki varchya test barobar kay zal pahije.

// Ex
// Whether login forms has two buttons or not
// email, password feild madhe enter kelela data ha respectively email, password type(type = " ", input feild madhil key ) chach aahe ka. or placeholder chi value pass karun, email, password tyach placeholder madhe enter kela jatoy ki nahi te check karu shakato.
// tests like - rendering zalyavar data load hotoy ka, reset dablyavar feild reset hoti aahe ka, proceed to pay kelyavar payment page la redirect hotay ka.
