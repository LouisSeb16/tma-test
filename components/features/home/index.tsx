import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { initInitData } from "@telegram-apps/sdk";

const HomePageComponent = () => {
  // const initData = initInitData();

  return (
    <>
      <div className="w-full h-full">
        <section className="flex flex-col justify-center items-center">
          <div className="h-[80px] w-[80px] rounded-[50%] flex justify-center items-center text-center bg-[#355af1] mb-5">
            <h1 className="text-[35px] font-black">
              {/* {initData?.user?.username ? initData?.user?.username.charAt(0).toUpperCase() : 'T'} */}
              U
            </h1>
          </div>
          {/* <h1 className="text-[20px] font-bold">{initData?.user?.username}</h1> */}
          <h1 className="text-[20px] font-bold">User</h1>
        </section>

        <section className="flex flex-col justify-center items-center mt-5">
          <h1 className="text-[30px] font-bold">
            0 <span className="text-[16px] text-[#ccc]">Points</span>
          </h1>
        </section>

        <Button className="w-full py-[25px] mt-[60px] font-semibold uppercase">
          <Zap strokeWidth={0.75} className="mr-2 text-orange-300" />
          Farm Points
        </Button>
      </div>
    </>
  );
};

export default HomePageComponent;
