import { useState } from "react";
import { Box, Fab } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import AddProductModal from "../modals/AddProductModal";
// import { useEffect } from "react";

const AdminPage = ({ allProducts, setAllProducts }) => {
  const [isAddProductModalVisible, setIsAddProductVisible] = useState(false);

  const handleOnSubmit = (product) => {
    const tempProducts = Array.from(allProducts);
    tempProducts.push({
      ...product,
      _id: tempProducts.length + 1, // Add an id when storing
    });
    setAllProducts(tempProducts);
  };

  //   useEffect(() => {
  //     console.log(allProducts);
  //   }, [allProducts]);

  return (
    <Box>
      <Fab
        variant="extended"
        onClick={() => setIsAddProductVisible(true)}
        sx={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
        }}
      >
        <AddCircleOutline sx={{ mr: 1 }} />
        Add a new product
      </Fab>
      {/* <Typography>{allProducts[1]?.name}</Typography> */}
      <AddProductModal
        open={isAddProductModalVisible}
        onClose={() => setIsAddProductVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </Box>
  );
};

export default AdminPage;
