"use client";

import React from "react";
import { observer } from "mobx-react";
import userStore from "@/state/mobx/userStore";
import { IUserData } from "@/state/types";
import { Login } from "@/state/api";
import Link from "next/link";

const HomePage: React.FC = observer(() => {
  const { user, loginSuccess, userFirstName } = userStore;
  console.log("user", user);

  const handleLogin = async () => {
    const userData: IUserData = await Login("emilys", "emilyspass");
    loginSuccess(userData);
  };

  return (
    <div>
      <h1>User Data</h1>
      <ul>first name {user?.firstName}</ul>
      <button onClick={handleLogin}>Login</button>
      <p>get user: {userFirstName}</p>
      <Link href="/mobx/mobx-2">
        <button className="px-4 py-2 rounded bg-blue-500 mt-4 text-white">
          NEXT
        </button>
      </Link>
    </div>
  );
});

export default HomePage;
