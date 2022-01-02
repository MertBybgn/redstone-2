import React, { useState } from "react";

import Avatar from "../Avatar";
import TextArea from "../Text/TextArea";
import Button from "../Button/Button";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import SharesFiles from "./SharesFiles";
import { Image } from "antd";

export default function Shares() {
  const [Textarea, SetTextarea] = useState("");
  const [files1, Setfiles1] = useState();
  const [files2, Setfiles2] = useState();
  const [files3, Setfiles3] = useState();
  function Handilchench(event) {
    SetTextarea(event.target.value);
  }
  const TextareaValue = Textarea.length;

  function handleChangeimg(event) {
    Setfiles1(URL.createObjectURL(event.target.files[0]));
    Setfiles2(URL.createObjectURL(event.target.files[1]));
    Setfiles3(URL.createObjectURL(event.target.files[2]));
  }
  console.log(files1);
  console.log(files2);
  console.log(files3);

  return (
    <div
      className="flex p-2 w-full   bg-primary-hover border-b-2  border-b-text-color
   h-auto "
    >
      <div className="   w-14  flex justify-center ">
        <Avatar size="base" rounded="full" />
      </div>
      <div className="   flex flex-col w-full ">
        <div className="w-full h-28 px-2  mb-2">
          <TextArea Handilchench={Handilchench}></TextArea>
        </div>
        <div className=" w-full  h-full">
          <Image.PreviewGroup>
            <Image width={200} height={150} src={files1} />
            <Image width={200} height={150} src={files2} />
            <Image width={200} height={150} src={files3} />
          </Image.PreviewGroup>
        </div>
        <div className="flex  justify-between  border-t-tweet-hover  border-t-2 pr-2">
          <div>
            <SharesFiles handleChangeimg={handleChangeimg} />
          </div>

          <div className=" flex justify-center gap-2 items-center">
            <div className="flex justify-center  item ">
              {TextareaValue > 0 ? (
                <CircularProgressbar
                  minValue={0}
                  maxValue={165}
                  value={TextareaValue}
                  className=" w-6 "
                  styles={buildStyles({
                    // Colors
                    pathColor: `#45be93`,
                    textColor: "#f88",
                    trailColor: "rgb(25, 39, 52)",
                    backgroundColor: "rgb(25, 39, 52)",
                  })}
                />
              ) : null}
            </div>
            <div>
              <Button themes="Tweet">Tweets</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
