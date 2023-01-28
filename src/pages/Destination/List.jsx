import { Fragment } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
const List = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Fragment>
      <section className="flex w-full flex-col gap-y-8">
        {list.map((key) => {
          return (
            <div id={key} className="ticket px-6 py-4 shadow-lg  flex flex-row rounded-xl gap-x-5">
              <div className="thumbnail">
                <figure>
                  <img src={require("../../assets/ticket_thumbnail.png")} alt="kampung warna warni" className="rounded-xl w-52 h-56" />
                </figure>
              </div>
              <div className="Desc flex flex-col w-3/4">
                <div className="title font-bold text-2xl ">Kampung Warna Warni</div>
                <div className="location flex flex-row items-center mt-3 mb-5 gap-x-3">
                  <div className="icons bg-red-200 p-1 rounded-full text-red-600">
                    <PlaceOutlinedIcon />
                  </div>
                  <div className="loc text-textDisabled">Jodipan, Blimbing</div>
                </div>
                <div className="about text-textDisabled">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime unde explicabo vero architecto eligendi, labore quaerat possimus quod magnam! Quia.</div>
              </div>
              <div className="prices flex flex-col w-1/6 justify-end gap-y-4">
                <div className="prices">
                  <div className="title text-xs font-medium ">Tiket Masuk</div>
                  <div className="prices text-xl font-bold text-semiOrange">Rp. 7.000,-</div>
                </div>
                <div className="packages">
                  <div className="pack text-xs font-medium">Include Travel</div>
                  <div className="prices text-md font-semibold text-semiOrange">Rp. 190.000,-</div>
                </div>
                <div className="order">
                  <button className="btn btn-primary rounded-full w-full">Kunjungi</button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
};
export default List;
