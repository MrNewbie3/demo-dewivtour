import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";
import AvatarComp from "./Avatar";

import Toggler from "./Toggle";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-row">
          <Toggler />
        <AvatarComp />
      </div>
    </>
  );
};

export default SignIn;
