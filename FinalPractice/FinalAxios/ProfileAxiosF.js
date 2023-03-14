import React from "react";
import { Link } from "react-router-dom";

const ProfileAxiosF = ({ id, email, last_name, avatar }) => {
  return (
    <>
      {/* value " " madhe ka nahi karan number aahe nahitar style should be in key value pair */}
      <div
        style={{
          width: 200,
          padding: 5,
          margin: 3,
          boxShadow: "0 0 2 1 #8888",
        }}
      >
        <img src={avatar} alt="Avatar" style={{ width: "100%", height: 200 }} />
        <h4>
          <Link to={`/${id}`}>
            {id} - {last_name}
          </Link>
        </h4>
        <p>Email : {email}</p>
      </div>
    </>
  );
};

export default ProfileAxiosF;

// Styling kashi aahe bagha
// 6 profiles aahet tyanna common styling sathi div la style apply keli aahe.
// aani img sathi fakt img tag la aaply keli aahe.
// He 6 profiles, ProfileAxiosF folder mule ek-ek distayet sagale ekattha .map() mule aahet so saglyancha display set karnyasathi .map() la styling aaply keli.
