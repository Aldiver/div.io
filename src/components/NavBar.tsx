import React from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { Buttons } from "./Buttons";

const NavBar: React.FC = () => {
  return (
    <section className="flex justify-center">
      <div
        id="container"
        className="flex w-11/12 justify-between items-center bg-yellow-300"
      >
        <div className="flex items-center gap-5">
          <Logo />
          <NavLinks />
        </div>
        <Buttons />
      </div>
    </section>
  );
};

export default NavBar;
