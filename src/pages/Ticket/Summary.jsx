/* eslint-disable no-unused-vars */
import SummaryComps from "../../components/ui/Summary";
import Axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
const Summary = () => {
  const [agree, setAgree] = useState(false);
  const calulation = JSON.parse(localStorage.getItem("Order Information"));
  const id = JSON.parse(localStorage.getItem("loginInfo"));
  const prices = calulation === null ? " " : calulation.harga.find((element) => element != null);
  const UID = calulation === null ? " " : calulation.id.find((element) => element != null);
  const [isLoading, setLoading] = useState(false);
  const postData = () => {
    setLoading(true);
    Axios.post("https://api-dewi-vtour.vercel.app/api/order/charge", {
      name: id.user.displayName === null ? id.user.email : id.user.displayName,
      bank: calulation.bank.toString(),
      email: id.user.email,
      amount: prices,
      people: calulation.total.toString(),
      tour: UID,
    })
      .then(() => {
        localStorage.removeItem("Order Information");
        Swal.fire({
          icon: "success",
          title: "Berhasil memesan!",
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return calulation === null ? (
    <div className="wrapper my-10  w-full "></div>
  ) : (
    <div className={"wrapper my-14 flex justify-center px-2 md:px-0  w-full "}>
      <div className="text flex flex-col gap-y-3 w-220">
        <div className="wrapper flex flex-col gap-y-3">
          <SummaryComps title="Lokasi" value={calulation.lokasi} />
          <SummaryComps title="kedatangan" value={calulation.time} />
          <SummaryComps title="Jenis Bank" value={calulation.bank} />
          <SummaryComps title="harga tiket" value={"Rp " + prices.toLocaleString()} />
          <SummaryComps title="jumlah orang" value={calulation.total} />
          <div className="divider"></div>
          <SummaryComps title="Total bayar" value={"Rp " + (prices * calulation.total).toLocaleString()} />
        </div>
        <div className="agreement flex flex-row items-center gap-x-4">
          <input
            type="checkbox"
            name=""
            onChange={(e) => {
              setAgree(e.target.checked);
            }}
          />
          <p>
            I accept and agree to the <span className="text-blue-600 underline"> Terms of Use</span> <span className="text-red-600">*</span>
          </p>
        </div>
        {agree && (
          <div className="button self-end my-14">
            {!isLoading ? (
              <button className="btn rounded-full px-8 px bg-blueButton border-none mx-2" onClick={postData}>
                Pesan Sekarang
              </button>
            ) : (
              <button
                disabled
                type="button"
                className={
                  " text-white btn rounded-full px-8 px bg-blueButton border-none mx-2  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  items-center"
                }
              >
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
