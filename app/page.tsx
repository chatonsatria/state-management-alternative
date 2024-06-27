"use client";

import { authAtom, homeAtom } from "@/state/jotai/atoms";
import { useAtom } from "jotai";
import Link from "next/link";

export default function Home() {
  const [auth] = useAtom(authAtom);
  const [home] = useAtom(homeAtom);
  console.log("auth home", auth);
  console.log("home home", home);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
      <Link href="/jotai">
        <button className="px-4 py-2 rounded border bg-blue-600 text-white">
          Jotai
        </button>
      </Link>
      <Link href="/zustand">
        <button className="px-4 py-2 rounded border bg-blue-600 text-white">
          Zustand
        </button>
      </Link>
      <Link href="/recoil">
        <button className="px-4 py-2 rounded border bg-blue-600 text-white">
          Recoil
        </button>
      </Link>
    </main>
  );
}
