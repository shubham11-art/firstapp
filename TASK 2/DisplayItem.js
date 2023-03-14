import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { addProduct } from "../ReduxApp/Slices/CartSlice";

const DisplayItem = ({ id, image, title, qty, price }) => {
  const dispatch = useDispatch();
  const handleQtyChange = (e) => {
    const { value } = e.target;
    dispatch(addProduct({ id, qty: value }));
  };

  return (
    <Card sx={{ borderColor: "white", margin: "10px 0", padding: "5px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <img src={image} style={{ width: "100%", height: 150 }} />
        </Grid>
        <Grid item xs={12} md={7}>
          <h4>{title}</h4>

          <FormControl sx={{ width: "35%" }}>
            <InputLabel id="qty">Qty</InputLabel>
            <Select
              labelId="qty"
              value={qty}
              label="QTy"
              onChange={handleQtyChange}
            >
              <MenuItem value={0}>0 (delete) </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
          <h4>INR : {price}</h4>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DisplayItem;
