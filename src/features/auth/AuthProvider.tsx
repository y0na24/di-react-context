import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createStrictContext, useStrictContext } from "../../shared/react";

type AuthCtxDeps = {
  isUserAuthorized: boolean;
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
};

const AuthCtx = createStrictContext<AuthCtxDeps>();

export const useAuthCtx = () => useStrictContext(AuthCtx);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isUserAuthorized, setIsAuthorized] = useState(
    !!localStorage.getItem("token"),
  );

  return (
    <AuthCtx.Provider
      value={{
        isUserAuthorized,
        setIsAuthorized,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};
