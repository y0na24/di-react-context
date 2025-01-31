import { AuthProvider } from "../../features/auth/AuthProvider";
import { AuthUserButton } from "../../features/auth/AuthUserButton";
import { GameRegisterForm } from "../../features/gameRegister/GameRegisterForm";
import { HomePageProvider } from "./provider";

export const HomePage = () => {
  return (
    <AuthProvider>
      <HomePageProvider>
        <AuthUserButton />
        <GameRegisterForm />
      </HomePageProvider>
    </AuthProvider>
  );
};
