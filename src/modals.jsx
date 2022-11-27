import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import ProductForm from "./forms/productForm";

const AddProductModal = ({ open, close }) => {
  return (
    //The pop up dialog that that shows to add a new product
    <Dialog open={open} onClose={close}>
      <DialogTitle> Enter a New Product</DialogTitle>
      <DialogContent>
        <ProductForm/>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
