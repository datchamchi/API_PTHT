import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

function AppLayout() {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "2rem", marginLeft: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;
