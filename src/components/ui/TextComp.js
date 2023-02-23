import ReadMore from "./Readmore";

function TextComp(props) {
  return (
    <div className="about-village ">
      <p className={`number w-20 text-center rounded-full text-white py-1 ${props.color} text-xl font-bold`}>{props.number}</p>
      <div className="text font-bold text-2xl mt-2 mb-4 capitalize">{props.title}</div>
      <ReadMore>{props.info}</ReadMore>
    </div>
  );
}

export default TextComp;
