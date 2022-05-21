import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null);

  const handleLogin = () => {
    setUser({
      name: "Ishan Sharma",
      email: "ishan1101sharma@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
          <h4>Username: {user?.name}</h4>
          <h4>Email: {user?.email}</h4>
      </div>
    </div>
  );
};
