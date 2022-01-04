import React from "react";
import { Link } from "react-router-dom";

const style = {
  theme: {
    navbar:
      " block  justify-center mr-4 rounded-3xl   p-2 flex bg-transparent  text-btn-primary  hover:bg-btn-primary   hover:text-white hover:transition-colors  ",
    navbarMobil:
      " w-3/4  block justify-center mr-4 rounded-3xl  p-2 flex bg-transparent  text-btn-primary  hover:bg-btn-primary   hover:text-white hover:transition-colors  ",
    Delete: "flex w-8   text-btn-primary  h-8  mert rounded-full      ",
    follow:
      " w-[78px] h-8 bg-white block p-2 rounded-3xl hover:bg-follow-btn-hover font-medium flex text-text-color items-center  justify-center  ",

    Tweet:
      " w-[74px] h-8 block  px-4 block  bg-btn-primary  text-white rounded-3xl hover:bg-tweet-hover font-medium flex  items-center  justify-center  ",
  },
};
function BaseLinkBtn({ href, children, ...props }) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
function Navbtn({ href, children, themes, notify, icons, ...props }) {
  return (
    <div className="   ">
      <Link to={href} {...props}>
        <div className="  flex  justify-center items-center ">
          <div className="relative mr-2">
            {notify <= 0 ? null : (
              <span
                id="post"
                className=" w-3  justify-center  text-[9px]  rounded-2xl flex items-center bg-Oranges  text-white"
              >
                {notify}
              </span>
            )}
            <span className=" text-xl"> {icons}</span>
          </div>

          <div className=" ml-3">{children}</div>
        </div>
      </Link>
    </div>
  );
}

function LinkButton({ full = false, children, className, ...props }) {
  const Comps = props.icons ? Navbtn : BaseLinkBtn;

  return (
    <Comps className={className} {...props}>
      {children}
    </Comps>
  );
}
function BaseButton({ children, ...props }) {
  return (
    <button className="  cursor-text" type="button" {...props}>
      {children}
    </button>
  );
}

function Button({ full = false, children, themes, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton;

  return (
    <Comp className={style.theme[themes]} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
