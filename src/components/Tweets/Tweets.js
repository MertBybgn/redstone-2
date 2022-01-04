import React from "react";
import Avatar from "../Avatar";
import Image from "../Image";

export default function Tweets() {
  return (
    <div
      className="flex px-2  py-4 w-full  gap-3  bg-primary-hover border-b-2  border-b-text-color
   "
    >
      <div className="   w-14  flex justify-center ">
        <Avatar size="base" rounded="full" />
      </div>
      <div className="   flex flex-col w-full ">
        <div className="w-full h-auto px-2 mb-2 ">
          <p className=" text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unkn
          </p>
        </div>

        <div>
          <Image
            src1="https://icdn.ensonhaber.com/resimler/galeri/4_8643.jpg"
            src2="https://seyler.ekstat.com/img/max/800/i/iOA665pDf2mr7M8P-636554123779981811.jpg"
            src3="https://icdn.ensonhaber.com/resimler/galeri/4_8643.jpg"
            src4="https://icdn.ensonhaber.com/resimler/galeri/4_8643.jpg"
          />
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}
