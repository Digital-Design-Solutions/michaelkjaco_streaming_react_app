import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./screens";

export const UnAuthenticated = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};