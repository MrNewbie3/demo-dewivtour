import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Toggler = () => {
  return (
    <Tabs>
      <div className="main-wrapper mx-28 my-16 py-3 px-6">
        <div className="toggler flex justify-center mb-12">
          <TabList className={"flex self-center justify-center my-3 rounded-full bg-buttonDisabled w-fit py-2 pr-2 items-center"}>
            <Tab selectedClassName="bg-[#3E5CB8] text-gray-50" className={"btn text-textDisabled bg-buttonDisabled hover:bg-blueButton hover:text-gray-50 border-none rounded-full px-6 font-semibold text-sm md:text-base mx-2"}>
              Masuk
            </Tab>
            <Tab
              selectedClassName="bg-[#3E5CB8] text-gray-50"
              className={"btn hover:bg-blueButton hover:text-gray-50 text-textDisabled bg-buttonDisabled active:bg-blueButton rounded-full border-none font-semibold text-sm md:text-base px-4"}
            >
              Daftar
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="content">
            <h1 className=" mb-3 text-base font-medium ">Email</h1>
            <input type="email" className=" w-full border-2 mb-6 border-white rounded-full outline-none bg-buttonDisabled text-textDisabled px-5 py-2  " placeholder="e.g. dewivtour@gmail.com" />
            <h1 className=" mb-3 text-base font-medium ">Kata Sandi</h1>
            <input type="password" className=" w-full border-2 mb-6 border-white rounded-full outline-none bg-buttonDisabled text-textDisabled px-5 py-2  " placeholder="e.g. aku123" />
            <button className="btn my-10 w-full font-semibold rounded-full px-8  text-white bg-blueButton border-none ">Daftar</button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="content">
            <h1 className=" mb-3 text-base font-medium ">Email</h1>
            <input type="email" className=" w-full border-2 mb-6 border-white rounded-full outline-none bg-buttonDisabled text-textDisabled px-5 py-2  " placeholder="e.g. dewivtour@gmail.com" />
            <h1 className=" mb-3 text-base font-medium ">Kata Sandi</h1>
            <input type="password" className=" w-full border-2 mb-6 border-white rounded-full outline-none bg-buttonDisabled text-textDisabled px-5 py-2  " placeholder="e.g. aku123" />
            <h1 className=" mb-3 text-base font-medium ">Ulangi Kata Sandi</h1>
            <input type="password" className=" w-full border-2 mb-6 border-white rounded-full outline-none bg-buttonDisabled text-textDisabled px-5 py-2  " placeholder="e.g. aku123" />
            <button className="btn my-7 w-full font-semibold rounded-full px-8  text-white bg-blueButton border-none ">Daftar</button>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Toggler;
