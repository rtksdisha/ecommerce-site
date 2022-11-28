import { Fragment, useState } from "react";
import Navbar from "./components/navbar";
import AdminPage from "./pages/AdminPage";

function App() {
  //This is a hook
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [allProducts, setAllProducts] = useState([])
  
  return (
    <Fragment>
      {/* renders navbar.jsx from components */}
      <Navbar setAdminVisible={setIsAdminVisible} />

      {isAdminVisible && (
        // {/* renders AdminPage.jsx from components */}
        <AdminPage 
        allProducts = {allProducts}
        setAllProducts = {setAllProducts}
        />
      )}

    </Fragment>
  );
}

export default App;
