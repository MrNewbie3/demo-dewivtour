function Total(props) {
  return (
    <div className="flex flex-row items-center">
      <p className="font-semibold text-sm">{props.keys}</p>
      <p className={"text-end text-semiOrange text-lg " + (props.bold ? "font-semibold  " : "font-medium")}>{props.value}</p>
    </div>
  );
}
export default Total;
