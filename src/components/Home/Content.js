import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import AccessAlarmRounded from "@mui/icons-material/AccessAlarmRounded";
function Content() {
  return (
    <div className="">
      <div className="title my-12 text-center text-5xl font-bold capitalize ">
        <p className="">tengok budaya sekitar dengan</p>
        <p className="text-blueButton mt-7">Dewi Vtour</p>
      </div>
      <div className="image">
        <div className="content-img bg-home-pattern  bg-cover h-80 my-10 mx-36 rounded-full"> </div>
      </div>
      <div className="info-container mx-16 mb-16">
        <div className="wrapper shadow-3xl rounded-3xl lg:h-96 w-full px-14 py-6 box-border">
          <div className="wrapper-content flex flex-col justify-between h-full">
            <div className="top-button">
              <div className=" justify-center flex ">
                <div className="wrapper p-2 bg-buttonDisabled rounded-full ">
                  <button className="btn btn-active bg-blueButton border-none rounded-full px-10 font-semibold text-base">Tiket Masuk</button>
                  <button className="btn btn-disabled text-textDisabled bg-buttonDisabled rounded-full  border-none font-semibold text-base">Virtual Tour</button>
                </div>
              </div>
            </div>
            <div className="text-content my-7 lg:my-0 lg:flex lg:flex-row lg:justify-between flex flex-col gap-y-16">
              <div className="location flex flex-col gap-y-3">
                <div className="title flex flex-row gap-x-4 font-semibold text-xl items-center">
                  <PlaceOutlinedIcon className="text-blueButton" sx={{ fontSize: 32 }} />
                  <p>Lokasi</p>
                </div>
                <div className="text font-medium text-textDisabled">
                  <p>Pilih Lokasi Yang dikunjungi</p>
                </div>
              </div>

              <div className="people flex flex-col gap-y-3">
                <div className="title flex flex-row gap-x-4 font-semibold text-xl items-center">
                  <PersonOutlineRoundedIcon className="text-blueButton" sx={{ fontSize: 32 }} />
                  <p>Jumlah Pengunjung </p>
                </div>
                <div className="text font-medium text-textDisabled">
                  <p>Masukkan Jumlah Pengunjung</p>
                </div>
              </div>
              <div className="time flex flex-col gap-y-3">
                <div className="title flex flex-row gap-x-4 font-semibold text-xl items-center">
                  <AccessAlarmRounded className="text-blueButton" sx={{ fontSize: 32 }} />
                  <p>Waktu Berkunjung</p>
                </div>
                <div className="text font-medium text-textDisabled">
                  <p>Tentukan Waktu Kedatangan</p>
                </div>
              </div>
            </div>
            <div className="bottom-button flex justify-end">
              <button className="btn text-textDisabled btn-disabled bg-buttonDisabled rounded-full  border-none font-semibold text-base">Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
