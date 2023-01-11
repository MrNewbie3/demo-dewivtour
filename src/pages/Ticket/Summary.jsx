import SummaryComps from "../../components/ui/Summary";

const Summary = () => {
  return (
    <div className="wrapper my-10  w-full">
      <div className="text flex flex-col gap-y-3 w-220">
        <SummaryComps title="Lokasi" value="Kampung Warna " />
        <SummaryComps title="kedatangan" value="Rabu, 16 mei 2023" />
        <SummaryComps title="harga tiket" value="rp. 7.000,- " />
        <SummaryComps title="jumlah orang" value="3" />
        <div className="divider"></div>
        <SummaryComps title="Total bayar" value="rp. 21.000,-" />
        <div className="button self-end my-8">
          <button className="btn rounded-full px-8 px bg-blueButton border-none mx-2">Bayar Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
