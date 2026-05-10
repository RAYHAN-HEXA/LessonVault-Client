import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

/**
 * Custom hook to access authentication context
 * @returns {Object} Auth context containing user, loading, and auth methods
 */
const useAuth = () => {
  const authInfo = use(AuthContext);
  if (!authInfo) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return authInfo;
};

export default useAuth;
