"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import {
  IUserCredential,
  IUserData,
  authState,
  baseUserData,
  userCredSelect,
  userCredential,
} from "./state";

const Recoil = () => {
  return (
    <div>
      <AuthenticatedUsers />
      <Link href="/recoil/recoil-2">
        <div className="px-4 py-2 w-fit bg-blue-600 text-white rounded mt-4">
          NEXT
        </div>
      </Link>
    </div>
  );
};

function AuthenticatedUsers() {
  return (
    <div>
      <LoginButton />
      <AuthenticatedUser />
    </div>
  );
}

// function data di update
function LoginButton() {
  const [auth, setAuth] = useRecoilState<IUserData>(authState);
  const [credential, setCredential] =
    useRecoilState<IUserCredential>(userCredential);

  // feth data
  const fetch = async () => {
    const body = {
      username: credential.username,
      password: credential.password,
      expiresInMins: 30, // optional, defaults to 60
    };
    try {
      const resp = await axios.post("https://dummyjson.com/auth/login", body, {
        headers: { "Content-Type": "application/json" },
      });
      if (resp.status == 200) {
        console.log("data res", resp);
        return resp?.data;
      }
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const dataUser = await fetch();
    setAuth(dataUser);
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2 p-6 border rounded m-10 w-fit"
      >
        <label htmlFor="">Username: {credential.username}</label>
        <input
          type="text"
          value={credential.username}
          onChange={(e) =>
            setCredential({
              username: e.target.value,
              password: credential.password,
            })
          }
          className="w-[500px] border"
        />
        <label htmlFor="">Password: {credential.password} </label>
        <input
          type="text"
          value={credential.password}
          onChange={(e) =>
            setCredential({
              username: credential.username,
              password: e.target.value,
            })
          }
          className="w-[500px] border"
        />
        <br />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white w-fit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

function AuthenticatedUser() {
  const user = useRecoilValue(baseUserData); // select value data yang sudah diset selector dengan useRecoilValue
  const userCred = useRecoilValue(userCredSelect); // select value data yang sudah diset selector dengan useRecoilValue

  return (
    <div className="flex flex-row gap-2 items-center">
      {user.image && <Image src={user.image} alt="" width={100} height={100} />}
      <div>
        {user.firstName && (
          <>
            <p>Name: {user.firstName + " " + user.lastName}</p>
            <p>Gender: {user.gender}</p>
          </>
        )}
      </div>
      <div>
        <p>data will send to API</p>
        <p>username - {userCred.username}</p>
        <p>password - {userCred.password}</p>
      </div>
    </div>
  );
}

export default Recoil;
