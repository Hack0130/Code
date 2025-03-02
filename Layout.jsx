import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotificationButton from "./components/NotificationButton"; // Import Notification Button

const Layout = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="bg-[#F5F5F9]">
      <Header />

      {/* Notification Button Section */}
      <div className="notification-container">
        <NotificationButton toggleNotifications={() => setShowNotifications(!showNotifications)} />
        {showNotifications && (
          <div className="notifications-panel">
            <p>You have new notifications!</p>
          </div>
        )}
      </div>

      <Outlet /> {/* This renders page content dynamically */}

      <Footer />
    </div>
  );
};

export default Layout;
