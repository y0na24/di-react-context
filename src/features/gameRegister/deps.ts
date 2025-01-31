import { ReactNode } from "react";
import { createStrictContext, useStrictContext } from "../../shared/react";

type GameRegisterExternalDeps = {
  isUserAuthorized: boolean;
  renderAuthNotification: (isOpen: boolean, onClose: () => void) => ReactNode;
};

export const GameRegisterDepsCtx =
  createStrictContext<GameRegisterExternalDeps>();

export const useGameRegisterDeps = () => useStrictContext(GameRegisterDepsCtx);
