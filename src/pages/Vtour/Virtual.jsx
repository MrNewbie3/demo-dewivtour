import Iframe from "react-iframe";
const Virtual = (props) => {
  return (
    <div className="wrapper w-full bg-blueButton rounded-xl flex items-center justify-center">
      {props.url === "" ? <img src={require("../../assets/VRAGIO_Logo With Text.png")} alt="" className="scale-50" /> : <Iframe url={props.url} height="450px" id="" className="w-full rounded-xl" display="block" position="relative" />}
    </div>
  );
};

export default Virtual;
