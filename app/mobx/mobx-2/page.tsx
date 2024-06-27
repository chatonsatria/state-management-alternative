"use client";

import React from "react";
import { observer } from "mobx-react";
import userStore from "@/state/mobx/userStore";
import { IUserData } from "@/state/types";
import { Login } from "@/state/api";

const HomePage: React.FC = observer(() => {
  const { user, userFirstName } = userStore;
  console.log("user", user);
  console.log("userFirstName", userFirstName);

  return (
    <div>
      <ul>first name {user?.firstName}</ul>
      <p>get user: {userFirstName}</p>
    </div>
  );
});

export default HomePage;
