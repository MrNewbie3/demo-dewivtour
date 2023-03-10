import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Virtual from "../Vtour/Virtual";
import Order from "./Order";
import Payment from "./Payment";
import Summary from "./Summary";

const Selector = () => {
  return (
    <div className="wrapper w-full flex justify-center mt-8">
      <Tabs className="w-full flex flex-col justify-center">
        <TabList className={"flex self-center justify-center my-3 rounded-full bg-buttonDisabled w-fit py-2 pr-2 items-center "}>
          <Tab selectedClassName="bg-[#3E5CB8] text-gray-50" className={"btn text-textDisabled bg-buttonDisabled hover:bg-blueButton hover:text-gray-50 border-none rounded-full px-6 font-semibold text-sm md:text-base mx-2"}>
            Tiket Masuk
          </Tab>
          <Tab selectedClassName="bg-[#3E5CB8] text-gray-50" className={"btn hover:bg-blueButton hover:text-gray-50 text-textDisabled bg-buttonDisabled active:bg-blueButton rounded-full border-none font-semibold text-sm md:text-base px-4"}>
            Pembayaran
          </Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-col items-center lg:flex-row">
            <Order />
            <Summary />
          </div>
        </TabPanel>
        <TabPanel className={"flex flex-col justify-center items-center lg:flex-row"}>
          <Payment />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Selector;
