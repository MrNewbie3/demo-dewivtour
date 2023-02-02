import { Fragment } from "react";

const Form = (props) => {
  return (
    <Fragment>
      <label className="label font-medium mt-5">{props.title}</label>
      <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="input input-md w-full rounded-full bg-buttonDisabled" />
      <label className="label">
        <span className="label-text text-xs font-medium">{props.alt}</span>
      </label>
    </Fragment>
  );
};

export default Form;
