import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({setAdminVisible}) => {
  return (
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar>
          {/* standardize text */}
          <Typography
            varient="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "arial",
              fontWeight: 700,
              letterSpacing: "0.3rem",
              textDecoration: "none",
              display: { xs: "none", md: "flex" },
              color: "inherit",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
            >
              <MenuIcon></MenuIcon>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button onClick={() => setAdminVisible(true)} sx={{ my: 2, color: "white", display: "block" }}>
              Admin
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Shop
            </Button>
          </Box>
          <Box sx={{ flexgrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <ShoppingCartIcon sx={{ color: "white" }}></ShoppingCartIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
