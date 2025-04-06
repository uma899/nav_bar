// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCssw1rLsCoRTKU8MvhC0CEQk8dBnLCCkQ",
  authDomain: "pushnotification-e2b0d.firebaseapp.com",
  projectId: "pushnotification-e2b0d",
  storageBucket: "pushnotification-e2b0d.firebasestorage.app",
  messagingSenderId: "232807346045",
  appId: "1:232807346045:web:bc49c85d0055dcc250e614",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
