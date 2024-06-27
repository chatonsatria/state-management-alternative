"use client";

import { authAtom, homeAtom } from "@/jotai/atoms";
import { useAtom } from "jotai";
import Link from "next/link";

export default function Home() {
  const [auth] = useAtom(authAtom);
  const [home] = useAtom(homeAtom);
  console.log("auth home", auth);
  console.log("home home", home);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/jotai">Jotai</Link>
    </main>
  );
}
