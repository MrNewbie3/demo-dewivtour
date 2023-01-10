import Content from "./Content";
import Tujuan from "./Tujuan";
import Gambaran from "./Gambaran";
import Gabung from "./Gabung";
import HomeLayout from "../../layouts/HomeLayout";

const HomePages = () => {
  return (
    <HomeLayout>
      <div className="wrapper max-w-7xl mx-auto">
        <Content />
        <Tujuan />
        <Gambaran />
        <Gabung />
      </div>
    </HomeLayout>
  );
};

export default HomePages;
