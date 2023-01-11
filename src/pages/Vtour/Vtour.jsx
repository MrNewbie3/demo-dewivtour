import HomeLayout from "../../layouts/HomeLayout";
import Token from "./Token";
import Virtual from "./Virtual";

const Vtour = () => {
  return (
    <HomeLayout>
      <div className="px-16 flex flex-row gap-x-5  my-8 ">
        <Token />
        <Virtual />
      </div>
    </HomeLayout>
  );
};

export default Vtour;
