import { ReactNode } from "react";
import { GameRegisterDepsCtx } from "../../features/gameRegister/deps";
import { useAuthCtx } from "../../features/auth/AuthProvider";
import { UnauthorizedUserModal } from "../../features/auth/UnauthorizedUserModal";

export const HomePageProvider = ({ children }: { children: ReactNode }) => {
  const { isUserAuthorized } = useAuthCtx();

  return (
    <GameRegisterDepsCtx.Provider
      value={{
        isUserAuthorized,
        renderAuthNotification: (isOpen: boolean, onClose: () => void) => (
          <UnauthorizedUserModal isOpen={isOpen} onClose={onClose} />
        ),
      }}
    >
      {children}
    </GameRegisterDepsCtx.Provider>
  );
};
