function TextComp(props) {
  return (
    <div className="about-village ">
      <p className={`number w-20 text-center rounded-full text-white py-1 ${props.color} text-xl font-bold`}>{props.number}</p>
      <div className="text font-bold text-2xl mt-2 mb-4">{props.title}</div>
      <div className="context font-medium text-base">{props.info}</div>
    </div>
  );
}

export default TextComp;
