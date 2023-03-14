// Project chya aadhi folder banvayach aani tyat react-install karayach.

// Material UI  to  MUI
//**// Installing MUI with emotion karan styled-component causes problems in SSR project.
// Link Roboto font family into HTML <head> tag and Roboto font family in <style> tag
// insatlling @mui-Icons

// NOTE
// Kahi use karayach asel tar direct jayach MUI site var ani dhaddhadit vachun kadhayach.

// STYLING
//**// Sathi default styling pekshya aapan ji inline styling karto with sx = {{ }} property ne ti preferable aahe.
// styled component ne ka style kartoy tar, it acts as wrapper to original component. Like we are outsourcing styling.

// EX
//1.  <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}  size="large" disabled href="#outlined-buttons"
// onClick={() => {
//   alert("clicked");
// }}>
//    Contained
//  </Button>;

// Inline CSS with sx property
//2.   <Button sx={{
//       backgroundColor: "red",
//       margin: 5,
//       "&:hover": {
//         backgroundColor: "black",
//       },
//     }}
//   >
//     Touch Me
//   </Button>

// Styling with styled method.
// import { styled } from "@mui/material";

//3. Coustom <Button> madhe aapan he theme vapru shakato.
// const CustomButton = styled(Button)({
//   backgroundColor: "red",
//   margin: 5,
//   "&:hover": {
//     backgroundColor: "black",
//   },
// });
//     <CustomButton>Touch Me</CustomButton>

// Mala jar same styling use karayachi aahe tar mi tyach component banau shakato i.e styled component. const CustomButton = styled(component/HTML element)({styling}).
// component/HTML element => internally ha component tayar honar tyavar dileli styling apply honar. He aapan <CustomButton> ya navane vaprnar.

//2. Typography
// Typography is a Material-UI component used to standardize the text and its related CSS properties without worrying about browser compatibility issues.
// Too many type sizes and styles at once can spoil any layout.
// <Typography variant="h1" component="p"> h1 Heading </Typography>;
// Tag <p> but styling <h1> chi apply honar.

//3. Themes
// We can create our own shapes, colors.
// palette object is where we are storing our colors.

//**// Theme kas aahe tar like partials or variables, i.e aapan ek file banvato jithe aapan defualt color vaigare save karun thevato aani mag te apply karnyasathi index.js var aapal App component tyat wrap karto.
// // import { ThemeProvider } from "@mui/material";
// import { theme } from "./MaterialUI.js/theme";
// <ThemeProvider theme={theme}>
//   <App />
// </ThemeProvider>
// ya theme component madhe define kelelya values aapan bakichya components madhe styling sathi vaprnar.
// EX primary == theme.palette.primary, secondary == theme.palette.secondary.main i.e jya properties mi direct ghyayacho tya theme component madhun access karun vaprayachya.

// Coustom <Button> madhe aapan he theme vapru shakato.
// const CustomButton = styled(Button)(({ theme }) => ({
//   backgroundColor: theme.palette.primary,
//   margin: 5,
//   "&:hover": {
//     backgroundColor: theme.palette.secondary,
//   },
// }));
//     <CustomButton>Touch Me</CustomButton>

// Project
// 17:00

// Layout
//***// Layout sathi aapan Flexbox Vaparato So any flex-box property use karu shakato. Yamulech aapan <Grid container> and <Grid item> banavat asto.

// <Box> is just like an <div>, used as wrapper
// <Container> has some default margin, padding etc.
// <Grid> it uses CSS Flex Model actually. We can create 2D Grid layout i.e different size rows and columns. Yaat aapan <Grid item xs ={} md ={}>, xs, md ya properties vaparato.
// xs = 1 to 12 i.e One Row madhe aapan 12 column banau shakato. Jevhade xs tevhadi jaga to dabba gheil. Ex 4,4,4 => 3 columns of same size.

