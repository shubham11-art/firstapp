import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import NightlightIcon from "@mui/icons-material/Nightlight";
import React from "react";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      {/* Varchya Box lach jar position dili asati tar ti absolute sarkhi behave zali asati ani page strucutre kharab zal asat so Navin Box banvala. To wrap all the listItems */}
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Person2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <NightlightIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
