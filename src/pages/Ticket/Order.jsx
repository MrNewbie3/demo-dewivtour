/* eslint-disable jsx-a11y/anchor-is-valid */
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import AccessAlarmRounded from "@mui/icons-material/AccessAlarmRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Order = () => {
  const [location, setlocation] = useState({ lokasi: null, time: null, total: null, harga: null });
  const [data, setData] = useState();
  const [loadingStatus, setLoadingStatus] = useState();
  const [renderStatus, setRenderStatus] = useState(false);
  useEffect(() => {
    axios
      .get("https://api-dewi-vtour.vercel.app/api/tour")
      .then((result) => {
        const response = result.data.tours;
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    return () => {
      setRenderStatus(true);
    };
  }, [data]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setlocation((prevstate) => ({
      ...prevstate,
      ...location,
      [name]: [value],
      harga: data.map((result) => {
        if (location.lokasi === null) {
        } else if (result.name !== location.lokasi.toString() && location.lokasi.toString() !== null) {
        }
        return result.price;
      }),
    }));
  };

  const handleChange = (e) => {
    const { name, id } = e.target;
    setlocation((prevState) => ({ ...prevState, ...location, [name]: [id] }));
  };

  const reset = () => {
    setlocation({ lokasi: null, time: null, total: null });
  };
  const handleSubmit = () => {
    console.log(location);
    localStorage.setItem("Order Information", JSON.stringify(location));
    window.location.reload();
    reset();
  };

  return (
    <div className="w-full flex justify-center">
      <div className="text-content my-9 mb-14 gap-y-6 flex flex-col w-fit ">
        <div className="location flex flex-row items-center gap-x-8 my-3">
          <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
            <PlaceOutlinedIcon className="text-blueButton bg-blueMain p-2 box-content rounded-full" sx={{ fontSize: 32 }} />
          </div>
          <div className="text font-medium text-textDisabled text-sm sm:text-base">
            <div className="dropdown">
              <label tabIndex={0} className=" m-1">
                {location.lokasi === null ? "Pilih lokasi tujuan" : location.lokasi}
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {!renderStatus
                  ? ""
                  : data.map((res) => {
                      return (
                        <li key={res._id}>
                          <a onClick={handleChange} name="lokasi" id={res.name}>
                            {res.name}
                          </a>
                        </li>
                      );
                    })}
              </ul>
            </div>
          </div>
        </div>

        <div className="time flex flex-row items-center gap-x-8 my-3">
          <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
            <AccessAlarmRounded className="text-blueButton bg-blueMain p-2 box-content  rounded-full" sx={{ fontSize: 32 }} />
          </div>
          <div className="text font-medium text-textDisabled text-sm sm:text-base">
            <div className="dropdown">
              <input type="date" onClick={handleChange} onChange={handleInput} name="time" id="time" value={location.time === null ? "" : location.time} />
            </div>
          </div>
        </div>
        <div className="people flex flex-row items-center gap-x-8 my-3">
          <div className="title flex flex-row gap-x-4 font-semibold text-lg md:text-xl items-center">
            <PersonOutlineRoundedIcon className="text-blueButton  bg-blueMain p-2 box-content rounded-full" sx={{ fontSize: 32 }} />
          </div>
          <div className="text font-medium text-textDisabled text-sm sm:text-base">
            <div className="dropdown">
              <input tabIndex={0} type="number" max={20} min={0} className=" w-72 " name="total" id="total" onChange={handleInput} value={location.total === null ? "" : location.total} placeholder="Masukkan Jumlah Pengunjung" />
            </div>
          </div>
        </div>
        {(location.lokasi && location.time && location.total) === null ? (
          <div className="button w-fit flex flex-row gap-x-8 my-8">
            <button disabled className="btn rounded-full px-8 text-blueButton outline-2 outline bg-transparent border-none mx-2 flex flex-row gap-x-2 items-center">
              <span>
                <DeleteOutlineRoundedIcon fontSize="medium" />{" "}
              </span>{" "}
              <p>Bersihkan</p>
            </button>
            <button disabled className="btn rounded-full px-8 px bg-blueButton border-none mx-2">
              Lanjut
            </button>
          </div>
        ) : (
          <div className="button w-fit flex flex-row gap-x-8 my-8">
            <button className="btn rounded-full px-8 text-blueButton outline-2 outline bg-transparent border-none mx-2 flex flex-row gap-x-2 items-center" onClick={reset}>
              <span>
                <DeleteOutlineRoundedIcon fontSize="medium" />{" "}
              </span>{" "}
              <p>Bersihkan</p>
            </button>
            <button className="btn rounded-full px-8 px bg-blueButton border-none mx-2" onClick={handleSubmit}>
              Lanjut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
