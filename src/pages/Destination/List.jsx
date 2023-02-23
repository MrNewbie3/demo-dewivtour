import { Fragment, useEffect } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Axios from "axios";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import Search_Bar from "./Search_Bar";
import { data } from "../Debug/data";
import ReadMore from "../../components/ui/Readmore";
const List = () => {
  const [rawData, setRawData] = useState(null);
  const [list, setList] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (list === null) {
      Axios.get("https://api-dewi-vtour.vercel.app/api/tour")
        .then((result) => {
          setRawData(result.data.tours);
          setList(result.data.tours);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const HandleChange = (e) => {
    const { value } = e.target;
    let val = [];
    setSearch(value);
    if (list !== null) {
      list.map((result) => {
        if (value !== "") {
          result.name.toLowerCase().includes(value.toLowerCase()) ? val.push(result) : console.log();
        }
      });
    }
    val.length === 0 ? setList(rawData) : setList(val);
  };
  const [sort, setSort] = useState(false);
  const handleSort = () => {
    setSort(true);
    setList(list.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)));
  };
  useEffect(() => {}, [sort]);

  return (
    <Fragment>
      <div className="wrapper w-full flex flex-row mb-4 justify-between">
        <select onChange={handleSort} className="select w-full hidden md:block max-w-xs rounded-full bg-buttonDisabled focus:border-none focus:ring-0 ">
          <option disabled selected>
            Sortir berdasarkan
          </option>
          <option value={"name"}>Nama</option>
        </select>
        <Search_Bar onChange={HandleChange} value={search} />
      </div>
      <section className="flex w-full h-full flex-col gap-y-8">
        <ul className="w-full h-full">
          {}
          {list === null ? (
            <div className="wrapper flex w-full h-full justify-center items-center  ">
              <CircularProgress />
            </div>
          ) : (
            list.map((key, index) => {
              return (
                <li key={key.id}>
                  <div id={key.id} className="ticket px-6 py-4 shadow-lg  flex flex-col md:flex-row rounded-xl gap-x-5">
                    <div className="thumbnail">
                      <figure>
                        <img src={key.image} alt="kampung warna warni" className="bg-zinc-200 text-center object-cover rounded-xl w-52 h-56" />
                      </figure>
                    </div>
                    <div className="Desc flex flex-col w-3/4">
                      <div className="title font-bold  md:text-2xl ">{key.name}</div>
                      <div className="location md:flex flex-row  hidden items-center mt-3 mb-5 gap-x-3">
                        <div className="icons bg-red-200 p-1 rounded-full text-red-600">
                          <PlaceOutlinedIcon />
                        </div>
                        <div className="location text-textDisabled">{key.location}</div>
                      </div>
                      <div className="about hidden md:block text-textDisabled">
                        <ReadMore>{data[index].content}</ReadMore>
                      </div>
                    </div>
                    <div className="prices flex md:flex-col flex-row md:w-1/6 w-full flex-wrap md:justify-end gap-y-4">
                      <div className="prices">
                        <div className="title text-xs font-medium ">Tiket Masuk</div>
                        <div className="prices text-md lg:text-xl font-bold text-semiOrange">Rp. {key.price.toLocaleString()},-</div>
                      </div>
                      <div className="packages">
                        <div className="pack text-xs font-medium">Include Travel</div>
                        <div className="prices text-md font-semibold text-semiOrange">Rp. 190.000,-</div>
                      </div>
                      <div className="order">
                        <Link to={key.name}>
                          <button className="btn btn-primary rounded-full w-full">Kunjungi</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </section>
    </Fragment>
  );
};

export default List;
