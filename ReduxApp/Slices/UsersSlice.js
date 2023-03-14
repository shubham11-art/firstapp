import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUsers: (state, action) => {
      return [...action.payload];
    },
    updateUser: (state, action) => {
      const arr = [...state]; // to avoide mutable changes state array madhe ghetali
      const { id, updateData } = action.payload;
      const index = arr.findIndex((u) => u.id == id);
      // (u)=>u.id == id => Aalela id ani aaplya object madhala id ha match karun tya element cha index return kela jail.
      const user = { ...arr[index], ...updateData };
      arr.splice(index, 1, user);
      return arr;
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter((u) => u.id != id);
    },
  },
});

export const { addUsers, updateUser, deleteUser } = UsersSlice.actions;

export const selectUsers = (state) => state?.users;
export default UsersSlice.reducer;

// updateUser ch logic
// payload madhun aaplyala id ani updateData yeil. To id jar mazya state madhil id barobar match zala state madhil element/user cha index ghetala. const user madhe kay kelay tar state madhun i.e array madhun tya index cha element ghetala ani tyala ...updateData ne change kela So user became the updated data. Ani mag splice vaprun milalela index delete kela ani user(i.e updated data) tya jagi takala.
