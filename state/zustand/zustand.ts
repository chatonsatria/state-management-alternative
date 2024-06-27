import { create } from "zustand";

export const useBear = create((set) => ({
  bears: 0,
  dodos: 0,
  addDodos: () => set((state: any) => ({ dodos: state.dodos + 1 })),
  addBears: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  removeAllDodos: () => set({ dodos: 0 }),
  updateBears: (newBears: any) => set({ bears: newBears }),
}));

// atau

export type State = {
  bears: number;
  dodos: number;
};

export type Action = {
  addBears: () => void;
  addDodos: () => void;
};

// Create your store, which includes both state and (optionally) actions
export const useBears = create<State & Action>((set) => ({
  bears: 0,
  dodos: 0,
  addBears: () => set((state: State) => ({ bears: state.bears + 1 })),
  addDodos: () => set((state: State) => ({ dodos: state.dodos + 1 })),
}));
