import React from "react";

const NotificationButton = ({ toggleNotifications }) => {
  return (
    <button onClick={toggleNotifications} className="notification-btn">
      🔔 Notifications
    </button>
  );
};


export default NotificationButton;
