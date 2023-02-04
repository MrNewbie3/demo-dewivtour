const SummaryComps = (props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="font-semibold text-base capitalize ">{props.title}</p>
      <p className="font-medium text-end text-sm capitalize">{props.value}</p>
    </div>
  );
};

export default SummaryComps;
