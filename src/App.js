import React, { useState } from "react";
import { AuthProvider } from "./utils/auth";
import { Outlet, Link } from "react-router-dom";

//Get Page
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <AuthProvider>
      <HomePage />
      {/* <Outlet /> */}
    </AuthProvider>
  );
};

export default App;
