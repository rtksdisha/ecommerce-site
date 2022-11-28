import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, TextField } from "@mui/material";

const ProductForm = ({onSubmit}) => {
  //default for productFormSchema
  const defaultValues = {
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  };

  const productFormSchema = yup.object().shape({
    name: yup.string().required("Please enter a name"),
    description: yup.string(),
    price: yup.number().required().typeError("Please enter a price"),
    imageUrl: yup.string(),
  });

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: yupResolver(productFormSchema),
    mode: "all",
  });

  const imageUrlValue = watch("imageUrl");

  return (
    <Box
      id="product-form"
      component="form"
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: "24px" }}
    >
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
            name="imageUrl"
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
        {!!imageUrlValue && (
          <Grid item xs={12}>
            <Box
              sx={{ width: "100%" }}
              component="img"
              src={imageUrlValue}
            ></Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProductForm;
