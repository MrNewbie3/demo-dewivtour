import HomeLayout from "../../layouts/HomeLayout";
import Content from "./Content";
import Hero from "./Hero";
import ImagesHeader from "./ImagesHeader";
import Information from "./Information";

const Destination = () => {
  return (
    <>
      <HomeLayout>
        <ImagesHeader />
        <Hero />
        <Content />
        <Information />
      </HomeLayout>
    </>
  );
};

export default Destination;
