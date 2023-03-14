import { React } from "react";
// import axios from "axios";
import Api from "../API/Api";
import endpoints from "../API/config.json";
import MUIDatatable from "mui-datatables";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import UserContext from "./UserContext";
import AddEditUser from "./AddEditUser";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const UserListServer = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setopenDialog] = useState(false);
  const [operation, setOperation] = useState("add");
  const [initialUser, setInitialUser] = useState({
    name: "",
    mobile: "",
    age: "",
  });

  const handleDialogClose = () => {
    setopenDialog(false);
  };

  const addUser = () => {
    setOperation("add");
    setopenDialog(true);
    setInitialUser("");
  };

  const editUser = (user) => {
    setOperation("edit");
    setopenDialog(true);
    setInitialUser(user);
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
        Api.delete(`${endpoints.api.user.delete}${id}`)

          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
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

  const loadUsers = () => {
    Api.get(endpoints.api.user.fetchAll)
      .then((response) => {
        setUsers(response.data);
      })
      .catch(console.error);
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
      lable: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      lable: "Age",
      name: "age",
      options: {
        sort: true,
        filter: true,
      },
    },
    {
      lable: "Mobile",
      name: "mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      lable: "Email",
      name: "email",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      lable: "Action",
      name: "ACTION",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(user.id)}>
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
      <UserContext.Provider
        value={{
          operation,
          openDialog,
          handleDialogClose,
          loadUsers,
          initialUser,
        }}
      >
        <AddEditUser />
      </UserContext.Provider>

      <Button variant="contained" color="primary" onClick={addUser}>
        NEW +
      </Button>

      <MUIDatatable title="User List" columns={columns} data={users} />
    </section>
  );
};
export default UserListServer;
