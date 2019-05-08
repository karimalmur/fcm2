import React from 'react';
import { askForPermissionToReceiveNotifications } from './pushNotification';

const NotificationButton = () => (
  <div>
    <p id="tokenPlaceHolder"></p>
    <button onClick={askForPermission} >
      Click to receive notifications
    </button>
  </div>
);

export const askForPermission = async () => {
  try {
    const token = await askForPermissionToReceiveNotifications()
    document.getElementById("tokenPlaceHolder").innerText = token
  } catch (error) {
    console.error(error);
  }
}

export default NotificationButton;
