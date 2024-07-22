

import { signOut } from "firebase/auth";
import { auth } from "../firebase-config/firebase";
import { useNavigate } from "react-router-dom"; 
const Logout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem("register"); 
      sessionStorage.removeItem("loginEmail"); 
      console.log("Logout successful");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Logout;

