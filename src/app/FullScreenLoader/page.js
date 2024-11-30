// FullScreenLoader.jsx
import React from "react";
import loader from "../../../public/images/loader gif.gif"
import Image from "next/image";


const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <Image src={loader} alt="Loading..." className=" " width={200} height={200} />
    </div>
  );
};

export default FullScreenLoader;
