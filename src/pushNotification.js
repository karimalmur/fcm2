import firebase from 'firebase';

export const initializeFirebase = () => {
  return firebase.initializeApp({
    messagingSenderId: '695744899438'
  });
}

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token:', token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}
