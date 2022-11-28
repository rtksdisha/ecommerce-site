import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ProductForm from "../forms/productForm";

const EditProductModal = ({ open, onClose, onSubmit, product }) => {
  return (
    //The pop up dialog that that shows to add a new product
    <Dialog open={open} onClose={onClose}>
      <DialogTitle> Editing the Product</DialogTitle>
      <DialogContent>
        <ProductForm defaultEditValues={product} onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          form="product-form"
          type="submit"
          children="Update product"
          onClick={onClose}
        />
        <Button
          variant="outlined"
          form="product-form"
          children="Cancel"
          onClick={onClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default EditProductModal
