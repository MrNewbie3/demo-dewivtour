import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import AccessAlarmRounded from "@mui/icons-material/AccessAlarmRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
const Order = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="text-content my-9 mb-14 gap-y-6 flex flex-col w-fit ">
        <div className="location flex flex-row items-center gap-x-8 my-3">
          <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
            <PlaceOutlinedIcon className="text-blueButton" sx={{ fontSize: 32 }} />
          </div>
          <div className="text font-medium text-textDisabled text-sm sm:text-base">
            <p>Pilih Lokasi Yang dikunjungi</p>
          </div>
        </div>

        <div className="time flex flex-row items-center gap-x-8 my-3">
          <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
            <AccessAlarmRounded className="text-blueButton" sx={{ fontSize: 32 }} />
          </div>
          <div className="text font-medium text-textDisabled text-sm sm:text-base">
            <p>Tentukan Waktu Kedatangan</p>
          </div>
        </div>
        <div className="people flex flex-row items-center gap-x-8 my-3">
          <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
            <PersonOutlineRoundedIcon className="text-blueButton" sx={{ fontSize: 32 }} />
          </div>
          <div className="text font-medium text-textDisabled text-sm sm:text-base">
            <p>Masukkan Jumlah Pengunjung</p>
          </div>
        </div>
        <div className="button w-fit flex flex-row gap-x-8 my-8">
          <button disabled className="btn rounded-full px-8 text-blueButton outline-2 outline bg-transparent border-none mx-2 flex flex-row gap-x-2 items-center">
            {" "}
            <span>
              <DeleteOutlineRoundedIcon fontSize="medium" />{" "}
            </span>{" "}
            <p>Bersihkan</p>
          </button>
          <button disabled className="btn rounded-full px-8 px bg-blueButton border-none mx-2">
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
