import React from "react";

const ProfileF = ({ id, email, first_name, avatar }) => {
  return (
    <div
      style={{
        margin: "12px",
        padding: "12px",
        border: "1px solid black",
        width: "18%",
        backgroundColor: "gray",
        textAlign: "center",
      }}
    >
      <img src={avatar} style={{ margin: "10px auto" }} />
      <h4>
        {id}- {first_name}
      </h4>
      <p>Email : {email}</p>
    </div>
  );
};

// const ProfileF = (props) => {
//   return (
//     <div style={{}}>
//       <img src={props.avatar} />
//       <h4>
//         {props.id}- {props.fName}
//       </h4>
//       <p>Email : {props.email}</p>
//     </div>
//   );
// };

export default ProfileF;
