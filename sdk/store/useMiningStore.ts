// store/useMiningStore.ts
import { create } from "zustand";

type MiningState = {
    points: number;
    isMiningAllowed: boolean;
    miningCooldown: number; // Remaining time in seconds
    lastMined: number | null; // Timestamp of last mined time in seconds
    startMining: () => void;
    addPoints: (points: number) => void;
    resetCooldown: () => void;
    checkMiningStatus: () => void; // Checks and syncs the mining status after refresh
};

export const useMiningStore = create<MiningState>((set, get) => ({
    points: typeof window !== "undefined" && Number(localStorage.getItem("points")) || 0,
    isMiningAllowed: typeof window !== "undefined" && localStorage.getItem("isMiningAllowed") === "true", // Get mining status from localStorage
    miningCooldown: 0,
    lastMined: typeof window !== "undefined" && Number(localStorage.getItem("lastMined")) || null,

    startMining: () => {
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        typeof window !== "undefined" && localStorage.setItem("lastMined", currentTime.toString());
        typeof window !== "undefined" && localStorage.setItem("isMiningAllowed", "false");

        set({
            isMiningAllowed: false,
            miningCooldown: 600, // Set cooldown to 10 minutes (600 seconds)
            lastMined: currentTime,
        });
    },

    addPoints: (points: number) => {
        const newPoints = get().points + points;
        typeof window !== "undefined" && localStorage.setItem("points", newPoints.toString()); // Persist points
        set({ points: newPoints });
    },

    resetCooldown: () => {
        set({
            isMiningAllowed: true,
            miningCooldown: 0,
            lastMined: null,
        });
        typeof window !== "undefined" && localStorage.removeItem("lastMined"); // Clear last mined time
        typeof window !== "undefined" && localStorage.setItem("isMiningAllowed", "true");
    },

    checkMiningStatus: () => {
        const lastMined = typeof window !== "undefined" && localStorage.getItem("lastMined");
        const isMiningAllowed = typeof window !== "undefined" && localStorage.getItem("isMiningAllowed") === "true";
        const currentTime = Math.floor(Date.now() / 1000);

        if (lastMined) {
            const elapsedTime = currentTime - Number(lastMined);
            const remainingTime = 600 - elapsedTime; // 600 seconds = 10 minutes

            if (remainingTime <= 0) {
                // Time has elapsed, allow mining again
                set({
                    isMiningAllowed: true,
                    miningCooldown: 0,
                    lastMined: null,
                });
                typeof window !== "undefined" && localStorage.setItem("isMiningAllowed", "true");
            } else {
                // Timer still active, disable mining
                set({
                    isMiningAllowed: false,
                    miningCooldown: remainingTime, // Persist remaining cooldown time
                });
            }
        } else {
            set({ isMiningAllowed });
        }
    },
}));
