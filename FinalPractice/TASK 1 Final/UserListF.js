import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import APIF from "../Task1ApiF/APIF";
import endpointsF from "../Task1ApiF/endpointsF";
import AddEditF from "./AddEditF";
import UserContextF from "./UserContextF";
import AddEditUser from "../../TASK 1/AddEditUser";

const UserListF = () => {
  const [user, setUsers] = useState([]);
  const [openDialog, setopenDialog] = useState(false);
  const [operation, setOperation] = useState("");

  // editUser Function execute zalyavar jo singleUser alay to maintain karnyasathi initialUser ghetala aahe.Ka? karan hach user aaplyala update karayachay ani yachya id varun put request karachi aahe. Ya initialUser ne UserForm madhali state update keli so that this user(singleUser/initialUser) can be accessed there.

  const [initialUser, setInitialUser] = useState({
    name: "",
    mobile: "",
    age: "",
  });

  const addUsers = () => {
    setopenDialog(true);
    setOperation("add");
    // setInitialUser({});
  };
  const editUser = (singleUser) => {
    setopenDialog(true);
    setOperation("edit");
    setInitialUser({ ...initialUser, ...singleUser });
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        APIF.delete(`${endpointsF.api.user.delete}${id}`)
          .then((res) => {
            loadUsers();
            Swal.fire("Deleted!", "Your User has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(
              " Not Deleted!",
              "Your user has not been deleted.",
              "error"
            );
          });
      }
    });
  };

  const handleDailogClose = () => {
    setopenDialog(false);
  };

  const loadUsers = () => {
    APIF.get(endpointsF.api.user.fetchAll)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const columns = [
    {
      lable: "id",
      name: "id",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "name",
      name: "name",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "age",
      name: "age",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      lable: "mobile",
      name: "mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "EMAIL",
      name: "email",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "ACTION",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          // user ha main array aahe jyat sagale users aahet. tyatun apan singleUser access karto aahot on the basis of index. Ha index mhanje, aaplya table madhe various rows aahet so, jya Icon var click karu tya row cha index ethe access hoil. Tya index varun aapan purn ek object(i.e ek user deatails) acces karat aahot jo singleUser la assign kela aahe.
          const singleUser = user[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(singleUser)}>
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => deleteUser(singleUser.id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <section>
      <h2>User List</h2>

      <UserContextF.Provider
        value={{
          openDialog,
          handleDailogClose,
          loadUsers,
          operation,
          initialUser,
        }}
      >
        <AddEditF />
      </UserContextF.Provider>

      <Button variant="contained" onClick={addUsers}>
        New+
      </Button>

      <MUIDataTable title="User List" columns={columns} data={user} />
    </section>
  );
};

export default UserListF;
