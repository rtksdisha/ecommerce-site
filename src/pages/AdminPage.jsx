import { useState } from "react";
import { Fab } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import AddProductModal from "../modals/AddProductModal";
import ProductListAdmin from "../components/productListAdmin";
import { Container } from "@mui/system";
import EditProductModal from "../modals/EditProductModal";
// import { useEffect } from "react";

const AdminPage = ({ allProducts, setAllProducts }) => {
  const [isAddProductModalVisible, setIsAddProductVisible] = useState(false);
  const [isEditProductModalVisible, setIsEditProductModalVisible] =
    useState(false);
  const [editProduct, setEditProduct] = useState();

  const handleOnSubmit = (product) => {
    const tempProducts = Array.from(allProducts);
    if (product._id) {
      const productIndex = tempProducts.findIndex((p) => p._id === product._id);
      tempProducts[productIndex] = product;
    } else
      tempProducts.push({
        ...product,
        _id: tempProducts.length + 1, // Add an id when storing
      });
    setAllProducts(tempProducts);
  };

  const handleOnEdit = (product) => {
    setIsEditProductModalVisible(true);
    setEditProduct(product);
  };

  //   useEffect(() => {
  //     console.log(allProducts);
  //   }, [allProducts]);

  return (
    <Container maxWidth="lg" sx={{ margin: 2 }}>
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
      <ProductListAdmin products={allProducts} handleOnEdit={handleOnEdit} />
      <AddProductModal
        open={isAddProductModalVisible}
        onClose={() => setIsAddProductVisible(false)}
        onSubmit={handleOnSubmit}
      />
      <EditProductModal
        open={isEditProductModalVisible}
        onClose={() => setIsEditProductModalVisible(false)}
        onSubmit={handleOnSubmit}
        product={editProduct}
      ></EditProductModal>
    </Container>
  );
};

export default AdminPage;
