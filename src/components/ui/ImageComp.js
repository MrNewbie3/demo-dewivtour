const ImageComp = (props) => {
  return (
    <div className="image-wrapper flex flex-col text-center gap-y-1 ">
      <img src={props.images} alt="images" className="w-10 h-10 flex self-center" />
      <p className="text-sm font-medium">{props.caption}</p>
      <p className="text-xs text-semiOrange">{props.news}</p>
    </div>
  );
};

export default ImageComp;
