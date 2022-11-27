import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, TextField } from "@mui/material";

const ProductForm = () => {
  //default for productFormSchema
  const defaultValues = {
    name: "",
    description: "",
    price: 0,
    imageURL: "",
  };

  const productFormSchema = yup.object().shape({
    name: yup.string().required("Please enter a name"),
    description: yup.string(),
    price: yup.number().required().typeError("Please enter a price"),
    imageURL: yup.string(),
  });

  const { control } = useForm({
    defaultValues,
    resolver: yupResolver(productFormSchema),
    mode: "all",
  });

  return (
    <Box id="product" component="form" sx={{ padding: "24px" }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <Controller
            control={control}
            name="description"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <Controller
            control={control}
            name="price"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Price"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <Controller
            control={control}
            name='imageURL'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Image URL"
                variant="standard"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductForm;
