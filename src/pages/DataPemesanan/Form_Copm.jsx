import { Fragment } from "react";

const Form = (props) => {
  return (
    <Fragment>
      <label className="label">{props.title}</label>
      <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="input input-bordered w-full" />
    </Fragment>
  );
};

export default Form;
