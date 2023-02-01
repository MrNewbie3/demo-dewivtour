import { Breadcrumbs } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Form from "./Form_Copm";

const DataPesanan = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="wrapper mx-32 px-6">
        <section className="breadcrumbs mt-8 mb-16">
          <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ fontFamily: "Poppins" }}>
            <Link className="font-medium">Destinasi</Link>
            <Link className="font-semibold ">Kampung Warna Warni</Link>
            <Link className="font-semibold text-black">Data Pemesanan</Link>
          </Breadcrumbs>
        </section>
        <section className="content ">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className="card-title">Data Pemesanan</h1>
              <p className="text-sm text-textDisabled font-medium">Isi data dan nikmati perjalanannya</p>
              <div className="card-actions ">
                <form action="">
                  <Form />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default DataPesanan;
