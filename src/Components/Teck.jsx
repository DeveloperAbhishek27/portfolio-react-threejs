import React from "react";

import SectionWrapper from "../HOC/SectionWraper";
import { technologies } from "../Contant/Index";
import Ball from "./Canvas/Ball";

const Teck = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-8 p-5 items-center">
        {technologies.map((technology) => (
          <div
            className="flex flex-col justify-center items-center mt-5"
            key={technology.name}
          >
            <div className="w-28 h-28">
              <Ball icon={technology.icon} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Teck, "");
