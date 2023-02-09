import axios from "axios";
import { useEffect, useState } from "react";
import HomeLayout from "../../layouts/HomeLayout";
import Token from "./Token";
import Virtual from "./Virtual";

const Vtour = () => {
  const [vtour, setVtour] = useState(localStorage.getItem("Vtour") === null ? "" : JSON.parse(localStorage.getItem("Vtour")).vtour);
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  console.log(vtour);
  const handleChange = (e) => {
    const { value } = e.target;
    setToken(value);
  };
  const handlClick = () => {
    setLoading(true);
    axios
      .post(`https://api-dewi-vtour.vercel.app/api/order/token/${token}`)
      .then((result) => {
        localStorage.setItem("Vtour", JSON.stringify(result.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <HomeLayout>
      <div className="px-16 flex flex-col lg:flex-row gap-x-5 gap-y-5  my-8 ">
        <Token onChange={handleChange} value={token} onClick={handlClick} loading={loading} />
        <Virtual url={vtour} />
      </div>
    </HomeLayout>
  );
};

export default Vtour;
