// NOTE
// App.jsx var MUILayout import karun App madhun return karayach.

// // Material Layout
//  import React from "react";
//  import Container from "@mui/material/Container";
//  import Box from "@mui/material/Box";
//  import Grid from "@mui/material/Grid";

//  const MUILayout = () => {
//    return (
//      <>
//        <h1>Material Layout</h1>
//        <Container>
//          <Box sx={{ backgroundColor: "red" }}>
//            <Box component="header">Head</Box>
//            <Box component="section">Section</Box>
//            <Box component="footer">Footer</Box>
//          </Box>
//        </Container>
//        <Container maxWidth={100}>
//          <Box sx={{ backgroundColor: "red" }}>
//            <Box component="header">Head</Box>
//            <Box component="section">Section</Box>
//            <Box component="footer">Footer</Box>
//          </Box>
//        </Container>
//        <hr />
//        <Container>
//          <Grid container spacing={1}>
//            <Grid item>
//              <Box sx={{ backgroundColor: "red" }}>Item 1 </Box>
//            </Grid>
//            <Grid item container>
//              <Box sx={{ backgroundColor: "green" }}>Item 2 </Box>
//              <Grid item> Nested item 4</Grid>
//              <Grid item> Nested item 5 </Grid>
//              <Grid item> Nested item 6</Grid>
//            </Grid>
//            <Grid item>
//              <Box sx={{ backgroundColor: "blue" }}>Item 3 </Box>
//            </Grid>
//          </Grid>
//        </Container>
//      </>
//    );
//  };
//  export default MUILayout;

// // Radio Buttons
// import React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

// const MUILayout = () => {
//   return (
//     <>
//       <FormControl>
//         <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//         <RadioGroup
//           column (default)/row
//           aria-labelledby="demo-radio-buttons-group-label"
//           defaultValue="female"
//           name="radio-buttons-group"
//         >
//           <FormControlLabel value="female" control={<Radio />} label="Female" />
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//           <FormControlLabel value="other" control={<Radio />} label="Other" />
//         </RadioGroup>
//       </FormControl>
//     </>
//   );
// };

// export default MUILayout;

// Dialog
// import React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// const MUILayout = () => {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending
//             anonymous location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default MUILayout;

//Material Icons
// import React from "react";
// import PersonSearchIcon from "@mui/icons-material/PersonSearch";
// import IconButton from "@mui/material/IconButton";
// import BikeScooterIcon from "@mui/icons-material/BikeScooter";
// import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
// import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineSharp";
// const MUILayout = () => {
//   return (
//     <>
//       <h1>Material Icons</h1>
//       <PersonSearchIcon />
//       <IconButton color="error">
//         <PersonSearchIcon />
//       </IconButton>
//       <BikeScooterIcon />
//       <IconButton>
//         <BikeScooterIcon />
//       </IconButton>
//       <IconButton>
//         <LibraryBooksSharpIcon />
//       </IconButton>
//       <IconButton color="primary">
//         <StarOutlineSharpIcon />
//       </IconButton>
//     </>
//   );
// };

// export default MUILayout;

// Styled Component
// import React from "react";
// import { styled } from "@mui/material/styles";

// // const Title = styled("h1")({
// //   backgroundColor: "cyan",
// //   color: "#fff",
// //   "&:hover": {
// //     backgroundColor: "blue",
// //   },
// // });
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
