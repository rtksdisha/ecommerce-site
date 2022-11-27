import { Box, Fab } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import AddProductModal from "../modals";

const AdminPage = () => {
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);

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
        Add New Product
      </Fab>
      <AddProductModal
        open={isAddProductVisible}
        close={() => setIsAddProductVisible(false)}
      />
    </Box>
  );
};

export default AdminPage;
