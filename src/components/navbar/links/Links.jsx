"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const { default: Link } = require("next/link");

const links = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "About",
    path: "/about",
  },

  {
    title: "Skills",
    path: "/skills",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <div className="hidden lg:flex lg:items-center lg:gap-x-3">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`min-w-24 p-3 rounded-3xl text-center font-medium hover:bg-white hover:text-black ease-in duration-300 ${
              pathName === link.path && `bg-white text-black`
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <button className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>
      {open && (
        <div className="bg-transparent absolute top-28 right-0 w-1/2 h-[calc(100vh-112px)] flex flex-col items-center justify-center gap-3">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.title}
              className={`min-w-24 p-3 rounded-3xl text-center font-medium hover:bg-white hover:text-black ease-in duration-300 ${
                pathName === link.path && `bg-white text-black`
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
export default Links;
