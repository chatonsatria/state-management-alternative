"use client";

import { useBear } from "@/state/zustand/zustand";

const Zustand = () => {
  const bears = useBear((state: any) => state.bears);
  const dodos = useBear((state: any) => state.dodos);

  const addBears = useBear((state: any) => state.addBears);
  const addDodos = useBear((state: any) => state.addDodos);
  return (
    <div className="flex flex-col items-start">
      <h1>{bears} bear around here...</h1>
      <h1>{dodos} dodo around here...</h1>
      <button onClick={addBears}>one bears</button>
      <button onClick={addDodos}>one dodos</button>
    </div>
  );
};

export default Zustand;
