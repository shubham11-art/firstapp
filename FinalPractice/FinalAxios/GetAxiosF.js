import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ProfileAxiosF from "./ProfileAxiosF";

const GetAxiosF = () => {
  const [users, setUsers] = useState();

  const axiosUsers = (page) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        console.log(res.data.data);
        setUsers(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   axiosUsers();
  // }, []);

  return (
    <>
      <h3>Get Users By Axios Call</h3>
      {/* <button onClick={axiosUsers}>Get Users</button> */}

      {/* payload pathvayacha asel tar callback detat i.e action dispatch kartana argument pass keli ani parameter mhanun consume keli varti*/}

      <button onClick={() => axiosUsers(1)}>Users of Page 1</button>
      <button onClick={() => axiosUsers(2)}>Users of Page 2</button>
      {/* ha screen var distoy ani to kasa disayala pahije yasathi style apply keli aahe */}
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((user) => <ProfileAxiosF key={user.id} {...user} />)}
      </section>
    </>
  );
};

export default GetAxiosF;
