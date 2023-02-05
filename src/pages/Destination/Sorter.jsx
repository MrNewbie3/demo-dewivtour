const Sorter = (params) => {
  return (
    <div className="sorter-maps w-fit">
      <div className="destination-dropdown bg-buttonDisabled w-56 p-4 rounded-xl">
        <div className="title text-xl font-semibold mb-5">Pilihan Destinasi</div>
        <div className="select-form">
          <form className="flex flex-col gap-y-3">
            <div className="option-wrapper flex flex-row items-center gap-x-4">
              <input type="radio" id="Desa Wisata" name="fav_language" onChange={() => {}} value="Desa Wisata" checked />
              <label htmlFor="Desa Wisata">Desa Wisata</label>
            </div>
            <div className="option-wrapper flex flex-row items-center gap-x-4">
              <input type="radio" id="RM" name="fav_language" onChange={() => {}} value="Rumah Makan" />
              <label htmlFor="RM">Rumah Makan</label>
            </div>
            <div className="option-wrapper flex flex-row items-center gap-x-4">
              <input type="radio" id="Situs" name="fav_language" onChange={() => {}} value="Situs" />
              <label htmlFor="Situs">Situs</label>
            </div>
            <div className="option-wrapper flex flex-row items-center gap-x-4">
              <input type="radio" id="Museum" name="fav_language" onChange={() => {}} value="Museum" />
              <label htmlFor="Museum">Museum</label>
            </div>
          </form>
        </div>
      </div>
      <div className="location mt-6 bg-buttonDisabled w-56 p-4 rounded-xl">
        <div className="title text-xl font-semibold mb-5">Lokasi Anda</div>
        <div className="maps" id="map"></div>
      </div>
    </div>
  );
};

export default Sorter