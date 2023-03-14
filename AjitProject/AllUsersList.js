import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import IconButton from "@mui/material/IconButton";

const AllUsersList = ({
  id,
  name,
  phone,
  email,
  username,
  website,
  company,
  address,
}) => {
  const Para = styled("p")({
    margin: 0.5,
    textAlign: "center",
  });

  const Image = styled(Box)({
    width: "100%",
    // height: 175,
    backgroundColor: "gray",
  });

  return (
    <Card
      sx={{
        width: 300,
        border: "1px solid red",
        m: 1,
        // p: 0.5,
        boxShadow: "1px 1px 1px 1px black",
        backgroundColor: "#ffcc22 ",
      }}
    >
      <Image>
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/{${username}}.svg?options[mood][]=happy`}
        />
      </Image>
      {/* <h3>
        {id} - {name}
      </h3>
      <Para>Username : {username}</Para> */}
      <Para>
        <IconButton>
          <EmailOutlinedIcon />
        </IconButton>
        {email}
      </Para>
      <Para>
        <IconButton>
          <PhoneEnabledOutlinedIcon />
        </IconButton>
        {phone}
      </Para>
      <Para>
        <IconButton>
          <LanguageOutlinedIcon />
        </IconButton>
        {website}
      </Para>
      {/* <Para>Company : {company.name}</Para>
      <Para>
        Address : {address.street}, {address.city}
      </Para> */}
    </Card>
  );
};

export default AllUsersList;
