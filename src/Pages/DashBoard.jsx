import React from "react";
import { FaHome, FaUsers, FaCogs, FaBoxOpen } from "react-icons/fa";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <a href="/" className="logo cursor-pointer" style={{
          cursor:'pointer'
        }}>Home</a>
        <nav>
          <ul>
            <li><FaHome /> Dashboard</li>
            <li><FaBoxOpen /> Subscriptions</li>
            <li><FaUsers /> All Users</li>
            <li><FaCogs /> Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h2>Welcome to the Dashboard</h2>
        <p>Here you can manage subscriptions, users, and more.</p>


        <Outlet/>
      </main>
    </div>
  );
}
