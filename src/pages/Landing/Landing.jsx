import HomeLayout from "../../layouts/HomeLayout";
import Landing_Comps from "./Landing_Comps";

const Landing = () => {
  return (
    <div className="wrapper">
      <HomeLayout>
        <Landing_Comps />
      </HomeLayout>
    </div>
  );
};
export default Landing;
