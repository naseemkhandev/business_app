"use client";

import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();

  useEffect(() => {
    setMounted(true);
    window.onscroll = () => {
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  return (
    <div
      ref={navbar}
      className={`${
        theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
      } w-full z-50 fixed top-0 left-0 py-4 mb-10`}
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
        <div>
          <h2 className="text-3xl">
            <span className="text-rose-600">N</span>aseem.
          </h2>
        </div>

        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${
              theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-white text-black"
            } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <IconButton
              aria-label="cross"
              className={`${
                theme === "dark" ? "text-white" : ""
              } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </IconButton>
            {["home", "features", "pricing", "testimonial"].map((link) => (
              <li
                key={link}
                className={`${
                  selectedItem === link ? "text-rose-600" : ""
                } capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600`}
                onClick={() => setSelectedItem(link)}
              >
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <FacebookOutlinedIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              <LinkedInIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              <GitHubIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              <InstagramIcon className="cursor-pointer hover:text-rose-600 text-xl" />
            </div>
          </ul>
        </div>

        <div className="flex items-center sm:gap-4 md:gap-2 lg:gap-4">
          <Button
            variant="outlined"
            className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 sm:px-6 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full"
          >
            <Link href={"#pricing"}>Get Started</Link>
          </Button>
          <IconButton aria-label="theme">
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </IconButton>
          <IconButton
            aria-label="menu"
            className={`${theme === "dark" ? "text-white" : ""} md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
