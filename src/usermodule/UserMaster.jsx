import { Link, Outlet } from "react-router-dom";
import "./user.css";

function UserMaster() {
  return (
    <>
      <header className="user-header">
        <h2>User Dashboard</h2>
      </header>

      <section className="user-layout">
        <aside className="user-sidebar">
          <ul>
            <li><Link to="/user">Profile</Link></li>
            <li><Link to="/user/orders">Orders</Link></li>
            <li><Link to="/user/history">History</Link></li>
          </ul>
        </aside>

        <main className="user-content">
          <Outlet />
        </main>
      </section>
       <footer className="user-footer">
        <h2>&copy; 2025</h2>
      </footer>
    </>
  );
}

export default UserMaster;
