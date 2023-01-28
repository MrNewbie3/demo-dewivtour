const Gallery = () => {
  return (
    <section className="flex flex-row gap-x-5 items-center">
      <div className="left-img w-full ">
        <img src={require("../../assets/Gallery_Hero.png")} alt="" className="rounded-xl" />
      </div>
      <div className="images-assets w-full flex flex-col gap-y-5">
        <div className="top w-full flex flex-row gap-x-5">
          <figure>
            <img src={require("../../assets/Gallery_0.png")} alt="" className="rounded-2xl" />
          </figure>
          <figure>
            <img src={require("../../assets/Gallery_1.png")} alt="" className="rounded-2xl" />
          </figure>
        </div>
        <div className="bottom w-full flex flex-row gap-x-5">
          <figure>
            <img src={require("../../assets/Gallery_2.png")} alt="" className="rounded-2xl" />
          </figure>
          <figure>
            <img src={require("../../assets/Gallery_3.png")} alt="" className="rounded-2xl" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
