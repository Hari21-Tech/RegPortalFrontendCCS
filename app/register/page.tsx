import { Button } from "@/components/ui/button";
import React from "react";
import Nav from "../_components/Nav";

export default function RegisterPage() {
  return (
    <div className="relative h-screen flex flex-col items-center">
      <div className="absolute inset-0 md:bg-[url('/Vector.png')] bg-[url('/vector2.png')] bg-cover bg-center bg-no-repeat -z-10  " />
      <Nav />

      <div className="absolute bottom-1 flex flex-col space-y-5 min-w-96 pb-20 ">
        <Button size={"xl"}>Join Team</Button>
        <Button size={"xl"}>Create Team</Button>
      </div>
    </div>
  );
}
