import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const Desc_Prices = () => {
  return (
    <div className="wrapper">
      <div className="badge text-xs font-semibold bg-blueMain text-blueButton border-none ">Desa Wisata</div>
      <section className="content flex flex-row justify-between">
        <div className="wrapper-abouts ">
          <div className="title my-5">
            <h1 className="font-bold text-3xl">Kampung Warna Warni</h1>
          </div>
          <div className="location flex flex-row items-center mt-3 mb-5 gap-x-3">
            <div className="icons bg-red-200 p-1 rounded-full text-red-600">
              <PlaceOutlinedIcon />
            </div>
            <div className="loc text-textDisabled underline">Jodipan, Blimbing</div>
          </div>
          <div className="abouts text-textDisabled">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur fugiat totam in, voluptas qui officia, temporibus dolor quisquam ab laudantium molestias nesciunt pariatur sed. Architecto odio modi laborum similique
            magnam!
          </div>
        </div>
        <div className="prices w-full flex items-center justify-end">
          <div className="prices">
            <div className="title text-xs font-medium ">Tiket Masuk</div>
            <div className="prices text-xl font-bold text-semiOrange">Rp. 7.000,-</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desc_Prices;
