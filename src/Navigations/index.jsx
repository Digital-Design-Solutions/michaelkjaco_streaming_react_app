import { useContext } from "react";

import { Authenticated } from "./Authenticated";
import { UnAuthenticated } from "./UnAuthenticated";
import { AuthContext } from "../Context/AuthContext";

export default function AppRoutes() {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Authenticated /> : <UnAuthenticated />;
}
