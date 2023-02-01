import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import AccessAlarmRounded from "@mui/icons-material/AccessAlarmRounded";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function Content() {
  return (
    <>
      <div className="title my-12 text-center text-3xl md:text-5xl font-bold capitalize mx-5">
        <p className="">tengok budaya sekitar dengan</p>
        <p className="text-blueButton mt-3 md:mt-7">Dewi Vtour</p>
      </div>
      <div className="image mx-8">
        <img src="/images/title_image.png" alt="Homepattern" className="my-10 rounded-full w-full h-40 md:h-full" />
      </div>
      <div className="info-content my-16">
        <Tabs focusTabOnClick={false} className={"shadow-3xl rounded-3xl lg:h-96 max-w-6xl px-14 py-6  box-border mx-6 md:mx-10 lg:mx-12 xl:mx-auto"}>
          <TabList className={"flex justify-center my-3 rounded-full items-center"}>
            <Tab selectedClassName="bg-[#3E5CB8] text-[#ffffff]" className={"btn text-textDisabled bg-buttonDisabled hover:bg-blueButton hover:text-gray-50 border-none rounded-full px-6 font-semibold text-sm md:text-base mx-2"}>
              Tiket Masuk
            </Tab>
            <Tab
              selectedClassName="bg-[#3E5CB8] text-[#ffffff]"
              className={"btn hover:bg-blueButton hover:text-gray-50 text-textDisabled bg-buttonDisabled active:bg-blueButton rounded-full border-none font-semibold text-sm md:text-base px-4"}
            >
              Virtual Tour
            </Tab>
          </TabList>
          <TabPanel className={"mt-10"}>
            <div className="text-content my-7 lg:my-0 md:flex md:flex-row md:justify-between md:items-center flex flex-col">
              <div className="location flex flex-col gap-y-2 my-3">
                <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
                  <PlaceOutlinedIcon className="text-blueButton" sx={{ fontSize: 32 }} />
                  <p>Lokasi</p>
                </div>
                <div className="text font-medium text-textDisabled text-sm sm:text-base">
                  <p>Pilih Lokasi Yang dikunjungi</p>
                </div>
              </div>

              <div className="people flex flex-col gap-y-2 my-3">
                <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
                  <PersonOutlineRoundedIcon className="text-blueButton" sx={{ fontSize: 32 }} />
                  <p>Jumlah Pengunjung </p>
                </div>
                <div className="text font-medium text-textDisabled text-sm sm:text-base">
                  <p>Masukkan Jumlah Pengunjung</p>
                </div>
              </div>
              <div className="time flex flex-col gap-y-2 my-3">
                <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
                  <AccessAlarmRounded className="text-blueButton" sx={{ fontSize: 32 }} />
                  <p>Waktu Berkunjung</p>
                </div>
                <div className="text font-medium text-textDisabled text-sm sm:text-base">
                  <p>Tentukan Waktu Kedatangan</p>
                </div>
              </div>
            </div>
            <div className="bottom-button flex justify-center sm:justify-end mt-24 ">
              <button disabled className="btn rounded-full border-none font-semibold text-base">
                Pesan Sekarang
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media released by Nintendo. Created by
              prominent game designer Shigeru Miyamoto, Luigi is portrayed as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and appears in many games throughout the Mario franchise, often as a sidekick
              to his brother.
            </p>
            <p>
              Source:{" "}
              <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default Content;
