import { Axios } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SummaryComps from "../../components/ui/Summary";

const Payment = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("transactionData")));
  const postData = () => {
    Swal.fire({
      icon: "success",
      title: "Sukses",
      text: `Token Anda: ${data.token}`,
    });
  };
  return data === null ? (
    <section className="flex flex-row justify-center w-full h-full">
      <div className="wrapper">
        <div className="card w-96 my-10 mb-32 bg-base-100 shadow-3xl">
          <div className="card-body">
            <h2 className="card-title">Tiket anda kosong</h2>
            <p className="mb-10">Silahkan beli tiket terlebih dahulu </p>
            <div className="card-actions justify-end">
              <a href="/ticket">
                <button className="btn bg-blueButton border-none">Beli tiket</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="flex flex-row justify-center w-full h-full">
      <div className="wrapper ">
        <div className="card w-96 my-10 mb-32 bg-base-100 shadow-3xl">
          <div className="card-body">
            <h2 className="card-title">Transaksi Sukses</h2>
            <div className={"wrapper mt-14 flex justify-center  w-full "}>
              <div className="text flex flex-col gap-y-3 w-220">
                <div className="wrapper flex flex-col gap-y-3">
                  <SummaryComps title="ID" value={data.order_id} />
                  <SummaryComps title="Akun Virtual" value={data.va_number} />
                  <SummaryComps title="Harga" value={"Rp " + (data.gross_amount / data.people).toLocaleString()} />
                  <SummaryComps title="jumlah orang" value={data.people} />
                  <div className="divider"></div>
                  <SummaryComps title="Total bayar" value={"Rp " + data.gross_amount.toLocaleString()} />
                </div>
                <div className="button self-end mt-14">
                  <button className="btn rounded-full px-8 bg-blueButton border-none mx-2" onClick={postData}>
                    Lihat Token
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Payment;