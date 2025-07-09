import { Button } from "@/components/ui/button";
import React from "react";
import CcsLogo from "./CcsLogo";

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between ">
      {/* <img src="/ccs_logo.png" />
       */}
      <CcsLogo />
    </nav>
  );
};

export default Nav;
