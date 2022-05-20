import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export const Logout = () => {
  const [user, setUser] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.login(null);
    navigate("/", { replace: true });
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