//**// <Stack>, its a 1D i.e only one Column(Yaat mulitple Rows gheu shakato) or only one Row(Yaat mulitple Columns gheu shakato) by adding spacing or divider.
//Ex -  <Stack direction ="row" spacing={2}>

//***// Project madhe Sidebar, Feed etc chi width aapan percentage(%) ne pan set karu shakato but right way to do is flex property

//**// Responsive Design by using BreakPoints
// xs to xl
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
// We can customize our braekpoints by creating theme.
// Responsive design sathi, display property ani breakpoints cha khel aahe. breakpoints nusar display set karayacha.

// Steps Followed
//1. Components banvale like Sidebar, Feed etc
//2. Single row pahiji hoti mhanun <Stack> vaparal
//3. Mobile madhe ghenyasathi Sidebar and Rightbar udavale(display:"none") by using Breakpoints
//4. Navbar banvala. ==> //4.1 <Appbar><Toolbar>Content(Navbar madhala sagala content ethe yeil)<Toolbar/><Appbar/>
// Yananatr Toolbar chya aaiwaji styled component ghetla aahe, to apply required properties..
//4.2 Search Feild banaval, jyat <Inputbase> ghetala ani tyala wrap kela styled component ne to apply style.
//4.3 Icons ghetale, te 3 hote so tyana Box madhe wrap kel (vanila CSS madhe div madhe karto) ani styling apply karnyasathi styled component banvala Icon navacha.[ Icon(styling) ha Box(wrapper) aahe jyat Badge(content) wrap kele aahet.]
//4.4 Responsive sathi, kay kelay tar, small screenvar fakt Avtar ani naav dakhvayach so tyacha ek box ghetla. Icons madhe sm chya up asel tar display:"flex" nahitar "none" ani yachya exact ulat UserBox madhe thevalay.
//4.5  MENU // Dialog Box sarkh, state maintain karun menu open and close kela.
//5. Sidebar
// Lists component vaprala. Tyatil Button clickable banavale aahe.
//**// Sidebar, Feed, Rightbar yanna flex={1,4,2} dili aahe respectively. => This defined screen var tyanni 1,4,2 part chi jaga ghetali.
//6. Feed
// Card Component vaprla aahe. Tyat favouriteIcon clickabe pahije mhanun CheckedIcon ghetlay jyacha color red kelay.
// Post component banavala ani tyat Card takala.
// Sidebar ani Rightbar la position = "fixed" dili
//7. Rightbar
// Roboto font family madhe fontWeight 100, 200 add navahate so te add kele in index.html
// Roboto font family Universally Apply karnyasathi, index.html varach Style Tag madhe ti apply keli.
//7.1 Avatar Group component vaparala. Tyat max value chya pudhache Add chya sign ne dakhavale jatat.
//7.2 ImageList component vaprala jyat, property aahet like cols={}, ki aaplyala kiti column dakhavayache.
//7.3 Latest Conversations madhe MUI varun Lists madhun conversations che component ghetale.
// 8. Add.js File
//8.1 Tooltip Ghetali
//8.2 Fab Component ghetala ani tyachi position dili pahije tashi.
// Yapudhe kay kelay tar, Model gheun post add karnyasathi dialog box banavala aahe
//9. App.js
// Dark theme banavali ji prop through pathavali.

// NOTE
// Autocomplete Component vaprtana tyat List dyayacha option asto.
// Normal CSS jashi use karayacho tasach he aahe fakt use case thodishi different aahe.
// Ekach thikani onClick or onChange var jar state change pahije asel tar aapan useState(), Conditional rendering, useEffect() ya methods/functions vaprato.

//**// Mala mazi site responsive karayachi mhanje, maza content(item) responsive karayache aani kontya screenvar kasa pahije yasathi aapan breakpoints through values/propertirs deto.

// MUI Responsiveness
// With the help of Breakpoints
// Range
// xs - 0 to 600px
// sm - 601 to 900px
// md - 901 to 1200px
// lg - 1201 to 1535px
// xl - 1536px and above

