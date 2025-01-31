import { Button } from "@mui/material";
import { useAuthCtx } from "./AuthProvider";

export const AuthUserButton = () => {
  const { isUserAuthorized, setIsAuthorized } = useAuthCtx();

  const handleToggleAuth = () => {
    if (!isUserAuthorized) {
      localStorage.setItem("token", "randomToken");
      return setIsAuthorized(true);
    }

    localStorage.removeItem("token");
    setIsAuthorized(false);
  };

  return (
    <Button onClick={handleToggleAuth} variant="outlined" color="error">
      {isUserAuthorized ? "Выйти" : "Войти"}
    </Button>
  );
};
