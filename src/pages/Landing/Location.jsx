const Location = () => {
  return (
    <section>
      <div className="header justify-between mt-16 mb-8 flex flex-row">
        <h1 className="font-semibold text-lg">Lokasi</h1>
      </div>
      <div className="content-container flex flex-row gap-x-5 w-full">
        <div className="maps w-full">
          <iframe
            className="rounded-xl w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1571587692265!2d112.63560641456594!3d-7.982700494250816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629537cd9ffdf%3A0x614750a282c3fe65!2sKampung%20Warna%20Warni!5e0!3m2!1sid!2sid!4v1675085391387!5m2!1sid!2sid"
            height="250"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="details-addres flex flex-col gap-y-5">
          <div className="address">
            <h1 className="font-semibold text-lg">Alamat</h1>
            <p className="text-textDisabled"> Jl. Zaenal Zakse Jl. Ir. H. Juanda 6, Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur</p>
          </div>
          <div className="facilities">
            <h1 className="font-semibold text-lg">Fasilitas</h1>
            <ul className="list-disc text-textDisabled ml-7">
              <li>Banyak Spot Foto</li>
              <li>Jembatan Ikonik</li>
              <li>Toilet Bersih</li>
              <li>Musholla</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
