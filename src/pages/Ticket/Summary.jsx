import SummaryComps from "../../components/ui/Summary";

const Summary = () => {
  const calulation = JSON.parse(localStorage.getItem("Order Information"));
  return calulation === null ? (
    <div className="wrapper my-10  w-full "></div>
  ) : (
    <div className={"wrapper my-10  w-full "}>
      <div className="text flex flex-col gap-y-3 w-220">
        <SummaryComps title="Lokasi" value={calulation.lokasi} />
        <SummaryComps title="kedatangan" value={calulation.time} />
        <SummaryComps title="harga tiket" value={"Rp " + calulation.harga[0].toLocaleString()} />
        <SummaryComps title="jumlah orang" value={calulation.total} />
        <div className="divider"></div>
        <SummaryComps title="Total bayar" value={"Rp " + (calulation.harga[0] * calulation.total).toLocaleString()} />
        <div className="button self-end my-8">
          <button className="btn rounded-full px-8 px bg-blueButton border-none mx-2">Bayar Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
