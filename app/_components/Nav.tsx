import { Button } from "@/components/ui/button";
import React from "react";

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between p-4 w-full">
      <img src="/ccs_logo.png" />
      <Button className="bg-accent">Join Now!</Button>
    </nav>
  );
};

export default Nav;
