import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./screens";

export const Authenticated = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};
