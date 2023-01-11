import { Tab, TabList } from "react-tabs";
import HomeLayout from "../../layouts/HomeLayout";
import Selector from "./ButtonToggle";
import Order from "./Order";
import Summary from "./Summary";

const Ticket = () => {
  return (
    <HomeLayout>
      <Selector />
      <div className="flex flex-row">
        <Order />
        <Summary />
      </div>
    </HomeLayout>
  );
};
export default Ticket;
