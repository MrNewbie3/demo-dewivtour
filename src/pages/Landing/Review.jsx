import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
const Review = () => {
  const data = [1, 2, 3];
  return (
    <section>
      <div className="header justify-between mt-16 mb-8 flex flex-row">
        <h1 className="font-semibold text-lg">Pilihan Travel</h1>
        <div className="nav-button flex flex-row gap-x-4">
          <button className="shadow-lg px-6 py-1 rounded-full text-textDisabled">
            <ArrowBackIosRoundedIcon />
          </button>
          <button className="bg-blueButton px-6 py-1 rounded-full text-white">
            <ArrowForwardIosRoundedIcon />
          </button>
        </div>
      </div>
      <div className="content-container flex flex-row gap-x-5 w-full">
        {data.map((res) => {
          return (
            <div className="card bg-base-100 shadow-xl w-full">
              <div className="card-body">
                <p className="text-sm font-semibold text-semiOrange">{res} Januari 2023</p>
                <h1 className="card-title">Nugroho Santosa</h1>
                <p className="text-textDisabled">Pelayanan nyaman tempat wisata lumayan bagus, bersih dan terawat. Penduduknya juga ramah</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
