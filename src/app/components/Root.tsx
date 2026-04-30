import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen bg-[#f5ebe0]">
      <Outlet />
    </div>
  );
}
