import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="w-full bg-blueButton">
      <div className="px-16 pt-6 pb-4 max-w-7xl mx-auto h-fit ">
        <div className="socmed flex flex-col gap-y-8 md:flex-row gap-x-8">
          <p className="text-2xl text-white font-semibold">Hubungi Kami</p>
          <div className="logos flex flex-row gap-x-5">
            <a href="https://www.instagram.com/vragiotour/" target={"_blank"} rel="noreferrer">
              <InstagramIcon className="text-white" sx={{ fontSize: 24 }} />
            </a>
            <a href="https://wa.me/6285106655664" target={"_blank"} rel="noreferrer">
              <WhatsAppIcon className="text-white" sx={{ fontSize: 24 }} />
            </a>
            <TwitterIcon className="text-white" sx={{ fontSize: 24 }} />
          </div>
        </div>
        <div className="wrapper flex flex-col md:flex-row md:justify-between items-center md:items-end w-full  ">
          <div className="credits flex flex-row mt-11 gap-x-7 text-sm font-semibold text-white">
            <p>Kebijakan Privasi</p>
            <p>Dukungan</p>
          </div>
          <div className="copyright text-white font-medium text-sm">
            <p>&#169;vragio.{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
