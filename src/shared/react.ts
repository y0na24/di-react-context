import { Context, createContext, useContext } from "react";

export const useStrictContext = <T>(ctx: Context<T | null>) => {
  const value = useContext(ctx);

  if (value === null) {
    throw new Error("Пустое значение контекста");
  }

  return value;
};

export const createStrictContext = <T>() => {
  return createContext<T | null>(null);
};
