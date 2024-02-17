import React from "react";
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

import ICON from "../developer.json";

const HeroSection = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current.playFromBeginning();
  }, []);

  return (
    <div
      id="hero"
      className="py-20 flex flex-col justify-center items-center md:flex-row md:justify-between"
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl mb-1 md:mb-3 text-violet-600 font-semibold dark:text-violet-500">
          Hi, this is Cleiton
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Frontend Developer
        </p>
        <a
          href="#works"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 md:text-md"
        >
          See Works
        </a>
      </div>
      <Player ref={playerRef} size={400} icon={ICON} />
    </div>
  );
};

export default HeroSection;
