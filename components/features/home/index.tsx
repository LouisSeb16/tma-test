"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti"; // Import Confetti component
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWindowSize } from "react-use"; // To adjust confetti size
import { useMiningStore } from "@/sdk/store/useMiningStore";

const HomePageComponent = () => {
  const { width, height } = useWindowSize(); // To make confetti cover full screen
  const {
    points,
    isMiningAllowed,
    miningCooldown,
    startMining,
    addPoints,
    resetCooldown,
    checkMiningStatus,
  } = useMiningStore();

  const [timer, setTimer] = useState(miningCooldown);
  const [isConfettiActive, setIsConfettiActive] = useState(false); // Confetti state

  // Sync mining status and cooldown timer on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      checkMiningStatus();
    }
  }, [checkMiningStatus]);

  // Sync the timer with the miningCooldown from the store
  useEffect(() => {
    setTimer(miningCooldown); // Update timer whenever miningCooldown changes
  }, [miningCooldown]);

  // Timer countdown logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (!isMiningAllowed && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) {
      resetCooldown(); // Reset mining when timer finishes
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMiningAllowed, timer, resetCooldown]);

  const handleMine = () => {
    if (isMiningAllowed) {
      startMining();
      addPoints(500);
      setTimer(600); // Reset the timer to 10 minutes
      setIsConfettiActive(true); // Trigger confetti

      // Stop confetti after a short delay (e.g., 3 seconds)
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="w-full h-full relative">
        {/* Confetti component */}
        {isConfettiActive && <Confetti width={width} height={height} />}

        <section className="flex flex-col justify-center items-center">
          <div className="h-[80px] w-[80px] rounded-[50%] flex justify-center items-center text-center bg-[#355af1] mb-5">
            <h1 className="text-[35px] font-black">U</h1>
          </div>
          <h1 className="text-[20px] font-bold">User</h1>
        </section>

        <section className="flex flex-col justify-center items-center mt-5">
          <h1 className="text-[30px] font-bold">
            {points.toLocaleString()} <span className="text-[16px] text-[#ccc]">Points</span>
          </h1>
        </section>

        <Button
          className={cn(
            "w-full py-[25px] mt-[60px] font-semibold uppercase",
            !isMiningAllowed ? "bg-slate-500 opacity-[0.4]" : ""
          )}
          onClick={handleMine}
          disabled={!isMiningAllowed}
        >
          <Zap strokeWidth={0.75} className="mr-2 text-orange-300" />
          {isMiningAllowed
            ? "Farm Points"
            : `Next in ${Math.floor(timer / 60)}:${timer % 60}`}
        </Button>
      </div>
    </>
  );
};

export default HomePageComponent;
