import React from "react";
import AvatarComp from "./Avatar";

import Toggler from "./Toggle";

const SignIn = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row">
        <Toggler />
        <AvatarComp />
      </div>
    </>
  );
};

export default SignIn;
