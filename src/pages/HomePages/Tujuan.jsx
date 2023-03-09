import { useState } from "react";
import { useEffect } from "react";
import TextComp from "../../components/ui/TextComp";
import axios from "axios";
import { CircularProgress } from "@mui/material";
function Tujuan() {
  const [article, setArticle] = useState(null);
  const color = ["bg-blueButton", "bg-semiOrange", "bg-cream"];
  useEffect(() => {
    if (article === null)
      axios
        .get("https://api-articles-tour.vercel.app/api/articles")
        .then((result) => {
          setArticle(result.data.response);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [article]);

  return (
    <div className="wrapper">
      {article === null ? (
        <div className="wrapper flex w-full h-full justify-center items-center  ">
          <CircularProgress />
        </div>
      ) : (
        <div className="mt-14 px-16 h-auto">
          <div className="title text-center">
            <p className="text-xl md:text-2xl font-medium tracking-widest mb-6">Tujuan Kami</p>
            <p className="font-bold text-3xl md:text-5xl mb-20">Pengembangan Desa di Era Digital</p>
          </div>
          <div className="content flex flex-col lg:flex-row gap-x-32">
            <div className="description relative flex flex-col gap-y-4 max-w-2xl">
              {article.map((article, index) => {
                return <TextComp number={index + 1} color={color[index]} title={article.title} info={article.content} />;
              })}
            </div>
            <div className="img-content relative h-480 w-full -ml-10 md:ml-0 md:w-1/2 mx-auto my-10 md:my-0">
              <img src={require("../../assets/thumbs_1.jpg")} alt="villages images" className="front-image rounded-full h-96 w-48 absolute bottom-0 object-cover" />
              <img src={require("../../assets/thumbs_2.jpg")} alt="villages images2" className="bigger-image rounded-full h-480 w-72 absolute -z-10 bottom-0 left-20 object-cover" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tujuan;
