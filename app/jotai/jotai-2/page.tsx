"use client";

import JotaiProvider from "@/state/jotai/provider";
import { authAtom, homeAtom } from "@/state/jotai/atoms";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import Link from "next/link";
import { FC } from "react";

const Jotai: FC<IJotai> = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [home, setHome] = useAtom(homeAtom);
  return (
    <JotaiProvider>
      <div className="flex flex-col justify-start items-start">
        <p>jotai dengan localstorage</p>
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-row gap-4">
            <button
              className="px-4 py-2 w-fit rounded bg-blue-500 text-white"
              onClick={() => setAuth({ auth: true, name: "cha" })}
            >
              true auth
            </button>
            <button
              className="px-4 py-2 w-fit rounded bg-blue-500 text-white"
              onClick={() => setAuth(false)}
            >
              false auth
            </button>
            <button
              className="px-4 py-2 w-fit rounded bg-blue-500 text-white"
              onClick={() => setAuth(RESET)}
            >
              reset with jotai reset
            </button>
          </div>
          <p>{auth.auth ? "true" : "false"}</p>
          <p>{auth.name}</p>
        </div>
        <br />
        <p>jotai tanpa localstorage</p>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="px-4 py-2 w-fit rounded bg-blue-500 text-white"
            onClick={() =>
              setHome({ home: "update home atom", banner: "new banner" })
            }
          >
            update home
          </button>
          <button
            className="px-4 py-2 w-fit rounded bg-blue-500 text-white"
            onClick={() =>
              setHome({ home: "update home atom", banner: "new banner" })
            }
          >
            reset home
          </button>
          <div>
            <p>{home.home}</p>
            <p>{home.banner}</p>
          </div>
        </div>

        <Link href="/jotai">prev page</Link>
        <Link href="/">home page</Link>
      </div>
    </JotaiProvider>
  );
};

interface IJotai {}

export default Jotai;
