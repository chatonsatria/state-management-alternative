import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// atom with storage / local storage
export const authAtom = atomWithStorage(
  "auth",
  JSON.parse(localStorage.getItem("auth")!) || { auth: false, name: "chaton" },
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
