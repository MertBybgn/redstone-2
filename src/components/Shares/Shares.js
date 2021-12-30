import React, { useState } from "react";
import Avatar from "../Avatar";
import TextArea from "../Text/TextArea";
import { Question, Emoji, Media, Gif } from "../../icons";
import Button from "../Button/Button";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Shares() {
  const [Textarea, SetTextarea] = useState("");
  console.log(Textarea);
  function Handilchench(event) {
    SetTextarea(event.target.value);
  }
  const TextareaValue = Textarea.length;
  console.log(TextareaValue);
  return (
    <div
      className="flex p-2 w-full bg-primary-hover border-b-2  border-b-text-color
     h-[178px] "
    >
      <div className=" w-2/12  mr-2 flex justify-center ">
        <Avatar size="base" rounded="full" />
      </div>
      <div className=" flex flex-col w-full ">
        <div className="w-full h-28 px-2  mb-2">
          <TextArea Handilchench={Handilchench}></TextArea>
        </div>
        <div className="flex justify-between border-t-tweet-hover  border-t-2 pr-2">
          <div className=" text-btn-primary  py-2 w-full   flex  gap-5  text-xl  border-btn-primary  ">
            <span className=" rounded-full w-8 h-8 mert flex items-center justify-center      ">
              <Media />
            </span>
            <span className=" rounded-full w-8 h-8 mert flex items-center justify-center  ">
              <Gif />
            </span>
            <span className=" rounded-full w-8 h-8 mert flex items-center justify-center ">
              <Question />
            </span>
            <span className=" rounded-full w-8 h-8 mert flex items-center justify-center ">
              <Emoji />
            </span>
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