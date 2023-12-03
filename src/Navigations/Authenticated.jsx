import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./screens";

export const Authenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
