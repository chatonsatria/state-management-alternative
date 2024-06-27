"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const RecoilWrapper = ({ children }: IRecoilWrapper) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

interface IRecoilWrapper {
  children: ReactNode;
}

export default RecoilWrapper;
