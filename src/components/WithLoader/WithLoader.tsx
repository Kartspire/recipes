import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Loader } from "../Loader";

export const WithLoader = ({ children }: React.PropsWithChildren) => {
  const loading = useAppSelector((state) => state.controls.loaded);

  return loading ? <Loader /> : <div>{children}</div>;
};
