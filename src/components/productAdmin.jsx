import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const ProductAdmin = ({ product }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "grey", height: 480, boxShadow: 3 }}>
        <Box
          component="img"
          sx={{ height: 0.4, width: 1, objectFile: "cover" }}
          src={product.imageUrl}
          alt="Buffalo image"
        />
        <Stack
          sx={{ height: 0.6, px: 4, width: 0.75 }}
          justifyContent="space-around"
          spacing={2}
        >
          <Stack spacing={1} sx={{ width: 1 }}>
            <Typography fontSize={24}>{product.name}</Typography>
            <Typography fontSize={24}>{product.description}</Typography>
          </Stack>
          <Stack spacing={1} sx={{ width: 1 }}>
            <Typography fontSize={16}>Price</Typography>
            <Typography fontSize={24}>{product.price}</Typography>
          </Stack>
        </Stack>
      </Box>
      <Stack direction="row">
        <Button
          sx={{
            background: "purple",
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadius: 0,
            boxShadow: 3,
          }}
        >
          Edit
        </Button>
        <Button
          sx={{
            background: "pink",
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadius: 0,
            boxShadow: 3,
          }}
        >
          Delete
        </Button>
      </Stack>
    </>
  );
};

export default ProductAdmin;
