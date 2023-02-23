import { redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HomeLayout from "../../layouts/HomeLayout";
import Selector from "./ButtonToggle";
import toast from "react-hot-toast";
const Ticket = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("loginInfo") === null) {
    toast.success("You Need To Login / Register First");
    setTimeout(() => {
      return navigate("/auth/signin");
    }, 2000);
  }
  return (
    <HomeLayout>
      <Selector />
    </HomeLayout>
  );
};
export default Ticket;
