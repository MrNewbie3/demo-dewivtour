const data = require("./data");
const value = data.orders.filter((element) => {
  return (element.email = "atharafiaffandy@gmail.com");
});
console.log(value);
