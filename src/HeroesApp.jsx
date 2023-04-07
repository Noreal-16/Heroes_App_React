import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";

export const HeroresApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
