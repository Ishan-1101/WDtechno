import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedin, setLoggedin] = useState(false);

  const handleLogin = () => {
    setLoggedin(true);
  };
  const handleLogout = () => {
    setLoggedin(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedin ? `Logged In` : `Logged Out`}</div>
    </div>
  );
};
