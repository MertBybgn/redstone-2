import React from "react";
import { Question, Emoji, Media, Gif } from "../../icons";

export default function SharesFiles({ handleChangeimg }) {
  return (
    <div className=" text-btn-primary  py-2 w-full   flex  gap-2  text-xl  border-btn-primary  ">
      <div className=" mert shares-icon  ">
        <div className="image-upload   ">
          <label htmlFor="file-input" className=" ">
            <Media />
          </label>

          <input
            id="file-input"
            multiple
            onChange={handleChangeimg}
            type="file"
          />
        </div>
      </div>

      <div className=" mert shares-icon  ">
        <div className="image-upload   ">
          <label htmlFor="file-input" className=" ">
            <Gif />
          </label>

          <input id="file-input" type="file" />
        </div>
      </div>

      <div className=" mert shares-icon  ">
        <div className="image-upload   ">
          <label htmlFor="file-input" className=" ">
            <Question />
          </label>

          <input id="file-input" type="file" />
        </div>
      </div>
      <div className=" mert shares-icon  ">
        <div className="image-upload   ">
          <label htmlFor="file-input" className=" ">
            <Emoji />
          </label>

          <input id="file-input" type="file" />
        </div>
      </div>
    </div>
  );
}
