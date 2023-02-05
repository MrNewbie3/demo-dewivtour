import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Controller, Mousewheel } from "swiper";
import { useCallback, useRef } from "react";

const Review = () => {
  const data = [1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7];
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <section>
      <div className="header justify-between mt-16 mb-8 flex flex-row">
        <h1 className="font-semibold text-lg">Pilihan Travel</h1>
        <div className="nav-button flex flex-row gap-x-4">
          <button className="shadow-lg px-6 py-1 rounded-full text-textDisabled  prev-arrow " onClick={handlePrev}>
            <ArrowBackIosRoundedIcon />
          </button>
          <button className="bg-blueButton px-6 py-1 rounded-full text-white next-arrow" onClick={handleNext}>
            <ArrowForwardIosRoundedIcon />
          </button>
        </div>
      </div>
      <Swiper modules={[Controller, Mousewheel]} mousewheel={true} spaceBetween={20} slidesPerView={3} ref={sliderRef}>
        {data.map((res) => {
          return (
            <SwiperSlide className="card bg-base-100 shadow-3xl my-8 w-full">
              <div className="card-body">
                <p className="text-sm font-semibold text-semiOrange">{res} Januari 2023</p>
                <h1 className="card-title">Nugroho Santosa</h1>
                <p className="text-textDisabled">Pelayanan nyaman tempat wisata lumayan bagus, bersih dan terawat. Penduduknya juga ramah</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Review;
