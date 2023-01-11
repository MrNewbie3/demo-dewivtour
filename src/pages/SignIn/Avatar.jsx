const AvatarComp = () => {
  return (
    <div className="wrapper-avatar flex justify-end w-2/3">
      <img src={require("../../assets/avatar.png")} alt="avatar" className="max-h-screen" />
    </div>
  );
};

export default AvatarComp;
