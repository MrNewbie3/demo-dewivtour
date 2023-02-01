import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Desc_Prices from "./Desc_Prices";
import FAQ from "./FAQ";
import Location from "./Location";
import Review from "./Review";
import Travel from "./Travel";

const Information = () => {
  return (
    <section className="">
      <div className="tabbing">
        <Tabs>
          <TabList className={"flex flex-row gap-x-8 font-medium text-textDisabled mb-14"}>
            <Tab selectedClassName="text-blueButton underline" className={"hover:cursor-pointer  focus:outline-none"}>
              Informasi
            </Tab>
            <Tab selectedClassName="text-blueButton underline" className={"hover:cursor-pointer  focus:outline-none"}>
              Review
            </Tab>
            <Tab selectedClassName="text-blueButton underline" className={"hover:cursor-pointer  focus:outline-none"}>
              Lokasi
            </Tab>
            <Tab selectedClassName="text-blueButton underline" className={"hover:cursor-pointer  focus:outline-none"}>
              FAQ
            </Tab>
          </TabList>
          <TabPanel>
            <Desc_Prices />
            <Travel />
            <Review />
            <Location />
            <FAQ />
          </TabPanel>
          <TabPanel>
            <Review />
          </TabPanel>
          <TabPanel>
            <Location />
          </TabPanel>
          <TabPanel>
            <FAQ />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Information;
