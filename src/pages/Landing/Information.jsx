import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

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
            <div className="wrapper">
              <div className="badge text-xs font-semibold bg-blueMain text-blueButton border-none">Desa Wisata</div>
              <section className="content">
                <div className="title">
                  <h1 className="font-bold text-3xl">Kampung Warna Warni</h1>
                </div>
                <div className="location"></div>
                <div className="abouts"></div>
              </section>
            </div>
          </TabPanel>
          <TabPanel>
            <h1>Hellow</h1>
          </TabPanel>
          <TabPanel>
            <h1>Hellowwww</h1>
          </TabPanel>
          <TabPanel>
            <h1>Hellowwwwwwwwww</h1>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Information;
