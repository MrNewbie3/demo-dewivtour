import Content from "./Content";
import Tujuan from "./Tujuan";
import Gambaran from "./Gambaran";
import Gabung from "./Gabung";
import HomeLayout from "../../layouts/HomeLayout";

const HomePages = () => {
  return (
    <HomeLayout>
      <Content />
      <Tujuan />
      <Gambaran />
      <Gabung />
    </HomeLayout>
  );
};

export default HomePages;
