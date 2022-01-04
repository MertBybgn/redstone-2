import React from "react";
import Button from "./Button/Button";

export default function Image({
  src1,
  src2,
  src3,
  src4,
  setfiles1,
  setfiles2,
  setfiles3,
  setfiles4,
  reset,
}) {
  console.log(src3.length);
  return (
    <div className="flex  flex-wrap gap-3">
      {src1.length > 0 ? (
        <div className="relative">
          <img className="   w-[250px] h-52 " alt="" src={src1} />
          <div className="   absolute top-0 left-0 ">
            {reset && "on" ? (
              <Button themes="Delete">
                <input
                  className="w-full h-full text-lg "
                  type="reset"
                  value="x"
                  onClick={setfiles1}
                />
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}

      {src2.length > 0 ? (
        <div className="relative">
          <img className="   w-[250px] h-52 " alt="" src={src2} />
          <div className="   absolute top-0 left-0 ">
            {reset && "on" ? (
              <Button themes="Delete">
                <input
                  className="w-full h-full text-lg "
                  type="reset"
                  value="x"
                  onClick={setfiles2}
                />
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}

      {src3.length > 0 ? (
        <div className="relative">
          <img className="   w-[250px] h-52 " alt="" src={src3} />
          <div className="   absolute top-0 left-0 ">
            {reset && "on" ? (
              <Button themes="Delete">
                <input
                  className="w-full h-full text-lg "
                  type="reset"
                  value="x"
                  onClick={setfiles3}
                />
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}

      {src4.length > 0 ? (
        <div className="relative">
          <img className="   w-[250px] h-52 " alt="" src={src4} />
          <div className="   absolute top-0 left-0 ">
            {reset && "on" ? (
              <Button themes="Delete">
                <input
                  className="w-full h-full text-lg "
                  type="reset"
                  value="x"
                  onClick={setfiles4}
                />
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
