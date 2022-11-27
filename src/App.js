import { Fragment, useState } from "react";
import Navbar from "./components/navbar";
import AdminPage from "./pages/AdminPage";

function App() {
  //This is a hook
  const [isAdminVisible, setIsAdminVisible] = useState(false);

  return (
    <Fragment>
      {/* renders navbar.jsx from components */}
      <Navbar setAdminVisible={setIsAdminVisible} />

      {isAdminVisible && (
        // {/* renders AdminPage.jsx from components */}
        <AdminPage />
      )}

    </Fragment>
  );
}

export default App;
