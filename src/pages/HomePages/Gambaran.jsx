import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Link } from "react-router-dom";
function Gambaran() {
  return (
    <div className="mt-24 px-16 h-auto">
      <div className="title text-center">
        <p className="text-xl md:text-2xl font-medium tracking-widest mb-6">Galeri Desa</p>
        <p className="font-bold text-4xl md:text-5xl mb-20">Beberapa Gambaran Desa Wisata</p>
      </div>
      <div className="content flex flex-col lg:flex-row gap-x-28">
        <div className="w-3/4 md:w-1/2 mx-auto my-4">
          <img src={require("../../assets/triple_img.jpg")} alt="group images" />
        </div>
        <div className="description flex flex-col justify-center md:w-1/2 w-full ">
          <p className="bg-blueMain mb-3 text-blueButton px-4 py-1 rounded-full text-center text-xs w-fit font-semibold ">Kampung warna warni</p>
          <h1 className="text-3xl mb-5  font-bold">Kampung Warna-warni Jodipan </h1>
          <p className="leading-6 mb-9 whitespace-pre-line text-textDisabled">
            adalah tempat wisata yang menjadi spot foto favorit di Kota Malang. Dengan rumah-rumah yang dicat warna-warni yang cerah dan cerita unik di setiap sudutnya, kampung warna-warni Jodipan menawarkan pengalaman yang berbeda dan
            menarik untuk Anda nikmati bersama teman dan keluarga. Jangan lewatkan kesempatan untuk mengunjungi destinasi wisata yang menarik di Kota Malang. Segera hubungi kami untuk informasi lebih lanjut dan rencanakan liburan Anda
            bersama kami. Terima kasih telah mempercayakan liburan Anda pada vragio.com. Tiket masuk : Rp. 5.000/pengunjung
          </p>
          <button className="text-semiOrange w-fit text-sm font-semibold rounded-full flex flex-row items-center gap-x-2 lowercase ">
            <p>
              <Link to={"/ticket"}>kunjungi desa</Link>
            </p>
            <EastRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gambaran;
