import axios from "axios";
import { addUsers } from "../ReduxApp/Slices/UsersSlice";

// Thunk Function
// const getUsers = (dispatch, getState) => {
//   axios.get("https://reqres.in/api/users").then((response) => {
//     dispatch(addUsers(response.data.data));
//   });
// };
// export default getUsers;

// Thunk Function creator // as a normal function
export function loadUsers() {
  return (dispatch, getState) => {
    axios.get("https://reqres.in/api/users").then((response) => {
      dispatch(addUsers(response.data.data));
    });
  };
}

// Thunk Function creator // as a FatArrow function

// export const loadUsers = (category) => (dispatch, getState) => {
//   axios.get("https://reqres.in/api/users").then((res) => {
//     dispatch(addUsers(res.data));
//   });
// };

// Thunk Function is returned from the thunk function crator
// Thunk Creator function is used to pass parameter to thunk function if required.

// Thunk function is like a normal function from which we make API call but only differenece is, it takes dispatch and getState as an argument. Kashyala? tar to dispatch an action to the slice (to maintain the state the on the store). Normal function madhe aapan useState() madhe state maintain karto so no nedd to dispatch an action.
