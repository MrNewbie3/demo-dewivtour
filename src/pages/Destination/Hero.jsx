import mainImage from "../../assets/kampung-warna-warni_1.png";

const Hero = () => {
  return (
    <div className="wrapper w-full mt-8">
      <div className="caption text-center flex flex-col gap-y-2">
        <div className="title text-base font-normal text-textDisabled opacity-70">Baru</div>
        <div className="place font-semibold text-2xl">Kampung Warna Warni </div>
        <div className="tagline font-bold text-4xl capitalize">
          Pertama dengan cat <span className="text-blueButton">warna warni</span>
        </div>
      </div>
      <div className="image-wrapper ">
        <img src={mainImage} alt="hero_image" className="" />
      </div>
    </div>
  );
};

export default Hero;
