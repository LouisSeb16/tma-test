import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HomePageComponent = () => {
  return (
    <>
      <div className="w-full h-full">
        <section className="flex flex-col justify-center items-center">
          <Avatar className="h-[80px] w-[80px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-[20px] font-bold">John Doe</h1>
        </section>

        <section className="flex flex-col justify-center items-center mt-5">
          <h1 className="text-[30px] font-bold">
            3,000 <span className="text-[16px] text-[#ccc]">Points</span>
          </h1>
        </section>

        <Button className="w-full py-[30px] mt-[60px] text-[20px] font-semibold uppercase">
          <Zap strokeWidth={0.75} className="mr-2 text-orange-300" />
          Farm Points
        </Button>
      </div>
    </>
  );
};

export default HomePageComponent;
