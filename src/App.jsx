import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Modal from "./components/modals/index";
import Theme from "./components/Theme";

function App() {
  const { name } = useSelector((state) => state.modal);
  return (
    <div>
      {name && <Modal />}
      <Theme />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
