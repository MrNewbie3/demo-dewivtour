import EastRoundedIcon from "@mui/icons-material/EastRounded";

function Gambaran() {
  return (
    <div className="mt-24 px-16 h-auto">
      <div className="title text-center">
        <p className="text-xl md:text-2xl font-medium tracking-widest mb-6">
          Galeri Desa
        </p>
        <p className="font-bold text-4xl md:text-5xl mb-20">
          Beberapa Gambaran Desa Wisata
        </p>
      </div>
      <div className="content flex flex-col lg:flex-row gap-x-28">
        <div className="w-3/4 md:w-1/2 mx-auto my-4">
          <img src="/images/group_image_18.png" alt="group images" />
        </div>
        <div className="description flex flex-col justify-center ">
          <p className="bg-blueMain mb-3 text-blueButton px-4 py-1 rounded-full text-center text-xs w-fit font-semibold ">
            Kampung warna warni
          </p>
          <h1 className="text-3xl mb-5  font-bold">Peresmian Jembatan </h1>
          <p className="leading-6 mb-9 whitespace-pre-line text-textDisabled">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.{" "}
          </p>
          <button className="text-semiOrange w-fit text-sm font-semibold rounded-full flex flex-row items-center gap-x-2 lowercase ">
            <p>kunjungi desa</p>
            <EastRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gambaran;
