import React from "react";
import { Grid } from "@mui/material";
import ProductAdmin from "./productAdmin";

const ProductList = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={12} sm={6} md={4}>
        <ProductAdmin />
       
      </Grid>
    </Grid>
  );
};

export default ProductList;
