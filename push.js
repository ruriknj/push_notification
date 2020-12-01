var push = require('web-push');

let vapidKeys = {
  publicKey:
    'BNaP6FcA_Y_hhW3k9Xm3zy6QBytgRj5wvXq_bNI9KHVahNXuLa8janxwvu-dR5gTZpYMmkknL6EmCuC2z-qSDGk',
  privateKey: 'Hb5FgrePuJSzG4qdLGRc5p0F2fb8uO2E-EeGpK1hOFY'
};

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
   endpoint:
    'https://fcm.googleapis.com/fcm/send/fjPCmyVNljk:APA91bH1OkyCE0LjEKzxc0-1e3Ila9x0m0QMRW2OcJBH7MGnuO7be2fwUbk31TXEkdlBJF53gHIk7hlUpS09GcCPUDAJ9-lpBqP04g3lVIGesNHZLp2FPsdlVzhyZtNMsqe5wd1YbvxD',
  expirationTime: null,
  keys: {
    p256dh:
      'BIv9KJr2UOfuPK7hF_m4df5It9sBlPSa2ytaoqseCZR-G_h4NQ86wQNlIRqCAT_iJZCE7RjVGorIb85H0_ZmS2E',
    auth: 'FSZ32MCe7BKJservj0LxLg'
  }
};

push.sendNotification(sub, 'test message');
