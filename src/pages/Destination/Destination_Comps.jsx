/* eslint-disable react/jsx-pascal-case */
import List from "./List";
import Search_Bar from "./Search_Bar";

const Destination_Comps = () => {
  return (
    <div className="wrapper px-16 my-6">
      <div className="wrapper flex flex-col mb-4">
        <Search_Bar />
      </div>
      <section className=" flex flex-row gap-x-14">
        <div className="sorter-maps w-fit">
          <div className="destination-dropdown bg-buttonDisabled w-56 p-4 rounded-xl">
            <div className="title text-xl font-semibold mb-5">Pilihan Destinasi</div>
            <div className="select-form">
              <form className="flex flex-col gap-y-3">
                <div className="option-wrapper flex flex-row items-center gap-x-4">
                  <input type="radio" id="Desa Wisata" name="fav_language" value="Desa Wisata" checked />
                  <label for="Desa Wisata">Desa Wisata</label>
                </div>
                <div className="option-wrapper flex flex-row items-center gap-x-4">
                  <input type="radio" id="RM" name="fav_language" value="Rumah Makan" />
                  <label for="RM">Rumah Makan</label>
                </div>
                <div className="option-wrapper flex flex-row items-center gap-x-4">
                  <input type="radio" id="Situs" name="fav_language" value="Situs" />
                  <label for="Situs">Situs</label>
                </div>
                <div className="option-wrapper flex flex-row items-center gap-x-4">
                  <input type="radio" id="Museum" name="fav_language" value="Museum" />
                  <label for="Museum">Museum</label>
                </div>
              </form>
            </div>
          </div>
          <div className="location mt-6 bg-buttonDisabled w-56 p-4 rounded-xl">
            <div className="title text-xl font-semibold mb-5">Lokasi Anda</div>
            <div className="maps">
              <iframe
                className="rounded-xl w-full h-24"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2135998352505!2d112.65682731456587!3d-7.9768619942548975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sTelkom%20School%20-%20SMK%20Telkom%20Malang!5e0!3m2!1sid!2sid!4v1674739567129!5m2!1sid!2sid"
                style={{ border: "1px solid black" }}
                title="maps"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="destination-list w-full">
          <List />
        </div>
      </section>
    </div>
  );
};

export default Destination_Comps;
