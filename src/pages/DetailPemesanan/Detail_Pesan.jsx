import { Breadcrumbs, Stepper, Step, StepLabel } from "@mui/material";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import Form from "../DataPemesanan/Form_Copm";
import OrderDetails from "./Order";
import Total from "../../components/ui/Total";
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  );
}

const DetailPesan = () => {
  const { target } = useParams();
  const clock = ["13.00", "", "2.30"];
  const destination = ["GMR", , "MLG"];

  return (
    <Fragment>
      <Navbar />
      <div className="content mx-32 px-6">
        <section className="breadcrumbs mt-9 mb-16">
          <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ fontFamily: "Poppins" }}>
            <Link to={"/destination"} className="font-medium">
              Destinasi
            </Link>
            <Link to={`/destination/${target}`} className="font-medium ">
              {target}
            </Link>
            <Link to={`/destination/${target}/data_pesan`} className="font-medium   ">
              Data Pemesanan
            </Link>
            <Link to={`/destination/${target}/data_pesan/detail`} className="font-semibold text-black">
              Detail
            </Link>
          </Breadcrumbs>
        </section>
        <div className="wrapper mt-5 flex flex-row gap-x-28">
          <section className="content w-1/2 flex flex-col gap-y-8">
            <div className="card w-full shadow-3xl">
              <div className="card-body">
                <h1 className="card-title">Data Pemesanan</h1>
                <p className="text-sm text-textDisabled font-medium">Isi data dan nikmati perjalanannya</p>
                <div className="card-actions">
                  <form action="" className="w-full">
                    <OrderDetails title="Nama Lengkap" value={"Frederich John"} />
                    <OrderDetails title="Jumlah Orang" value={"2"} />
                    <OrderDetails title="Tanggal Berangkat" value={"03/02/2023"} />
                    <OrderDetails title="Titik Jemput" value={"Stasiun Kepanjen"} />
                  </form>
                </div>
              </div>
            </div>
            <div className="card w-full shadow-3xl p-2">
              <div className="card-body w-full">
                <h1 className="card-title">Total Pembayaran</h1>
                <p className="text-sm text-textDisabled font-medium">Nominal Dibawah sudah termasuk pajak dll</p>
                <div className="card-value flex flex-col mt-5">
                  <Total keys="Tiket Travel" value="Rp. 220.000,-" />
                  <Total keys="Guide Tour" value="Rp. 60.000,-" />
                  <Total keys="Tiket Masuk" value="Rp. 20.000,-" />
                  <div className="divider "></div>
                  <Total keys="TOTAL" value="Rp. 300.000,-" bold />
                </div>
              </div>
            </div>
            <div className="submit w-full flex justify-end">
              <button className="btn rounded-full font-normal px-8 my-10 bg-blueButton border-none">Bayar Sekarang</button>
            </div>
          </section>
          <section className="">
            <div className="container-travel flex flex-col w-full  items-start  shadow-3xl rounded-3xl p-6">
              <div className="breadcrumbs">
                <Breadcrumbs separator={<TrendingFlatRoundedIcon />} aria-label="breadcrumb">
                  <Link underline="hover" className="font-poppins font-semibold ">
                    Gambir
                  </Link>
                  <Link underline="hover" className="font-poppins font-semibold ">
                    Malang
                  </Link>
                </Breadcrumbs>
              </div>
              <div className="trans flex flex-col justify-center items-start">
                <div className="trans-name justify-start flex flex-row items-center font-medium">
                  <figure>
                    <img src={require("../../assets/travel_logo.png")} className="scale-50  " alt="" />
                  </figure>
                  <h1>Gajayana Lux 71</h1>
                </div>
                <div className="schedules w-full ml-6">
                  <Stepper alternativeLabel activeStep={0} connector={<QontoConnector />}>
                    {clock.map((label, index) => (
                      <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>
                          {label} <br /> {destination[index]}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </div>
              </div>
              <div className="ket mt-10">
                <h1 className="font-semibold">Narahubung</h1>
                <p className="text-textDisabled">+6281234567890 (Edi Wijaya)</p>
              </div>
              <div className="ket mt-5">
                <h1 className="font-semibold">Keterangan</h1>
                <ul className="list-disc pl-5">
                  <li>Membawa tas maksimal 2 buah</li>
                  <li>Penjemputan berada di dalam kota</li>
                  <li>Sudah termasuk pemandu wisata</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailPesan;
