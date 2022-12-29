import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Content from "./Content";
import Tujuan from "./Tujuan";
import Gambaran from "./Gambaran";
import Gabung from "./Gabung";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Tujuan />
      <Gambaran />
      <Gabung />
      <Footer />
    </div>
  );
};

export default HomePages;
