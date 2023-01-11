const Token = () => {
  return (
    <div className="wrapper flex flex-col gap-y-4 px-5 py-8 bg-blueButton rounded-2xl  h-fit w-1/3">
      <h1 className="text-2xl font-semibold text-white">Masukkan Token</h1>
      <input type="text" className=" w-full border-2 mb-6 border-white rounded-full outline-none bg-transparent px-5 py-2 text-white " placeholder="e.g. hjb342jncd" />
      <button className="btn mb-7 w-full font-semibold rounded-full px-8 px bg-white text-blueButton border-none mx-2">Mulai Vtour</button>
    </div>
  );
};

export default Token;
