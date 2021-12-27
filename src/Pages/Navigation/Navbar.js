import React from "react";
import Button from "../../components/Button/Button";
import { MENU } from "../../constants/index";
import { useLocation } from "react-router-dom";
import useWindowSize from "../../components/useWindowSize";
export default function Navbar() {
  const router = useLocation().pathname;
  const size = useWindowSize();
  const menus = document.querySelector(".mobile-menu");

  return (
    <div>
      {size.width > 750 ? (
        <nav className="  flex  h-8  ">
          {MENU.map((menu) => {
            const selected = router === menu.path;

            return (
              <Button
                themes="navbar"
                key={menu.key}
                notify={menu.notify}
                selected={selected}
                href={menu.path}
                icons={selected ? menu.iconSelected : menu.icon}
              >
                {menu.title}
              </Button>
            );
          })}
        </nav>
      ) : (
        <div className=" p-5">
          <div className="md:hidden relative  z-50 flex items-center">
            <button
              onClick={
                ("click",
                (e) => {
                  e.preventDefault();
                  menus.classList.toggle("hidden");
                })
              }
              className="outline-none mobile-menu-button"
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className="hidden  z-50   bg-opacity-50 bg-red-400 h-full w-full absolute left-0 top-0    mobile-menu">
            <nav
              className="  bg-orange-500 w-full h-screen flex justify-center  items-center
                 "
            >
              <div>
                {MENU.map((menu) => {
                  const selected = router === menu.path;

                  return (
                    <Button
                      onClick={(event) => {
                        menus.classList.toggle("hidden");
                      }}
                      themes="navbarMobil"
                      key={menu.key}
                      notify={menu.notify}
                      selected={selected}
                      href={menu.path}
                      icons={selected ? menu.iconSelected : menu.icon}
                    >
                      {menu.title}
                    </Button>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
