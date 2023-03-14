import axios from "axios";
import React, { useEffect } from "react";

const Avatar = () => {
  useEffect(() => {
    axios
      .get(
        "https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

export default Avatar;
