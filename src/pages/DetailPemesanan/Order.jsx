import { Fragment } from "react";

const OrderDetails = (props) => {
  return (
    <Fragment>
      <p className="font-medium mt-5 text-xs">{props.title}</p>
      <p className="font-medium text-lg">{props.value}</p>
    </Fragment>
  );
};
export default OrderDetails;
