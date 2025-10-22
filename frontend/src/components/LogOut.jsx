import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [_, setAuthUser] = useAuth(); // we only need the setter
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Clear the authUser in context
      setAuthUser(null);

      // Remove from localStorage
      localStorage.removeItem("Users");

      toast.success("Logged out successfully");
      navigate("/"); // redirect to home or login
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
