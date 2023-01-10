import Images1 from "../../assets/Ellipse_12.png";
import Images2 from "../../assets/Ellipse_13.png";
import Images3 from "../../assets/Ellipse_14.png";
import Images4 from "../../assets/Ellipse_16.png";
import ImageComp from "../../components/ui/ImageComp";

const ImagesHeader = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=" wrapper w-fit px-10 py-2 flex flex-row gap-x-10">
        <ImageComp caption="K. Heritage" images={Images1} news="Baru " />
        <ImageComp caption="K. Warna Warni" images={Images2} news="Baru " />
        <ImageComp caption="K. Keramik" images={Images3} />
        <ImageComp caption="K. Topeng" images={Images4} />
        <ImageComp caption="D. Pujon Kidul" images={Images3} />
      </div>
    </div>
  );
};

export default ImagesHeader;
