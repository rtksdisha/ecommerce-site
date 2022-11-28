import { Fragment, useState } from "react";
import Navbar from "./components/navbar";
import AdminPage from "./pages/AdminPage";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";

function App() {
  //This is a hook
  const [allProducts, setAllProducts] = useState([]);

  return (
    <Fragment>
      {/* renders navbar.jsx from components */}
      <Navbar />
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminPage
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          }
        />
        <Route path="/" element={<Shop />} />
      </Routes>
    </Fragment>
  );
}

export default App;
