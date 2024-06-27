"use client";

import { useBears } from "@/state/zustand/zustand";

const Zustand = () => {
  const bears = useBears((state: any) => state.bears);
  const dodos = useBears((state: any) => state.dodos);

  const addBears = useBears((state: any) => state.addBears);
  const addDodos = useBears((state: any) => state.addDodos);
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
