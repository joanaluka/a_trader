import React from "react";
import { welcome_one } from "../../images/";
import { Welcome } from "../common";

const WelcomeOne = () => {
  return (
    <>
      <Welcome
        image={welcome_one}
        heading="Your path to a secure finacial future."
        content="Become a more confident trader and set your path to more secure
          finacial future path. Invest using our easy-to-understand smart
          finacial tools."
        to="/welcome-two"
      />
    </>
  );
};

export default WelcomeOne;
