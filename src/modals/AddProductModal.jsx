import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ProductForm from "../forms/productForm";

const AddProductModal = ({ open, onClose, onSubmit }) => {
  return (
    //The pop up dialog that that shows to add a new product
    <Dialog open={open} onClose={onClose}>
      <DialogTitle> Enter a New Product</DialogTitle>
      <DialogContent>
        <ProductForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          form="product-form"
          type="submit"
          children="Add product"
          onClick={onClose}
        />
        <Button
          variant="outlined"
          form="product-form"
          type="reset"
          children="Clear"
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddProductModal;
