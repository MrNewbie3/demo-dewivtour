import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Search_Bar from "../Destination/Search_Bar";
import Gallery from "./Gallery";
import Information from "./Information";

const Landing_Comps = () => {
  const { target } = useParams();
  return (
    <section className="section px-16 my-8">
      <div className="wrapper flex flex-row mb-4 items-center justify-between">
        <div className="breadcrumbs ">
          <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ fontFamily: "Poppins" }}>
            <Link className="font-medium">Destinasi</Link>
            <Link className="font-semibold text-black">{target}</Link>
          </Breadcrumbs>
        </div>
        <Search_Bar />
      </div>
      <div className="content mt-14 mb-10">
        <Gallery />
      </div>
      <div className="information">
        <Information />
      </div>
    </section>
  );
};
export default Landing_Comps;
