import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./screens";

export const UnAuthenticated = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
};