// Spacing
// To control space between children, use the spacing prop. value = positive, decimal, string etc.
//**// 1 = 8px
// Grid container la spacing dili => apply to all Grid Items
// rowSpacing={} and columnSpacing={} => Applicable to rows and columns of the Grid.

//**// Aata aaplyala jo item, jya screenvar jasha pahije tashe breakpoints set karayache to CSS properties.
// EX
//1. widht : {
//     xs: 100, sm:200, md:300, lg:400, xl:500
// }
//2. sx={{ display: { xs: "none", sm: "block"}}}
//3. sx={{direction: {xs:"column", sm:"row"}}}

// MUI Grid
// Use to create 2D and Responsive Layouts.
// Two variation it has i.e Container and Item
// It uses Flexbox Model.
// Grid consists of 12 columns
// Each item can take up one or more columns as its width
// Breakpoints - xs(mobile), sm(tablet), md(desktop), lg & xl (large moniters)
// Aapan breakpoint values deun he indicate karu shakato ki available screen ji 12 columns madhe divided aahe, paiki kiti column ekhada item ghenar.
// 12 columns(mhanje full screen) are imaginary and only use to calculate the width of the item.

// NOTE
// Breakpoints(chya values) mhanje to item, tya screen la ani tyachya above screen la tevhadi jaga ghenar.
// Breakpoints(chya values) mhanje hya specified device ani tyavarti applicable astat. Ex sm ={3} => tablet ani tyavarti chya screen var to item 3 columns chi jaga ghenar ani xs la auto width ghenar.
// 12 => full screen/width.
// i.e Aapli screen mhanje 12 columns astat, aapan ji value xs to xl la deu thevadhi jaga to item ghenar.
// EX
// <Grid container>
// <Grid item xs={6}> Item 1 </Grid> // Item 1 ha screen xs and above screenvar astana 6 colmuns(i.e half screen) chi jaga ghenar.
// <Grid item md={8}> Item 2 </Grid> // Item 2 ha screen md and above screenvar astana 8 colmuns(i.e 66.66% screen) chi jaga ghenar.
// <Grid item xs={2}> Item 3 </Grid> // Item 3 ha screen xs and above screenvar astana 3 colmuns(i.e 25% screen) chi jaga ghenar.
// <Grid item sm={12}> Item 4 </Grid> // Item 4 ha screen sm and above screenvar astana 12 colmuns(i.e full screen) chi jaga ghenar.
// </Grid container>
// <Grid item xs={12} sm={8} md={6} lg={4} xl={2}> Item 5 </Grid> // Item 5 ha,  screen xs astana 12 columns(i.e full screen), screen sm astana 8 columns(i.e 66.66% screen), screen md astana 6 columns(i.e half screen), screen lg astana 4 columns(i.e 33.33% screen), screen xl astana 2 columns(i.e 16.16% screen) chi jaga ghenar.
//***// <Grid item sm={12}> Item 4 </Grid> // Item 4 ha screen sm and above screenvar astana 12 colmuns(i.e full screen) chi jaga ghenar ani xs var (ji specified nahi) tichyavar "auto" i.e Item width yevhadich jaga ghenar. [i.e mention nahi kel tar bydefault property auto asel, i guess]

// Jar perticular screen var saglya items na equal width/jaga dyayachi asel tar <Grid item> madhe only xs, sm, md etc mention karayach without assigning any value. xs,sm = "auto" => item chya size nusar space allote honar.

// Ex
//   <Grid container spacing={1}>
//         <Grid item xs={12} sm={3} md={6}>
//           <Box sx={{ bgcolor: "red" }}>Item 1</Box>
//         </Grid>
//         <Grid item xs={12} sm={3} md={6}>
//           <Box sx={{ bgcolor: "red" }}>Item 2</Box>
//         </Grid>
//         <Grid item sm={3} md={6}>
//           <Box sx={{ bgcolor: "red" }}>Item 3</Box>
//         </Grid>
//       </Grid>

// Asa format asel tar proper spacing vaigare apply hote.
