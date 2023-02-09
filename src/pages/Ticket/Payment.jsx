import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";
import SummaryComps from "../../components/ui/Summary";
import Countdown from "react-countdown";
const Payment = () => {
  const [data, setData] = useState(null);
  const [history, setHistory] = useState(null);
  const userEmail = JSON.parse(localStorage.getItem("loginInfo")).user.email;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (history !== null) {
      return setData(
        history.orders.filter((element) => {
          return element.email === userEmail;
        })
      );
    }
  }, [history]);

  axios
    .get("https://api-dewi-vtour.vercel.app/api/order")
    .then((result) => {
      if (history === null) {
        setHistory(result.data);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setLoading(false));

  const postData = async (order_id, data_id) => {
    setLoading(true);
    const data = await axios.get(`https://api-dewi-vtour.vercel.app/api/order/status/${order_id}`);
    const token = await axios.get(`https://api-dewi-vtour.vercel.app/api/order/token/${data_id}`);
    data.data.status.transaction_status === "settlement"
      ? Swal.fire({
          icon: "success",
          title: "Order Complete",
          text: `Token: ${token.data.token}`,
        })
      : Swal.fire({
          icon: "error",
          title: "Not Found!",
          text: "Purchase your order before looking your token",
        });
    setLoading(false);
  };

  const dateConverter = (date) => {
    const time = new Date(date);
    return `${time.getDate()}-${time.getUTCMonth() + 1}-${time.getFullYear()}`;
  };
  return (
    <Fragment>
      {loading ? (
        <div className="loading flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 z-50 bg-black opacity-75 ">
          <progress className="progress progress-primary w-56 opacity-100"></progress>
        </div>
      ) : (
        <div>
          {data === null || data.length === 0 ? (
            <section className="flex flex-row justify-center w-full h-full">
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
            </section>
          ) : (
            <section className="flex flex-row justify-center w-full h-full">
              <div className="wrapper flex flex-row flex-wrap gap-x-4 justify-center">
                {data.map((data, index) => {
                  return (
                    <div className="card w-96 my-10 bg-base-100 shadow-3xl">
                      <div className="card-body">
                        <h2 className="card-title">{data.tour.name}</h2>
                        <div className={"wrapper mt-14 flex justify-center  w-full "}>
                          <div className="text flex flex-col gap-y-3 w-220">
                            <div className="wrapper flex flex-col gap-y-3">
                              <SummaryComps
                                title="Waktu Tersisa"
                                value={
                                  <Countdown date={data.response_midtrans.expiry_time}>
                                    <p>Finished</p>
                                  </Countdown>
                                }
                              />
                              <SummaryComps title="Akun Virtual" value={data.response_midtrans.va_numbers[0].va_number} />
                              <SummaryComps title="Harga" value={"Rp " + (data.gross_amount / data.people).toLocaleString()} />
                              <SummaryComps title="jumlah orang" value={data.people} />
                              <SummaryComps title="tanggal order" value={dateConverter(data.createdAt)} />
                              <div className="divider"></div>
                              <SummaryComps title="Total bayar" value={"Rp " + data.gross_amount.toLocaleString()} />
                            </div>
                            <div className="button self-end mt-14">
                              <button
                                className="btn rounded-full px-8 bg-blueButton border-none mx-2"
                                onClick={() => {
                                  postData(data.order_id, data._id);
                                }}
                              >
                                Lihat Detail
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}
    </Fragment>
  );
};
export default Payment;
