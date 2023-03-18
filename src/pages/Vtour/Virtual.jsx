import Iframe from "react-iframe";
const Virtual = (props) => {
  return (
    <div className="wrapper w-full rounded-xl flex flex-col gap-y-3 items-center justify-center">
      <Iframe url={"https://ciboox-id.github.io/kajoetangan-repo/"} height="450px" id="" className="w-full rounded-xl" display="block" position="relative" />
      <Iframe url={"https://ciboox-id.github.io/jodipan-repo/"} height="450px" id="" className="w-full rounded-xl" display="block" position="relative" />
      <Iframe url={"https://ciboox-id.github.io/tanaka/"} height="450px" id="" className="w-full rounded-xl" display="block" position="relative" />
      <Iframe url={"https://ciboox-id.github.io/topeng-malangan/"} height="450px" id="" className="w-full rounded-xl" display="block" position="relative" />
      <Iframe url={"https://ciboox-id.github.io/keramik-dinoyo/"} height="450px" id="" className="w-full rounded-xl" display="block" position="relative" />
    </div>
  );
};

export default Virtual;
