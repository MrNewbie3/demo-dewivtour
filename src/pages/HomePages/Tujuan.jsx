import TextComp from "../../components/ui/TextComp";

function Tujuan() {
  return (
    <div className="mt-14 px-16 h-auto">
      <div className="title text-center">
        <p className="text-xl md:text-2xl font-medium tracking-widest mb-6">Tujuan Kami</p>
        <p className="font-bold text-3xl md:text-5xl mb-20">Pengembangan Desa di Era Digital</p>
      </div>
      <div className="content flex flex-col lg:flex-row gap-x-32">
        <div className="description relative flex flex-col gap-y-4">
          <TextComp number={"1"} color={"bg-blueButton"} title={"Lihat Desa Dengan Virtual Tour"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} />
          <TextComp number={"2"} color={"bg-semiOrange"} title={"Pembelian Tiket Secara Online"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} />
          <TextComp number={"3"} color={"bg-cream"} title={"Menambah Pemasukan Desa"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} />
        </div>
        <div className="img-content relative h-480 w-1/2 mx-auto my-10 md:my-0">
          <img src="/images/village_images.png" alt="villages images" className="front-image rounded-full h-96 w-48 absolute bottom-0" />
          <img src="/images/village_images2.png" alt="villages images2" className="bigger-image rounded-full h-480 w-72 absolute -z-10 bottom-0 left-20" />
        </div>
      </div>
    </div>
  );
}

export default Tujuan;
