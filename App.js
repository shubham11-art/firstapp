import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsers } from "./TASK 3/thunk-creator";
import { loadProducts } from "../src/TASK 2/thunk-action";
import WithoutRedux from "../src/WithoutRedux.js/WithoutRedux";
import UserTask from "../src/TASK 1/UserTask";
import ProductTask from "../src/TASK 2/ProductTask";
import UserApp from "../src/TASK 3/UserApp";
import CounterDemo from "../src/ReduxApp/counter-demo/CounterDemo.js";
import axios from "axios";
import { addUsers } from "./ReduxApp/Slices/UsersSlice";
import UserList from "./Axios/UserList";
import GetRqe from "./Fetch Api/GetRqe";
import GetReqF from "./FinalPractice/FinalFetch/GetReqF";
import GetAxiosF from "./FinalPractice/FinalAxios/GetAxiosF";
import GetDemo from "./Axios/GetDemo";
import GetDemoF from "./FinalPractice/FinalAxios/GetDemoF";
import UserTaskF from "./FinalPractice/TASK 1 Final/UserTaskF";
import AjitUsers from "./AjitProject/AjitUsers";
import Main from "./NewProject/Main";
import ChildData from "./ChildData";
import USeMemo from "./USeMemo";

const App = () => {
  const dispatch = useDispatch();

  // const sum = (surName) => {
  //   console.log(surName);
  // };

  useEffect(() => {
    // axios.get("http://reqres.in/api/users").then((response) => {
    //   dispatch(addUsers(response.data.data));
    // });
    dispatch(loadUsers()); // thunk - creator
    dispatch(loadProducts()); // thunk-action
  }, []);

  return (
    <>
      {/* <WithoutRedux /> */}
      <UserTask />
      {/* <UserApp /> */}
      {/* <CounterDemo /> */}
      {/* <ProductTask /> */}
      {/* UserList jar dakhavali tar GetDemo madhil routing kaam karat nahiye so GetDemo dakhavayachi  */}
      {/* <GetDemo /> */}
      {/* <GetRqe /> */}
      {/* <GetReqF /> */}
      {/* <GetAxiosF /> */}
      {/* <GetDemoF /> */}
      {/* <UserTaskF /> */}
      {/* <AjitUsers /> */}
      {/* <Main /> */}
      {/* <ChildData name={sum} /> */}
      {/* <USeMemo /> */}
    </>
  );
};
export default App;

// // // MUI Project

// import { Box, Grid, Stack } from "@mui/material";
// import React from "react";
// import Add from "./MaterialUI.js/Components/Add";
// import Feed from "./MaterialUI.js/Components/Feed";
// import Navbar from "./MaterialUI.js/Components/Navbar";
// import Rightbar from "./MaterialUI.js/Components/Rightbar";
// import Sidebar from "./MaterialUI.js/Components/Sidebar";

// const App = () => {
//   return (
//     <Box>
//       <Navbar />
//       <Stack direction="row" spacing={2} justifyContent="space-between">
//         <Sidebar />
//         <Feed />
//         <Rightbar />
//       </Stack>
//       <Stack>
//         <Add />
//       </Stack>
//       {/* <Grid container spacing={1}>
//         <Grid item xs={12} sm={3} md={6}>
//           <Box sx={{ bgcolor: "red" }}>Item 1</Box>
//         </Grid>
//         <Grid item xs={12} sm={3} md={6}>
//           <Box sx={{ bgcolor: "red" }}>Item 2</Box>
//         </Grid>
//         <Grid item sm={3} md={6}>
//           <Box sx={{ bgcolor: "red" }}>Item 3</Box>
//         </Grid>
//       </Grid> */}
//     </Box>
//   );
// };

// export default App;

// // Stack => Single row madhe 3 column ghetalet so Stack.
