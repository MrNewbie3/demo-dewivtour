import AccordionComps from "../../components/ui/Accordion";

const Information = () => {
  return (
    <div className="wrapper my-24 ">
      <div className="title text-center mb-20">
        <p className="text-xl md:text-2xl font-medium tracking-widest mb-6 uppercase">Kegiatan Warga</p>
        <p className="font-bold text-4xl md:text-5xl ">Semua Kegiatan Warga </p>
      </div>
      <div className="toggle-event flex justify-center mb-14">
        <div className="button-group flex flex-row justify-center gap-x-3 py-2 px-3 bg-buttonDisabled w-fit rounded-full">
          <button className="px-6 py-2 uppercase rounded-full text-gray-500 font-semibold ">Har</button>
          <button className="px-6 py-2 uppercase rounded-full text-gray-500 font-semibold ">Min</button>
          <button className="px-6 py-2 uppercase rounded-full text-gray-500 font-semibold ">Bul</button>
          <button className="px-6 py-2 uppercase rounded-full text-gray-500 font-semibold ">Tah</button>
          <button className="px-6 py-2 uppercase rounded-full text-white font-semibold bg-blueButton ">Sem</button>
        </div>
      </div>
      <div className="accordion flex flex-row px-12 gap-x-5">
        <div className="left-accordion flex flex-col gap-y-6">
          <AccordionComps
            title={"Pentas Seni"}
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum sit dolor reiciendis. Voluptatem, dolor. Aliquam asperiores incidunt numquam ex exercitationem, soluta nesciunt doloremque, sint nobis voluptas accusantium perspiciatis autem!"
          />
          <AccordionComps
            title={"Perbaikan Rumah"}
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum sit dolor reiciendis. Voluptatem, dolor. Aliquam asperiores incidunt numquam ex exercitationem, soluta nesciunt doloremque, sint nobis voluptas accusantium perspiciatis autem!"
          />
          <AccordionComps
            title={"Pembersihan Sungai"}
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum sit dolor reiciendis. Voluptatem, dolor. Aliquam asperiores incidunt numquam ex exercitationem, soluta nesciunt doloremque, sint nobis voluptas accusantium perspiciatis autem!"
          />
        </div>
        <div className="right-accordion flex flex-col gap-y-6">
          <AccordionComps
            title={"Pembangunan Jembatan"}
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum sit dolor reiciendis. Voluptatem, dolor. Aliquam asperiores incidunt numquam ex exercitationem, soluta nesciunt doloremque, sint nobis voluptas accusantium perspiciatis autem!"
          />
          <AccordionComps
            title={"Bersih Desa"}
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum sit dolor reiciendis. Voluptatem, dolor. Aliquam asperiores incidunt numquam ex exercitationem, soluta nesciunt doloremque, sint nobis voluptas accusantium perspiciatis autem!"
          />
          <AccordionComps
            title={"Pembagian Sembako"}
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum sit dolor reiciendis. Voluptatem, dolor. Aliquam asperiores incidunt numquam ex exercitationem, soluta nesciunt doloremque, sint nobis voluptas accusantium perspiciatis autem!"
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
