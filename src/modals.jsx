import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const AddProductModal = ({ open, close }) => {
  return (
    //The pop up dialog that that shows to add a new product
    <Dialog open={open} onClose={close}>
      <DialogTitle> Enter a New Product</DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default AddProductModal;