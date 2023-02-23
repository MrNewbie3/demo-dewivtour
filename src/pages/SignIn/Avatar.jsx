const AvatarComp = () => {
  return (
    <div className="wrapper-avatar lg:flex justify-end w-2/3 hidden">
      <img src={require("../../assets/avatar.png")} alt="avatar" className="max-h-screen" />
    </div>
  );
};

export default AvatarComp;
