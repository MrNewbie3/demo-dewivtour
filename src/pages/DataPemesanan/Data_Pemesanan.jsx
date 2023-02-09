import { Breadcrumbs, Stepper, Step, StepLabel } from "@mui/material";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Form from "./Form_Copm";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
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

const DataPesanan = () => {
  const { target } = useParams();
  const clock = ["13.00", "", "2.30"];
  const destination = ["GMR", , "MLG"];

  return (
    <Fragment>
      <Navbar />
      <div className="content mx-32 px-6">
        <section className="breadcrumbs mt-8 mb-16">
          <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ fontFamily: "Poppins" }}>
            <Link to={"/destination"} className="font-medium">
              Destinasi
            </Link>
            <Link to={`/destination/${target}`} className="font-medium ">
              {target}
            </Link>
            <Link to={`/destination/${target}/data_pesan`} className="font-semibold text-black">
              Data Pemesanan
            </Link>
          </Breadcrumbs>
        </section>
        <div className="wrapper  flex flex-row gap-x-28">
          <section className="content w-1/2">
            <div className="card w-full  shadow-xl">
              <div className="card-body">
                <h1 className="card-title">Data Pemesanan</h1>
                <p className="text-sm text-textDisabled font-medium">Isi data dan nikmati perjalanannya</p>
                <div className="card-actions">
                  <form action="" className="w-full">
                    <Form title="Nama Lengkap" type="text" placeholder="cth: Budi Santoso" value={""} onChange={""} />
                    <Form title="Jumlah Orang" type="number" placeholder="cth: 1" value={""} onChange={""} />
                    <Form title="Tanggal Berangkat" type="date" placeholder="DD/MM/YYYY" value={""} onChange={""} />
                    <Form title="Titik Jemput" type="text" placeholder="cth: Stasiun Malang Gedung Lama" alt="(penjemputan hanya di dalam kota)" value={""} onChange={""} />
                  </form>
                </div>
              </div>
            </div>
            <div className="submit w-full flex justify-end">
              <Link to={`/destination/${target}/data_pesan/detail`}>
                <button className="btn rounded-full font-normal px-8 my-10 bg-blueButton border-none">Lanjutkan</button>
              </Link>
            </div>
          </section>
          <section className="">
            <div className="container-travel flex flex-col w-full mt-5 items-start  shadow-xl rounded-3xl p-6">
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

export default DataPesanan;
