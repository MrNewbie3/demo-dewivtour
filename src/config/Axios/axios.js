const axios = require("axios");

axios
  .get("https://api-dewi-vtour.vercel.app/api/tour")
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {});
