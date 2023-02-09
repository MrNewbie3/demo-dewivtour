import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { Link, useParams } from "react-router-dom";

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

const Travel = () => {
  const clock = ["13.00", "", "2.30"];
  const destination = ["GMR", , "MLG"];
  const index = [1, 2, 3];
  const { target } = useParams();
  return (
    <section className="parent ">
      <div className="title mt-16">
        <h1 className="font-semibold text-lg">Pilihan Travel</h1>
      </div>
      {index.map((res) => {
        return (
          <div className="container-travel flex flex-row w-full mt-5 items-center justify-between shadow-xl rounded-3xl p-6">
            <div className="trans flex flex-col justify-center">
              <div className="trans-name flex flex-row items-center font-medium">
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
            <div className="ket">
              <h1 className="font-semibold">Keterangan</h1>
              <p className="text-textDisabled">Sudah termasuk guide tour yang akan memandu anda untuk menikmati destinasi pilihan </p>
            </div>
            <div className="prices">
              <div className="prices">
                <p className="text-sm font-medium ">
                  <span className="text-semiOrange font-bold text-lg">Rp. 1.800.000,-</span>/org
                </p>
                <div className="order">
                  <Link to={`/destination/${target}/data_pesan`}>
                    <button className="btn bg-semiOrange border-none rounded-full w-full mt-4">Pilih</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Travel;
