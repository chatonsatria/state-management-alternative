import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// atom with storage / local storage
export const authAtom = atomWithStorage(
  "auth",
  (typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("auth") || "null")) || {
    auth: false,
    name: "chaton",
  },
  undefined,
  {
    getOnInit: true,
  }
);

// atom without local storage
const homeAtomData = {
  home: "home",
  banner: "banner",
};
export const homeAtom = atom(homeAtomData);
