import Container from "@/components/shared/containers";
import React from "react";

const Nav = () => {
  return (
    <Container className="flex justify-between items-center p-5 fixed top-0 w-full z-30 border bg-[#0b0f1f]">
      <h1 className="font-extrabold text-[20px]">Ni-Zap</h1>
    </Container>
  );
};

export default Nav;
